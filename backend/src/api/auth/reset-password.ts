import { Request, Response } from 'express';
import { authService } from '../../services/auth-service';

/**
 * POST /api/auth/reset-password
 * Reset user password with token
 */
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token, newPassword } = req.body;

    // Validate input
    if (!token || !newPassword) {
      res.status(400).json({ error: 'Token and new password are required' });
      return;
    }

    // Reset password
    const success = await authService.resetPassword(token, newPassword);

    if (!success) {
      res.status(400).json({ error: 'Invalid or expired reset token' });
      return;
    }

    res.status(200).json({
      message: 'Password reset successfully'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};