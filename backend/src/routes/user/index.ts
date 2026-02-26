import express from 'express';
import { getUserProgress, saveUserProgress, getUserProgressForContent, markContentStarted, updateContentProgress, addTimeSpent } from '../../api/user/progress';
import { getUserPreferences, getUserPreference, updateUserPreference, bulkUpdatePreferences, deleteUserPreference } from '../../api/user/preferences';
import { AuthMiddleware } from '../../middleware/auth-middleware';

const router = express.Router();

// Progress routes
router.get('/progress', AuthMiddleware.authenticate, getUserProgress);
router.post('/progress', AuthMiddleware.authenticate, saveUserProgress);
router.get('/progress/:contentId', AuthMiddleware.authenticate, getUserProgressForContent);
router.post('/progress/:contentId/mark-started', AuthMiddleware.authenticate, markContentStarted);
router.post('/progress/:contentId/update-progress', AuthMiddleware.authenticate, updateContentProgress);
router.post('/progress/:contentId/add-time', AuthMiddleware.authenticate, addTimeSpent);

// Preferences routes
router.get('/preferences', AuthMiddleware.authenticate, getUserPreferences);
router.get('/preferences/:key', AuthMiddleware.authenticate, getUserPreference);
router.put('/preferences/:key', AuthMiddleware.authenticate, updateUserPreference);
router.post('/preferences/bulk-update', AuthMiddleware.authenticate, bulkUpdatePreferences);
router.delete('/preferences/:key', AuthMiddleware.authenticate, deleteUserPreference);

export default router;