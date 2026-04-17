---
id: computed-radiography
title: "Computed Radiography (CR)"
sidebar_label: "Computed Radiography (CR)"
---

# Computed Radiography (CR)

<div className="book-objectives">

**Learning Objectives**

By the end of this chapter, the student should be able to:

1. Describe the historical development of computed radiography and its role in the transition from screen-film to digital imaging
2. Explain the photostimulated luminescence (PSL) mechanism at the atomic level, including the energy storage and readout processes
3. Describe the chemical composition and physical structure of photostimulable phosphor (PSP) imaging plates
4. Outline the four stages of CR image acquisition: exposure, readout, digitisation, and erasure
5. Explain the construction and function of a CR reader, including the laser scanning mechanism and light detection
6. Define the exposure index (EI) and explain how it is used to monitor dose in clinical practice
7. Compare CR image quality with screen-film in terms of spatial resolution, contrast, dynamic range, DQE, and noise
8. Identify the artefacts unique to CR systems and explain their physical causes
9. Describe the quality control programme for CR systems, including tests and acceptance criteria
10. Compare CR and flat-panel DR in terms of workflow, dose efficiency, and image quality
11. Explain the concept of dose creep and its clinical significance

</div>

---

## 1. Historical Context and Clinical Significance

Computed radiography (CR) was the first commercially viable digital radiography technology, introduced by Fujifilm in Japan in 1983 under the trade name FCR (Fuji Computed Radiography). It represented the most significant advance in plain radiography since the introduction of intensifying screens in the late nineteenth century.

<div className="book-definition">

**Computed Radiography (CR)**: A digital radiographic imaging technology that uses a photostimulable phosphor (PSP) imaging plate as the X-ray detector. The plate stores incident X-ray energy as a latent image in excited electron states within the phosphor lattice. The latent image is subsequently read out by a laser scanner, converted to a digital signal, and processed to produce a diagnostic image.

</div>

Before CR, every diagnostic radiograph required chemical film processing, physical film storage, and precise exposure technique to remain within the narrow dynamic range of screen-film. CR removed each of these constraints simultaneously:

- **Wide dynamic range**: Images remained diagnostically acceptable over a five- to tenfold range of exposures
- **Cassette compatibility**: PSP plates fit into standard radiographic cassettes, allowing adoption without equipment replacement
- **Digital archiving**: Images stored on PACS (Picture Archiving and Communication System) eliminated film libraries
- **Post-processing**: Brightness, contrast, and edge enhancement could be adjusted after acquisition

CR dominated digital radiography from the late 1980s to the early 2000s, when flat-panel direct digital radiography (DR) began to displace it. However, CR remains in widespread use globally due to its lower capital cost and retrofittable design.

<div className="book-keypoint">

CR was a transformative technology not because it produced better images than screen-film in every parameter — it did not — but because it decoupled **image acquisition** from **image display and storage**. The same exposure could produce a range of acceptable images through post-processing, fundamentally changing radiographic technique philosophy.

</div>

---

## 2. Photostimulable Phosphor: Chemistry and Physics

### 2.1 Material Composition

The PSP imaging plate is the defining component of CR technology. The phosphor material used in all commercial CR systems is:

<div className="book-definition">

**Barium fluorohalide doped with europium**: BaFX:Eu²⁺, where X represents a halide ion — predominantly bromide (Br⁻), chloride (Cl⁻), or iodide (I⁻). The most common composition is **BaFBr:Eu²⁺** (barium fluorobromide with divalent europium activator), though modern plates often use mixed halide formulations (BaFBr₀.₈₅I₀.₁₅:Eu²⁺) to optimise both X-ray absorption and luminescence efficiency.

</div>

The choice of this material is governed by several physical requirements:

| Property | Requirement | How BaFBr:Eu²⁺ Meets It |
|---|---|---|
| **X-ray absorption** | High absorption in diagnostic range (20–100 keV) | Barium K-edge at 37.4 keV — ideal for 40–80 keV X-rays |
| **Energy storage** | Efficient trapping of excited electrons | F-centres and halide vacancy defects provide stable traps |
| **Stimulation wavelength** | Accessible by practical laser sources | PSL stimulated at 600–700 nm (red He-Ne or semiconductor laser) |
| **Emission wavelength** | Distinguishable from stimulating laser** | Emits blue-violet light at 390–400 nm (Eu²⁺ emission) |
| **Reusability** | Complete erasure and restoration of baseline** | Bright white light efficiently empties all traps |
| **Stability** | Latent image stable for ≥8 hours | Traps are deep enough to retain electrons at room temperature |

### 2.2 The F-Centre Model: Energy Storage

The mechanism by which PSP plates store X-ray energy is based on **colour centres** (F-centres — from the German *Farbzentrum*, colour centre) in the crystal lattice.

**Structure of BaFBr crystal**:

```
        Ba²⁺  F⁻   Ba²⁺  F⁻   Ba²⁺
          │    │     │    │     │
        Br⁻  Ba²⁺  Br⁻  Ba²⁺  Br⁻
          │    │     │    │     │
        Ba²⁺  F⁻   [VBr]  F⁻  Ba²⁺  ← Halide vacancy (F-centre trap)
          │    │     │    │     │
        Br⁻  Ba²⁺  Br⁻  Ba²⁺  Br⁻
```

A **halide vacancy** (V_Br) acts as a positive charge site that can trap an electron. This trapped electron at a halide vacancy constitutes an **F-centre** — the fundamental storage unit of the latent image.

**Role of europium dopant**:

The Eu²⁺ ions substituted into Ba²⁺ sites serve a dual function:
1. **Efficient X-ray energy absorption**: Eu²⁺ absorbs a portion of the X-ray photon energy
2. **Luminescence centre**: Upon stimulation, Eu²⁺ transitions (Eu²⁺ → Eu³⁺ + e⁻ → recapture → emission) produce the characteristic 390–400 nm blue-violet photostimulated luminescence

### 2.3 Energy Storage Process (Exposure Phase)

When the PSP plate is irradiated with X-rays, the following sequence occurs at the atomic level:

**Step 1 — X-ray absorption**:
- X-ray photon undergoes **photoelectric absorption** in the BaFBr crystal
- A barium or fluoride inner-shell electron is ejected with kinetic energy (Auger electrons and characteristic radiation also produced)
- Multiple secondary electron-hole pairs are created as the primary electron loses energy through the crystal

**Step 2 — Electron-hole pair production**:
- Each 80 keV X-ray photon absorbed generates approximately **8,000–10,000 electron-hole pairs**
- Conduction band electrons migrate freely through the crystal lattice
- Valence band holes migrate (more slowly) toward trapping sites

**Step 3 — Electron trapping at F-centres**:
- Conduction band electrons are trapped at **halide vacancies (V_Br)** to form F-centres
- Hole trapping at Eu²⁺ sites creates Eu³⁺: **Eu²⁺ + hole → Eu³⁺**
- The number of F-centres formed is proportional to the absorbed X-ray dose

**Step 4 — Latent image formation**:
- The spatial distribution of F-centres across the imaging plate constitutes the **latent image**
- F-centres are metastable at room temperature; the stored energy persists for hours (though not indefinitely — see Section 4.4)

<div className="book-keypoint">

The latent image in CR is a spatial map of **electron traps (F-centres)** within the phosphor lattice. Unlike film's latent image (silver atom clusters), the CR latent image is invisible, entirely electronic in nature, and can be completely erased by optical stimulation. This is what makes CR plates reusable.

</div>

---

## 3. PSP Imaging Plate Construction

### 3.1 Plate Layers

The PSP imaging plate is a multi-layered structure engineered for both imaging performance and physical durability:

```
┌──────────────────────────────────────────────┐
│  Protective overcoat (polyethylene film)     │  ~5–10 µm
│  (prevents physical damage, allows cleaning) │
├──────────────────────────────────────────────┤
│  Phosphor layer (BaFBr:Eu²⁺ in binder)      │  ~150–300 µm
│  (X-ray detection and image storage)         │
├──────────────────────────────────────────────┤
│  Reflective layer (TiO₂ or BaSO₄)           │  ~20 µm
│  (reflects PSL toward photomultiplier)       │
├──────────────────────────────────────────────┤
│  Conductive layer (anti-static)              │  ~1–2 µm
├──────────────────────────────────────────────┤
│  Support base (polyethylene terephthalate)   │  ~250–350 µm
│  or aluminium substrate                      │
├──────────────────────────────────────────────┤
│  Light-absorbing backing (anti-halation)     │  ~10–20 µm
└──────────────────────────────────────────────┘
```

**Phosphor layer design considerations**:

| Parameter | Thicker Layer | Thinner Layer |
|---|---|---|
| **X-ray sensitivity** | Higher (more absorption) | Lower |
| **Spatial resolution** | Lower (more lateral spread of PSL) | Higher |
| **DQE at low frequencies** | Higher | Lower |
| **Typical application** | General radiography | High-resolution applications |

### 3.2 Needle-Crystal (Structured) Phosphor Technology

Traditional PSP plates use a **granular phosphor** — randomly oriented BaFBr crystals embedded in a polymer binder. Light produced during laser stimulation scatters in all directions, limiting spatial resolution.

Advanced CR plates use **needle-crystal (columnar)** phosphor technology, in which:

- BaFBr is grown as **columnar (needle-shaped) crystals** oriented perpendicular to the plate surface
- The columns act as light guides, channelling PSL preferentially toward the photomultiplier tube
- Lateral light scatter is substantially reduced

<div className="book-important">

**Needle Phosphor vs Granular Phosphor**:

| Property | Granular PSP | Needle (Columnar) PSP |
|---|---|---|
| Resolution | 2.5–4 lp/mm | 4–7 lp/mm |
| Sensitivity | Higher | Comparable or higher |
| Thickness required | Thicker for same DQE | Thinner (more efficient light guidance) |
| Examples | Most conventional CR plates | Agfa MD-30 Needle technology |

Needle phosphor technology substantially narrowed the image quality gap between CR and DR flat-panel detectors, allowing CR to compete with DR in detail-sensitive applications.

</div>

---

## 4. The CR Image Acquisition Process

CR image acquisition proceeds through four discrete, sequential stages:

### 4.1 Stage 1: Exposure

The PSP plate is loaded into a **rigid cassette** visually identical to a conventional screen-film cassette:

- The **front (X-ray tube side)** of the cassette is made from carbon fibre or aluminium (low X-ray attenuation)
- The **back** contains light-shielding layers to prevent fogging from ambient light
- The cassette is placed under the patient or in the Bucky tray exactly as a film cassette would be
- X-rays transmitted through the patient expose the PSP plate

**Key advantage**: CR cassettes are directly interchangeable with screen-film cassettes. No modification to the X-ray room, generator, or Bucky is required — a critical factor in widespread CR adoption.

**During exposure**:
- X-ray photons absorbed by the PSP phosphor layer create F-centres (as described in Section 2.3)
- The number of F-centres per unit area is proportional to the local X-ray intensity
- The spatial distribution of F-centres encodes the radiographic image

### 4.2 Stage 2: Readout (Laser Scanning)

The cassette is fed into a **CR reader** (also called a CR scanner or digitiser). The reader extracts the latent image by **photostimulated luminescence (PSL)**.

#### 4.2.1 PSL Mechanism: The Readout Physics

When F-centres are illuminated with light of appropriate wavelength (stimulating light, typically 600–700 nm from a red laser), the following occurs:

**Step 1 — Optical stimulation**:
- The laser photon provides energy to the trapped electron in the F-centre
- The electron is promoted from the trap level back into the conduction band: **F-centre + hν(laser) → electron + V_Br (empty)**

**Step 2 — Recombination**:
- The liberated electron migrates through the crystal to a Eu³⁺ site
- **Eu³⁺ + e⁻ → Eu²⁺*** (excited Eu²⁺)

**Step 3 — Luminescence emission**:
- The excited Eu²⁺* undergoes radiative de-excitation, emitting a **blue-violet photon at ~390–400 nm**
- This is the **photostimulated luminescence (PSL) signal**

```
Energy level diagram:

Conduction band ──────────────────────────────────────
                          ↑ laser (600–700 nm)      ↑ electron liberated
F-centre trap  ─ ─ ─ ─ [e⁻]─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─

Valence band   ──────────────────────────────────────

Eu³⁺/Eu²⁺*    ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ [Eu²⁺*]─ ─ ─ ─
                                           ↓ PSL (390–400 nm)
Eu²⁺ ground    ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ [Eu²⁺] ─ ─ ─
```

**Wavelength separation**: The stimulating laser light (600–700 nm, red) and the PSL emission (390–400 nm, blue-violet) are widely separated in wavelength. This separation is essential — it allows optical filters to block the bright laser light and pass only the faint PSL signal to the detector.

<div className="book-keypoint">

The large wavelength difference between the stimulating laser (600–700 nm) and the PSL emission (390–400 nm) is the key optical design feature of CR. Without this separation, the intense laser beam would overwhelm the weak PSL signal, making detection impossible.

</div>

#### 4.2.2 CR Reader Construction

```
                    ┌──────────────────────────────────┐
                    │         CR READER                 │
                    │                                    │
 Cassette ──────────→  Transport rollers                │
 inserted            │       │                          │
                    │   Plate extracted                 │
                    │       │                           │
                    │   ┌───▼────────────────────┐      │
                    │   │    Scanning system      │      │
                    │   │  ┌──────────────────┐  │      │
                    │   │  │  He-Ne laser or  │  │      │
                    │   │  │  diode laser     │  │      │
                    │   │  │  (633–685 nm)    │  │      │
                    │   │  └────────┬─────────┘  │      │
                    │   │          │             │      │
                    │   │  ┌───────▼──────────┐  │      │
                    │   │  │  Galvanometer     │  │      │
                    │   │  │  mirror (scanning │  │      │
                    │   │  │  across plate)    │  │      │
                    │   │  └───────┬───────────┘  │      │
                    │   │          │ laser beam    │      │
                    │   │          ▼               │      │
                    │   │   [PSP plate surface]    │      │
                    │   │          │               │      │
                    │   │          │ PSL (390 nm)  │      │
                    │   │          ▼               │      │
                    │   │  ┌───────────────────┐  │      │
                    │   │  │  Light guide      │  │      │
                    │   │  │  (acrylic rod)    │  │      │
                    │   │  └────────┬──────────┘  │      │
                    │   │          │               │      │
                    │   │  ┌───────▼──────────┐   │      │
                    │   │  │  Optical filter   │   │      │
                    │   │  │  (blocks 600–700  │   │      │
                    │   │  │  nm laser light)  │   │      │
                    │   │  └────────┬──────────┘   │      │
                    │   │          │                │      │
                    │   │  ┌───────▼──────────┐    │      │
                    │   │  │  Photomultiplier  │    │      │
                    │   │  │  tube (PMT)       │    │      │
                    │   │  └────────┬──────────┘    │      │
                    │   └──────────│────────────────┘      │
                    │              │ analogue signal        │
                    │   ┌──────────▼──────────┐            │
                    │   │  ADC (analogue-to-   │            │
                    │   │  digital converter)  │            │
                    │   └──────────┬──────────┘            │
                    │              │ digital image data     │
                    │   ┌──────────▼──────────┐            │
                    │   │  Image processing   │            │
                    │   │  workstation / PACS  │            │
                    │   └─────────────────────┘            │
                    └──────────────────────────────────────┘
```

**Scanning mechanism**:
- A focused laser beam scans the PSP plate in a **raster pattern** (line by line)
- The **fast scan direction** (across the plate width) is controlled by an oscillating galvanometer mirror
- The **slow scan direction** (along the plate length) is controlled by the mechanical transport of the plate through the reader
- Typical scanning speed: 5–15 seconds per plate (faster CR readers; some high-volume systems: 3 seconds)

**Pixel formation**:
- Each position of the laser beam corresponds to one pixel of the digital image
- The PMT signal at each position is sampled by the ADC to produce a pixel value
- **Sampling pitch** (pixel size) is determined by the laser beam diameter and plate transport speed
- Typical pixel pitch: **100–200 µm** (corresponding to 5–2.5 lp/mm theoretical maximum)

### 4.3 Stage 3: Digitisation and Signal Processing

The analogue PMT output is converted to digital data by the ADC:

**Bit depth**:
- Most CR systems use **10-bit or 12-bit ADCs** (1,024 or 4,096 grey levels)
- Some systems: 14-bit (16,384 levels)
- Greater bit depth → finer grey-level discrimination → better contrast resolution in processed images

**Logarithmic amplification**:
- The PSL signal is proportional to exposure (linear response)
- Before digitisation, the signal is typically **logarithmically amplified** to compress the wide dynamic range into the available bit depth
- This mimics the logarithmic nature of the H&D curve and is appropriate for visual perception

**Initial image processing**:

After digitisation, the raw pixel data undergoes several automatic processing steps:

1. **Histogram analysis**: The image histogram is analysed to determine the exposure level and the anatomy imaged
2. **S-number / EI calculation**: The exposure index is computed from the histogram (see Section 6)
3. **Gradation processing (look-up table)**: Pixel values are remapped through a LUT to set the output brightness and contrast appropriate for the anatomy
4. **Frequency processing (unsharp masking / edge enhancement)**: High-frequency detail is amplified to compensate for the relatively low inherent resolution of the PSP

### 4.4 Stage 4: Plate Erasure

After readout, the PSP plate retains a small proportion of residual F-centres (incompletely stimulated traps). These must be removed before the plate is reused:

- The plate passes under a **high-intensity fluorescent or LED light source** (bright white light, broad spectrum)
- White light stimulates all remaining F-centres, releasing the stored electrons
- The plate is restored to its baseline (un-irradiated) state within 30–60 seconds
- **Reusability**: Each PSP plate can typically withstand **10,000–30,000 erase cycles** before degradation (phosphor fatigue, surface wear)

<div className="book-important">

**Latent Image Fading**: The F-centres in PSP are metastable, not permanent. Thermal energy at room temperature causes slow spontaneous de-trapping:

- Significant fading begins within **1–2 hours** of exposure
- Images should be read within **8 hours** of exposure (standard recommendation)
- Fading is **non-uniform**: high-exposure areas fade proportionally more than low-exposure areas, causing loss of contrast in bright regions
- Temperature accelerates fading: plates stored at >25°C should be read within 4 hours
- Plates inadvertently left unread must be erased before re-use; the faded image will otherwise produce a **ghost artefact**

</div>

---

## 5. CR Reader Types

### 5.1 Single-Plate (Batch) Readers

**Design**: One plate at a time is manually inserted; reading is sequential.

**Characteristics**:
- Simple mechanism; lowest cost
- Throughput: 30–60 plates per hour
- Suitable for low-volume departments (GP practices, mobile radiography units)

### 5.2 Multi-Plate Batch Readers

**Design**: Multiple cassettes loaded simultaneously; automated sequential processing.

**Characteristics**:
- Throughput: 60–120 plates per hour
- Used in medium-volume radiology departments
- Longer mechanical path → more opportunities for artefacts from roller damage

### 5.3 Slot-Scan Readers

**Design**: The laser beam scans a narrow slit, and the plate moves continuously through the slit.

**Characteristics**:
- Better scatter rejection (the narrow geometry limits what reaches the detector)
- Higher effective DQE than conventional readers
- Used in some chest CR systems (slot-scan chest radiography)

### 5.4 Dual-Side Reading Systems

In conventional CR, only the front surface of the PSP plate is read by the laser. **Dual-side reading** (used in some Kodak DirectView CR systems) reads PSL from both surfaces:

- Additional PMT reads the PSL transmitted through the plate
- Signal from both detectors is combined
- Results in improved DQE (approximately 20–30% improvement in signal-to-noise ratio)
- Particularly beneficial at low exposure levels (reduces quantum noise)

---

## 6. Exposure Index

### 6.1 Concept and Purpose

Because CR images look acceptable over a wide range of exposures (due to wide dynamic range), radiographers cannot assess dose adequacy by visual image inspection alone. The **exposure index (EI)** provides a numerical measure of the X-ray exposure received by the PSP plate.

<div className="book-definition">

**Exposure Index (EI)**: A numerical value calculated from the image histogram that indicates the average X-ray exposure received by the relevant (anatomy-containing) region of the PSP plate. The EI is used to confirm that the plate received an appropriate dose for the examination performed.

</div>

### 6.2 Historical Manufacturer-Specific Indices

Different manufacturers developed incompatible EI scales, causing confusion in multi-vendor departments:

| Manufacturer | Index Name | Scale | Direction |
|---|---|---|---|
| Fujifilm | S-number (Sensitivity) | 25–10,000 | **Inverse**: higher S = lower dose |
| Agfa | lgM (log mean value) | 1.5–4.5 | Direct: higher lgM = higher dose |
| Kodak | EI (Exposure Index) | 0–3,000 | Direct: higher EI = higher dose |
| Konica | S-value | 25–10,000 | Inverse: higher S = lower dose |

<div className="book-important">

**The Fujifilm S-Number Inverse Relationship**: The Fujifilm S-number is the most widely encountered historical index in the UK and Europe. Critically, it is **inversely proportional to dose**:

- **S-number 200** = optimal/expected dose
- **S-number 100** = twice the expected dose (overexposure)
- **S-number 400** = half the expected dose (underexposure)
- **Normal range**: S 100–400 (site-specific; department protocols specify target S for each projection)

Radiographers must understand this inverse relationship to interpret EI correctly. An S-number twice the expected value does NOT mean double the dose — it means half the dose.

</div>

### 6.3 IEC 62494-1: The Standardised Exposure Index

To resolve manufacturer incompatibility, the International Electrotechnical Commission published **IEC 62494-1 (2008)**, which defines a standardised EI system:

**IEC EI definition**:
- EI is calculated from the median pixel value within the **exposure region of interest (ROI)** of the image, after exclusion of direct-beam pixels
- EI = 100 × (median pixel value) for a calibrated system where EI 400 corresponds to the reference exposure level
- **Target EI**: 200–800 for most general radiographic projections (site-dependent)

**Deviation Index (DI)**:

The IEC standard also introduced the **Deviation Index**, which directly indicates how far the received dose deviates from the target:

```
DI = 10 × log₁₀(EI_delivered / EI_target)
```

| DI Value | Interpretation | Action |
|---|---|---|
| DI = 0 | Exposure exactly at target | Ideal |
| DI = +1 | 26% above target dose | Acceptable; monitor |
| DI = +3 | Twice the target dose | Significant overexposure; review technique |
| DI = −1 | 21% below target dose | Acceptable; monitor |
| DI = −3 | Half the target dose | Significant underexposure; repeat if quality compromised |
| DI > +3 or < −3 | Outside acceptable range | Dose review required; QA action |

### 6.4 Clinical Significance: Dose Creep

<div className="book-important">

**Dose Creep**: A systematic, gradual increase in patient dose that can occur in CR (and DR) departments in the absence of rigorous EI monitoring.

**Mechanism**: Because overexposed CR images appear normal (or even improved — less noise, better contrast), radiographers receive no immediate feedback that excess dose was used. Without EI monitoring and dose audits, the "acceptable" exposure level gradually drifts upward across the department.

**Scale of the problem**: Studies in the early CR era documented mean doses 2–4 times higher than the equivalent screen-film technique. In some departments, dose creep produced individual exposures 10–20 times above the ALARA-compliant level.

**Prevention**:
- Mandatory EI recording for every exposure
- Target EI and acceptable range defined in written protocols for each projection
- Regular dose audits comparing mean EI against national DRLs (Diagnostic Reference Levels)
- Radiographer training on the relationship between EI and dose

</div>

---

## 7. CR Image Quality

### 7.1 Spatial Resolution

CR spatial resolution is limited by three physical factors:

**1. Laser spot size**:
- The focused laser beam has a finite diameter (typically 100–200 µm)
- Smaller spots require higher laser power to maintain adequate PSL signal
- Laser spot size sets the theoretical upper limit on resolution

**2. Phosphor layer light scatter**:
- PSL photons produced deep in the phosphor layer travel through the phosphor before reaching the light guide
- Lateral scatter broadens the effective sampling aperture
- This is the dominant resolution-limiting factor in conventional (granular) PSP

**3. Plate transport jitter**:
- Mechanical vibration during plate transport causes positional uncertainty in the slow-scan direction
- Minor effect in well-maintained readers; significant in worn mechanisms

**Typical CR spatial resolution**:

| Plate Type | Pixel Pitch | Maximum Resolution |
|---|---|---|
| Standard CR (granular) | 200 µm | ~2.5 lp/mm |
| Standard CR (high-resolution mode) | 100 µm | ~4–5 lp/mm |
| Needle phosphor CR | 100 µm | ~5–7 lp/mm |
| Screen-film (general) | — | 5–8 lp/mm |
| Screen-film (mammography detail) | — | 15–20 lp/mm |
| DR flat-panel (CsI) | 100–200 µm | ~3–5 lp/mm |

<div className="book-pearl">

**Why CR Resolution Lags Behind Screen-Film**: The silver halide crystal in screen-film is 0.5–1.5 µm in effective detector element size — much smaller than the 100–200 µm pixel of CR. For applications demanding the finest detail (e.g., fine-structure bone radiography), screen-film retains a genuine resolution advantage over CR. For routine clinical radiography, however, 2.5–5 lp/mm is adequate and the wide dynamic range advantage of CR outweighs this resolution disadvantage.

</div>

### 7.2 Contrast Resolution and Dynamic Range

<div className="book-definition">

**Dynamic Range**: The ratio of the maximum to minimum detectable X-ray exposure. It defines the range of exposures over which the system can produce diagnostically useful images.

| System | Dynamic Range | Approximate Log Decades |
|---|---|---|
| Screen-film | 25:1 – 50:1 | 1.4 – 1.7 |
| CR (granular PSP) | 1,000:1 – 10,000:1 | 3 – 4 |
| CR (needle PSP) | ~10,000:1 | ~4 |
| DR (flat-panel) | 10,000:1 – 100,000:1 | 4 – 5 |

</div>

The wide dynamic range of CR has two important clinical implications:

**1. Exposure latitude**: Images are acceptable over a much wider range of exposures than screen-film, dramatically reducing repeat rates (from 5–10% for screen-film to ~1–2% for CR).

**2. Post-processing capability**: The preserved exposure information across the wide dynamic range can be remapped through display LUTs to optimise brightness and contrast for any region of interest. Lung and mediastinum can be simultaneously visualised on one chest radiograph.

### 7.3 Detective Quantum Efficiency (DQE)

<div className="book-definition">

**Detective Quantum Efficiency (DQE)**: A measure of how efficiently an imaging system converts incident X-ray quanta into useful image signal. DQE = (SNR_out / SNR_in)². A system with DQE = 0.5 uses 50% of the available X-ray information; the rest is wasted as noise.

</div>

**DQE comparison**:

| System | DQE(0) at 70 kVp | Notes |
|---|---|---|
| Screen-film (400 speed) | 20–30% | Limited by film grain and screen light spread |
| CR (granular PSP) | 15–25% | Limited by K-fluorescence re-absorption, phosphor scatter |
| CR (needle PSP) | 25–35% | Improved by reduced light scatter |
| DR (amorphous selenium, direct) | 50–65% | Direct conversion; no light stage |
| DR (CsI/a-Si, indirect) | 40–75% | Structured scintillator reduces light spread |

<div className="book-important">

**CR DQE vs DR DQE**: The lower DQE of CR compared to DR flat-panel detectors is the primary reason CR requires slightly higher patient dose than DR to achieve equivalent image quality. This is not a minor difference — in high-volume imaging (chest radiography, fluoroscopy-guided procedures), switching from CR to DR typically reduces dose by **20–50%** while maintaining image quality.

</div>

### 7.4 Noise in CR Systems

CR images contain noise from three sources:

**1. Quantum noise (quantum mottle)**:
- The dominant noise source
- Arises from statistical fluctuations in X-ray photon absorption (Poisson statistics: σ = √N)
- SNR = √N; increasing dose by 4× doubles SNR (halves relative noise)
- Visible as a granular, random pattern that is more prominent in low-exposure areas

**2. Phosphor structure noise**:
- Spatial variations in phosphor crystal density, size distribution, and coating uniformity
- Creates a fixed-pattern "background" that does not improve with increasing dose
- More visible in high-dose (low-quantum noise) images
- Analogous to screen mottle in screen-film systems

**3. Electronic noise**:
- Amplifier noise in the PMT and preamplifier circuits
- Dark current from the PMT
- ADC quantisation noise
- Generally much smaller than quantum noise at clinical exposure levels; becomes significant only at very low mAs

**Noise power spectrum (NPS)**:
The frequency content of noise is characterised by the NPS. CR systems typically have:
- Low-frequency NPS dominated by phosphor structure noise
- High-frequency NPS dominated by quantum noise and electronic noise
- Frequency processing (edge enhancement) amplifies high-frequency noise as well as detail

---

## 8. CR Artefacts

### 8.1 Classification of CR Artefacts

CR artefacts can be broadly classified by origin:

#### 8.1.1 Plate-Related Artefacts

| Artefact | Appearance | Cause | Prevention/Management |
|---|---|---|---|
| **Scratches** | Bright (high-density) or dark linear marks | Physical damage to protective overcoat or phosphor layer | Handle plates gently; retire damaged plates |
| **Dust/debris on plate surface** | Small bright dots | Particulate contamination on plate surface | Clean plates regularly with dry lint-free cloth |
| **Phosphor layer delamination** | Irregular bright patches | Separation of phosphor from substrate | Replace plate |
| **Phosphor fatigue** | Generalised reduced sensitivity | Degradation after many exposure cycles | Monitor sensitivity with QC phantom; replace plates when outside tolerance |
| **Fingerprints** | Fingerprint pattern, usually bright** | Skin oils on plate surface alter surface reflectivity | Handle plates by edges only; avoid touching imaging surface |

#### 8.1.2 Ghost Image Artefacts

<div className="book-definition">

**Ghost Image (Residual Image)**: A faint remnant of a previously acquired image superimposed on the current exposure. It results from incomplete erasure of the previous latent image, or from remanent phosphorescence after erasure.

</div>

**Types of ghost artefacts**:

**1. Erasure ghost**:
- Cause: Incomplete erasure (eraser light intensity too low, eraser lamp failing, plate moving too quickly through eraser)
- Appearance: Very faint previous image visible in background
- Prevention: Regular eraser lamp intensity QC; correct plate transport speed

**2. Exposure ghost (positive ghost)**:
- Cause: Plate exposed to a high-dose field, then erased under low-intensity light; F-centres in very high-dose areas resist standard erasure
- Appearance: Positive shadow of previous high-dose area
- Prevention: Two-stage erasure for high-dose exposures; routine double-erasure for plates used in fluoroscopy

**3. Negative ghost**:
- Cause: Phosphor "depletion" — very high doses temporarily reduce local sensitivity through temporary crystal damage
- Appearance: Reduced sensitivity (darker) region corresponding to previous high-dose exposure
- Recovery: Usually resolves after 24–48 hours (annealing)

#### 8.1.3 Reader-Related Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Roller marks** | Periodic bands perpendicular to scan direction | Dirty, worn, or damaged transport rollers leaving deposits on plate |
| **Banding (scan line artefacts)** | Horizontal or vertical bands of slightly different density | Laser power fluctuation; galvanometer mirror irregularity; PMT gain drift |
| **Pixel drop-out** | Individual black or white pixels | PMT saturation spike; ADC overflow |
| **Laser power variation** | Subtle non-uniformity across image | Laser output fluctuation during scan |
| **Edge deletion artefact** | Missing anatomy at plate edges | Automatic edge removal algorithm incorrectly applied |

#### 8.1.4 Processing-Related Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Histogram analysis error** | Wrong brightness/contrast; anatomy obscured | Algorithm failure to correctly identify relevant anatomy histogram |
| **Collimation field error** | Incorrect image processing; primary beam edges treated as anatomy | Collimation not recognised correctly by processing algorithm |
| **Anode heel effect artefact** | Non-uniform background density across long plates** | Anode heel effect not corrected in flat-field calibration |
| **Over-enhancement artefact** | "Halo" around high-contrast interfaces; over-sharpened edges | Excessive frequency processing (unsharp masking) |

#### 8.1.5 Handling and Environmental Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Radiation fog (background)** | Increased background noise; reduced contrast | Plate stored near X-ray source; scattered radiation exposure before or after clinical use |
| **Light exposure** | Uniform or patchy increased density | Light entry into cassette (failed light seal) |
| **Static electricity** | Branching (tree) or crown discharge pattern | Electrostatic discharge during plate handling in low-humidity environments |
| **Pressure marks** | Localised increased density | Pressure applied to loaded cassette (e.g., heavy items placed on cassette) |
| **Fading artefact** | Reduced contrast in high-exposure areas; image looks "washed out" | Delay between exposure and readout >8 hours |

---

## 9. Image Processing in CR

### 9.1 Automatic Rescaling

The most fundamental processing step in CR is **automatic rescaling** (also called automatic brightness and contrast normalisation):

1. The histogram of pixel values is analysed
2. The relevant exposure histogram (excluding collimation edges, Bucky edges, and direct-beam areas) is identified
3. The median or mean of the relevant histogram is mapped to a standard mid-grey output value
4. The histogram width is mapped to fill the available display range

This step ensures that images appear correctly exposed regardless of whether the plate was over- or underexposed (within the dynamic range limits). It is the mechanism by which CR achieves exposure latitude — but it is also the mechanism that hides dose errors, necessitating EI monitoring.

### 9.2 Gradation Processing

**Gradation processing** (GT processing in Fujifilm terminology) adjusts the tone mapping of the image:

- A LUT maps input pixel values to output display values
- The LUT slope (analogous to gamma in screen-film) controls contrast
- Different LUTs are applied depending on anatomical region (chest, bone, abdomen)
- Parameters: **Rotation amount (GC)**, **Rotation point (GT)**, **Density (GA)**

### 9.3 Frequency Processing

**Frequency processing** (also called unsharp masking, edge enhancement, or frequency enhancement) selectively amplifies high-frequency (fine detail) components:

**Unsharp masking algorithm**:
```
Enhanced image = Original image + k × (Original - Blurred)
                                        └─── "unsharp mask"
```

Where k is the enhancement coefficient. This adds a scaled version of the high-frequency difference (edges, fine detail) back to the original image.

**Parameters**:
- **Frequency rank (RN/RE)**: Controls the spatial frequency range being enhanced (fine vs. coarse features)
- **Enhancement coefficient (RT/RE)**: Controls the strength of enhancement

**Clinical effect**:
- Improves visibility of trabecular bone detail, pulmonary vasculature, calcifications
- Excessive enhancement creates "halo" artefacts and increases apparent noise
- Parameters are body-part specific and must be calibrated for each protocol

### 9.4 Equalization Processing

For examinations where the clinical area has a wide range of tissue densities (e.g., chest with lung and mediastinum), **equalization processing** applies a spatially varying gain:

- Dense areas (mediastinum) receive higher amplification
- Lucent areas (lung) receive lower amplification
- Result: A single image where both regions are optimally displayed simultaneously

---

## 10. Comparison: CR versus Screen-Film

| Property | Screen-Film | Computed Radiography (CR) |
|---|---|---|
| **X-ray detector** | Silver halide emulsion + phosphor screens | Photostimulable phosphor (BaFBr:Eu²⁺) plate |
| **Image recording mechanism** | Photochemical (latent image: Ag clusters) | Physical (F-centres in crystal lattice) |
| **Dynamic range** | 25:1 – 50:1 | 1,000:1 – 10,000:1 |
| **Spatial resolution** | 5–20 lp/mm (anatomy-dependent) | 2.5–7 lp/mm |
| **DQE at zero frequency** | 20–30% | 15–35% |
| **Latitude** | Narrow (exposure-critical) | Wide (exposure-forgiving) |
| **Repeat rate** | 5–10% (exposure errors) | ~1–2% |
| **Image processing** | None after acquisition | Extensive post-processing |
| **Time to image** | 90 seconds (automatic processing) | 30–60 seconds (CR reading) |
| **Dose** | Reference standard | Comparable; risk of dose creep |
| **Image storage** | Physical film | Digital (PACS) |
| **Equipment change required** | None (reference) | Minimal (same rooms; new reader) |
| **Artefacts** | Screen/film/processing artefacts | PSP/laser artefacts (ghosts, banding) |
| **Chemical waste** | Developer, fixer, silver | Minimal (no processing chemicals) |
| **Archive permanence** | Film degradation over decades | Digital permanence (format obsolescence risk) |

---

## 11. Comparison: CR versus Digital Radiography (DR)

<div className="book-definition">

**Digital Radiography (DR)**: A direct or indirect digital X-ray detector in which the image is generated electronically in real time — without the intermediate step of laser scanning a physical plate. DR detectors are fixed in the X-ray table or wall stand (or in a portable detector cassette) and produce an image within seconds of exposure.

</div>

| Property | CR | DR (Flat-Panel) |
|---|---|---|
| **Image acquisition time** | 30–60 seconds (cassette transport + reading) | 3–10 seconds (near-real-time) |
| **Workflow** | Cassette-based; serial; one cassette per exposure | Wireless or wired direct acquisition |
| **DQE** | 15–35% | 40–75% |
| **Dose for equivalent SNR** | ~20–50% more than DR | Reference |
| **Spatial resolution** | 2.5–7 lp/mm | 3–5 lp/mm |
| **Capital cost** | Lower (uses existing rooms) | Higher |
| **Retrofitability** | High (cassette compatible with existing equipment) | Moderate (some generator compatibility required) |
| **Artefact types** | Ghost images, banding, plate damage | Pixel drop-out, lag (afterglow), bad pixel maps |
| **Portability** | High (cassettes portable) | Moderate (portable DR panels available) |
| **Plate wear** | Plates degrade over time | Panel rarely needs replacement |
| **Failure mode** | Single cassette failure (replaceable) | Panel failure = entire system down |
| **Radiation sensitivity check** | EI monitoring mandatory | EI monitoring mandatory |

<div className="book-pearl">

**Why CR Still Has a Role**: Despite lower DQE and slower workflow, CR retains genuine advantages:

1. **Retrofitability**: CR cassettes work in ANY existing X-ray room, including portables and mobile units
2. **Low capital cost**: A single CR reader can service multiple rooms
3. **Portability of the detector**: Cassettes can be taken to ICU, operating theatre, or accident scene
4. **Failure resilience**: If one cassette fails, 49 others remain; a failed DR panel stops the entire room

For this reason, CR is dominant in low-resource settings and for mobile/ward radiography globally, despite being considered technically inferior to DR.

</div>

---

## 12. Quality Control for CR Systems

### 12.1 Quality Control Programme Overview

A comprehensive CR quality control programme monitors:

1. **Detector sensitivity and uniformity** (PSP plate performance)
2. **Spatial resolution** (reader performance)
3. **Contrast** (processing performance)
4. **Artefacts** (plate and reader condition)
5. **Ghost image levels** (erasure completeness)
6. **Exposure index accuracy** (dose monitoring system calibration)

### 12.2 Recommended QC Tests

**Daily Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Visual inspection of all plates | Inspect cleaned plate under bright light before use | No scratches, cracks, contamination |
| Exposure index verification | Expose standard phantom at standard technique; read EI | EI within ±20% of baseline |
| Artefact check | Expose flat-field (without patient) and inspect | No artefacts (bands, marks, ghosts) |

**Weekly Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Sensitivity uniformity | Uniform exposure across large flat-field phantom | ±10% uniformity across plate area |
| Ghost image assessment | 1) High-dose test pattern; 2) Erase; 3) Uniform exposure; 4) Inspect | Ghost image not visible above noise floor |
| Laser scan uniformity | Horizontal flat-field; measure row-by-row density | ≤2% variation between rows |

**Monthly Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Spatial resolution | Expose Leeds test object or line pair phantom | Resolution ≥ minimum specification for plate type |
| Low-contrast resolution | Contrast-detail phantom (e.g., CDRAD) | Score within established baseline |
| EI calibration check | Compare EI with ionisation chamber measurement | EI vs dose relationship within ±25% of baseline |
| Plate cleaning | Full clean of all plates with manufacturer-approved solution | No residual contamination |

**Annual Tests** (or following major service):

| Test | Method | Acceptance Criterion |
|---|---|---|
| Full MTF measurement | Line spread function or bar pattern | MTF10 ≥ specification |
| NPS measurement | Flat-field at multiple exposures | NPS within baseline ±30% |
| DQE measurement | Certified methodology (IEC 62220-1) | DQE(0) ≥ baseline specification |

### 12.3 Plate Management and Retirement Criteria

PSP plates must be retired and replaced when:
- Visible physical damage (cracks, deep scratches, delamination)
- Sensitivity more than 20% below baseline (measured with flat-field uniformity test)
- Ghost image density above defined threshold despite correct erasure procedure
- Artefacts that affect clinical image quality and cannot be attributed to contamination

**Typical plate lifetime**: 5–10 years of clinical use (10,000–30,000 cycles)

### 12.4 Reader Maintenance

- **Laser power**: He-Ne laser power decreases with age (typically 5–15% per year); check regularly; replace laser tube when output falls below specification
- **Optical filter**: Replace if degraded (regular inspection)
- **PMT dark current**: Check for increasing noise floor
- **Transport rollers**: Clean and inspect for wear; replace when surface damage causes roller artefacts

---

## 13. Clinical Applications and Protocol Optimisation

### 13.1 Applications Where CR Performs Well

- **Chest radiography**: Wide dynamic range accommodates simultaneous lung and mediastinal visualisation; portable CR serves ICU patients
- **Skeletal radiography**: Adequate resolution for most routine bone imaging; post-processing enhances trabecular detail
- **Abdominal radiography**: Wide dynamic range handles the density differences of bowel gas, soft tissue, and bone
- **Paediatric radiography**: Wide latitude reduces repeats in difficult-to-position patients; important for dose reduction

### 13.2 Applications Where CR is Suboptimal

- **Mammography**: Resolution inadequate for full-field digital mammography (FFDM) requirements; CR is not used for screening mammography in most guidelines
- **Fluoroscopy**: CR is not applicable (not real-time)
- **High-throughput departments**: Slow cassette workflow vs. DR reduces efficiency in high-volume rooms

### 13.3 Dose Optimisation Principles

| Principle | Action |
|---|---|
| Establish target EI | Define acceptable EI range (±1 DI) for each projection |
| Enforce ALARA | Use minimum mAs consistent with target EI, not minimum acceptable EI |
| Regular dose audits | Compare mean departmental EI against national DRLs quarterly |
| Anti-scatter grid | Use grids as specified; gridless technique permissible for small parts |
| Tight collimation | Reduces scatter, improves contrast, reduces dose |
| kVp optimisation | Higher kVp reduces dose but reduces subject contrast; balance for anatomy |

---

## 14. Advantages and Limitations: Summary Table

| Aspect | CR Advantage | CR Limitation |
|---|---|---|
| **Retrofit** | Uses existing cassettes and rooms | Requires purchase of CR reader(s) |
| **Cost** | Lower capital cost than DR | Higher per-study cost than DR (plate wear, maintenance) |
| **Workflow** | — | Slower than DR (30–60 seconds vs. 3–10 seconds) |
| **Dynamic range** | Far wider than screen-film | Narrower than DR flat-panel |
| **DQE / dose efficiency** | Better than screen-film | Lower than DR (20–50% dose penalty vs. DR) |
| **Spatial resolution** | Adequate for most clinical use | Lower than screen-film; comparable to DR |
| **Portability** | Cassettes portable to any location | DR portable panels increasingly competitive |
| **Post-processing** | Extensive windowing, edge enhancement | Processing artefacts possible |
| **Dose monitoring** | EI provided | EI monitoring mandatory to prevent dose creep |
| **Ghost artefacts** | Rare with correct protocol | Plate damage and incomplete erasure produce ghosts |
| **No darkroom** | Eliminates chemical processing | Reader maintenance required |

---

<div className="book-remember">

**Key Relationships and Facts to Remember**

- PSP phosphor: **BaFBr:Eu²⁺** — barium fluorobromide doped with europium
- Barium K-edge: **37.4 keV** — optimal for diagnostic X-ray range (40–80 kVp)
- Stimulating laser: **600–700 nm** (red); PSL emission: **390–400 nm** (blue-violet)
- PSL intensity is proportional to the **absorbed X-ray dose** at each point
- Latent image must be read within **8 hours** (fading causes contrast loss)
- Fujifilm S-number is **inversely** proportional to dose (higher S = lower dose)
- IEC DI = **10 × log₁₀(EI / EI_target)**; acceptable range ±3 DI units
- CR dynamic range: **1,000:1 – 10,000:1** (vs. screen-film: 25:1 – 50:1)
- CR DQE(0): **15–35%** (vs. DR: 40–75%); CR requires ~20–50% more dose than DR
- CR spatial resolution: **2.5–7 lp/mm** (needle phosphor achieves the higher end)
- Dose creep occurs because overexposed CR images **look acceptable** to the radiographer

</div>

---

<div className="book-summary">

## Chapter Summary

Computed radiography uses **photostimulable phosphor (BaFBr:Eu²⁺) imaging plates** to store and retrieve digital radiographic images. X-ray photons absorbed by the plate create **F-centres** (trapped electrons at halide vacancies) that encode the latent image as a spatial map of electron traps. Readout is achieved by laser-stimulated **photostimulated luminescence (PSL)**: a red laser (600–700 nm) liberates the trapped electrons, which recombine with Eu³⁺ sites to emit blue-violet light (390–400 nm). A PMT detects the PSL, and an ADC converts the signal to digital data. After readout, a bright white light erases all remaining F-centres, restoring the plate for reuse.

**CR's principal clinical advantage** over screen-film is its **wide dynamic range (1,000:1 – 10,000:1)**, which accommodates a broad range of exposures, reduces repeat rates from ~8% to ~1–2%, and permits post-processing (brightness, contrast, edge enhancement). The **retrof ittable cassette design** allowed rapid global adoption without X-ray room replacement.

**CR's principal limitations** relative to DR are: lower DQE (15–35% vs. 40–75%), requiring ~20–50% more dose for equivalent image quality; slower workflow (30–60 seconds for scanning vs. 3–10 seconds for DR); and susceptibility to ghost artefacts, plate ageing, and banding artefacts.

**Dose management** requires EI monitoring for every exposure. The IEC Deviation Index (DI = 10 × log₁₀(EI/EI_target)) provides a standardised metric; a DI outside ±3 requires technique review. Without EI monitoring, **dose creep** — silent, gradual dose escalation invisible to the eye — represents the most significant radiation safety risk in CR departments.

**Quality control** is essential and must address plate condition (sensitivity, uniformity, ghost image level), reader performance (artefacts, laser power, uniformity), and calibration of the EI system against reference dosimetry.

</div>
