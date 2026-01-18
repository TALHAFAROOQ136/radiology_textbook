/**
 * Test page to verify DICOM viewer functionality
 */

import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

// Dynamically import DICOM components to avoid SSR issues
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

const TestDicomViewer: React.FC = () => {
  return (
    <Layout title="Test DICOM Viewer" description="Testing the DICOM viewer functionality">
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Test DICOM Viewer</h1>
        <p>This page is used to test the DICOM viewer functionality.</p>

        <div style={{ marginTop: '20px' }}>
          <h2>DICOM Viewer Test</h2>
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <React.Suspense fallback={<LoadingFallback />}>
              <DicomViewerIntegrated
                dicomUrl="/sample-data/test.dcm"
                width="100%"
                height="700px"
              />
            </React.Suspense>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestDicomViewer;