import { Request, Response } from 'express';
import { authService } from '../../services/auth-service';

/**
 * POST /api/auth/forgot-password
 * Request password reset
 */
export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    // Request password reset
    await authService.sendPasswordResetEmail(email);

    res.status(200).json({
      message: 'Password reset email sent successfully'
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};