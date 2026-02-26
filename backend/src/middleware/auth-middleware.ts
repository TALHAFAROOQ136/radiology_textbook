import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export interface AuthenticatedRequest extends Request {
  user?: User;
}

/**
 * Authentication middleware for protecting routes
 */
export class AuthMiddleware {
  private static readonly JWT_SECRET = process.env.JWT_SECRET || 'fallback-jwt-secret';

  /**
   * Middleware to authenticate user with JWT token
   */
  static authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      // Get token from header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token required' });
      }

      const token = authHeader.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, AuthMiddleware.JWT_SECRET) as {
        userId: string;
        email: string;
        iat: number;
        exp: number;
      };

      // Create a mock user object (in a real implementation, fetch from DB)
      req.user = {
        id: decoded.userId,
        email: decoded.email,
        name: 'Mock User', // Would fetch from DB in real implementation
        passwordHash: 'mock-hash',
        medicalLevel: 'medical_student',
        preferences: {},
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: null,
        isActive: true,
        isVerified: true
      };

      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({ error: 'Invalid or expired token' });
      }

      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ error: 'Token has expired' });
      }

      console.error('Authentication error:', error);
      return res.status(500).json({ error: 'Authentication failed' });
    }
  };

  /**
   * Middleware to check if user is admin
   */
  static requireAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    // In a real implementation, check user role from DB
    // For now, we'll just check if email ends with @admin.com as a mock admin check
    if (!req.user.email.endsWith('@admin.com')) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    next();
  };

  /**
   * Middleware to check if user has specific role
   */
  static requireRole = (roles: string[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
      if (!req.user) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      // In a real implementation, check user role from DB
      // For now, we'll use medicalLevel as a mock role system
      if (!roles.includes(req.user.medicalLevel)) {
        return res.status(403).json({ error: `Access denied. Required roles: ${roles.join(', ')}` });
      }

      next();
    };
  };

  /**
   * Middleware to check if user is verified
   */
  static requireVerified = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
      }

    if (!req.user.isVerified) {
      return res.status(403).json({ error: 'Account verification required' });
    }

    next();
  };

  /**
   * Extracts user ID from request if authenticated
   */
  static getUserId = (req: AuthenticatedRequest): string | null => {
    return req.user?.id || null;
  };

  /**
   * Checks if user is authenticated
   */
  static isAuthenticated = (req: AuthenticatedRequest): boolean => {
    return !!req.user;
  };

  /**
   * Generates a JWT token for a user
   */
  static generateToken = (user: User): string => {
    const payload = {
      userId: user.id,
      email: user.email,
      name: user.name,
    };

    return jwt.sign(payload, AuthMiddleware.JWT_SECRET, { expiresIn: '7d' });
  };

  /**
   * Middleware to allow optional authentication
   */
  static optionalAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // No token provided, but that's okay for optional auth
        req.user = undefined;
        return next();
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, AuthMiddleware.JWT_SECRET) as {
        userId: string;
        email: string;
      };

      // Create a mock user object (in a real implementation, fetch from DB)
      req.user = {
        id: decoded.userId,
        email: decoded.email,
        name: 'Mock User',
        passwordHash: 'mock-hash',
        medicalLevel: 'medical_student',
        preferences: {},
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: null,
        isActive: true,
        isVerified: true
      };

      next();
    } catch (error) {
      // Invalid token, but that's okay for optional auth
      req.user = undefined;
      next();
    }
  };
}