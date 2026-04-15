---
id: digital-fluoroscopy
title: "Digital Fluoroscopy"
sidebar_label: "Digital Fluoroscopy"
---

# Digital Fluoroscopy

Digital fluoroscopy replaces the analogue image intensifier and film-based recording with digital flat-panel detectors and digital image processing, enabling superior image quality, lower doses, and advanced post-processing capabilities.

## Flat-Panel Detector (FPD) Fluoroscopy

Modern fluoroscopic systems use flat-panel detectors instead of image intensifiers:

### Indirect Conversion FPD
- CsI scintillator converts X-rays to light
- a-Si photodiode array converts light to electrical signal
- TFT array reads out signal digitally
- Frame rates: up to 30 fps (fluoroscopy), up to 60 fps (cine)

### Direct Conversion FPD
- Amorphous selenium (a-Se) converts X-rays directly to electrical charge
- Higher spatial resolution (no light spread)
- Used in some cardiac and vascular systems

## Advantages of FPD over Image Intensifier

| Feature | Image Intensifier | Flat-Panel Detector |
|---|---|---|
| Image distortion | Pincushion, vignetting | None |
| Dynamic range | Moderate | Wide |
| Size / weight | Large, bulky | Thin, lightweight |
| Geometric accuracy | Distortion at periphery | Uniform across field |
| DQE | Moderate | Higher |
| Magnification | Electronic (increased dose) | Digital zoom (no dose increase) |
| Maintenance | Complex (vacuum tube) | Lower |

## Digital Subtraction Angiography (DSA)

The most important advanced digital fluoroscopy technique:

### Principle
1. **Mask image**: Pre-contrast image acquired and stored
2. **Contrast images**: Images acquired after IV/IA iodinated contrast injection
3. **Subtraction**: Mask subtracted from contrast images
4. **Result**: Only contrast-enhanced vessels visible — bone and soft tissue removed

### Advantages of DSA
- Exquisite vessel detail with small contrast volumes
- Real-time subtraction during acquisition
- Lower contrast dose than conventional angiography
- Roadmap function: subtracted image used as overlay guide for catheter navigation

### DSA Limitations
- **Motion artifacts**: Patient movement between mask and contrast images causes misregistration
- **Pixel shift / re-masking**: Software correction for small movements
- **Bowel gas**: Gas movement causes subtraction artifacts in abdominal DSA

### Clinical Applications
- Cerebral angiography
- Peripheral vascular disease assessment
- Renal artery stenosis
- Mesenteric ischaemia
- Pre-operative vascular mapping

## Pulsed Digital Fluoroscopy

Digital systems enable sophisticated pulsing strategies:

| Pulse Rate | Use | Dose Reduction |
|---|---|---|
| 30 fps | Cardiac; fast-moving structures | Baseline |
| 15 fps | General fluoroscopy | ~50% |
| 7.5 fps | Slow procedures (e.g., GI studies) | ~75% |
| 3–4 fps | Very slow procedures | ~85–90% |

**Digital frame-holding**: Displays last acquired frame between pulses — no additional dose while image is held.

## Automatic Dose Rate Control (ADRC)

Digital fluoroscopic systems automatically adjust technique to maintain consistent image quality:
- Adjusts kVp, mA, and pulse width in response to patient thickness
- Prevents underexposed (noisy) or overexposed images
- Operator can select dose rate mode (low dose, normal, high dose/high quality)

## Digital Fluoroscopy Image Processing

### Frame Averaging (Recursive Filtering)
- Averages multiple sequential frames
- Reduces quantum noise
- Trade-off: blurring of fast-moving structures (lag effect)
- User-adjustable: more averaging = less noise but more lag

### Edge Enhancement
- Increases apparent sharpness of vessel walls and catheter edges
- Can increase noise appearance if too aggressive

### Noise Reduction Algorithms
- Temporal and spatial filtering
- AI-based denoising in modern systems

## Dose Management Tools

| Tool | Function |
|---|---|
| DAP meter | Measures dose area product in real time |
| Fluoroscopy time display | Cumulative time with audible alarm |
| Reference point air kerma | Estimates skin dose at interventional reference point |
| Dose notification levels | Alerts at 3 Gy and 5 Gy skin dose |
| Dose recording | Automatic DICOM dose structured report |

## Cone-Beam CT (CBCT) on C-arm

Modern interventional systems include CBCT capability:
- FPD rotates around patient (180°–360°)
- Reconstructs cross-sectional images similar to diagnostic CT
- Performed in the IR suite without moving the patient
- Used for: procedure guidance, immediate post-procedure assessment, soft tissue visualisation

**Limitations vs diagnostic CT**:
- Lower soft tissue contrast
- More scatter artifacts
- Slower acquisition
- Higher dose than fluoroscopy
