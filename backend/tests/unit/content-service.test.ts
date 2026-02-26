import { ContentService } from '../../src/services/content-service';

describe('ContentService', () => {
  let contentService: ContentService;

  beforeEach(() => {
    contentService = new ContentService();
  });

  describe('createContent', () => {
    it('should create a new content item with valid data', async () => {
      const contentData = {
        parentId: null,
        type: 'chapter' as const,
        title: 'Test Chapter',
        slug: 'test-chapter',
        content: 'This is test content for the chapter.',
        orderNumber: 1,
        partNumber: 1,
        chapterNumber: 1,
        createdBy: 'user-123'
      };

      const result = await contentService.createContent(contentData);

      expect(result).toHaveProperty('id');
      expect(result.title).toBe(contentData.title);
      expect(result.slug).toBe(contentData.slug);
      expect(result.content).toBe(contentData.content);
      expect(result.type).toBe(contentData.type);
    });

    it('should throw an error for invalid content data', async () => {
      const invalidContentData = {
        parentId: null,
        type: 'invalid_type' as any,
        title: '', // Empty title should fail validation
        slug: 'test-chapter',
        content: 'This is test content for the chapter.',
        orderNumber: 1,
        createdBy: 'user-123'
      };

      await expect(contentService.createContent(invalidContentData)).rejects.toThrow('Content validation failed');
    });
  });

  describe('getContentById', () => {
    it('should return null for non-existent content', async () => {
      const result = await contentService.getContentById('non-existent-id');

      expect(result).toBeNull();
    });
  });

  describe('getContentBySlug', () => {
    it('should return null for non-existent content slug', async () => {
      const result = await contentService.getContentBySlug('non-existent-slug');

      expect(result).toBeNull();
    });
  });

  describe('updateContent', () => {
    it('should update content properties', async () => {
      // First create a content item
      const contentData = {
        parentId: null,
        type: 'chapter' as const,
        title: 'Original Chapter',
        slug: 'original-chapter',
        content: 'Original content',
        orderNumber: 1,
        createdBy: 'user-123'
      };

      const originalContent = await contentService.createContent(contentData);

      // Update the content
      const updatedContent = await contentService.updateContent(originalContent.id, {
        title: 'Updated Chapter',
        content: 'Updated content'
      });

      expect(updatedContent.title).toBe('Updated Chapter');
      expect(updatedContent.content).toBe('Updated content');
      expect(updatedContent.updatedAt).not.toEqual(updatedContent.createdAt);
    });
  });

  describe('deleteContent', () => {
    it('should return true for successful deletion', async () => {
      const result = await contentService.deleteContent('some-id');

      expect(result).toBe(true);
    });
  });

  describe('getContentByParentId', () => {
    it('should return an empty array for non-existent parent', async () => {
      const result = await contentService.getContentByParentId('non-existent-parent');

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getContentByType', () => {
    it('should return an empty array for any type initially', async () => {
      const result = await contentService.getContentByType('chapter');

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getAllPublishedContent', () => {
    it('should return an empty array initially', async () => {
      const result = await contentService.getAllPublishedContent();

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('publishContent', () => {
    it('should throw an error for non-existent content', async () => {
      await expect(contentService.publishContent('non-existent-id')).rejects.toThrow('Content with ID non-existent-id not found');
    });
  });

  describe('unpublishContent', () => {
    it('should throw an error for non-existent content', async () => {
      await expect(contentService.unpublishContent('non-existent-id')).rejects.toThrow('Content with ID non-existent-id not found');
    });
  });

  describe('createTag', () => {
    it('should create a new content tag', async () => {
      const tagData = {
        name: 'Radiology',
        category: 'Subject',
        description: 'Content related to radiology'
      };

      const result = await contentService.createTag(tagData);

      expect(result).toHaveProperty('id');
      expect(result.name).toBe(tagData.name);
      expect(result.category).toBe(tagData.category);
      expect(result.description).toBe(tagData.description);
    });
  });

  describe('createTagging', () => {
    it('should create a new content tagging relationship', async () => {
      const taggingData = {
        contentId: 'content-123',
        tagId: 'tag-456',
        confidence: 0.9,
        assignedBy: 'manual' as const
      };

      const result = await contentService.createTagging(taggingData);

      expect(result).toHaveProperty('id');
      expect(result.contentId).toBe(taggingData.contentId);
      expect(result.tagId).toBe(taggingData.tagId);
      expect(result.confidence).toBe(taggingData.confidence);
      expect(result.assignedBy).toBe(taggingData.assignedBy);
    });
  });
});