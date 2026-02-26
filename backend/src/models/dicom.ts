/**
 * DICOM Asset Model
 *
 * Defines the structure and validation for DICOM medical image assets in the Radiology Textbook Platform
 */

import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

// Zod schema for DICOM asset validation
const DICOMAssetSchema = z.object({
  id: z.string().uuid().default(() => uuidv4()),
  fileName: z.string().min(1, { message: 'File name is required' }).max(500),
  originalFileName: z.string().min(1, { message: 'Original file name is required' }).max(500),
  fileSize: z.number().positive({ message: 'File size must be positive' }),
  mimeType: z.string().min(1, { message: 'MIME type is required' }),
  filePath: z.string().min(1, { message: 'File path is required' }),
  studyInstanceUid: z.string().optional(),
  seriesInstanceUid: z.string().optional(),
  sopInstanceUid: z.string().optional(),
  patientId: z.string().optional(),
  patientName: z.string().optional(),
  modality: z.string().optional(),
  bodyPartExamined: z.string().optional(),
  studyDate: z.string().optional(), // ISO date string
  studyDescription: z.string().optional(),
  seriesDescription: z.string().optional(),
  sliceThickness: z.number().optional(),
  pixelSpacing: z.array(z.number()).optional(),
  imageOrientation: z.array(z.number()).optional(),
  imagePosition: z.array(z.number()).optional(),
  rows: z.number().optional(),
  columns: z.number().optional(),
  bitsAllocated: z.number().optional(),
  bitsStored: z.number().optional(),
  highBit: z.number().optional(),
  pixelRepresentation: z.number().optional(),
  samplesPerPixel: z.number().optional(),
  photometricInterpretation: z.string().optional(),
  transferSyntaxUID: z.string().optional(),
  isThumbnailGenerated: z.boolean().default(false),
  thumbnailPath: z.string().optional(),
  associatedContentIds: z.array(z.string().uuid()).default([]), // Links to content IDs
  metadata: z.record(z.unknown()).optional().default({}),
  uploadedBy: z.string().uuid().optional(),
  isPublic: z.boolean().default(false),
  isDeleted: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date())
});

// Type inference from Zod schema
export type DICOMAsset = z.infer<typeof DICOMAssetSchema>;

/**
 * DICOMAsset class representing medical image assets
 */
export class DICOMAssetModel {
  id: string;
  fileName: string;
  originalFileName: string;
  fileSize: number;
  mimeType: string;
  filePath: string;
  studyInstanceUid?: string;
  seriesInstanceUid?: string;
  sopInstanceUid?: string;
  patientId?: string;
  patientName?: string;
  modality?: string;
  bodyPartExamined?: string;
  studyDate?: string; // ISO date string
  studyDescription?: string;
  seriesDescription?: string;
  sliceThickness?: number;
  pixelSpacing?: number[];
  imageOrientation?: number[];
  imagePosition?: number[];
  rows?: number;
  columns?: number;
  bitsAllocated?: number;
  bitsStored?: number;
  highBit?: number;
  pixelRepresentation?: number;
  samplesPerPixel?: number;
  photometricInterpretation?: string;
  transferSyntaxUID?: string;
  isThumbnailGenerated: boolean;
  thumbnailPath?: string;
  associatedContentIds: string[];
  metadata: Record<string, unknown>;
  uploadedBy?: string;
  isPublic: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(data: Partial<DICOMAsset>) {
    const parsedData = DICOMAssetSchema.parse({
      ...data,
      id: data.id || uuidv4(),
      createdAt: data.createdAt || new Date(),
      updatedAt: data.updatedAt || new Date()
    });

    this.id = parsedData.id;
    this.fileName = parsedData.fileName;
    this.originalFileName = parsedData.originalFileName;
    this.fileSize = parsedData.fileSize;
    this.mimeType = parsedData.mimeType;
    this.filePath = parsedData.filePath;
    this.studyInstanceUid = parsedData.studyInstanceUid;
    this.seriesInstanceUid = parsedData.seriesInstanceUid;
    this.sopInstanceUid = parsedData.sopInstanceUid;
    this.patientId = parsedData.patientId;
    this.patientName = parsedData.patientName;
    this.modality = parsedData.modality;
    this.bodyPartExamined = parsedData.bodyPartExamined;
    this.studyDate = parsedData.studyDate;
    this.studyDescription = parsedData.studyDescription;
    this.seriesDescription = parsedData.seriesDescription;
    this.sliceThickness = parsedData.sliceThickness;
    this.pixelSpacing = parsedData.pixelSpacing;
    this.imageOrientation = parsedData.imageOrientation;
    this.imagePosition = parsedData.imagePosition;
    this.rows = parsedData.rows;
    this.columns = parsedData.columns;
    this.bitsAllocated = parsedData.bitsAllocated;
    this.bitsStored = parsedData.bitsStored;
    this.highBit = parsedData.highBit;
    this.pixelRepresentation = parsedData.pixelRepresentation;
    this.samplesPerPixel = parsedData.samplesPerPixel;
    this.photometricInterpretation = parsedData.photometricInterpretation;
    this.transferSyntaxUID = parsedData.transferSyntaxUID;
    this.isThumbnailGenerated = parsedData.isThumbnailGenerated;
    this.thumbnailPath = parsedData.thumbnailPath;
    this.associatedContentIds = parsedData.associatedContentIds;
    this.metadata = parsedData.metadata;
    this.uploadedBy = parsedData.uploadedBy;
    this.isPublic = parsedData.isPublic;
    this.isDeleted = parsedData.isDeleted;
    this.createdAt = parsedData.createdAt;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Validates DICOM asset data against the schema
   */
  static validate(data: Partial<DICOMAsset>): boolean {
    try {
      DICOMAssetSchema.parse(data);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates DICOM asset data and returns detailed error information
   */
  static validateWithErrors(data: Partial<DICOMAsset>): { success: boolean; errors?: string[] } {
    try {
      DICOMAssetSchema.parse(data);
      return { success: true };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          success: false,
          errors: error.errors.map(e => e.message)
        };
      }
      return { success: false, errors: ['Validation failed'] };
    }
  }

  /**
   * Updates DICOM asset information
   */
  update(assetData: Partial<DICOMAsset>): void {
    const updateData = { ...this, ...assetData, updatedAt: new Date() };
    const parsedData = DICOMAssetSchema.parse(updateData);

    this.fileName = parsedData.fileName;
    this.originalFileName = parsedData.originalFileName;
    this.fileSize = parsedData.fileSize;
    this.mimeType = parsedData.mimeType;
    this.filePath = parsedData.filePath;
    this.studyInstanceUid = parsedData.studyInstanceUid;
    this.seriesInstanceUid = parsedData.seriesInstanceUid;
    this.sopInstanceUid = parsedData.sopInstanceUid;
    this.patientId = parsedData.patientId;
    this.patientName = parsedData.patientName;
    this.modality = parsedData.modality;
    this.bodyPartExamined = parsedData.bodyPartExamined;
    this.studyDate = parsedData.studyDate;
    this.studyDescription = parsedData.studyDescription;
    this.seriesDescription = parsedData.seriesDescription;
    this.sliceThickness = parsedData.sliceThickness;
    this.pixelSpacing = parsedData.pixelSpacing;
    this.imageOrientation = parsedData.imageOrientation;
    this.imagePosition = parsedData.imagePosition;
    this.rows = parsedData.rows;
    this.columns = parsedData.columns;
    this.bitsAllocated = parsedData.bitsAllocated;
    this.bitsStored = parsedData.bitsStored;
    this.highBit = parsedData.highBit;
    this.pixelRepresentation = parsedData.pixelRepresentation;
    this.samplesPerPixel = parsedData.samplesPerPixel;
    this.photometricInterpretation = parsedData.photometricInterpretation;
    this.transferSyntaxUID = parsedData.transferSyntaxUID;
    this.isThumbnailGenerated = parsedData.isThumbnailGenerated;
    this.thumbnailPath = parsedData.thumbnailPath;
    this.associatedContentIds = parsedData.associatedContentIds;
    this.metadata = parsedData.metadata;
    this.uploadedBy = parsedData.uploadedBy;
    this.isPublic = parsedData.isPublic;
    this.isDeleted = parsedData.isDeleted;
    this.updatedAt = parsedData.updatedAt;
  }

  /**
   * Associates the DICOM asset with content
   */
  associateWithContent(contentId: string): void {
    if (!this.associatedContentIds.includes(contentId)) {
      this.associatedContentIds.push(contentId);
      this.updatedAt = new Date();
    }
  }

  /**
   * Removes association with content
   */
  disassociateFromContent(contentId: string): void {
    this.associatedContentIds = this.associatedContentIds.filter(id => id !== contentId);
    this.updatedAt = new Date();
  }

  /**
   * Marks the asset as public
   */
  makePublic(): void {
    this.isPublic = true;
    this.updatedAt = new Date();
  }

  /**
   * Makes the asset private
   */
  makePrivate(): void {
    this.isPublic = false;
    this.updatedAt = new Date();
  }

  /**
   * Marks the asset as deleted (soft delete)
   */
  softDelete(): void {
    this.isDeleted = true;
    this.updatedAt = new Date();
  }

  /**
   * Restores the asset from deletion
   */
  restore(): void {
    this.isDeleted = false;
    this.updatedAt = new Date();
  }

  /**
   * Sets thumbnail path after generation
   */
  setThumbnail(thumbnailPath: string): void {
    this.thumbnailPath = thumbnailPath;
    this.isThumbnailGenerated = true;
    this.updatedAt = new Date();
  }
}

/**
 * DICOMAsset factory for creating DICOM asset instances with validation
 */
export class DICOMAssetFactory {
  /**
   * Creates a new DICOM asset instance
   */
  static create(assetData: Omit<DICOMAsset, 'id' | 'createdAt' | 'updatedAt'>): DICOMAssetModel {
    return new DICOMAssetModel(assetData);
  }
}