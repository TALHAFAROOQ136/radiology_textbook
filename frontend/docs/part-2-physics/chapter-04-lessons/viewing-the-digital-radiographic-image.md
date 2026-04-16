---
id: viewing-the-digital-radiographic-image
title: "Viewing Digital Radiographic Images"
sidebar_label: "Viewing Digital Radiographic Images"
---

# Viewing the Digital Radiographic Image

The display and viewing conditions for digital radiographic images significantly affect diagnostic accuracy. Unlike film viewed on a lightbox, digital images are displayed on electronic monitors and can be manipulated interactively.

## Display Monitors

### Types of Medical Displays

| Type | Resolution | Primary Use |
|---|---|---|
| General purpose (colour) | 1–2 MP | Clinical review, ward viewing |
| Diagnostic greyscale | 2 MP | General radiography reporting |
| High-resolution diagnostic | 3–5 MP | Mammography, fine-detail imaging |

**1 MP = 1 megapixel = 1,024 × 1,024 pixels**

### Monitor Specifications

**Luminance**:
- Maximum luminance: general diagnostic monitors — 400–500 cd/m²
- Mammography monitors: minimum 600 cd/m²
- Higher luminance → better visibility of fine detail

**Contrast ratio**:
- Ratio of maximum to minimum luminance
- Higher ratio → better greyscale discrimination

**DICOM GSDF (Greyscale Standard Display Function)**:
- Standardises the relationship between digital driving level and displayed luminance
- Ensures consistent appearance across different monitors and viewing environments
- Calibration required to maintain DICOM GSDF compliance

## Viewing Conditions

### Ambient Lighting
- Bright ambient light reduces apparent contrast on monitor
- Reporting room: low ambient light (20–40 lux recommended)
- Avoid direct reflections on monitor surface
- Anti-glare screen coatings help in uncontrolled environments

### Viewing Distance
- Optimal viewing distance: approximately 50–70 cm for most monitors
- Closer viewing may reveal noise; distant viewing may miss fine detail

## Image Manipulation Tools

### Window Width (WW) and Window Level (WL)
The primary tools for adjusting image display:

- **Window Level (WL)**: Centre of the displayed greyscale range (analogous to brightness)
- **Window Width (WW)**: Range of values displayed (analogous to contrast)

**Effect on image appearance**:
- Narrow WW → high contrast (few grey shades, sharp black-and-white differentiation)
- Wide WW → low contrast (many grey shades, subtle differences visible)
- Adjusting WL changes which tissue densities are optimally displayed

**Common window settings**:

| Application | WL | WW |
|---|---|---|
| Soft tissue (chest) | +40 | 400 |
| Lung | −600 | 1500 |
| Bone | +400 | 2000 |
| Brain | +35 | 80 |
| Liver | +60 | 160 |

### Zoom and Pan
- Magnify regions of interest without loss of original data
- Pan to navigate across a magnified image

### Annotation and Measurements
- Linear measurements (distances, angles)
- Area and density measurements (ROI tools)
- Annotations for reporting and communication

### Image Orientation
- Flip, rotate, and mirror functions
- Correct orientation verified against patient markers (R/L markers)

## Soft-Copy Reporting

Reading images on a monitor rather than printed film:

**Advantages**:
- Interactive windowing reveals information not visible on a single film print
- Multiple series/priors viewed simultaneously
- Measurements and annotations embedded in report
- Remote access (teleradiology)

**Requirements for primary diagnosis**:
- Calibrated diagnostic-grade monitor
- Appropriate viewing conditions
- DICOM GSDF compliance
- Regular QC (luminance, uniformity, resolution checks)

## Monitor Quality Control

Regular testing per AAPM TG-18 or manufacturer guidelines:

| Test | Frequency | Purpose |
|---|---|---|
| Luminance (max and min) | Monthly | Ensure adequate brightness and contrast |
| DICOM GSDF calibration | Quarterly | Consistent greyscale response |
| Spatial resolution | Annually | Detect pixel failures |
| Uniformity | Monthly | Identify screen areas of uneven brightness |
| Artefact check | Daily | Identify dead pixels, stuck pixels |

## Printed Images

When hard-copy prints are required (e.g., patient referrals):
- Laser imagers produce high-quality film prints from digital data
- Dry laser imagers: no wet chemical processing
- Must be calibrated to DICOM GSDF
- Not suitable for primary diagnosis (inferior to soft-copy viewing)
