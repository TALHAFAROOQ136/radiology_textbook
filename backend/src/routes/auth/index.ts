import express from 'express';
import { register } from '../../api/auth/register';
import { login } from '../../api/auth/login';
import { logout } from '../../api/auth/logout';
import { getProfile, updateProfile } from '../../api/auth/profile';
import { forgotPassword } from '../../api/auth/forgot-password';
import { resetPassword } from '../../api/auth/reset-password';
import { verifyEmail, resendVerification } from '../../api/auth/verify-email';
import { AuthMiddleware } from '../../middleware/auth-middleware';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.post('/logout', AuthMiddleware.authenticate, logout);
router.get('/profile', AuthMiddleware.authenticate, getProfile);
router.put('/profile', AuthMiddleware.authenticate, updateProfile);

// Password reset routes
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// Email verification routes
router.post('/verify-email', verifyEmail);
router.post('/resend-verification', resendVerification);

export default router;