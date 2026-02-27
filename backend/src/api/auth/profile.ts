import { Request, Response } from 'express';
import { userService } from '../../services/user-service';
import { AuthMiddleware } from '../../middleware/auth-middleware';

/**
 * GET /api/auth/profile
 * Get authenticated user's profile
 */
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // In a real implementation, fetch user from DB
    // For now, return mock user data
    res.status(200).json({
      id: userId,
      email: req.user?.email,
      name: req.user?.name,
      medicalLevel: req.user?.medicalLevel,
      isVerified: req.user?.isVerified,
      preferences: req.user?.preferences
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * PUT /api/auth/profile
 * Update authenticated user's profile
 */
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const { name, medicalLevel, preferences } = req.body;

    // Update user profile
    const updatedUser = await userService.updateUser(userId, {
      name,
      medicalLevel,
      preferences
    });

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        medicalLevel: updatedUser.medicalLevel,
        isVerified: updatedUser.isVerified,
        preferences: updatedUser.preferences
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};