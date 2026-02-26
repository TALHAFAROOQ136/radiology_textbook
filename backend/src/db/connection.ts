import { Pool } from 'pg';
import { neon } from '@neondatabase/serverless';

/**
 * Database connection configuration for Neon Serverless Postgres
 * This module provides connection pooling and database access utilities
 */

// Database connection pool configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum number of clients in the pool
  min: 5,  // Minimum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});

// Test the connection
pool.on('connect', () => {
  console.log('Connected to Neon Postgres database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

/**
 * Execute a query against the database
 * @param query SQL query string
 * @param params Query parameters
 * @returns Query result
 */
export const executeQuery = async (query: string, params?: any[]) => {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result;
  } finally {
    client.release();
  }
};

/**
 * Initialize database tables and relationships
 * This function creates all necessary tables based on the data model
 */
export const initializeDatabase = async () => {
  // Create users table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      medical_level VARCHAR(50) DEFAULT 'medical_student',
      signup_responses JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      last_login_at TIMESTAMP WITH TIME ZONE,
      is_verified BOOLEAN DEFAULT FALSE
    );
  `);

  // Create user_profiles table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS user_profiles (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      institution VARCHAR(255),
      specialty_interest VARCHAR(255),
      learning_goals JSONB,
      preferred_language VARCHAR(10) DEFAULT 'en',
      timezone VARCHAR(50) DEFAULT 'UTC',
      bio TEXT,
      avatar_url VARCHAR(500),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create book_content table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS book_content (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      parent_id UUID REFERENCES book_content(id),
      type VARCHAR(50) NOT NULL CHECK (type IN ('part', 'chapter', 'section', 'subsection', 'appendix')),
      title VARCHAR(500) NOT NULL,
      slug VARCHAR(500) UNIQUE NOT NULL,
      content TEXT NOT NULL,
      order_number INTEGER NOT NULL,
      part_number INTEGER,
      chapter_number INTEGER,
      section_number VARCHAR(20),
      metadata JSONB,
      is_published BOOLEAN DEFAULT TRUE,
      version VARCHAR(20) DEFAULT '1.0.0',
      language VARCHAR(10) DEFAULT 'en',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      created_by UUID REFERENCES users(id),
      updated_by UUID REFERENCES users(id),
      child_count INTEGER DEFAULT 0
    );
  `);

  // Create learning_progress table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS learning_progress (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      content_id UUID REFERENCES book_content(id) ON DELETE CASCADE,
      status VARCHAR(20) DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
      completion_percentage DECIMAL(5,2) DEFAULT 0.00,
      time_spent_seconds INTEGER DEFAULT 0,
      last_accessed_at TIMESTAMP WITH TIME ZONE,
      first_accessed_at TIMESTAMP WITH TIME ZONE,
      completed_at TIMESTAMP WITH TIME ZONE,
      notes TEXT,
      quiz_scores JSONB,
      engagement_metrics JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, content_id)
    );
  `);

  // Create quizzes table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS quizzes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      content_id UUID REFERENCES book_content(id) ON DELETE CASCADE,
      title VARCHAR(500) NOT NULL,
      description TEXT,
      questions JSONB NOT NULL,
      passing_score DECIMAL(5,2) DEFAULT 70.00,
      max_attempts INTEGER DEFAULT 3,
      time_limit_minutes INTEGER,
      is_active BOOLEAN DEFAULT TRUE,
      randomize_questions BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      created_by UUID REFERENCES users(id)
    );
  `);

  // Create quiz_attempts table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS quiz_attempts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      attempt_number INTEGER NOT NULL,
      score DECIMAL(5,2),
      responses JSONB,
      feedback JSONB,
      started_at TIMESTAMP WITH TIME ZONE NOT NULL,
      completed_at TIMESTAMP WITH TIME ZONE,
      time_taken_seconds INTEGER,
      is_passed BOOLEAN,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(quiz_id, user_id, attempt_number)
    );
  `);

  // Create user_sessions table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS user_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      session_token VARCHAR(500) UNIQUE NOT NULL,
      refresh_token VARCHAR(500) UNIQUE NOT NULL,
      expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
      ip_address VARCHAR(45),
      user_agent TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      last_accessed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create content_tags table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS content_tags (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255) UNIQUE NOT NULL,
      category VARCHAR(100) NOT NULL,
      description TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create content_taggings table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS content_taggings (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      content_id UUID REFERENCES book_content(id) ON DELETE CASCADE,
      tag_id UUID REFERENCES content_tags(id) ON DELETE CASCADE,
      confidence DECIMAL(3,2) DEFAULT 1.00,
      assigned_by VARCHAR(20) DEFAULT 'manual' CHECK (assigned_by IN ('manual', 'automated')),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(content_id, tag_id)
    );
  `);

  // Create user_preferences table
  await executeQuery(`
    CREATE TABLE IF NOT EXISTS user_preferences (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      preference_key VARCHAR(100) NOT NULL,
      preference_value TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create indexes for better performance
  await executeQuery(`
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);
    CREATE INDEX IF NOT EXISTS idx_book_content_slug ON book_content(slug);
    CREATE INDEX IF NOT EXISTS idx_book_content_parent_order ON book_content(parent_id, order_number);
    CREATE INDEX IF NOT EXISTS idx_learning_progress_user_content ON learning_progress(user_id, content_id);
    CREATE INDEX IF NOT EXISTS idx_learning_progress_user_status ON learning_progress(user_id, status);
    CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_user ON quiz_attempts(quiz_id, user_id, attempt_number);
    CREATE INDEX IF NOT EXISTS idx_user_sessions_user_active ON user_sessions(user_id, is_active);
    CREATE INDEX IF NOT EXISTS idx_content_taggings_content_tag ON content_taggings(content_id, tag_id);
  `);

  console.log('Database tables initialized successfully');
};

export default pool;