import { Request, Response } from 'express';
import { authService } from '../../services/auth-service';

/**
 * POST /api/auth/login
 * Login a user
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    // Authenticate the user
    const result = await authService.login(email, password);

    if (!result) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    // Return success response
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        medicalLevel: result.user.medicalLevel,
        isVerified: result.user.isVerified
      },
      token: result.token
    });
  } catch (error) {
    console.error('Login error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};