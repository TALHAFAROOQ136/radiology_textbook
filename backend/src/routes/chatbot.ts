import express from 'express';
import { chatWithBook } from '../api/chatbot/chat';
import { AuthMiddleware } from '../middleware/auth-middleware';

const router = express.Router();

// Public chatbot route
router.post('/ask', chatWithBook);

export default router;