---
id: digital-radiography
title: "Digital Radiography (DR)"
sidebar_label: "Digital Radiography (DR)"
---

# Digital Radiography

Digital Radiography (DR) uses flat-panel detectors (FPDs) to capture X-ray images directly and electronically, without the need for cassettes or processing. DR systems provide immediate image display, superior image quality, and greater dose efficiency compared to CR.

## Types of DR Detectors

### 1. Indirect Conversion DR
X-rays → Light → Electrical signal

**Process**:
1. Scintillator layer (e.g., caesium iodide, CsI:Tl or gadolinium oxysulphide, Gd₂O₂S:Tb) converts X-rays to visible light
2. Photodiode array (amorphous silicon, a-Si) converts light to electrical charge
3. Thin-film transistor (TFT) array reads out the charge
4. Signal digitised to form image

**Advantages of CsI**:
- Needle-shaped crystals channel light, reducing spread
- Higher spatial resolution than powder phosphors
- Higher X-ray absorption efficiency

### 2. Direct Conversion DR
X-rays → Electrical signal (no intermediate light step)

**Process**:
1. Photoconductor layer (amorphous selenium, a-Se) absorbs X-rays
2. Applied electric field drives liberated charges directly to collection electrodes
3. TFT array reads out the charge

**Advantages**:
- No light diffusion → sharper images (higher MTF)
- Better spatial resolution than indirect conversion
- Used in mammography DR systems

## Flat-Panel Detector Construction

| Layer | Material | Function |
|---|---|---|
| Protective layer | Carbon fibre or aluminium | Physical protection |
| Conversion layer | CsI (indirect) or a-Se (direct) | X-ray to signal conversion |
| Active matrix array | a-Si TFT | Charge storage and readout |
| Readout electronics | ASIC chips | Signal amplification and digitisation |

## Key Performance Parameters

### Detective Quantum Efficiency (DQE)
- Measure of how efficiently the detector converts incident X-ray signal to image signal
- Higher DQE → better image quality at lower dose
- DR flat panels: DQE ~60–80% (much higher than CR ~20–40%)

### Spatial Resolution
- Determined by pixel pitch (spacing between detector elements)
- Typical pixel pitch: 100–200 µm
- Effective resolution: 2.5–5 lp/mm (general DR), up to 10 lp/mm (mammography DR)

### Dynamic Range
- DR systems have very wide dynamic range
- 14-bit digitisation → 16,384 grey levels

## DR Workflow

1. Patient positioned; exposure made
2. Image appears on display within **seconds** (2–5 sec)
3. Radiographer reviews image at workstation
4. Image automatically sent to PACS
5. No cassette handling or processing delays

## Wireless DR Detectors

Modern systems include portable wireless flat-panel detectors:
- Battery-powered, Wi-Fi enabled
- Used in ward/ICU portable radiography
- Same image quality as fixed systems
- Eliminates need for CR cassettes in portable work

## Advantages of DR over CR

| Feature | CR | DR |
|---|---|---|
| Image display time | 60–90 seconds | 2–5 seconds |
| DQE | ~20–40% | ~60–80% |
| Workflow | Cassette-based | Immediate |
| Dose efficiency | Moderate | High |
| Spatial resolution | 2.5–5 lp/mm | 2.5–5 lp/mm |
| Artefacts | Plate scratches, ghost images | Electronic noise, lag |
| Maintenance | Plate cleaning, laser service | Detector calibration |

## DR Artefacts

| Artefact | Cause |
|---|---|
| Dead pixels | Faulty detector elements |
| Lag (ghosting) | Incomplete charge clearing between exposures |
| Grid cut-off | Misaligned anti-scatter grid |
| Detector drop-out | Electronic failure in readout circuit |

## Quality Control for DR

- **Flat-field uniformity**: Check for dead pixels and sensitivity variations
- **Spatial resolution**: Bar pattern test tools
- **Exposure index calibration**: Ensure EI accurately reflects detector dose
- **Artefact evaluation**: Regular phantom imaging
- **Ghosting assessment**: Check for residual images
