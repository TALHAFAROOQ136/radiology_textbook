/**
 * DICOM Gallery Component
 *
 * A component for displaying multiple DICOM images in a grid layout with lightbox functionality
 */

import React, { useState } from 'react';
import DicomViewer from './DicomViewer';

interface DicomAsset {
  id: string;
  fileName: string;
  originalFileName: string;
  thumbnailPath?: string;
  studyDescription?: string;
  seriesDescription?: string;
  modality?: string;
  patientName?: string;
  bodyPartExamined?: string;
  filePath: string;
}

interface DicomGalleryProps {
  dicomAssets: DicomAsset[];
  title?: string;
  maxThumbnailsPerRow?: number;
}

const DicomGallery: React.FC<DicomGalleryProps> = ({
  dicomAssets,
  title = 'DICOM Gallery',
  maxThumbnailsPerRow = 4
}) => {
  const [selectedDicomIndex, setSelectedDicomIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setSelectedDicomIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedDicomIndex(null);
  };

  const handlePrevImage = () => {
    if (selectedDicomIndex !== null) {
      const newIndex = selectedDicomIndex === 0 ? dicomAssets.length - 1 : selectedDicomIndex - 1;
      setSelectedDicomIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedDicomIndex !== null) {
      const newIndex = selectedDicomIndex === dicomAssets.length - 1 ? 0 : selectedDicomIndex + 1;
      setSelectedDicomIndex(newIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseLightbox();
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  };

  if (dicomAssets.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
        <h3>No DICOM images available</h3>
        <p>This gallery is currently empty.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>{title}</h2>

      {/* Thumbnail Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${100 / maxThumbnailsPerRow}%, 1fr))`,
          gap: '15px',
          marginBottom: '20px'
        }}
      >
        {dicomAssets.map((asset, index) => (
          <div
            key={asset.id}
            onClick={() => handleThumbnailClick(index)}
            style={{
              border: '2px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s, border-color 0.2s',
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = '#007bff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = '#ddd';
            }}
          >
            {/* Thumbnail placeholder - in a real implementation, we'd show actual thumbnails */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#666'
              }}
            >
              {asset.thumbnailPath ? (
                <img
                  src={asset.thumbnailPath}
                  alt={`Thumbnail for ${asset.originalFileName}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <div style={{ fontSize: '24px', marginBottom: '5px' }}>🖼️</div>
                  <div>Thumbnail</div>
                </div>
              )}
            </div>

            {/* Image Info */}
            <div
              style={{
                padding: '8px',
                backgroundColor: '#f8f9fa',
                fontSize: '12px',
                borderTop: '1px solid #eee'
              }}
            >
              <div style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {asset.studyDescription || asset.originalFileName}
              </div>
              <div style={{ color: '#666' }}>
                {asset.modality} • {asset.bodyPartExamined}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedDicomIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={handleCloseLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1200px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001
              }}
            >
              ✕
            </button>

            {/* Navigation Buttons */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                zIndex: 1001
              }}
            >
              <button
                onClick={handlePrevImage}
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &lt;
              </button>
            </div>

            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                zIndex: 1001
              }}
            >
              <button
                onClick={handleNextImage}
                style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &gt;
              </button>
            </div>

            {/* DICOM Viewer */}
            <div style={{ flex: 1, minHeight: '600px', marginBottom: '10px' }}>
              <DicomViewer
                dicomUrl={dicomAssets[selectedDicomIndex].filePath}
                width="100%"
                height="100%"
              />
            </div>

            {/* Image Info */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '10px',
                borderRadius: '4px',
                color: '#333'
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>
                {dicomAssets[selectedDicomIndex].originalFileName}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '14px' }}>
                {dicomAssets[selectedDicomIndex].studyDescription && (
                  <span><strong>Study:</strong> {dicomAssets[selectedDicomIndex].studyDescription}</span>
                )}
                {dicomAssets[selectedDicomIndex].seriesDescription && (
                  <span><strong>Series:</strong> {dicomAssets[selectedDicomIndex].seriesDescription}</span>
                )}
                {dicomAssets[selectedDicomIndex].modality && (
                  <span><strong>Modality:</strong> {dicomAssets[selectedDicomIndex].modality}</span>
                )}
                {dicomAssets[selectedDicomIndex].patientName && (
                  <span><strong>Patient:</strong> {dicomAssets[selectedDicomIndex].patientName}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DicomGallery;