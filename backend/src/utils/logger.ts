import winston from 'winston';

// Create a Winston logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  defaultMeta: { service: 'radiology-textbook-platform' },
  transports: [
    // Write all logs with level 'error' and below to 'error.log'
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Write all logs with level 'info' and below to 'combined.log'
    new winston.transports.File({
      filename: 'logs/combined.log',
      level: 'info',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    })
  ]
});

// If we're not in production, log to the console as well
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

export default logger;

/**
 * Request logging middleware
 */
import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;

    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      userAgent: req.get('User-Agent'),
      ip: req.ip
    });
  });

  next();
};

/**
 * Performance monitoring utility
 */
export class PerformanceMonitor {
  private static timers = new Map<string, number>();

  static startTimer(operation: string): void {
    this.timers.set(operation, Date.now());
  }

  static endTimer(operation: string): number {
    const startTime = this.timers.get(operation);
    if (startTime === undefined) {
      return -1;
    }

    const duration = Date.now() - startTime;
    this.timers.delete(operation);

    // Log if operation took longer than threshold
    if (duration > 100) { // Log operations taking more than 100ms
      logger.warn('Slow operation detected', {
        operation,
        duration: `${duration}ms`
      });
    }

    return duration;
  }

  static logMetric(name: string, value: number, tags: Record<string, string> = {}): void {
    logger.info('Metric logged', {
      metric: name,
      value,
      tags,
      timestamp: new Date().toISOString()
    });
  }
}