---
id: control-of-scatter-radiation
title: "Scatter Radiation Control"
sidebar_label: "Scatter Radiation Control"
---

# Control of Scatter Radiation

Scatter radiation is the primary cause of image contrast reduction in radiography. Controlling scatter is essential for producing high-quality diagnostic images.

## What is Scatter Radiation?

Scatter radiation arises mainly from **Compton interactions** within the patient:
- A primary X-ray photon interacts with an outer-shell electron
- The photon is deflected in a new direction with reduced energy
- This scattered photon travels in an unpredictable direction and may reach the image receptor
- It carries no useful image information but adds a uniform fog that **reduces contrast**

## Factors Affecting Scatter Production

| Factor | Effect on Scatter |
|---|---|
| kVp | Higher kVp → more Compton scatter |
| Field size | Larger field → more tissue irradiated → more scatter |
| Patient/part thickness | Thicker → more scatter |
| Tissue type | Soft tissue produces more scatter than bone |

## Methods of Scatter Control

### 1. Collimation (Beam Restriction)
Limiting the X-ray beam to the area of clinical interest:
- Reduces the volume of tissue irradiated
- Directly reduces scatter reaching the detector
- **Most effective** and simplest method
- Also reduces patient dose

**Types of beam restrictors**:
- Aperture diaphragms (fixed openings)
- Cones and cylinders
- Adjustable light-beam diaphragms (most common)

### 2. Anti-Scatter Grids
Placed between the patient and image receptor to absorb scattered radiation:

**Grid construction**:
- Alternating lead strips and interspacing material (aluminium or fibre)
- Lead strips absorb angled (scattered) photons
- Primary beam passes between strips

**Grid parameters**:

| Parameter | Description |
|---|---|
| Grid ratio | Height of lead strips ÷ gap width (e.g., 8:1, 12:1) |
| Grid frequency | Number of lead strips per cm (typically 25–50/cm) |
| Bucky factor | Ratio of incident to transmitted radiation (3–5×) |

**Grid types**:
- **Parallel grid**: Lead strips parallel — used for short SID
- **Focused grid**: Lead strips angled toward focal point — must be used at correct SID and centred
- **Moving grid (Bucky)**: Oscillates during exposure to blur grid lines

**Trade-off**: Grids absorb some primary radiation → require increased mAs (increased patient dose)

### 3. Air Gap Technique
Increasing the distance between patient and image receptor:
- Scattered photons travel at angles and miss the receptor
- Effective alternative to grids, especially in angiography
- **Disadvantage**: Increases magnification

### 4. Compression
Physically reducing tissue thickness:
- Less tissue → less scatter produced
- Also reduces patient dose and improves sharpness
- Used routinely in **mammography**

### 5. kVp Selection
Lower kVp reduces the proportion of Compton scatter relative to photoelectric interactions:
- Improves subject contrast
- Increases patient dose (lower penetration)
- Balanced against clinical requirements

## Scatter and Digital Radiography

Digital systems can compensate for some contrast loss via post-processing, but:
- Scatter still degrades SNR and contrast
- Grid use remains important in digital radiography
- Exposure index must account for increased mAs when using grids

## Summary

| Method | Mechanism | Primary Benefit |
|---|---|---|
| Collimation | Reduce irradiated volume | Less scatter produced |
| Grid | Absorb scattered photons | Less scatter reaches detector |
| Air gap | Scattered photons miss detector | Less scatter reaches detector |
| Compression | Reduce tissue thickness | Less scatter produced |
| Lower kVp | More photoelectric, less Compton | Less scatter produced |
