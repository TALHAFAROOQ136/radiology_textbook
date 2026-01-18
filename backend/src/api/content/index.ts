import { Request, Response } from 'express';
import { contentService } from '../../services/content-service';
import { AuthMiddleware } from '../../middleware/auth-middleware';

/**
 * GET /api/content/:id
 * Get content by ID
 */
export const getContentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Get content by ID
    const content = await contentService.getContentById(id);

    if (!content) {
      res.status(404).json({ error: 'Content not found' });
      return;
    }

    res.status(200).json({
      message: 'Content retrieved successfully',
      content
    });
  } catch (error) {
    console.error('Get content by ID error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/slug/:slug
 * Get content by slug
 */
export const getContentBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    // Get content by slug
    const content = await contentService.getContentBySlug(slug);

    if (!content) {
      res.status(404).json({ error: 'Content not found' });
      return;
    }

    res.status(200).json({
      message: 'Content retrieved successfully',
      content
    });
  } catch (error) {
    console.error('Get content by slug error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/type/:type
 * Get content by type
 */
export const getContentByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.params;

    // Validate content type
    const validTypes = ['part', 'chapter', 'section', 'subsection', 'appendix'];
    if (!validTypes.includes(type)) {
      res.status(400).json({ error: 'Invalid content type' });
      return;
    }

    // Get content by type
    const contentList = await contentService.getContentByType(type as any);

    res.status(200).json({
      message: 'Content retrieved successfully',
      content: contentList
    });
  } catch (error) {
    console.error('Get content by type error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/parent/:parentId
 * Get content by parent ID
 */
export const getContentByParent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { parentId } = req.params;

    // Get content by parent ID
    const contentList = await contentService.getContentByParentId(parentId);

    res.status(200).json({
      message: 'Content retrieved successfully',
      content: contentList
    });
  } catch (error) {
    console.error('Get content by parent error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/published
 * Get all published content
 */
export const getAllPublishedContent = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get all published content
    const contentList = await contentService.getAllPublishedContent();

    res.status(200).json({
      message: 'Published content retrieved successfully',
      content: contentList
    });
  } catch (error) {
    console.error('Get all published content error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/search
 * Search content by query
 */
export const searchContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(400).json({ error: 'Search query is required' });
      return;
    }

    // Search content
    const contentList = await contentService.searchContent(q);

    res.status(200).json({
      message: 'Search completed successfully',
      query: q,
      content: contentList
    });
  } catch (error) {
    console.error('Search content error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * GET /api/content/stats
 * Get content statistics
 */
export const getContentStats = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get content stats
    const stats = await contentService.getContentStats();

    res.status(200).json({
      message: 'Content stats retrieved successfully',
      stats
    });
  } catch (error) {
    console.error('Get content stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * POST /api/content/hierarchy/:rootId
 * Get content hierarchy starting from root content
 */
export const getContentHierarchy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rootId } = req.params;

    // Get content hierarchy
    const contentHierarchy = await contentService.getContentHierarchy(rootId);

    res.status(200).json({
      message: 'Content hierarchy retrieved successfully',
      content: contentHierarchy
    });
  } catch (error) {
    console.error('Get content hierarchy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * PUT /api/content/:id/publish
 * Publish content
 */
export const publishContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Check authentication
    const userId = AuthMiddleware.getUserId(req as any);
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // Publish content
    const content = await contentService.publishContent(id);

    res.status(200).json({
      message: 'Content published successfully',
      content
    });
  } catch (error) {
    console.error('Publish content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * PUT /api/content/:id/unpublish
 * Unpublish content
 */
export const unpublishContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Check authentication
    const userId = AuthMiddleware.getUserId(req as any);
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // Unpublish content
    const content = await contentService.unpublishContent(id);

    res.status(200).json({
      message: 'Content unpublished successfully',
      content
    });
  } catch (error) {
    console.error('Unpublish content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};