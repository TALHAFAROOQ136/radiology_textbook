/**
 * DICOM Toolbar Component
 *
 * A toolbar for DICOM viewer with zoom, pan, and annotation tools
 */

import React, { useState } from 'react';
import { ToolGroupManager } from '@cornerstonejs/tools';

interface DicomToolbarProps {
  element?: HTMLDivElement | null;
  onToolChange?: (toolName: string) => void;
}

const DicomToolbar: React.FC<DicomToolbarProps> = ({ element, onToolChange }) => {
  const [activeTool, setActiveTool] = useState<string>('WindowLevel');

  // Available tools
  const tools = [
    { name: 'WindowLevel', icon: '_contrast', label: 'Window Level' },
    { name: 'Pan', icon: 'pan_tool', label: 'Pan' },
    { name: 'Zoom', icon: 'zoom_in', label: 'Zoom' },
    { name: 'Length', icon: 'straighten', label: 'Measure' },
    { name: 'Probe', icon: 'location_on', label: 'Pixel Value' },
    { name: 'RectangleRoi', icon: 'crop_square', label: 'Rectangle ROI' },
    { name: 'EllipticalRoi', icon: 'circle', label: 'Ellipse ROI' },
    { name: 'Angle', icon: 'gesture', label: 'Angle' },
    { name: 'Bidirectional', icon: 'linear_scale', label: 'Bidirectional' },
  ];

  const handleToolSelect = (toolName: string) => {
    setActiveTool(toolName);

    // Get the active tool group (assuming we have one)
    const toolGroup = ToolGroupManager.getActiveToolGroup();
    if (toolGroup) {
      // Reset all tools to passive
      tools.forEach(tool => {
        toolGroup.setToolPassive(tool.name);
      });

      // Set the selected tool to active
      toolGroup.setToolActive(toolName, { bindings: [{ mouseButton: 0 }] });
    }

    if (onToolChange) {
      onToolChange(toolName);
    }
  };

  const handleResetView = () => {
    // In a real implementation, this would reset the view to initial state
    // For now, we'll just trigger a callback
    if (onToolChange) {
      onToolChange('reset');
    }
  };

  const handleZoomToFit = () => {
    // In a real implementation, this would fit the image to the viewport
    if (onToolChange) {
      onToolChange('fit-to-window');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
        Tools
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px' }}>
        {tools.map((tool) => (
          <button
            key={tool.name}
            onClick={() => handleToolSelect(tool.name)}
            style={{
              padding: '8px',
              margin: '2px',
              border: activeTool === tool.name ? '2px solid #007bff' : '1px solid #ccc',
              backgroundColor: activeTool === tool.name ? '#e6f0ff' : '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '12px',
            }}
            title={tool.label}
          >
            <span style={{ fontSize: '16px', marginBottom: '2px' }}>{tool.icon}</span>
            <span>{tool.label}</span>
          </button>
        ))}
      </div>

      <div style={{ borderTop: '1px solid #ddd', paddingTop: '8px', marginTop: '8px' }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
          View Controls
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button
            onClick={handleResetView}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset View
          </button>

          <button
            onClick={handleZoomToFit}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Fit to Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default DicomToolbar;