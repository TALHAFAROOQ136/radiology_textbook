import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for bookmark validation
const BookmarkSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  userId: z.string().uuid(),
  contentId: z.string().uuid(),
  title: z.string().min(1, { message: 'Title is required' }).max(500),
  description: z.string().nullable().optional(),
  pageNumber: z.number().int().nullable().optional(),
  sectionReference: z.string().nullable().optional(),
  tags: z.array(z.string()).optional().default([]),
  isPrivate: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

// Type inference from Zod schema
export type Bookmark = z.infer<typeof BookmarkSchema>;

/**
 * Bookmark class representing user bookmarks for textbook content
 */
export class BookmarkModel {
  id: string;
  userId: string;
  contentId: string;
  title: string;
  description: string | null;
  pageNumber: number | null;
  sectionReference: string | null;
  tags: string[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<Bookmark>) {
    const parsedData = BookmarkSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.userId = parsedData.userId;
    this.contentId = parsedData.contentId;
    this.title = parsedData.title;
    this.description = parsedData.description || null;
    this.pageNumber = parsedData.pageNumber || null;
    this.sectionReference = parsedData.sectionReference || null;
    this.tags = parsedData.tags;
    this.isPrivate = parsedData.isPrivate;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Validates bookmark data against the schema
   */
  static validate(data: Partial<Bookmark>): boolean {
    try {
      BookmarkSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates bookmark data and returns detailed error information
   */
  static validateWithErrors(data: Partial<Bookmark>): { success: boolean; errors?: string[] } {
    try {
      BookmarkSchema.parse(data);
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
   * Updates bookmark information
   */
  update(bookmarkData: Partial<Bookmark>): void {
    const updateData = { ...this, ...bookmarkData, updatedAt: new Date() };
    const parsedData = BookmarkSchema.parse(updateData);

    this.title = parsedData.title;
    this.description = parsedData.description;
    this.pageNumber = parsedData.pageNumber;
    this.sectionReference = parsedData.sectionReference;
    this.tags = parsedData.tags;
    this.isPrivate = parsedData.isPrivate;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Adds a tag to the bookmark
   */
  addTag(tag: string): void {
    if (!this.tags.includes(tag)) {
      this.tags.push(tag);
      this.updatedAt = new Date();
    }
  }

  /**
   * Removes a tag from the bookmark
   */
  removeTag(tag: string): void {
    this.tags = this.tags.filter(t => t !== tag);
    this.updatedAt = new Date();
  }

  /**
   * Makes the bookmark public
   */
  makePublic(): void {
    this.isPrivate = false;
    this.updatedAt = new Date();
  }

  /**
   * Makes the bookmark private
   */
  makePrivate(): void {
    this.isPrivate = true;
    this.updatedAt = new Date();
  }

  /**
   * Checks if the bookmark is public
   */
  isPublic(): boolean {
    return !this.isPrivate;
  }

  /**
   * Gets bookmark tags as a comma-separated string
   */
  getTagsString(): string {
    return this.tags.join(', ');
  }

  /**
   * Checks if bookmark has a specific tag
   */
  hasTag(tag: string): boolean {
    return this.tags.includes(tag);
  }

  /**
   * Gets a formatted reference for the bookmark
   */
  getFormattedReference(): string {
    if (this.sectionReference) {
      return this.sectionReference;
    } else if (this.pageNumber) {
      return `Page ${this.pageNumber}`;
    } else {
      return 'Unknown location';
    }
  }

  /**
   * Updates the description
   */
  updateDescription(description: string): void {
    this.description = description;
    this.updatedAt = new Date();
  }

  /**
   * Updates the title
   */
  updateTitle(title: string): void {
    this.title = title;
    this.updatedAt = new Date();
  }
}

/**
 * Bookmark factory for creating bookmark instances with validation
 */
export class BookmarkFactory {
  /**
   * Creates a new bookmark instance
   */
  static create(bookmarkData: Omit<Bookmark, 'id' | 'createdAt' | 'updatedAt'>): BookmarkModel {
    return new BookmarkModel(bookmarkData);
  }

  /**
   * Creates a basic bookmark for a user and content
   */
  static createBasic(userId: string, contentId: string, title: string): BookmarkModel {
    return new BookmarkModel({
      userId,
      contentId,
      title,
      description: null
    });
  }

  /**
   * Creates a bookmark with additional details
   */
  static createDetailed(
    userId: string,
    contentId: string,
    title: string,
    description: string | null = null,
    pageNumber: number | null = null,
    sectionReference: string | null = null,
    tags: string[] = []
  ): BookmarkModel {
    return new BookmarkModel({
      userId,
      contentId,
      title,
      description,
      pageNumber,
      sectionReference,
      tags
    });
  }
}