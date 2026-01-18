import { BookContent } from '../models/content';

/**
 * ContentIndexService for efficient search and retrieval
 */
export class ContentIndexService {
  private contentIndex: Map<string, BookContent> = new Map();
  private searchIndex: Map<string, string[]> = new Map(); // term -> contentIds mapping
  private titleIndex: Map<string, string[]> = new Map(); // term -> contentIds mapping for titles
  private slugIndex: Map<string, string> = new Map(); // slug -> contentId mapping

  /**
   * Indexes a content item for search
   */
  async indexContent(content: BookContent): Promise<void> {
    // Store content in main index
    this.contentIndex.set(content.id, content);

    // Index by slug
    this.slugIndex.set(content.slug, content.id);

    // Index content text for search
    this.indexContentText(content);

    // Index title separately for title-based search
    this.indexTitle(content);
  }

  /**
   * Indexes content text for search
   */
  private indexContentText(content: BookContent): void {
    // Extract searchable terms from content
    const text = `${content.title} ${content.content} ${JSON.stringify(content.metadata)}`;
    const terms = this.extractTerms(text);

    for (const term of terms) {
      if (!this.searchIndex.has(term)) {
        this.searchIndex.set(term, []);
      }
      const contentIds = this.searchIndex.get(term)!;
      if (!contentIds.includes(content.id)) {
        contentIds.push(content.id);
      }
    }
  }

  /**
   * Indexes content title for search
   */
  private indexTitle(content: BookContent): void {
    const terms = this.extractTerms(content.title);
    for (const term of terms) {
      if (!this.titleIndex.has(term)) {
        this.titleIndex.set(term, []);
      }
      const contentIds = this.titleIndex.get(term)!;
      if (!contentIds.includes(content.id)) {
        contentIds.push(content.id);
      }
    }
  }

  /**
   * Removes content from index
   */
  async removeFromIndex(contentId: string): Promise<void> {
    const content = this.contentIndex.get(contentId);
    if (!content) {
      return;
    }

    // Remove from main index
    this.contentIndex.delete(contentId);

    // Remove from slug index
    this.slugIndex.forEach((id, slug) => {
      if (id === contentId) {
        this.slugIndex.delete(slug);
      }
    });

    // Remove from search index
    this.searchIndex.forEach((contentIds, term) => {
      const updatedIds = contentIds.filter(id => id !== contentId);
      if (updatedIds.length === 0) {
        this.searchIndex.delete(term);
      } else {
        this.searchIndex.set(term, updatedIds);
      }
    });

    // Remove from title index
    this.titleIndex.forEach((contentIds, term) => {
      const updatedIds = contentIds.filter(id => id !== contentId);
      if (updatedIds.length === 0) {
        this.titleIndex.delete(term);
      } else {
        this.titleIndex.set(term, updatedIds);
      }
    });
  }

  /**
   * Searches for content by query
   */
  async search(query: string, limit: number = 10): Promise<BookContent[]> {
    if (!query) {
      return [];
    }

    const terms = this.extractTerms(query);
    const matchedContentIds = new Set<string>();
    const contentScores = new Map<string, number>();

    // Search in content text
    for (const term of terms) {
      const contentIds = this.searchIndex.get(term) || [];
      for (const contentId of contentIds) {
        matchedContentIds.add(contentId);

        // Calculate score based on term frequency
        const currentScore = contentScores.get(contentId) || 0;
        contentScores.set(contentId, currentScore + 1);
      }
    }

    // Boost score for title matches
    for (const term of terms) {
      const contentIds = this.titleIndex.get(term) || [];
      for (const contentId of contentIds) {
        const currentScore = contentScores.get(contentId) || 0;
        contentScores.set(contentId, currentScore + 2); // Higher weight for title matches
      }
    }

    // Convert to array and sort by score
    const results = Array.from(matchedContentIds)
      .map(id => ({ id, score: contentScores.get(id) || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => this.contentIndex.get(item.id))
      .filter(Boolean) as BookContent[];

    return results;
  }

  /**
   * Finds content by slug
   */
  async findBySlug(slug: string): Promise<BookContent | null> {
    const contentId = this.slugIndex.get(slug);
    if (!contentId) {
      return null;
    }

    const content = this.contentIndex.get(contentId);
    return content || null;
  }

  /**
   * Gets all indexed content IDs
   */
  getAllContentIds(): string[] {
    return Array.from(this.contentIndex.keys());
  }

  /**
   * Gets content by ID
   */
  async getById(id: string): Promise<BookContent | null> {
    return this.contentIndex.get(id) || null;
  }

  /**
   * Gets content by multiple IDs
   */
  async getByIds(ids: string[]): Promise<BookContent[]> {
    return ids
      .map(id => this.contentIndex.get(id))
      .filter(Boolean) as BookContent[];
  }

  /**
   * Extracts searchable terms from text
   */
  private extractTerms(text: string): string[] {
    if (!text) {
      return [];
    }

    // Convert to lowercase and extract words
    const terms = text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
      .split(/\s+/)
      .filter(term => term.length > 2) // Only include terms longer than 2 characters
      .filter(term => !this.isCommonStopWord(term)); // Remove common stop words

    // Return unique terms
    return [...new Set(terms)];
  }

  /**
   * Checks if a term is a common stop word
   */
  private isCommonStopWord(term: string): boolean {
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
      'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
      'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
      'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those'
    ]);
    return stopWords.has(term);
  }

  /**
   * Clears the entire index
   */
  clearIndex(): void {
    this.contentIndex.clear();
    this.searchIndex.clear();
    this.titleIndex.clear();
    this.slugIndex.clear();
  }

  /**
   * Gets index statistics
   */
  getIndexStats(): { totalContent: number; totalTerms: number; memoryUsed: number } {
    return {
      totalContent: this.contentIndex.size,
      totalTerms: this.searchIndex.size + this.titleIndex.size,
      memoryUsed: this.calculateMemoryUsage()
    };
  }

  /**
   * Calculates approximate memory usage
   */
  private calculateMemoryUsage(): number {
    // This is a rough estimation of memory usage
    let size = 0;

    // Estimate size of content index
    for (const [key, value] of this.contentIndex) {
      size += key.length * 2; // UTF-16 string
      // Estimate size of content object
      size += JSON.stringify(value).length;
    }

    // Estimate size of search index
    for (const [key, value] of this.searchIndex) {
      size += key.length * 2; // UTF-16 string
      size += value.length * 20; // Rough estimate for array of IDs
    }

    // Estimate size of title index
    for (const [key, value] of this.titleIndex) {
      size += key.length * 2; // UTF-16 string
      size += value.length * 20; // Rough estimate for array of IDs
    }

    // Estimate size of slug index
    for (const [key, value] of this.slugIndex) {
      size += key.length * 2; // UTF-16 string
      size += value.length * 2; // UTF-16 string
    }

    return size;
  }

  /**
   * Rebuilds the entire index from a list of content
   */
  async rebuildIndex(contents: BookContent[]): Promise<void> {
    this.clearIndex();

    for (const content of contents) {
      await this.indexContent(content);
    }
  }
}

// Singleton instance
export const contentIndexService = new ContentIndexService();