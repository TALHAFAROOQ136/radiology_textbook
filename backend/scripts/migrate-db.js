/**
 * Database Migration Script for Radiology Textbook Platform
 *
 * This script handles database schema migrations for the platform
 * It creates all necessary tables based on the data model specification
 */

require('dotenv').config();
const { Pool } = require('pg');

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

/**
 * Creates all required database tables
 */
async function createTables() {
  console.log('Starting database migration...');

  try {
    // Begin transaction
    const client = await pool.connect();
    await client.query('BEGIN');

    // Create users table
    await client.query(`
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
    console.log('✓ Created users table');

    // Create user_profiles table
    await client.query(`
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
    console.log('✓ Created user_profiles table');

    // Create book_content table
    await client.query(`
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
    console.log('✓ Created book_content table');

    // Create learning_progress table
    await client.query(`
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
    console.log('✓ Created learning_progress table');

    // Create quizzes table
    await client.query(`
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
    console.log('✓ Created quizzes table');

    // Create quiz_attempts table
    await client.query(`
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
    console.log('✓ Created quiz_attempts table');

    // Create user_sessions table
    await client.query(`
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
    console.log('✓ Created user_sessions table');

    // Create content_tags table
    await client.query(`
      CREATE TABLE IF NOT EXISTS content_tags (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) UNIQUE NOT NULL,
        category VARCHAR(100) NOT NULL,
        description TEXT,
        is_active BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Created content_tags table');

    // Create content_taggings table
    await client.query(`
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
    console.log('✓ Created content_taggings table');

    // Create user_preferences table
    await client.query(`
      CREATE TABLE IF NOT EXISTS user_preferences (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        preference_key VARCHAR(100) NOT NULL,
        preference_value TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Created user_preferences table');

    // Create indexes for better performance
    await client.query(`
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
    console.log('✓ Created database indexes');

    // Commit transaction
    await client.query('COMMIT');
    client.release();

    console.log('\n✓ Database migration completed successfully!');
    console.log('All required tables and indexes have been created.');
  } catch (error) {
    console.error('✗ Database migration failed:', error.message);
    throw error;
  } finally {
    await pool.end();
  }
}

/**
 * Seeds initial data for the platform
 */
async function seedInitialData() {
  console.log('\nSeeding initial data...');

  const client = await pool.connect();

  try {
    // Insert initial content parts (the 7 parts of the radiology textbook)
    const parts = [
      { title: 'Part I: Foundations of Medical Imaging', part_number: 1, order_number: 1, type: 'part' },
      { title: 'Part II: Positioning and Protocols', part_number: 2, order_number: 2, type: 'part' },
      { title: 'Part III: Chest Radiology', part_number: 3, order_number: 3, type: 'part' },
      { title: 'Part IV: Abdominal and Pelvic Imaging', part_number: 4, order_number: 4, type: 'part' },
      { title: 'Part V: Musculoskeletal Radiology', part_number: 5, order_number: 5, type: 'part' },
      { title: 'Part VI: Neuroimaging', part_number: 6, order_number: 6, type: 'part' },
      { title: 'Part VII: Specialized Imaging Techniques', part_number: 7, order_number: 7, type: 'part' }
    ];

    for (const part of parts) {
      await client.query(`
        INSERT INTO book_content (title, slug, content, type, part_number, order_number, is_published)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (slug) DO NOTHING
      `, [
        part.title,
        part.title.toLowerCase().replace(/\s+/g, '-'),
        `Introduction to ${part.title}`,
        part.type,
        part.part_number,
        part.order_number,
        true
      ]);
    }

    console.log('✓ Seeded initial content parts');

    // Insert default user preferences
    const defaultPreferences = [
      { preference_key: 'language', preference_value: 'en' },
      { preference_key: 'theme', preference_value: 'light' },
      { preference_key: 'difficulty_level', preference_value: 'intermediate' }
    ];

    for (const pref of defaultPreferences) {
      await client.query(`
        INSERT INTO user_preferences (preference_key, preference_value)
        VALUES ($1, $2)
        ON CONFLICT (preference_key) DO UPDATE SET preference_value = EXCLUDED.preference_value
      `, [pref.preference_key, pref.preference_value]);
    }

    console.log('✓ Seeded default user preferences');

    client.release();
    console.log('✓ Initial data seeding completed successfully!');
  } catch (error) {
    console.error('✗ Data seeding failed:', error.message);
    client.release();
    throw error;
  }
}

/**
 * Main function to run the migration
 */
async function runMigration() {
  try {
    await createTables();
    await seedInitialData();
    console.log('\n🎉 Database setup completed successfully!');
  } catch (error) {
    console.error('\n❌ Database setup failed:', error.message);
    process.exit(1);
  }
}

// Run the migration if this file is executed directly
if (require.main === module) {
  runMigration();
}

module.exports = {
  createTables,
  seedInitialData,
  runMigration
};