import { Request, Response } from 'express';
import { userPreferenceService } from '../../services/user-preference-service';

/**
 * GET /api/user/preferences
 * Get user's preferences
 */
export const getUserPreferences = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const preferences = await userPreferenceService.getPreferencesByUser(userId);

    res.status(200).json({
      message: 'User preferences retrieved successfully',
      data: preferences
    });
  } catch (error) {
    console.error('Get user preferences error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/user/preferences/:key
 * Get a specific user preference
 */
export const getUserPreference = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { key } = req.params;

    // Validate preference key
    if (!key) {
      res.status(400).json({ error: 'Preference key is required' });
      return;
    }

    const preference = await userPreferenceService.getPreference(userId, key);

    if (!preference) {
      res.status(404).json({ error: 'Preference not found' });
      return;
    }

    res.status(200).json({
      message: 'User preference retrieved successfully',
      data: preference
    });
  } catch (error) {
    console.error('Get user preference error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * PUT /api/user/preferences/:key
 * Update a specific user preference
 */
export const updateUserPreference = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { key } = req.params;
    const { value } = req.body;

    // Validate input
    if (!key) {
      res.status(400).json({ error: 'Preference key is required' });
      return;
    }

    if (value === undefined) {
      res.status(400).json({ error: 'Preference value is required' });
      return;
    }

    const updatedPreference = await userPreferenceService.createOrUpdatePreference({
      userId,
      preferenceKey: key,
      preferenceValue: String(value) // Convert to string as all preferences are stored as strings
    });

    res.status(200).json({
      message: 'User preference updated successfully',
      data: updatedPreference
    });
  } catch (error) {
    console.error('Update user preference error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/user/preferences/bulk-update
 * Bulk update user preferences
 */
export const bulkUpdatePreferences = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { preferences } = req.body;

    // Validate preferences object
    if (!preferences || typeof preferences !== 'object') {
      res.status(400).json({ error: 'Preferences object is required' });
      return;
    }

    const updatedPreferences = await userPreferenceService.bulkUpdatePreferences(userId, preferences);

    res.status(200).json({
      message: 'User preferences updated successfully',
      data: updatedPreferences
    });
  } catch (error) {
    console.error('Bulk update preferences error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * DELETE /api/user/preferences/:key
 * Delete a specific user preference
 */
export const deleteUserPreference = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { key } = req.params;

    // Validate preference key
    if (!key) {
      res.status(400).json({ error: 'Preference key is required' });
      return;
    }

    const deleted = await userPreferenceService.deletePreferenceByKey(userId, key);

    if (!deleted) {
      res.status(404).json({ error: 'Preference not found' });
      return;
    }

    res.status(200).json({
      message: 'User preference deleted successfully'
    });
  } catch (error) {
    console.error('Delete user preference error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/user/preferences/keys
 * Get all preference keys for the user
 */
export const getUserPreferenceKeys = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const preferenceKeys = await userPreferenceService.getPreferenceKeys(userId);

    res.status(200).json({
      message: 'User preference keys retrieved successfully',
      data: preferenceKeys
    });
  } catch (error) {
    console.error('Get user preference keys error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};