---
id: digital-radiographic-artifacts
title: "Digital Radiographic Artifacts"
sidebar_label: "Digital Radiographic Artifacts"
---

# Digital Radiographic Artifacts

Digital radiographic artifacts are unwanted features in CR or DR images that arise from detector problems, software errors, incorrect technique, or patient factors. Early recognition prevents misdiagnosis and prompts timely equipment correction.

## Computed Radiography (CR) Artifacts

### Ghost Image (Residual Image)
- **Cause**: Incomplete erasure of a previous exposure from the imaging plate
- **Appearance**: Faint superimposed image from prior examination
- **Prevention**: Ensure adequate erase cycle; avoid exposing plates to background radiation before use
- **Action**: Re-erase plate; if persistent, replace plate

### Scratches and Physical Damage
- **Cause**: Mishandling of imaging plate; foreign objects in cassette
- **Appearance**: Bright (white) lines or marks on image
- **Prevention**: Careful plate handling; regular cassette inspection
- **Action**: Replace damaged plate

### Quantum Noise (Mottle)
- **Cause**: Insufficient exposure reaching the detector (low mAs)
- **Appearance**: Grainy, speckled image
- **Prevention**: Use appropriate technique; monitor EI (exposure index)
- **Action**: Repeat with increased mAs if non-diagnostic

### Plate Fog
- **Cause**: Background radiation exposure to stored plates; plates stored near radiation sources
- **Appearance**: Increased background density; reduced contrast
- **Prevention**: Store plates away from radiation areas; use promptly after removal from storage
- **Action**: Erase and re-expose

### Processing Artifacts (CR Reader)
| Artifact | Cause |
|---|---|
| Laser scan lines | Dirty or faulty laser optics |
| Banding | Inconsistent laser intensity |
| Edge enhancement artifacts | Aggressive processing algorithm |

---

## Digital Radiography (DR) Flat-Panel Artifacts

### Dead Pixels / Dead Lines
- **Cause**: Permanently non-functioning detector elements (pixels or entire lines/columns)
- **Appearance**: Bright white or black dots, lines, or columns on image
- **Detection**: Flat-field (uniform exposure) image reveals dead elements
- **Action**: Calibrate detector to interpolate over dead pixels; replace detector if extensive

### Lag / Ghosting
- **Cause**: Incomplete charge clearing from previous exposure (especially in a-Si indirect DR)
- **Appearance**: Faint previous image superimposed on current image
- **Prevention**: Allow adequate time between exposures; use detector reset function
- **Action**: Report to service engineer; may require detector recalibration

### Flat-Field Non-Uniformity
- **Cause**: Uncorrected variation in pixel sensitivity across the detector
- **Appearance**: Patchy or gradient density variation on uniform phantom image
- **Prevention**: Regular flat-field calibration
- **Action**: Perform detector calibration (gain and offset correction)

### Structured Noise / Electronic Interference
- **Cause**: Electromagnetic interference from nearby equipment; faulty electronics
- **Appearance**: Regular pattern of lines or bands across image
- **Action**: Identify and eliminate source of interference; service detector

### Grid Artifacts
| Artifact | Cause | Appearance |
|---|---|---|
| Grid lines | Stationary grid (Bucky failure) | Fine parallel lines |
| Grid cut-off | Misaligned focused grid | Unilateral density loss |
| Moiré pattern | Grid frequency aliasing with detector pixel frequency | Wavy interference pattern |

**Prevention**: Use moving Bucky; ensure grid alignment; use grid-frequency appropriate to detector pixel pitch.

### Aliasing
- **Cause**: Spatial frequency of object exceeds detector sampling frequency (Nyquist limit)
- **Appearance**: False patterns (Moiré), artificial sharpness at edges
- **Prevention**: Anti-aliasing filters applied in image processing

---

## Post-Processing Artifacts

### Histogram Analysis Errors
- **Cause**: Anatomy outside collimation field; extreme underexposure; foreign objects
- **Appearance**: Image appears too dark or too light despite adequate exposure
- **Prevention**: Collimate to anatomy; use correct body part selection on console

### Rescaling Errors
- **Cause**: Incorrect examination type selected (wrong LUT applied)
- **Appearance**: Abnormal contrast or brightness for the anatomy
- **Action**: Repeat with correct examination selection

### Compression Artifacts
- **Cause**: Lossy image compression at high compression ratios
- **Appearance**: Blockiness (JPEG blocks), loss of fine detail, ringing at edges
- **Prevention**: Use lossless compression for primary diagnosis; limit lossy compression ratio

---

## Patient and Technique Artifacts (Digital)

| Artifact | Cause | Appearance |
|---|---|---|
| Motion blur | Patient movement | Unsharp edges |
| Metal artifacts | High-density implants | Bright areas, streaks |
| Clothing / jewellery | Radiopaque materials | Dense opacities |
| Collimation outside detector | Field extends beyond detector | Histogram error, incorrect processing |
| Double exposure | Two exposures before readout | Superimposed images |

---

## Summary: CR vs DR Artifact Comparison

| Artifact | CR | DR |
|---|---|---|
| Ghost image | Yes (plate erasure) | Yes (lag/ghosting) |
| Dead pixels/lines | Rare (plate scratches) | Yes (detector failure) |
| Quantum noise | Yes (low exposure) | Yes (low exposure) |
| Processing errors | Laser/reader issues | Software/calibration issues |
| Grid artifacts | Yes | Yes (+ Moiré pattern risk) |
