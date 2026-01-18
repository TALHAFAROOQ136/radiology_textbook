import { Request, Response } from 'express';
import { progressService } from '../../services/progress-service';

/**
 * GET /api/user/progress
 * Get user's learning progress
 */
export const getUserProgress = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // Get query parameters for filtering
    const { contentId, status, limit = '50', offset = '0' } = req.query;

    const filters = {
      contentId: contentId ? String(contentId) : undefined,
      status: status ? String(status) : undefined,
      limit: parseInt(String(limit), 10),
      offset: parseInt(String(offset), 10)
    };

    const progressList = await progressService.getProgressByUser(userId, filters);

    res.status(200).json({
      message: 'User progress retrieved successfully',
      data: progressList
    });
  } catch (error) {
    console.error('Get user progress error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/user/progress
 * Save/update user's learning progress
 */
export const saveUserProgress = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { contentId, status, completionPercentage, timeSpentSeconds, notes, quizScores } = req.body;

    // Validate required fields
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    const progress = await progressService.createOrUpdateProgress({
      userId,
      contentId,
      status,
      completionPercentage,
      timeSpentSeconds,
      notes,
      quizScores
    });

    res.status(200).json({
      message: 'Progress saved successfully',
      data: progress
    });
  } catch (error) {
    console.error('Save user progress error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/user/progress/:contentId
 * Get user's progress for specific content
 */
export const getUserProgressForContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { contentId } = req.params;

    // Validate content ID
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    const progress = await progressService.getProgress(userId, contentId);

    if (!progress) {
      res.status(404).json({ error: 'Progress not found for this content' });
      return;
    }

    res.status(200).json({
      message: 'Content progress retrieved successfully',
      data: progress
    });
  } catch (error) {
    console.error('Get user progress for content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/user/progress/:contentId/mark-started
 * Mark content as started
 */
export const markContentStarted = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { contentId } = req.params;

    // Validate content ID
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    const progress = await progressService.markAsStarted(userId, contentId);

    res.status(200).json({
      message: 'Content marked as started successfully',
      data: progress
    });
  } catch (error) {
    console.error('Mark content started error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/user/progress/:contentId/update-progress
 * Update content progress percentage
 */
export const updateContentProgress = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { contentId } = req.params;
    const { percentage } = req.body;

    // Validate content ID and percentage
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    if (percentage === undefined || percentage < 0 || percentage > 100) {
      res.status(400).json({ error: 'Valid percentage (0-100) is required' });
      return;
    }

    const progress = await progressService.updateProgressPercentage(userId, contentId, percentage);

    res.status(200).json({
      message: 'Progress updated successfully',
      data: progress
    });
  } catch (error) {
    console.error('Update content progress error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/user/progress/:contentId/add-time
 * Add time spent on content
 */
export const addTimeSpent = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { contentId } = req.params;
    const { seconds } = req.body;

    // Validate content ID and seconds
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    if (seconds === undefined || seconds < 0) {
      res.status(400).json({ error: 'Valid seconds (positive number) is required' });
      return;
    }

    const progress = await progressService.addTimeSpent(userId, contentId, seconds);

    res.status(200).json({
      message: 'Time spent added successfully',
      data: progress
    });
  } catch (error) {
    console.error('Add time spent error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};