import { Request, Response } from 'express';
import { authService } from '../../services/auth-service';

/**
 * POST /api/auth/verify-email
 * Verify user email with token
 */
export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = req.body;

    // Validate input
    if (!token) {
      res.status(400).json({ error: 'Verification token is required' });
      return;
    }

    // Verify email
    const success = await authService.verifyEmail(token);

    if (!success) {
      res.status(400).json({ error: 'Invalid or expired verification token' });
      return;
    }

    res.status(200).json({
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Verify email error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/auth/resend-verification
 * Resend email verification
 */
export const resendVerification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    // Resend verification email
    await authService.resendVerificationEmail(email);

    res.status(200).json({
      message: 'Verification email sent successfully'
    });
  } catch (error) {
    console.error('Resend verification error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};