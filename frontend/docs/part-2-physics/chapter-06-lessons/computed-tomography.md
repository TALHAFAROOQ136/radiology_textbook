---
id: computed-tomography
title: "Computed Tomography"
sidebar_label: "Computed Tomography"
---

# Computed Tomography

Computed Tomography (CT) uses a rotating X-ray tube and detector array, combined with computer reconstruction, to produce cross-sectional images of the body with high contrast and spatial resolution. CT is the workhorse of modern diagnostic radiology.

## Principles of CT

### Basic Concept
1. X-ray tube rotates around the patient
2. Detectors measure transmitted X-ray intensity at hundreds of angles
3. Computer algorithms reconstruct a cross-sectional image from projection data
4. Image displayed in Hounsfield Units (HU)

### Hounsfield Units (HU)
The CT number scale based on water = 0:

| Tissue | HU Range |
|---|---|
| Air | −1000 |
| Lung | −700 to −600 |
| Fat | −100 to −50 |
| Water | 0 |
| Soft tissue | +20 to +80 |
| Blood (clotted) | +50 to +80 |
| Bone (cortical) | +400 to +1000 |
| Metal | &gt;+1000 |

## CT System Components

### Gantry
- Houses rotating components (tube + detectors)
- Bore diameter: typically 70–80 cm (up to 90 cm in bariatric CT)
- Tilt: ±30° for head/spine imaging

### X-ray Tube
- High heat capacity (continuous rotation)
- kVp: 80–140 kVp (selectable)
- mA: 100–800 mA (modulated)

### Detector Array
- Multiple rows of solid-state detectors (scintillator + photodiode)
- Modern scanners: 64–320 detector rows
- Detector materials: GdOS (gadolinium oxysulphide), CdWO₄

### Slip Rings
- Allow continuous gantry rotation (enables helical/spiral CT)
- Transfer power and data without cables

### Computer System
- Performs reconstruction (FBP or iterative algorithms)
- Manages image display, archiving, and post-processing

## CT Acquisition Modes

### Axial (Sequential) CT
- Table stationary; single rotation; table increments
- Used for: head CT, high-resolution lung CT (HRCT)

### Helical (Spiral) CT
- Continuous gantry rotation + continuous table movement
- **Pitch** = table movement per rotation ÷ beam collimation
- Faster acquisition; covers large volumes in a single breath-hold

### Multi-Detector CT (MDCT)
Multiple detector rows acquired simultaneously:

| Detector Rows | Clinical Capability |
|---|---|
| 4–16 | General body imaging |
| 64 | CT angiography, cardiac CT |
| 128–256 | Dual-source, wide coverage |
| 320 | Whole-organ (heart, brain) in single rotation |

## Image Reconstruction

### Filtered Back Projection (FBP)
- Traditional reconstruction method
- Fast, well-established
- Noise increases at low dose settings

### Iterative Reconstruction (IR)
- Uses repeated mathematical iterations to reduce noise
- Allows **30–60% dose reduction** with equal or better image quality
- Types: ASIR (GE), SAFIRE (Siemens), iDose (Philips), AIDR (Canon)

### AI-Based Reconstruction (Deep Learning)
- Neural networks trained on high-dose reference images
- Further dose reduction (up to 80% in some applications)
- Superior noise reduction while preserving spatial resolution

## Image Display and Post-Processing

### Windowing
Critical for displaying different tissue types:

| Window | WL | WW | Application |
|---|---|---|---|
| Soft tissue | +40 | 400 | Abdomen, pelvis |
| Lung | −600 | 1500 | Pulmonary parenchyma |
| Bone | +400 | 2000 | Skeletal structures |
| Brain | +35 | 80 | Intracranial pathology |
| Liver | +60 | 160 | Liver lesions |
| Mediastinum | +50 | 350 | Chest soft tissues |

### Multiplanar Reconstruction (MPR)
- Reformats axial data into coronal, sagittal, or oblique planes
- Requires isotropic voxels (equal dimensions in all planes)

### Maximum Intensity Projection (MIP)
- Projects highest HU value along viewing rays
- Excellent for vascular imaging (CT angiography)

### Volume Rendering (VR)
- 3D surface rendering of structures
- Used for: surgical planning, patient communication, complex anatomy

### Minimum Intensity Projection (MinIP)
- Projects lowest HU values
- Used for: airway imaging (virtual bronchoscopy), MRCP-equivalent

## CT Dose

### Dose Descriptors
| Metric | Definition |
|---|---|
| CTDI (CT Dose Index) | Average dose across the scan field |
| CTDIvol | Volume-weighted CTDI (mGy) |
| DLP (Dose Length Product) | CTDIvol × scan length (mGy·cm) |
| Effective dose | DLP × conversion factor (mSv) |

### Typical Effective Doses
| Examination | Effective Dose |
|---|---|
| CT head | ~2 mSv |
| CT chest | ~7 mSv |
| CT abdomen and pelvis | ~10 mSv |
| CT pulmonary angiography | ~4 mSv |
| CT coronary angiography | ~2–16 mSv |

### Dose Reduction Strategies
- **Tube current modulation (TCM)**: Adjusts mA based on patient size/shape
- **kVp optimisation**: Lower kVp for smaller patients and vascular studies
- **Iterative/AI reconstruction**: Allows mAs reduction
- **Scan length**: Limit to area of clinical interest
- **Avoid unnecessary phases**: Minimise multi-phase protocols

## Special CT Techniques

### CT Angiography (CTA)
- IV iodinated contrast timed to arterial or venous phase
- High-resolution vessel imaging; approaching DSA quality
- Applications: aortic aneurysm, PE, stroke workup, renal artery

### Dual-Energy CT (DECT)
- Simultaneous high and low kVp acquisition
- Material decomposition: iodine maps, uric acid detection, bone removal
- Virtual non-contrast images reduce need for unenhanced scan

### Cardiac CT
- ECG gating (prospective or retrospective) to freeze cardiac motion
- CT calcium scoring (Agatston score)
- CT coronary angiography: non-invasive coronary artery assessment

### Perfusion CT
- Serial images after contrast injection
- Maps blood flow, volume, and transit time
- Applications: acute stroke (penumbra vs core), liver and lung tumour perfusion
