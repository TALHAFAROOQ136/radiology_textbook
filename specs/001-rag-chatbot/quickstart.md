# Quickstart Guide: Radiology Text Book - RAG Chatbot with Text Selection Query

## Overview

This guide provides instructions for setting up and running the RAG (Retrieval-Augmented Generation) chatbot with text selection functionality for the Radiology Text Book platform. The system allows users to ask questions about radiology content and select text for contextual queries.

## Prerequisites

- Python 3.11 or higher
- Node.js v18 or higher
- Git
- Access to OpenAI API key
- Access to Qdrant Cloud account
- Docker and Docker Compose (for local development)

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd radiology-text-book
```

### 2. Set Up Backend Services

```bash
cd backend
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key
DATABASE_URL=postgresql://username:password@localhost:5432/radiology_chatbot
NEON_DATABASE_URL=your_neon_postgres_connection_string
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_encryption_key_for_sensitive_data
CONTENT_INDEXING_BATCH_SIZE=50
MAX_CONCURRENT_REQUESTS=10
CACHE_TTL_SECONDS=3600
```

## Database Setup

### 1. Set Up Neon Serverless Postgres

1. Create an account at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string to your `.env` file as `NEON_DATABASE_URL`

### 2. Run Database Migrations

```bash
cd backend
python -m alembic upgrade head
```

## Vector Database Setup (Qdrant)

### 1. Set Up Qdrant Cloud

1. Create an account at [Qdrant Cloud](https://cloud.qdrant.io)
2. Create a new cluster
3. Create a collection named `radiology_content` with appropriate vector dimensions (typically 1536 for OpenAI embeddings)

### 2. Initialize Vector Database

```bash
cd backend
python scripts/vector-embedder.py --initialize
```

## Content Indexing

### 1. Prepare Content for Embedding

Ensure your radiology textbook content is available in the appropriate format (Markdown files in the `frontend/docs` directory).

### 2. Run Content Indexing

```bash
cd backend
python scripts/content-indexer.py --index-all
```

This will process all content and create vector embeddings in Qdrant.

## Running the Application

### 1. Start Backend Services

```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Start Frontend (Docusaurus)

In a new terminal:

```bash
cd frontend
npm install
npm start
```

The chatbot interface will be available as part of the Docusaurus site at `http://localhost:3000`.

## Development Workflow

### Adding New Content

1. Create new markdown files in the `frontend/docs/` directory
2. Update `frontend/sidebars.js` to include the new content in the navigation
3. Re-index the content to update the vector database:

```bash
cd backend
python scripts/content-indexer.py --reindex-changed
```

### Text Selection Feature

The text selection functionality is implemented as a Docusaurus plugin. When users select text on the page:

1. The selection is captured by the JavaScript handler
2. Context around the selection is preserved
3. The query is sent to the backend with the selected text
4. The AI generates a response based on the selected text and context

### Testing

#### Backend Tests

```bash
cd backend
pytest tests/
```

#### Frontend Tests

```bash
cd frontend
npm test
```

#### Integration Tests

```bash
cd backend
pytest tests/integration/
```

## API Endpoints

### Chat Query Endpoint

```
POST /api/chat/query
```

Request body:
```json
{
  "query": "Your question about radiology content",
  "context": {
    "page_reference": "part-1/chapter-2",
    "previous_conversation": []
  },
  "user_id": "optional_user_id"
}
```

### Text Selection Endpoint

```
POST /api/chat/selection
```

Request body:
```json
{
  "selected_text": "The text the user selected",
  "query": "Their question about the selected text",
  "context": {
    "page_reference": "part-1/chapter-2",
    "surrounding_text": "Text before and after selection"
  },
  "user_id": "optional_user_id"
}
```

### Conversation History Endpoint

```
GET /api/chat/history/{session_id}
```

## Configuration Options

### RAG Parameters

Adjust these parameters in `backend/config/rag-config.ts`:

- `SIMILARITY_THRESHOLD`: Minimum similarity score for content retrieval (default: 0.7)
- `MAX_CONTEXT_LENGTH`: Maximum tokens in context window (default: 2048)
- `TOP_K_RESULTS`: Number of results to retrieve (default: 5)
- `TEMPERATURE`: AI response creativity (default: 0.3)

### Performance Tuning

- `MAX_CONCURRENT_REQUESTS`: Limit simultaneous AI requests
- `CACHE_TTL_SECONDS`: Cache expiration time
- `CONTENT_INDEXING_BATCH_SIZE`: Batch size for content indexing

## Troubleshooting

### Common Issues

1. **API Connection Errors**: Verify your OpenAI and Qdrant API keys are correct
2. **Slow Response Times**: Check if your vector database is properly indexed
3. **Text Selection Not Working**: Ensure the Docusaurus plugin is properly configured
4. **Content Not Found**: Verify content has been properly indexed in Qdrant

### Debugging Tips

1. Enable debug logging by setting `LOG_LEVEL=DEBUG` in your environment
2. Check the console logs in both frontend and backend terminals
3. Verify all environment variables are properly set
4. Confirm vector embeddings were created successfully

## Security Considerations

### Data Protection

- All user conversations are encrypted at rest
- API keys are stored securely and not exposed to frontend
- Rate limiting is implemented to prevent abuse
- User consent is required for data collection

### Medical Content Safety

- All AI responses are grounded in textbook content
- Confidence scores are provided for each response
- Out-of-scope medical questions are handled appropriately
- Medical disclaimers are included in responses

## Deployment

### Backend (Production)

1. Use a production-ready ASGI server like Gunicorn:
   ```bash
   gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
   ```

2. Set up proper SSL certificates
3. Configure a reverse proxy (nginx)
4. Set up monitoring and logging

### Frontend (Production)

```bash
cd frontend
npm run build
```

Deploy the build output to your preferred hosting platform.

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Frontend      │    │   Backend        │    │   External       │
│   (Docusaurus)  │◄──►│   (FastAPI)      │◄──►│   Services       │
│                 │    │                  │    │                  │
│ - Text Selection│    │ - RAG Service    │    │ - OpenAI API     │
│ - Chat Widget   │    │ - Qdrant Service │    │ - Qdrant Cloud   │
│ - Content Pages │    │ - Content Service│    │ - Neon Postgres  │
│ - Docusaurus    │    │ - Conversation   │    │                  │
└─────────────────┘    │   Service        │    └──────────────────┘
                       └──────────────────┘
```

The architecture separates frontend content delivery from backend AI processing, allowing for optimal performance and scalability.