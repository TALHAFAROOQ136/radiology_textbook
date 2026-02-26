import express from 'express';
import authRoutes from './auth';
import contentRoutes from './content';
import userRoutes from './user';
import dicomRoutes from './dicom';
import chatbotRoutes from './chatbot';

const router = express.Router();

// Mount authentication routes
router.use('/auth', authRoutes);

// Mount content routes
router.use('/content', contentRoutes);

// Mount user routes
router.use('/user', userRoutes);

// Mount DICOM routes
router.use('/dicom', dicomRoutes);

// Mount chatbot routes
router.use('/chatbot', chatbotRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Add other routes as needed
// router.use('/user', userRoutes);
// router.use('/progress', progressRoutes);

export default router;