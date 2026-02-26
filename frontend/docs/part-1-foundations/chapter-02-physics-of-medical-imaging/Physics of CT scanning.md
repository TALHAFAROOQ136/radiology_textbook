---
title: "Physics of CT Scanning"
sidebar_label: "Physics of CT Scanning"
---

# Physics of CT Scanning

Computed Tomography (CT) is a sophisticated imaging modality that uses X-rays to produce cross-sectional images of the body. The physics principles underlying CT scanning are complex and involve multiple advanced concepts.

## Basic Principles of CT

CT scanning creates cross-sectional images by acquiring multiple X-ray projections from different angles around the patient and then mathematically reconstructing these projections into tomographic slices. The fundamental principle is based on the Radon transform and its inverse.

### X-ray Attenuation in CT

The primary physics principle in CT is the measurement of X-ray attenuation as it passes through different tissues:

- **Beer-Lambert Law**: I = I₀e^(-μx), where μ is the linear attenuation coefficient
- Different tissues have different attenuation coefficients
- CT measures these differences to create image contrast
- The relationship between tissue composition and attenuation is predictable

### Hounsfield Units (HU)

CT images use a standardized scale called Hounsfield Units to quantify tissue attenuation:

- **Water**: Defined as 0 HU
- **Air**: -1000 HU
- **Bone**: +1000 HU (approximate)
- **Soft tissue**: Typically ranges from +20 to +100 HU
- **Fat**: Approximately -100 HU
- The formula: HU = [(μtissue - μwater) / μwater] × 1000

## CT Scanner Design and Components

### X-ray Source

Modern CT scanners use high-powered X-ray tubes with several important characteristics:

- **Power**: Up to 100 kW in modern scanners
- **Anode design**: Usually stationary/stationary or rotating anode
- **Target material**: Typically tungsten for high atomic number
- **Cooling systems**: Oil cooling, air cooling, or liquid cooling systems
- **Beam filtration**: Optimizes beam quality and reduces patient dose

### Detector Arrays

CT detectors are arranged in arrays and have evolved significantly over the years:

- **Scintillation detectors**: Use materials like cadmium tungstate or rare-earth ceramics
- **Solid-state detectors**: Modern systems use materials like gadolinium oxysulfide
- **Detector geometry**: Can be curved or flat-panel configurations
- **Slice thickness**: Determined by detector collimation
- **Efficiency**: Modern detectors have >95% efficiency

### Gantry Design

The CT gantry houses the X-ray tube and detector array:

- **Rotation speeds**: Modern scanners rotate at 0.25-0.35 seconds per rotation
- **Aperture**: Typically 70-80 cm diameter
- **Slip ring technology**: Enables continuous rotation without cables
- **Power delivery**: High-frequency generators within the rotating frame

## Image Acquisition Modes

### Sequential (Step-and-Shoot) Scanning

- The table remains stationary while the X-ray tube rotates
- After each rotation, the table moves to the next position
- Older technique, rarely used in modern scanners
- Provides good image quality but slower acquisition

### Helical (Spiral) Scanning

- Continuous table motion during continuous tube rotation
- Creates a helical path of X-ray beam through the patient
- Enables volumetric data acquisition
- Allows retrospective reconstruction at any position
- Pitch = table feed per rotation / total collimated beam width

### Cone-Beam CT

- Uses cone-shaped X-ray beam instead of fan-beam
- Detector is 2D array rather than 1D array
- Enables faster volume coverage
- Used in modern multi-slice CT scanners
- Requires sophisticated reconstruction algorithms

## Multi-Slice CT Technology

### Detector Configuration

Multi-slice CT (MSCT) uses multiple rows of detectors:

- **Single-row**: First generation multi-slice systems
- **Multi-row**: Modern systems with 4, 8, 16, 64, 128, 256, or more slices
- **Slice thickness**: Independent control of individual slices
- **Coverage**: Greater z-axis coverage per rotation

### Adaptive Collimation

- **Pre-patient collimation**: Controls radiation dose profile
- **Pre-detector collimation**: Reduces scatter radiation
- **Electronic collimation**: Software-controlled slice selection
- **Beam shaping**: Modulates X-ray beam based on patient anatomy

## Image Reconstruction

### Data Processing Steps

The raw data collected by CT detectors undergoes several processing steps:

- **Preprocessing**: Corrections for detector variations, beam hardening
- **Calibration**: Conversion of raw detector readings to linear attenuation values
- **Filtering**: Application of convolution kernels to enhance image quality
- **Backprojection**: Mathematical reconstruction of image slices

### Reconstruction Algorithms

- **Filtered Back Projection (FBP)**: Traditional method, fast but can introduce artifacts
- **Iterative Reconstruction (IR)**: Advanced methods that improve image quality and reduce noise
- **Model-Based Iterative Reconstruction (MBIR)**: Incorporates physical models of the imaging system
- **Adaptive Statistical Iterative Reconstruction (ASIR)**: Hybrid approach combining FBP and IR

### Convolution Kernels

Different reconstruction kernels serve specific purposes:

- **Standard kernel**: Balanced resolution and noise
- **Sharp/kernel**: Enhanced spatial resolution, increased noise
- **Smooth/kernel**: Reduced noise, decreased resolution
- **Bone kernel**: Optimized for high-contrast structures
- **Soft tissue kernel**: Optimized for low-contrast discrimination

## CT Imaging Parameters

### Technical Parameters

- **kV (tube voltage)**: Affects penetration and contrast; typically 80-140 kV
- **mA (tube current)**: Affects image noise and patient dose; typically 20-800 mA
- **mAs (milliampere-seconds)**: Product of mA and exposure time
- **Slice thickness**: Affects resolution and noise; typically 0.625-5 mm
- **Pitch**: Table speed relative to beam width; affects coverage and dose

### Image Quality Parameters

- **Spatial resolution**: Ability to distinguish fine details; typically 0.5-0.25 lp/mm
- **Contrast resolution**: Ability to distinguish low-contrast objects; 1-5 HU
- **Temporal resolution**: Important for cardiac imaging; limited by rotation time
- **Noise**: Quantum noise dominates in CT; measured as standard deviation in HU

## Advanced CT Techniques

### Dual-Energy CT

- Uses two different X-ray spectra to acquire data
- Enables material decomposition (iodine, calcium, etc.)
- Improves contrast resolution and enables virtual non-contrast imaging
- Can be implemented via dual-source, rapid kV switching, or dual-layer detectors

### Spectral CT

- Provides energy-selective information
- Enables monochromatic imaging
- Reduces beam-hardening artifacts
- Improves material characterization

### Perfusion CT

- Dynamic imaging to assess tissue perfusion
- Measures parameters like cerebral blood flow, volume, and mean transit time
- Used for stroke assessment and tumor characterization
- Requires rapid sequential scanning

## Dose Considerations

### Dose Metrics

- **CTDIvol**: Volume CT dose index, expressed in mGy
- **DLP**: Dose-length product, expressed in mGy·cm
- **Effective dose**: Estimated stochastic risk, expressed in mSv
- Typical chest CT effective dose: 7 mSv

### Dose Reduction Strategies

- **Automatic exposure control**: Adjusts tube current based on patient size
- **Iterative reconstruction**: Enables lower dose protocols
- **Prospective gating**: Reduces cardiac CT dose
- **Organ-based dose modulation**: Protects radiosensitive organs

## Clinical Applications

### Common Protocols

- **Routine body CT**: 120 kV, standard mAs, 1-2 mm slices
- **CT angiography**: High contrast bolus, timing protocols
- **Low-dose CT**: Reduced mAs, iterative reconstruction
- **Pediatric protocols**: Weight-based dose reduction

CT physics involves complex interactions between X-rays and tissue, sophisticated detector systems, and advanced reconstruction algorithms. Understanding these principles is essential for optimizing image quality and patient safety in clinical practice.