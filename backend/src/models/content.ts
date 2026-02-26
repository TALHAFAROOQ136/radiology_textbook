/**
 * BookContent Model
 *
 * Defines the structure and validation for textbook content entities in the Radiology Textbook Platform
 */

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for book content validation
const BookContentSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  parentId: z.string().uuid().nullable().optional(),
  type: z.enum(['part', 'chapter', 'section', 'subsection', 'appendix']),
  title: z.string().min(1, { message: 'Title is required' }).max(500),
  slug: z.string().min(1, { message: 'Slug is required' }).regex(/^[a-z0-9-]+$/, {
    message: 'Slug must contain only lowercase letters, numbers, and hyphens'
  }),
  content: z.string().min(1, { message: 'Content is required' }),
  orderNumber: z.number().int().min(1, { message: 'Order number must be positive' }),
  partNumber: z.number().int().nullable().optional(),
  chapterNumber: z.number().int().nullable().optional(),
  sectionNumber: z.string().nullable().optional(),
  metadata: z.record(z.unknown()).optional().default({}),
  isPublished: z.boolean().default(true),
  version: z.string().default('1.0.0'),
  language: z.string().length(2).default('en'),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  createdBy: z.string().uuid().nullable().optional(),
  updatedBy: z.string().uuid().nullable().optional(),
  childCount: z.number().int().default(0)
});

// Type inference from Zod schema
export type BookContent = z.infer<typeof BookContentSchema>;

/**
 * BookContent class representing textbook content sections
 */
export class BookContentModel {
  id: string;
  parentId: string | null;
  type: 'part' | 'chapter' | 'section' | 'subsection' | 'appendix';
  title: string;
  slug: string;
  content: string;
  orderNumber: number;
  partNumber: number | null;
  chapterNumber: number | null;
  sectionNumber: string | null;
  metadata: Record<string, unknown>;
  isPublished: boolean;
  version: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string | null;
  updatedBy: string | null;
  childCount: number;

  constructor(data: Partial<BookContent>) {
    const parsedData = BookContentSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.parentId = parsedData.parentId;
    this.type = parsedData.type;
    this.title = parsedData.title;
    this.slug = parsedData.slug;
    this.content = parsedData.content;
    this.orderNumber = parsedData.orderNumber;
    this.partNumber = parsedData.partNumber;
    this.chapterNumber = parsedData.chapterNumber;
    this.sectionNumber = parsedData.sectionNumber;
    this.metadata = parsedData.metadata;
    this.isPublished = parsedData.isPublished;
    this.version = parsedData.version;
    this.language = parsedData.language;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
    this.createdBy = parsedData.createdBy;
    this.updatedBy = parsedData.updatedBy;
    this.childCount = parsedData.childCount;
  }

  /**
   * Validates content data against the schema
   */
  static validate(data: Partial<BookContent>): boolean {
    try {
      BookContentSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates content data and returns detailed error information
   */
  static validateWithErrors(data: Partial<BookContent>): { success: boolean; errors?: string[] } {
    try {
      BookContentSchema.parse(data);
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
   * Updates content information
   */
  update(contentData: Partial<BookContent>): void {
    const updateData = { ...this, ...contentData, updatedAt: new Date() };
    const parsedData = BookContentSchema.parse(updateData);

    this.title = parsedData.title;
    this.content = parsedData.content;
    this.slug = parsedData.slug;
    this.metadata = parsedData.metadata;
    this.isPublished = parsedData.isPublished;
    this.version = parsedData.version;
    this.language = parsedData.language;
    this.updatedAt = parsedData.updatedAt;
    this.updatedBy = parsedData.updatedBy;
  }

  /**
   * Publishes the content
   */
  publish(): void {
    this.isPublished = true;
    this.updatedAt = new Date();
  }

  /**
   * Unpublishes the content
   */
  unpublish(): void {
    this.isPublished = false;
    this.updatedAt = new Date();
  }

  /**
   * Updates content version
   */
  updateVersion(newVersion: string): void {
    this.version = newVersion;
    this.updatedAt = new Date();
  }

  /**
   * Adds metadata to the content
   */
  addMetadata(key: string, value: unknown): void {
    this.metadata[key] = value;
    this.updatedAt = new Date();
  }

  /**
   * Removes metadata from the content
   */
  removeMetadata(key: string): void {
    delete this.metadata[key];
    this.updatedAt = new Date();
  }

  /**
   * Gets content path (e.g., Part 1 > Chapter 2 > Section 3)
   */
  getContentPath(allContents: BookContent[]): string {
    const pathParts: string[] = [this.title];
    let currentParentId = this.parentId;

    while (currentParentId) {
      const parent = allContents.find(c => c.id === currentParentId);
      if (parent) {
        pathParts.unshift(parent.title);
        currentParentId = parent.parentId;
      } else {
        break;
      }
    }

    return pathParts.join(' > ');
  }

  /**
   * Checks if content is a child of another content
   */
  isChildOf(parentId: string): boolean {
    return this.parentId === parentId;
  }

  /**
   * Checks if content is a top-level part
   */
  isTopLevelPart(): boolean {
    return this.type === 'part' && this.parentId === null;
  }

  /**
   * Gets estimated reading time in minutes
   */
  getEstimatedReadingTime(): number {
    // Estimate based on word count (average 200 words per minute)
    const words = this.content.trim().split(/\s+/).length;
    return Math.ceil(words / 200);
  }

  /**
   * Gets content summary (first 100 characters)
   */
  getSummary(): string {
    return this.content.substring(0, 100) + (this.content.length > 100 ? '...' : '');
  }
}

/**
 * ContentTag model for categorizing and organizing content
 */
const ContentTagSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  name: z.string().min(1).max(255),
  category: z.string().min(1).max(100),
  description: z.string().nullable().optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().default(() => new Date())
});

export type ContentTag = z.infer<typeof ContentTagSchema>;

export class ContentTagModel {
  id: string;
  name: string;
  category: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date;

  constructor(data: Partial<ContentTag>) {
    const parsedData = ContentTagSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date()
    });

    this.id = parsedData.id;
    this.name = parsedData.name;
    this.category = parsedData.category;
    this.description = parsedData.description;
    this.isActive = parsedData.isActive;
    this.createdAt = parsedData.createdAt;
  }

  /**
   * Activates the tag
   */
  activate(): void {
    this.isActive = true;
  }

  /**
   * Deactivates the tag
   */
  deactivate(): void {
    this.isActive = false;
  }

  /**
   * Updates tag information
   */
  update(tagData: Partial<ContentTag>): void {
    if (tagData.name !== undefined) this.name = tagData.name;
    if (tagData.category !== undefined) this.category = tagData.category;
    if (tagData.description !== undefined) this.description = tagData.description;
    if (tagData.isActive !== undefined) this.isActive = tagData.isActive;
  }
}

/**
 * ContentTagging model to connect content with tags
 */
const ContentTaggingSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  contentId: z.string().uuid(),
  tagId: z.string().uuid(),
  confidence: z.number().min(0).max(1).default(1.0),
  assignedBy: z.enum(['manual', 'automated']).default('manual'),
  createdAt: z.date().default(() => new Date())
});

export type ContentTagging = z.infer<typeof ContentTaggingSchema>;

export class ContentTaggingModel {
  id: string;
  contentId: string;
  tagId: string;
  confidence: number;
  assignedBy: 'manual' | 'automated';
  createdAt: Date;

  constructor(data: Partial<ContentTagging>) {
    const parsedData = ContentTaggingSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date()
    });

    this.id = parsedData.id;
    this.contentId = parsedData.contentId;
    this.tagId = parsedData.tagId;
    this.confidence = parsedData.confidence;
    this.assignedBy = parsedData.assignedBy;
    this.createdAt = parsedData.createdAt;
  }

  /**
   * Updates the tagging information
   */
  update(taggingData: Partial<ContentTagging>): void {
    if (taggingData.confidence !== undefined) this.confidence = taggingData.confidence;
    if (taggingData.assignedBy !== undefined) this.assignedBy = taggingData.assignedBy;
  }
}

/**
 * ContentSearchResult model for search functionality
 */
export type ContentSearchResult = {
  id: string;
  title: string;
  contentSnippet: string;
  type: string;
  partNumber?: number;
  chapterNumber?: number;
  relevanceScore: number;
  url: string;
};

/**
 * BookContent factory for creating content instances with validation
 */
export class BookContentFactory {
  /**
   * Creates a new book content instance
   */
  static create(contentData: Omit<BookContent, 'id' | 'createdAt' | 'updatedAt'>): BookContentModel {
    return new BookContentModel(contentData);
  }

  /**
   * Creates a new content tag instance
   */
  static createTag(tagData: Omit<ContentTag, 'id' | 'createdAt'>): ContentTagModel {
    return new ContentTagModel(tagData);
  }

  /**
   * Creates a new content tagging instance
   */
  static createTagging(taggingData: Omit<ContentTagging, 'id' | 'createdAt'>): ContentTaggingModel {
    return new ContentTaggingModel(taggingData);
  }

  /**
   * Creates a content item with associated tags
   */
  static createContentWithTags(
    contentData: Omit<BookContent, 'id' | 'createdAt' | 'updatedAt'>,
    tags: string[]
  ): { content: BookContentModel; taggings: ContentTaggingModel[] } {
    const content = BookContentFactory.create(contentData);
    const taggings = tags.map(tagName => {
      // In a real implementation, we would look up the tag by name
      // For now, we'll create a tagging with a placeholder tag ID
      return BookContentFactory.createTagging({
        contentId: content.id,
        tagId: uuidv4(), // Placeholder - would be actual tag ID in real implementation
        confidence: 1.0,
        assignedBy: 'manual'
      });
    });

    return { content, taggings };
  }

  /**
   * Creates a complete content hierarchy (part -> chapters -> sections)
   */
  static createContentHierarchy(
    partData: Omit<BookContent, 'id' | 'parentId' | 'type' | 'createdAt' | 'updatedAt'>,
    chaptersData: Array<Omit<BookContent, 'id' | 'parentId' | 'type' | 'createdAt' | 'updatedAt'>>
  ): { part: BookContentModel; chapters: BookContentModel[] } {
    const part = BookContentFactory.create({
      ...partData,
      type: 'part',
      parentId: null
    });

    const chapters = chaptersData.map((chapterData, index) =>
      BookContentFactory.create({
        ...chapterData,
        type: 'chapter',
        parentId: part.id,
        orderNumber: index + 1
      })
    );

    return { part, chapters };
  }
}