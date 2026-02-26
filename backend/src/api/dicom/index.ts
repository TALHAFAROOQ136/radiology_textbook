/**
 * DICOM API Controller
 *
 * Handles DICOM-related API endpoints for upload, retrieval, and management
 */

import { Request, Response } from 'express';
import { dicomService } from '../services/dicom-service';
import { DICOMAsset } from '../models/dicom';
import { uploadSingleDICOM, uploadMultipleDICOM, validateDICOMUpload } from '../middleware/file-upload';

/**
 * POST /api/dicom/upload
 * Upload a single DICOM file
 */
export const uploadDICOM = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      res.status(400).json({ error: 'No DICOM file was uploaded' });
      return;
    }

    // Get user ID from authenticated request
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // Save the DICOM file
    const dicomAsset = await dicomService.saveDICOMFile(
      req.file.buffer,
      req.file.originalname,
      userId
    );

    // Extract metadata from the DICOM file (in a real implementation)
    // This would be done asynchronously in production
    setTimeout(async () => {
      try {
        const metadata = await dicomService.extractDICOMMetadata(dicomAsset.filePath);
        await dicomService.updateDICOMMetadata(dicomAsset.id, metadata);

        // Generate thumbnail
        const thumbnailPath = await dicomService.generateThumbnail(dicomAsset);
        await dicomService.updateDICOMMetadata(dicomAsset.id, {
          thumbnailPath,
          isThumbnailGenerated: true
        });
      } catch (error) {
        console.error('Error processing DICOM metadata/thumbnail:', error);
        // Don't fail the upload if metadata processing fails
      }
    }, 0);

    res.status(201).json({
      message: 'DICOM file uploaded successfully',
      asset: dicomAsset
    });
  } catch (error) {
    console.error('Upload DICOM error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/dicom/upload/batch
 * Upload multiple DICOM files
 */
export const uploadMultipleDICOM = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if files were uploaded
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      res.status(400).json({ error: 'No DICOM files were uploaded' });
      return;
    }

    const files = req.files as Express.Multer.File[];
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    const uploadedAssets: DICOMAsset[] = [];

    // Process each file
    for (const file of files) {
      const dicomAsset = await dicomService.saveDICOMFile(
        file.buffer,
        file.originalname,
        userId
      );
      uploadedAssets.push(dicomAsset);

      // Extract metadata asynchronously
      setTimeout(async () => {
        try {
          const metadata = await dicomService.extractDICOMMetadata(dicomAsset.filePath);
          await dicomService.updateDICOMMetadata(dicomAsset.id, metadata);

          // Generate thumbnail
          const thumbnailPath = await dicomService.generateThumbnail(dicomAsset);
          await dicomService.updateDICOMMetadata(dicomAsset.id, {
            thumbnailPath,
            isThumbnailGenerated: true
          });
        } catch (error) {
          console.error('Error processing DICOM metadata/thumbnail:', error);
          // Don't fail the upload if metadata processing fails
        }
      }, 0);
    }

    res.status(201).json({
      message: `${uploadedAssets.length} DICOM files uploaded successfully`,
      assets: uploadedAssets
    });
  } catch (error) {
    console.error('Upload multiple DICOM error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/dicom/:id
 * Get DICOM asset by ID
 */
export const getDICOMAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate DICOM asset ID
    if (!id) {
      res.status(400).json({ error: 'DICOM asset ID is required' });
      return;
    }

    const dicomAsset = await dicomService.getDICOMAssetById(id);
    if (!dicomAsset) {
      res.status(404).json({ error: 'DICOM asset not found' });
      return;
    }

    // Check permissions - public assets can be accessed by anyone
    // Private assets require authentication and proper permissions
    if (!dicomAsset.isPublic) {
      const userId = (req as any).user?.id;
      if (!userId) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      // In a real implementation, check if user has permission to access this asset
      // This might involve checking if user owns the asset or has appropriate roles
    }

    res.status(200).json({
      message: 'DICOM asset retrieved successfully',
      asset: dicomAsset
    });
  } catch (error) {
    console.error('Get DICOM asset error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/dicom/:id/file
 * Stream DICOM file for download/viewing
 */
export const getDICOMFile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate DICOM asset ID
    if (!id) {
      res.status(400).json({ error: 'DICOM asset ID is required' });
      return;
    }

    // Check permissions
    const dicomAsset = await dicomService.getDICOMAssetById(id);
    if (!dicomAsset) {
      res.status(404).json({ error: 'DICOM asset not found' });
      return;
    }

    if (!dicomAsset.isPublic) {
      const userId = (req as any).user?.id;
      if (!userId) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      // In a real implementation, check permissions
    }

    // Get file stream
    const fileStream = await dicomService.getDICOMFileStream(id);

    // Set appropriate headers for DICOM file
    res.setHeader('Content-Type', 'application/dicom');
    res.setHeader('Content-Disposition', `inline; filename="${dicomAsset.originalFileName}"`);
    res.setHeader('Content-Length', dicomAsset.fileSize.toString());

    // Pipe the file stream to the response
    fileStream.pipe(res);
  } catch (error) {
    console.error('Get DICOM file error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/dicom/:id/thumbnail
 * Get DICOM thumbnail
 */
export const getDICOMThumbnail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate DICOM asset ID
    if (!id) {
      res.status(400).json({ error: 'DICOM asset ID is required' });
      return;
    }

    const dicomAsset = await dicomService.getDICOMAssetById(id);
    if (!dicomAsset) {
      res.status(404).json({ error: 'DICOM asset not found' });
      return;
    }

    if (!dicomAsset.isPublic && !dicomAsset.isThumbnailGenerated) {
      const userId = (req as any).user?.id;
      if (!userId) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }
    }

    if (!dicomAsset.thumbnailPath) {
      res.status(404).json({ error: 'Thumbnail not available' });
      return;
    }

    // Serve the thumbnail file
    res.sendFile(dicomAsset.thumbnailPath);
  } catch (error) {
    console.error('Get DICOM thumbnail error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * GET /api/dicom/content/:contentId
 * Get all DICOM assets associated with a content ID
 */
export const getDICOMAssetsByContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { contentId } = req.params;

    // Validate content ID
    if (!contentId) {
      res.status(400).json({ error: 'Content ID is required' });
      return;
    }

    // Check permissions for the content
    // In a real implementation, verify user can access this content

    const dicomAssets = await dicomService.getDICOMAssetsByContentId(contentId);

    res.status(200).json({
      message: 'DICOM assets retrieved successfully',
      assets: dicomAssets
    });
  } catch (error) {
    console.error('Get DICOM assets by content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * POST /api/dicom/:id/associate/:contentId
 * Associate a DICOM asset with content
 */
export const associateDICOMWithContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, contentId } = req.params;

    // Validate IDs
    if (!id || !contentId) {
      res.status(400).json({ error: 'DICOM asset ID and content ID are required' });
      return;
    }

    // Check permissions - user must have permission to modify the content
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // In a real implementation, check if user has permission to modify this content
    // This might involve checking user role or content ownership

    await dicomService.associateDICOMWithContent(id, contentId);

    res.status(200).json({
      message: 'DICOM asset associated with content successfully'
    });
  } catch (error) {
    console.error('Associate DICOM with content error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * PUT /api/dicom/:id/permissions
 * Update DICOM asset permissions
 */
export const updateDICOMPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { isPublic } = req.body;

    // Validate IDs and data
    if (!id) {
      res.status(400).json({ error: 'DICOM asset ID is required' });
      return;
    }

    if (typeof isPublic !== 'boolean') {
      res.status(400).json({ error: 'isPublic must be a boolean value' });
      return;
    }

    // Check permissions - user must own the asset or have admin privileges
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // In a real implementation, verify user owns this asset or has admin privileges

    const updatedAsset = await dicomService.updateDICOMPermissions(id, isPublic);

    res.status(200).json({
      message: 'DICOM asset permissions updated successfully',
      asset: updatedAsset
    });
  } catch (error) {
    console.error('Update DICOM permissions error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

/**
 * DELETE /api/dicom/:id
 * Delete DICOM asset (soft delete)
 */
export const deleteDICOMAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate DICOM asset ID
    if (!id) {
      res.status(400).json({ error: 'DICOM asset ID is required' });
      return;
    }

    // Check permissions - user must own the asset or have admin privileges
    const userId = (req as any).user?.id;
    if (!userId) {
      res.status(401).json({ error: 'Authentication required' });
      return;
    }

    // In a real implementation, verify user owns this asset or has admin privileges

    const success = await dicomService.deleteDICOMAsset(id);

    if (success) {
      res.status(200).json({
        message: 'DICOM asset deleted successfully'
      });
    } else {
      res.status(500).json({
        error: 'Failed to delete DICOM asset'
      });
    }
  } catch (error) {
    console.error('Delete DICOM asset error:', error);
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};