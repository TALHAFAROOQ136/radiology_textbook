---
id: chapter-04-image-quality
title: "Chapter 4: Digital Radiography and Imaging"
sidebar_label: "Chapter 4: Digital Radiography and Imaging"
---

# The Digital Radiographic Image

Image quality in radiology is determined by several interrelated factors that affect how accurately an image represents the underlying anatomy and pathology.

## Key Parameters of Image Quality

### 1. Spatial Resolution
The ability to distinguish two closely spaced objects as separate.

- **Measured by**: Line pairs per millimeter (lp/mm) or Modulation Transfer Function (MTF)
- **Affected by**: Focal spot size, detector pixel size, motion, magnification

| Modality | Typical Resolution |
|---|---|
| Screen-film radiography | 5–10 lp/mm |
| Digital radiography | 2.5–5 lp/mm |
| Mammography | 10–20 lp/mm |
| CT | 0.5–1 lp/mm |
| MRI | 1–2 lp/mm |

### 2. Contrast Resolution
The ability to distinguish between tissues with similar attenuation/signal values.

- **Subject contrast**: Differences in attenuation between tissues
- **Image contrast**: Affected by kVp, scatter, windowing
- **Contrast-to-noise ratio (CNR)**: Higher CNR → better lesion detection

**Factors improving contrast**:
- Lower kVp (more photoelectric effect)
- Scatter reduction (grids, collimation)
- Contrast agents (iodine, barium, gadolinium)

### 3. Noise
Random fluctuations in the image signal that reduce diagnostic quality.

**Types of noise**:
- **Quantum noise** (quantum mottle): Due to statistical variation in photon numbers; dominant in radiography
- **Electronic noise**: From detector and amplifier circuits
- **Structured noise**: Artifacts (grid lines, ring artifacts in CT)

**Signal-to-Noise Ratio (SNR)**:
- ↑ mAs → ↑ photons → ↑ SNR → ↓ noise
- ↑ detector efficiency → ↑ SNR

### 4. Artifacts
Features in the image not present in the patient:

| Artifact | Cause | Modality |
|---|---|---|
| Motion blur | Patient movement | All |
| Ring artifact | Faulty detector element | CT |
| Metal artifact | High attenuation of metal | CT, MRI |
| Aliasing | Undersampling | MRI, CT |
| Ghosting | Respiratory/cardiac motion | MRI |
| Quantum mottle | Low mAs | Radiography |

## Dose–Quality Trade-offs

Image quality and radiation dose are directly linked:

- ↑ mAs → ↑ dose → ↑ SNR (less noise)
- ↓ mAs → ↓ dose → ↓ SNR (more noise)

**ALARA principle** (As Low As Reasonably Achievable):
Optimize image quality at the minimum necessary dose.

## Grids

Anti-scatter grids improve contrast by absorbing scattered radiation:

- **Grid ratio**: Height of lead strips ÷ gap width (higher ratio = more scatter cleanup)
- **Trade-off**: Requires increased mAs to compensate for absorbed primary radiation
- **Bucky factor**: Ratio of incident to transmitted radiation (typically 3–5×)

## Quality Assurance (QA)

Regular testing ensures consistent image quality:

- Spatial resolution phantoms
- Contrast-detail phantoms
- Dose measurements (DAP meters, ionization chambers)
- ACR/AAPM accreditation standards
