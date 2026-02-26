# Data Model: Radiology Text Book - Docusaurus Book Structure with Authentication, Database, and Deployment Pipeline

## Overview

This document defines the data models for the Docusaurus-based educational platform for the Radiology Text Book, including entities for users, content, progress tracking, and system operations. The model is designed to support authentication, personalized learning experiences, and content management.

## Core Entities

### User
**Description**: Represents registered users of the educational platform

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the user
- `email` (string, unique, required) - User's email address for authentication
- `password_hash` (string, required) - Hashed password for authentication
- `name` (string, required) - Full name of the user
- `role` (string, enum, default: "student") - User role ("student", "resident", "attending", "admin", "content_editor")
- `medical_level` (string, enum) - Medical background level ("medical_student", "resident", "fellow", "attending", "other")
- `is_verified` (boolean, default: false) - Whether email is verified
- `verification_token` (string, nullable) - Token for email verification
- `password_reset_token` (string, nullable) - Token for password reset
- `password_reset_expires` (timestamp, nullable) - When password reset token expires
- `preferences` (JSON) - User preferences for learning (UI theme, content difficulty, etc.)
- `created_at` (timestamp) - Account creation time
- `updated_at` (timestamp) - Last update time
- `last_login_at` (timestamp, nullable) - Last login time
- `is_active` (boolean, default: true) - Whether account is active

**Validation Rules**:
- Email must be valid email format
- Password must meet security requirements
- Role must be one of defined enum values
- Medical_level must be one of defined enum values

### UserProfile
**Description**: Extended user profile information for personalized learning

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the profile
- `user_id` (UUID, foreign key, required) - Reference to the user
- `institution` (string, nullable) - Educational institution or hospital
- `specialty_interest` (string, nullable) - Area of medical specialty interest
- `learning_goals` (JSON) - Array of learning goals and objectives
- `preferred_language` (string, default: "en") - Preferred language for content
- `timezone` (string, default: "UTC") - User's timezone
- `bio` (text, nullable) - User bio or description
- `avatar_url` (string, nullable) - URL to user's avatar image
- `created_at` (timestamp) - Profile creation time
- `updated_at` (timestamp) - Last profile update time

**Validation Rules**:
- User_id must reference existing user
- Preferred_language must be supported language
- Timezone must be valid timezone identifier

### BookContent
**Description**: Represents the textbook content organized in hierarchical structure

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the content
- `parent_id` (UUID, foreign key, nullable) - Reference to parent content (for hierarchy)
- `type` (string, enum, required) - Type of content ("part", "chapter", "section", "subsection", "appendix")
- `title` (string, required) - Title of the content
- `slug` (string, unique, required) - URL-friendly identifier
- `content` (text, required) - Main content in Markdown format
- `order_number` (integer, required) - Order within parent (for sorting)
- `part_number` (integer, nullable) - Part number (for top-level parts)
- `chapter_number` (integer, nullable) - Chapter number (for chapters)
- `section_number` (string, nullable) - Section number (for sections like "2.3.1")
- `metadata` (JSON) - Additional metadata (keywords, learning objectives, authors, etc.)
- `is_published` (boolean, default: true) - Whether content is publicly available
- `version` (string, default: "1.0.0") - Content version
- `language` (string, default: "en") - Content language
- `created_at` (timestamp) - Content creation time
- `updated_at` (timestamp) - Last content update time
- `created_by` (UUID, foreign key) - Reference to user who created content
- `updated_by` (UUID, foreign key) - Reference to user who last updated content

**Validation Rules**:
- Type must be one of defined enum values
- Slug must be unique across all content
- Parent_id must reference existing content or be null for root level
- Order_number must be positive
- Language must be supported language

### LearningProgress
**Description**: Tracks user progress through the textbook content

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the progress record
- `user_id` (UUID, foreign key, required) - Reference to the user
- `content_id` (UUID, foreign key, required) - Reference to the content
- `status` (string, enum, default: "not_started") - Progress status ("not_started", "in_progress", "completed")
- `completion_percentage` (decimal, range: 0-100, default: 0) - Percentage of content completed
- `time_spent_seconds` (integer, default: 0) - Time spent on content in seconds
- `last_accessed_at` (timestamp) - When content was last accessed
- `first_accessed_at` (timestamp) - When content was first accessed
- `completed_at` (timestamp, nullable) - When content was completed
- `notes` (text, nullable) - User's notes on the content
- `quiz_scores` (JSON) - Scores for quizzes within the content
- `engagement_metrics` (JSON) - Metrics like scroll depth, clicks, etc.
- `created_at` (timestamp) - Record creation time
- `updated_at` (timestamp) - Last update time

**Validation Rules**:
- User_id must reference existing user
- Content_id must reference existing content
- Status must be one of defined enum values
- Completion_percentage must be between 0 and 100
- Time_spent_seconds must be non-negative

### Quiz
**Description**: Quiz questions associated with specific content sections

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the quiz
- `content_id` (UUID, foreign key, required) - Reference to the content
- `title` (string, required) - Title of the quiz
- `description` (text, nullable) - Description of the quiz
- `questions` (JSON, required) - Array of questions with options and answers
- `passing_score` (decimal, range: 0-100, default: 70) - Minimum score to pass
- `max_attempts` (integer, default: 3) - Maximum number of attempts allowed
- `time_limit_minutes` (integer, nullable) - Time limit for quiz (null for untimed)
- `is_active` (boolean, default: true) - Whether quiz is active
- `randomize_questions` (boolean, default: false) - Whether to randomize question order
- `created_at` (timestamp) - Quiz creation time
- `updated_at` (timestamp) - Last update time
- `created_by` (UUID, foreign key) - Reference to user who created quiz

**Validation Rules**:
- Content_id must reference existing content
- Questions must have valid structure with at least one correct answer
- Passing_score must be between 0 and 100
- Max_attempts must be positive
- Time_limit_minutes must be non-negative if provided

### QuizAttempt
**Description**: Records of user attempts at quizzes

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the attempt
- `quiz_id` (UUID, foreign key, required) - Reference to the quiz
- `user_id` (UUID, foreign key, required) - Reference to the user
- `attempt_number` (integer, required) - Attempt number for this quiz by this user
- `score` (decimal, range: 0-100) - Score achieved on the attempt
- `responses` (JSON) - User's responses to questions
- `feedback` (JSON) - Feedback provided for answers
- `started_at` (timestamp) - When the attempt was started
- `completed_at` (timestamp, nullable) - When the attempt was completed
- `time_taken_seconds` (integer) - Time taken to complete the quiz
- `is_passed` (boolean) - Whether the attempt passed the quiz
- `created_at` (timestamp) - Record creation time

**Validation Rules**:
- Quiz_id and user_id must reference existing records
- Attempt_number must be positive
- Score must be between 0 and 100
- Completed_at must be after started_at if provided

### UserSession
**Description**: Manages user authentication sessions

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the session
- `user_id` (UUID, foreign key, required) - Reference to the user
- `session_token` (string, unique, required) - Session identifier token
- `refresh_token` (string, unique, required) - Refresh token for session extension
- `expires_at` (timestamp, required) - When the session expires
- `ip_address` (string) - IP address of the user
- `user_agent` (text) - User agent string for the browser/device
- `is_active` (boolean, default: true) - Whether session is currently active
- `created_at` (timestamp) - Session creation time
- `last_accessed_at` (timestamp) - Last access time

**Validation Rules**:
- User_id must reference existing user
- Session_token and refresh_token must be unique
- Expires_at must be in the future

### ContentTag
**Description**: Tags for categorizing and organizing content

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the tag
- `name` (string, unique, required) - Name of the tag
- `category` (string, required) - Category of the tag (e.g., "imaging-modality", "body-system", "pathology-type")
- `description` (text, nullable) - Description of what the tag represents
- `is_active` (boolean, default: true) - Whether the tag is active
- `created_at` (timestamp) - Tag creation time

**Validation Rules**:
- Name must be unique
- Name and category must not be empty

### ContentTagging
**Description**: Junction table to connect content with tags

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the relationship
- `content_id` (UUID, foreign key, required) - Reference to the content
- `tag_id` (UUID, foreign key, required) - Reference to the tag
- `confidence` (decimal, range: 0-1, default: 1.0) - Confidence level of the tag assignment
- `assigned_by` (string, enum, default: "manual") - How the tag was assigned ("manual", "automated")
- `created_at` (timestamp) - Relationship creation time

**Validation Rules**:
- Content_id and tag_id must reference existing records
- Confidence must be between 0 and 1

### UserPreference
**Description**: User-specific preferences for the platform experience

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the preference
- `user_id` (UUID, foreign key, required) - Reference to the user
- `preference_key` (string, required) - Key for the preference (e.g., "theme", "content_difficulty", "notifications_enabled")
- `preference_value` (text, required) - Value for the preference
- `created_at` (timestamp) - Preference creation time
- `updated_at` (timestamp) - Last update time

**Validation Rules**:
- User_id must reference existing user
- Preference_key must not be empty
- Preference_value must not be empty

## Relationships

### User ↔ UserProfile
- One-to-one relationship
- Each user has one profile
- Each profile belongs to one user

### User ↔ LearningProgress
- One-to-many relationship
- A user can have progress records for multiple content items
- A progress record belongs to one user

### BookContent ↔ LearningProgress
- One-to-many relationship
- A content item can have progress records from multiple users
- A progress record belongs to one content item

### User ↔ QuizAttempt
- One-to-many relationship
- A user can make multiple quiz attempts
- A quiz attempt belongs to one user

### Quiz ↔ QuizAttempt
- One-to-many relationship
- A quiz can have multiple attempts
- A quiz attempt belongs to one quiz

### BookContent ↔ Quiz
- One-to-many relationship
- A content item can have multiple quizzes
- A quiz belongs to one content item

### User ↔ UserSession
- One-to-many relationship
- A user can have multiple active sessions
- A session belongs to one user

### BookContent ↔ ContentTagging
- One-to-many relationship
- A content item can have multiple tags
- A content tagging record belongs to one content item

### ContentTag ↔ ContentTagging
- One-to-many relationship
- A tag can be applied to multiple content items
- A content tagging record belongs to one tag

### User ↔ UserPreference
- One-to-many relationship
- A user can have multiple preferences
- A preference belongs to one user

## Indexes

### Essential Indexes
- `users.email`: Unique index for fast user lookup by email
- `users.created_at`: Index for sorting/filtering by account creation date
- `book_content.slug`: Unique index for fast content lookup by slug
- `book_content.parent_id, book_content.order_number`: Composite index for hierarchical ordering
- `book_content.type, book_content.part_number, book_content.chapter_number`: Composite index for textbook organization
- `learning_progress.user_id, learning_progress.content_id`: Composite index for user's progress on specific content
- `learning_progress.user_id, learning_progress.status`: Composite index for user's progress status
- `quiz_attempts.quiz_id, quiz_attempts.user_id, quiz_attempts.attempt_number`: Composite index for user's quiz attempts
- `user_sessions.user_id, user_sessions.is_active`: Composite index for active user sessions
- `content_taggings.content_id, content_taggings.tag_id`: Composite index for content-tag relationships

## Constraints

### Referential Integrity
- Foreign key constraints to maintain data consistency
- Cascade deletes where appropriate (e.g., deleting user removes their progress, preferences, etc.)

### Business Logic Constraints
- A user cannot have multiple progress records for the same content item
- A user cannot submit multiple attempts for the same quiz if max attempts reached
- Quiz passing score must be achievable (less than or equal to 100)
- Content hierarchy must be valid (no circular references)
- Session tokens must be unique and expire in the future
- Quiz attempts must have valid relationships to existing quizzes and users