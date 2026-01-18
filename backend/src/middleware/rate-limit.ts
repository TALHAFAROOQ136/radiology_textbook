import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';

// Initialize Redis connection for rate limiting
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

interface RateLimitOptions {
  windowMs: number; // Window for which requests are counted in milliseconds
  max: number; // Maximum number of requests allowed during window
  message: string; // Message to send when rate limit exceeded
  keyGenerator?: (req: Request) => string; // Function to generate rate limit key
}

/**
 * Rate limiting middleware
 * Implements sliding window counter algorithm using Redis
 */
export const rateLimit = (options: RateLimitOptions) => {
  const { windowMs, max, message = 'Too many requests, please try again later.', keyGenerator } = options;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Generate key for rate limiting (default to IP address)
      const key = keyGenerator ? keyGenerator(req) : `rate_limit:${req.ip}`;

      // Calculate expiration time in seconds
      const expireTime = Math.floor(windowMs / 1000);

      // Use Redis pipeline for atomic operations
      const pipeline = redis.pipeline();

      // Increment the request count
      pipeline.incr(key);

      // Set expiration if this is the first request
      pipeline.expire(key, expireTime);

      const results = await pipeline.exec();
      const count = results[0][1] as number;

      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', max.toString());
      res.setHeader('X-RateLimit-Remaining', Math.max(max - count, 0).toString());
      res.setHeader('X-RateLimit-Reset', new Date(Date.now() + windowMs).toISOString());

      // Check if rate limit exceeded
      if (count > max) {
        res.status(429).json({
          success: false,
          error: 'RateLimitExceeded',
          message: message,
          retryAfter: windowMs
        });
        return;
      }

      next();
    } catch (error) {
      console.error('Rate limiting error:', error);
      // Continue with request if Redis is unavailable (fail open)
      next();
    }
  };
};

/**
 * Memory-based rate limiter (fallback when Redis unavailable)
 */
export class MemoryRateLimiter {
  private requests: Map<string, { count: number; resetTime: number }> = new Map();

  public checkLimit(key: string, windowMs: number, max: number): boolean {
    const now = Date.now();
    const requestRecord = this.requests.get(key);

    if (!requestRecord || requestRecord.resetTime < now) {
      // New window or expired record
      this.requests.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (requestRecord.count >= max) {
      return false; // Rate limit exceeded
    }

    // Increment count
    this.requests.set(key, {
      count: requestRecord.count + 1,
      resetTime: requestRecord.resetTime
    });
    return true;
  }
}

/**
 * Caching middleware
 * Provides response caching functionality
 */
export interface CacheOptions {
  ttl: number; // Time to live in seconds
  keyGenerator?: (req: Request) => string; // Function to generate cache key
  shouldCache?: (req: Request, res: Response) => boolean; // Condition to cache response
}

export const cache = (options: CacheOptions) => {
  const { ttl, keyGenerator, shouldCache } = options;

  return async (req: Request, res: Response, next: NextFunction) => {
    // Generate cache key
    const key = keyGenerator ? keyGenerator(req) : `cache:${req.method}:${req.url}`;

    try {
      // Try to get cached response
      const cachedResponse = await redis.get(key);

      if (cachedResponse) {
        // Serve cached response
        const { body, statusCode, headers } = JSON.parse(cachedResponse);
        res.statusCode = statusCode;

        // Set cached headers
        Object.keys(headers).forEach(headerName => {
          res.setHeader(headerName, headers[headerName]);
        });

        res.send(body);
        return;
      }
    } catch (error) {
      console.error('Cache retrieval error:', error);
      // Continue to normal processing if cache unavailable
    }

    // Override res.send to capture response for caching
    const originalSend = res.send;
    res.send = function(body: any) {
      // Call original send
      const result = originalSend.call(this, body);

      // Cache response if conditions are met
      const shouldProceed = !shouldCache || shouldCache(req, res);

      if (shouldProceed && res.statusCode < 400) { // Only cache successful responses
        try {
          const cacheData = {
            body: typeof body === 'string' ? body : JSON.stringify(body),
            statusCode: res.statusCode,
            headers: {
              'Content-Type': res.getHeader('Content-Type'),
              'Content-Length': res.getHeader('Content-Length'),
              'ETag': res.getHeader('ETag')
            }
          };

          // Cache with TTL
          redis.setex(key, ttl, JSON.stringify(cacheData));
        } catch (error) {
          console.error('Cache storage error:', error);
        }
      }

      return result;
    };

    next();
  };
};

/**
 * Cache utilities for programmatic caching
 */
export class CacheManager {
  /**
   * Get value from cache
   */
  static async get<T>(key: string): Promise<T | null> {
    try {
      const value = await redis.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  /**
   * Set value in cache
   */
  static async set<T>(key: string, value: T, ttlSeconds: number = 3600): Promise<boolean> {
    try {
      await redis.setex(key, ttlSeconds, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }

  /**
   * Delete value from cache
   */
  static async del(key: string): Promise<boolean> {
    try {
      await redis.del(key);
      return true;
    } catch (error) {
      console.error('Cache delete error:', error);
      return false;
    }
  }

  /**
   * Invalidate cache by pattern
   */
  static async invalidate(pattern: string): Promise<number> {
    try {
      const keys = await redis.keys(pattern);
      if (keys.length > 0) {
        return await redis.del(...keys);
      }
      return 0;
    } catch (error) {
      console.error('Cache invalidate error:', error);
      return 0;
    }
  }
}