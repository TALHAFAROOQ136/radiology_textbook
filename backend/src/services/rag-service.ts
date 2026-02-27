import OpenAI from 'openai';
import Groq from 'groq-sdk';
import * as QdrantService from './qdrant-service';
import * as LocalVectorStore from './local-vector-store';
import * as KeywordSearch from './keyword-search';
import { Turn } from './conversation-service';
import logger from '../utils/logger';

/** Returns true when QDRANT_URL points to a real cloud cluster */
function useQdrant(): boolean {
  const url = process.env.QDRANT_URL || '';
  return url.length > 0 && !url.includes('your-cluster-id') && !url.includes('localhost');
}

/** Returns 'groq' | 'openai' based on available credentials */
function llmProvider(): 'groq' | 'openai' {
  return process.env.GROQ_API_KEY ? 'groq' : 'openai';
}

/**
 * Retrieval strategy:
 *   - Qdrant (semantic)  → when QDRANT_URL is a real cloud URL
 *   - Local file store   → when vectors.json exists
 *   - Keyword search     → always-available fallback (no embeddings needed)
 */
function retrievalMode(): 'qdrant' | 'local' | 'keyword' {
  if (useQdrant()) return 'qdrant';
  if (LocalVectorStore.isIndexed()) return 'local';
  return 'keyword';
}

export interface Source {
  title: string;
  chapter: string;
  part: string;
  text: string;
  slug: string;
}

export interface RagResult {
  answer: string;
  sources: Source[];
}

const SYSTEM_PROMPT = `You are a radiology education assistant for medical students. You answer questions based exclusively on the provided textbook context.

Guidelines:
- Answer clearly and accurately using only the provided context
- Always cite the specific chapter/section your answer comes from
- If the answer is not in the provided context, say: "This topic isn't covered in the sections I was able to retrieve from the textbook. Please consult your instructor or additional resources."
- Use medical terminology appropriate for medical students
- Structure longer answers with bullet points or numbered steps when helpful
- When discussing imaging findings, reference modality (X-ray, CT, MRI, ultrasound) explicitly`;

let openaiClient: OpenAI | null = null;
let groqClient: Groq | null = null;

function getOpenAI(): OpenAI {
  if (!openaiClient) openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return openaiClient;
}

function getGroq(): Groq {
  if (!groqClient) groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  return groqClient;
}

export async function embedText(text: string): Promise<number[]> {
  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

export async function query(
  question: string,
  history: Turn[],
  topK = 5
): Promise<RagResult> {
  const mode = retrievalMode();
  const provider = llmProvider();

  logger.info(`RAG: retrieval=${mode} llm=${provider}`);

  // 1. Retrieve relevant chunks
  let results: Awaited<ReturnType<typeof QdrantService.searchSimilar>>;

  if (mode === 'qdrant') {
    const queryVector = await embedText(question);
    results = await QdrantService.searchSimilar(queryVector, topK);
  } else if (mode === 'local') {
    const queryVector = await embedText(question);
    results = LocalVectorStore.search(queryVector, topK);
  } else {
    // keyword — no embeddings needed
    results = KeywordSearch.search(question, topK);
  }

  if (results.length === 0) {
    return {
      answer:
        "I couldn't find relevant information in the textbook. Please try rephrasing your question.",
      sources: [],
    };
  }

  // 3. Build context from retrieved chunks
  const contextBlocks = results
    .map(
      (r, i) =>
        `[Source ${i + 1}: ${r.payload.title} — ${r.payload.chapter}]\n${r.payload.text}`
    )
    .join('\n\n---\n\n');

  // 4. Build messages array
  type ChatMsg = { role: 'system' | 'user' | 'assistant'; content: string };
  const messages: ChatMsg[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    {
      role: 'user',
      content: `Here is relevant textbook content to answer the question:\n\n${contextBlocks}`,
    },
    {
      role: 'assistant',
      content: 'I have reviewed the textbook context. I will answer based on this material and cite my sources.',
    },
    ...history.map((t) => ({ role: t.role, content: t.content })),
    { role: 'user', content: question },
  ];

  // 5. Generate answer (Groq preferred; fallback to OpenAI; fallback to keyword excerpts)
  let answer: string;

  try {
    if (provider === 'groq') {
      const completion = await getGroq().chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.2,
        max_tokens: 800,
      });
      answer = completion.choices[0]?.message?.content ?? 'No response generated.';
      logger.info('RAG query completed (Groq)', { question: question.substring(0, 80), sourcesFound: results.length });
    } else {
      const completion = await getOpenAI().chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.2,
        max_tokens: 800,
      });
      answer = completion.choices[0]?.message?.content ?? 'No response generated.';
      logger.info('RAG query completed (OpenAI)', {
        question: question.substring(0, 80),
        sourcesFound: results.length,
        tokensUsed: completion.usage?.total_tokens,
      });
    }
  } catch (llmError) {
    // LLM unavailable — return formatted excerpts from keyword search
    logger.warn('LLM generation failed, returning keyword excerpts', {
      error: llmError instanceof Error ? llmError.message : String(llmError),
    });
    const excerpts = results
      .slice(0, 3)
      .map((r, i) => `**${i + 1}. ${r.payload.title} — ${r.payload.chapter}**\n${r.payload.text.substring(0, 400).trimEnd()}…`)
      .join('\n\n');
    answer = `Here are the most relevant sections from the textbook for your question:\n\n${excerpts}\n\n---\n*Note: AI-generated synthesis is temporarily unavailable. To enable it, add a free [Groq API key](https://console.groq.com) to \`GROQ_API_KEY\` in \`.env\` and restart the server.*`;
  }

  // 6. Build sources list (deduplicate by chapter)
  // Use score > 0 for keyword mode (BM25 scores aren't 0-1), > 0.3 for semantic modes
  const scoreThreshold = mode === 'keyword' ? 0 : 0.3;
  const seen = new Set<string>();
  const sources: Source[] = [];
  for (const r of results) {
    const key = `${r.payload.chapter}:${r.payload.chunkIndex}`;
    if (!seen.has(key) && r.score > scoreThreshold) {
      seen.add(key);
      sources.push({
        title: r.payload.title,
        chapter: r.payload.chapter,
        part: r.payload.part,
        text: r.payload.text.substring(0, 200).trimEnd() + '…',
        slug: r.payload.slug,
      });
    }
  }

  return { answer, sources };
}
