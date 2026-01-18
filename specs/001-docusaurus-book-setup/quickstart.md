# Quickstart Guide: Radiology Text Book - Docusaurus Book Structure with Authentication, Database, and Deployment Pipeline

## Overview

This guide provides instructions for setting up and running the Docusaurus-based educational platform for the Radiology Text Book with authentication, database management, and deployment pipeline. The system provides a structured learning environment for medical students and healthcare professionals.

## Prerequisites

- Node.js v18 or higher
- Python 3.11 or higher
- Git
- Docker and Docker Compose
- Access to Neon Postgres account
- Access to GitHub for Actions pipeline

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd radiology-text-book
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
REACT_APP_DOCUSAURUS_BASE_URL=http://localhost:3000
REACT_APP_AUTH_REDIRECT_URI=http://localhost:3000/callback
REACT_APP_GITHUB_CLIENT_ID=your_github_client_id
```

**Backend (.env)**:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/radiology_textbook
NEON_DATABASE_URL=your_neon_postgres_connection_string
AUTH_SECRET=your_auth_secret_here
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
PORT=8000
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:8000
ENCRYPTION_KEY=your_encryption_key_for_sensitive_data
```

## Database Setup

### 1. Set Up Neon Serverless Postgres

1. Create an account at [Neon](https://neon.tech)
2. Create a new project called "radiology-textbook"
3. Create a database named "textbook"
4. Copy the connection string to your `.env` file as `NEON_DATABASE_URL`

### 2. Run Database Migrations

```bash
cd backend
python -m alembic upgrade head
```

### 3. Seed Initial Data

```bash
cd backend
python scripts/seed-data.py
```

This will create initial users, content structure, and other baseline data.

## Frontend Setup (Docusaurus)

### 1. Configure Docusaurus

Update `docusaurus.config.js` with your site configuration:

```javascript
module.exports = {
  title: 'Radiology Text Book',
  tagline: 'Comprehensive Radiology Education for Medical Students',
  url: 'https://your-domain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'radiology-textbook',
  // Add authentication plugin configuration
  themes: [
    '@docusaurus/theme-classic',
    '@docusaurus/theme-search-algolia',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/radiology-textbook/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
```

### 2. Add Content Structure

Organize your textbook content in the `frontend/docs/` directory following this structure:

```
docs/
├── part-1-foundations/
│   ├── chapter-01-introduction.md
│   ├── chapter-02-physics.md
│   ├── chapter-03-safety.md
│   ├── chapter-04-contrast.md
│   └── chapter-05-appropriateness.md
├── part-2-positioning/
│   └── ...
├── part-3-chest/
│   └── ...
├── part-4-abdomen/
│   └── ...
├── part-5-msk/
│   └── ...
├── part-6-neuro/
│   └── ...
└── part-7-specialized/
    └── ...
```

## Authentication Setup

### 1. Configure Better-Auth

The authentication is handled by Better-Auth. Ensure your configuration in `backend/src/config/auth.ts`:

```typescript
export const authConfig = {
  databaseUrl: process.env.NEON_DATABASE_URL,
  secret: process.env.AUTH_SECRET,
  email: {
    enabled: true,
    sendVerificationEmail: true,
    sendPasswordResetEmail: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
};
```

### 2. Set Up Authentication Routes

The authentication endpoints are configured in `backend/src/api/auth/`. Ensure these are properly linked to your frontend components.

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
npm start
```

The application will be available at `http://localhost:3000` with the backend API at `http://localhost:8000`.

## Development Workflow

### Adding New Content

1. Create new markdown files in the appropriate part directory in `frontend/docs/`
2. Update `frontend/sidebars.js` to include the new content in the navigation
3. Ensure proper metadata in the markdown file:

```markdown
---
title: Chapter Title
sidebar_label: Chapter Number
description: Brief description of the chapter
---

# Chapter Title

## Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## Content

Your chapter content goes here...
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

#### Integration Tests

```bash
cd backend
pytest tests/integration/
```

## Deployment Pipeline

### GitHub Actions Configuration

The deployment pipeline is configured in `.github/workflows/`:

1. **ci.yml**: Runs on pull requests to test code changes
2. **test.yml**: Runs comprehensive tests on main branch
3. **cd.yml**: Deploys to production when changes are merged to main

### Setting Up GitHub Secrets

In your GitHub repository settings, add these secrets:

```
NEON_DATABASE_URL
AUTH_SECRET
JWT_SECRET
ENCRYPTION_KEY
FRONTEND_URL
BACKEND_URL
```

### Deployment Process

1. Push changes to a feature branch
2. Create a pull request to main
3. CI tests run automatically
4. After merge, CD pipeline deploys to production

## API Endpoints

### Authentication Endpoints

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/profile
PUT /api/auth/profile
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

### User Management Endpoints

```
GET /api/user/progress
POST /api/user/progress
GET /api/user/quizzes
POST /api/user/quizzes/attempt
GET /api/user/preferences
PUT /api/user/preferences
```

### Content Endpoints

```
GET /api/content/search?q={query}
GET /api/content/{content-id}
GET /api/content/tags
POST /api/content/tags/{content-id}
```

## Configuration Options

### Performance Tuning

Adjust these parameters in `backend/config/server.ts`:

- `MAX_CONNECTIONS`: Database connection pool size
- `REQUEST_TIMEOUT`: API request timeout (milliseconds)
- `CACHE_TTL`: Cache time-to-live (seconds)
- `UPLOAD_LIMIT`: File upload size limit

### Content Management

- `CONTENT_VERSIONING`: Enable/disable content versioning
- `AUTO_PUBLISH`: Whether new content is published automatically
- `MODERATION_REQUIRED`: Whether new content requires review

## Troubleshooting

### Common Issues

1. **Database Connection Errors**: Verify your Neon Postgres connection string is correct
2. **Authentication Issues**: Check that AUTH_SECRET and JWT_SECRET are properly set
3. **Content Not Loading**: Ensure content files follow proper Docusaurus format
4. **Deployment Failures**: Verify GitHub secrets are properly configured

### Debugging Tips

1. Enable debug logging by setting `LOG_LEVEL=DEBUG` in your environment
2. Check the console logs in both frontend and backend terminals
3. Verify all environment variables are properly set
4. Confirm database migrations ran successfully

## Security Considerations

### Data Protection

- All user passwords are hashed using bcrypt
- JWT tokens have configurable expiration times
- API rate limiting is implemented to prevent abuse
- Input validation is enforced for all user inputs

### Content Security

- All user-generated content is sanitized
- Content Security Policy headers are set
- File uploads are validated and scanned
- Access control is enforced for content management

## Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Frontend      │    │   Backend        │    │   External       │
│   (Docusaurus)  │◄──►│   (Node.js)      │◄──►│   Services       │
│                 │    │                  │    │                  │
│ - Content Pages │    │ - Auth Service   │    │ - Neon Postgres  │
│ - Navigation    │    │ - User Service   │    │ - GitHub Actions │
│ - Search        │    │ - Content Service│    │ - GitHub Pages   │
│ - User Profile  │    │ - Progress Service│   │ - Email Service  │
└─────────────────┘    │ - API Gateway    │    └──────────────────┘
                       └──────────────────┘
```

The architecture separates static content delivery (Docusaurus) from dynamic services (Node.js API), allowing for optimal performance and scalability.