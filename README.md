# AI-Native Radiology Textbook Platform

An innovative educational platform for radiology education that combines traditional textbook content with AI-powered interactive learning experiences.

## Overview

The AI-Native Radiology Textbook Platform is designed to revolutionize medical education by providing:

- Comprehensive radiology textbook content organized in a structured format
- AI-powered chatbot with Retrieval-Augmented Generation (RAG) for interactive Q&A
- Personalized learning paths based on medical background and proficiency
- Progress tracking and assessment tools
- Multilingual support (English/Urdu)

## Architecture

The platform consists of:

- **Frontend**: Docusaurus-based documentation site for content delivery
- **Backend**: Node.js/Express services for authentication, AI processing, and user management
- **Database**: Neon Serverless Postgres for user data and progress tracking
- **Vector Store**: Qdrant Cloud for content embeddings and similarity search
- **AI Services**: OpenAI API for language understanding and generation

## Features

1. **Structured Content Delivery**:
   - 7-part textbook organization covering all radiology fundamentals
   - Interactive navigation and search capabilities
   - Responsive design for all device types

2. **AI-Powered Learning**:
   - RAG-based chatbot for answering radiology questions
   - Text selection queries for contextual learning
   - Evidence-based responses grounded in textbook content

3. **User Management**:
   - Secure authentication with Better-Auth
   - Personalized learning profiles
   - Progress tracking and achievement badges

4. **Educational Tools**:
   - Interactive quizzes and assessments
   - Image galleries with annotation tools
   - Bookmarking and note-taking capabilities

## Prerequisites

- Node.js 18+
- Python 3.11+
- Git
- Access to OpenAI API key
- Access to Neon Postgres account
- Access to Qdrant Cloud account

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd radiology-textbook-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   cd backend
   pip install -r requirements.txt
   ```

3. Set up environment variables (copy `.env.example` to `.env` and fill in values)

4. Initialize the database and vector store

5. Start the development servers:
   ```bash
   npm run dev
   ```

## Development

The platform follows a component-based architecture with clear separation of concerns:

- Content management in the `docs/` directory
- Frontend components in the `frontend/src/` directory
- Backend services in the `backend/src/` directory
- API contracts in the `backend/src/api/` directory

## Deployment

The platform is designed for deployment to GitHub Pages (frontend) and Vercel/Netlify (backend services) with automated CI/CD pipelines.

## Contributing

We welcome contributions to improve the platform. Please follow our contribution guidelines.

## License

This project is licensed under the MIT License.