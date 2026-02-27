/**
 * Keyword Search (BM25-lite)
 *
 * Zero-cost retrieval fallback — no embeddings needed.
 * Reads all markdown chunks from frontend/docs/ and scores them
 * against a query using token overlap + TF weighting.
 *
 * Loaded lazily on first call and cached in memory.
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ChunkPayload, SearchResult } from './qdrant-service';

const DOCS_DIR = path.resolve(__dirname, '../../../frontend/docs');
const MAX_CHUNK_CHARS = 3000;

interface InMemoryChunk {
  id: number;
  payload: ChunkPayload;
  tokens: Set<string>;
  tokenFreq: Map<string, number>;
}

let chunks: InMemoryChunk[] | null = null;

// ─── Tokenizer ─────────────────────────────────────────────────────────────

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

// ─── File helpers ──────────────────────────────────────────────────────────

function findMarkdownFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...findMarkdownFiles(full));
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) results.push(full);
  }
  return results;
}

function parseFrontmatter(content: string): { meta: Record<string, string>; body: string } {
  const meta: Record<string, string> = {};
  if (!content.startsWith('---')) return { meta, body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { meta, body: content };
  const fm = content.slice(4, end);
  for (const line of fm.split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
  }
  return { meta, body: content.slice(end + 4) };
}

// ─── Indexing ──────────────────────────────────────────────────────────────

function buildIndex(): InMemoryChunk[] {
  const files = findMarkdownFiles(DOCS_DIR);
  const result: InMemoryChunk[] = [];
  let id = 1;

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { meta, body } = parseFrontmatter(raw);

    const rel = path.relative(DOCS_DIR, file).replace(/\\/g, '/');
    const parts = rel.split('/');
    const partDir = parts[0] || '';
    const partLabel = partDir.replace('part-', 'Part ').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const chapterFile = parts[parts.length - 1].replace(/\.mdx?$/, '');
    const chapterLabel = chapterFile.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const title = meta.title || meta.sidebar_label || chapterFile;
    const slug = meta.id || chapterFile;

    // Split on H2 sections
    const sections = body.split(/(?=^## )/m);
    for (const section of sections) {
      const text = section.trim();
      if (text.length < 50) continue;
      const capped = text.slice(0, MAX_CHUNK_CHARS);
      const toks = tokenize(capped);
      const freq = new Map<string, number>();
      for (const t of toks) freq.set(t, (freq.get(t) ?? 0) + 1);

      result.push({
        id: id++,
        payload: { text: capped, title, chapter: chapterLabel, part: partLabel, slug, chunkIndex: id, filePath: rel },
        tokens: new Set(toks),
        tokenFreq: freq,
      });
    }

    // Fallback for files with no H2
    if (sections.length <= 1 && body.trim().length > 50) {
      const text = body.trim().slice(0, MAX_CHUNK_CHARS);
      const toks = tokenize(text);
      const freq = new Map<string, number>();
      for (const t of toks) freq.set(t, (freq.get(t) ?? 0) + 1);
      result.push({
        id: id++,
        payload: { text, title, chapter: chapterLabel, part: partLabel, slug, chunkIndex: 0, filePath: rel },
        tokens: new Set(toks),
        tokenFreq: freq,
      });
    }
  }

  return result;
}

function getChunks(): InMemoryChunk[] {
  if (!chunks) chunks = buildIndex();
  return chunks;
}

// ─── BM25-lite scoring ──────────────────────────────────────────────────────

const K1 = 1.5;
const B = 0.75;

export function search(query: string, topK = 5): SearchResult[] {
  const allChunks = getChunks();
  if (allChunks.length === 0) return [];

  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  const N = allChunks.length;
  const avgLen = allChunks.reduce((s, c) => s + c.tokenFreq.size, 0) / N;

  // IDF for each query token
  const idf = new Map<string, number>();
  for (const qt of queryTokens) {
    const df = allChunks.filter((c) => c.tokens.has(qt)).length;
    idf.set(qt, Math.log((N - df + 0.5) / (df + 0.5) + 1));
  }

  const scored = allChunks.map((chunk) => {
    const dl = chunk.tokenFreq.size;
    let score = 0;
    for (const qt of queryTokens) {
      const tf = chunk.tokenFreq.get(qt) ?? 0;
      if (tf === 0) continue;
      const termScore =
        (idf.get(qt) ?? 0) *
        ((tf * (K1 + 1)) / (tf + K1 * (1 - B + B * (dl / avgLen))));
      score += termScore;
    }
    return { id: chunk.id, score, payload: chunk.payload };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

export function indexSize(): number {
  return getChunks().length;
}
