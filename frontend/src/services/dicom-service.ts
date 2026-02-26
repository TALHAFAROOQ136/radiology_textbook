/**
 * DICOM Service
 *
 * Frontend service for interacting with the DICOM API
 */

import { DICOMAsset } from '../../../backend/src/models/dicom';

// Base API URL - can be configured via environment variables
const API_BASE_URL = process.env.REACT_APP_API_URL || process.env.API_URL || 'http://localhost:3001/api';

/**
 * Upload a single DICOM file
 */
export const uploadDICOM = async (file: File, token?: string): Promise<DICOMAsset> => {
  const formData = new FormData();
  formData.append('dicomFile', file);

  const response = await fetch(`${API_BASE_URL}/dicom/upload`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to upload DICOM file');
  }

  return response.json();
};

/**
 * Upload multiple DICOM files
 */
export const uploadMultipleDICOM = async (files: File[], token?: string): Promise<DICOMAsset[]> => {
  const formData = new FormData();
  files.forEach(file => {
    formData.append('dicomFiles', file);
  });

  const response = await fetch(`${API_BASE_URL}/dicom/upload/batch`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to upload DICOM files');
  }

  return response.json();
};

/**
 * Get DICOM asset by ID
 */
export const getDICOMAsset = async (id: string, token?: string): Promise<DICOMAsset> => {
  const response = await fetch(`${API_BASE_URL}/dicom/${id}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Failed to get DICOM asset with ID: ${id}`);
  }

  return response.json();
};

/**
 * Get DICOM file URL for viewing/downloading
 */
export const getDICOMFileUrl = (id: string, token?: string): string => {
  const url = `${API_BASE_URL}/dicom/${id}/file`;
  return token ? `${url}?token=${encodeURIComponent(token)}` : url;
};

/**
 * Get DICOM thumbnail URL
 */
export const getDICOMThumbnailUrl = (id: string, token?: string): string => {
  const url = `${API_BASE_URL}/dicom/${id}/thumbnail`;
  return token ? `${url}?token=${encodeURIComponent(token)}` : url;
};

/**
 * Get all DICOM assets associated with a content ID
 */
export const getDICOMAssetsByContent = async (contentId: string, token?: string): Promise<DICOMAsset[]> => {
  const response = await fetch(`${API_BASE_URL}/dicom/content/${contentId}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Failed to get DICOM assets for content ID: ${contentId}`);
  }

  return response.json();
};

/**
 * Associate a DICOM asset with content
 */
export const associateDICOMWithContent = async (dicomId: string, contentId: string, token?: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/dicom/${dicomId}/associate/${contentId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Failed to associate DICOM asset ${dicomId} with content ${contentId}`);
  }
};

/**
 * Update DICOM asset permissions
 */
export const updateDICOMPermissions = async (id: string, isPublic: boolean, token?: string): Promise<DICOMAsset> => {
  const response = await fetch(`${API_BASE_URL}/dicom/${id}/permissions`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ isPublic }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Failed to update permissions for DICOM asset ${id}`);
  }

  return response.json();
};

/**
 * Delete DICOM asset
 */
export const deleteDICOMAsset = async (id: string, token?: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/dicom/${id}`, {
    method: 'DELETE',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Failed to delete DICOM asset with ID: ${id}`);
  }
};

/**
 * Search DICOM assets
 */
export const searchDICOMAssets = async (
  query: string,
  filters?: {
    modality?: string;
    bodyPart?: string;
    patientId?: string;
    studyDateFrom?: string;
    studyDateTo?: string;
  },
  token?: string
): Promise<DICOMAsset[]> => {
  // Build query parameters
  const params = new URLSearchParams();
  params.append('q', query);

  if (filters?.modality) params.append('modality', filters.modality);
  if (filters?.bodyPart) params.append('bodyPart', filters.bodyPart);
  if (filters?.patientId) params.append('patientId', filters.patientId);
  if (filters?.studyDateFrom) params.append('studyDateFrom', filters.studyDateFrom);
  if (filters?.studyDateTo) params.append('studyDateTo', filters.studyDateTo);

  const queryString = params.toString();
  const response = await fetch(`${API_BASE_URL}/dicom/search?${queryString}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || 'Failed to search DICOM assets');
  }

  return response.json();
};