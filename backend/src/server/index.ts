import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initializeDbConnection } from './db/connection';
import { AuthMiddleware } from './middleware/auth-middleware';

// Import API routes
import { register } from './api/auth/register';
import { login } from './api/auth/login';
import { logout } from './api/auth/logout';
import { getProfile, updateProfile } from './api/auth/profile';
import {
  getUserProgress,
  saveUserProgress,
  getUserProgressForContent,
  markContentStarted,
  updateContentProgress,
  addTimeSpent
} from './api/user/progress';
import {
  getUserPreferences,
  getUserPreference,
  updateUserPreference,
  bulkUpdatePreferences,
  deleteUserPreference
} from './api/user/preferences';
import {
  getContentById,
  getContentBySlug,
  getContentByType,
  getContentByParent,
  getAllPublishedContent,
  searchContent,
  getContentStats,
  getContentHierarchy,
  publishContent,
  unpublishContent
} from './api/content/index';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Detailed health check endpoint
app.get('/health/details', (req, res) => {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development',
    db_status: 'connected', // In a real implementation, this would check actual DB connection
    redis_status: process.env.REDIS_URL ? 'connected' : 'not configured',
    disk_space: 'sufficient', // In a real implementation, this would check actual disk space
  };

  res.status(200).json(healthCheck);
});

// Authentication routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.post('/api/auth/logout', AuthMiddleware.authenticate, logout);
app.get('/api/auth/profile', AuthMiddleware.authenticate, getProfile);
app.put('/api/auth/profile', AuthMiddleware.authenticate, updateProfile);

// User routes
app.get('/api/user/progress', AuthMiddleware.authenticate, getUserProgress);
app.post('/api/user/progress', AuthMiddleware.authenticate, saveUserProgress);
app.get('/api/user/progress/:contentId', AuthMiddleware.authenticate, getUserProgressForContent);
app.post('/api/user/progress/:contentId/mark-started', AuthMiddleware.authenticate, markContentStarted);
app.post('/api/user/progress/:contentId/update-progress', AuthMiddleware.authenticate, updateContentProgress);
app.post('/api/user/progress/:contentId/add-time', AuthMiddleware.authenticate, addTimeSpent);

app.get('/api/user/preferences', AuthMiddleware.authenticate, getUserPreferences);
app.get('/api/user/preferences/:key', AuthMiddleware.authenticate, getUserPreference);
app.put('/api/user/preferences/:key', AuthMiddleware.authenticate, updateUserPreference);
app.post('/api/user/preferences/bulk-update', AuthMiddleware.authenticate, bulkUpdatePreferences);
app.delete('/api/user/preferences/:key', AuthMiddleware.authenticate, deleteUserPreference);

// Content routes
app.get('/api/content/:id', getContentById);
app.get('/api/content/slug/:slug', getContentBySlug);
app.get('/api/content/type/:type', getContentByType);
app.get('/api/content/parent/:parentId', getContentByParent);
app.get('/api/content/published', getAllPublishedContent);
app.get('/api/content/search', searchContent);
app.get('/api/content/stats', getContentStats);
app.get('/api/content/hierarchy/:rootId', AuthMiddleware.authenticate, getContentHierarchy);
app.put('/api/content/:id/publish', AuthMiddleware.authenticate, publishContent);
app.put('/api/content/:id/unpublish', AuthMiddleware.authenticate, unpublishContent);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Initialize database and start server
const startServer = async () => {
  try {
    // Initialize database connection
    await initializeDbConnection();

    app.listen(PORT, () => {
      console.log(`Radiology Textbook Platform server running on port ${PORT}`);
      console.log(`Health check available at http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

export default app;