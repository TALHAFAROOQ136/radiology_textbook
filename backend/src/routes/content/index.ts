import express from 'express';
import { getContent, createContent, updateContent, deleteContent } from '../../api/content/content';
import { searchContent } from '../../api/content/search';
import { getContentHierarchy } from '../../api/content/hierarchy';
import { AuthMiddleware } from '../../middleware/auth-middleware';

const router = express.Router();

// Public content routes
router.get('/', getContent);
router.get('/search', searchContent);
router.get('/hierarchy/:contentId', getContentHierarchy);

// Protected content routes (require authentication)
router.post('/', AuthMiddleware.authenticate, AuthMiddleware.requireRole(['admin', 'content_editor']), createContent);
router.put('/:id', AuthMiddleware.authenticate, AuthMiddleware.requireRole(['admin', 'content_editor']), updateContent);
router.delete('/:id', AuthMiddleware.authenticate, AuthMiddleware.requireRole(['admin', 'content_editor']), deleteContent);

export default router;