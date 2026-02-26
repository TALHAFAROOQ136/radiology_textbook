# Quickstart Guide: Radiology Text Book Platform

## Overview

This guide provides instructions for setting up and running the Radiology Text Book platform locally. The platform consists of a Docusaurus frontend for content delivery and backend services for authentication, AI chatbot functionality, and user management.

## Prerequisites

- Node.js v18 or higher
- Python 3.11 or higher
- Git
- Docker and Docker Compose (for local database setup)
- Access to OpenAI API key
- Access to Qdrant Cloud account

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd radiology-textbook-platform
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
pip install -r requirements.txt
```

### 3. Configure Environment Variables

Create `.env` files in both frontend and backend directories:

**Frontend (.env)**:
```env
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
REACT_APP_QDRANT_URL=your_qdrant_cloud_url
REACT_APP_QDRANT_API_KEY=your_qdrant_api_key
```

**Backend (.env)**:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/radiology_textbook
OPENAI_API_KEY=your_openai_api_key_here
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key
JWT_SECRET=your_jwt_secret_here
AUTH_SECRET=your_auth_secret_here
PORT=8000
```

## Database Setup

### 1. Set Up Neon Serverless Postgres

1. Create an account at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string to your `.env` file as `DATABASE_URL`

### 2. Run Database Migrations

```bash
cd backend
python -m alembic upgrade head
```

## Vector Database Setup (Qdrant)

### 1. Set Up Qdrant Cloud

1. Create an account at [Qdrant Cloud](https://cloud.qdrant.io)
2. Create a new cluster
3. Create a collection named `textbook_content` with appropriate vector dimensions

### 2. Initialize Vector Database

```bash
cd backend
python scripts/init_vector_db.py
```

## Running the Application

### 1. Start Backend Services

```bash
cd backend
python -m uvicorn main:app --reload --port 8000
```

### 2. Start Frontend (Docusaurus)

In a new terminal:

```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`.

## Development Workflow

### Adding New Content

1. Create new markdown files in the `frontend/docs/` directory following the existing structure
2. Update `frontend/sidebars.js` to include the new content in the navigation
3. Run content indexing to update the vector database:

```bash
cd backend
python scripts/index_content.py
```

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

#### End-to-End Tests

```bash
cd frontend
npm run test:e2e
```

## API Documentation

The backend API documentation is available at `http://localhost:8000/docs` when running in development mode.

### Key Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/chat/query` - Query the AI chatbot
- `POST /api/chat/selection` - Query selected text to the AI
- `GET /api/user/progress` - Get user learning progress
- `POST /api/user/bookmark` - Create a bookmark
- `GET /api/content/search` - Search textbook content

## Deployment

### Frontend (GitHub Pages)

```bash
cd frontend
GIT_USER=<your-username> CURRENT_BRANCH=master USE_SSH=true yarn deploy
```

### Backend (Vercel/Netlify)

1. Connect your repository to Vercel or Netlify
2. Set environment variables in the platform dashboard
3. Configure build commands:
   - Build command: `npm run build` (or `pip install -r requirements.txt && python -m uvicorn main:app`)
   - Output directory: `dist` (if applicable)

## Troubleshooting

### Common Issues

1. **Database Connection Errors**: Verify your Neon Postgres connection string is correct in `.env`
2. **AI Service Errors**: Check that your OpenAI API key is valid and has sufficient quota
3. **Vector Search Errors**: Ensure Qdrant collection exists and has been properly populated with content
4. **Authentication Issues**: Verify JWT secret is properly configured

### Debugging Tips

1. Enable debug logging by setting `DEBUG=true` in your `.env` files
2. Check the console logs in both frontend and backend terminals
3. Verify all environment variables are properly set
4. Confirm all services are running on expected ports

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Frontend      │    │   Backend        │    │   External       │
│   (Docusaurus)  │◄──►│   (FastAPI)      │◄──►│   Services       │
│                 │    │                  │    │                  │
│ - Static Pages  │    │ - Auth Service   │    │ - OpenAI API     │
│ - Content       │    │ - AI Service     │    │ - Qdrant Cloud   │
│ - Chat Widget   │    │ - User Service   │    │ - Neon Postgres  │
│ - Navigation    │    │ - Content Service│    │                  │
└─────────────────┘    └──────────────────┘    └──────────────────┘
```

The architecture separates static content delivery from dynamic services, allowing for optimal performance and scaling.