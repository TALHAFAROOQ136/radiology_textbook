---
id: digital-radiography
title: "Digital Radiography (DR)"
sidebar_label: "Digital Radiography (DR)"
---

# Digital Radiography (DR)

<div className="book-objectives">

**Learning Objectives**

By the end of this chapter, the student should be able to:

1. Explain the fundamental difference between direct and indirect conversion DR detectors at the physics level
2. Describe the construction and function of a caesium iodide (CsI:Tl) scintillator and explain why needle-crystal geometry improves resolution
3. Explain how amorphous silicon (a-Si) photodiode arrays and thin-film transistor (TFT) matrices function as the readout layer in indirect DR
4. Describe the mechanism of X-ray detection in amorphous selenium (a-Se) direct conversion detectors, including charge generation, drift, and collection
5. Define Detective Quantum Efficiency (DQE), Modulation Transfer Function (MTF), and Noise Power Spectrum (NPS), and explain their clinical significance
6. Compare the image quality parameters of DR, CR, and screen-film in terms of DQE, spatial resolution, dynamic range, and dose efficiency
7. Identify the artefacts specific to DR flat-panel detectors and explain their physical causes and clinical management
8. Describe the quality control programme for DR systems, including flat-field correction, bad pixel mapping, and ghosting assessment
9. Explain the design and clinical applications of wireless portable DR detectors
10. Describe special DR technologies including dual-energy subtraction, tomosynthesis, and slot-scan chest DR
11. Explain how image processing steps (flat-field correction, gain calibration, edge enhancement) are applied in DR

</div>

---

## 1. Historical Context and Clinical Significance

Digital radiography (DR) using flat-panel detectors (FPDs) represents the current state of the art in plain film radiography. It was developed throughout the 1990s and achieved widespread clinical deployment in the early 2000s, progressively displacing both screen-film systems and computed radiography (CR).

<div className="book-definition">

**Digital Radiography (DR)**: A radiographic imaging technology in which the X-ray detector directly generates a digital electronic signal in real time, without an intermediate analog step requiring separate readout or chemical processing. The image appears on the display within seconds of the exposure. DR detectors are based on **flat-panel detector (FPD)** technology — a large-area, thin, solid-state active matrix array that converts X-ray energy into a digital image.

</div>

The clinical advantages that drove adoption of DR over CR are:

- **Speed**: Image display within 2–5 seconds versus 30–60 seconds for CR
- **Dose efficiency**: DQE of 40–75% versus 15–35% for CR — same image quality at lower patient dose
- **Workflow integration**: No cassette handling; images automatically routed to PACS
- **Image quality**: Higher DQE and better low-contrast resolution at equivalent dose
- **Reliability**: No consumable plates, no laser scanner maintenance, no plate degradation

<div className="book-keypoint">

DR eliminated the two-step acquisition process of CR (expose cassette → scan in reader) and replaced it with a single integrated step. This seemingly simple change transformed radiographic workflow: a busy chest X-ray room can perform 50–80 examinations per hour with DR, versus 20–30 with CR.

</div>

---

## 2. Classification of DR Detectors

All DR flat-panel detectors fall into two fundamental categories based on their conversion mechanism:

```
X-ray photons
      │
      ▼
┌─────────────────────────────────────────────────────────┐
│              X-RAY ENERGY CONVERSION                     │
├─────────────────────────┬───────────────────────────────┤
│   INDIRECT CONVERSION   │     DIRECT CONVERSION         │
│                         │                                │
│  X-ray → Light → Charge │  X-ray → Charge (directly)    │
│                         │                                │
│  Scintillator layer     │  Photoconductor layer          │
│  (CsI:Tl or Gd₂O₂S:Tb) │  (a-Se or HgI₂ or CdTe)      │
│       ↓                 │       ↓                        │
│  a-Si photodiode array  │  Charge collection electrodes  │
│       ↓                 │       ↓                        │
│  TFT readout array      │  TFT readout array             │
└─────────────────────────┴───────────────────────────────┘
```

---

## 3. Indirect Conversion DR Detectors

### 3.1 Overview of the Two-Step Process

In indirect conversion DR, X-ray energy is converted to visible light in a **scintillator layer**, and the light is then converted to electrical charge by a **photodiode array**. The term "indirect" refers to the intermediate light stage.

**Complete signal chain**:

```
X-ray photon absorbed in scintillator
          │
          ▼ (X-ray → light)
Multiple visible light photons produced (CsI:Tl emission ~550 nm)
          │
          ▼ (light → charge)
Light photons strike a-Si photodiode → electron-hole pairs generated
          │
          ▼ (charge → voltage)
Charge stored on storage capacitor in TFT pixel
          │
          ▼ (charge → digital value)
TFT gate opened → charge flows to readout amplifier → ADC → pixel value
```

### 3.2 The Scintillator Layer

#### 3.2.1 Caesium Iodide — Thallium Activated (CsI:Tl)

CsI:Tl is the dominant scintillator material for indirect DR detectors. Its properties make it nearly ideal:

| Property | Value / Description |
|---|---|
| **Crystal structure** | Needle-columnar (grown by vapour deposition) |
| **Density** | 4.51 g/cm³ (high — good X-ray stopping power) |
| **K-edge energy** | Cs: 36.0 keV; I: 33.2 keV (optimal for diagnostic range) |
| **Emission wavelength** | ~550 nm (green) — well matched to a-Si photodiode response |
| **Conversion efficiency** | ~65 light photons per keV absorbed |
| **Afterglow** | Low (important for rapid sequential exposures) |
| **Hygroscopic** | Yes — must be hermetically sealed against moisture |

**Needle-crystal geometry — why it matters**:

```
   Standard powder phosphor         CsI:Tl needle crystal
   (e.g., Gd₂O₂S:Tb)              (vapour-deposited)

   ┌───────────────────────┐        ┌───────────────────────┐
   │ ░░░▒▒▓▓▒▒░░▒▒▓▓░░▒▒  │        │ ║║║║║║║║║║║║║║║║║║║  │
   │ ▒▒░░▒▒▓▓▒▒░░▒▒░░▓▓▒  │        │ ║║║║║║║║║║║║║║║║║║║  │
X-ray absorption point → │ ←Light spreads laterally  │ X-ray→│ ║║║║◄─Light guided│
   │ ▒▒▓▓▒▒░░▓▓▒▒░░▒▒▓▒▒  │        │ ║║║║║║║║║║║║║║║║║║║  │
   └───────────────────────┘        └───────────────────────┘
   Blurred light spot                Sharp light spot
   → reduced resolution              → preserved resolution
```

Each CsI needle (3–10 µm diameter, 300–600 µm tall) acts as an **optical waveguide**: light produced by X-ray absorption within a needle is channelled along the needle toward the photodiode array, with minimal lateral spread. This is analogous to optical fibre light guiding.

**Effect on DQE**: CsI:Tl detectors achieve DQE values of **40–75%** — significantly higher than powder phosphors (Gd₂O₂S:Tb: 25–40%) because of better X-ray absorption (higher density, dual K-edges at 33–36 keV) and better light collection efficiency.

#### 3.2.2 Gadolinium Oxysulphide (Gd₂O₂S:Tb) — Powder Phosphor

Some lower-cost indirect DR detectors use Gd₂O₂S:Tb (also called "GOS" or "Gadox") as the scintillator, the same material used in intensifying screens:

| Property | Gd₂O₂S:Tb | CsI:Tl |
|---|---|---|
| Crystal form | Powder (random orientation) | Needle (columnar) |
| Emission wavelength | 543 nm (green) | 550 nm (green) |
| Density | 7.34 g/cm³ | 4.51 g/cm³ |
| K-edge | Gd: 50.2 keV | Cs: 36.0 keV; I: 33.2 keV |
| DQE(0) at 70 kVp | 25–40% | 40–75% |
| Light spread | Greater (powder → lateral scatter) | Less (needle guides light) |
| Cost | Lower | Higher |
| Moisture sensitivity | Low | High (hygroscopic) |
| Typical application | Low/mid-range DR, portable | Premium fixed DR systems |

### 3.3 The Amorphous Silicon (a-Si) Photodiode Array

The scintillator light is detected by a large-area **amorphous silicon (a-Si) photodiode array** — the fundamental technological advance that made large-area flat-panel detectors feasible.

<div className="book-definition">

**Amorphous Silicon (a-Si)**: A non-crystalline (disordered) form of silicon that can be deposited as a thin film over very large areas (up to 43 × 43 cm) using plasma-enhanced chemical vapour deposition (PECVD). Unlike crystalline silicon (used in standard semiconductors), a-Si can be grown at low temperature on glass substrates, making very large-area detector fabrication possible.

</div>

**a-Si photodiode operation**:

1. Light photon (550 nm) enters the a-Si PIN photodiode (P-doped / Intrinsic / N-doped layer structure)
2. Photon absorbed in the intrinsic layer → electron-hole pair generated
3. Applied reverse bias field separates electron and hole → charge flows to respective electrodes
4. Charge accumulates on the storage capacitor (C_s) of the pixel during the exposure

**Pixel structure**:

```
One DR pixel (simplified cross-section):

       Scintillator (CsI:Tl needles)
       │││││││││││││││││││││
       ↓↓↓↓↓↓↓↓ light ↓↓↓↓↓
  ┌────────────────────────────────┐
  │   a-Si Photodiode (PIN)        │ ← converts light to charge
  ├────────────────────────────────┤
  │   Storage Capacitor (C_s)      │ ← stores charge during exposure
  ├──────────┬─────────────────────┤
  │  a-Si TFT│ gate ← row line     │ ← switches pixel readout on/off
  │  drain ──┘ source → column line│
  └────────────────────────────────┘
           glass substrate
```

### 3.4 The Thin-Film Transistor (TFT) Active Matrix Array

The TFT array is the readout mechanism — it sequentially connects each pixel to the readout electronics.

**TFT construction**:
- Each pixel contains one **amorphous silicon TFT** — a three-terminal device (gate, source, drain)
- Gate is connected to a **row address line** (shared across all pixels in one row)
- Source is connected to the pixel storage capacitor
- Drain is connected to a **column data line** (shared across all pixels in one column)

**Readout sequence**:

```
Frame readout (one complete image):

Row 1 gate line → HIGH (TFTs in row 1 open)
  → Charge from all row 1 pixels flows to column lines simultaneously
  → Column amplifiers sample each column → ADC converts → Row 1 pixels read
Row 1 gate line → LOW (TFTs close)

Row 2 gate line → HIGH
  → Row 2 read
  ...
Row N gate line → HIGH
  → Row N read (frame complete)

Total frame read time: typically 50–200 ms (well within normal exposure time)
```

**Pixel pitch and matrix size**:

| Application | Pixel Pitch | Detector Size | Matrix Size |
|---|---|---|---|
| General radiography | 150–200 µm | 43 × 43 cm | 2,150 × 2,150 to 2,867 × 2,867 |
| Chest radiography | 143–200 µm | 43 × 43 cm | 2,150 × 2,150 |
| Extremity/detail | 75–100 µm | 20 × 25 cm | 2,000 × 2,500 to 2,667 × 3,333 |
| Mammography DR | 50–100 µm | 24 × 30 cm | 2,400 × 3,000 to 4,800 × 6,000 |

---

## 4. Direct Conversion DR Detectors

### 4.1 Principle: X-ray to Charge Without Light

In direct conversion DR, X-ray photons are absorbed by a **photoconductor** material that directly generates electrical charge carriers (electron-hole pairs) without an intermediate light stage. The absence of a light conversion step eliminates optical blur, providing sharper images.

**Complete signal chain**:

```
X-ray photon absorbed in photoconductor (a-Se)
          │
          ▼ (X-ray → electron-hole pairs)
Free electron-hole pairs generated in a-Se bulk
          │
          ▼ (drift in electric field)
Applied high voltage (5–10 kV/mm) drives:
  Holes → drift toward negative electrode (top)
  Electrons → drift toward positive electrode (collection pixel)
          │
          ▼ (charge → stored)
Electrons collected on pixel storage capacitor (C_s)
          │
          ▼ (charge → digital)
TFT gate opens → charge to readout amplifier → ADC → pixel value
```

### 4.2 Amorphous Selenium (a-Se) Photoconductor

**Amorphous selenium (a-Se)** is the photoconductor used in virtually all commercial direct conversion DR systems:

| Property | Value |
|---|---|
| **Density** | 4.26 g/cm³ |
| **K-edge** | Se: 12.7 keV (below diagnostic range — limited by photoelectric absorption) |
| **Dominant absorption mechanism** | Compton + photoelectric above 20 keV |
| **Layer thickness used** | 200–1,000 µm (mammography: 200 µm; general: 500–1,000 µm) |
| **Applied electric field** | 5–10 V/µm (5–10 kV/mm) |
| **Electron-hole pair creation energy** | ~45–50 eV per pair (varies with electric field) |
| **Charge mobility** | Holes: ~0.12 cm²/V·s; Electrons: ~0.004 cm²/V·s |
| **Operating temperature** | Must be maintained at 18–30°C — a-Se crystallises above ~50°C |

<div className="book-important">

**Why Holes Are the Collected Carrier in a-Se**: In a-Se, holes have much higher mobility than electrons (ratio ~30:1). The detector is therefore designed so that **holes are the primary collected carriers**, drifting from the X-ray entry surface (negative electrode) toward the pixel electrodes (positive). Electrons drift in the opposite direction and are collected at the top electrode. This design maximises charge collection efficiency and minimises trapping-related image lag.

</div>

### 4.3 Charge Collection and Spatial Resolution

The critical advantage of direct conversion is that charge collection occurs under the influence of a strong electric field, which drives carriers in nearly straight lines toward the collection electrodes:

```
Direct conversion (a-Se):         Indirect conversion (CsI:Tl):

X-ray                               X-ray
  │                                   │
  ▼                                   ▼
[a-Se photoconductor]             [CsI:Tl scintillator]
  │                                   │         │         │
  │ Electric field ↑                  ↓ light   ↓ light   ↓ light
  │ Holes drift vertically            ← some lateral spread →
  │ (minimal lateral spread)
  ▼                                   ▼
[pixel electrode]                [a-Si photodiode]
  │                                   │
  ▼                                   ▼
Sharp charge collection           Slightly blurred
→ Better MTF                     → Reduced MTF
```

**Comparison of direct vs indirect spatial resolution**:

| System | MTF at 2 lp/mm | MTF at 3 lp/mm | Maximum resolution |
|---|---|---|---|
| a-Se direct (general, 85 µm pitch) | ~0.90 | ~0.75 | ~6 lp/mm |
| CsI:Tl indirect (100 µm pitch) | ~0.80 | ~0.60 | ~5 lp/mm |
| GOS indirect (143 µm pitch) | ~0.65 | ~0.45 | ~3.5 lp/mm |
| a-Se mammography (50 µm pitch) | ~0.95 | ~0.90 | ~10 lp/mm |

### 4.4 Alternative Photoconductor Materials

While a-Se dominates commercial DR, research and niche products use alternative photoconductors:

| Material | Symbol | K-edge | DQE Advantage | Status |
|---|---|---|---|---|
| Amorphous selenium | a-Se | 12.7 keV | — (reference) | Widespread commercial use |
| Mercuric iodide | HgI₂ | Hg: 83.1 keV; I: 33.2 keV | High at 80–100 kVp | Niche research use |
| Lead iodide | PbI₂ | Pb: 88.0 keV; I: 33.2 keV | High at chest energies | Research stage |
| Cadmium telluride | CdTe/CZT | Cd: 26.7 keV; Te: 31.8 keV | High efficiency; spectral | Security, nuclear medicine |
| Gallium arsenide | GaAs | Ga: 10.4 keV; As: 11.9 keV | High mobility | Research stage |

---

## 5. Flat-Panel Detector Physical Construction

### 5.1 Layer Structure: Indirect Conversion (CsI:Tl)

```
┌──────────────────────────────────────────────────────┐
│  Carbon fibre front plate (X-ray entry)              │  ~1–2 mm
│  (high X-ray transmission, structural support)       │
├──────────────────────────────────────────────────────┤
│  CsI:Tl scintillator layer                           │  300–600 µm
│  (vapour-deposited needle crystals)                  │
├──────────────────────────────────────────────────────┤
│  Reflective layer (optional; Al or TiO₂)             │  ~1 µm
│  (reflects downward-going light toward photodiodes)  │
├──────────────────────────────────────────────────────┤
│  a-Si PIN photodiode layer                           │  ~1 µm
│  (light → charge conversion)                        │
├──────────────────────────────────────────────────────┤
│  Storage capacitor (C_s) per pixel                   │
├──────────────────────────────────────────────────────┤
│  a-Si TFT active matrix array                        │  ~1 µm
│  (charge readout switching)                          │
├──────────────────────────────────────────────────────┤
│  Glass substrate                                     │  ~0.7–1.1 mm
├──────────────────────────────────────────────────────┤
│  Readout electronics (ASIC chips, row/column drivers)│
└──────────────────────────────────────────────────────┘
```

### 5.2 Layer Structure: Direct Conversion (a-Se)

```
┌──────────────────────────────────────────────────────┐
│  Carbon fibre front plate (X-ray entry)              │  ~1–2 mm
├──────────────────────────────────────────────────────┤
│  Top electrode (negative; receives holes)            │  ~0.1 µm
├──────────────────────────────────────────────────────┤
│  a-Se photoconductor layer                           │  200–1,000 µm
│  (X-ray → electron-hole pair generation)             │
│  High voltage applied across this layer (5–10 kV/mm)│
├──────────────────────────────────────────────────────┤
│  Pixel collection electrodes (positive)              │
│  (collect holes; one electrode per pixel)            │
├──────────────────────────────────────────────────────┤
│  Storage capacitor (C_s) per pixel                   │
├──────────────────────────────────────────────────────┤
│  a-Si TFT active matrix array                        │
│  (charge readout switching)                          │
├──────────────────────────────────────────────────────┤
│  Glass substrate                                     │  ~0.7–1.1 mm
├──────────────────────────────────────────────────────┤
│  Readout electronics                                 │
└──────────────────────────────────────────────────────┘
```

### 5.3 Fill Factor

<div className="book-definition">

**Fill Factor**: The fraction of each pixel's area that is actively sensitive to radiation or light (the photodiode or collection electrode area), expressed as a percentage. The remainder is occupied by the TFT, wiring, and storage capacitor.

</div>

| Pixel Pitch | Typical Fill Factor |
|---|---|
| 200 µm | 75–80% |
| 150 µm | 65–75% |
| 100 µm | 50–65% |
| 50 µm | 30–50% |

Lower fill factor at smaller pixel pitch reduces effective DQE. Optical fill factor can be improved in indirect systems using microlenses over each photodiode, or in direct systems by using structured (pixelated) electrodes.

---

## 6. Image Quality Parameters

### 6.1 Detective Quantum Efficiency (DQE)

<div className="book-definition">

**Detective Quantum Efficiency (DQE(f))**: A frequency-dependent measure of how efficiently a detector converts incident X-ray quanta into useful image information:

**DQE(f) = SNR²_out(f) / SNR²_in = MTF²(f) × q / NPS(f)**

Where f = spatial frequency, MTF = modulation transfer function, NPS = noise power spectrum, q = incident X-ray fluence. DQE ranges from 0 (no useful information extracted) to 1.0 (all incident quanta used perfectly).

</div>

**DQE comparison across detector types**:

| Detector Type | DQE(0) at 70 kVp | DQE at 2 lp/mm | Notes |
|---|---|---|---|
| Screen-film (400 speed) | 0.20–0.30 | 0.10–0.20 | Film grain degrades high-f DQE |
| CR (granular PSP) | 0.15–0.25 | 0.05–0.15 | Phosphor scatter |
| CR (needle PSP) | 0.25–0.35 | 0.10–0.20 | Improved by needle guidance |
| DR indirect (GOS/a-Si) | 0.30–0.50 | 0.15–0.35 | Powder phosphor limits performance |
| DR indirect (CsI/a-Si) | 0.50–0.75 | 0.25–0.55 | Best performing indirect |
| DR direct (a-Se) | 0.50–0.65 | 0.35–0.55 | Better high-frequency DQE |
| DR direct (a-Se, mammography) | 0.55–0.70 | 0.40–0.65 | Small pixel pitch; fine detail |

<div className="book-pearl">

**DQE and Patient Dose**: DQE is directly linked to the minimum detectable contrast-detail at a given dose. Because DR (CsI:Tl) achieves DQE ~0.60 versus CR at ~0.25, a DR system requires approximately **2.4× fewer X-ray quanta** (and therefore less than half the dose) to achieve the same image SNR. Across a population of millions of patients, this difference translates to a significant reduction in collective radiation dose.

</div>

### 6.2 Modulation Transfer Function (MTF)

<div className="book-definition">

**Modulation Transfer Function (MTF)**: A measure of the spatial resolution of an imaging system as a function of spatial frequency. MTF(f) is the ratio of output modulation to input modulation at frequency f. An MTF of 1.0 means perfect reproduction of that spatial frequency; an MTF of 0 means no reproduction. The MTF is measured using a slanted-edge method (IEC 62220-1) or a line spread function method.

</div>

**Factors affecting DR MTF**:

| Factor | Effect on MTF | Mechanism |
|---|---|---|
| Pixel pitch | Smaller pitch → higher MTF cut-off | Nyquist frequency = 1/(2 × pitch) |
| Scintillator thickness | Thicker → lower MTF | More lateral light spread |
| Scintillator type | CsI > GOS at same thickness | Needle guidance vs. powder scatter |
| Direct vs indirect | Direct > indirect at high f | No light stage → no optical blur |
| Anti-aliasing filter | Reduces MTF above Nyquist | Required to prevent aliasing artefacts |

**MTF and Nyquist frequency**:

```
MTF
1.0 │ ─────────────────────
    │          ╲ (direct, 100 µm pixel)
0.8 │           ╲
    │             ╲ (indirect CsI, 100 µm pixel)
0.6 │              ╲  ╲
    │               ╲   ╲ (indirect GOS, 143 µm pixel)
0.4 │                ╲    ╲
0.2 │                 ╲     ╲
    │                  ╲      ╲
0.0 │───────────────────╲──────╲────────────
    0    1    2    3    4    5    6    7
                   Spatial frequency (lp/mm)
```

**Nyquist frequency** = 1 / (2 × pixel pitch):
- 200 µm pixel → Nyquist = 2.5 lp/mm
- 143 µm pixel → Nyquist = 3.5 lp/mm
- 100 µm pixel → Nyquist = 5.0 lp/mm
- 50 µm pixel → Nyquist = 10.0 lp/mm

### 6.3 Noise Power Spectrum (NPS)

<div className="book-definition">

**Noise Power Spectrum (NPS)**: A frequency-domain description of the noise in a digital image. NPS(f) expresses the magnitude of noise at each spatial frequency. A flat NPS indicates "white" noise (equal noise at all frequencies, e.g., quantum noise). A peaked or coloured NPS indicates structured noise (e.g., from the scintillator structure or electronic interference).

</div>

**Noise sources in DR and their NPS characteristics**:

| Noise Source | NPS Characteristic | Dominant At |
|---|---|---|
| Quantum noise (photon statistics) | Flat (white) — equal at all frequencies | All exposures (dominant at clinical doses) |
| Electronic noise (TFT, amplifier) | Flat or slightly coloured | Low exposure (low mAs) |
| Structured noise (scintillator non-uniformity) | Low-frequency peak | High exposure (when quantum noise is low) |
| Fixed-pattern noise (pixel non-uniformity) | Fixed spatial pattern | All exposures (removed by flat-field correction) |

### 6.4 Dynamic Range

DR flat-panel detectors have an exceptionally wide dynamic range:

| Detector | Dynamic Range | Bit Depth | Grey Levels |
|---|---|---|---|
| Screen-film | 25:1 – 50:1 | — (analogue) | — |
| CR (PSP) | 1,000:1 – 10,000:1 | 10–14 bit | 1,024–16,384 |
| DR (FPD) | 10,000:1 – 1,000,000:1 | 14–16 bit | 16,384–65,536 |

The wide dynamic range of DR means that under- or overexposure by a factor of 10 still produces a technically adequate image (after window/level adjustment). This is the mechanism behind both the clinical advantage (reduced repeats) and the radiation safety hazard (dose creep).

---

## 7. Signal Processing in DR

### 7.1 Flat-Field Correction (Gain Calibration)

Every DR detector has pixel-to-pixel variations in sensitivity caused by:
- Non-uniform scintillator thickness or density
- Variations in photodiode responsivity
- Non-uniform amplifier gains

**Flat-field correction** removes these fixed-pattern variations:

```
Algorithm:

1. Acquire "dark image" (D): exposure with zero X-rays (zero offset)
   → measures electronic dark current and offset for each pixel

2. Acquire "flat-field image" (FF): uniform X-ray exposure across entire detector
   → measures sensitivity of each pixel under uniform illumination

3. For each clinical image (I_raw), corrected image (I_corr) is:

   I_corr(x,y) = [I_raw(x,y) − D(x,y)] × K / [FF(x,y) − D(x,y)]

   where K is a normalisation constant (mean of flat-field)

Result: all pixels have equal effective sensitivity → uniform image
```

Flat-field correction is performed automatically by the system software and must be recalibrated:
- After detector temperature changes
- After system maintenance or repair
- At scheduled intervals (monthly or as per manufacturer)
- Whenever flat-field uniformity QC fails

### 7.2 Bad Pixel Correction

Manufacturing defects and radiation damage create pixels that respond abnormally:

**Pixel types**:
- **Dead pixels (stuck at zero)**: No response; appear as white spots on image
- **Hot pixels (stuck at maximum)**: Always fully charged; appear as black spots
- **Bad pixels (non-linear response)**: Incorrect gain; appear as visible spots at some exposures

**Bad pixel map**: A stored map of all known defective pixels. During image reconstruction, bad pixel values are replaced by interpolation from neighbouring pixels. Bad pixel maps must be updated periodically as new defects develop (from radiation damage).

<div className="book-important">

**Radiation Damage to DR Detectors**: Long-term exposure to radiation gradually increases the number of bad pixels, particularly in:
- High-volume fluoroscopy systems (CR-guided interventions)
- Primary beam areas in angiography suites
- High-workload chest radiography units

Annual bad pixel counts should be tracked as a QC metric. A sudden increase in bad pixels may indicate a hardware fault requiring service.

</div>

### 7.3 Lag Correction (Ghost Image Reduction)

After an exposure, residual charge trapped in the a-Si photodiodes or a-Se photoconductor is released slowly. This produces **lag** — a faint residual signal that persists into subsequent images.

**Mechanisms**:
- **a-Si photodiode lag**: Trapped charge at interface states within the a-Si PIN structure; releases over 50–500 ms
- **a-Se photoconductor lag**: Deep trapping of carriers in a-Se bulk; releases over seconds

**Lag correction algorithms**:
- The detector controller measures the lag signal from a brief "dark frame" acquired immediately after each exposure
- This lag signal is subtracted from subsequent frames
- Effectiveness: reduces lag from ~3–5% to &lt;0.5% of the previous signal

### 7.4 Scatter Correction

Unlike CR, where the PSP plate does not read out until the cassette is in the reader, DR detectors remain in the Bucky during the exposure and receive scatter from the Bucky grid, table top, and detector housing. Software scatter correction:
- Estimates the scatter field using kernel-based convolution models
- Subtracts the estimated scatter from the primary image
- Improves contrast and DQE, particularly for obese patients and thick body parts

### 7.5 Post-Processing (Image Presentation)

The corrected digital image is then processed for display using algorithms identical in concept to CR processing:

1. **Histogram analysis**: Anatomy type and exposure level identified from pixel histogram
2. **Exposure Index calculation**: EI computed from histogram (IEC 62494-1 standard)
3. **Gradation processing**: LUT applied to set display brightness and contrast
4. **Frequency (edge) enhancement**: Unsharp masking amplifies fine detail
5. **Equalization processing**: Spatially varying gain for wide-dynamic-range anatomies (chest)

---

## 8. Exposure Index in DR

DR systems use the **IEC 62494-1 standardised Exposure Index**, identical in definition to that used for CR (described in detail in the CR chapter):

- **EI**: Proportional to dose received by the detector ROI (anatomy-containing region)
- **Target EI (EI_T)**: Defined in the exposure protocol for each examination type
- **Deviation Index (DI)**: DI = 10 × log₁₀(EI / EI_T); acceptable range ±3

<div className="book-keypoint">

The IEC EI system was designed for both CR and DR. However, the clinical importance of EI monitoring is **even greater in DR** than in CR because:
1. DR images have wider dynamic range — even grossly overexposed images look normal
2. DR workflow is faster (less time to notice a trend)
3. Higher throughput means dose creep affects more patients per day

All DR installations must have written exposure protocols with defined target EI and acceptable DI ranges for every examination.

</div>

---

## 9. DR Artefacts

### 9.1 Detector Artefacts

| Artefact | Appearance | Physical Cause | Management |
|---|---|---|---|
| **Dead pixel cluster** | Small white spot (dot or small region) | Non-responsive detector elements (manufacturing defect or radiation damage) | Bad pixel map correction; replace detector if excessive |
| **Hot pixel** | Small black spot | Pixel permanently saturated | Bad pixel map correction |
| **Column drop-out** | Vertical white or black line | Failure of column readout electronics | Service repair; column interpolation (temporary) |
| **Row drop-out** | Horizontal white or black line | Failure of row address line | Service repair |
| **Gain non-uniformity** | Subtle mottled background, faint grid pattern | Incorrect flat-field calibration; temperature drift | Recalibrate flat field |
| **Reticle pattern** | Regular faint grid overlay | Mismatch between TFT pixel grid and digitisation sampling | Recalibrate; service |

### 9.2 Lag (Ghosting) Artefacts

<div className="book-definition">

**Lag Artefact (Ghost Image)**: A faint residual image from a previous exposure that is superimposed on the current image. In DR, lag arises from trapped charge in the photodiode or photoconductor that is released slowly after the exposure ends.

</div>

**Types of DR ghost artefacts**:

| Ghost Type | Appearance | Cause | Management |
|---|---|---|---|
| **Positive ghost (lag)** | Faint bright copy of previous exposure | Residual charge released slowly (photodiode trapping) | Lag correction algorithm; adequate inter-exposure delay |
| **Negative ghost (burn-in)** | Dark shadow corresponding to high-dose area of previous exposure | Temporary sensitivity reduction (receptor depletion) | Protocol: avoid repeated exposures to same area at high dose |
| **Persistent ghost** | Visible ghost even after multiple subsequent exposures | Severe a-Se bulk trapping; deep defects | Detector recharge cycle; service |

**Clinical significance**: Ghost artefacts are most visible in:
- Lateral chest radiograph acquired immediately after PA (mediastinal shadow may appear on lateral)
- Sequential fluoroscopy images
- Portable radiography on wards (multiple exposures in rapid succession)

### 9.3 Anti-Scatter Grid Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Moiré pattern** | Regular wave-like interference pattern | Grid line frequency aliasing with pixel sampling frequency |
| **Grid cut-off** | Reduced density (white) on one side of image | Grid tilted relative to X-ray beam; or focal distance mismatch |
| **Grid lines visible** | Fine regular stripes | Grid frequency too low relative to pixel pitch |

**Moiré prevention**: Detectors with smaller pixel pitch are more prone to moiré with standard grids. Use:
- Moving Bucky grid (oscillates during exposure — averages out grid lines)
- High-frequency grid (≥60 lines/cm) with 100–200 µm pixel pitch detectors

### 9.4 Mechanical and Environmental Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Pressure artefact** | Dark line or region | Physical deformation of the flat-panel housing causing local pressure on the active layer |
| **Impact damage** | Irregular dark region or cracked pattern | Dropping or striking the detector panel |
| **Condensation damage** | Irregular non-uniform sensitivity | Moisture entry (particularly for portable panels) |
| **Temperature artefact** | Non-uniform background | a-Se temperature sensitivity; gain changes with temperature |

### 9.5 Processing Artefacts

| Artefact | Appearance | Cause |
|---|---|---|
| **Histogram clipping** | Anatomy missing at bright or dark end | Processing algorithm clip exposures outside dynamic range |
| **Anatomy exclusion error** | Wrong tone mapping; collimation field included in histogram | Processing algorithm fails to exclude direct-beam area from EI histogram |
| **Over-sharpening halo** | Bright outline around high-contrast borders | Excessive edge enhancement (unsharp masking coefficient too high) |
| **Stitching artefact** | Visible seam in large-format image | Multi-panel stitching error in long-length imaging (e.g., spinal scoliosis series) |

---

## 10. Wireless and Portable DR Detectors

### 10.1 Design and Technology

Modern portable DR detectors are **battery-powered, wireless flat-panel units** that combine the image quality of fixed DR systems with the portability of CR cassettes:

**Construction**:

| Component | Specification |
|---|---|
| Detector active area | 35 × 43 cm (standard); 43 × 43 cm (large field) |
| Scintillator | CsI:Tl (most) or GOS (lower cost) |
| Pixel pitch | 100–200 µm |
| Battery life | 100–250 exposures per charge |
| Wireless standard | Wi-Fi 802.11n/ac or proprietary 5 GHz |
| Weight | 2.5–4.0 kg (including battery) |
| Thickness | 10–15 mm |
| Drop resistance | Rated for 0.5–1.0 m drop |

**Workflow for portable DR**:

1. Wireless panel placed under or beside patient (ICU, operating theatre, ward)
2. Exposure made using mobile X-ray generator
3. Image wirelessly transmitted to acquisition workstation within 5–10 seconds
4. Radiographer reviews image at bedside or remotely
5. Image automatically sent to PACS; available to clinical team within minutes

<div className="book-pearl">

**Wireless DR vs. CR for Portable Radiography**: Wireless DR panels have largely replaced CR cassettes for portable radiography in well-resourced departments. The advantages are:
- No cassette transport to CR reader (saving 5–10 minutes per examination)
- Image available within seconds (clinically critical for ICU chest checks, post-line placement)
- Higher DQE → lower dose for equivalent image quality
- No plate wear or laser maintenance

However, CR cassettes remain superior for one scenario: environments where the detector could be damaged (major trauma, intraoperative radiography), where a cheap replaceable CR cassette is preferable to a £15,000–£25,000 wireless DR panel.

</div>

### 10.2 Tethered vs. Wireless Panels

| Feature | Tethered (wired) DR | Wireless DR |
|---|---|---|
| Image transfer | Instantaneous (cable) | 2–5 seconds (wireless) |
| Weight | Lighter (no battery) | Heavier (battery) |
| Manoeuvrability | Limited by cable | Full freedom |
| Failure risk | Cable damage | Battery failure, RF interference |
| Cost | Lower | Higher |
| Clinical use | Fixed table/wall stand | Portable; ward; trauma |

---

## 11. Special DR Technologies

### 11.1 Dual-Energy Subtraction (DES)

<div className="book-definition">

**Dual-Energy Subtraction**: A technique in which two images are acquired at different X-ray energies (kVp settings) and mathematically combined to produce images in which either soft tissue or bone is selectively suppressed or enhanced.

</div>

**Physical basis**: At different X-ray energies, the X-ray attenuation coefficients of bone (calcium) and soft tissue differ in a known, predictable way. By taking a weighted logarithmic difference of the two images:

- **Soft tissue image**: Bone signal cancelled → shows only soft tissue (nodules, masses, mediastinal outline clearly visible without rib overlay)
- **Bone image**: Soft tissue signal cancelled → shows only osseous structures

**Acquisition methods**:
1. **Single-shot (single-exposure) DES**: Uses a copper filter between two detector layers separated by a spacer; one detector sees low energy (without Cu filter), one sees high energy (after Cu filter). No motion artefact.
2. **Two-shot (sequential) DES**: Two rapid sequential exposures at different kVp (60–70 kVp then 120–135 kVp). Small risk of motion artefact between shots.

**Clinical applications**:
- Lung nodule detection (reduced rib overlay → improved sensitivity)
- Rib fracture detection (bone image shows fractures without soft tissue confusion)
- Chest radiograph in patients with calcified pleural plaques

### 11.2 Digital Tomosynthesis

<div className="book-definition">

**Digital Tomosynthesis**: A limited-angle tomographic technique in which the X-ray tube moves in an arc over the detector, acquiring multiple low-dose projection images from different angles. These projections are reconstructed into a series of in-focus planes at different depths through the body, while out-of-plane structures are blurred.

</div>

**Comparison with CT**:

| Property | Digital Tomosynthesis | CT (MDCT) |
|---|---|---|
| Dose | ~3–10× plain DR; much less than CT | ~100–500× plain DR |
| Depth resolution | Limited (~5–10 mm slabs) | Isotropic (sub-mm) |
| In-plane resolution | High (limited only by detector pixel pitch) | Lower (reconstruction-limited) |
| Acquisition time | 3–10 seconds | 0.5–5 seconds |
| Reconstruction | Fast (seconds) | Seconds to minutes |
| Applications | Chest, bone, breast (DBT) | Whole body; complex anatomy |

**Clinical applications of chest tomosynthesis**:
- Lung nodule detection and characterisation (superior to plain chest DR)
- Rib fracture detection
- Pre-CT screening decision support

**Digital Breast Tomosynthesis (DBT)** is the most established tomosynthesis application, FDA-approved for breast cancer screening in combination with 2D mammography (FFDM).

### 11.3 Slot-Scan DR

**Slot-scan systems** (e.g., EOS imaging) use a narrow slit collimator and a linear detector array that moves synchronously with the X-ray beam to image the full body length:

- **Radiation dose**: Dramatically reduced (~85% lower than conventional DR) because scatter is largely eliminated by the narrow beam geometry
- **Image quality**: Low scatter → excellent contrast; minimal distortion
- **Applications**: Scoliosis measurement (full spine); lower limb alignment; orthopaedic surgical planning
- **Limitation**: Long acquisition time (5–20 seconds); patient must remain still

### 11.4 Photon-Counting DR

The next generation of DR uses **photon-counting detectors (PCDs)**:

<div className="book-definition">

**Photon-Counting Detector**: A direct conversion detector in which each individual X-ray photon generates a discrete charge pulse that is counted and energy-binned separately. Unlike integrating detectors (all current FPDs), PCDs count every photon and record its energy, enabling energy-resolved (spectral) imaging.

</div>

**Advantages over integrating FPDs**:
- **Noise**: Electronic noise is eliminated (pulses below a threshold are not counted)
- **DQE**: Higher (potentially >0.90 at optimal energies)
- **Spectral imaging**: Energy thresholds allow simultaneous generation of multiple energy-weighted images
- **Dose**: 20–40% dose reduction estimated vs. best current integrating DR

PCD technology is already deployed in spectral CT (Siemens NAEOTOM Alpha) and is being developed for DR applications (Philips MicroDose mammography system uses a PCD).

---

## 12. Comparison: DR versus CR versus Screen-Film

| Property | Screen-Film | CR | DR (FPD) |
|---|---|---|---|
| **Detector material** | AgBr emulsion + phosphor | BaFBr:Eu²⁺ PSP | a-Se or CsI:Tl/a-Si |
| **Image acquisition time** | 90 sec (processing) | 30–60 sec (scanning) | 3–10 sec |
| **DQE(0) at 70 kVp** | 20–30% | 15–35% | 40–75% |
| **Dose for equivalent SNR** | Reference | 0–10% more | 20–50% less |
| **Dynamic range** | 25:1 – 50:1 | 1,000:1 – 10,000:1 | 10,000:1 – 1,000,000:1 |
| **Spatial resolution** | 5–20 lp/mm | 2.5–7 lp/mm | 2.5–10 lp/mm |
| **Repeat rate** | 5–10% | 1–2% | &lt;1% |
| **Post-processing** | None | Extensive | Extensive |
| **Retrofitability** | — (reference) | High (existing rooms) | Moderate |
| **Capital cost** | Lowest | Moderate | Highest |
| **Workflow** | Darkroom; film store | Cassette transport | Immediate; PACS integrated |
| **Consumables** | Film, chemicals | Plates (wear) | Minimal |
| **Artefact types** | Processing, static, dust | Ghost, banding, plate damage | Lag, dead pixels, moiré |
| **Dose monitoring** | Visual inspection | EI (mandatory) | EI (mandatory) |

---

## 13. Quality Control for DR Systems

### 13.1 QC Programme Overview

DR quality control must address:
1. **Flat-field uniformity** (gain calibration integrity)
2. **Spatial resolution** (MTF performance)
3. **Noise and DQE** (detector sensitivity)
4. **Ghosting / lag** (charge retention)
5. **Bad pixel map** (defective element count and distribution)
6. **Exposure index accuracy** (dose monitoring calibration)
7. **Artefact assessment** (systematic detection of all artefact types)

### 13.2 Recommended QC Tests

**Daily Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Artefact check | Flat-field image at standard exposure; visual inspection | No artefacts visible above noise floor |
| Exposure index verification | Standard phantom at defined technique; measure EI | EI within ±20% of baseline; DI within ±1.0 |
| Visual image inspection | Review last 5 clinical images | No systematic artefacts or aberrant contrast |

**Weekly Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Flat-field uniformity | Uniform phantom exposure; measure pixel value SD | CV (coefficient of variation) ≤ 5% across field |
| Ghost image test | High-dose pattern; wait 60 sec; uniform exposure; inspect | Ghost signal ≤ 1.5% of flat-field level |
| Bad pixel count | Review bad pixel map; count | Count within 10% of baseline; no new cluster |

**Monthly Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Spatial resolution (MTF) | Slanted-edge or bar pattern at standard exposure | MTF10 within 10% of baseline |
| Low-contrast resolution | CDRAD or Leeds test object | Score within established baseline ±10% |
| EI calibration | Compare EI with ionisation chamber at 3 dose levels | EI vs dose relationship: slope within ±25% of baseline |
| Lag measurement | Two-frame lag ratio test | Lag ratio ≤ 0.5% at 1 second after exposure |
| Flat-field recalibration | Full gain calibration procedure | Required if uniformity test fails |

**Annual Tests**:

| Test | Method | Acceptance Criterion |
|---|---|---|
| Full DQE measurement | IEC 62220-1 methodology | DQE(0) ≥ 80% of manufacturer specification |
| Full MTF measurement | IEC 62220-1 slanted-edge | MTF matches baseline within 15% across all frequencies |
| NPS measurement | Multiple flat-field images at 3 dose levels | NPS shape and magnitude within 20% of baseline |
| Comprehensive bad pixel audit | Full map analysis | Total bad pixel area &lt;0.5% of active detector area |
| High-voltage bias check (a-Se) | Measure applied voltage | Within ±5% of specification |

### 13.3 Flat-Field Recalibration Triggers

Flat-field calibration must be repeated when:
- Detector temperature has changed by >5°C since last calibration
- A new X-ray generator has been connected
- The detector has been repaired or replaced
- Flat-field uniformity QC test fails
- At scheduled intervals (manufacturer-defined; typically monthly for fixed systems, weekly for high-use portable panels)

### 13.4 Detector Retirement Criteria

A DR flat-panel detector should be considered for replacement when:
- Total bad pixel area exceeds 0.5% of the active detector area
- Bad pixel clusters appear in the primary imaging area and interpolation produces visible artefacts
- DQE(0) falls below 70% of the manufacturer's specification
- Lag exceeds 2% at 1 second post-exposure despite lag correction
- Physical damage (cracked housing, impact deformation) compromises the structural integrity

---

## 14. Radiation Protection Considerations in DR

### 14.1 Dose Creep in DR

<div className="book-important">

**Dose creep is a more significant risk in DR than in CR**, for three reasons:

1. **Wider dynamic range**: DR detectors tolerate even larger overexposure before image quality changes are visible
2. **Faster workflow**: Higher patient throughput means exposure errors affect more patients before detection
3. **Less visible feedback**: CR readers display EI prominently at the end of each scan; DR workstations may display EI less prominently

Published studies have documented mean departmental exposures 3–8× above the ALARA-optimal level in DR departments without rigorous EI protocols. Effective prevention requires:
- Written protocols with target EI and acceptable DI range for every examination
- Real-time DI display on the acquisition workstation
- Automated alerts when DI > ±3
- Quarterly dose audits with comparison to national DRLs
- Regular radiographer training on EI interpretation

</div>

### 14.2 Anti-Scatter Grid Use in DR

The same anti-scatter grid principles apply to DR as to screen-film and CR:
- **Grid ratio**: 8:1 to 12:1 for general radiography; 5:1 for extremities
- **Grid factor (Bucky factor)**: The increase in dose required to compensate for primary beam absorption by the grid; typically 3–5× (i.e., a grid increases dose by 3–5×)
- **Grid-less technique**: Appropriate for body parts &lt;10 cm thickness (extremities, paediatric); reduces dose without compromising image quality

In DR, grid use should be explicitly specified in protocols because the wide dynamic range means that grid artefacts (moiré, cut-off) may appear without the usual density changes that would prompt review in screen-film practice.

---

<div className="book-remember">

**Key Relationships and Facts to Remember**

- **Indirect DR**: X-ray → Light (CsI:Tl, 550 nm) → Charge (a-Si photodiode) → TFT readout
- **Direct DR**: X-ray → Charge (a-Se, 5–10 kV/mm field) → TFT readout (no light step)
- **CsI:Tl K-edges**: Cs at 36.0 keV, I at 33.2 keV — optimal for 40–80 kVp
- **a-Se applied field**: 5–10 V/µm; holes are the primary collected carrier
- **Fill factor**: Fraction of pixel area that is sensitive; decreases at smaller pixel pitch
- **DQE(0) comparison**: Screen-film ~25%, CR ~25%, DR-GOS ~40%, DR-CsI ~60%, DR-aSe ~55%
- **Nyquist frequency** = 1 / (2 × pixel pitch); 100 µm pixel → 5 lp/mm Nyquist
- **Flat-field correction** equation: I_corr = (I_raw − Dark) × K / (FF − Dark)
- **Lag artefact**: Positive ghost from trapped charge released slowly after exposure
- **Moiré artefact**: Grid line frequency aliases with pixel sampling frequency
- **IEC DI** = 10 × log₁₀(EI / EI_target); acceptable range: ±3 DI units
- **Dose creep risk**: Greater in DR than CR due to wider dynamic range

</div>

---

<div className="book-summary">

## Chapter Summary

Digital radiography (DR) uses **flat-panel detectors (FPDs)** — large-area solid-state arrays — to directly generate digital images within seconds of X-ray exposure. Two conversion mechanisms exist:

**Indirect conversion** (dominant design): X-rays are absorbed by a **CsI:Tl scintillator** (needle-crystal structure that channels 550 nm light toward the detector), which produces light that is detected by an **a-Si photodiode array**. The stored charge is read out by a **TFT active matrix array**. CsI:Tl achieves DQE(0) of 50–75% due to its high density (4.51 g/cm³), dual K-edges at 33–36 keV, and optical channelling by the needle geometry.

**Direct conversion** (used in mammography and high-resolution applications): X-rays are absorbed by an **a-Se photoconductor layer** with an applied electric field of 5–10 kV/mm. The field drives electron-hole pairs directly to collection electrodes, eliminating the light stage and optical blur. This provides superior high-frequency MTF, making a-Se the preferred choice for fine-detail imaging.

**Image quality advantage**: DR achieves DQE(0) of 40–75% versus 15–35% for CR and 20–30% for screen-film. At equivalent dose, DR images have superior SNR; equivalently, DR requires **20–50% less dose** than CR for the same image quality.

**Signal processing** corrects for flat-field non-uniformity (gain calibration using dark and flood images), bad pixels (interpolation from neighbours), and lag (trapped charge subtraction). Post-processing (histogram analysis, EI calculation, gradation and frequency processing) produces the final displayed image.

**Critical safety requirement**: The wide dynamic range of DR (up to 1,000,000:1) makes overexposure invisible to the eye. **IEC Exposure Index** and **Deviation Index** (DI = 10 × log₁₀(EI/EI_target)) monitoring is mandatory for every exposure. Dose creep — silent, systematic dose escalation — is more dangerous in DR than CR and requires formal EI protocols and regular dose audits.

**Quality control** must address flat-field uniformity, spatial resolution (MTF), lag, bad pixel counts, DQE, and EI calibration on daily, weekly, monthly, and annual schedules.

</div>
