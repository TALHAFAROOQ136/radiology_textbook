/**
 * DICOM Viewer Component
 *
 * A React component for displaying DICOM medical images with zoom, pan, and annotation features
 */

import React, { useEffect, useRef, useState } from 'react';
import * as cornerstone from '@cornerstonejs/core';
import * as cornerstoneTools from '@cornerstonejs/tools';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';

// Initialize Cornerstone and tools
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

// Enable all tools we'll be using
const {
  WindowLevelTool,
  PanTool,
  ZoomTool,
  LengthTool,
  ProbeTool,
  RectangleRoiTool,
  EllipticalRoiTool,
  AngleTool,
  BidirectionalTool,
  ToolGroupManager
} = cornerstoneTools;

const DicomViewer: React.FC<{
  dicomUrl: string;
  width?: string;
  height?: string;
  onLoadingStart?: () => void;
  onLoadingComplete?: () => void;
  onError?: (error: any) => void;
}> = ({
  dicomUrl,
  width = '100%',
  height = '600px',
  onLoadingStart,
  onLoadingComplete,
  onError
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let element: HTMLDivElement | null = null;
    let toolGroupId: string | null = null;

    const initializeViewer = async () => {
      if (!elementRef.current) return;

      element = elementRef.current;

      try {
        // Initialize cornerstone
        if (!cornerstone.getEnabledElement(element)) {
          cornerstone.enable(element);
        }

        // Initialize cornerstone tools
        cornerstoneTools.init();

        // Create a tool group
        toolGroupId = 'dicom-tool-group';
        const toolGroup = ToolGroupManager.createToolGroup(toolGroupId);

        // Add tools to the tool group
        toolGroup.addTool(WindowLevelTool.toolName);
        toolGroup.addTool(PanTool.toolName);
        toolGroup.addTool(ZoomTool.toolName);
        toolGroup.addTool(LengthTool.toolName);
        toolGroup.addTool(ProbeTool.toolName);
        toolGroup.addTool(RectangleRoiTool.toolName);
        toolGroup.addTool(EllipticalRoiTool.toolName);
        toolGroup.addTool(AngleTool.toolName);
        toolGroup.addTool(BidirectionalTool.toolName);

        // Set the tool group's mode to active for the tools we want to use
        toolGroup.setToolActive(WindowLevelTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'grab' });
        toolGroup.setToolActive(PanTool.toolName, { bindings: [{ mouseButton: 2 }], cursor: 'move' }); // Right-click to pan
        toolGroup.setToolActive(ZoomTool.toolName, { bindings: [{ mouseButton: 1 }], cursor: 'zoom-in' }); // Middle-click to zoom
        toolGroup.setToolActive(LengthTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });
        toolGroup.setToolActive(ProbeTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });
        toolGroup.setToolActive(RectangleRoiTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });
        toolGroup.setToolActive(EllipticalRoiTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });
        toolGroup.setToolActive(AngleTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });
        toolGroup.setToolActive(BidirectionalTool.toolName, { bindings: [{ mouseButton: 0 }], cursor: 'crosshair' });

        // Set the tool group on the element
        toolGroup.addEnabledElement(cornerstone.getEnabledElement(element)!);

        // Load the DICOM image
        if (onLoadingStart) onLoadingStart();

        const imageId = `wadouri:${dicomUrl}`;
        const image = await cornerstone.loadImage(imageId);

        // Display the image
        cornerstone.displayImage(element, image);

        setIsLoading(false);
        if (onLoadingComplete) onLoadingComplete();
      } catch (err) {
        console.error('Error initializing DICOM viewer:', err);
        setError(err instanceof Error ? err.message : 'Failed to load DICOM image');
        setIsLoading(false);
        if (onError) onError(err);
      }
    };

    initializeViewer();

    // Cleanup function
    return () => {
      if (element) {
        try {
          cornerstone.disable(element);
        } catch (err) {
          console.warn('Error disabling cornerstone:', err);
        }
      }

      if (toolGroupId) {
        try {
          ToolGroupManager.destroyToolGroup(toolGroupId);
        } catch (err) {
          console.warn('Error destroying tool group:', err);
        }
      }
    };
  }, [dicomUrl, onLoadingStart, onLoadingComplete, onError]);

  return (
    <div style={{ position: 'relative', width, height }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            zIndex: 10
          }}
        >
          Loading DICOM image...
        </div>
      )}

      {error && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffebee',
            color: '#c62828',
            zIndex: 10
          }}
        >
          Error loading DICOM: {error}
        </div>
      )}

      <div
        ref={elementRef}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid #ccc',
          backgroundColor: '#000'
        }}
      />
    </div>
  );
};

export default DicomViewer;