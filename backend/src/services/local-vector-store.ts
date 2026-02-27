/**
 * Local File-Based Vector Store
 *
 * Stores vector embeddings in backend/data/vectors.json.
 * Used as a fallback when Qdrant is not configured.
 * Performs cosine similarity search entirely in memory.
 */

import * as fs from 'fs';
import * as path from 'path';
import type { ChunkPayload, SearchResult } from './qdrant-service';

const DATA_FILE = path.resolve(__dirname, '../../data/vectors.json');

interface StoredPoint {
  id: number;
  vector: number[];
  payload: ChunkPayload;
}

let cache: StoredPoint[] | null = null;

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, ma = 0, mb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    ma += a[i] * a[i];
    mb += b[i] * b[i];
  }
  const denom = Math.sqrt(ma) * Math.sqrt(mb);
  return denom === 0 ? 0 : dot / denom;
}

export function isIndexed(): boolean {
  if (!fs.existsSync(DATA_FILE)) return false;
  // File must have at least one vector to be considered indexed
  const points = load();
  return points.length > 0;
}

export function load(): StoredPoint[] {
  if (cache) return cache;
  if (!fs.existsSync(DATA_FILE)) return [];
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  cache = JSON.parse(raw) as StoredPoint[];
  return cache;
}

export function save(points: StoredPoint[]): void {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(points), 'utf-8');
  cache = points;
}

export function count(): number {
  return load().length;
}

export function search(vector: number[], topK = 5): SearchResult[] {
  const points = load();
  if (points.length === 0) return [];

  return points
    .map((p) => ({ id: p.id, score: cosineSimilarity(vector, p.vector), payload: p.payload }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
