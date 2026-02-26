# Data Model: Radiology Text Book - RAG Chatbot with Text Selection Query

## Overview

This document defines the data models for the RAG (Retrieval-Augmented Generation) chatbot with text selection functionality for the Radiology Text Book platform. The model includes entities for conversations, queries, responses, embeddings, and user interactions.

## Core Entities

### ConversationSession
**Description**: Represents a chat session between a user and the AI assistant

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the conversation session
- `user_id` (UUID, foreign key, nullable) - Reference to the user (nullable for anonymous sessions)
- `session_token` (string, unique) - Anonymous session identifier for tracking
- `created_at` (timestamp) - When the session started
- `updated_at` (timestamp) - Last activity in the session
- `expires_at` (timestamp) - When the session expires
- `is_active` (boolean, default: true) - Whether the session is currently active
- `metadata` (JSON) - Additional session information (user agent, device, etc.)

**Validation Rules**:
- Either user_id or session_token must be present
- Expires_at must be after created_at
- Is_active can only be set to false when session is completed

### UserQuery
**Description**: Represents a user's query or text selection to the AI system

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the query
- `conversation_id` (UUID, foreign key, required) - Reference to the conversation session
- `query_text` (text, required) - The actual text of the user's query
- `selected_text` (text, nullable) - Text that was selected when the query was made (for text selection queries)
- `query_type` (string, enum, required) - Type of query ("general", "text_selection", "follow_up", "clarification")
- `context` (JSON) - Additional context provided with the query
- `page_reference` (string, nullable) - Reference to the page/chapter where query originated
- `position_data` (JSON) - Coordinates or position data for text selection
- `created_at` (timestamp) - When the query was submitted
- `processed_at` (timestamp, nullable) - When the query was processed
- `is_processed` (boolean, default: false) - Whether the query has been processed

**Validation Rules**:
- Query_text must not be empty
- Query_type must be one of the defined enum values
- If query_type is "text_selection", selected_text must be present and non-empty

### ChatResponse
**Description**: The AI-generated response to a user query

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the response
- `query_id` (UUID, foreign key, required) - Reference to the user query
- `response_text` (text, required) - The AI-generated response
- `confidence_score` (decimal, range: 0-1) - Confidence level of the response
- `sources` (JSON) - Array of sources used in the response with page/chapter references
- `citations` (JSON) - Detailed citations for information in the response
- `response_metadata` (JSON) - Additional metadata about the response generation
- `created_at` (timestamp) - When the response was generated
- `token_usage` (JSON) - Token usage statistics for the AI call
- `processing_time_ms` (integer) - Time taken to process the query in milliseconds

**Validation Rules**:
- Response_text must not be empty
- Confidence_score must be between 0 and 1
- Sources must be a valid array of source objects

### VectorEmbedding
**Description**: Stores vector embeddings for content chunks used in similarity search

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the embedding
- `content_chunk` (text, required) - The original text content that was embedded
- `embedding_vector` (JSON, required) - The vector representation of the content
- `content_type` (string, enum) - Type of content ("text", "image_caption", "table_summary")
- `chapter_id` (UUID, foreign key) - Reference to the chapter this content belongs to
- `section_id` (UUID, foreign key, nullable) - Reference to the specific section
- `chunk_index` (integer) - Position of this chunk within the original content
- `metadata` (JSON) - Additional metadata for the embedding
- `created_at` (timestamp) - When the embedding was created
- `embedding_model` (string) - The model used to generate this embedding

**Validation Rules**:
- Content_chunk must not be empty
- Embedding_vector must be a valid array of numeric values
- Content_type must be one of the defined enum values

### RetrievedContext
**Description**: Represents the context retrieved from the vector database to support a response

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the retrieved context
- `query_id` (UUID, foreign key, required) - Reference to the user query
- `response_id` (UUID, foreign key, nullable) - Reference to the response (nullable during generation)
- `embedding_id` (UUID, foreign key, required) - Reference to the vector embedding
- `similarity_score` (decimal, range: 0-1) - Similarity score of this context to the query
- `rank` (integer) - Rank of this context among retrieved results
- `is_used` (boolean, default: false) - Whether this context was actually used in the response
- `created_at` (timestamp) - When this context was retrieved

**Validation Rules**:
- Similarity_score must be between 0 and 1
- Rank must be positive

### TextSelection
**Description**: Represents a user's text selection in the textbook

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the selection
- `user_id` (UUID, foreign key, nullable) - Reference to the user (nullable for anonymous)
- `session_id` (UUID, foreign key, required) - Reference to the session
- `selected_text` (text, required) - The actual text that was selected
- `page_reference` (string, required) - Reference to the page/chapter where selection occurred
- `selection_bounds` (JSON) - Information about the selection boundaries
- `annotation` (text, nullable) - User's annotation or note about the selection
- `is_bookmarked` (boolean, default: false) - Whether this selection is bookmarked
- `created_at` (timestamp) - When the selection was made
- `last_accessed_at` (timestamp, nullable) - When the selection was last viewed

**Validation Rules**:
- Selected_text must not be empty
- Page_reference must not be empty

### SourceCitation
**Description**: Detailed citation information for content used in responses

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the citation
- `response_id` (UUID, foreign key, required) - Reference to the response
- `source_type` (string, enum) - Type of source ("chapter", "section", "figure", "table", "reference")
- `source_identifier` (string) - Identifier for the specific source (chapter number, figure number, etc.)
- `content_excerpt` (text) - Excerpt from the source content
- `page_number` (integer) - Page number where the content appears
- `relevance_score` (decimal, range: 0-1) - How relevant this source was to the response
- `created_at` (timestamp) - When the citation was created

**Validation Rules**:
- Source_type must be one of the defined enum values
- Relevance_score must be between 0 and 1

### ConversationTurn
**Description**: Represents a single turn in a conversation (query + response pair)

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the turn
- `conversation_id` (UUID, foreign key, required) - Reference to the conversation
- `turn_number` (integer, required) - Sequential number of this turn in the conversation
- `query_id` (UUID, foreign key, required) - Reference to the user query
- `response_id` (UUID, foreign key, nullable) - Reference to the AI response (nullable if still processing)
- `summary` (text, nullable) - Brief summary of this turn
- `created_at` (timestamp) - When this turn was created
- `updated_at` (timestamp) - When this turn was last updated

**Validation Rules**:
- Turn_number must be positive
- Combination of conversation_id and turn_number must be unique

### UserFeedback
**Description**: User feedback on AI responses to improve quality

**Fields**:
- `id` (UUID, primary key) - Unique identifier for the feedback
- `response_id` (UUID, foreign key, required) - Reference to the response being rated
- `user_id` (UUID, foreign key, nullable) - Reference to the user (nullable for anonymous feedback)
- `rating` (integer, range: 1-5) - Rating of the response quality (1-5 stars)
- `is_helpful` (boolean) - Whether the response was helpful
- `feedback_text` (text, nullable) - Additional textual feedback
- `reported_issue` (string, enum, nullable) - Reported issue type ("inaccurate", "irrelevant", "unsafe", "other")
- `created_at` (timestamp) - When the feedback was submitted

**Validation Rules**:
- Rating must be between 1 and 5
- If reported_issue is provided, it must be one of the defined enum values

## Relationships

### ConversationSession ↔ UserQuery
- One-to-many relationship
- A conversation session can have multiple user queries
- A user query belongs to one conversation session

### UserQuery ↔ ChatResponse
- One-to-one relationship (each query generates one response)
- A user query can have one response
- A response belongs to one user query

### UserQuery ↔ RetrievedContext
- One-to-many relationship
- A user query can have multiple retrieved contexts
- A retrieved context belongs to one user query

### VectorEmbedding ↔ RetrievedContext
- One-to-many relationship
- A vector embedding can be used in multiple retrieved contexts
- A retrieved context references one vector embedding

### UserQuery ↔ TextSelection
- One-to-zero-or-one relationship
- A user query may be based on a text selection
- A text selection can be associated with multiple queries

### ChatResponse ↔ SourceCitation
- One-to-many relationship
- A response can cite multiple sources
- A source citation belongs to one response

### ConversationSession ↔ ConversationTurn
- One-to-many relationship
- A conversation session can have multiple turns
- A conversation turn belongs to one session

### ChatResponse ↔ UserFeedback
- One-to-many relationship
- A response can receive multiple feedback entries
- A feedback entry is for one response

## Indexes

### Essential Indexes
- `conversations.expires_at`: Index for session cleanup jobs
- `user_queries.conversation_id, user_queries.created_at`: Composite index for chronological query retrieval
- `chat_responses.query_id`: Index for finding responses to specific queries
- `vector_embeddings.chapter_id, vector_embeddings.chunk_index`: Composite index for content ordering
- `retrieved_context.query_id, retrieved_context.rank`: Composite index for retrieving ranked results
- `text_selections.user_id, text_selections.created_at`: Composite index for user's selections
- `source_citations.response_id`: Index for finding citations for responses
- `user_feedback.response_id`: Index for finding feedback for responses
- `conversations.user_id, conversations.updated_at`: Composite index for user's conversation history

## Constraints

### Referential Integrity
- Foreign key constraints to maintain data consistency
- Cascade deletes where appropriate (e.g., deleting conversation removes queries/responses)

### Business Logic Constraints
- A conversation cannot have multiple active turns simultaneously
- Each query in a conversation must have a sequential turn number
- Responses must be linked to valid queries
- Vector embeddings must have valid vector representations
- User feedback can only be submitted for completed responses
- Text selections must reference valid content locations