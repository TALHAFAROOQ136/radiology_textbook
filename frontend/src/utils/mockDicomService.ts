/**
 * Mock DICOM Service for Testing
 * Provides sample DICOM data for testing the viewer
 */

export const mockDicomData = {
  // Sample DICOM metadata
  patientName: "Test Patient",
  patientId: "TEST001",
  studyDate: "2024-01-19",
  modality: "CT",
  seriesDescription: "Abdomen CT",

  // This would normally be DICOM pixel data
  imageBuffer: null,
};

// Function to simulate loading a DICOM image
export const loadMockDicomImage = async (url: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      if (url.includes('test.dcm')) {
        resolve({
          imageId: url,
          minPixelValue: 0,
          maxPixelValue: 255,
          slope: 1,
          intercept: 0,
          windowCenter: 128,
          windowWidth: 256,
          getPixelData: () => {
            // Create a simple gradient pattern for testing
            const pixelData = new Uint8Array(512 * 512);
            for (let i = 0; i < pixelData.length; i++) {
              pixelData[i] = i % 256;
            }
            return pixelData;
          },
          rows: 512,
          columns: 512,
          height: 512,
          width: 512,
        });
      } else {
        reject(new Error(`DICOM file not found: ${url}`));
      }
    }, 500); // Simulate loading time
  });
};

// Function to register the mock DICOM loader
export const registerMockDicomLoader = () => {
  // Register the mock loader with cornerstone
  const imageLoader = (imageId: string) => {
    return loadMockDicomImage(imageId);
  };

  // This would normally register with cornerstone's image loader system
  return imageLoader;
};