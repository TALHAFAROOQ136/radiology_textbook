import OpenAI from 'openai';
import * as QdrantService from './qdrant-service';
import { Turn } from './conversation-service';
import logger from '../utils/logger';

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

function getOpenAI(): OpenAI {
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openaiClient;
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
  const openai = getOpenAI();

  // 1. Embed the question
  const queryVector = await embedText(question);

  // 2. Retrieve relevant chunks from Qdrant
  const results = await QdrantService.searchSimilar(queryVector, topK);

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
  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    {
      role: 'user',
      content: `Here is relevant textbook content to answer the question:\n\n${contextBlocks}`,
    },
    {
      role: 'assistant',
      content:
        'I have reviewed the textbook context. I will answer based on this material and cite my sources.',
    },
    // Include conversation history
    ...history.map((t) => ({ role: t.role, content: t.content })),
    { role: 'user', content: question },
  ];

  // 5. Generate answer
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
    temperature: 0.2,
    max_tokens: 800,
  });

  const answer = completion.choices[0]?.message?.content ?? 'No response generated.';

  logger.info('RAG query completed', {
    question: question.substring(0, 80),
    sourcesFound: results.length,
    tokensUsed: completion.usage?.total_tokens,
  });

  // 6. Build sources list (deduplicate by chapter)
  const seen = new Set<string>();
  const sources: Source[] = [];
  for (const r of results) {
    const key = `${r.payload.chapter}:${r.payload.chunkIndex}`;
    if (!seen.has(key) && r.score > 0.3) {
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
