import { Request, Response, NextFunction } from 'express';
import NodeCache from 'node-cache';

// Create a cache instance
const cache = new NodeCache({ stdTTL: 600 }); // Default TTL of 10 minutes

/**
 * Cache middleware for content delivery
 */
export const cacheMiddleware = (ttl: number = 600) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Generate a cache key based on the URL and query parameters
    const cacheKey = `${req.url}?${JSON.stringify(req.query)}`;

    // Try to get cached response
    const cachedResponse = cache.get(cacheKey);
    if (cachedResponse) {
      // If found in cache, return the cached response
      res.json(cachedResponse);
      return;
    }

    // Override res.json to capture the response before sending
    const originalJson = res.json;
    res.json = function(body) {
      // Store the response in cache
      cache.set(cacheKey, body, ttl);

      // Call the original json method
      return originalJson.call(this, body);
    };

    next();
  };
};

/**
 * Invalidate cache for a specific key
 */
export const invalidateCache = (key: string): boolean => {
  return cache.del(key);
};

/**
 * Invalidate all cache
 */
export const invalidateAllCache = (): boolean => {
  return cache.flushAll();
};

/**
 * Get cache stats
 */
export const getCacheStats = () => {
  return cache.getStats();
};

/**
 * Check if a key exists in cache
 */
export const isCached = (key: string): boolean => {
  return cache.has(key);
};

/**
 * Memory-based cache for frequently accessed content
 * This middleware caches responses for GET requests to content endpoints
 */
export const contentCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next();
  }

  // Only cache specific content routes
  const contentRoutes = ['/api/content/', '/api/content/slug/', '/api/content/type/', '/api/content/parent/'];
  const shouldCache = contentRoutes.some(route => req.url.startsWith(route));

  if (!shouldCache) {
    return next();
  }

  // Generate cache key
  const cacheKey = `content:${req.url}?${JSON.stringify(req.query)}`;

  // Try to get cached response
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    res.setHeader('X-Cache', 'HIT');
    res.json(cachedResponse);
    return;
  }

  // Override res.json to capture the response
  const originalJson = res.json;
  res.json = function(body) {
    // Store the response in cache (with shorter TTL for content)
    cache.set(cacheKey, body, 300); // 5 minutes for content

    // Add cache headers
    res.setHeader('X-Cache', 'MISS');
    res.setHeader('Cache-Control', 'public, max-age=300'); // 5 minutes

    // Call the original json method
    return originalJson.call(this, body);
  };

  next();
};

/**
 * Cache for user progress data
 */
export const userProgressCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Only cache GET requests for user progress
  if (req.method !== 'GET' || !req.url.includes('/api/user/progress')) {
    return next();
  }

  // Generate cache key based on user ID
  const userId = (req as any).user?.id;
  if (!userId) {
    return next();
  }

  const cacheKey = `user_progress:${userId}:${req.url}`;

  // Try to get cached response
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    res.setHeader('X-Cache', 'HIT');
    res.json(cachedResponse);
    return;
  }

  // Override res.json to capture the response
  const originalJson = res.json;
  res.json = function(body) {
    // Store the response in cache (with shorter TTL for progress data)
    cache.set(cacheKey, body, 120); // 2 minutes for progress data

    // Add cache headers
    res.setHeader('X-Cache', 'MISS');
    res.setHeader('Cache-Control', 'private, max-age=120'); // 2 minutes

    // Call the original json method
    return originalJson.call(this, body);
  };

  next();
};