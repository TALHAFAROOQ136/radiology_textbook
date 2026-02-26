/**
 * DICOM Service
 *
 * Handles DICOM file processing, metadata extraction, and storage operations
 */

import fs from 'fs';
import path from 'path';
import { DICOMAsset, DICOMAssetModel, DICOMAssetFactory } from '../models/dicom';
import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import * as dicomParser from 'dicom-parser';
import { dcmjs } from 'dcmjs';

// Extract __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define storage paths
const DICOM_STORAGE_PATH = process.env.DICOM_STORAGE_PATH || path.join(__dirname, '../../../uploads/dicom');
const THUMBNAIL_STORAGE_PATH = process.env.THUMBNAIL_STORAGE_PATH || path.join(__dirname, '../../../uploads/thumbnails');

// Ensure storage directories exist
if (!fs.existsSync(DICOM_STORAGE_PATH)) {
  fs.mkdirSync(DICOM_STORAGE_PATH, { recursive: true });
}

if (!fs.existsSync(THUMBNAIL_STORAGE_PATH)) {
  fs.mkdirSync(THUMBNAIL_STORAGE_PATH, { recursive: true });
}

export class DICOMService {
  /**
   * Saves an uploaded DICOM file to storage
   */
  async saveDICOMFile(fileBuffer: Buffer, originalFileName: string, userId: string): Promise<DICOMAsset> {
    try {
      // Generate a unique filename
      const fileExtension = path.extname(originalFileName).toLowerCase();
      const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}${fileExtension}`;
      const filePath = path.join(DICOM_STORAGE_PATH, uniqueFileName);

      // Write the file to storage
      await fsPromises.writeFile(filePath, fileBuffer);

      // Create DICOM asset record with minimal metadata initially
      const dicomAsset = DICOMAssetFactory.create({
        fileName: uniqueFileName,
        originalFileName,
        fileSize: fileBuffer.length,
        mimeType: 'application/dicom', // Default DICOM MIME type
        filePath,
        uploadedBy: userId,
        metadata: {}
      });

      return dicomAsset;
    } catch (error) {
      console.error('Error saving DICOM file:', error);
      throw new Error(`Failed to save DICOM file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Extracts DICOM metadata from a file
   */
  async extractDICOMMetadata(filePath: string): Promise<Partial<DICOMAsset>> {
    try {
      // Read the DICOM file
      const dicomBuffer = await fsPromises.readFile(filePath);

      // Parse the DICOM file using dicom-parser
      const dataSet = dicomParser.parseDicom(dicomBuffer);

      // Extract common DICOM tags
      const metadata: Partial<DICOMAsset> = {};

      // Patient Information
      if (dataSet.elements['x00100010']) {
        metadata.patientName = dataSet.string('x00100010') || undefined;
      }
      if (dataSet.elements['x00100020']) {
        metadata.patientId = dataSet.string('x00100020') || undefined;
      }

      // Study Information
      if (dataSet.elements['x0020000D']) {
        metadata.studyInstanceUid = dataSet.string('x0020000D') || undefined;
      }
      if (dataSet.elements['x00080020']) {
        metadata.studyDate = dataSet.string('x00080020') || undefined;
      }
      if (dataSet.elements['x00081030']) {
        metadata.studyDescription = dataSet.string('x00081030') || undefined;
      }

      // Series Information
      if (dataSet.elements['x0020000E']) {
        metadata.seriesInstanceUid = dataSet.string('x0020000E') || undefined;
      }
      if (dataSet.elements['x00080060']) {
        metadata.modality = dataSet.string('x00080060') || undefined;
      }
      if (dataSet.elements['x0008103E']) {
        metadata.seriesDescription = dataSet.string('x0008103E') || undefined;
      }

      // Instance Information
      if (dataSet.elements['x00080018']) {
        metadata.sopInstanceUid = dataSet.string('x00080018') || undefined;
      }

      // Image Information
      if (dataSet.elements['x00180050']) {
        metadata.sliceThickness = parseFloat(dataSet.float('x00180050').toString()) || undefined;
      }
      if (dataSet.elements['x00280010']) {
        metadata.rows = dataSet.uint16('x00280010') || undefined;
      }
      if (dataSet.elements['x00280011']) {
        metadata.columns = dataSet.uint16('x00280011') || undefined;
      }
      if (dataSet.elements['x00280002']) {
        metadata.samplesPerPixel = dataSet.uint16('x00280002') || undefined;
      }
      if (dataSet.elements['x00280004']) {
        metadata.photometricInterpretation = dataSet.string('x00280004') || undefined;
      }
      if (dataSet.elements['x00280008']) {
        metadata.numberOfFrames = dataSet.intString('x00280008') || undefined;
      }
      if (dataSet.elements['x00280030']) {
        const pixelSpacingStr = dataSet.string('x00280030');
        if (pixelSpacingStr) {
          metadata.pixelSpacing = pixelSpacingStr.split('\\').map(Number);
        }
      }
      if (dataSet.elements['x00200037']) {
        const imageOrientationStr = dataSet.string('x00200037');
        if (imageOrientationStr) {
          metadata.imageOrientation = imageOrientationStr.split('\\').map(Number);
        }
      }
      if (dataSet.elements['x00200032']) {
        const imagePositionStr = dataSet.string('x00200032');
        if (imagePositionStr) {
          metadata.imagePosition = imagePositionStr.split('\\').map(Number);
        }
      }

      // Bit depth information
      if (dataSet.elements['x00280100']) {
        metadata.bitsAllocated = dataSet.uint16('x00280100') || undefined;
      }
      if (dataSet.elements['x00280101']) {
        metadata.bitsStored = dataSet.uint16('x00280101') || undefined;
      }
      if (dataSet.elements['x00280102']) {
        metadata.highBit = dataSet.uint16('x00280102') || undefined;
      }
      if (dataSet.elements['x00280103']) {
        metadata.pixelRepresentation = dataSet.uint16('x00280103') || undefined;
      }

      // Body part examined
      if (dataSet.elements['x00180015']) {
        metadata.bodyPartExamined = dataSet.string('x00180015') || undefined;
      }

      // Transfer Syntax
      if (dataSet.elements['x00020010']) {
        metadata.transferSyntaxUID = dataSet.string('x00020010') || undefined;
      }

      return metadata;
    } catch (error) {
      console.error('Error extracting DICOM metadata:', error);
      throw new Error(`Failed to extract DICOM metadata: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Updates DICOM asset with extracted metadata
   */
  async updateDICOMMetadata(assetId: string, metadata: Partial<DICOMAsset>): Promise<DICOMAsset> {
    // In a real implementation, this would update the stored DICOM asset
    // For now, we'll return a mock updated asset
    const updatedAsset: DICOMAsset = {
      id: assetId,
      fileName: 'mock-file.dcm',
      originalFileName: 'mock-file.dcm',
      fileSize: 1024000,
      mimeType: 'application/dicom',
      filePath: '/mock/path/mock-file.dcm',
      isThumbnailGenerated: false,
      associatedContentIds: [],
      metadata: {},
      isPublic: false,
      isDeleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...metadata
    } as DICOMAsset;

    return updatedAsset;
  }

  /**
   * Generates a thumbnail for the DICOM file
   */
  async generateThumbnail(dicomAsset: DICOMAsset): Promise<string> {
    // In a real implementation, this would:
    // 1. Load the DICOM file
    // 2. Render it to a canvas/image
    // 3. Create a thumbnail
    // 4. Save the thumbnail to storage

    // For now, return a mock thumbnail path
    const thumbnailFileName = `thumb_${dicomAsset.fileName.replace(path.extname(dicomAsset.fileName), '.jpg')}`;
    const thumbnailPath = path.join(THUMBNAIL_STORAGE_PATH, thumbnailFileName);

    // In a real implementation, we would create the actual thumbnail
    // For now, we'll just return the path where the thumbnail would be stored
    return thumbnailPath;
  }

  /**
   * Gets DICOM asset by ID
   */
  async getDICOMAssetById(assetId: string): Promise<DICOMAsset | null> {
    // In a real implementation, this would query the database
    // For now, return null to indicate not found
    return null;
  }

  /**
   * Gets DICOM assets associated with a content ID
   */
  async getDICOMAssetsByContentId(contentId: string): Promise<DICOMAsset[]> {
    // In a real implementation, this would query the database
    // For now, return an empty array
    return [];
  }

  /**
   * Associates a DICOM asset with content
   */
  async associateDICOMWithContent(assetId: string, contentId: string): Promise<void> {
    // In a real implementation, this would update the database
    console.log(`Associating DICOM asset ${assetId} with content ${contentId}`);
  }

  /**
   * Gets DICOM file stream for download/viewing
   */
  async getDICOMFileStream(assetId: string) {
    // In a real implementation, this would retrieve the file from storage
    // and return a readable stream
    const asset = await this.getDICOMAssetById(assetId);
    if (!asset) {
      throw new Error(`DICOM asset with ID ${assetId} not found`);
    }

    if (asset.isDeleted) {
      throw new Error(`DICOM asset with ID ${assetId} has been deleted`);
    }

    // Return a readable stream of the DICOM file
    // This is simplified - in reality you'd return fs.createReadStream(asset.filePath)
    return fs.createReadStream(asset.filePath);
  }

  /**
   * Updates DICOM asset permissions
   */
  async updateDICOMPermissions(assetId: string, isPublic: boolean): Promise<DICOMAsset> {
    // In a real implementation, this would update the database
    // For now, return a mock updated asset
    const asset = await this.getDICOMAssetById(assetId);
    if (!asset) {
      throw new Error(`DICOM asset with ID ${assetId} not found`);
    }

    const updatedAsset = { ...asset, isPublic, updatedAt: new Date() } as DICOMAsset;
    return updatedAsset;
  }

  /**
   * Soft deletes a DICOM asset
   */
  async deleteDICOMAsset(assetId: string): Promise<boolean> {
    // In a real implementation, this would perform a soft delete in the database
    console.log(`Soft deleting DICOM asset with ID: ${assetId}`);
    return true;
  }

  /**
   * Gets DICOM storage statistics
   */
  async getStorageStats(): Promise<{ totalFiles: number; totalSize: number; publicFiles: number }> {
    // In a real implementation, this would query the database
    // For now, return mock stats
    return {
      totalFiles: 0,
      totalSize: 0,
      publicFiles: 0
    };
  }
}

// Singleton instance
export const dicomService = new DICOMService();