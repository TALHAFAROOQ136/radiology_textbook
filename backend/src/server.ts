import app from './app';
import dbPool from './db/connection';
import logger from './utils/logger';
import { initializeDatabase } from './db/connection';

const PORT = process.env.PORT || 8000;

// Initialize database connection and start server
const startServer = async () => {
  // Attempt DB init but don't let it block server startup
  try {
    await initializeDatabase();
    logger.info('Database initialized successfully');
  } catch (error) {
    logger.warn('Database initialization failed — continuing without DB (chatbot still functional)', {
      error: error instanceof Error ? error.message : String(error),
    });
  }

  // Start the server regardless of DB status
  const server = app.listen(PORT, () => {
    logger.info(`Radiology Textbook Platform server running on port ${PORT}`);
    logger.info(`Health check available at http://localhost:${PORT}/health`);
  });

  // Graceful shutdown handling
  process.on('SIGTERM', () => {
    logger.info('SIGTERM received, shutting down gracefully');
    server.close(() => { logger.info('Process terminated'); });
  });

  process.on('SIGINT', () => {
    logger.info('SIGINT received, shutting down gracefully');
    server.close(() => { logger.info('Process terminated'); });
  });
};

if (require.main === module) {
  startServer();
}

export default app;