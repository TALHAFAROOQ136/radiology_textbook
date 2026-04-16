---
id: chapter-05-image-artifacts-and-quality-control
title: "Chapter 5: Imaging Artifacts and Quality Assurance"
sidebar_label: "Chapter 5: Imaging Artifacts and Quality Assurance"
---

# Image Artifacts and Quality Control

Image artifacts are features that appear in a radiographic image that do not correspond to actual anatomical structures. Recognising and eliminating artifacts is a core competency in radiologic technology. Quality control (QC) ensures consistent, diagnostic-quality imaging.

## What is an Image Artifact?

An artifact is any unwanted feature in a radiographic image caused by:
- Equipment malfunction or poor calibration
- Incorrect technique or positioning
- Patient factors (motion, implants)
- Processing or software errors

Artifacts can **mimic pathology**, **obscure anatomy**, or render an image **non-diagnostic**.

---

## Categories of Artifacts

### 1. Patient-Related Artifacts

| Artifact | Cause | Appearance |
|---|---|---|
| Motion blur | Patient movement during exposure | Unsharp, blurred edges |
| Superimposition | Overlying structures (jewellery, clothing) | Dense opacities over anatomy |
| Implant artifacts | Metal prostheses, pacemakers | Bright white areas, streak artifacts |
| Skin folds | Redundant skin creating air-tissue interface | Linear opacities simulating pneumothorax |

**Prevention**:
- Short exposure times to minimise motion
- Remove radiopaque objects before imaging
- Proper patient preparation and instructions

---

### 2. Exposure and Technique Artifacts

| Artifact | Cause | Appearance |
|---|---|---|
| Underexposure | Insufficient mAs | Noisy, grainy, light image |
| Overexposure | Excessive mAs | Dark image; loss of contrast |
| Grid cut-off | Grid misalignment or wrong SID | Unilateral or bilateral density loss |
| Heel effect | Anode-side intensity drop | Uneven density across image |
| Double exposure | Two exposures on same receptor | Superimposed images |
| Incorrect SID | Wrong source-to-image distance | Magnification error or density error |

---

### 3. Digital System Artifacts (CR and DR)

#### Computed Radiography (CR) Artifacts
| Artifact | Cause |
|---|---|
| Ghost image | Incomplete erasure of previous exposure |
| Scratches / lines | Physical damage to imaging plate |
| Noise / mottle | Low exposure (quantum noise) |
| Plate fog | Background radiation exposure before use |
| Edge enhancement artifacts | Aggressive post-processing algorithm |

#### Digital Radiography (DR) Artifacts
| Artifact | Cause |
|---|---|
| Dead pixels | Faulty detector elements |
| Lag / ghosting | Incomplete charge clearing between exposures |
| Structured noise | Electronic interference |
| Flat-field non-uniformity | Uncorrected sensitivity variation across detector |
| Aliasing | Under-sampling of high-frequency detail |

---

### 4. Processing Artifacts

| Artifact | Cause | Appearance |
|---|---|---|
| Histogram analysis error | Collimation outside detector or anatomy edge | Incorrect brightness/contrast |
| Rescaling error | Incorrect body part selection | Image too dark or too light |
| Compression artifacts | Lossy image compression | Blockiness, loss of fine detail |

---

## Quality Control (QC)

Quality Control is a systematic programme to ensure imaging equipment performs consistently within accepted standards.

### QC vs Quality Assurance (QA)

| Term | Definition |
|---|---|
| Quality Control (QC) | Specific tests performed on equipment |
| Quality Assurance (QA) | Overall programme including QC, policies, training, and audit |

---

## QC Testing Schedule

### Daily Tests
- Artefact evaluation (phantom image)
- Monitor visual check (dead pixels, cleanliness)
- Exposure index check on first clinical images

### Weekly Tests
- Flat-field uniformity
- Ghosting / lag assessment (DR)
- CR plate cleaning and inspection

### Monthly Tests
- Monitor luminance (maximum and minimum)
- Spatial resolution (bar pattern phantom)
- Exposure index accuracy

### Quarterly / Annual Tests
- DICOM GSDF monitor calibration
- Full detector calibration (flat-field and gain)
- Focal spot measurement
- Beam quality (HVL) measurement
- Automatic exposure control (AEC) accuracy
- Collimator accuracy and beam alignment

---

## Reject Analysis

A systematic review of rejected/repeated images:

**Purpose**:
- Identify common causes of poor image quality
- Target training and equipment maintenance
- Reduce unnecessary patient dose

**Acceptable repeat rate**: Generally &lt;5–10% of total examinations

**Common rejection reasons**:
| Reason | Approximate % |
|---|---|
| Positioning error | 30–40% |
| Exposure error | 20–30% |
| Motion blur | 10–20% |
| Artifacts | 10–15% |
| Equipment failure | 5–10% |

---

## Acceptance Testing

Performed on new equipment before clinical use:
- Verifies equipment meets manufacturer and regulatory specifications
- Establishes baseline performance values
- Required before any patient imaging begins

---

## Regulatory and Accreditation Standards

| Organisation | Standard |
|---|---|
| ACR (American College of Radiology) | Accreditation programme with QC requirements |
| AAPM (American Association of Physicists in Medicine) | Technical guidelines (TG reports) |
| IEC | International equipment and exposure index standards |
| Local radiation regulations | Site licence and dose reference levels |

---

## Summary

| Category | Key Action |
|---|---|
| Patient artifacts | Proper preparation, immobilisation, short exposure time |
| Technique artifacts | Correct exposure factors, grid alignment, technique charts |
| Digital artifacts | Regular detector calibration, plate maintenance, EI monitoring |
| Processing artifacts | Correct body part selection, appropriate collimation |
| QC programme | Scheduled testing, reject analysis, documentation |
