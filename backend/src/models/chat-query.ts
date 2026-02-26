import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for chat query validation
const ChatQuerySchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(),
  query: z.string().min(1, { message: 'Query is required' }),
  response: z.string().nullable().optional(),
  context: z.record(z.unknown()).optional().default({}),
  sourceDocuments: z.array(z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    relevanceScore: z.number().min(0).max(1),
    url: z.string().url()
  })).optional().default([]),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  isResolved: z.boolean().default(false),
  feedback: z.object({
    rating: z.number().min(1).max(5).nullable().optional(),
    comment: z.string().nullable().optional()
  }).optional().default({ rating: null, comment: null }),
});

// Type inference from Zod schema
export type ChatQuery = z.infer<typeof ChatQuerySchema>;

/**
 * ChatQuery class representing user queries to the AI assistant
 */
export class ChatQueryModel {
  id: string;
  userId: string;
  query: string;
  response: string | null;
  context: Record<string, unknown>;
  sourceDocuments: Array<{
    id: string;
    title: string;
    content: string;
    relevanceScore: number;
    url: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
  isResolved: boolean;
  feedback: {
    rating: number | null;
    comment: string | null;
  };

  constructor(data: Partial<ChatQuery>) {
    const parsedData = ChatQuerySchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.userId = parsedData.userId;
    this.query = parsedData.query;
    this.response = parsedData.response || null;
    this.context = parsedData.context;
    this.sourceDocuments = parsedData.sourceDocuments;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
    this.isResolved = parsedData.isResolved;
    this.feedback = parsedData.feedback;
  }

  /**
   * Validates chat query data against the schema
   */
  static validate(data: Partial<ChatQuery>): boolean {
    try {
      ChatQuerySchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates chat query data and returns detailed error information
   */
  static validateWithErrors(data: Partial<ChatQuery>): { success: boolean; errors?: string[] } {
    try {
      ChatQuerySchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          success: false,
          errors: error.errors.map(e => e.message)
        };
      }
      return { success: false, errors: ['Validation failed'] };
    }
  }

  /**
   * Updates the chat query with a response
   */
  addResponse(response: string): void {
    this.response = response;
    this.updatedAt = new Date();
  }

  /**
   * Marks the query as resolved
   */
  resolve(): void {
    this.isResolved = true;
    this.updatedAt = new Date();
  }

  /**
   * Marks the query as unresolved
   */
  unresolve(): void {
    this.isResolved = false;
    this.updatedAt = new Date();
  }

  /**
   * Adds context to the query
   */
  addContext(key: string, value: unknown): void {
    this.context[key] = value;
    this.updatedAt = new Date();
  }

  /**
   * Adds a source document to the query
   */
  addSourceDocument(doc: {
    id: string;
    title: string;
    content: string;
    relevanceScore: number;
    url: string;
  }): void {
    this.sourceDocuments.push(doc);
    this.updatedAt = new Date();
  }

  /**
   * Adds feedback for the response
   */
  addFeedback(rating: number, comment: string | null = null): void {
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }

    this.feedback = {
      rating,
      comment
    };
    this.updatedAt = new Date();
  }

  /**
   * Clears feedback
   */
  clearFeedback(): void {
    this.feedback = {
      rating: null,
      comment: null
    };
    this.updatedAt = new Date();
  }

  /**
   * Gets the top relevant source documents (sorted by relevance score)
   */
  getTopSources(count: number = 3): Array<{
    id: string;
    title: string;
    content: string;
    relevanceScore: number;
    url: string;
  }> {
    return [...this.sourceDocuments]
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, count);
  }

  /**
   * Checks if the query has a response
   */
  hasResponse(): boolean {
    return this.response !== null;
  }

  /**
   * Checks if the query has been resolved
   */
  isQueryResolved(): boolean {
    return this.isResolved;
  }

  /**
   * Gets the response length
   */
  getResponseLength(): number {
    return this.response ? this.response.length : 0;
  }

  /**
   * Gets the query length
   */
  getQueryLength(): number {
    return this.query.length;
  }

  /**
   * Gets the number of source documents
   */
  getSourceDocumentCount(): number {
    return this.sourceDocuments.length;
  }

  /**
   * Gets the average relevance score of source documents
   */
  getAverageRelevanceScore(): number {
    if (this.sourceDocuments.length === 0) {
      return 0;
    }

    const total = this.sourceDocuments.reduce((sum, doc) => sum + doc.relevanceScore, 0);
    return total / this.sourceDocuments.length;
  }

  /**
   * Updates the query text
   */
  updateQuery(newQuery: string): void {
    if (!newQuery || newQuery.trim().length === 0) {
      throw new Error('Query cannot be empty');
    }
    this.query = newQuery;
    this.updatedAt = new Date();
  }
}

/**
 * ChatQuery factory for creating chat query instances with validation
 */
export class ChatQueryFactory {
  /**
   * Creates a new chat query instance
   */
  static create(queryData: Omit<ChatQuery, 'id' | 'createdAt' | 'updatedAt'>): ChatQueryModel {
    return new ChatQueryModel(queryData);
  }

  /**
   * Creates a basic chat query
   */
  static createBasic(userId: string, query: string): ChatQueryModel {
    return new ChatQueryModel({
      userId,
      query,
      response: null
    });
  }

  /**
   * Creates a chat query with context
   */
  static createWithContext(
    userId: string,
    query: string,
    context: Record<string, unknown>
  ): ChatQueryModel {
    return new ChatQueryModel({
      userId,
      query,
      response: null,
      context
    });
  }

  /**
   * Creates a chat query with a response
   */
  static createWithResponse(
    userId: string,
    query: string,
    response: string,
    sourceDocuments: Array<{
      id: string;
      title: string;
      content: string;
      relevanceScore: number;
      url: string;
    }> = []
  ): ChatQueryModel {
    return new ChatQueryModel({
      userId,
      query,
      response,
      sourceDocuments,
      isResolved: true
    });
  }
}