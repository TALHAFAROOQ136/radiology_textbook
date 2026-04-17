---
id: concepts-of-radiographic-image-quality
title: "Radiographic Image Quality"
sidebar_label: "Radiographic Image Quality"
---

# Concepts of Radiographic Image Quality

A radiographic image is only as valuable as the diagnostic information it contains. An image that is too noisy to detect a subtle pulmonary nodule, too blurred to resolve a hairline fracture, or too low in contrast to distinguish a liver metastasis from surrounding parenchyma fails its fundamental purpose — regardless of how efficiently it was acquired. Image quality is not an aesthetic concern: it is the direct determinant of diagnostic accuracy, and diagnostic accuracy is the whole point of the examination. This chapter provides a rigorous, clinically anchored account of the five fundamental image quality parameters — their physical basis, their measurement, the factors that control them, and the trade-offs between them.

<div className="book-objectives">

- Define and distinguish the five fundamental parameters of radiographic image quality: density/brightness, contrast, spatial resolution, noise, and artefacts
- Explain the concepts of subject contrast, receptor contrast, and displayed image contrast and the factors affecting each
- Define spatial resolution and describe how it is measured using the modulation transfer function (MTF) and line pairs per millimetre
- Distinguish between geometric unsharpness, motion unsharpness, and receptor unsharpness and calculate geometric unsharpness from focal spot size, OID, and SOD
- Define quantum noise, describe its statistical basis, and explain how it relates to dose and image quality
- Define the signal-to-noise ratio (SNR) and detective quantum efficiency (DQE) and explain their clinical significance
- Describe the characteristic curve (H&D curve) of film and explain its relevance to digital receptor response curves
- Explain the concepts of magnification and distortion as sources of geometric image degradation
- Apply the exposure factors (kVp, mAs, SID, filtration, grid) to predict and optimise image quality
- Describe the key quality assurance tests used to maintain radiographic image quality in a clinical department

</div>

---

## The Five Fundamental Image Quality Parameters

Radiographic image quality is described by five interdependent parameters. No single parameter can be optimised in complete isolation — improving one often compromises another. The radiographer's skill lies in achieving the optimal balance for each clinical examination.

| Parameter | Measures | Primary Control | Clinical Consequence if Poor |
|---|---|---|---|
| **Density / Brightness** | Overall image exposure level | mAs | Anatomy not visible; image repeated |
| **Contrast** | Difference between adjacent areas | kVp, scatter | Lesions not detected |
| **Spatial Resolution** | Fine detail / sharpness | Focal spot, OID, SID | Fine structures not resolved |
| **Noise** | Random variation / quantum mottle | mAs, detector type | Low-contrast lesions masked |
| **Artefacts** | Non-anatomical image features | Multiple causes | Misdiagnosis; repeat imaging |

---

## Parameter 1: Density and Brightness

### Definition

**Radiographic density** (in film radiography) is the degree of blackening of the processed film — the quantity of metallic silver deposited per unit area. It is measured as **optical density (OD)**:

**OD = log₁₀ (I₀ / I_transmitted)**

Where I₀ = incident light and I_transmitted = light transmitted through the film.

- OD = 0: completely transparent (no blackening)
- OD = 1: 90% of light absorbed (10% transmitted)
- OD = 2: 99% of light absorbed (1% transmitted)
- OD = 3: 99.9% of light absorbed (0.1% transmitted)

**In digital radiography**, the equivalent concept is:
- **Pixel value** (raw detector output): proportional to detected X-ray fluence
- **Displayed brightness**: post-processed for viewing (window/level adjustment)
- **Exposure Index (EI)**: a standardised metric of detector exposure used for quality assurance

### The Characteristic Curve (H&D Curve) of Film

The relationship between X-ray exposure and optical density in film radiography is described by the **Hurter and Driffield (H&D) curve** (also called the sensitometric curve or D-log E curve):

**Regions of the H&D curve:**

| Region | Name | Characteristics |
|---|---|---|
| Far left | Toe | Very low density; little response to exposure changes |
| Rising central portion | Straight-line (linear) region | Optimal density range; maximum contrast |
| Upper plateau | Shoulder | Density approaches maximum; decreasing contrast |
| Maximum plateau | D_max | Maximum achievable density on this film |

**Key parameters derived from the H&D curve:**

- **Base + fog**: The minimum optical density even without exposure (base density of clear film + chemical fog during processing)
- **Speed (sensitivity)**: The exposure required to produce a defined reference density (typically OD = 1 above base+fog) — plotted as a single point on the H&D curve; higher speed = curve shifted left
- **Gamma (γ) or Gradient**: The slope of the straight-line portion — measures contrast reproduction. Higher γ = steeper slope = higher contrast.
- **Latitude**: The range of exposures that produce diagnostically useful densities (within the straight-line region)
- **D_max**: Maximum achievable optical density

**Film latitude and contrast are inversely related:**
- **High-contrast film** (high γ): steep curve → large density difference for small exposure difference → excellent contrast but narrow latitude (easily under- or overexposed)
- **Wide-latitude film** (low γ): shallow curve → gentle response → lower contrast but tolerates wider exposure variation

### Digital Receptor Response

Digital detectors (CR, DR) differ fundamentally from film in their exposure response:

- **Linear response**: Digital detectors respond linearly across a wide exposure range — pixel value ∝ detector exposure
- **Wide latitude**: A digital detector can produce a diagnostically useful image over an exposure range of **1:10,000** (compared to approximately 1:40 for film)
- **Post-processing compensation**: The detector's wide latitude means the displayed image is automatically normalised in brightness — overexposure is not visible as a dark image (it is digitally corrected to normal brightness)

This is the **exposure creep** hazard: because overexposure produces a visually acceptable image, systematic overexposure may go undetected without active monitoring of the Exposure Index.

### Factors Controlling Density / Brightness

**Primary control — mAs:**
- Doubling mAs doubles the number of photons reaching the detector → doubles detector exposure → increases density proportionally
- The most direct and reliable control of image brightness

**Secondary control — kVp:**
- Increasing kVp increases beam output (∝ kVp²) and beam penetration
- More photons reach the detector per unit mAs → increased density
- The **15% rule**: increasing kVp by 15% approximately doubles density equivalent (requires halving mAs to maintain density)

**Other factors affecting density:**

| Factor | Effect on Density |
|---|---|
| SID increase | Decreases (inverse square law: I ∝ 1/d²) |
| SID decrease | Increases |
| Patient thickness increase | Decreases (more attenuation) |
| Added filtration | Decreases (removes photons) |
| Grid use | Decreases (grid absorbs primary beam — needs mAs increase) |
| Faster receptor (higher speed) | Increases (same exposure → more signal) |
| Processing (film) | Chemical development affects final OD |

<div className="book-keypoint">

In digital radiography, the **Exposure Index (EI)** replaces optical density as the quality assurance metric for detector exposure. Each manufacturer uses a proprietary EI system (Fuji S-value, Agfa lgM, Kodak EI, Carestream EI) but the principle is universal: the EI number reflects how much radiation the detector received. A **target EI** is established for each examination type; the actual EI from each examination is compared against target. EI values consistently above target indicate systematic overexposure — patient dose is higher than necessary. EI values below target indicate underexposure — image noise is excessive and repeats may be needed. AAPM and IHE have developed the **Exposure Index for Digital Radiography** standard (IEC 62494-1) to harmonise EI values across manufacturers.

</div>

---

## Parameter 2: Contrast

### Defining Contrast

**Radiographic contrast** is the **visible difference in brightness (density) between adjacent areas** of the image. It is what allows the eye to distinguish one anatomical structure from another.

Contrast is not a single entity — it is the product of three sequential stages, each contributing to the final visible difference:

**1. Subject contrast → 2. Receptor contrast → 3. Displayed image contrast**

### Stage 1: Subject Contrast

**Subject contrast** is the difference in X-ray intensity transmitted through adjacent regions of the patient — before the beam reaches the detector. It is determined entirely by the patient's anatomy and the X-ray beam characteristics.

**Subject contrast depends on:**

- **Differential attenuation**: The difference in linear attenuation coefficients (Δμ) between adjacent tissues multiplied by their thickness difference (Δx): Subject contrast ∝ Δμ × Δx
- **Photon energy (kVp)**: Lower kVp → greater photoelectric fraction → larger Δμ between tissues of different Z → higher subject contrast
- **Tissue atomic number (Z)**: Higher Z difference → greater Δμ → higher contrast (bone vs soft tissue: high contrast; liver vs spleen: very low contrast)
- **Tissue density**: Denser tissue attenuates more → greater Δμ
- **Scatter radiation**: Compton scatter adds a diffuse background that reduces the relative difference between bright and dark areas → **reduces subject contrast**

**Subject contrast at different kVp settings:**

| Tissue Pair | Subject Contrast at 60 kVp | Subject Contrast at 100 kVp | Subject Contrast at 120 kVp |
|---|---|---|---|
| Bone vs soft tissue | High | Moderate | Lower |
| Soft tissue vs fat | Moderate | Low | Very low |
| Air vs soft tissue | Very high | Very high | High |
| Iodine vs soft tissue | Extremely high | Very high | High |

### Stage 2: Receptor Contrast

**Receptor contrast** is the ability of the image receptor to amplify (or reduce) the subject contrast it receives.

**For film receptors:**
Receptor contrast is determined by the **gamma (γ)** of the film — the gradient of the H&D curve in its linear region. A high-γ film amplifies small exposure differences into large density differences.

**For digital receptors:**
- The detector responds linearly → it does not inherently amplify contrast
- Contrast amplification occurs **post-acquisition** through **window and level (W/L)** adjustment:
  - **Window width (W)**: The range of pixel values mapped to the display greyscale. Narrow window → high displayed contrast (small range mapped to full greyscale). Wide window → low displayed contrast.
  - **Window level (L)**: The centre pixel value of the window — determines which densities are displayed at mid-grey.

**Window and level in clinical practice:**

| Examination | Window Width | Window Level | Effect |
|---|---|---|---|
| Chest (lung windows) | 1,500 HU | −500 HU | High contrast for lung detail |
| Chest (mediastinal windows) | 400 HU | +40 HU | Moderate contrast for soft tissue |
| Brain CT | 80 HU | +35 HU | Narrow window; high grey matter contrast |
| Bone CT | 2,000 HU | +400 HU | Wide window; full bone density range |
| Liver CT | 150 HU | +60 HU | Narrow window; liver/lesion contrast |
| Abdomen (soft tissue) | 350 HU | +40 HU | Standard abdominal window |

### Stage 3: Displayed Image Contrast

The final contrast seen by the reporting radiologist depends on both receptor contrast and the display system characteristics:

- **Monitor calibration**: DICOM GSDF (Greyscale Standard Display Function) calibration ensures that equal steps in pixel value correspond to equal steps in perceived brightness across the full luminance range
- **Ambient lighting**: Room lighting affects the perceivable contrast; reporting rooms should have controlled low-level ambient lighting
- **Monitor luminance**: Diagnostic monitors must achieve minimum luminance levels (250–450 cd/m² depending on application)
- **Viewing distance**: The human visual system has limited spatial frequency response; viewing distance affects perceived contrast of fine detail

### Factors that Reduce Contrast: Scatter Radiation in Detail

Scatter radiation is the most important cause of **contrast reduction** in clinical radiography:

**Mechanism:**
- Primary photons carry **spatial information** — their intensity at any detector point reflects the attenuation of the specific tissue column they traversed
- Scattered photons carry **no valid spatial information** — they originated from one place in the patient but are detected at a different location, adding a diffuse uniform background

**Effect on contrast:**
If S = scatter intensity and P = primary intensity at any detector point:

**Contrast with scatter = Contrast (primary only) / (1 + S/P)**

Where S/P = Scatter-to-Primary Ratio (SPR)

- SPR = 0.5 (moderate scatter): contrast reduced to 1/(1+0.5) = **67%** of ideal
- SPR = 3.0 (adult abdomen): contrast reduced to 1/(1+3.0) = **25%** of ideal
- SPR = 9.0 (lateral lumbar): contrast reduced to 1/(1+9.0) = **10%** of ideal

**Methods to reduce scatter and restore contrast:**

1. **Collimation**: Smaller field size → less scatter-producing volume → lower SPR. Most effective and simplest intervention.
2. **Anti-scatter grid**: Lead strips absorb oblique scatter at the detector. Grid ratio 8:1–12:1 for body radiography.
3. **Air gap**: Increased OID — scatter diverges; fewer reach the detector.
4. **Compression** (mammography): Thinner breast → less scatter.
5. **Higher kVp + reduced mAs**: Produces more forward-directed scatter (less lateral scatter at detector) — modest effect.
6. **Post-processing scatter correction** (digital): Software algorithms estimate and subtract scatter contribution.

<div className="book-definition">

**Radiographic contrast** is the visible difference in brightness between adjacent areas of an image, arising from differential X-ray attenuation (subject contrast), amplified or modified by the detector response (receptor contrast), and determined ultimately by the window and level settings applied to the displayed image. The dominant degrader of contrast in clinical radiography is **Compton scattered radiation**, which adds a diffuse, spatially non-specific background to the detector exposure — reducible by collimation, grids, and air gap technique.

</div>

---

## Parameter 3: Spatial Resolution

### Definition and Measurement

**Spatial resolution** is the ability of an imaging system to represent two closely adjacent, high-contrast structures as **separate and distinct** in the image. It determines the finest anatomical detail that can be visualised.

**Units of measurement:**
- **Line pairs per millimetre (lp/mm)**: The number of alternating high-contrast line/space pairs that can be resolved within one millimetre. Higher lp/mm = better resolution.
- A 1 lp/mm system can just distinguish lines separated by 0.5 mm (0.5 mm line + 0.5 mm space = 1 mm per pair)

**Spatial resolution of clinical imaging systems:**

| System | Limiting Resolution | Pixel Size |
|---|---|---|
| Screen-film radiography | 5–10 lp/mm | 50–100 μm |
| Computed radiography (CR) | 2.5–5 lp/mm | 100–200 μm |
| DR flat-panel (indirect CsI) | 3.5–5 lp/mm | 100–143 μm |
| DR flat-panel (direct a-Se) | 5–7 lp/mm | 70–100 μm |
| Digital mammography (FFDM) | 8–15 lp/mm | 50–100 μm |
| Computed Tomography (CT) | 0.5–1.5 lp/mm | 0.3–0.6 mm |
| MRI (1.5 T clinical) | 0.5–2 lp/mm | 0.3–1.0 mm |

### The Modulation Transfer Function (MTF)

The **Modulation Transfer Function (MTF)** is the complete, objective characterisation of a system's spatial resolution at all spatial frequencies — superior to a single limiting resolution number.

**Definition:**
For a sinusoidal input pattern with contrast C_input at spatial frequency f:

**MTF(f) = C_output(f) / C_input(f)**

- MTF = 1.0: Perfect transfer — output contrast equals input contrast at this frequency
- MTF = 0.5: Output contrast is 50% of input — fine detail becoming blurred
- MTF = 0: No transfer — fine detail is completely lost

**Clinical significance of MTF:**
- The **MTF50** (frequency where MTF = 0.5) is a useful single-number summary of resolution
- Microcalcification detection in mammography requires good MTF at 5–10 lp/mm
- Lung nodule detection in CT requires adequate MTF at 1–2 lp/mm

**System MTF:** The total MTF of an imaging chain is the product of the MTFs of each component:

**MTF_system = MTF_focal spot × MTF_motion × MTF_detector × MTF_display**

Each blurring component multiplies the system MTF — one severely blurred component degrades the entire chain regardless of other components' quality.

### Sources of Unsharpness

Unsharpness is the complement of resolution — the degree of blurring present in an image. There are three principal sources:

#### 1. Geometric Unsharpness (Penumbra)

Arises because the focal spot has a finite size (not a true point source). Each point on the object casts a slightly blurred "penumbra" rather than a sharp "umbra":

**U_g = f × OID / SOD**

Where:
- U_g = geometric unsharpness (mm)
- f = focal spot size (mm)
- OID = object-to-image distance (mm)
- SOD = source-to-object distance (mm)

**Worked examples:**

*Fine focus (f = 0.3 mm), OID = 3 cm, SOD = 97 cm:*
U_g = 0.3 × 30/970 = **0.009 mm** (negligible)

*Broad focus (f = 1.2 mm), OID = 10 cm, SOD = 90 cm:*
U_g = 1.2 × 100/900 = **0.133 mm** (clinically significant)

*Broad focus, OID = 25 cm (e.g., lateral hip not against table):*
U_g = 1.2 × 250/750 = **0.40 mm** (severe unsharpness)

**Minimising geometric unsharpness:**

| Strategy | Effect on U_g | Formula Basis |
|---|---|---|
| Use fine focal spot | Reduces f → U_g decreases | U_g ∝ f |
| Increase SID | Increases SOD → U_g decreases | U_g ∝ 1/SOD |
| Decrease OID | U_g decreases | U_g ∝ OID |
| Place body part close to detector | Minimises OID | U_g ∝ OID |

#### 2. Motion Unsharpness

Arises from movement of the patient, organ, or structure during exposure:

**Sources of motion:**
- **Voluntary motion**: Patient movement (prevented by immobilisation, instructions, cooperation)
- **Involuntary motion**: Cardiac pulsation, bowel peristalsis, respiratory motion (reduced by breath-hold, short exposure times)
- **Equipment motion**: Vibration of tube or table (prevented by mechanical stability)

**Motion unsharpness = velocity × exposure time**

For a structure moving at 1 cm/s with an exposure time of 100 ms:
Motion blur = 1 cm/s × 0.1 s = **1 mm** of blurring (clinically significant)

**Strategies to minimise motion unsharpness:**

| Strategy | Application |
|---|---|
| Short exposure time | Always; especially chest, cardiac, paediatric |
| High mA (with reduced time, same mAs) | Maintains exposure while reducing time |
| Breath-hold instruction | Chest, abdomen, pelvis |
| Cardiac gating / triggering | CT coronary angiography, cardiac MRI |
| Immobilisation aids | Paediatrics, uncooperative patients |
| Grid suspended during exposure (Bucky) | Eliminates grid motion unsharpness |

#### 3. Receptor (Detector) Unsharpness

Inherent blurring within the image receptor itself:

**Film-screen systems:**
- Light emitted in the intensifying screen spreads laterally before reaching the film emulsion (lateral diffusion)
- Thicker screens → more light spread → more unsharpness, but higher speed
- Rare-earth phosphors (Gd₂O₂S, La₂O₂S) are more efficient → thinner screens possible → less spreading → better resolution

**CR photostimulable phosphor plates:**
- Laser beam used for readout has a finite width (~100 μm)
- Light released by photostimulation diffuses within the phosphor layer
- Limits resolution to approximately 2.5–5 lp/mm

**DR indirect flat-panel (CsI/a-Si):**
- CsI grown as columnar crystals that guide light to the photodiode array → reduced lateral spread compared to flat phosphor layers
- Resolution limited by pixel pitch (~143 μm for a 3000×3000 detector with 43 cm panel)

**DR direct flat-panel (a-Se):**
- Electron-hole pairs created directly by X-rays → collected by electric field directly to pixel electrode
- No lateral optical spread → superior resolution
- Resolution limited by pixel pitch (~70–100 μm)

### Total System Unsharpness

For independent sources of unsharpness, the total system unsharpness (U_total) is calculated by the root-sum-of-squares (RSS) rule:

**U_total = √(U_g² + U_m² + U_r²)**

Where U_g = geometric, U_m = motion, U_r = receptor unsharpness.

**The largest unsharpness component dominates the system.**

If U_g = 0.1 mm, U_m = 0.3 mm, U_r = 0.2 mm:
U_total = √(0.01 + 0.09 + 0.04) = √0.14 = **0.37 mm**

Motion is the limiting factor — improving focal spot size would have minimal benefit until motion is controlled.

---

## Parameter 4: Noise

### Definition and Types

**Image noise** is any unwanted variation in image density (or pixel value) that does not correspond to real anatomical structures. It masks true pathology, particularly low-contrast lesions.

**Types of noise in radiographic imaging:**

| Type | Source | Dominant System |
|---|---|---|
| **Quantum noise (mottle)** | Statistical variation in detected photons | All X-ray systems |
| **Electronic noise** | Amplifier and readout electronics | Digital systems |
| **Structured noise** | Fixed-pattern noise from detector non-uniformities | Digital systems |
| **Film graininess** | Random distribution of silver halide crystals | Film-screen |
| **Scatter noise** | Compton scattered photons | All X-ray systems |

### Quantum Noise — The Fundamental Limit

**Quantum noise** (quantum mottle) arises from the statistical nature of X-ray photon detection. Even with a perfectly uniform beam passing through a perfectly uniform phantom, the number of photons detected at each image pixel will vary randomly — because photon arrival follows **Poisson statistics**.

**For Poisson-distributed events:**
- Mean number of photons detected per pixel = N
- Standard deviation (noise) = √N
- Relative noise (noise-to-signal ratio) = √N / N = **1/√N**

**Key implications:**

- If N = 100 photons per pixel: noise = √100 = 10; relative noise = 10/100 = **10%**
- If N = 400 photons per pixel: noise = √400 = 20; relative noise = 20/400 = **5%**
- If N = 10,000 photons per pixel: noise = √10,000 = 100; relative noise = 100/10,000 = **1%**

**Doubling mAs doubles the number of detected photons → reduces relative noise by factor of √2 ≈ 1.41**

This is the fundamental reason that **increasing mAs reduces noise**: more photons → better Poisson statistics → smaller relative fluctuation → smoother image.

### Signal-to-Noise Ratio (SNR)

The **Signal-to-Noise Ratio (SNR)** quantifies image quality in terms of the detectability of a signal above background noise:

**SNR = Signal / Noise = N / √N = √N**

**SNR ∝ √(photons detected) ∝ √(mAs) ∝ √(dose)**

**Relationships:**

| Change | Effect on SNR | Effect on Noise |
|---|---|---|
| Double mAs | ×√2 = 1.41× improvement | Reduces by 29% |
| Quadruple mAs | ×2 improvement | Reduces by 50% |
| Double dose | ×√2 improvement | Reduces by 29% |
| Increase kVp (more photons/mAs) | Improves SNR | Reduces noise |
| Increase detector area (larger pixels) | Improves SNR | Reduces noise (more photons per pixel) |

**The dose–noise trade-off:**
To halve noise (reduce by 50%), SNR must double → requires **4× the dose** (quadruple mAs). This is the fundamental reason that achieving very low noise is expensive in terms of patient dose.

### Detective Quantum Efficiency (DQE)

The **Detective Quantum Efficiency (DQE)** is the most important single metric of detector performance — it measures how efficiently the detector converts the available X-ray signal into useful image information:

**DQE(f) = SNR²_output(f) / SNR²_input(f)**

- DQE = 1.0 (100%): Perfect detector — adds no noise; uses all available signal
- DQE = 0.5 (50%): Detector wastes 50% of the available signal — equivalent to throwing away half the photons
- DQE = 0.0: Detector adds so much noise that no signal is recoverable

**DQE values for clinical image receptors (at 1 lp/mm):**

| Receptor | DQE (at 1 lp/mm) | DQE (at 3 lp/mm) |
|---|---|---|
| Screen-film (400 speed) | 20–30% | 10–15% |
| Computed radiography (CR) | 20–30% | 10–20% |
| DR indirect (CsI/a-Si) | 55–70% | 40–55% |
| DR direct (a-Se) | 60–75% | 50–65% |
| Digital mammography (FFDM) | 50–70% | 40–60% |
| Photon-counting CT | ~90% | ~85% |

**Clinical significance of DQE:**

A DR detector with DQE = 65% requires approximately **half the dose** of a CR system with DQE = 30% to produce the same SNR (same image quality). This is not theoretical — it translates directly to a 40–50% dose reduction for every examination performed on DR vs CR systems, without any change in image quality. DQE is the physical justification for investing in higher-quality detectors.

<div className="book-keypoint">

The **Rose criterion** states that a signal must have an SNR of at least **5** to be reliably detected by the human observer (false-positive rate &lt;5%, false-negative rate &lt;5%). This sets the minimum acceptable SNR for clinical images. For a lesion of contrast C occupying N_lesion pixels, the SNR = C × √(N_lesion × N_photons/pixel). Detectability therefore improves with higher contrast (use of contrast agents), larger lesion size (spatial summation), and more photons per pixel (higher dose or better detector DQE). The Rose criterion explains why very small, low-contrast lesions require either high dose or very high DQE detectors to be reliably detected.

</div>

### Noise and Low-Contrast Detectability

**The critical clinical scenario for noise** is the detection of **low-contrast lesions**:

- A large, high-contrast lesion (e.g., a metallic foreign body, large bone fracture) is visible even in a noisy image — signal far exceeds noise
- A small, low-contrast lesion (e.g., early ground-glass pneumonia, subtle hepatic metastasis, microcalcification) may be completely masked by quantum noise

**Contrast-Detail (C-D) Diagrams:**
A contrast-detail phantom contains an array of circular discs of varying diameter and varying contrast. The smallest visible disc at each contrast level defines the imaging system's detection threshold:

- Better systems (lower noise, higher DQE): can detect smaller and lower-contrast objects
- Higher dose: shifts the C-D curve toward better detection
- Better detector: shifts the C-D curve without additional dose

---

## Parameter 5: Artefacts

### Definition

An **artefact** is any feature visible in the image that does not correspond to real anatomy. Artefacts range from minor (cosmetic, no clinical impact) to severe (mimicking pathology, causing misdiagnosis, necessitating repeat exposure).

### Geometric Artefacts

**Magnification:**
All radiographic images are magnified — structures between the focal spot and detector are enlarged in proportion to their distance from the detector:

**Magnification Factor (MF) = SID / SOD = SID / (SID − OID)**

- MF > 1 always (structures are always enlarged, never reduced)
- MF = 1.05 (5% magnification): clinically acceptable; standard positioning
- MF = 1.2 (20% magnification): significant; cardiac silhouette appears enlarged on AP chest
- MF = 1.5 (50% magnification): deliberate magnification radiography (magnification mammography)

**Size distortion** is caused by magnification — all structures appear larger than their true size.

**Shape distortion** results from misalignment of beam, object, and detector:

| Type | Cause | Appearance |
|---|---|---|
| **Foreshortening** | Object tilted toward the beam | Structure appears shorter than true length |
| **Elongation** | Object tilted away from beam or beam angled | Structure appears longer than true length |
| **Spatial distortion** | Curved detector surface | Periphery of image distorted in shape |

**Parallax (double image):**
In film-screen systems with thick cassettes, the front and back screens may image a structure at slightly different positions due to the parallax caused by beam divergence and screen separation.

### Equipment-Related Artefacts

| Artefact | Cause | Appearance |
|---|---|---|
| **Grid lines** | Stationary grid (Bucky malfunction) | Fine parallel white lines across image |
| **Moiré pattern** | Grid frequency aliasing with pixel pitch | Wavy interference pattern |
| **Fog** (film) | Light leak, radiation exposure, chemical contamination | Overall density increase; reduces contrast |
| **Minus density (film)** | Chemical contamination, water droplets | Clear spots or streaks on film |
| **CR plate scratches** | Physical damage to PSP plate | Linear white or dark lines |
| **CR plate ghosting** | Incomplete erasure of previous image | Faint previous image superimposed |
| **Dead pixels (DR)** | Defective a-Si photodiodes | Dark spots or clusters |
| **Panel stitching artefacts** | Junction between detector sub-panels | Faint lines at panel boundaries |

### Patient-Related Artefacts

| Artefact | Cause | Appearance |
|---|---|---|
| **Motion blur** | Patient, cardiac, or respiratory movement | Blurred edges; double contours |
| **Jewellery/clothing** | Metallic objects not removed | Opaque overlying shadows |
| **Hair braids** | Hair over field of view | Dense linear or nodular opacities |
| **Skin fold artefact** | Redundant skin fold over detector | Curvilinear density shadow mimicking pneumothorax |
| **Respiratory phase** | Image taken at wrong respiratory phase | Atelectasis or emphysema appearance on chest |
| **Patient rotation** | Non-standard positioning | Apparent cardiomegaly, spine curvature |

### CT-Specific Artefacts

| Artefact | Cause | Clinical Impact |
|---|---|---|
| **Streak artefacts** | Metal implants (hip prosthesis, dental amalgam) | Severe local image degradation |
| **Beam hardening (cupping)** | Differential hardening across uniform phantom | Falsely low CT numbers centrally |
| **Ring artefacts** | Faulty detector element in 3rd-generation CT | Concentric ring superimposed on image |
| **Partial volume artefact** | Structure smaller than slice thickness | CT number represents average of included voxels |
| **Motion artefact (cardiac)** | Cardiac motion during acquisition | Blurring of cardiac structures |
| **Windmill artefact** | Helical pitch and reconstruction interactions | Alternating bright/dark bands at bone-soft tissue interfaces |

<div className="book-pearl">

The **skin fold artefact** on a chest radiograph is a classic diagnostic trap. A redundant skin fold, particularly in elderly or thin patients, produces a curvilinear density overlying the lung that closely mimics the visceral pleural line of a **pneumothorax**. Unlike a true pneumothorax, however, the skin fold line:
- Extends **beyond** the chest wall margins (a true pleural line cannot)
- Does not follow the lung contour
- Lung vessels are visible on **both** sides of the line (in pneumothorax, no vessels beyond the pleural line)
Recognition of this artefact prevents unnecessary emergency chest drain insertion — a real clinical consequence of image quality knowledge.

</div>

---

## Geometric Factors in Image Formation

### The Geometry of the Radiographic System

The complete geometric relationship between focal spot (F), object (O), and image receptor (I) determines three key image properties:

**Source-to-Image Distance (SID):** Focal spot to detector
**Source-to-Object Distance (SOD):** Focal spot to object
**Object-to-Image Distance (OID):** Object to detector (OID = SID − SOD)

### Magnification Calculation and Control

**MF = SID / SOD = SID / (SID − OID)**

**Clinical magnification values:**

| Projection | SID | Typical OID | MF | Clinical Implication |
|---|---|---|---|---|
| PA chest | 180 cm | ~10 cm (heart) | 1.06 | Minimal cardiac magnification |
| AP chest (portable) | 100 cm | ~20 cm (heart) | 1.25 | Apparent cardiomegaly — normal finding |
| PA hand | 100 cm | ~0 cm | 1.0 | Contact → no magnification |
| AP pelvis | 100 cm | ~15 cm | 1.18 | Moderate magnification |
| Magnification mammography | 65 cm | 25 cm | 1.62 | Deliberate 1.6× magnification |

**This is why PA chest must never be compared with AP portable** for cardiac size assessment — the magnification difference alone accounts for a substantial apparent size difference.

### True Object Size Calculation

If the magnification factor is known, the true object size can be calculated:

**True size = Image size / MF**

**Example:** A pulmonary nodule measures 18 mm on a PA chest image (SID 180 cm, estimated SOD 170 cm):
MF = 180/170 = 1.06
True size = 18/1.06 = **17 mm**

---

## Receptor Characteristics

### Speed (Sensitivity)

**Speed** (or sensitivity) refers to the amount of radiation required by the receptor to produce a diagnostically useful image:

- **High-speed system**: Less radiation required → lower patient dose → trade-off with more noise (quantum mottle)
- **Low-speed system**: More radiation required → higher patient dose → lower noise → better image quality

**Speed groups** (film-screen systems):
- Speed 100 (detail): High resolution; used for extremities
- Speed 200: General radiography
- Speed 400: Standard general use
- Speed 800: High-speed; used for patients who cannot cooperate (children, trauma)

**Digital equivalence:** Digital systems are assigned a nominal "equivalent speed" based on their typical operating mAs relative to a reference film-screen system.

### Dynamic Range

**Dynamic range** is the ratio of the maximum to minimum detectable signal:

| Receptor | Dynamic Range |
|---|---|
| Film (diagnostic) | ~1:40 |
| Computed radiography (CR) | ~1:10,000 |
| Digital radiography (DR) | ~1:10,000 |
| CT detector | ~1:1,000,000 |

The wide dynamic range of digital systems is what enables a single acquisition to simultaneously display the lungs (very low attenuation) and the mediastinum (moderate attenuation) — impossible with film.

---

## Quality Assurance for Radiographic Image Quality

### Why Quality Assurance Is Essential

Image quality parameters are not static — they degrade over time due to:
- X-ray tube focal spot enlargement (filament evaporation, anode pitting)
- kVp calibration drift (generator ageing)
- Detector non-uniformities (dead pixels accumulating in DR panels)
- Monitor luminance decline (backlight ageing)
- Processing chemistry deterioration (film systems)

**Regular, systematic QA testing** detects degradation before it affects clinical images — preventing both diagnostic errors and unnecessary patient dose from repeat exposures.

### Key QA Tests for Radiographic Systems

**1. kVp accuracy and reproducibility**
- Test device: Non-invasive kVp meter (ionisation chamber or solid-state detector with energy discrimination)
- Frequency: At acceptance testing, then annually or after generator servicing
- Tolerance: ±5% of indicated kVp (e.g., 80 kVp setting should produce 76–84 kVp)

**2. Timer accuracy and reproducibility**
- Short exposure times are hardest to control accurately
- Tolerance: ±5% for times ≥10 ms; ±2 ms for times &lt;10 ms

**3. Radiation output (dose) reproducibility**
- Measures mAs-to-dose consistency
- Tolerance: ±10% variation in output between exposures at same settings

**4. HVL (beam quality)**
- Confirms adequate filtration
- Ensures beam is not too soft (excess dose) or too hard (loss of contrast)
- Minimum HVL requirements apply (2.5 mm Al at 80 kVp)

**5. Focal spot size measurement**
- Methods: Pinhole camera, slit camera, star pattern, edge method
- Focal spot size increases with use (filament thinning, anode pitting)
- Tolerance: IEC allows up to 50% increase in nominal focal spot size before replacement

**6. Exposure Index (EI) audit (digital systems)**
- Monthly review of departmental EI values against target values
- Identifies systematic over- or underexposure
- Allows technique adjustment before repeat rate or dose increases are noticed

**7. Spatial resolution testing**
- Bar pattern phantoms or edge method (Modulation Transfer Function)
- Tolerance: should meet manufacturer specification at acceptance testing
- Useful to detect focal spot enlargement or detector degradation

**8. Contrast-detail analysis**
- CDRAD or similar phantom
- Detects changes in noise characteristics and contrast response
- Sensitive to detector damage, processing changes, and exposure errors

**9. Artefact survey**
- Regular acquisition of flat-field images (uniform phantom or blank exposure)
- Dead pixels, panel non-uniformities, and structured noise patterns visible
- DR detectors require periodic calibration (flat-field and dark-field correction maps updated)

**10. Monitor quality assurance**
- AAPM TG-18 test patterns for diagnostic monitors
- Tests: luminance, contrast, resolution, uniformity, glare, geometric distortion
- Minimum luminance for diagnostic reporting monitors: 250–450 cd/m²
- Frequency: monthly user checks; annual medical physicist assessment

<div className="book-important">

Under **IR(ME)R 2017** (UK) and equivalent legislation in other jurisdictions, the employer must implement a **Quality Assurance programme** for all radiographic equipment used for medical exposures. This is a legal requirement, not a recommendation. The programme must include:
- Acceptance testing before clinical use
- Routine performance testing at defined intervals
- Reference levels for image quality parameters
- Correction procedures when limits are exceeded
- Documentation and audit trails

Failure to maintain an adequate QA programme is a statutory breach and may result in regulatory enforcement action. More importantly, it exposes patients to unnecessary dose from suboptimal equipment.

</div>

---

<div className="book-summary">

- Radiographic image quality is described by five parameters: **density/brightness** (controlled by mAs), **contrast** (controlled by kVp and scatter), **spatial resolution** (controlled by focal spot, OID, SID), **noise** (quantum mottle controlled by mAs and detector DQE), and **artefacts** (multiple causes).
- **Density** in film systems is measured as optical density (OD = log₁₀ I₀/I). The H&D curve defines film speed, gamma (contrast), and latitude. Digital systems use the **Exposure Index (EI)** — wide detector latitude means overexposure is invisible without active EI monitoring.
- **Contrast** arises in three stages: subject contrast (Δμ × Δx, determined by kVp and tissue Z), receptor contrast (gamma for film; window/level for digital), and displayed contrast (monitor calibration). Scatter degrades contrast: Contrast_with_scatter = Contrast_primary / (1 + S/P). At SPR = 3, contrast falls to 25% of ideal.
- **Spatial resolution** is measured in lp/mm or described by the MTF. The total system MTF = product of all component MTFs. Three sources of unsharpness combine by RSS: **U_total = √(U_g² + U_m² + U_r²)**. Geometric unsharpness: U_g = f × OID/SOD. Motion is typically the largest limiting factor clinically.
- **Quantum noise** follows Poisson statistics: relative noise = 1/√N. SNR = √N ∝ √(mAs). Halving noise requires quadrupling mAs (4× dose). The **Rose criterion** (SNR ≥ 5 for reliable detection) sets the minimum dose required to detect low-contrast lesions.
- **DQE** measures detector efficiency: DQE(f) = SNR²_out/SNR²_in. DR detectors achieve DQE 55–75%; CR achieves 20–30%. A doubling of DQE allows the same image quality at half the dose — the physical basis for DR replacing CR in clinical practice.
- **Magnification** (MF = SID/SOD) enlarges all structures. PA chest (MF ≈ 1.06) and portable AP chest (MF ≈ 1.25) must never be compared for cardiac size — the magnification difference alone causes apparent cardiomegaly in the AP view.
- **Artefacts** — from equipment (grid lines, dead pixels), patient (motion, jewellery, skin folds), and physics (beam hardening, partial volume) — may mimic or obscure pathology. Recognition and prevention require systematic knowledge of artefact mechanisms.
- **Quality assurance** programmes (kVp accuracy, HVL, focal spot, EI audit, contrast-detail, monitor calibration) are a **legal requirement** under IR(ME)R 2017 and equivalent legislation, not optional good practice.

</div>
