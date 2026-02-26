import { Request, Response } from 'express';
import { authService } from '../../services/auth-service';
import { User } from '../../models/user';

/**
 * POST /api/auth/register
 * Register a new user
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, name, password, medicalLevel, institution, specialtyInterest } = req.body;

    // Validate input
    if (!email || !name || !password) {
      res.status(400).json({ error: 'Email, name, and password are required' });
      return;
    }

    // Validate registration data
    const validation = authService.validateRegistrationData({
      email,
      name,
      password
    });

    if (!validation.success) {
      res.status(400).json({
        error: 'Validation failed',
        details: validation.errors
      });
      return;
    }

    // Register the user
    const result = await authService.register({
      email,
      name,
      password,
      medicalLevel,
      institution,
      specialtyInterest
    });

    // Return success response
    res.status(201).json({
      message: 'User registered successfully',
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
    console.error('Registration error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};