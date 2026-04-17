---
id: the-x-ray-imaging-system
title: "The X-ray Imaging System"
sidebar_label: "The X-ray Imaging System"
---

# The X-ray Imaging System

A diagnostic radiograph is the product of a precisely engineered chain of components — from the mains power supply through to the radiologist's diagnostic workstation. Each element in this chain makes a defined contribution to image quality, patient dose, and system reliability. A failure or suboptimal setting at any point propagates as degraded image quality, increased patient exposure, or diagnostic error. This chapter examines the complete X-ray imaging system as an integrated whole: its major components, their individual functions, the geometric relationships that govern image formation, and the exposure parameters that the radiographer controls at every examination.

<div className="book-objectives">

- Identify and describe the function of each major component of the X-ray imaging system
- Explain the operating principles of single-phase, three-phase, and high-frequency generators
- Describe the construction and function of the collimator and its role in dose and contrast
- Explain the design and purpose of the anti-scatter grid, including grid ratio, grid frequency, and the Bucky factor
- Compare film-screen, computed radiography (CR), and digital radiography (DR) image receptors
- Describe the construction and operating principles of indirect and direct flat-panel detectors
- Define SID, SOD, OID, and magnification factor and apply them to clinical positioning
- Explain the roles of kVp, mAs, SID, filtration, and field size in determining image quality and dose
- Describe the PACS/DICOM infrastructure and its role in the modern radiology department
- Apply Automatic Exposure Control (AEC) principles to clinical radiographic technique

</div>

---

## System Overview

The X-ray imaging system can be conceptualised as a **linear information chain** — each component receives, modifies, and passes on either energy or information:

**Mains Power → Generator → X-ray Tube → Beam Modification → Patient → Scatter Rejection → Image Receptor → Processing → Display → Reporting**

Any component that underperforms introduces noise, loss of contrast, geometric distortion, or unnecessary patient dose into the chain. The radiographer's role is to optimise every controllable variable across this chain for each individual examination.

---

## Component 1: The X-ray Generator

The generator is the power management and control centre of the X-ray system. Its functions are:
1. Convert mains AC supply to the high-voltage DC required by the X-ray tube
2. Precisely regulate the kVp, mA, and exposure time selected by the operator
3. Protect the X-ray tube from overloading

### Single-Phase Generators

Single-phase generators draw from one phase of the AC mains supply (230 V, 50 Hz in the UK):

- Full-wave rectification produces pulsating DC at 100 Hz (100 pulses/s)
- Voltage drops to zero twice per cycle — **100% ripple**
- The tube only produces X-rays effectively during voltage peaks
- Mean kVp significantly below peak kVp → inefficient X-ray production
- Low-energy photons produced during voltage troughs contribute dose without image information
- **Largely obsolete** — still found in some portable and dental units

### Three-Phase Generators

Three-phase generators draw from all three phases of the industrial AC supply (120° phase offset):

- **6-pulse rectification**: 6 voltage peaks per cycle → ~14% ripple
- **12-pulse rectification**: 12 voltage peaks per cycle → ~3.5% ripple
- Nearly continuous high voltage → harder, more consistent beam
- Higher mean kVp for same peak kVp → greater efficiency and lower patient dose
- Larger, heavier, and more expensive than single-phase units
- Used in fixed radiographic rooms and fluoroscopy suites before high-frequency units

### High-Frequency (Inverter) Generators

High-frequency generators are the **current standard** for all modern X-ray equipment:

**Operating sequence:**
1. Mains AC (50/60 Hz) → rectified to DC
2. DC → chopped to high-frequency AC (**1–100 kHz**) by solid-state inverter switches
3. High-frequency AC → stepped up by compact high-frequency transformer
4. High-frequency AC → rectified and smoothed to near-constant DC
5. Delivered to X-ray tube at selected kVp

**Advantages:**

| Feature | Benefit |
|---|---|
| &lt;1% voltage ripple | Near-constant kVp; consistent beam quality |
| Compact transformer | Smaller, lighter, portable units possible |
| Precise digital control | Accurate kVp and mAs to ±1% |
| Rapid kVp switching | Dual-energy imaging capability |
| Energy efficient | Less waste heat; lower running costs |
| Fast response | Exposure times as short as 1 ms |

<div className="book-keypoint">

The shift from single-phase to high-frequency generators was one of the most significant dose-reduction advances in radiographic history. A high-frequency generator producing 80 kVp with &lt;1% ripple delivers a **harder, more penetrating beam** than a single-phase generator set to the same nominal kVp — because the mean beam energy is substantially higher. The same diagnostic image can therefore be obtained at a **lower patient dose**, or with a lower mAs setting. This is why modern radiographic technique charts specify exposure factors for high-frequency generators and cannot simply be transposed to older equipment.

</div>

### Generator Control Console

The control console is the operator interface for the generator. Modern consoles provide:

- **kVp selection**: 40–150 kVp (diagnostic range); ±1 kVp accuracy
- **mA selection**: 50–1,200 mA (fixed or AEC mode)
- **Exposure time**: 1 ms to several seconds
- **mAs selection**: Direct mAs entry (generator calculates appropriate mA and time)
- **AEC (Automatic Exposure Control)**: Ionisation chambers in the detector field terminate exposure when a pre-set dose is reached
- **Technique charts**: Stored protocols for standard examinations
- **Tube loading indicators**: Heat unit display, anode cooling monitor, overload protection

### Automatic Exposure Control (AEC)

AEC eliminates the need for the radiographer to manually calculate mAs for each patient by **automatically terminating the exposure** when sufficient radiation has reached the detector:

**Operating principle:**
1. One to three **ionisation chambers** are positioned between the patient and the image receptor (or within the detector)
2. The operator selects which chamber(s) to activate (corresponding to anatomical region of interest)
3. During exposure, the chambers measure transmitted X-ray intensity
4. When the accumulated dose reaches a **pre-set threshold** (the "density setting"), the generator terminates the exposure
5. The result: consistent image receptor dose regardless of patient size, positioning variation, or kVp changes

**AEC components:**

| Component | Function |
|---|---|
| Ionisation chambers (3 positions) | Measure transmitted X-ray dose |
| Density selector (−3 to +3) | Adjusts the termination threshold (±0.15 optical density per step) |
| Minimum response time | Shortest exposure the system can reliably terminate (~1–2 ms) |
| Backup timer | Terminates exposure if AEC fails (safety device) |
| Chamber selection | Left, centre, right, or combinations |

**Clinical considerations for AEC use:**
- The selected chamber must be **positioned under the area of diagnostic interest** — a chamber placed over a gas shadow or implant will give incorrect exposure
- AEC cannot compensate for incorrect **kVp selection** — penetration must be adequate for the examination
- For very thin patients (infants, extremities), the minimum response time may limit accuracy
- Manual technique is preferable for atypical body habitus or when anatomy cannot be centred over the AEC chamber

<div className="book-definition">

**Automatic Exposure Control (AEC)** is a system in which the radiographic exposure is automatically terminated when the image receptor (or AEC ionisation chamber) has received a predetermined radiation dose, ensuring consistent image optical density or digital exposure index regardless of patient size, tissue composition, or minor positioning variations. AEC reduces the need for repeat exposures and contributes to dose optimisation by preventing overexposure of larger patients with excessive manual mAs.

</div>

---

## Component 2: The X-ray Tube

The X-ray tube converts electrical energy into X-ray photons. Full details of X-ray tube construction and physics are covered in the dedicated chapter; a system-level summary is presented here.

**Key tube parameters relevant to system performance:**

| Parameter | Typical Values | System Relevance |
|---|---|---|
| Focal spot size (fine) | 0.3–0.6 mm | Fine detail; geometric unsharpness |
| Focal spot size (broad) | 1.0–1.2 mm | High-power exposures; CT |
| Maximum tube voltage | 40–150 kVp | Beam penetration range |
| Maximum tube current | 50–1,200 mA | Output and dose rate |
| Anode heat storage | 300,000–1,000,000 HU | Duty cycle and throughput |
| Anode rotation speed | 3,000–10,000 rpm | Heat distribution; maximum mA |
| Inherent filtration | ≥0.5 mm Al equivalent | Low-energy photon removal |

---

## Component 3: The Collimator

### Function and Importance

The collimator (also called the **beam-limiting device** or **light-beam diaphragm**) is mounted directly below the X-ray tube housing. Its role is to restrict the X-ray beam to the smallest field that covers the anatomical area of clinical interest.

**Two critical effects of collimation:**

1. **Patient dose reduction**: Reducing field size reduces the volume of irradiated tissue — directly reducing the patient's effective dose. A 50% reduction in field area reduces irradiated tissue volume by 50%.

2. **Image contrast improvement**: Scattered radiation (Compton scatter) degrades contrast by adding uniform, non-image-forming exposure to the detector. Collimating the beam reduces scatter production, improving image contrast.

<div className="book-important">

Inadequate collimation is one of the most common and avoidable causes of **unnecessary patient dose** in diagnostic radiography. Regulatory requirements in most countries mandate that the collimated field must not exceed the image receptor dimensions. The **positive beam limitation (PBL)** feature — standard on modern fixed radiographic equipment — automatically sizes the collimator field to the image receptor size when the SID is set. Manual override is always possible and required for certain projections.

</div>

### Collimator Construction

**Components of a light-beam diaphragm:**

| Component | Function |
|---|---|
| Lead shutters (two pairs, X and Y) | Independently adjustable; define rectangular field |
| Light source (lamp) | Projects visible light field coinciding with X-ray field |
| Mirror (45°) | Reflects light along X-ray beam path toward patient |
| Filter slot | Accepts additional beam filtration |
| Beam alignment indicator | Ensures light/X-ray field coincidence |

**Quality assurance requirement:** The light field and X-ray field must be coincident within **±2% of SID** (e.g., ±2 cm at 100 cm SID). Misalignment results in the operator collimating to the light field, but the actual X-ray field being larger — irradiating tissue outside the intended area.

### Types of Beam-Limiting Devices

| Device | Description | Application |
|---|---|---|
| **Light-beam diaphragm** | Adjustable lead shutters; standard on all fixed units | All general radiography |
| **Cones** | Fixed circular restriction | Dental PA, spot projections |
| **Cylinders** | Extension tube for smaller field | Dental, skull views |
| **Aperture diaphragm** | Fixed rectangular opening in lead plate | Fixed-field projections |
| **Added filtration** (K-edge) | Not a collimator but restricts energy spectrum | Mammography (Mo/Rh filters) |

### Collimation and the Law

UK IRR 2017 (Ionising Radiations Regulations) and IR(ME)R 2017 mandate:
- Every X-ray exposure must be **justified** — the clinical benefit must outweigh the radiation risk
- The exposure must be **optimised** (ALARA) — collimation to the clinical area of interest is a fundamental optimisation requirement
- Field size must be documented and appropriate to the examination

---

## Component 4: The Patient Support Table

### Radiographic Table

The standard radiographic examination table provides:

- **Carbon fibre tabletop**: Low X-ray attenuation (equivalent to ~1 mm Al), high structural strength (supports patients up to 230 kg on floating top models)
- **Floating top**: Allows smooth repositioning of the patient without lifting; controlled by electromagnetic brakes
- **Bucky tray**: A sliding tray beneath the tabletop that holds the image receptor (DR detector panel or CR cassette) and houses the moving anti-scatter grid
- **Bucky mechanism**: Reciprocating or oscillating motor that moves the grid during exposure to blur out grid lines on the image
- **Adjustable height**: Motorised height adjustment (typically 55–95 cm) for patient transfer and oblique positioning

### Erect Bucky Stand (Wall Bucky)

Used for upright projections (chest PA, cervical spine, extremities):
- Houses the image receptor and moving grid
- Receptor height adjustable to accommodate patient stature
- Essential for PA chest radiography (standard SID 180 cm, erect position, full inspiration)
- Most modern wall buckies incorporate digital DR detectors with wireless data transmission

---

## Component 5: Anti-Scatter Grids

### The Scatter Problem

Compton scattering is the dominant X-ray interaction in the diagnostic energy range. Scattered photons travel in all directions and strike the image receptor at locations far from their origin — adding a uniform, non-image-forming exposure that reduces contrast. The severity of scatter increases with:

- **Field size** — larger field → more scatter volume
- **Patient thickness** — thicker patient → more scatter
- **kVp** — higher energy → more forward-directed scatter

For an adult abdomen at 80 kVp, scattered radiation may constitute **80–90%** of the total radiation reaching the detector — severely degrading contrast without a grid.

### Grid Construction

An anti-scatter grid is a flat plate containing alternating strips of **lead** (X-ray absorbing) and **interspacing material** (aluminium, fibre, or air — low attenuation):

- **Lead strips** are oriented parallel to the primary beam — primary photons pass through the interspacing
- **Scattered photons** travel obliquely and are intercepted and absorbed by the lead strips
- **Grid lines** may be visible on the image if the grid is stationary — prevented by using a moving Bucky grid

### Grid Parameters

**Grid ratio (r):**

The most important grid performance parameter:

**r = h/d**

Where h = height of lead strips, d = width of interspacing material

| Grid Ratio | Scatter Rejection | Primary Transmission | Typical Application |
|---|---|---|---|
| 5:1 | Moderate | Good | Paediatric, low-scatter areas |
| 8:1 | Good | Moderate | General radiography (&lt;10 cm tissue) |
| 10:1 | Very good | Moderate | Standard adult body radiography |
| 12:1 | Excellent | Moderate | Abdomen, pelvis (high scatter) |
| 16:1 | Superior | Lower | Very large patients, barium studies |

**Grid frequency:**
Number of lead strips per centimetre (typically 25–60 lines/cm). Higher frequency:
- Finer grid lines → less visible on image
- More lead strips per cm → greater scatter rejection

**Bucky factor (grid factor):**
The factor by which mAs must be **increased** to compensate for primary beam absorption by the grid:

| Grid Ratio | Approximate Bucky Factor | mAs Multiplier |
|---|---|---|
| No grid | 1 | ×1 |
| 5:1 | ~2 | ×2 |
| 8:1 | ~3–4 | ×3–4 |
| 12:1 | ~4–5 | ×4–5 |
| 16:1 | ~5–6 | ×5–6 |

### Focused vs Parallel Grids

**Parallel (linear) grid**: All lead strips are vertical — primary beam must be **exactly perpendicular** to grid; off-angle exposures cause **grid cut-off** (primary beam absorption at periphery)

**Focused grid**: Lead strips are angled slightly, converging toward a point at the **focal distance** (convergence distance):
- Used in Bucky mechanisms at standard SIDs (70–110 cm or 130–180 cm)
- The grid must be used at the correct SID (focal range) — using a focused grid at the wrong SID causes peripheral grid cut-off

**Cross-hatch grid**: Two linear grids superimposed at right angles — superior scatter rejection but requires the primary beam to be exactly perpendicular (no angulation possible)

### Grid Errors and Artefacts

| Error | Cause | Appearance on Image |
|---|---|---|
| Off-level error | Grid tilted (non-perpendicular beam) | Reduced density across whole image |
| Off-centre error | Central ray misaligned laterally | Asymmetric density — dark on one side |
| Off-focus error | Wrong SID for focused grid | Peripheral cut-off — dark edges |
| Upside-down focused grid | Grid inverted | Severe cut-off at edges; bright centre only |
| Grid lines visible | Non-moving grid or Bucky malfunction | Fine parallel lines across image |

### When to Use a Grid

| Patient Thickness | Grid Recommendation |
|---|---|
| &lt;10 cm (extremities, paediatric) | **No grid** — scatter is minimal; grid increases dose unnecessarily |
| 10–15 cm | **Optional** — depends on kVp and examination |
| &gt;15 cm (adult body) | **Grid essential** — scatter dominates without it |

---

## Component 6: Image Receptors

The image receptor captures the spatial pattern of X-ray transmission through the patient and converts it into a usable image. Three generations of image receptor technology are relevant to clinical practice:

### Generation 1: Film-Screen Radiography

Film-screen systems were the standard for over 80 years (1920s–2000s) and remain in limited use today:

**Components:**
- **Intensifying screens**: Fluorescent phosphor layers (calcium tungstate, rare-earth phosphors) that convert X-ray photons to visible light — amplifying the exposure to the film by a factor of 50–100×
- **X-ray film**: Double-coated silver halide emulsion on polyester base; exposed by visible light from the screens
- **Film cassette**: Light-tight housing ensuring close screen-film contact

**Image formation:**
1. X-ray photons strike intensifying screens → visible light emitted
2. Light exposes silver halide crystals in film emulsion
3. Exposed film developed in chemicals → metallic silver deposited → black areas on film
4. Fixed and washed → permanent image

**Key characteristics:**
- Analogue — fixed optical density; cannot be post-processed
- Narrow **latitude** (exposure range producing acceptable images)
- **Spatial resolution**: 5–10 line pairs/mm
- Chemical processing required (darkroom, developer, fixer)
- Physical storage of film jackets required

### Generation 2: Computed Radiography (CR)

CR replaced film-screen systems in the 1990s–2000s, using the same cassette-based workflow but producing digital images:

**Detector: Photostimulable Phosphor (PSP) plate**

- **Material**: Barium fluorohalide doped with europium (BaFBr:Eu²⁺) — most common
- **Mechanism**:
  1. X-ray photons absorbed by phosphor → electrons excited to **metastable energy states** (electron traps)
  2. Trapped electrons stored in proportion to local X-ray exposure
  3. Cassette inserted into CR reader → **red laser beam** scans the plate
  4. Laser energy releases electrons from traps → electrons fall to ground state → emit **blue-green light** (photostimulated luminescence, PSL)
  5. Emitted light detected by photomultiplier tube → digitised → image
  6. Plate **erased** by bright white light → reused

**Key characteristics:**
- Wide exposure latitude — accepts a broader range of exposures than film (forgiving of under/overexposure)
- **Spatial resolution**: 2.5–5 lp/mm (lower than film-screen but adequate for most clinical uses)
- Delayed readout — plate must be physically transported to reader
- Plate reusable (typically 10,000+ uses before replacement)
- No darkroom required
- **Exposure creep**: Wide latitude means overexposure is not detected as an overexposed (dark) image — the system compensates digitally, leading to inadvertent dose increases over time

<div className="book-keypoint">

**Exposure creep** is one of the most important radiation safety hazards associated with CR systems. Because a PSP plate will produce a visually acceptable image over a 100-fold range of exposures, overexposure is not immediately apparent — the system automatically rescales the image brightness. Without active monitoring of **Exposure Index (EI)** values, departments using CR can develop a pattern of progressively increasing patient doses. All CR systems provide an EI number; regular audit of EI against target values is a regulatory requirement in many countries.

</div>

### Generation 3: Digital Radiography (DR)

DR flat-panel detectors (FPDs) are the current state of the art, providing real-time digital images without a separate readout step:

#### Indirect Conversion FPD

**Structure (most common type):**

| Layer | Material | Function |
|---|---|---|
| Scintillator | Caesium iodide (CsI) or Gd₂O₂S:Tb | Converts X-ray photons to visible light |
| Photodiode array | Amorphous silicon (a-Si) | Converts light to electrical charge |
| Thin-film transistor (TFT) array | Amorphous silicon | Switches charge readout for each pixel |
| Readout electronics | ASIC circuits | Digitises charge signals |

**Why CsI is preferred:**
- **Columnar crystal structure** (grown as needle-like crystals): confines lateral light spread, improving spatial resolution compared to flat phosphor layers
- Higher X-ray absorption than Gd₂O₂S for the same thickness
- Can be deposited directly onto the a-Si substrate

**Image formation:**
1. X-ray photons → CsI scintillator → visible light
2. Visible light → a-Si photodiodes → electrical charge
3. TFT array addressed row-by-row → charge read from each pixel
4. Charge digitised → image matrix (typically 2,048 × 2,048 to 3,000 × 3,000 pixels)
5. Image displayed within 2–4 seconds on console

#### Direct Conversion FPD

**Structure:**

| Layer | Material | Function |
|---|---|---|
| X-ray photoconductor | Amorphous selenium (a-Se) | Directly converts X-ray photons to charge |
| Charge collection electrodes | Top electrode + pixel electrodes | Apply field to collect charges |
| TFT array | Amorphous silicon | Reads out charge pixel by pixel |

**Mechanism:**
1. X-ray photon absorbed by a-Se → electron-hole pairs generated directly
2. High voltage (~5,000 V across 1 mm a-Se layer) sweeps charges to collection electrodes
3. Charge at each pixel proportional to local X-ray fluence
4. TFT array reads out → digitises → image

**Advantages of direct conversion:**
- No intermediate light conversion step → no lateral light spread → **superior spatial resolution**
- Higher detective quantum efficiency (DQE) at low doses
- Particularly valuable in **mammography** (requires highest spatial resolution)

### DR vs CR vs Film-Screen Comparison

| Parameter | Film-Screen | CR | DR (Indirect) | DR (Direct) |
|---|---|---|---|---|
| Spatial resolution | 5–10 lp/mm | 2.5–5 lp/mm | 3–5 lp/mm | 5–7 lp/mm |
| DQE (at 1 lp/mm) | ~25% | ~25–30% | ~55–65% | ~65–75% |
| Latitude | Narrow | Wide | Wide | Wide |
| Image availability | After processing | After readout (1–2 min) | Real-time (2–4 s) | Real-time (2–4 s) |
| Post-processing | None | Yes | Yes | Yes |
| Dose efficiency | Moderate | Moderate | Good | Very good |
| Patient throughput | Low | Moderate | High | High |
| Fluoroscopy capability | No | No | Yes (some systems) | Yes |
| Cost | Low | Moderate | High | Very high |

<div className="book-pearl">

**Detective Quantum Efficiency (DQE)** is the single most important metric of detector performance in digital radiography. It measures how efficiently the detector converts input X-ray signal (signal-to-noise ratio squared at input) to output signal: **DQE = SNR²_out / SNR²_in**. A DQE of 65% means the detector uses 65% of the available X-ray information. A higher DQE detector produces the same image quality at **lower patient dose** — or better image quality at the same dose. This is why DR FPDs have largely replaced CR: their substantially higher DQE translates directly into lower patient exposures without sacrificing diagnostic quality.

</div>

### Wireless Flat-Panel Detectors

Modern DR systems use wireless FPDs that can be placed in the Bucky tray, used in the cassette position, or used free-hand for portable radiography:

- **Battery-powered** → no cable connection required
- **Wi-Fi or UWB transmission** → image displayed on console within 4 seconds
- **Interoperable** → same detector panel used in table Bucky, wall stand, and portable examinations
- **Weight**: typically 3–4 kg → manageable for positioning
- **Impact resistance**: designed to survive clinical handling

---

## Component 7: Image Processing and Display

### Image Processing

Digital images from CR and DR systems undergo automatic processing before display:

**Histogram analysis:**
- The system analyses the pixel value distribution (histogram) to identify the useful exposure range
- Rescales image to standard display range → consistent appearance regardless of exposure level
- This is why CR/DR images look similar even when exposure varies by 2–3×

**Spatial frequency processing (edge enhancement):**
- High-frequency (fine detail) components amplified → sharper edges and fine structures
- Must be used cautiously — over-enhancement creates artificial edge artefacts

**Noise reduction:**
- Low-frequency noise (quantum mottle) reduced by smoothing algorithms
- Trade-off with spatial resolution

### Display Monitors

Diagnostic radiology monitors are subject to strict performance standards:

| Monitor Type | Luminance | Resolution | Application |
|---|---|---|---|
| Diagnostic (2 MP) | ≥250 cd/m² | 1,600 × 1,200 | General radiography |
| Diagnostic (3 MP) | ≥400 cd/m² | 2,048 × 1,536 | Chest, MSK detail |
| Mammography (5 MP) | ≥450 cd/m² | 2,048 × 2,560 | Mammography reporting |
| Colour diagnostic | ≥250 cd/m² | 1,920 × 1,200 | Nuclear medicine, PET, ultrasound |
| Clinical review (office) | Standard | Standard | Non-primary reporting only |

**DICOM GSDF (Greyscale Standard Display Function):**
All diagnostic monitors must be calibrated to the DICOM GSDF — a standardised perceptual response curve ensuring that equal steps in displayed greyscale correspond to equal steps in perceived brightness across the full luminance range. Without GSDF calibration, subtle low-contrast lesions may appear different on different monitors.

### PACS and DICOM

**PACS (Picture Archiving and Communication System):**

The PACS is the department-wide (and often hospital-wide) infrastructure for storing, retrieving, and distributing medical images:

| PACS Component | Function |
|---|---|
| Acquisition gateway | Receives images from modalities; converts to DICOM |
| Short-term archive (SAN) | Fast-access storage for recent studies (SSD/HDD RAID) |
| Long-term archive (NAS/cloud) | Compressed storage for older studies |
| Web server | Remote access for clinicians and reporting radiologists |
| Diagnostic workstations | High-specification reporting stations |
| RIS integration | Links images to radiology information system and patient records |

**DICOM (Digital Imaging and Communications in Medicine):**

DICOM is the universal standard for medical image storage, transmission, and display:
- **File format**: Each image is a DICOM file containing both the **pixel data** and a **header** with patient demographics, acquisition parameters, modality, date/time, and equipment identifiers
- **Network protocol**: DICOM defines how modalities communicate with PACS (C-STORE, C-FIND, C-MOVE services)
- **Structured reporting**: DICOM SR allows structured radiology reports linked to images
- **Ensures interoperability**: Any DICOM-compliant modality can communicate with any DICOM-compliant PACS, regardless of manufacturer

---

## System Geometry and Image Formation

### Key Distance Measurements

| Measurement | Abbreviation | Definition |
|---|---|---|
| Source-to-Image Distance | SID | Distance from focal spot to image receptor |
| Source-to-Object Distance | SOD | Distance from focal spot to the object being imaged |
| Object-to-Image Distance | OID | Distance from object to image receptor (OID = SID − SOD) |
| Focus-to-Skin Distance | FSD | Distance from focal spot to patient's skin surface |

### Magnification Factor

Every X-ray image is a **projected image** — the divergent beam magnifies objects that are not in contact with the image receptor:

**Magnification Factor (M) = SID / SOD = Image size / Object size**

**Or equivalently:**

**M = SID / (SID − OID)**

**Worked examples:**

*Standard chest PA at SID = 180 cm, mediastinum at OID ≈ 10 cm:*

M = 180 / (180 − 10) = 180/170 = **1.06** (6% magnification)

*AP abdomen at SID = 100 cm, spine at OID ≈ 15 cm:*

M = 100 / (100 − 15) = 100/85 = **1.18** (18% magnification)

*This is why PA chest is preferred over AP chest* — the heart lies close to the anterior chest wall, and the longer SID and posterior-to-anterior beam direction minimise cardiac magnification.

### Geometric Unsharpness (Penumbra)

The focal spot has a finite size (not a true point), creating a **penumbral shadow** around object edges:

**U_g = f × OID / SOD**

Where:
- U_g = geometric unsharpness (mm)
- f = focal spot size (mm)
- OID = object-to-image distance (mm)
- SOD = source-to-object distance (mm)

**To minimise geometric unsharpness:**
- Use the **smallest focal spot** practicable for the required output
- Maximise **SID** (longer distance → reduced penumbra for same OID)
- Minimise **OID** (place the anatomical area closest to the detector)

**Worked example:**

f = 0.6 mm, OID = 5 cm, SOD = 95 cm

U_g = 0.6 × 5/95 = **0.032 mm** (acceptable for most radiography)

At OID = 20 cm: U_g = 0.6 × 20/75 = **0.16 mm** (significant unsharpness)

### Standard SID Values

| Projection | Standard SID | Rationale |
|---|---|---|
| PA Chest | 180 cm (72 inches) | Minimise cardiac magnification; patient erect |
| General radiography | 100–115 cm (40–46 in) | Balance between dose and penumbra |
| Skull | 100 cm | Standard detail |
| Dental periapical | 20–30 cm | Short-distance periapical radiography |
| Mammography | 60–70 cm | Manufacturer-specified |
| Mobile/portable | 100 cm | Approximated with tape measure |

---

## Exposure Factors and Their Interactions

The radiographer controls four primary exposure parameters, each with specific and interrelated effects:

### kVp (Kilovolt Peak)

- Controls **beam quality** — the penetrating power and energy distribution of the X-ray beam
- Higher kVp → higher maximum photon energy → more penetrating beam
- Higher kVp → **more Compton scatter** relative to photoelectric effect → lower subject contrast
- Higher kVp → **less patient dose** per mAs (more photons reach the detector per unit input energy)
- Higher kVp → **greater patient volume** irradiated per examination (more penetrating)

**15% rule**: Increasing kVp by 15% approximately doubles beam intensity (equivalent to doubling mAs) while halving the required mAs. This reduces patient dose but also reduces contrast — used deliberately for high-contrast subjects (lung, bone) but avoided for low-contrast studies (soft tissue, abdomen).

### mAs (Milliampere-Seconds)

- Controls **beam quantity** — the number of photons in the beam
- Higher mAs → more photons → more detector exposure → less quantum noise → better low-contrast visibility
- mAs has **no effect on beam quality** (photon energies unchanged)
- Patient dose is **directly proportional to mAs**
- **Doubling mAs doubles patient dose** for the same kVp and geometry

### SID

- **Dose effect**: I ∝ 1/SID² — doubling SID reduces intensity to 25%; requires 4× mAs to maintain detector exposure
- **Magnification effect**: Greater SID → less magnification → sharper image
- **Penumbra effect**: Greater SID → less geometric unsharpness
- Standard compromise: 100 cm for most projections (sufficient sharpness; manageable dose increase vs 150 cm)

### Field Size

- **Dose effect**: Larger field → more tissue irradiated → higher effective dose (even if entrance dose unchanged)
- **Scatter effect**: Larger field → more scattered photons → worse contrast
- **Always collimate to the clinical area of interest** — the single most effective dose reduction measure available at every examination

### Filtration

- **Added filtration** (aluminium, copper) removes low-energy photons that contribute dose but not image information
- Beam becomes **harder** (higher mean energy) → more penetrating
- UK/EU regulatory minimum: **2.5 mm Al equivalent** total filtration for tubes &gt;70 kVp
- Mammography uses K-edge filters (molybdenum, rhodium) tuned to specific energy ranges

### Summary of Exposure Factor Interactions

| Factor | ↑ Increases | ↓ Decreases | Patient Dose Effect |
|---|---|---|---|
| kVp ↑ | Penetration, scatter | Subject contrast, photoelectric | Slight decrease |
| mAs ↑ | Photon number, SNR | Quantum noise | Proportional increase |
| SID ↑ | Sharpness, field size | Intensity, magnification | Decrease (inverse square) |
| Field size ↓ | — | Scatter, irradiated volume | Decrease |
| Filtration ↑ | Mean energy | Photon number, skin dose | Decrease (lower-energy removed) |
| Grid ↑ ratio | Scatter rejection | Primary transmission | Increase (higher mAs needed) |

---

<div className="book-summary">

- The X-ray imaging system is a **linked chain** of seven major components: generator, X-ray tube, collimator, patient table, anti-scatter grid, image receptor, and display/archiving. Optimising each component is essential for maximising image quality while minimising patient dose.
- **High-frequency generators** (&lt;1% ripple) are the modern standard — providing near-constant kVp, precise digital control, compact size, and lower patient dose compared to single-phase or three-phase predecessors.
- **AEC** (Automatic Exposure Control) terminates the exposure when the image receptor has received a pre-set dose — ensuring consistent image quality regardless of patient size. The correct AEC chamber must be selected for the anatomical area of interest.
- **Collimation** to the clinical area of interest is the single most impactful dose-reduction measure available at every radiographic examination — it simultaneously reduces patient dose and improves image contrast by limiting scatter production.
- **Anti-scatter grids** absorb obliquely travelling scattered photons. Grid ratio (5:1–16:1) governs scatter rejection and the Bucky factor (mAs increase required). Grids are not needed for parts &lt;10 cm thick.
- **DR flat-panel detectors** (CsI/a-Si indirect conversion or a-Se direct conversion) are the current standard, offering real-time readout, wide exposure latitude, superior DQE (55–75%), and high spatial resolution. DQE is the key metric linking detector performance to patient dose.
- **Magnification** (M = SID/SOD) and **geometric unsharpness** (U_g = f × OID/SOD) are governed by focal spot size, SID, and OID. Minimising OID and maximising SID reduces both magnification and penumbra.
- **kVp** controls beam quality (penetration and contrast); **mAs** controls beam quantity (photon number and noise). Patient dose is proportional to mAs; increasing kVp with reduced mAs can maintain image quality at lower dose.
- **PACS** and **DICOM** provide the infrastructure for storing, retrieving, and transmitting digital images — ensuring interoperability across equipment manufacturers and enabling remote reporting, teleradiology, and AI-based image analysis.
- All digital systems require **Exposure Index (EI)** monitoring to prevent exposure creep — the gradual dose escalation that occurs when wide-latitude detectors mask overexposure by automatic brightness normalisation.

</div>
