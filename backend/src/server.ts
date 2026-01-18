import app from './app';
import dbPool from './db/connection';
import logger from './utils/logger';
import { initializeDatabase } from './db/connection';

const PORT = process.env.PORT || 8000;

// Initialize database connection and start server
const startServer = async () => {
  try {
    // Initialize database tables
    await initializeDatabase();
    logger.info('Database initialized successfully');

    // Start the server
    const server = app.listen(PORT, () => {
      logger.info(`Radiology Textbook Platform server running on port ${PORT}`);
      logger.info(`Health check available at http://localhost:${PORT}/health`);
    });

    // Graceful shutdown handling
    process.on('SIGTERM', () => {
      logger.info('SIGTERM received, shutting down gracefully');
      server.close(() => {
        logger.info('Process terminated');
      });
    });

    process.on('SIGINT', () => {
      logger.info('SIGINT received, shutting down gracefully');
      server.close(() => {
        logger.info('Process terminated');
      });
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

export default app;