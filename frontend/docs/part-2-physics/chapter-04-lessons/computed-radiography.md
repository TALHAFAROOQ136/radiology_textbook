---
id: computed-radiography
title: "Computed Radiography (CR)"
sidebar_label: "Computed Radiography (CR)"
---

# Computed Radiography

Computed Radiography (CR) was the first widely adopted digital radiography technology, bridging the transition from screen-film to fully digital imaging. It uses photostimulable phosphor (PSP) imaging plates as the image receptor.

## How CR Works

### Step 1: Exposure
- A PSP imaging plate inside a standard cassette is exposed to X-rays
- X-ray energy is stored in the phosphor as a **latent (invisible) image**
- The plate can be used like a conventional film cassette in existing X-ray equipment

### Step 2: Readout
- Cassette is fed into a **CR reader (laser scanner)**
- A focused laser beam scans the plate
- Stored energy is released as **visible blue-violet light** (photostimulated luminescence — PSL)
- Light is collected by a photomultiplier tube and converted to an electrical signal

### Step 3: Digitisation
- Analogue electrical signal converted to digital data by an ADC (analogue-to-digital converter)
- Digital image sent to PACS or workstation

### Step 4: Plate Erasure
- Plate exposed to bright white light to erase residual image
- Plate is reusable (thousands of cycles)

## Photostimulable Phosphor (PSP) Plates

**Material**: Barium fluorohalide doped with europium (BaFX:Eu²⁺, where X = Br, Cl, or I)

**Properties**:
- Wide exposure latitude (much wider than screen-film)
- Linear response over a large dynamic range
- Sensitive to scatter and background radiation — must be used promptly after exposure
- Fading of latent image occurs over time (read within 8 hours)

## CR Image Characteristics

### Spatial Resolution
- Limited by laser spot size and phosphor layer thickness
- Typical resolution: **2.5–5 lp/mm**
- Lower than screen-film for fine-detail applications

### Exposure Latitude
- Much wider than screen-film
- Allows acceptable images over a wide range of exposures
- Risk of **dose creep**: technologists may use higher doses unnecessarily because images look acceptable

### Noise
- Quantum noise dominant at low mAs
- Structured noise from phosphor granularity

## Exposure Index

CR systems provide an **exposure index (EI)** to indicate the radiation level received by the plate:
- Each manufacturer uses a different scale (S-number, EI, lgM)
- Technologist must monitor EI to ensure appropriate dose

## Advantages and Limitations

| Aspect | CR |
|---|---|
| Retrofit | Uses existing X-ray rooms and cassettes |
| Cost | Lower than DR initially |
| Workflow | Slower (cassette transport, reading time) |
| Resolution | Lower than DR flat panels |
| Dynamic range | Wide |
| Dose efficiency | Less efficient than DR |

## CR vs. Screen-Film

| Feature | Screen-Film | CR |
|---|---|---|
| Receptor | Film + screens | PSP plate |
| Processing | Chemical | Laser scanning |
| Latitude | Narrow | Wide |
| Retake rate | Higher | Lower |
| Storage | Physical film | Digital (PACS) |
| Reusability | No | Yes (plate) |

## Quality Control for CR

- Regular cleaning of imaging plates (dust → artefacts)
- Check for plate damage (scratches → line artefacts)
- Erasure verification (ghost images from previous exposures)
- Laser scanner calibration
- Exposure index monitoring
