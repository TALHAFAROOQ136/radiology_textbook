/**
 * DICOM Viewer Page
 *
 * A sample page demonstrating the DICOM viewer functionality
 */

import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { uploadDICOM, getDICOMAssetsByContent } from '../services/dicom-service';

// Dynamically import DICOM components to avoid SSR issues
const DicomGallery = React.lazy(() => import('../components/content/DicomGallery'));
const DicomViewerIntegrated = React.lazy(() => import('../components/content/DicomViewerIntegrated'));

// Fallback component for loading state
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '16px',
    color: '#666'
  }}>
    Loading DICOM viewer...
  </div>
);

// Mock DICOM assets for demonstration
const mockDicomAssets = [
  {
    id: '1',
    fileName: 'sample1.dcm',
    originalFileName: 'chest_ct_study.dcm',
    thumbnailPath: '',
    studyDescription: 'Chest CT Study',
    seriesDescription: 'Axial Cuts',
    modality: 'CT',
    patientName: 'John Doe',
    bodyPartExamined: 'CHEST',
    filePath: '/sample-data/chest-ct.dcm'
  },
  {
    id: '2',
    fileName: 'sample2.dcm',
    originalFileName: 'brain_mri_series.dcm',
    thumbnailPath: '',
    studyDescription: 'Brain MRI',
    seriesDescription: 'T1 Weighted',
    modality: 'MR',
    patientName: 'Jane Smith',
    bodyPartExamined: 'BRAIN',
    filePath: '/sample-data/brain-mri.dcm'
  },
  {
    id: '3',
    fileName: 'sample3.dcm',
    originalFileName: 'abdominal_us.dcm',
    thumbnailPath: '',
    studyDescription: 'Abdominal Ultrasound',
    seriesDescription: 'Transverse Plane',
    modality: 'US',
    patientName: 'Robert Johnson',
    bodyPartExamined: 'ABDOMEN',
    filePath: '/sample-data/abdomen-us.dcm'
  },
  {
    id: '4',
    fileName: 'sample4.dcm',
    originalFileName: 'chest_xray.dcm',
    thumbnailPath: '',
    studyDescription: 'Chest X-Ray',
    seriesDescription: 'PA View',
    modality: 'CR',
    patientName: 'Emily Davis',
    bodyPartExamined: 'CHEST',
    filePath: '/sample-data/chest-xray.dcm'
  }
];

const DicomViewerPage: React.FC = () => {
  const [selectedDicom, setSelectedDicom] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setError(null);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setUploadProgress(i);
      }

      // In a real implementation, we would call the actual upload function:
      // const uploadedAsset = await uploadDICOM(files[0], token);

      // For demo purposes, just simulate success
      alert(`Successfully uploaded ${files[0].name}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      // Reset the file input
      event.target.value = '';
    }
  };

  return (
    <Layout title="DICOM Viewer" description="Interactive DICOM viewer for radiology education">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '30px' }}>
          <h1>DICOM Viewer for Radiology Education</h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
            Interactive medical imaging viewer with annotation and measurement tools
          </p>
        </div>

        {/* Upload Section */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '8px',
          border: '1px dashed #ccc',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h2>Upload DICOM Files</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <label htmlFor="dicom-upload" style={{
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Choose DICOM File(s)
            </label>
            <input
              id="dicom-upload"
              type="file"
              accept=".dcm,.dicom"
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />

            {isUploading && (
              <div style={{ width: '100%', maxWidth: '400px' }}>
                <div style={{
                  height: '20px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${uploadProgress}%`,
                      backgroundColor: '#28a745',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ marginTop: '5px', fontSize: '14px', color: '#666' }}>
                  Uploading... {uploadProgress}%
                </div>
              </div>
            )}

            {error && (
              <div style={{
                padding: '10px',
                backgroundColor: '#f8d7da',
                color: '#721c24',
                borderRadius: '4px',
                border: '1px solid #f5c6cb'
              }}>
                Error: {error}
              </div>
            )}

            <div style={{ fontSize: '14px', color: '#666' }}>
              Supported formats: .dcm, .dicom
            </div>
          </div>
        </div>

        {/* Single DICOM Viewer */}
        <div style={{ marginBottom: '40px' }}>
          <h2>Single DICOM Viewer</h2>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <React.Suspense fallback={<LoadingFallback />}>
              <DicomViewerIntegrated
                dicomUrl={mockDicomAssets[0].filePath}
                width="100%"
                height="700px"
              />
            </React.Suspense>
          </div>
        </div>

        {/* DICOM Gallery */}
        <div>
          <h2>DICOM Image Gallery</h2>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <React.Suspense fallback={<LoadingFallback />}>
              <DicomGallery
                dicomAssets={mockDicomAssets}
                title="Sample Radiology Cases"
                maxThumbnailsPerRow={4}
              />
            </React.Suspense>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h2>Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #eee' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Measurement Tools</h3>
              <p>Accurate length, angle, and area measurements with precision tools.</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #eee' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Annotation Support</h3>
              <p>Add labels, regions of interest, and educational notes to images.</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #eee' }}>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Multi-Modal Imaging</h3>
              <p>Support for CT, MRI, X-Ray, Ultrasound, and other imaging modalities.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DicomViewerPage;