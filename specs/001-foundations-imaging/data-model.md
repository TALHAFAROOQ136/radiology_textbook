# Data Model: Radiology Text Book - Part I: Foundations of Medical Imaging

## Overview

This document defines the data models for Part I of the Radiology Text Book: Foundations of Medical Imaging, including entities, relationships, and validation rules derived from the functional requirements. The model focuses on the 5 foundational chapters and their associated learning features.

## Core Entities

### Chapter
**Description**: Individual sections of Part I of the textbook (Chapters 1-5)

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the chapter
- `part_number` (integer, required) - Part number (1 for Foundations)
- `chapter_number` (integer, required) - Chapter number within the part (1-5)
- `title` (string, required) - Title of the chapter
- `slug` (string, unique, required) - URL-friendly identifier
- `description` (text) - Brief description of the chapter content
- `content` (text, required) - Main content of the chapter in markdown format
- `learning_objectives` (JSON) - Array of learning objectives for the chapter
- `duration_estimate` (integer) - Estimated reading time in minutes
- `prerequisites` (JSON) - Array of prerequisite knowledge or chapters
- `multimedia_assets` (JSON) - List of associated multimedia files
- `assessment_ids` (JSON) - Array of related assessment IDs
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp
- `is_published` (boolean, default: true) - Whether the chapter is publicly available

**Validation Rules**:
- Part number must be 1 for Foundations of Medical Imaging
- Chapter number must be between 1 and 5
- Title and slug must not be empty
- Content must exist and have minimum length

### ContentSection
**Description**: Individual sections within a chapter for granular content organization

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the section
- `chapter_id` (UUID, foreign key, required) - Reference to the parent chapter
- `title` (string, required) - Title of the section
- `slug` (string, required) - URL-friendly identifier for the section
- `content` (text, required) - Content of the section in markdown format
- `section_order` (integer, required) - Order of the section within the chapter
- `learning_objectives` (JSON) - Specific learning objectives for this section
- `multimedia_assets` (JSON) - List of multimedia assets specific to this section
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- Chapter reference must exist
- Section order must be positive
- Content must not be empty

### UserProgress
**Description**: Tracks user progress through Part I chapters

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the progress record
- `user_id` (UUID, foreign key, required) - Reference to the user
- `chapter_id` (UUID, foreign key, required) - Reference to the chapter
- `section_id` (UUID, foreign key, nullable) - Reference to the current section
- `completion_percentage` (decimal, range: 0-100, required) - Percentage of chapter completed
- `time_spent_seconds` (integer, default: 0) - Total time spent on the chapter in seconds
- `last_accessed_at` (timestamp) - When the chapter was last accessed
- `notes` (text, nullable) - User's notes on the chapter
- `is_completed` (boolean, default: false) - Whether the chapter is marked as completed
- `completed_at` (timestamp, nullable) - When the chapter was completed
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- User and chapter references must exist
- Completion percentage must be between 0 and 100
- Time spent cannot be negative

### Assessment
**Description**: Self-assessment questions and exercises for each chapter

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the assessment
- `chapter_id` (UUID, foreign key, required) - Reference to the chapter this assessment belongs to
- `title` (string, required) - Title of the assessment
- `description` (text) - Description of the assessment
- `type` (string, enum, required) - Type of assessment ("quiz", "case_study", "interactive")
- `questions` (JSON, required) - Array of questions with options and correct answers
- `passing_score` (decimal, range: 0-100, default: 70) - Minimum score to pass
- `max_attempts` (integer, default: 3) - Maximum number of attempts allowed
- `time_limit_minutes` (integer, nullable) - Time limit for the assessment (null for untimed)
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- Chapter reference must exist
- Questions must have valid structure with at least one correct answer
- Passing score must be between 0 and 100
- Max attempts must be positive

### AssessmentAttempt
**Description**: Records of user attempts at assessments

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the attempt
- `assessment_id` (UUID, foreign key, required) - Reference to the assessment
- `user_id` (UUID, foreign key, required) - Reference to the user
- `score` (decimal, range: 0-100) - Score achieved on the attempt
- `responses` (JSON) - User's responses to questions
- `feedback` (JSON) - Feedback provided for answers
- `attempt_number` (integer) - Attempt number for this assessment by the user
- `started_at` (timestamp) - When the attempt was started
- `completed_at` (timestamp, nullable) - When the attempt was completed
- `is_passed` (boolean) - Whether the attempt passed the assessment
- `created_at` (timestamp) - Creation timestamp

**Validation Rules**:
- Assessment and user references must exist
- Score must be between 0 and 100
- Completed time must be after started time
- Attempt number must be positive

### MultimediaAsset
**Description**: Media files associated with chapters and sections

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the asset
- `filename` (string, required) - Original filename
- `display_name` (string, required) - Name to display to users
- `asset_type` (string, enum, required) - Type of media ("image", "video", "diagram", "animation")
- `file_path` (string, required) - Path to the file in storage
- `alt_text` (text) - Alternative text for accessibility
- `caption` (text) - Caption to display with the asset
- `metadata` (JSON) - Additional metadata (dimensions, duration, etc.)
- `created_at` (timestamp) - Creation timestamp

**Validation Rules**:
- File path must exist
- Asset type must be one of the predefined values
- Alt text is required for images for accessibility

### Bookmark
**Description**: Saved references to specific content sections with user notes

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the bookmark
- `user_id` (UUID, foreign key, required) - Reference to the user
- `chapter_id` (UUID, foreign key, required) - Reference to the chapter
- `section_id` (UUID, foreign key, nullable) - Reference to the specific section
- `title` (string) - Title of the bookmark
- `content_snippet` (text) - Snippet of the bookmarked content
- `position` (integer) - Position in the content (for navigation)
- `notes` (text, nullable) - User's notes on the bookmarked section
- `tags` (JSON) - Array of tags for organizing bookmarks
- `created_at` (timestamp) - Creation timestamp
- `updated_at` (timestamp) - Last update timestamp

**Validation Rules**:
- User and chapter references must exist
- Position must be non-negative

### ContentTag
**Description**: Tags for categorizing and organizing content

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the tag
- `name` (string, unique, required) - Name of the tag
- `category` (string, required) - Category of the tag (e.g., "physics", "safety", "modality")
- `description` (text) - Description of what the tag represents
- `created_at` (timestamp) - Creation timestamp

**Validation Rules**:
- Name must be unique
- Name and category must not be empty

### ChapterTag
**Description**: Junction table to connect chapters with tags

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the relationship
- `chapter_id` (UUID, foreign key, required) - Reference to the chapter
- `tag_id` (UUID, foreign key, required) - Reference to the tag
- `created_at` (timestamp) - Creation timestamp

**Validation Rules**:
- Both chapter and tag references must exist
- Combination of chapter_id and tag_id must be unique

## Relationships

### Chapter ↔ ContentSection
- One-to-many relationship
- A chapter can have multiple sections
- A section belongs to one chapter

### User ↔ UserProgress
- One-to-many relationship
- A user can have progress records for multiple chapters
- A progress record belongs to one user

### Chapter ↔ UserProgress
- One-to-many relationship
- A chapter can have progress records for multiple users
- A progress record belongs to one chapter

### Chapter ↔ Assessment
- One-to-many relationship
- A chapter can have multiple assessments
- An assessment belongs to one chapter

### Assessment ↔ AssessmentAttempt
- One-to-many relationship
- An assessment can have multiple attempts
- An assessment attempt belongs to one assessment

### User ↔ AssessmentAttempt
- One-to-many relationship
- A user can make multiple assessment attempts
- An assessment attempt belongs to one user

### Chapter ↔ MultimediaAsset
- Many-to-many relationship (through chapter_multimedia junction table)
- A chapter can have multiple multimedia assets
- A multimedia asset can be associated with multiple chapters

### User ↔ Bookmark
- One-to-many relationship
- A user can have multiple bookmarks
- A bookmark belongs to one user

### Chapter ↔ Bookmark
- One-to-many relationship
- A chapter can have multiple bookmarks from different users
- A bookmark belongs to one chapter

### Chapter ↔ ContentTag
- Many-to-many relationship
- A chapter can have multiple tags
- A tag can be applied to multiple chapters

## Indexes

### Essential Indexes
- `chapters.part_number, chapters.chapter_number`: Composite index for ordering chapters
- `chapters.slug`: Unique index for fast chapter lookup by slug
- `content_sections.chapter_id, content_sections.section_order`: Composite index for ordering sections
- `user_progress.user_id, user_progress.chapter_id`: Composite index for user progress lookups
- `assessments.chapter_id`: Index for finding assessments by chapter
- `assessment_attempts.assessment_id, assessment_attempts.user_id`: Composite index for assessment attempt lookups
- `bookmarks.user_id`: Index for user's bookmarks lookup
- `bookmarks.chapter_id`: Index for chapter bookmarks lookup
- `content_tags.name`: Unique index for fast tag lookup

## Constraints

### Referential Integrity
- Foreign key constraints to maintain data consistency
- Cascade deletes where appropriate (e.g., deleting user removes their progress, bookmarks, etc.)

### Business Logic Constraints
- A user cannot have multiple progress records for the same chapter
- A user cannot submit multiple attempts for the same assessment if max attempts reached
- Assessment passing score must be achievable (less than or equal to 100)
- Chapter numbers in Part I must be between 1 and 5
- Completion percentage must be between 0 and 100
- Sections within a chapter must have unique order values