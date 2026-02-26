import { Request, Response } from 'express';
import * as RagService from '../../services/rag-service';
import * as ConversationService from '../../services/conversation-service';
import logger from '../../utils/logger';

/**
 * POST /api/chatbot/ask
 * Chat with the radiology textbook using RAG (Qdrant + OpenAI)
 */
export const chatWithBook = async (req: Request, res: Response): Promise<void> => {
  const { question, sessionId, selectedText } = req.body as {
    question?: string;
    sessionId?: string;
    selectedText?: string;
  };

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    res.status(400).json({ error: 'question is required' });
    return;
  }

  if (question.trim().length > 1000) {
    res.status(400).json({ error: 'question must be under 1000 characters' });
    return;
  }

  const sid =
    sessionId && typeof sessionId === 'string' && sessionId.length > 0
      ? sessionId
      : `anon-${Date.now()}`;

  // If selected text is provided, prepend it to give the model context
  const fullQuestion = selectedText
    ? `Regarding this passage from the textbook: "${selectedText.substring(0, 500)}"\n\n${question.trim()}`
    : question.trim();

  try {
    const history = ConversationService.getHistory(sid);
    const result = await RagService.query(fullQuestion, history);
    ConversationService.addTurn(sid, fullQuestion, result.answer);

    res.json({
      answer: result.answer,
      sources: result.sources,
      sessionId: sid,
    });
  } catch (err) {
    logger.error('Chatbot error', { error: err, question: question.substring(0, 80) });

    const message = err instanceof Error ? err.message : 'Unknown error';

    if (message.toLowerCase().includes('api key') || message.toLowerCase().includes('authentication')) {
      res.status(500).json({ error: 'AI service configuration error. Check the OPENAI_API_KEY.' });
    } else if (message.toLowerCase().includes('qdrant') || message.includes('ECONNREFUSED')) {
      res.status(500).json({ error: 'Vector database unavailable. Check QDRANT_URL and QDRANT_API_KEY.' });
    } else {
      res.status(500).json({ error: 'Failed to process your question. Please try again.' });
    }
  }
};