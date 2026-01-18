import { Request, Response } from 'express';
import { contentService } from '../../services/content-service';

/**
 * GET /api/content
 * Get content with pagination and filtering
 */
export const getContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      type,
      partNumber,
      chapterNumber,
      isPublished,
      page = '1',
      limit = '10',
      sortBy = 'orderNumber',
      sortOrder = 'asc'
    } = req.query;

    const filters = {
      type: type ? String(type) : undefined,
      partNumber: partNumber ? Number(partNumber) : undefined,
      chapterNumber: chapterNumber ? Number(chapterNumber) : undefined,
      isPublished: isPublished !== undefined ? String(isPublished).toLowerCase() === 'true' : undefined
    };

    const pagination = {
      page: parseInt(String(page), 10),
      limit: parseInt(String(limit), 10)
    };

    const sort = {
      field: String(sortBy),
      order: String(sortOrder).toUpperCase() as 'ASC' | 'DESC'
    };

    const result = await contentService.getContent(filters, pagination, sort);

    res.status(200).json({
      message: 'Content retrieved successfully',
      data: result.content,
      pagination: result.pagination
    });
  } catch (error) {
    console.error('Get content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/content
 * Create new content
 */
export const createContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { parentId, type, title, slug, content, orderNumber, partNumber, chapterNumber, sectionNumber, metadata, isPublished, language } = req.body;

    // Validate required fields
    if (!type || !title || !slug || content === undefined) {
      res.status(400).json({ error: 'Type, title, slug, and content are required' });
      return;
    }

    // Get user ID from authenticated request
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const newContent = await contentService.createContent({
      parentId: parentId || null,
      type,
      title,
      slug,
      content,
      orderNumber,
      partNumber,
      chapterNumber,
      sectionNumber,
      metadata,
      isPublished: isPublished !== undefined ? isPublished : true,
      language: language || 'en',
      createdBy: userId
    });

    res.status(201).json({
      message: 'Content created successfully',
      content: newContent
    });
  } catch (error) {
    console.error('Create content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * PUT /api/content/:id
 * Update content by ID
 */
export const updateContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Validate content ID
    if (!id) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    // Get user ID from authenticated request
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const updatedContent = await contentService.updateContent(id, {
      ...updateData,
      updatedBy: userId
    });

    res.status(200).json({
      message: 'Content updated successfully',
      content: updatedContent
    });
  } catch (error) {
    console.error('Update content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * DELETE /api/content/:id
 * Delete content by ID
 */
export const deleteContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate content ID
    if (!id) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    await contentService.deleteContent(id);

    res.status(200).json({
      message: 'Content deleted successfully'
    });
  } catch (error) {
    console.error('Delete content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};