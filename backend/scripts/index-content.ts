/**
 * Content Indexing Script
 *
 * Reads all Markdown chapters from frontend/docs/, chunks them by H2 headings,
 * generates embeddings via OpenAI text-embedding-3-small, and upserts to Qdrant.
 *
 * Run once (or after content updates):
 *   npx ts-node scripts/index-content.ts
 *
 * Prerequisites:
 *   - OPENAI_API_KEY in .env
 *   - QDRANT_URL + QDRANT_API_KEY in .env
 */

import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import OpenAI from 'openai';
import { QdrantClient } from '@qdrant/js-client-rest';

const COLLECTION_NAME = 'radiology_textbook';
const VECTOR_SIZE = 1536;
const BATCH_SIZE = 20;
const MAX_CHUNK_TOKENS = 800; // Approximate — 1 token ≈ 4 chars
const DOCS_DIR = path.resolve(__dirname, '../../frontend/docs');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const qdrant = new QdrantClient({
  url: process.env.QDRANT_URL || 'http://localhost:6333',
  apiKey: process.env.QDRANT_API_KEY || undefined,
});

interface Chunk {
  text: string;
  title: string;
  chapter: string;
  part: string;
  slug: string;
  chunkIndex: number;
  filePath: string;
}

// ─── Frontmatter parser ────────────────────────────────────────────────────

function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
  const meta: Record<string, string> = {};
  if (!content.startsWith('---')) return { meta, body: content };

  const end = content.indexOf('\n---', 3);
  if (end === -1) return { meta, body: content };

  const fm = content.slice(4, end);
  for (const line of fm.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    meta[key] = val;
  }

  return { meta, body: content.slice(end + 4) };
}

// ─── File traversal ────────────────────────────────────────────────────────

function findMarkdownFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(full));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      results.push(full);
    }
  }
  return results;
}

// ─── Chunking ──────────────────────────────────────────────────────────────

function chunkMarkdown(body: string, meta: Record<string, string>, filePath: string): Chunk[] {
  const title = meta.title || meta.sidebar_label || path.basename(filePath, '.md');
  const slug = meta.id || path.basename(filePath, '.md');

  // Derive part/chapter from path: docs/part-3-chest/chapter-01-...
  const rel = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const parts = rel.split('/');
  const partDir = parts[0] || '';
  const partLabel = partDir.replace('part-', 'Part ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const chapterFile = parts[parts.length - 1].replace(/\.mdx?$/, '');
  const chapterLabel = chapterFile.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Split on H2 headings (##)
  const sections = body.split(/(?=^## )/m);
  const chunks: Chunk[] = [];
  let chunkIndex = 0;

  for (const section of sections) {
    const trimmed = section.trim();
    if (trimmed.length < 50) continue; // Skip very short sections

    // If section too long, split further on H3
    if (trimmed.length > MAX_CHUNK_TOKENS * 4) {
      const subsections = trimmed.split(/(?=^### )/m);
      for (const sub of subsections) {
        const subTrimmed = sub.trim();
        if (subTrimmed.length < 50) continue;

        // Hard cap at MAX_CHUNK_TOKENS * 4 chars
        const capped = subTrimmed.slice(0, MAX_CHUNK_TOKENS * 4);
        chunks.push({
          text: capped,
          title,
          chapter: chapterLabel,
          part: partLabel,
          slug,
          chunkIndex: chunkIndex++,
          filePath: rel,
        });
      }
    } else {
      chunks.push({
        text: trimmed,
        title,
        chapter: chapterLabel,
        part: partLabel,
        slug,
        chunkIndex: chunkIndex++,
        filePath: rel,
      });
    }
  }

  // Fallback: if no H2 sections found, use whole body
  if (chunks.length === 0 && body.trim().length > 50) {
    chunks.push({
      text: body.trim().slice(0, MAX_CHUNK_TOKENS * 4),
      title,
      chapter: chapterLabel,
      part: partLabel,
      slug,
      chunkIndex: 0,
      filePath: rel,
    });
  }

  return chunks;
}

// ─── Embedding ─────────────────────────────────────────────────────────────

async function embedBatch(texts: string[]): Promise<number[][]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: texts,
  });
  return response.data.map((d) => d.embedding);
}

// ─── Qdrant setup ──────────────────────────────────────────────────────────

async function ensureCollection(): Promise<void> {
  const { collections } = await qdrant.getCollections();
  const exists = collections.some((c) => c.name === COLLECTION_NAME);
  if (!exists) {
    await qdrant.createCollection(COLLECTION_NAME, {
      vectors: { size: VECTOR_SIZE, distance: 'Cosine' },
    });
    console.log(`✅ Created Qdrant collection '${COLLECTION_NAME}'`);
  } else {
    console.log(`ℹ️  Collection '${COLLECTION_NAME}' already exists`);
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log('🔍 Finding markdown files...');
  const files = findMarkdownFiles(DOCS_DIR);
  console.log(`📄 Found ${files.length} files`);

  console.log('\n📝 Chunking content...');
  const allChunks: Chunk[] = [];
  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { meta, body } = parseFrontmatter(raw);
    const chunks = chunkMarkdown(body, meta, file);
    allChunks.push(...chunks);
  }
  console.log(`✂️  Generated ${allChunks.length} chunks`);

  console.log('\n🔌 Connecting to Qdrant...');
  await ensureCollection();

  console.log('\n🧠 Generating embeddings and indexing...');
  let indexed = 0;
  let pointId = 1;

  for (let i = 0; i < allChunks.length; i += BATCH_SIZE) {
    const batch = allChunks.slice(i, i + BATCH_SIZE);
    const texts = batch.map((c) => `${c.title}\n${c.chapter}\n\n${c.text}`);

    let embeddings: number[][];
    try {
      embeddings = await embedBatch(texts);
    } catch (err) {
      console.error(`❌ Embedding failed for batch at index ${i}:`, err);
      continue;
    }

    const points = batch.map((chunk, j) => ({
      id: pointId++,
      vector: embeddings[j],
      payload: {
        text: chunk.text,
        title: chunk.title,
        chapter: chunk.chapter,
        part: chunk.part,
        slug: chunk.slug,
        chunkIndex: chunk.chunkIndex,
        filePath: chunk.filePath,
      },
    }));

    await qdrant.upsert(COLLECTION_NAME, { points, wait: true });
    indexed += batch.length;

    const pct = Math.round((indexed / allChunks.length) * 100);
    process.stdout.write(`\r  ${pct}% (${indexed}/${allChunks.length} chunks)`);

    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`\n\n✅ Indexing complete! ${indexed} chunks indexed into '${COLLECTION_NAME}'`);
  console.log('🚀 You can now start the backend and use the chatbot.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
