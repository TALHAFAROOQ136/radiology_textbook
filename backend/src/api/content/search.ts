import { Request, Response } from 'express';
import { contentService } from '../../services/content-service';

/**
 * GET /api/content/search
 * Search content by query
 */
export const searchContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { q, type, tags, limit = '10', page = '1' } = req.query;

    // Validate query parameter
    if (!q || String(q).trim().length === 0) {
      res.status(400).json({ error: 'Search query (q) is required' });
      return;
    }

    const searchParams = {
      query: String(q).trim(),
      type: type ? String(type) : undefined,
      tags: tags ? String(tags).split(',') : undefined,
      limit: parseInt(String(limit), 10),
      page: parseInt(String(page), 10)
    };

    const results = await contentService.searchContent(searchParams);

    res.status(200).json({
      message: 'Search completed successfully',
      data: results.items,
      pagination: results.pagination,
      query: searchParams.query,
      totalResults: results.totalResults
    });
  } catch (error) {
    console.error('Search content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/content/tags
 * Get all content tags
 */
export const getContentTags = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, limit = '50', page = '1' } = req.query;

    const tagParams = {
      category: category ? String(category) : undefined,
      limit: parseInt(String(limit), 10),
      page: parseInt(String(page), 10)
    };

    const results = await contentService.getContentTags(tagParams);

    res.status(200).json({
      message: 'Content tags retrieved successfully',
      data: results.tags,
      pagination: results.pagination
    });
  } catch (error) {
    console.error('Get content tags error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/content/:contentId/tags
 * Add tags to content
 */
export const addTagsToContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { contentId } = req.params;
    const { tags } = req.body;

    // Validate parameters
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      res.status(400).json({ error: 'Tags array is required' });
      return;
    }

    // Get user ID from authenticated request
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const result = await contentService.addTagsToContent(contentId, tags, userId);

    res.status(200).json({
      message: 'Tags added to content successfully',
      data: result
    });
  } catch (error) {
    console.error('Add tags to content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/content/:contentId/tags
 * Get tags for specific content
 */
export const getContentTagsByContentId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { contentId } = req.params;

    // Validate content ID
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    const tags = await contentService.getContentTagsByContentId(contentId);

    res.status(200).json({
      message: 'Content tags retrieved successfully',
      data: tags
    });
  } catch (error) {
    console.error('Get content tags by content ID error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};