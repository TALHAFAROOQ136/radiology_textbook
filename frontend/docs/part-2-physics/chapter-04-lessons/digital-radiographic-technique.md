---
id: digital-radiographic-technique
title: "Digital Radiographic Technique"
sidebar_label: "Digital Radiographic Technique"
---

# Digital Radiographic Technique

Digital radiographic technique involves the selection of exposure factors and system settings to produce optimal diagnostic images while minimising patient dose. Digital systems offer greater latitude than screen-film but require careful technique to avoid dose creep and maintain image quality.

## Exposure Factors in Digital Radiography

### kVp Selection
- Determines beam penetration and subject contrast
- Digital post-processing can adjust displayed contrast, but **subject contrast is still set by kVp**
- Higher kVp generally preferred in digital radiography:
  - Reduces patient dose
  - Increases exposure latitude
  - Contrast adjusted in post-processing

**Recommended kVp ranges (digital)**:

| Body Part | Recommended kVp |
|---|---|
| Extremities | 55–70 kVp |
| Chest (PA) | 110–125 kVp |
| Abdomen | 75–85 kVp |
| Lumbar spine | 80–90 kVp |
| Pelvis | 75–85 kVp |

### mAs Selection
- Controls detector dose (signal level)
- Must be sufficient to achieve acceptable SNR without excessive dose
- Monitored via the **Exposure Index (EI)**

## Exposure Index (EI)

The EI is a numeric indicator of the radiation dose received by the digital detector:

| Manufacturer | EI Scale | Target Range |
|---|---|---|
| Fuji (CR) | S-number | 150–250 (lower = more dose) |
| Carestream | EI | ~200 (higher = more dose) |
| IEC standard | EI | 100–1600 |

**IEC 62494-1 standard**:
- **Target EI**: Recommended dose for a given exam
- **Deviation Index (DI)**: How far actual EI is from target
  - DI = 0: ideal
  - DI = +1: ~26% above target dose
  - DI = −1: ~20% below target dose
  - DI &gt; +3: significantly overexposed — investigate

## Dose Creep

A major concern in digital radiography:
- Wide latitude means overexposed images still look acceptable
- Technologists may gradually increase dose without realising it
- **Prevention**: Regular EI monitoring, technique chart compliance, dose audits

## Automatic Exposure Control (AEC) with Digital Systems

- AEC terminates exposure when detector receives sufficient signal
- Must be calibrated for digital detectors (different sensitivity than screen-film)
- Backup timer prevents excessive exposure if AEC fails

## Post-Processing

Digital images undergo automatic post-processing before display:

### Histogram Analysis
- System analyses pixel value distribution
- Identifies useful exposure range and sets display window automatically

### Edge Enhancement
- Sharpens boundaries between structures
- Applied selectively to avoid noise amplification

### Noise Reduction
- Smoothing algorithms reduce quantum noise
- Must be balanced against loss of fine detail

### Rescaling
- Ensures consistent display brightness regardless of exposure level
- Can mask overexposure to patient

## Technique Charts for Digital Radiography

Should specify:
- kVp for each projection
- mAs or AEC cell selection
- Target EI and acceptable DI range
- SID
- Grid use (ratio and type)
- Collimation guidelines

## Paediatric Technique Considerations

- Use lowest acceptable dose (radiosensitive population)
- Immobilisation to reduce motion blur (avoid repeat exposures)
- Gonadal shielding where appropriate
- Weight-based or age-based technique charts
- Consider dose reduction algorithms specific to paediatric settings

## Common Technique Errors in Digital Radiography

| Error | Indicator | Correction |
|---|---|---|
| Overexposure | EI/DI too high | Reduce mAs |
| Underexposure | EI/DI too low; noisy image | Increase mAs |
| Incorrect AEC cell | Wrong anatomy exposed | Reposition or select correct cell |
| Field size too large | Excessive scatter | Collimate to area of interest |
| Motion blur | Unsharp image | Shorten exposure time |
