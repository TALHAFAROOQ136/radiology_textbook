---
id: screen-film-radiographic-technique
title: "Screen-Film Technique"
sidebar_label: "Screen-Film Technique"
---

# Screen-Film Radiographic Technique

<div className="book-objectives">

**Learning Objectives**

By the end of this chapter, the student should be able to:

1. Define kVp, mAs, and SID and explain the effect of each on image density, contrast, and patient dose
2. Apply the 15% rule and inverse square law to calculate compensatory technique adjustments
3. Distinguish fixed-kVp from variable-kVp technique charts and justify the clinical preference for fixed-kVp
4. Explain the operating principle of automatic exposure control (AEC) ionisation chambers, including chamber selection, density selector, and backup timer
5. Adjust technique for patient size using the 4 cm / doubling rule and for additive and destructive pathology
6. Select appropriate focal spot size, grid, and collimation for a given clinical examination
7. Identify overexposed and underexposed screen-film radiographs and prescribe the correct corrective technique change
8. Describe the reciprocity law, its basis, and the conditions under which it fails
9. State quality criteria for common projections and explain how technique errors violate them
10. Relate technique choices to radiation dose optimisation (ALARA)

</div>

---

## 1. Introduction: Why Technique Matters More in Screen-Film

Radiographic technique — the deliberate selection of kVp, mAs, SID, grid, and focal spot — is the radiographer's primary tool for controlling image quality and patient dose. In digital radiography, post-processing can partially rescue a sub-optimal exposure. In screen-film radiography, **there is no post-processing rescue**. An underexposed or overexposed film must be discarded and repeated, doubling the patient dose.

<div className="book-important">

**The Stakes of Screen-Film Technique**: Repeat rates of 5–10% are common in screen-film departments. Each repeated examination doubles the radiation dose for that examination and delays the diagnostic process. Correct technique selection, supported by validated technique charts and regular quality control, is both a clinical and radiation protection obligation.

</div>

The three primary exposure factors form an interdependent system:

| Factor | Controls | Primary Effect on Image |
|---|---|---|
| **kVp** (kilovoltage peak) | Beam quality (penetration, photon energy) | Contrast, density, scatter production |
| **mAs** (milliampere-seconds) | Beam quantity (number of photons) | Density (optical density of film) |
| **SID** (source-to-image distance) | Photon fluence at receptor (inverse square) | Density, geometric sharpness, magnification |

---

## 2. Kilovoltage Peak (kVp)

### 2.1 Physical Basis

The kVp setting determines the **peak accelerating voltage** applied across the X-ray tube. This sets the maximum photon energy in the spectrum (in keV, numerically equal to kVp). Increasing kVp:

1. Raises the maximum photon energy (harder beam)
2. Shifts the entire spectrum to higher mean energy
3. Increases the number of photons produced (more bremsstrahlung interactions)
4. Increases the fraction of photons that penetrate the patient

### 2.2 Effect on Film Density

Increasing kVp increases film density through two mechanisms:
- More photons are produced (increased beam quantity) — a modest direct effect
- More photons penetrate the patient and reach the film (increased transmission) — the dominant effect

**Quantitative relationship**: Beam intensity (and hence density) is approximately proportional to kVp². A 15% increase in kVp roughly doubles the radiation reaching the film, which is why the 15% rule equates a 15% kVp rise to doubling mAs.

### 2.3 Effect on Contrast

kVp is the primary controller of **radiographic contrast** (the difference in optical density between adjacent structures):

**Low kVp (high contrast)**:
- Photon energy predominantly below K-edges of relevant elements
- Photoelectric absorption dominates → large differences in attenuation between bone and soft tissue
- High inherent subject contrast → high image contrast
- Narrow exposure latitude → technique must be precise

**High kVp (low contrast)**:
- Compton scatter dominates → attenuation differences between tissues are reduced
- Lower inherent subject contrast → lower image contrast
- Wide exposure latitude → technique is more forgiving
- Increased scatter production degrades contrast further

### 2.4 Effect on Scatter Production

Increasing kVp increases scatter production because:
- More photons are produced overall
- A greater fraction of interactions are Compton scatter (vs. photoelectric absorption)
- Compton scatter is predominantly forward-directed at diagnostic energies, increasing the fraction reaching the film

<div className="book-keypoint">

At kVp values above approximately 70–80 kVp, scatter becomes a dominant problem. For body parts requiring high kVp (chest, abdomen), a grid is mandatory to reduce scatter reaching the film. The combination of high kVp and a grid often produces better overall contrast than low kVp without a grid, because the grid removes the contrast-destroying scatter.

</div>

### 2.5 The 15% Rule

<div className="book-definition">

**The 15% Rule**: Increasing kVp by 15% produces approximately the same increase in film density as doubling the mAs. Conversely, decreasing kVp by 15% produces a density reduction equivalent to halving the mAs. To maintain density when applying a 15% kVp increase, the mAs must be halved.

</div>

**Worked examples**:

*Example 1*: Original technique — 70 kVp, 20 mAs. The film is too light. Preferred correction?
- Option A: Double mAs → 70 kVp, 40 mAs (density corrected, contrast unchanged)
- Option B: 15% kVp increase → 80 kVp, 20 mAs (density corrected, contrast slightly reduced, dose similar)

*Example 2*: Original technique — 80 kVp, 40 mAs. Radiologist requests higher contrast.
- Decrease kVp by 15% → 68 kVp (round to 70 kVp) and double the mAs to 80 mAs

**Limitations of the 15% rule**:
- Approximate only — accuracy varies with the generator, filtration, and body part
- Less accurate at extremes of kVp range
- Does not account for contrast changes when the clinical indication requires fixed kVp

### 2.6 Optimal kVp Ranges by Body Part

The optimal kVp range for each body part represents a balance between:
- Sufficient penetration (contrast too high is unhelpful for deep structures)
- Maximum subject contrast (kVp not unnecessarily high)
- Appropriate dose (higher kVp generally → lower dose for same density)

| Body Part / Projection | Optimal kVp Range | Rationale |
|---|---|---|
| Finger, toe, wrist | 50–60 kVp | Fine bone detail; high contrast needed |
| Hand, foot | 55–65 kVp | Small bones; moderate thickness |
| Elbow, ankle | 60–70 kVp | Moderate thickness |
| Knee | 65–75 kVp | Moderate soft tissue |
| Shoulder, hip | 70–80 kVp | Increased soft tissue; pelvic bones |
| Skull | 70–80 kVp | Mixed bone and air cavities |
| Cervical spine | 65–75 kVp | Lateral: soft tissue also shown |
| Thoracic spine | 70–80 kVp | Protected by ribcage |
| Lumbar spine | 75–90 kVp | Dense vertebral bodies |
| Abdomen | 70–80 kVp | Soft tissue organs; some bowel gas |
| Pelvis | 75–85 kVp | Bony pelvis, pelvic organs |
| Chest (PA) | 110–125 kVp | High kVp for wide latitude; better mediastinum penetration |
| Chest (lateral) | 110–125 kVp | As above; thicker part |
| Neonatal chest | 60–70 kVp | High contrast for fine detail |

---

## 3. Milliampere-Seconds (mAs)

### 3.1 Definition

**mAs = mA × time (seconds)**

Where:
- **mA** (milliamperes) = tube current = rate of electron flow from cathode to anode = rate of X-ray production
- **time** (seconds) = exposure duration

mAs is the product — increasing either mA or time by the same factor produces the same mAs.

### 3.2 Effect on Beam Quantity and Film Density

mAs directly controls the **number of X-ray photons** produced (beam quantity). This is a linear relationship:
- Doubling mAs doubles the number of photons
- Doubling photons increases film density by approximately one step on the H&D curve straight-line portion

mAs does **not** affect beam quality (photon energy distribution) — that is controlled solely by kVp and filtration.

### 3.3 The Reciprocity Law

<div className="book-definition">

**Bunsen-Roscoe Reciprocity Law**: The photographic effect (film density) depends only on the total energy received (mAs), not on the rate at which it is delivered. Therefore, 100 mA × 0.1 s = 10 mA × 1.0 s = 10 mAs, and both combinations should produce identical film density.

</div>

This holds well across the mA range 50–1000 mA and exposure times 0.01–2.0 seconds — the typical diagnostic range.

### 3.4 Reciprocity Law Failure

The reciprocity law fails at extremes of exposure time:

**Very short exposure times (&lt;0.01 seconds / &lt;10 ms)**:
- The very high intensity of light from the screen (many photons arriving almost simultaneously) causes some silver halide grains to be struck multiple times before all electrons are trapped
- Efficiency of latent image formation falls → actual film density is less than predicted by mAs alone
- This is called **low-intensity reciprocity law failure** (paradoxically occurs at high mA, very short time)
- Clinically significant in rapid serial fluorography and some specialised applications

**Very long exposure times (&gt;2–3 seconds)**:
- Free radicals formed during exposure can recombine before trapping
- Efficiency falls → actual density less than predicted
- Called **high-intensity reciprocity law failure** (occurs at low mA, long time)
- Clinically significant in tomography, angiography exposures

<div className="book-pearl">

**Clinical Implication**: In general diagnostic radiography (mA 50–600, time 0.01–1.0 s), reciprocity law holds well and mA/time combinations are freely interchangeable for the same mAs. For specialised procedures using very short times or very long times, the radiographer should be aware that the actual density may differ from what the technique chart predicts.

</div>

### 3.5 Choosing mA and Exposure Time

Although mA and time are interchangeable for film density, other considerations govern their individual selection:

**Exposure time** should be minimised to:
- Reduce motion unsharpness (moving structures: heart, bowel, breathing patient)
- Enable voluntary breath-holding
- Use mA to achieve the required mAs at the minimum time the generator allows

**mA is limited by**:
- Tube focal spot rating (high mA → tube damage if focal spot is too small)
- Tube heat loading (cumulative heat from multiple exposures)
- Generator power output (kW = kVp × mA / 1000)

| Situation | Preferred Approach |
|---|---|
| Chest radiograph | High mA, very short time (&lt;30 ms) — freezes cardiac motion |
| Extremity (cooperative patient) | Moderate mA, moderate time — small focal spot |
| Paediatric radiograph | Highest available mA, shortest time — child cannot cooperate |
| Lumbar spine (no motion concern) | Lower mA, longer time — reduces tube heating |
| Trauma (patient cannot cooperate) | Highest mA, shortest time available |

---

## 4. Source-to-Image Distance (SID)

### 4.1 Definition

**SID** (Source-to-Image Receptor Distance) is the distance from the X-ray tube focal spot to the image receptor (film). Also known as **FFD** (Focus-Film Distance) in older terminology.

### 4.2 Effect on Film Density: Inverse Square Law

X-ray intensity follows the **inverse square law** — intensity is inversely proportional to the square of the distance from the source:

I ∝ 1/d²

Therefore: I₁/I₂ = d₂²/d₁²

**Compensating for a change in SID** requires adjusting mAs:

New mAs = Old mAs × (New SID)² / (Old SID)²

**Worked examples**:

*Example 1*: Standard technique is 100 mAs at 100 cm SID. Patient must be imaged at 150 cm SID (portable examination). What mAs is required?

New mAs = 100 × (150)² / (100)² = 100 × 22,500 / 10,000 = 225 mAs

*Example 2*: Technique is 50 mAs at 180 cm SID (PA chest). Same density is needed at 100 cm SID.

New mAs = 50 × (100)² / (180)² = 50 × 10,000 / 32,400 = 15.4 mAs (use 16 mAs)

### 4.3 Standard SID Values

| Examination | Standard SID | Rationale |
|---|---|---|
| PA chest | 180 cm (72 inches) | Minimises cardiac magnification; good detail |
| General radiography | 100 cm (40 inches) | Standard tabletop/Bucky distance |
| Portable radiography | 100 cm (when possible) | Standard maintained to allow comparison |
| Dental periapical | 20–30 cm | Short SID; specific cone design |
| Mammography | 60–66 cm | System-specific geometry |
| Fluoroscopy | 30–40 cm (tube to patient) | Variable; system dependent |

### 4.4 Effect on Magnification and Geometric Unsharpness

SID also affects image geometry (see Chapter 3 — Concepts of Radiographic Image Quality):

- **Magnification**: M = SID / SOD (where SOD = source-to-object distance)
- **Geometric unsharpness**: U_g = f × OID / SOD (where f = focal spot size, OID = object-to-image distance)

**Increasing SID** (at constant OID) **reduces both magnification and geometric unsharpness** — the reason for using long SID for PA chest.

---

## 5. Technique Charts

### 5.1 Purpose and Importance

<div className="book-definition">

**Technique Chart**: A systematically derived, validated table of exposure factors (kVp, mAs, SID, grid, focal spot) for each projection and body part, adjusted for patient thickness. The chart is the product of departmental calibration and quality assurance testing, not a generic guideline.

</div>

A technique chart is essential in screen-film radiography because:
1. Eliminates guesswork and reduces repeat rate
2. Ensures dose is kept to the minimum for diagnostic quality
3. Provides a baseline for QA monitoring
4. Supports consistency between different radiographers and shifts
5. Is a component of the department's radiation protection quality assurance programme (IR(ME)R 2017)

### 5.2 Fixed-kVp Technique Chart

**Principle**: For each body region, kVp is fixed at an optimal value. mAs is varied with patient thickness.

**Construction**:
1. Select optimal kVp for each body region (based on contrast requirements and penetration)
2. For the "standard patient" (reference thickness), determine the mAs that produces optimal density
3. Establish mAs adjustment rules for thickness variations (typically: double mAs per 4–5 cm increase)

**Advantages of fixed kVp**:
- Consistent contrast for all patients in that region
- Wider exposure latitude (more forgiving of small mAs errors)
- Lower patient dose (high kVp → more penetration → fewer photons absorbed in patient for same receptor dose)
- Simpler for radiographers to memorise and apply
- Preferred by most professional and regulatory bodies

**Example fixed-kVp chart (general radiography, 400-speed system)**:

| Body Part | kVp | Thin (&lt;10 cm) | Average (10–20 cm) | Thick (&gt;20 cm) | Grid | SID |
|---|---|---|---|---|---|---|
| Wrist AP | 60 | 4 mAs | 6 mAs | 10 mAs | No | 100 cm |
| Knee AP | 70 | 8 mAs | 12 mAs | 20 mAs | No | 100 cm |
| Pelvis AP | 80 | 20 mAs | 35 mAs | 60 mAs | Yes (12:1) | 100 cm |
| Lumbar spine AP | 85 | 20 mAs | 40 mAs | 70 mAs | Yes (12:1) | 100 cm |
| Abdomen AP | 75 | 15 mAs | 30 mAs | 55 mAs | Yes (12:1) | 100 cm |
| Chest PA | 120 | 2 mAs | 3.2 mAs | 5 mAs | Yes (10:1) | 180 cm |

### 5.3 Variable-kVp Technique Chart

**Principle**: Both kVp and mAs vary with patient thickness, usually keeping mAs relatively constant while adjusting kVp.

**Rule**: For each 2 cm increase in thickness, increase kVp by 2 kVp.

**Disadvantages**:
- Contrast varies between patients (thicker patients receive higher kVp = lower contrast)
- More variables to manage
- Less widely used than fixed-kVp approach

### 5.4 Caliper Measurement

Accurate patient thickness measurement is essential for technique chart use.

**Technique**:
- Measure at the **thickest point** in the direction of the beam
- Use calipers placed parallel to the beam direction
- Measure with the patient in the exposure position (not standing)
- For chest: measure at full inspiration (lung expansion affects AP thickness by 2–4 cm)

---

## 6. Patient Size and Thickness Compensation

### 6.1 The 4 cm / Doubling Rule

The most widely used rule for compensating for patient thickness:

**For every 4 cm increase in part thickness → double the mAs**
**For every 4 cm decrease in part thickness → halve the mAs**

This rule is an approximation based on the exponential attenuation of the beam. It assumes:
- The linear attenuation coefficient of soft tissue at diagnostic energies
- A fixed kVp (not changed with thickness)
- An effective beam energy in the 60–80 keV range

**Worked example**: Standard technique — 80 kVp, 40 mAs for a 20 cm abdomen.

| Patient Thickness | Adjusted mAs |
|---|---|
| 12 cm (−8 cm) | 40 ÷ 4 = 10 mAs |
| 16 cm (−4 cm) | 40 ÷ 2 = 20 mAs |
| 20 cm (standard) | 40 mAs |
| 24 cm (+4 cm) | 40 × 2 = 80 mAs |
| 28 cm (+8 cm) | 40 × 4 = 160 mAs |

### 6.2 Body Habitus Classification

In addition to measured thickness, the radiographer should assess **body habitus**:

| Classification | Characteristics | Typical Adjustment |
|---|---|---|
| **Hyposthenic / Asthenic** | Thin, long thorax; little fat | Reduce mAs by 25–50% from standard |
| **Sthenic** | Average build; standard reference | No adjustment |
| **Hypersthenic** | Broad, stocky; significant adipose tissue | Increase mAs by 25–100% from standard |
| **Obese** | Very large body habitus; difficult penetration | Major increase in mAs; consider kVp increase |

<div className="book-pearl">

**Obesity and kVp**: For very obese patients, the 4 cm rule alone may be insufficient — the exponential attenuation of a very thick body means that even doubling mAs repeatedly may not achieve adequate penetration. In these cases, increasing kVp by 5–10 kVp (in addition to mAs increase) is often necessary, accepting some reduction in contrast for adequate density.

</div>

---

## 7. Automatic Exposure Control (AEC)

### 7.1 Operating Principle

<div className="book-definition">

**Automatic Exposure Control (AEC)**: A device that automatically terminates the X-ray exposure when the radiation reaching a sensor behind the image receptor has accumulated to a preset level (sufficient to produce the desired film density). The radiographer selects kVp, mA, and cell configuration; the AEC controls the exposure time.

</div>

### 7.2 AEC Sensor Types

**Ionisation Chamber (most common)**:
- Flat, gas-filled chamber positioned between the patient and the image receptor
- As X-rays pass through the patient and chamber, they ionise the gas, producing a small electrical current
- This current is integrated (accumulated) over time
- When the integrated charge reaches the preset threshold, the exposure is terminated

**Phototimer (older design)**:
- A fluorescent screen and photomultiplier tube positioned behind the image receptor
- X-rays exiting the film excite the screen; the photomultiplier measures the light
- Terminates exposure when light output reaches the threshold
- Less accurate than ionisation chambers

### 7.3 AEC Chamber Configuration

Most AEC systems have **three ionisation chambers**:
- **Left chamber**: Positioned under the left hemithorax / left upper quadrant
- **Centre chamber**: Midline position
- **Right chamber**: Positioned under the right hemithorax / right upper quadrant

For PA chest:
- Select left and right chambers (under lung fields)
- Avoid selecting centre chamber alone (mediastinum would terminate exposure prematurely)

For abdomen:
- Centre chamber selected
- Chambers positioned under liver (right upper quadrant) for upper abdomen

For lumbar spine AP:
- Centre chamber (over the vertebral body)

### 7.4 The Density Selector

The density selector allows the radiographer to override the standard preset density level:

| Setting | Effect | Use |
|---|---|---|
| +2 | 50% more radiation → darker film | Heavily muscled patient; additive pathology |
| +1 | 25% more radiation | Slightly above standard |
| 0 (normal) | Standard density | Average patient, standard technique |
| −1 | 25% less radiation | Slightly below standard |
| −2 | 50% less radiation → lighter film | Thin patient; air cast; paediatric |

Each step typically represents a 25–30% change in exposure (approximately 0.1–0.15 OD change on the film).

### 7.5 The Backup Timer (Fail-Safe Timer)

<div className="book-important">

**Backup Timer**: Every AEC system must be equipped with a backup timer — a maximum exposure time limit that terminates the exposure if the AEC fails to do so (e.g., the AEC sensor is positioned incorrectly, is malfunctioning, or the patient is not in the beam path). Without a backup timer, AEC failure could result in an indefinite exposure and massive patient dose.

The backup timer should be set to no more than **150% of the expected maximum exposure time** for that examination. It must be checked regularly as part of the departmental QA programme.

</div>

### 7.6 AEC Failure Modes and Causes

| Failure Mode | Cause | Appearance on Film |
|---|---|---|
| Overexposed film | AEC cell not in primary beam; cell malfunction | Dark/black film |
| Underexposed film | Phototimer chamber too heavily attenuated | Light/pale film |
| Inconsistent density | Dirty/worn chambers; loose electrical connections | Varying density between exposures |
| Very short exposure time | Very thin patient; wrong density setting | Possible quantum mottle |
| Backup timer termination | AEC malfunction; wrong cell selection | Film abruptly cut off (exposure terminated early) |

### 7.7 AEC Quality Assurance

AEC systems require routine QA testing:
- **Reproducibility**: 5 repeated exposures; OD variation &lt;0.1 OD
- **Density tracking across kVp**: Exposures at 70, 90, 110 kVp should produce OD within ±0.2 OD
- **Chamber balance**: All three chambers produce equal density (±0.1 OD)
- **Backup timer test**: Verify backup timer activates at correct time
- Frequency: monthly (recommended)

---

## 8. Focal Spot Selection

### 8.1 Small vs. Large Focal Spot

Most X-ray tubes have two focal spot sizes: large (0.6–1.2 mm) and small (0.3–0.6 mm). The radiographer selects the appropriate focal spot for each examination.

| Factor | Small Focal Spot | Large Focal Spot |
|---|---|---|
| **Geometric unsharpness** | Less (better detail) | More |
| **Heat dissipation** | Lower (cannot sustain high mA) | Higher |
| **Maximum mA** | 100–300 mA (limited) | 300–1000 mA |
| **Minimum exposure time** | Longer (at same mAs) | Shorter |
| **Use** | Fine detail work; low mAs | High mAs; fast exposures |

### 8.2 Focal Spot Selection Guidelines

| Examination | Focal Spot | Rationale |
|---|---|---|
| Extremities (hand, wrist, foot) | Small | Maximum detail; low mAs required |
| Chest | Large | Fast exposure essential (&lt;30 ms); high mAs needed |
| Abdomen | Large | High mAs needed; motion concern |
| Lumbar spine | Large or small | Large if patient movement is a concern |
| Paediatric (non-extremity) | Large | Fast exposure paramount |
| Dental periapical | Effectively small (0.4 mm) | Short SID requires fine detail |

---

## 9. Grid Selection and Technique

### 9.1 When to Use a Grid

The decision to use a grid is based on body part thickness (scatter production increases rapidly above 10 cm):

| Part Thickness | kVp | Grid Required? | Grid Ratio |
|---|---|---|---|
| &lt;10 cm | Any | Usually not | — |
| 10–12 cm | &lt;70 kVp | Optional | 5:1 or 8:1 |
| 10–12 cm | &gt;70 kVp | Recommended | 8:1 |
| 12–20 cm | Any | Yes | 8:1 or 10:1 |
| &gt;20 cm | Any | Yes | 12:1 or 16:1 |

### 9.2 mAs Compensation for Grids

Using a grid absorbs a significant fraction of both primary and scatter radiation. The **Bucky factor** (B) expresses how much additional mAs is needed:

New mAs (with grid) = mAs (no grid) × Bucky factor

| Grid Ratio | Bucky Factor (typical) |
|---|---|
| 5:1 | 2 |
| 8:1 | 3–4 |
| 10:1 | 4–5 |
| 12:1 | 4–6 |
| 16:1 | 6–8 |

**Example**: Abdomen technique without grid — 80 kVp, 30 mAs. Adding a 12:1 grid requires:
- New mAs = 30 × 5 = 150 mAs

### 9.3 Moving vs. Stationary Grid

**Moving grid (Potter-Bucky diaphragm)**: Grid moves during exposure; grid lines are blurred out of the image. Standard for table and wall Bucky systems.

**Stationary grid**: Grid does not move; grid lines are visible if spatial frequency is low or exposure is short. Acceptable for portable/mobile radiography where no Bucky is available.

---

## 10. Pathological Conditions and Technique Modification

### 10.1 Additive Pathology (Increase Technique)

Additive conditions increase tissue density or add fluid/tissue, requiring more radiation to penetrate:

| Condition | Body Part Affected | Technique Change |
|---|---|---|
| Pneumonia / consolidation | Lung | +25–50% mAs or +10 kVp |
| Pleural effusion | Hemithorax | +30–50% mAs or +10 kVp |
| Atelectasis | Lung | +20–30% mAs |
| Pulmonary oedema | Both lungs | +30% mAs |
| Oedema (soft tissue) | Extremity | +50–100% mAs |
| Ascites | Abdomen | +30–50% mAs |
| Acromegaly | Multiple | Increase as hypertrophied bone/tissue |
| Paget's disease (lytic phase) | Bone | Decrease slightly initially |
| Paget's disease (sclerotic phase) | Bone | Increase mAs significantly |

### 10.2 Destructive / Subtractive Pathology (Decrease Technique)

Destructive conditions reduce tissue density or remove tissue:

| Condition | Body Part Affected | Technique Change |
|---|---|---|
| Emphysema | Lung | −30–50% mAs or −10 kVp |
| Pneumothorax | Hemithorax | −20–30% mAs |
| Osteoporosis / osteopenia | Spine, hips | −20–30% mAs |
| Degenerative joint disease (osteoarthritis, joint space loss) | Joints | Minor decrease |
| Multiple myeloma (lytic lesions) | Spine, pelvis | −20–30% mAs |
| Bowel obstruction (gas-filled loops) | Abdomen | −20% mAs |
| Wasting / cachexia | Any | Reduce per body habitus assessment |
| Amputation (part absent) | Extremity | Major reduction |

<div className="book-remember">

**Additive vs Destructive Mnemonics**:
- **Additive** (increase mAs): Fluid, Fibrosis, Fat accumulation, Fracture healing (callus), Hypertrophy
- **Destructive** (decrease mAs): Air/gas, Atrophy, Lytic lesions, Osteoporosis, Emphysema

</div>

---

## 11. Assessing Film Quality and Correcting Errors

### 11.1 Density Assessment

Film density is assessed by holding the processed film against the illuminator and comparing it to a reference standard (comparison films or density reference cards).

| Density Appearance | Cause | Correction |
|---|---|---|
| **Too dark (overexposed)** | mAs too high; kVp too high; AEC malfunction | Reduce mAs by 50% (at minimum); re-examine cause |
| **Too light (underexposed)** | mAs too low; kVp too low; patient too large; AEC misaligned | Double mAs; check AEC cell placement |
| **Correct density, too low contrast** | kVp too high; excessive scatter; poor collimation | Reduce kVp by 10–15%; add/use grid; collimate |
| **Correct density, too high contrast** | kVp too low | Increase kVp by 10–15% kVp; reduce mAs by half |

### 11.2 The One-Density-Step Rule

When a film requires a density change, the minimum useful change is **at least one full density step** (approximately ±30% change in mAs, or approximately ±0.3 OD):
- Changes less than 30% in mAs are usually imperceptible on the processed film
- Changes of 50–100% (halving or doubling) mAs are reliably visible

### 11.3 Diagnosing Technique Errors vs. Processing Errors

The radiographer must distinguish between technique errors and processing errors before prescribing a correction:

| Problem | Technique Error Signs | Processing Error Signs |
|---|---|---|
| Overall too dark | Affects densities proportionally; detail preserved | Flat overall density; increased fog; loss of contrast |
| Overall too light | Sparse grain in thinly attenuated areas | Reduced contrast everywhere; possible milky appearance |
| Loss of contrast | Densities compressed; greyed-out appearance | Reduced contrast with fog increase; check QC strip |
| Spotty appearance | Consistent with quantum mottle (underexposure) | Processing chemicals on film (roller marks, drip marks) |

**Rule**: Always check the **daily QC sensitometry strip** before concluding a density problem is a technique error. If the QC strip shows processor drift, correct the processor before remaking the film.

---

## 12. Radiation Dose Optimisation in Screen-Film Technique

### 12.1 ALARA Principle

The ALARA (As Low As Reasonably Achievable) principle requires that patient dose be minimised without compromising diagnostic image quality. In screen-film technique, dose optimisation strategies include:

| Strategy | Mechanism | Dose Reduction |
|---|---|---|
| **High kVp technique** | Higher penetration per photon; fewer absorptions in patient | 30–50% for chest (120 vs 80 kVp) |
| **Faster screen speed** | Fewer photons needed for same film density | Proportional to speed increase |
| **Tight collimation** | Reduces irradiated volume; reduces scatter | 30–60% dose reduction |
| **Correct SID** | Proper distance avoids unnecessary output increase | Maintains standard dose |
| **Correct technique chart** | Eliminates overexposure; reduces repeats | Significant: each repeat doubles dose |
| **Shielding** (gonads, lens) | Direct shielding of radiosensitive organs | Up to 95% for gonadal dose |
| **Minimising repeats** | Each repeat = 2× dose for that exam | Critical importance |

### 12.2 Dose Reference Levels (DRLs) for Screen-Film Systems

Diagnostic Reference Levels are dose thresholds above which technique should be reviewed. UK reference doses (from PHE/BIR):

| Examination | Entrance Surface Dose (ESD) | DRL |
|---|---|---|
| PA chest (400 speed) | 0.1–0.3 mGy | 0.3 mGy |
| Lumbar spine AP (400 speed) | 4–8 mGy | 10 mGy |
| Lumbar spine lateral (400 speed) | 10–20 mGy | 30 mGy |
| Abdomen AP (400 speed) | 3–6 mGy | 10 mGy |
| Pelvis AP (400 speed) | 3–6 mGy | 10 mGy |

Exceeding a DRL does not automatically indicate a problem but triggers a review of technique and equipment.

---

## 13. Quality Criteria for Common Projections

### 13.1 PA Chest

Optimal film quality requires:
- Full lung fields included bilaterally
- No rotation (medial ends of clavicles equidistant from spinous processes)
- Trachea midline; both hemidiaphragms visualised
- Sharp pulmonary vasculature to the periphery (no motion unsharpness)
- Posterior ribs visible through the cardiac shadow
- Scapulae not projected over lung fields
- Density: OD 0.5–0.7 in lung fields; cardiac border OD 1.5–2.5

**Technique requirements**: 110–125 kVp; &lt;30 ms exposure time; 180 cm SID; inspiration at full inspiration

### 13.2 Lumbar Spine AP

Optimal film quality requires:
- All five lumbar vertebrae and L5/S1 junction visible
- No rotation (pedicles equidistant from spinous processes; disc spaces open)
- Vertebral end-plates sharp (no motion)
- Sacroiliac joints visible
- Bowel preparation ideally (gas reduces visibility)

**Technique requirements**: 75–85 kVp; 12:1 grid; 100 cm SID; suspended respiration

### 13.3 Hand AP/PA

Optimal film quality requires:
- All phalanges visible to distal tufts
- Metacarpal shafts visible with cortex and medullary canal distinguishable
- Joint spaces visible in profile
- Soft tissue margin visible

**Technique requirements**: 55–65 kVp; no grid; 100 cm SID; detail screen; small focal spot

---

## 14. Special Technique Considerations

### 14.1 Paediatric Technique

Paediatric radiography requires specific technique modifications:

1. **Faster screens**: 400–800 speed to minimise dose
2. **Higher mA, shortest possible time**: Children cannot cooperate with breath-holding; motion is the dominant artefact
3. **Immobilisation**: Positioning aids, swaddling, or parental assistance; never irradiate a helper unnecessarily
4. **Collimation**: Especially critical in children (dose-sensitive; gonads, thyroid proximity)
5. **kVp**: Generally slightly lower than adult equivalent to maintain contrast (paediatric anatomy has less inherent contrast)
6. **No AEC for neonates**: Ionisation chambers may not function reliably with very short exposure times and small patients; use manual technique

### 14.2 Portable / Mobile Radiography

Portable radiography introduces additional technique variables:

1. **SID verification**: Measure SID with tape measure; cannot assume standard distance
2. **Inverse square law compensation**: Calculate mAs adjustment if SID differs from standard
3. **Grid alignment**: Use only a stationary grid; ensure perpendicular beam centring to avoid grid cut-off
4. **AEC not available**: Manual technique required; patient thickness estimation is critical
5. **Generator output variation**: Mobile generators have limited power; maximum kVp and mA may be restricted
6. **Positioning limitations**: Patient cannot assume standard position; compensate with technique or accept suboptimal positioning

### 14.3 Cast Radiography

Plaster and fibreglass casts require technique modifications:

| Cast Type | Additional Tissue Equivalent | Technique Change |
|---|---|---|
| Fibreglass cast | ≈2–3 cm soft tissue | +25–30% mAs |
| Dry plaster cast | ≈4–5 cm soft tissue | +50–75% mAs |
| Wet plaster cast | ≈6–8 cm soft tissue | +100–150% mAs (almost double) |
| Fibre glass with padding | ≈2–4 cm | +30–50% mAs |

---

<div className="book-summary">

## Chapter Summary

Screen-film radiographic technique requires precise, deliberate selection of exposure factors because the narrow dynamic range of film permits no post-acquisition rescue of under- or over-exposed images.

**kVp** controls beam quality and is the primary determinant of contrast. Optimal kVp is selected for each body region (50–60 kVp for fine extremities; 110–125 kVp for chest). The **15% rule** links kVp and mAs: +15% kVp ≈ ×2 mAs for density maintenance. High kVp reduces dose but reduces contrast; the fixed-kVp technique chart maintains consistent contrast while varying only mAs with patient thickness.

**mAs** (= mA × time) controls beam quantity (photon number) and directly determines film density with a linear relationship. The reciprocity law permits free interchange of mA and time for the same mAs, but fails at extreme exposure times (&lt;10 ms or &gt;2–3 s). Exposure time should be minimised (highest available mA) for all moving structures.

**SID** modifies intensity via the inverse square law. Compensating mAs = old mAs × (new SID)² / (old SID)². Standard SID: 100 cm general, 180 cm PA chest.

**Technique charts** should use a fixed-kVp approach, calibrated for the local equipment and screen-film combination. The 4 cm / doubling rule adjusts mAs for patient thickness.

**AEC** automatically controls exposure time, eliminating density variation due to patient size. Essential components: ionisation chamber sensors, three-chamber configuration, density selector (±2 steps), and a mandatory backup timer. AEC QA (reproducibility, kVp tracking, chamber balance) must be performed monthly.

**Pathological adjustment**: Additive conditions (consolidation, effusion, oedema, ascites) require increased mAs or kVp. Destructive conditions (emphysema, osteoporosis, lytic lesions, gas) require reduced mAs.

**Dose optimisation**: High kVp, fastest screen speed consistent with required resolution, tight collimation, and elimination of repeat radiographs are the highest-impact dose reduction strategies in screen-film practice.

</div>
