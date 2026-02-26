/**
 * Integrated DICOM Viewer Component
 *
 * A complete DICOM viewing solution with viewer, toolbar, and annotations
 */

import React, { useState } from 'react';
import DicomViewer from './DicomViewer';
import DicomToolbar from './DicomToolbar';
import DicomAnnotations from './DicomAnnotations';

interface DicomViewerIntegratedProps {
  dicomUrl: string;
  showAnnotations?: boolean;
  showToolbar?: boolean;
  width?: string;
  height?: string;
}

const DicomViewerIntegrated: React.FC<DicomViewerIntegratedProps> = ({
  dicomUrl,
  showAnnotations = true,
  showToolbar = true,
  width = '100%',
  height = '700px'
}) => {
  const [currentTool, setCurrentTool] = useState<string>('WindowLevel');

  const handleToolChange = (toolName: string) => {
    setCurrentTool(toolName);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: showAnnotations ? '1fr 300px' : '1fr',
      gap: '15px',
      width: width,
      height: height
    }}>
      {/* Main DICOM Viewer Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        {/* Toolbar */}
        {showToolbar && (
          <div style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #dee2e6',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#495057' }}>
              DICOM Viewer
            </div>
            <div style={{ fontSize: '12px', color: '#6c757d' }}>
              Current Tool: {currentTool}
            </div>
          </div>
        )}

        {/* DICOM Viewer */}
        <div style={{ flex: 1, padding: showToolbar ? '10px' : '0' }}>
          <DicomViewer
            dicomUrl={dicomUrl}
            onLoadingComplete={() => console.log('DICOM loaded')}
            onError={(error) => console.error('DICOM error:', error)}
          />
        </div>
      </div>

      {/* Annotations Panel */}
      {showAnnotations && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          {showToolbar && (
            <div style={{
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderBottom: '1px solid #dee2e6'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#495057' }}>Tools</h3>
              <DicomToolbar onToolChange={handleToolChange} />
            </div>
          )}

          <div style={{ flex: 1 }}>
            <DicomAnnotations />
          </div>
        </div>
      )}
    </div>
  );
};

export default DicomViewerIntegrated;