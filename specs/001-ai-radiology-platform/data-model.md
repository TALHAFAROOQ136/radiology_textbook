# Data Model: Radiology Text Book Platform

## Overview

This document defines the data models for the Radiology Text Book platform, including entities, relationships, and validation rules derived from the functional requirements.

## Core Entities

### User
**Description**: Represents registered users of the platform

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the user
- `email` (string, unique, required) - User's email address
- `name` (string, required) - Full name of the user
- `password_hash` (string, required) - Hashed password for authentication
- `medical_level` (string, enum) - Medical background (e.g., "medical_student", "resident", "attending", "other")
- `signup_responses` (JSON) - Responses to signup questionnaire about learning goals
- `created_at` (timestamp) - Account creation timestamp
- `updated_at` (timestamp) - Last update timestamp
- `last_login_at` (timestamp, nullable) - Last login timestamp
- `is_verified` (boolean, default: false) - Email verification status

**Validation Rules**:
- Email must be valid email format
- Password must meet strength requirements
- Medical level must be one of predefined values

### Chapter
**Description**: Organized sections of the radiology textbook

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the chapter
- `title` (string, required) - Title of the chapter
- `slug` (string, unique, required) - URL-friendly identifier
- `content` (text, required) - Main content of the chapter
- `part_number` (integer) - Which part of the textbook this chapter belongs to
- `chapter_number` (integer) - Sequential number within the part
- `word_count` (integer) - Approximate word count for reading time estimation
- `estimated_reading_time` (integer) - Estimated time in minutes to read
- `metadata` (JSON) - Additional metadata (keywords, learning objectives, etc.)
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp
- `is_published` (boolean, default: true) - Whether the chapter is publicly available

**Validation Rules**:
- Title and slug must not be empty
- Chapter number and part number must be positive integers
- Content must exist and have minimum length

### LearningProgress
**Description**: Tracks user completion status, quiz scores, and time spent on different content sections

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the progress record
- `user_id` (UUID, foreign key) - Reference to the user
- `chapter_id` (UUID, foreign key) - Reference to the chapter
- `is_completed` (boolean, default: false) - Whether the chapter is marked as completed
- `completion_percentage` (decimal, range: 0-100) - Percentage of chapter completed
- `time_spent_seconds` (integer) - Total time spent on the chapter in seconds
- `last_accessed_at` (timestamp) - When the chapter was last accessed
- `quiz_scores` (JSON) - Scores for quizzes within the chapter
- `notes` (text, nullable) - User's notes on the chapter
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- User and chapter references must exist
- Completion percentage must be between 0 and 100
- Time spent cannot be negative

### Quiz
**Description**: Interactive assessment tools with questions, answers, and scoring mechanisms

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the quiz
- `chapter_id` (UUID, foreign key) - Reference to the chapter this quiz belongs to
- `title` (string, required) - Title of the quiz
- `description` (text, nullable) - Optional description
- `questions` (JSON, required) - Array of questions with options and correct answers
- `passing_score` (decimal, range: 0-100, default: 70) - Minimum score to pass
- `max_attempts` (integer, default: 3) - Maximum number of attempts allowed
- `shuffle_questions` (boolean, default: true) - Whether to shuffle question order
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- Chapter reference must exist
- Questions must have valid structure with at least one correct answer
- Passing score must be between 0 and 100
- Max attempts must be positive

### QuizAttempt
**Description**: Records of user attempts at quizzes

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the attempt
- `quiz_id` (UUID, foreign key) - Reference to the quiz
- `user_id` (UUID, foreign key) - Reference to the user
- `score` (decimal, range: 0-100) - Score achieved on the attempt
- `responses` (JSON) - User's responses to questions
- `feedback` (JSON) - Feedback provided for answers
- `started_at` (timestamp) - When the attempt was started
- `completed_at` (timestamp, nullable) - When the attempt was completed
- `is_passed` (boolean) - Whether the attempt passed the quiz

**Validation Rules**:
- Quiz and user references must exist
- Score must be between 0 and 100
- Completed time must be after started time

### ImageGallery
**Description**: Collections of radiology images with annotations and comparison tools

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the gallery
- `chapter_id` (UUID, foreign key) - Reference to the chapter this gallery belongs to
- `title` (string, required) - Title of the gallery
- `description` (text, nullable) - Optional description
- `images` (JSON, required) - Array of image objects with URLs and annotations
- `is_public` (boolean, default: true) - Whether the gallery is publicly accessible
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- Chapter reference must exist
- Images must have valid URLs and annotation structure

### Bookmark
**Description**: Saved references to specific content sections with optional user notes

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the bookmark
- `user_id` (UUID, foreign key) - Reference to the user
- `chapter_id` (UUID, foreign key) - Reference to the chapter
- `section_title` (string) - Title of the specific section
- `content_snippet` (text) - Snippet of the bookmarked content
- `position` (integer) - Position in the chapter (for navigation)
- `notes` (text, nullable) - User's notes on the bookmarked section
- `tags` (JSON) - Array of tags for organizing bookmarks
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- User and chapter references must exist
- Position must be non-negative

### ChatQuery
**Description**: User questions submitted to the AI chatbot with context and responses

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the query
- `user_id` (UUID, foreign key, nullable) - Reference to the user (nullable for anonymous)
- `query_text` (text, required) - The original user query
- `selected_text` (text, nullable) - Text selected by user when making query (for text selection feature)
- `context` (JSON) - Context provided to the AI model
- `response_text` (text, required) - The AI's response
- `sources` (JSON) - References to sources used in the response
- `confidence` (decimal, range: 0-1) - Confidence level of the response
- `query_type` (string, enum) - Type of query ("general", "text_selection", "chapter_specific")
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- Query and response must not be empty
- Confidence must be between 0 and 1
- Query type must be one of predefined values

### UserProfile
**Description**: Extended user profile information for personalization

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the profile
- `user_id` (UUID, foreign key) - Reference to the user
- `learning_preferences` (JSON) - Preferences for content delivery
- `language_preference` (string, default: "en") - Preferred language for content
- `timezone` (string) - User's timezone
- `personalization_settings` (JSON) - Settings for personalized content delivery
- `study_reminders_enabled` (boolean, default: false) - Whether to send study reminders
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- User reference must exist
- Language preference must be supported
- Timezone must be valid

## Relationships

### User ↔ LearningProgress
- One-to-many relationship
- A user can have progress records for multiple chapters
- A progress record belongs to one user

### Chapter ↔ LearningProgress
- One-to-many relationship
- A chapter can have progress records for multiple users
- A progress record belongs to one chapter

### Chapter ↔ Quiz
- One-to-many relationship
- A chapter can have multiple quizzes
- A quiz belongs to one chapter

### User ↔ QuizAttempt
- One-to-many relationship
- A user can make multiple quiz attempts
- A quiz attempt belongs to one user

### Quiz ↔ QuizAttempt
- One-to-many relationship
- A quiz can have multiple attempts
- A quiz attempt belongs to one quiz

### User ↔ Bookmark
- One-to-many relationship
- A user can have multiple bookmarks
- A bookmark belongs to one user

### Chapter ↔ Bookmark
- One-to-many relationship
- A chapter can have multiple bookmarks from different users
- A bookmark belongs to one chapter

### User ↔ ChatQuery
- One-to-many relationship (optional)
- A user can make multiple chat queries
- A chat query belongs to one user (or none for anonymous)

### User ↔ UserProfile
- One-to-one relationship
- Each user has one profile
- Each profile belongs to one user

### Chapter ↔ ImageGallery
- One-to-many relationship
- A chapter can have multiple image galleries
- An image gallery belongs to one chapter

## Indexes

### Essential Indexes
- `users.email`: Unique index for fast user lookup by email
- `users.created_at`: Index for sorting/filtering by creation date
- `chapters.slug`: Unique index for fast chapter lookup by slug
- `chapters.part_number, chapters.chapter_number`: Composite index for ordering chapters
- `learning_progress.user_id, learning_progress.chapter_id`: Composite index for user progress lookups
- `quiz_attempts.quiz_id, quiz_attempts.user_id`: Composite index for quiz attempt lookups
- `bookmarks.user_id`: Index for user's bookmarks lookup
- `chat_queries.user_id`: Index for user's chat history lookup
- `chat_queries.created_at`: Index for chronological query access

## Constraints

### Referential Integrity
- Foreign key constraints to maintain data consistency
- Cascade deletes where appropriate (e.g., deleting user removes their progress, bookmarks, etc.)

### Business Logic Constraints
- A user cannot have multiple progress records for the same chapter
- A user cannot submit multiple attempts for the same quiz if max attempts reached
- Quiz passing score must be achievable (less than or equal to 100)
- User cannot bookmark the same section multiple times (unique constraint on user_id + chapter_id + position)