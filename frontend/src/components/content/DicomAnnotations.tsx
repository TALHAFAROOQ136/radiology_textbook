/**
 * DICOM Annotations Component
 *
 * A component for displaying and managing DICOM annotations and measurements
 */

import React, { useState, useEffect } from 'react';
import { Types } from '@cornerstonejs/tools';

interface Annotation {
  id: string;
  toolType: string;
  data: any;
  label?: string;
  description?: string;
  color?: string;
  visible: boolean;
  createdAt: Date;
}

interface DicomAnnotationsProps {
  element?: HTMLDivElement | null;
  onAnnotationsChange?: (annotations: Annotation[]) => void;
}

const DicomAnnotations: React.FC<DicomAnnotationsProps> = ({ element, onAnnotationsChange }) => {
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedAnnotation, setSelectedAnnotation] = useState<string | null>(null);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [newAnnotationLabel, setNewAnnotationLabel] = useState('');
  const [newAnnotationDescription, setNewAnnotationDescription] = useState('');

  // Simulate getting annotations from the cornerstone tools
  useEffect(() => {
    // In a real implementation, this would listen to cornerstone events
    // and update annotations when tools create measurements
    const mockAnnotations: Annotation[] = [
      {
        id: '1',
        toolType: 'Length',
        data: { length: 25.5, unit: 'mm' },
        label: 'Lesion diameter',
        description: 'Measurement of lesion size',
        color: '#FF0000',
        visible: true,
        createdAt: new Date()
      },
      {
        id: '2',
        toolType: 'RectangleRoi',
        data: { area: 120.5, unit: 'mm²' },
        label: 'ROI Area',
        description: 'Region of interest',
        color: '#00FF00',
        visible: true,
        createdAt: new Date(Date.now() - 3600000) // 1 hour ago
      }
    ];

    setAnnotations(mockAnnotations);
  }, []);

  const handleAddAnnotation = () => {
    if (!newAnnotationLabel.trim()) return;

    const newAnnotation: Annotation = {
      id: `ann_${Date.now()}`,
      toolType: 'Text',
      data: {},
      label: newAnnotationLabel,
      description: newAnnotationDescription,
      color: '#FFFF00',
      visible: true,
      createdAt: new Date()
    };

    const updatedAnnotations = [...annotations, newAnnotation];
    setAnnotations(updatedAnnotations);
    setNewAnnotationLabel('');
    setNewAnnotationDescription('');

    if (onAnnotationsChange) {
      onAnnotationsChange(updatedAnnotations);
    }
  };

  const handleDeleteAnnotation = (id: string) => {
    const updatedAnnotations = annotations.filter(ann => ann.id !== id);
    setAnnotations(updatedAnnotations);

    if (selectedAnnotation === id) {
      setSelectedAnnotation(null);
    }

    if (onAnnotationsChange) {
      onAnnotationsChange(updatedAnnotations);
    }
  };

  const handleToggleVisibility = (id: string) => {
    const updatedAnnotations = annotations.map(ann =>
      ann.id === id ? { ...ann, visible: !ann.visible } : ann
    );
    setAnnotations(updatedAnnotations);

    if (onAnnotationsChange) {
      onAnnotationsChange(updatedAnnotations);
    }
  };

  const handleSelectAnnotation = (id: string) => {
    setSelectedAnnotation(selectedAnnotation === id ? null : id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #dee2e6' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ margin: 0, fontSize: '16px', color: '#495057' }}>Annotations & Measurements</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            style={{
              padding: '4px 8px',
              border: '1px solid #ced4da',
              borderRadius: '4px',
              backgroundColor: showAnnotations ? '#e7f1ff' : '#fff',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {showAnnotations ? 'Hide' : 'Show'} All
          </button>
        </div>
      </div>

      {/* Add New Annotation Form */}
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #e9ecef' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>Add New Annotation</div>
        <input
          type="text"
          value={newAnnotationLabel}
          onChange={(e) => setNewAnnotationLabel(e.target.value)}
          placeholder="Annotation label"
          style={{
            width: '100%',
            padding: '6px 10px',
            marginBottom: '8px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        <textarea
          value={newAnnotationDescription}
          onChange={(e) => setNewAnnotationDescription(e.target.value)}
          placeholder="Description (optional)"
          rows={2}
          style={{
            width: '100%',
            padding: '6px 10px',
            marginBottom: '8px',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            fontSize: '14px',
            resize: 'vertical'
          }}
        />
        <button
          onClick={handleAddAnnotation}
          disabled={!newAnnotationLabel.trim()}
          style={{
            padding: '6px 12px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: newAnnotationLabel.trim() ? 'pointer' : 'not-allowed',
            fontSize: '14px'
          }}
        >
          Add Annotation
        </button>
      </div>

      {/* Annotations List */}
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {annotations.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#6c757d' }}>
            No annotations yet. Use the tools to measure or annotate.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {annotations.map((annotation) => (
              <div
                key={annotation.id}
                onClick={() => handleSelectAnnotation(annotation.id)}
                style={{
                  padding: '10px',
                  backgroundColor: selectedAnnotation === annotation.id ? '#e7f1ff' : '#fff',
                  border: `1px solid ${selectedAnnotation === annotation.id ? '#007bff' : '#dee2e6'}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: annotation.color || '#007bff',
                          border: '1px solid #ccc'
                        }}
                      ></span>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        {annotation.label || `${annotation.toolType} Measurement`}
                      </span>
                      <span
                        style={{
                          padding: '2px 6px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '12px',
                          fontSize: '10px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {annotation.toolType}
                      </span>
                    </div>

                    {annotation.description && (
                      <div style={{ fontSize: '13px', color: '#495057', marginBottom: '4px' }}>
                        {annotation.description}
                      </div>
                    )}

                    {annotation.data.length && (
                      <div style={{ fontSize: '12px', color: '#6c757d' }}>
                        Length: {annotation.data.length} {annotation.data.unit}
                      </div>
                    )}

                    {annotation.data.area && (
                      <div style={{ fontSize: '12px', color: '#6c757d' }}>
                        Area: {annotation.data.area} {annotation.data.unit}
                      </div>
                    )}

                    <div style={{ fontSize: '11px', color: '#adb5bd', marginTop: '4px' }}>
                      {formatDate(annotation.createdAt)}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleVisibility(annotation.id);
                      }}
                      style={{
                        padding: '4px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        backgroundColor: annotation.visible ? '#d4edda' : '#f8d7da',
                        color: annotation.visible ? '#155724' : '#721c24',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      {annotation.visible ? 'Visible' : 'Hidden'}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteAnnotation(annotation.id);
                      }}
                      style={{
                        padding: '4px',
                        border: '1px solid #dc3545',
                        borderRadius: '4px',
                        backgroundColor: '#fff',
                        color: '#dc3545',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DicomAnnotations;