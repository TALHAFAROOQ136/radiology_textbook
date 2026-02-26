import { Request, Response } from 'express';
import { contentService } from '../../services/content-service';

/**
 * GET /api/content/hierarchy/:contentId
 * Get content hierarchy starting from a specific content item
 */
export const getContentHierarchy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { contentId } = req.params;

    // Validate content ID
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    const hierarchy = await contentService.getContentHierarchy(contentId);

    res.status(200).json({
      message: 'Content hierarchy retrieved successfully',
      data: hierarchy
    });
  } catch (error) {
    console.error('Get content hierarchy error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/content/outline
 * Get complete textbook outline
 */
export const getTextbookOutline = async (req: Request, res: Response): Promise<void> => {
  try {
    const outline = await contentService.getTextbookOutline();

    res.status(200).json({
      message: 'Textbook outline retrieved successfully',
      data: outline
    });
  } catch (error) {
    console.error('Get textbook outline error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/content/outline/:partNumber
 * Get outline for a specific part
 */
export const getPartOutline = async (req: Request, res: Response): Promise<void> => {
  try {
    const { partNumber } = req.params;

    // Validate part number
    const partNum = parseInt(partNumber, 10);
    if (isNaN(partNum) || partNum < 1) {
      res.status(400).json({ error: 'Valid part number is required' });
      return;
    }

    const outline = await contentService.getPartOutline(partNum);

    res.status(200).json({
      message: `Outline for Part ${partNum} retrieved successfully`,
      data: outline
    });
  } catch (error) {
    console.error('Get part outline error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/content/outline/:partNumber/:chapterNumber
 * Get outline for a specific chapter
 */
export const getChapterOutline = async (req: Request, res: Response): Promise<void> => {
  try {
    const { partNumber, chapterNumber } = req.params;

    // Validate part and chapter numbers
    const partNum = parseInt(partNumber, 10);
    const chapNum = parseInt(chapterNumber, 10);

    if (isNaN(partNum) || partNum < 1) {
      res.status(400).json({ error: 'Valid part number is required' });
      return;
    }

    if (isNaN(chapNum) || chapNum < 1) {
      res.status(400).json({ error: 'Valid chapter number is required' });
      return;
    }

    const outline = await contentService.getChapterOutline(partNum, chapNum);

    res.status(200).json({
      message: `Outline for Part ${partNum}, Chapter ${chapNum} retrieved successfully`,
      data: outline
    });
  } catch (error) {
    console.error('Get chapter outline error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};