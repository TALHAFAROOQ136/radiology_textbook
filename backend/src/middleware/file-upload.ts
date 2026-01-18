/**
 * File Upload Middleware
 *
 * Handles file upload processing for DICOM and other file types
 */

import multer from 'multer';
import path from 'path';
import { Request } from 'express';

// Configure storage for DICOM files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Determine destination based on file type
    if (isDICOMFile(file.originalname, file.mimetype)) {
      // In a real implementation, we would use the configured DICOM storage path
      cb(null, process.env.DICOM_STORAGE_PATH || 'uploads/dicom/');
    } else {
      cb(null, 'uploads/'); // Default upload directory
    }
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter to ensure only DICOM files are accepted
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FieldCallback) => {
  // Check if the file is a DICOM file based on extension or MIME type
  if (isDICOMFile(file.originalname, file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    // Reject the file
    cb(new Error('Invalid file type. Only DICOM files are allowed.'));
  }
};

// Function to check if a file is a DICOM file
function isDICOMFile(filename: string, mimetype: string): boolean {
  const dicomExtensions = ['.dcm', '.dicom'];
  const dicomMimeTypes = [
    'application/dicom',
    'application/octet-stream', // Some DICOM files may have generic octet-stream
    'image/dicom-rle', // DICOM RLE transfer syntax
    'image/x-dicom'    // Alternative DICOM MIME type
  ];

  const ext = path.extname(filename).toLowerCase();
  const mime = mimetype.toLowerCase();

  // Check if extension matches DICOM extensions OR if MIME type matches DICOM types
  return dicomExtensions.includes(ext) || dicomMimeTypes.includes(mime);
}

// Configure multer with storage and limits
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
    files: 10 // Maximum 10 files per request
  }
});

// Specialized middleware for single DICOM file upload
export const uploadSingleDICOM = upload.single('dicomFile');

// Specialized middleware for multiple DICOM file uploads
export const uploadMultipleDICOM = upload.array('dicomFiles', 10);

// Specialized middleware for DICOM files with field name 'files'
export const uploadDICOMFiles = (req: Request, res: any, next: any) => {
  // Use the configured upload middleware
  upload.array('files')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large. Maximum size is 50MB.' });
      } else if (err.code === 'LIMIT_FILE_COUNT') {
        return res.status(400).json({ error: 'Too many files. Maximum 10 files allowed.' });
      } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        return res.status(400).json({ error: 'Unexpected field name in form.' });
      }
    } else if (err) {
      // An unknown error occurred
      return res.status(400).json({ error: err.message });
    }

    // Continue with the request
    next();
  });
};

// Additional validation middleware for DICOM-specific checks
export const validateDICOMUpload = (req: Request, res: any, next: any) => {
  if (!req.files && !req.file) {
    return res.status(400).json({ error: 'No files were uploaded.' });
  }

  // If there are files, validate each one
  const files = req.files as Express.Multer.File[] || (req.file ? [req.file] : []);

  for (const file of files) {
    // Additional checks can be added here
    // For example, checking file signature/headers to confirm it's actually a DICOM file

    // Size check (redundant with multer limits but can add additional checks)
    if (file.size > 50 * 1024 * 1024) { // 50MB
      return res.status(400).json({ error: `File ${file.originalname} is too large. Maximum size is 50MB.` });
    }
  }

  next();
};