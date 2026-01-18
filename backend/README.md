# Radiology Textbook Platform - Backend

This is the backend service for the Radiology Textbook Platform, providing API services for the educational platform with authentication, content management, and user progress tracking.

## Features

- **Authentication**: Secure user registration, login, and session management using Better-Auth
- **Content Management**: APIs for textbook content organization and delivery
- **Progress Tracking**: Learning progress and analytics for students
- **User Management**: Profile management and preferences
- **Quiz System**: Assessment and evaluation capabilities
- **Search Functionality**: Full-text search across all content
- **RESTful API**: Well-structured API endpoints following REST principles

## Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js with TypeScript
- **Database**: Neon Serverless Postgres
- **ORM**: TypeORM for database operations
- **Authentication**: Better-Auth
- **Validation**: Zod for runtime validation
- **Logging**: Winston for structured logging
- **Testing**: Jest for unit and integration tests

## Environment Variables

Create a `.env` file in the backend root directory with the following variables:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/radiology_textbook
NEON_DATABASE_URL=your_neon_postgres_connection_string

# Authentication
AUTH_SECRET=your_auth_secret_here
JWT_SECRET=your_jwt_secret_here

# Application
NODE_ENV=development
PORT=8000
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:8000

# Security
ENCRYPTION_KEY=your_encryption_key_for_sensitive_data

# Optional: Social login providers
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables (see above)

3. Run database migrations:
```bash
npm run migrate
```

4. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:8000` by default.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Content
- `GET /api/content` - Get all content with pagination
- `GET /api/content/:id` - Get specific content
- `GET /api/content/search?q=query` - Search content
- `GET /api/content/hierarchy/:contentId` - Get content hierarchy

### User Progress
- `GET /api/user/progress` - Get user's progress
- `POST /api/user/progress` - Save/update progress
- `GET /api/user/progress/:contentId` - Get progress for specific content
- `POST /api/user/progress/:contentId/mark-started` - Mark content as started
- `POST /api/user/progress/:contentId/update-progress` - Update progress percentage

### User Preferences
- `GET /api/user/preferences` - Get user preferences
- `GET /api/user/preferences/:key` - Get specific preference
- `PUT /api/user/preferences/:key` - Update preference
- `DELETE /api/user/preferences/:key` - Delete preference
- `POST /api/user/preferences/bulk-update` - Bulk update preferences

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run test` - Run all tests
- `npm run test:unit` - Run unit tests
- `npm run test:integration` - Run integration tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
backend/
├── src/
│   ├── models/          # Data models with Zod validation
│   ├── services/        # Business logic services
│   ├── api/             # API controllers
│   ├── routes/          # Express route definitions
│   ├── middleware/      # Express middleware
│   ├── utils/           # Utility functions
│   ├── db/              # Database connection and configuration
│   └── types/           # TypeScript type definitions
├── tests/               # Test files
├── scripts/             # Utility scripts
├── migrations/          # Database migration files
├── package.json
└── tsconfig.json
```

## Database Schema

The application uses a PostgreSQL database with the following main entities:
- User: Authentication and profile information
- BookContent: Textbook content organized hierarchically
- LearningProgress: User progress tracking
- Quiz: Quiz questions and settings
- QuizAttempt: User quiz attempt records
- UserPreference: User-specific preferences
- ContentTag: Content categorization tags

## Security

- Passwords are hashed using bcrypt
- JWT tokens for session management
- Input validation using Zod schemas
- Rate limiting to prevent abuse
- CORS configured for secure cross-origin requests
- Helmet for security HTTP headers

## Development

The backend follows a service-oriented architecture where business logic is encapsulated in service classes. Each API endpoint controller calls the appropriate service methods to perform operations.

Models use Zod schemas for validation and TypeScript types for type safety.

## Testing

The test suite includes:
- Unit tests for individual functions and methods
- Integration tests for API endpoints
- Database integration tests

Run `npm run test` to execute all tests.

## Deployment

For production deployment:
1. Set `NODE_ENV=production` in your environment
2. Ensure your database connection string is properly configured
3. Run migrations before starting the server
4. Use a process manager like PM2 for production deployments

## License

MIT