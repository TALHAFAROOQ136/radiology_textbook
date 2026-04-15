---
id: chapter-06-advanced-x-ray-imaging
title: "Chapter 6: Advanced X-ray Imaging"
sidebar_label: "Chapter 6: Advanced X-ray Imaging"
---

# Advanced X-ray Imaging

Advanced X-ray imaging encompasses specialised techniques that go beyond conventional radiography to provide enhanced diagnostic information. These modalities use innovative detector technology, image processing, and acquisition strategies to improve contrast, resolution, and clinical utility.

## Fluoroscopy

Real-time dynamic X-ray imaging used to visualise moving structures and guide interventional procedures.

### Components
- **X-ray tube**: Continuous or pulsed output
- **Image intensifier (II)** or **flat-panel detector (FPD)**
- **Video camera / CCD**: Captures and displays real-time images
- **Monitor**: Displays live images

### Image Intensifier
Converts X-rays to a bright visible image:
1. Input phosphor converts X-rays to light
2. Photocathode converts light to electrons
3. Electrons accelerated and focused onto output phosphor
4. Output phosphor produces bright visible image (~10,000× brighter than input)

### Flat-Panel Fluoroscopy
Modern systems replace II with FPD:
- Better image uniformity (no vignetting or pincushion distortion)
- Wider dynamic range
- Lower patient dose with pulsed fluoroscopy

### Dose Management in Fluoroscopy
- **Pulsed fluoroscopy**: Reduces dose by 50–75% vs continuous
- **Last image hold**: Displays last acquired frame without additional exposure
- **Dose area product (DAP)**: Measured and recorded for every procedure
- Fluoroscopy time displayed and alarmed

---

## Mammography

Dedicated low-energy X-ray imaging of the breast for cancer detection.

### System Design
- Low kVp (25–35 kVp) to maximise photoelectric contrast between soft tissues
- Molybdenum or rhodium target and filter combination
- Compression paddle: reduces thickness, scatter, and dose; improves sharpness
- High spatial resolution detector (up to 10 lp/mm)

### Digital Mammography (FFDM)
Full-field digital mammography uses:
- Direct conversion a-Se flat-panel detectors
- 14-bit image depth (~16,000 grey levels)
- Superior contrast resolution vs screen-film
- Computer-aided detection (CAD) integration

### Tomosynthesis (3D Mammography)
- Multiple low-dose projections acquired at different angles
- Reconstructed into thin slices through the breast
- Reduces tissue overlap (major limitation of 2D mammography)
- Improves cancer detection, reduces recall rate

---

## Computed Tomography (CT)

Cross-sectional imaging using rotating X-ray tube and detector array with computational reconstruction.

### CT System Components
| Component | Function |
|---|---|
| X-ray tube | Rotates around patient gantry |
| Detector array | Measures transmitted X-ray intensity |
| Slip rings | Allow continuous rotation |
| Computer | Reconstructs cross-sectional images |
| Gantry | Houses rotating components |

### Image Reconstruction
- **Filtered back projection (FBP)**: Fast, traditional method; increases noise at low dose
- **Iterative reconstruction (IR)**: Reduces noise; allows dose reduction of 30–60%
- **AI-based reconstruction**: Emerging technique for further dose reduction and detail enhancement

### CT Numbers (Hounsfield Units)
| Tissue | HU Range |
|---|---|
| Air | −1000 |
| Fat | −100 to −50 |
| Water | 0 |
| Soft tissue | +20 to +80 |
| Bone | +400 to +1000 |
| Metal | &gt;+1000 |

### Multi-Detector CT (MDCT)
- Multiple detector rows (4 to 320+) allow faster scanning
- Isotropic voxels enable high-quality multiplanar reconstructions (MPR)
- Applications: CT angiography, cardiac CT, trauma imaging

---

## Dual-Energy X-ray Imaging

Uses two different X-ray energies to characterise tissue composition.

### Dual-Energy CT (DECT)
- Simultaneously acquires high and low kVp data
- Applications:
  - Kidney stone characterisation (uric acid vs calcium)
  - Gout detection (urate crystal mapping)
  - Iodine maps (perfusion imaging)
  - Virtual non-contrast images

### Dual-Energy Subtraction Radiography
- Two exposures at different kVp values
- Software subtracts bone or soft tissue component
- Used in chest radiography to improve pulmonary nodule detection

---

## Interventional Radiology (IR) Imaging

Image-guided minimally invasive procedures using fluoroscopy, CT, or ultrasound.

### Digital Subtraction Angiography (DSA)
- Pre-contrast (mask) image subtracted from post-contrast images
- Removes overlying bone and soft tissue
- Reveals vessels with high contrast using small amounts of iodinated contrast
- Used for: vascular diagnosis, angioplasty, embolisation

### Cone-Beam CT (CBCT)
- Flat-panel detector rotates around patient on C-arm
- Provides 3D cross-sectional imaging during interventional procedures
- Lower dose than diagnostic CT; lower soft tissue contrast
- Applications: IR suites, dental imaging, orthopaedic surgery

---

## Radiation Dose in Advanced Imaging

| Modality | Typical Effective Dose |
|---|---|
| Mammography (2-view) | ~0.4 mSv |
| Fluoroscopy (barium meal) | ~3 mSv |
| CT chest | ~7 mSv |
| CT abdomen and pelvis | ~10 mSv |
| CT coronary angiography | ~2–16 mSv |
| DSA (cerebral) | ~5 mSv |

---

## Summary

| Modality | Key Advantage | Primary Use |
|---|---|---|
| Fluoroscopy | Real-time imaging | GI studies, IR procedures |
| Mammography | High soft-tissue contrast | Breast cancer screening/diagnosis |
| CT | Cross-sectional, 3D | Whole-body diagnosis, trauma |
| Dual-energy | Tissue characterisation | Vascular, oncology, stone analysis |
| DSA | High-contrast vessel imaging | Vascular diagnosis and intervention |
| CBCT | 3D guidance in IR suite | Interventional procedures |
