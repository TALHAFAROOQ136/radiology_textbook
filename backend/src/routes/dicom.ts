/**
 * DICOM Routes
 *
 * Defines the routes for DICOM-related functionality
 */

import express from 'express';
import {
  uploadDICOM,
  uploadMultipleDICOM,
  getDICOMAsset,
  getDICOMFile,
  getDICOMThumbnail,
  getDICOMAssetsByContent,
  associateDICOMWithContent,
  updateDICOMPermissions,
  deleteDICOMAsset
} from '../api/dicom';
import { AuthMiddleware } from '../middleware/auth-middleware';
import { uploadSingleDICOM, uploadMultipleDICOM, validateDICOMUpload } from '../middleware/file-upload';

const router = express.Router();

// Public DICOM routes
router.get('/:id', getDICOMAsset);
router.get('/:id/file', getDICOMFile);
router.get('/:id/thumbnail', getDICOMThumbnail);
router.get('/content/:contentId', getDICOMAssetsByContent);

// Protected DICOM routes (require authentication)
router.post('/upload',
  AuthMiddleware.authenticate,
  AuthMiddleware.requireRole(['admin', 'content_editor', 'instructor']),
  uploadSingleDICOM,
  validateDICOMUpload,
  uploadDICOM
);

router.post('/upload/batch',
  AuthMiddleware.authenticate,
  AuthMiddleware.requireRole(['admin', 'content_editor', 'instructor']),
  uploadMultipleDICOM,
  validateDICOMUpload,
  uploadMultipleDICOM
);

router.post('/:id/associate/:contentId',
  AuthMiddleware.authenticate,
  AuthMiddleware.requireRole(['admin', 'content_editor', 'instructor']),
  associateDICOMWithContent
);

router.put('/:id/permissions',
  AuthMiddleware.authenticate,
  AuthMiddleware.requireRole(['admin', 'content_editor', 'instructor']),
  updateDICOMPermissions
);

router.delete('/:id',
  AuthMiddleware.authenticate,
  AuthMiddleware.requireRole(['admin', 'content_editor', 'instructor']),
  deleteDICOMAsset
);

export default router;