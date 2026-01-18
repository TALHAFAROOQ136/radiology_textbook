import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';

/**
 * Validation middleware factory function
 * Validates request body, params, and query against provided Zod schemas
 */
export const validate = (schemas: {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
}) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate request body if schema is provided
      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }

      // Validate URL parameters if schema is provided
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }

      // Validate query parameters if schema is provided
      if (schemas.query) {
        req.query = schemas.query.parse(req.query);
      }

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format Zod errors for response
        const formattedErrors = error.errors.map(issue => ({
          path: issue.path.join('.'),
          message: issue.message,
          value: issue.input
        }));

        return res.status(400).json({
          error: {
            message: 'Validation failed',
            details: formattedErrors,
            timestamp: new Date().toISOString()
          }
        });
      }

      next(error);
    }
  };
};

/**
 * Sanitization middleware to clean and sanitize input data
 */
export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  // Sanitize request body
  if (req.body) {
    req.body = sanitizeObject(req.body);
  }

  // Sanitize query parameters
  if (req.query) {
    req.query = sanitizeObject(req.query);
  }

  // Sanitize URL parameters
  if (req.params) {
    req.params = sanitizeObject(req.params);
  }

  next();
};

/**
 * Helper function to sanitize an object
 */
const sanitizeObject = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const sanitized: any = Array.isArray(obj) ? [] : {};

  for (const [key, value] of Object.entries(obj)) {
    // Remove potentially dangerous properties
    if (isDangerousProperty(key)) {
      continue;
    }

    // Sanitize string values
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    }
    // Recursively sanitize nested objects
    else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value);
    }
    // Keep other types as-is
    else {
      sanitized[key] = value;
    }
  }

  return sanitized;
};

/**
 * Helper function to sanitize a string
 */
const sanitizeString = (str: string): string => {
  // Remove null bytes
  str = str.replace(/\0/g, '');

  // Remove potential script tags (basic XSS prevention)
  str = str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove potential JavaScript event handlers
  str = str.replace(/(on\w+\s*=)/gi, '');

  // Remove javascript:, vbscript:, etc. protocols
  str = str.replace(/(javascript:|vbscript:|data:)/gi, '');

  return str.trim();
};

/**
 * Helper function to check if a property name is dangerous
 */
const isDangerousProperty = (key: string): boolean => {
  // Check for potentially dangerous property names
  const dangerousPatterns = [
    /^\$.*\$/,
    /^__proto__/,
    /^constructor$/,
    /^prototype$/,
    /<script/i,
    /javascript:/i,
    /vbscript:/i
  ];

  return dangerousPatterns.some(pattern => pattern.test(key));
};

/**
 * Rate limiting middleware
 */
export const rateLimiter = (maxRequests: number = 100, windowMs: number = 15 * 60 * 1000) => {
  const clients = new Map<string, { count: number; resetTime: number }>();

  return (req: Request, res: Response, next: NextFunction) => {
    const clientId = getClientIdentifier(req);

    const now = Date.now();
    const client = clients.get(clientId);

    if (!client) {
      // New client
      clients.set(clientId, { count: 1, resetTime: now + windowMs });
      return next();
    }

    if (now > client.resetTime) {
      // Reset window
      client.count = 1;
      client.resetTime = now + windowMs;
      return next();
    }

    if (client.count >= maxRequests) {
      // Rate limit exceeded
      return res.status(429).json({
        error: {
          message: 'Too many requests',
          retryAfter: Math.ceil((client.resetTime - now) / 1000),
          timestamp: new Date().toISOString()
        }
      });
    }

    // Increment count
    client.count++;
    next();
  };
};

/**
 * Helper function to get client identifier for rate limiting
 */
const getClientIdentifier = (req: Request): string => {
  // Try to get the real IP from headers, fall back to connection IP
  return req.headers['x-forwarded-for'] as string ||
         req.headers['x-real-ip'] as string ||
         req.connection.remoteAddress ||
         req.socket.remoteAddress ||
         (req as any).ip ||
         'unknown';
};

/**
 * Content security middleware
 */
export const contentSecurity = (req: Request, res: Response, next: NextFunction) => {
  // Set security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  next();
};