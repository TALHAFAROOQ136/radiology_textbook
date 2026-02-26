/**
 * Environment Configuration for Radiology Textbook Platform
 *
 * This module handles all environment-specific configurations and secrets
 */

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

/**
 * Configuration interface defining all required environment variables
 */
interface Config {
  // Application settings
  NODE_ENV: string;
  PORT: number;
  APP_NAME: string;
  APP_VERSION: string;
  BASE_URL: string;

  // Database configuration
  DATABASE_URL: string;
  NEON_DATABASE_URL: string;
  DATABASE_SSL_ENABLED: boolean;
  DATABASE_POOL_MIN: number;
  DATABASE_POOL_MAX: number;

  // Authentication settings
  AUTH_SECRET: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  SESSION_COOKIE_NAME: string;
  SESSION_COOKIE_SECURE: boolean;
  SESSION_COOKIE_HTTP_ONLY: boolean;
  SESSION_COOKIE_SAME_SITE: 'strict' | 'lax' | 'none';

  // AI/ML services
  OPENAI_API_KEY: string;
  OPENAI_MODEL: string;
  QDRANT_URL: string;
  QDRANT_API_KEY: string;
  QDRANT_COLLECTION_NAME: string;

  // Vector database settings
  VECTOR_DIMENSION: number;
  SIMILARITY_THRESHOLD: number;

  // Frontend settings
  FRONTEND_URL: string;
  BACKEND_URL: string;

  // Rate limiting
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;

  // Caching
  REDIS_URL: string;
  CACHE_TTL_DEFAULT: number;
  CACHE_TTL_SHORT: number;
  CACHE_TTL_LONG: number;

  // File upload settings
  MAX_FILE_SIZE: number; // in bytes
  ALLOWED_FILE_TYPES: string[];

  // Email settings
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASSWORD: string;
  EMAIL_FROM: string;

  // Logging
  LOG_LEVEL: string;
  LOG_FORMAT: 'json' | 'text';

  // Monitoring
  ENABLE_METRICS: boolean;
  METRICS_INTERVAL: number; // in milliseconds

  // Security
  CORS_ORIGIN: string[];
  CSRF_ENABLED: boolean;
  ENCRYPTION_KEY: string;
  SALT_ROUNDS: number;
}

/**
 * Validates that required environment variables are present
 */
const validateEnvironment = (): void => {
  const requiredVars = [
    'DATABASE_URL',
    'NEON_DATABASE_URL',
    'AUTH_SECRET',
    'JWT_SECRET',
    'OPENAI_API_KEY',
    'QDRANT_URL',
    'QDRANT_API_KEY',
    'QDRANT_COLLECTION_NAME',
    'FRONTEND_URL',
    'BACKEND_URL'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

// Validate environment on startup
validateEnvironment();

/**
 * Configuration object with default values and environment overrides
 */
export const config: Config = {
  // Application settings
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '8000', 10),
  APP_NAME: process.env.APP_NAME || 'Radiology Textbook Platform',
  APP_VERSION: process.env.APP_VERSION || '1.0.0',
  BASE_URL: process.env.BASE_URL || 'http://localhost:8000',

  // Database configuration
  DATABASE_URL: process.env.DATABASE_URL!,
  NEON_DATABASE_URL: process.env.NEON_DATABASE_URL!,
  DATABASE_SSL_ENABLED: process.env.DATABASE_SSL_ENABLED === 'true',
  DATABASE_POOL_MIN: parseInt(process.env.DATABASE_POOL_MIN || '2', 10),
  DATABASE_POOL_MAX: parseInt(process.env.DATABASE_POOL_MAX || '20', 10),

  // Authentication settings
  AUTH_SECRET: process.env.AUTH_SECRET!,
  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME || 'session_id',
  SESSION_COOKIE_SECURE: process.env.SESSION_COOKIE_SECURE !== 'false',
  SESSION_COOKIE_HTTP_ONLY: process.env.SESSION_COOKIE_HTTP_ONLY !== 'false',
  SESSION_COOKIE_SAME_SITE: (process.env.SESSION_COOKIE_SAME_SITE as 'strict' | 'lax' | 'none') || 'lax',

  // AI/ML services
  OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
  OPENAI_MODEL: process.env.OPENAI_MODEL || 'gpt-4-turbo',
  QDRANT_URL: process.env.QDRANT_URL!,
  QDRANT_API_KEY: process.env.QDRANT_API_KEY!,
  QDRANT_COLLECTION_NAME: process.env.QDRANT_COLLECTION_NAME || 'radiology_content',

  // Vector database settings
  VECTOR_DIMENSION: parseInt(process.env.VECTOR_DIMENSION || '1536', 10),
  SIMILARITY_THRESHOLD: parseFloat(process.env.SIMILARITY_THRESHOLD || '0.7'),

  // Frontend settings
  FRONTEND_URL: process.env.FRONTEND_URL!,
  BACKEND_URL: process.env.BACKEND_URL!,

  // Rate limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10),

  // Caching
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  CACHE_TTL_DEFAULT: parseInt(process.env.CACHE_TTL_DEFAULT || '3600', 10), // 1 hour
  CACHE_TTL_SHORT: parseInt(process.env.CACHE_TTL_SHORT || '300', 10), // 5 minutes
  CACHE_TTL_LONG: parseInt(process.env.CACHE_TTL_LONG || '86400', 10), // 24 hours

  // File upload settings
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB default
  ALLOWED_FILE_TYPES: process.env.ALLOWED_FILE_TYPES?.split(',') || ['image/jpeg', 'image/png', 'application/pdf'],

  // Email settings
  SMTP_HOST: process.env.SMTP_HOST || 'localhost',
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587', 10),
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || '',
  EMAIL_FROM: process.env.EMAIL_FROM || 'noreply@radiology-textbook.com',

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: (process.env.LOG_FORMAT as 'json' | 'text') || 'json',

  // Monitoring
  ENABLE_METRICS: process.env.ENABLE_METRICS === 'true',
  METRICS_INTERVAL: parseInt(process.env.METRICS_INTERVAL || '30000', 10), // 30 seconds

  // Security
  CORS_ORIGIN: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
  CSRF_ENABLED: process.env.CSRF_ENABLED !== 'false',
  ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || 'default-encryption-key-change-in-production',
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS || '12', 10)
};

/**
 * Helper function to check if running in production environment
 */
export const isProduction = (): boolean => config.NODE_ENV === 'production';

/**
 * Helper function to check if running in development environment
 */
export const isDevelopment = (): boolean => config.NODE_ENV === 'development';

/**
 * Helper function to check if running in test environment
 */
export const isTest = (): boolean => config.NODE_ENV === 'test';

export default config;