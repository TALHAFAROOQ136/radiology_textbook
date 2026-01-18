import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

/**
 * Global error handler middleware
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log the error
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });

  // Determine the status code based on error type
  let statusCode = err.status || err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Sanitize error messages based on environment
  if (process.env.NODE_ENV !== 'development') {
    // Don't expose internal error details in production
    if (statusCode === 500) {
      message = 'Internal Server Error';
    }
  }

  // Send error response
  res.status(statusCode).json({
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
      timestamp: new Date().toISOString(),
      path: req.url
    }
  });
};

/**
 * 404 handler for routes that don't exist
 */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  (error as any).status = 404;
  next(error);
};

/**
 * Validation error handler
 */
export const validationErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'ValidationError' || err.name === 'ZodError') {
    logger.warn('Validation error', {
      error: err.message,
      url: req.url,
      method: req.method,
      details: err.errors || err.issues
    });

    return res.status(400).json({
      error: {
        message: 'Validation failed',
        details: err.errors || err.issues,
        timestamp: new Date().toISOString()
      }
    });
  }

  next(err);
};

/**
 * JWT error handler
 */
export const jwtErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    logger.warn('JWT error', {
      error: err.message,
      url: req.url,
      method: req.method
    });

    return res.status(401).json({
      error: {
        message: 'Invalid or expired token',
        timestamp: new Date().toISOString()
      }
    });
  }

  next(err);
};

/**
 * Combine all error handlers
 */
export const globalErrorHandler = [
  validationErrorHandler,
  jwtErrorHandler,
  errorHandler
];