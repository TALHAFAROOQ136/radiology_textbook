import { QdrantClient } from '@qdrant/js-client-rest';
import logger from '../utils/logger';

const COLLECTION_NAME = 'radiology_textbook';
const VECTOR_SIZE = 1536; // text-embedding-3-small

export interface ChunkPayload {
  text: string;
  title: string;
  chapter: string;
  part: string;
  slug: string;
  chunkIndex: number;
  filePath: string;
}

export interface SearchResult {
  id: string | number;
  score: number;
  payload: ChunkPayload;
}

let client: QdrantClient | null = null;

function getClient(): QdrantClient {
  if (!client) {
    const url = process.env.QDRANT_URL || 'http://localhost:6333';
    const apiKey = process.env.QDRANT_API_KEY;
    client = new QdrantClient({ url, apiKey: apiKey || undefined });
  }
  return client;
}

export async function ensureCollection(): Promise<void> {
  const c = getClient();
  const { collections } = await c.getCollections();
  const exists = collections.some((col) => col.name === COLLECTION_NAME);

  if (!exists) {
    await c.createCollection(COLLECTION_NAME, {
      vectors: { size: VECTOR_SIZE, distance: 'Cosine' },
    });
    logger.info(`Qdrant collection '${COLLECTION_NAME}' created`);
  }
}

export async function upsertChunks(
  points: Array<{ id: number; vector: number[]; payload: ChunkPayload }>
): Promise<void> {
  const c = getClient();
  // Cast to any to work around strict union type in @qdrant/js-client-rest typings
  await c.upsert(COLLECTION_NAME, { points: points as any, wait: true });
}

export async function searchSimilar(
  vector: number[],
  topK = 5
): Promise<SearchResult[]> {
  const c = getClient();
  const results = await c.search(COLLECTION_NAME, {
    vector,
    limit: topK,
    with_payload: true,
  });

  return results.map((r) => ({
    id: r.id,
    score: r.score,
    payload: r.payload as unknown as ChunkPayload,
  }));
}

export async function getCollectionInfo(): Promise<{ pointsCount: number }> {
  const c = getClient();
  const info = await c.getCollection(COLLECTION_NAME);
  return { pointsCount: info.points_count ?? 0 };
}
