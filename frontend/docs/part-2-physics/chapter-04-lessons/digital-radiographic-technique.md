---
id: digital-radiographic-technique
title: "Digital Radiographic Technique"
sidebar_label: "Digital Radiographic Technique"
---

<div className="book-chapter-header">
  <div className="chapter-number">Chapter 4 · Lesson 2</div>
  <h1 className="chapter-title">Digital Radiographic Technique</h1>
  <p className="chapter-subtitle">
    Mastering exposure factors, image quality optimisation, and dose management in modern digital imaging systems
  </p>
</div>

<div className="learning-objectives">

### Learning Objectives

By the end of this lesson, the student should be able to:

1. Define and apply the core exposure factors — kVp, mAs, and SID — in the context of digital radiography
2. Explain the role and significance of the Exposure Index (EI) and Deviation Index (DI) in dose monitoring
3. Describe the phenomenon of dose creep and outline evidence-based prevention strategies
4. Compare Automatic Exposure Control (AEC) operation between screen-film and digital systems
5. Explain the stages of digital post-processing and their clinical implications
6. Construct and interpret a standardised technique chart for a digital radiography department
7. Apply modified technique principles to paediatric, bariatric, and trauma radiographic settings
8. Identify, analyse, and correct common technique errors in clinical practice

</div>

---

## 1. Introduction

The transition from screen-film to digital radiography has fundamentally altered the relationship between exposure technique and image quality. Unlike conventional systems — where film density directly reflects the dose delivered to the image receptor — digital detectors decouple image brightness from exposure level through a process of **post-processing and rescaling**. This property confers significant advantages: wider exposure latitude, reduced repeat rates, and the ability to manipulate image appearance after acquisition.

However, digital systems introduce unique challenges. The visual feedback that previously warned radiographers of gross overexposure (a black, "burnt-out" film) is eliminated. Overexposed digital images may appear diagnostically acceptable on screen while delivering substantially higher patient doses. This phenomenon, known as **dose creep**, represents one of the most clinically significant concerns in modern radiographic practice.

Optimal digital radiographic technique therefore demands:

- A thorough understanding of how exposure factors interact with digital detector physics
- Disciplined use of quantitative dose monitoring tools (EI, DI)
- Adherence to validated technique charts and dose reference levels
- Ongoing quality assurance and audit processes

This chapter provides a comprehensive account of digital radiographic technique — from fundamental exposure physics through to advanced quality management strategies.

---

## 2. Fundamentals of Exposure in Digital Radiography

The three primary exposure factors in radiography are **kilovoltage peak (kVp)**, **milliampere-seconds (mAs)**, and **source-to-image distance (SID)**. Their interactions determine both image quality and patient radiation dose.

### 2.1 Kilovoltage Peak (kVp)

**kVp** determines the energy of the X-ray beam and therefore its penetrating power through body tissues. It is the principal determinant of **subject contrast** — the difference in X-ray attenuation between adjacent anatomical structures.

#### Relationship to Subject Contrast

At lower kVp settings:
- The photoelectric effect predominates
- Greater differential absorption between tissues of different atomic number and density
- Higher subject contrast — beneficial for imaging bone vs. soft tissue

At higher kVp settings:
- Compton scattering predominates
- More uniform attenuation across tissue types
- Lower subject contrast — preferred for chest imaging where lung/mediastinum differentiation benefits from a wide dynamic range

> **Key Distinction:** In screen-film radiography, high kVp produced a flat, low-contrast image that could not be manipulated post-acquisition. In digital radiography, **subject contrast is determined by kVp at the time of exposure**, but **display contrast can be adjusted retrospectively** through post-processing window/level settings. This does not mean kVp selection is irrelevant — optimising kVp remains essential for achieving adequate subject contrast before post-processing.

#### Recommended kVp Ranges for Digital Systems

The following values represent evidence-based recommendations for flat-panel detector (FPD) systems. Computed radiography (CR) systems may require minor adjustment based on detector phosphor sensitivity characteristics.

| Anatomical Region | Projection | Recommended kVp | Clinical Rationale |
|---|---|---|---|
| Finger / Toe | AP, Lateral | 50–60 kVp | Fine trabecular detail; low scatter |
| Wrist / Hand | PA, Oblique | 55–65 kVp | Cortical and trabecular bone detail |
| Elbow | AP, Lateral | 60–70 kVp | Joint space and periarticular soft tissue |
| Shoulder | AP | 70–80 kVp | Penetrate soft tissue; humeral head detail |
| Foot / Ankle | AP, Lateral | 55–65 kVp | Tarsals and metatarsals; high contrast |
| Knee | AP, Lateral | 65–75 kVp | Joint space narrowing; cortical margins |
| Femur | AP, Lateral | 75–85 kVp | Thick soft tissue mantle |
| Pelvis / Hip | AP | 75–85 kVp | Bilateral comparison; acetabular detail |
| Lumbar Spine | AP, Lateral | 80–90 kVp | Dense vertebral bodies; disc spaces |
| Thoracic Spine | AP, Lateral | 75–85 kVp | Variable density; vertebral alignment |
| Cervical Spine | AP, Lateral | 70–80 kVp | Intervertebral foramina; spinous processes |
| Chest (PA/AP) | PA, AP | 110–125 kVp | Wide dynamic range; lung/mediastinum |
| Abdomen | AP supine | 75–85 kVp | Gas pattern; soft tissue organs |
| Skull | AP, Lateral | 70–80 kVp | Calvarium, sinuses, sella turcica |
| Mandible / Facial Bones | Various | 65–75 kVp | Fine cortical margins |

:::tip Clinical Pearl
For chest radiography, the **high-kVp technique (≥110 kVp)** is strongly preferred in digital practice. It reduces mediastinal overpenetration artefacts, better demonstrates retrocardiac pathology, and decreases patient dose through the scatter-reducing effect of higher energy photons paired with anti-scatter grids.
:::

### 2.2 Milliampere-Seconds (mAs)

**mAs** — the product of tube current (milliamperes, mA) and exposure time (seconds, s) — determines the **quantity of X-ray photons** produced and therefore the radiation dose delivered to the image receptor.

#### Relationship to Image Quality

- mAs directly controls the **signal level** at the detector
- Higher mAs → more photons → improved signal-to-noise ratio (SNR) → less quantum mottle
- Lower mAs → fewer photons → increased quantum noise → grainy/mottled image

In digital radiography, mAs is monitored indirectly through the **Exposure Index** (see Section 4), which provides quantitative feedback on detector dose for every acquisition.

#### mAs and Patient Dose

Patient dose is **directly proportional to mAs**:

**Entrance Surface Dose ∝ mAs**

Halving mAs halves patient dose but increases noise. The acceptable noise level depends on:
- Anatomical region (fine detail vs. large structures)
- Clinical indication (subtle fracture vs. gross pathology)
- Patient population (adult vs. paediatric; standard vs. bariatric)

#### The Reciprocity Law

The reciprocity law states that equivalent mAs values produce equivalent exposures, regardless of how mA and time are divided:

`400 mA × 0.05 s = 100 mA × 0.2 s = 20 mAs`

**However**, at very short exposure times (less than 5 ms), reciprocity failure may occur due to space charge effects at the tube filament. In modern high-frequency generators, this is rarely a practical concern.

:::warning Important
Short exposure times are preferred to minimise **motion unsharpness**, particularly for:
- Chest radiography (cardiac motion, respiratory movement)
- Paediatric examinations
- Uncooperative or trauma patients

When mAs is fixed, a higher mA with shorter time is preferred over a lower mA with longer time.
:::

### 2.3 Source-to-Image Distance (SID)

**SID** is the distance from the focal spot of the X-ray tube to the image receptor surface.

#### The Inverse Square Law

X-ray beam intensity decreases with the square of the distance from the source:

**I ∝ 1/d²**

Doubling SID reduces beam intensity to **one quarter** of its original value, requiring a **four-fold increase in mAs** to maintain equivalent detector dose.

#### Standard SID Values

| Examination Type | Standard SID | Rationale |
|---|---|---|
| Chest (erect bucky) | 180 cm (72") | Minimises cardiac magnification |
| General table work | 100–110 cm (40–44") | Standard magnification factor |
| Mobile / ward chest | 100–120 cm | Practical limitation of equipment |
| Portable extremity | 90–100 cm | Close working distances |

#### Geometric Effects of SID

Longer SID:
- Reduces geometric magnification
- Improves spatial resolution (penumbra reduction)
- Reduces patient dose per unit detector dose (beam divergence effect)

Shorter SID:
- Increases geometric magnification
- Increases penumbra (geometric unsharpness)
- Higher skin dose relative to image receptor dose

---

## 3. Scatter Radiation and Grid Use

### 3.1 Sources and Clinical Impact of Scatter

When X-ray photons interact with tissue, **Compton scattering** produces secondary photons travelling in directions different from the primary beam. These scattered photons reach the detector without carrying useful spatial information, degrading image contrast.

Scatter is increased by:
- Larger field size (more tissue irradiated)
- Higher kVp (greater Compton interaction probability)
- Thicker body parts (more scattering material)
- Lower SID

The **scatter-to-primary ratio (SPR)** quantifies the proportion of detected photons that are scattered. For abdominal radiography, SPR can exceed 4:1 — meaning four scattered photons reach the detector for every primary photon.

### 3.2 Anti-Scatter Grids

An **anti-scatter grid** is placed between the patient and the detector to absorb oblique scattered photons while transmitting primary beam photons. It consists of alternating strips of lead (absorbing) and an interspace material (transmitting).

#### Grid Characteristics

| Parameter | Definition | Clinical Significance |
|---|---|---|
| Grid ratio (r) | Height of lead strips ÷ interspace width | Higher ratio → better scatter cleanup; less latitude |
| Grid frequency | Number of lead strips per cm | Higher frequency → less visible grid lines |
| Focal range | Range of SIDs for which the grid is focused | Incorrect SID causes grid cut-off artefact |
| Bucky factor | Increase in exposure required when using grid | Compensates for primary beam absorption by grid |

**Common grid ratios in digital radiography:**

| Body Region | Grid Ratio | Typical Bucky Factor |
|---|---|---|
| Extremities (less than 10 cm) | No grid | 1× |
| Skull, spine, chest | 8:1 or 10:1 | 3–4× |
| Abdomen, pelvis | 10:1 or 12:1 | 4–5× |
| Bariatric patients | 12:1 or 16:1 | 5–6× |

:::info Grid Cut-Off
Grid cut-off occurs when the primary beam enters the grid at an angle outside its focal range. It causes a reduction in image density across part or all of the image and may mimic pathology. Common causes:
- Incorrect SID
- Lateral tube angulation with focused grid
- Off-centre positioning with focused grid
- Grid inverted (upside down)
:::

### 3.3 Air-Gap Technique

An alternative to grid use, the **air-gap technique** positions the patient at a distance from the detector. Scattered photons — travelling in divergent directions — miss the smaller detector face. This is particularly useful in:
- Cervical spine lateral projections
- Some chest and mammography applications
- Paediatric examinations (to avoid grid dose penalty)

The air gap increases geometric magnification and requires SID adjustment to compensate.

---

## 4. Exposure Index and Deviation Index

The **Exposure Index (EI)** is a numerical value generated by the digital imaging system that reflects the radiation dose (signal level) received by the image receptor for a given acquisition. It provides the radiographer with quantitative feedback on whether the selected technique produced adequate detector exposure.

### 4.1 Historical Background

Before standardisation, each manufacturer used a proprietary EI scale with different nomenclature and direction of change:

| Manufacturer | Indicator Name | Scale Direction | Notes |
|---|---|---|---|
| Fuji (CR) | S-number (Sensitivity) | Inverse — lower S = more dose | S 150–300 optimal |
| Agfa (CR) | lgM | Direct — higher = more dose | |
| Kodak / Carestream | EI | Direct | EI ~200 optimal |
| Konica | S-value | Inverse | |
| Canon FPD | REX | Direct | |
| Siemens FPD | DAP-based | Direct | |

This inconsistency created significant confusion in multi-vendor departments. Radiographers rotating between systems had to memorise different scales and reference values.

### 4.2 IEC 62494-1 Standardisation

The **International Electrotechnical Commission standard IEC 62494-1** (2008, revised 2022) established a universal framework for EI reporting, now adopted by all major manufacturers.

**IEC EI Definition:**
**EI = C × Q** (where Q is the mean detector signal in the diagnostically relevant region and C is a calibration constant)

The IEC scale is **direct** (higher EI = more dose) and calibrated such that:

- **EI = 100** corresponds to a detector air kerma of approximately **1 μGy** (for a specific beam quality)
- **Target EI** for a given examination is defined by the facility's medical physicist

### 4.3 Deviation Index (DI)

The **Deviation Index** quantifies the departure of the measured EI from the target EI:

`DI = 10 × log10 (EI_measured / EI_target)`

| DI Value | Interpretation | Action Required |
|---|---|---|
| 0 | Ideal — technique matches target exactly | None |
| +1 | ~26% above target dose | Minor technique review |
| −1 | ~21% below target dose | Minor technique review |
| +2 | ~58% above target dose | Technique correction required |
| −2 | ~37% below target dose | Technique correction; image may be noisy |
| +3 | ~100% above target dose | Significant overexposure; departmental review |
| −3 | ~50% below target dose | Significant underexposure; consider repeat |
| >+3 | Gross overexposure | Incident review; radiologist notification |

:::warning Action Thresholds
Most regulatory bodies and professional societies recommend:
- **DI within ±1**: Acceptable without intervention
- **DI ±1 to ±2**: Investigate technique; update chart if systematic
- **DI >±2**: Mandatory technique correction
- **DI >±3**: Formal incident reporting process
:::

### 4.4 Correct Interpretation of EI Values

The EI is calculated from the **histogram of pixel values** in the image. The accuracy of EI depends critically on:

1. **Correct collimation** — gross over-collimation or inclusion of the primary beam edge alters the histogram, producing a falsely low EI
2. **Correct anatomy selection** — the system must know which anatomical region is being imaged to apply appropriate histogram analysis algorithms
3. **Appropriate region of interest (ROI)** — some systems allow manual ROI selection to ensure EI reflects the relevant anatomy

Common causes of **falsely low EI** (system thinks image is underexposed):
- Lead markers or shielding devices within the primary field
- Large areas of air within the field (e.g., poorly collimated chest)
- Incorrect anatomy selection on the console

Common causes of **falsely high EI** (system thinks image is overexposed):
- Anatomy at the edge of the primary beam
- Collimator blades partially within the field
- Grid cut-off producing bright regions outside anatomy

---

## 5. Dose Creep

**Dose creep** refers to the gradual, unintentional increase in patient radiation dose over time in digital radiography departments. It results from the wide exposure latitude of digital detectors — overexposed images still appear visually acceptable after post-processing, removing the immediate visual feedback that would have prompted dose reduction in the screen-film era.

### 5.1 Mechanism

```
Screen-Film Era:
  Overexposure → Overblackened film → Visible quality problem → Immediate correction

Digital Era:
  Overexposure → EI/DI increase → Post-processing rescales image → Image looks acceptable
                                                                   → No immediate correction
                                                                   → Dose increases over months/years
```

### 5.2 Evidence and Magnitude

Studies have documented dose creep resulting in **2–5-fold increases** in patient dose compared to screen-film techniques in some departments, despite no change in image quality. Paediatric patients are particularly vulnerable due to their greater radiosensitivity and the tendency to over-expose to ensure image quality for diagnostic adequacy.

### 5.3 Contributing Factors

| Factor | Mechanism |
|---|---|
| Visual appearance of digital images | Post-processing masks overexposure |
| Lack of mandatory EI monitoring | No feedback on dose trends |
| Absence of updated technique charts | Outdated screen-film mAs values used |
| Staff training gaps | Radiographers unfamiliar with EI/DI |
| AEC miscalibration | AEC delivers excessive dose to digital detector |
| "Safety margin" culture | Deliberate overexposure to avoid repeat |

### 5.4 Prevention Strategies

#### Departmental Level
- Establish **target EI and DI reference values** for every standard projection
- Implement **mandatory DI recording** in the radiographic report or PACS metadata
- Conduct **quarterly EI audits** across all rooms and operators
- Calibrate AEC systems specifically for digital detectors (not film-based calibration)
- Publish and enforce **standardised technique charts** with digital-specific values

#### Individual Radiographer Level
- Check EI/DI after every exposure
- Question any exposure producing DI > +1 before the patient leaves the department
- Do not equate "better quality" with higher dose — SNR beyond a threshold does not improve diagnostic confidence
- Apply the **ALARA principle** (As Low As Reasonably Achievable) consistently

#### Institutional Level
- Establish **Diagnostic Reference Levels (DRLs)** for all standard projections
- Compare departmental dose data with national/international DRLs
- Implement **dose management software** (e.g., DoseWatch, Radimetrics) for automated tracking

---

## 6. Automatic Exposure Control (AEC)

**Automatic Exposure Control** is an electronic system that automatically terminates the X-ray exposure when the image receptor has received a pre-determined radiation dose. The use of AEC is mandatory in most modern radiographic installations for all table and wall-bucky examinations.

### 6.1 AEC Components and Operation

A typical AEC system consists of:

1. **Ionisation chambers** — thin, air-filled detectors positioned in the X-ray field between the patient and image receptor (or within the bucky)
2. **Comparator circuit** — continuously monitors the charge accumulated in the ionisation chamber
3. **Termination relay** — interrupts the high-voltage circuit when the preset charge level is reached
4. **Backup timer** — terminates the exposure after a maximum preset time to prevent equipment damage and patient overexposure if AEC fails

### 6.2 AEC Chamber Selection

Modern bucky systems provide **three ionisation chambers** arranged in a standard configuration:

```
┌─────────────────────────────────┐
│                                 │
│   ┌──────┐  ┌──────┐  ┌──────┐ │
│   │  L   │  │  C   │  │  R   │ │
│   │      │  │      │  │      │ │
│   └──────┘  └──────┘  └──────┘ │
│                                 │
└─────────────────────────────────┘
         L = Left   C = Centre   R = Right
```

**Recommended chamber selection by examination:**

| Examination | AEC Chamber Selection | Rationale |
|---|---|---|
| Chest PA | Left + Right (bilateral) | Lung fields; avoid mediastinum |
| Chest AP (supine) | Centre | Uniform lung field exposure |
| Abdomen AP | Centre | Liver/paraspinal muscle density |
| Lumbar spine AP | Centre | Vertebral body density |
| Lumbar spine lateral | Centre | Vertebral body density |
| Pelvis AP | Centre | Bladder/pelvic soft tissue |
| Skull AP/PA | Centre | Uniform cranial density |
| Knee AP | Centre | Femoral condyle density |

:::caution Common AEC Error
Selecting the **central chamber for chest PA** in a normal-sized patient will cause the AEC to read the mediastinal density and terminate the exposure early — resulting in **underexposed lung fields** (DI will be negative). Always use bilateral chambers for chest PA.
:::

### 6.3 AEC Calibration for Digital Systems

Screen-film AEC calibration is **not directly transferable** to digital systems. Key differences:

- Digital detectors have different spectral sensitivity curves compared to film
- The target detector dose for digital systems is typically **lower** than for screen-film
- AEC calibration must be performed by a medical physicist using the specific digital detector in clinical use
- Recalibration is required after detector replacement, major software upgrades, or generator servicing

### 6.4 AEC Density Settings

Most systems provide a **density selector** (typically −2 to +2 or −3 to +3) that adjusts the AEC termination threshold:

- **Positive settings** (+1, +2): AEC delivers more dose (useful for dense anatomy, AP hip)
- **Negative settings** (−1, −2): AEC delivers less dose (useful for thin patients, paediatrics)
- **Zero (0)**: Standard calibrated dose for the selected chamber and anatomy

### 6.5 Backup Timer

The backup timer must be set to a maximum exposure time that:
- Prevents tube damage from extended exposure
- Protects the patient from gross overexposure if AEC fails (e.g., ionisation chamber outside primary field)
- Is **short enough to be protective** but **long enough to allow normal exposures**

**Guideline**: Set backup timer to 150–200% of the expected maximum exposure time for the given examination and patient type.

---

## 7. Digital Post-Processing

All digital radiographic images undergo automated post-processing before display. Understanding these processes is essential for interpreting image appearance and recognising processing artefacts.

### 7.1 Image Acquisition and Raw Data

The raw digital image represents the spatial distribution of X-ray photon detection across the detector surface. This "for-processing" data contains:
- Full dynamic range of the detector
- Pre-log (linear) or log-transformed pixel values
- No rescaling or window/level adjustment

### 7.2 Histogram Analysis and Segmentation

The first post-processing step analyses the **pixel value histogram** to identify:
- The diagnostically relevant region of the image (anatomy)
- Background regions (direct beam, collimator blades)
- The optimal range for display

This step is anatomy-specific — the system applies different histogram analysis algorithms for chest, abdomen, extremities, etc. Incorrect anatomy selection can result in display errors and inaccurate EI values.

### 7.3 Rescaling and Look-Up Table (LUT) Application

A **Look-Up Table (LUT)** maps raw detector pixel values to display values. Rescaling ensures that:
- Images appear with consistent brightness regardless of detector dose level
- Display is optimised for the specific anatomy and projection
- The "for-presentation" image is appropriate for diagnostic reporting

This is the primary mechanism by which digital systems mask dose variation from the viewer — a major contributor to dose creep.

### 7.4 Frequency Processing

**Frequency processing** selectively enhances or suppresses different spatial frequency components of the image:

#### Edge Enhancement (High-Frequency Enhancement)
- Amplifies boundaries between structures with different attenuation
- Improves perception of fracture lines, cortical margins, trabecular pattern
- Over-enhancement produces **ringing artefacts** at high-contrast boundaries
- Under-enhancement produces a flat, "soft" appearance

#### Noise Reduction (Low-Frequency Enhancement / Smoothing)
- Suppresses high-frequency quantum noise (graininess)
- Applied more aggressively at lower doses
- Over-smoothing obscures fine detail — particularly pneumothorax lines, small vessel margins
- Creates a characteristic "waxy" or "painted" image appearance

#### Multi-Frequency Processing
Modern systems apply different processing parameters to different frequency bands simultaneously, allowing independent optimisation of noise suppression and detail enhancement.

### 7.5 Dynamic Range Compression

For examinations with wide inherent subject contrast (e.g., chest), **dynamic range compression** adjusts local image contrast to simultaneously demonstrate:
- Lung parenchyma
- Mediastinal structures
- Retrocardiac regions
- Costophrenic angles

Without dynamic range compression, a single display window cannot adequately show all these regions simultaneously.

### 7.6 Stitching and Multi-Panel Reconstruction

For long-segment examinations (scoliosis, whole-spine, lower limb alignment), multiple overlapping acquisitions are automatically **stitched** into a single composite image. This requires:
- Consistent patient positioning between panels
- Overlapping anatomy for registration
- Correction of geometric distortion at panel edges

Stitching artefacts (mis-registration, brightness discontinuities) are a recognised pitfall in these examinations.

---

## 8. Technique Charts for Digital Radiography

A **technique chart** is a documented set of exposure parameters for every standard projection performed in the department. It forms the basis of standardised, reproducible, ALARA-compliant radiographic practice.

### 8.1 Rationale and Regulatory Requirements

Technique charts are:
- Required by radiation protection regulations in most jurisdictions
- Essential for new staff training and orientation
- The reference standard for quality assurance audits
- The benchmark against which DRLs are compared

### 8.2 Parameters Specified in a Digital Technique Chart

A comprehensive digital technique chart should specify:

| Parameter | Purpose |
|---|---|
| Projection (AP, PA, Lateral, etc.) | Defines anatomy and geometry |
| kVp | Subject contrast; penetration |
| mAs (manual) or AEC chamber + density | Detector dose level |
| Target EI | Expected detector dose at optimum technique |
| Acceptable DI range | Defines repeat/review threshold |
| SID | Geometric magnification control |
| Grid: yes/no; ratio; type | Scatter control |
| Collimation guidance | Field size limits; dose optimisation |
| Focus (small/large) | Focal spot size for the projection |
| Orientation (portrait/landscape) | Image receptor alignment |
| Special instructions | Breathing instructions; immobilisation; shielding |

### 8.3 Sample Digital Technique Chart (Adult — 70 kg Reference Patient)

| Projection | kVp | mAs | AEC | Target EI | DI Range | SID | Grid |
|---|---|---|---|---|---|---|---|
| Chest PA | 120 | AEC | L+R, 0 | 300 | ±1 | 180 cm | Yes (10:1) |
| Chest AP (supine) | 110 | AEC | Centre, 0 | 300 | ±1 | 110 cm | Yes |
| Abdomen AP | 80 | AEC | Centre, 0 | 250 | ±1 | 110 cm | Yes |
| Lumbar spine AP | 85 | AEC | Centre, 0 | 250 | ±1 | 110 cm | Yes |
| Lumbar spine Lateral | 90 | AEC | Centre, +1 | 300 | ±1 | 110 cm | Yes |
| Pelvis AP | 80 | AEC | Centre, 0 | 250 | ±1 | 110 cm | Yes |
| Hip AP | 80 | AEC | Centre, +1 | 250 | ±1 | 110 cm | Yes |
| Skull AP | 75 | AEC | Centre, 0 | 200 | ±1 | 110 cm | No |
| Knee AP | 65 | 8 mAs | — | 200 | ±1 | 110 cm | No |
| Knee Lateral | 65 | 6 mAs | — | 200 | ±1 | 110 cm | No |
| Ankle AP | 60 | 5 mAs | — | 200 | ±1 | 100 cm | No |
| Foot AP | 55 | 4 mAs | — | 200 | ±1 | 100 cm | No |
| Hand PA | 55 | 3 mAs | — | 200 | ±1 | 100 cm | No |
| Wrist PA | 55 | 3 mAs | — | 200 | ±1 | 100 cm | No |

*Values are indicative; local calibration by medical physicist required before clinical implementation.*

---

## 9. Technique Modifications for Special Patient Groups

### 9.1 Paediatric Radiography

Children present unique technical challenges and dose considerations:

#### Dose Considerations
- Children are **3–10× more radiosensitive** than adults (greater proportion of dividing cells; longer lifespan for cancer expression)
- Paediatric gonadal and breast doses are significantly higher relative to body size for equivalent projections
- The **ALARA principle** applies with particular rigour

#### Technical Modifications

| Age Group | Weight Range | Technique Approach |
|---|---|---|
| Neonate (0–1 month) | 2–5 kg | Minimum kVp; lowest detectable mAs; no grid |
| Infant (1–12 months) | 5–10 kg | Weight-based chart; no grid for extremities |
| Toddler (1–5 years) | 10–20 kg | Age/weight chart; grid for trunk only |
| Child (5–10 years) | 20–35 kg | Paediatric technique chart; grid for trunk |
| Adolescent (10–16 years) | 35–55 kg | Adult technique at lower end of range |

**Paediatric-specific measures:**
- **Immobilisation devices** reduce motion blur and repeat exposures (net dose reduction)
- **Gonadal shielding** where it does not obscure diagnostic anatomy (evidence for routine shielding is evolving — follow local guidelines)
- **Tight collimation** to reduce scatter and dose to non-target tissues
- **Paediatric processing protocols** on PACS — do not apply adult processing to paediatric images
- Consider **dose reduction software** and AI-based noise suppression tools

:::info ALARA in Paediatrics
The **Image Gently** campaign (www.imagegently.org) provides evidence-based dose reduction guidelines for paediatric radiography, endorsed by the Society of Pediatric Radiology and major radiological associations. Consider adopting their technique recommendations.
:::

### 9.2 Bariatric (Obese) Patients

Patients with BMI >35 present significant technical challenges:

| Challenge | Solution |
|---|---|
| Increased tissue thickness → high scatter | Use high grid ratio (12:1 or 16:1) |
| Higher mAs required | AEC density selector +1 or +2; increase backup timer |
| Higher kVp may be needed | 90–100 kVp for abdomen/pelvis vs. standard 80 kVp |
| Motion due to limited breath-hold | Shortest possible exposure time; high mA station |
| Image receptor outside standard holder | Use portable detector; custom positioning |
| DI may be low despite adequate technique | Verify AEC chamber alignment with anatomy |

### 9.3 Trauma Radiography

Trauma patients require rapid imaging with potentially suboptimal positioning:

- **Speed over perfection**: Prioritise patient stability; accept some geometric compromise
- **Portable radiography**: Lower SID, more scatter, less dose efficiency — maximise mAs appropriately
- **Trauma series**: Cervical spine (cross-table lateral), chest AP, pelvis AP as primary survey
- **Horizontal beam technique**: For fluid levels (haemothorax, pneumothorax)
- **Immobilisation devices in field**: Document and note on radiograph; do not remove unless cleared by clinician

### 9.4 Pregnant Patients

If radiography is clinically indicated and cannot be delayed:

- **Calculate and document foetal dose** for all projections involving the pelvis/abdomen
- **Foetal dose thresholds**: Deterministic effects unlikely below 100 mGy; stochastic risk present at any dose
- **Shielding**: Lead apron over uterus for projections not directly involving the pelvis
- **Justify each projection**: Limit to essential views; avoid routine follow-up series
- Inform clinician and document discussion in the radiographic report

---

## 10. Common Technique Errors: Analysis and Correction

### 10.1 Systematic Error Analysis

A systematic approach to technique errors uses the **EI/DI** as the primary diagnostic tool, supplemented by visual image analysis.

### 10.2 Error Classification and Management

| Error | Clinical Presentation | EI/DI | Probable Cause | Corrective Action |
|---|---|---|---|---|
| **Overexposure** | Image appears acceptable or slightly noisy | DI > +2 | mAs too high; AEC miscalibrated; incorrect density | Reduce mAs; recalibrate AEC |
| **Underexposure** | Quantum mottle/noise; grainy appearance | DI < −2 | mAs too low; AEC chamber outside primary field | Increase mAs; verify chamber position |
| **Motion unsharpness** | Blurred margins; double contours | Normal | Long exposure time; uncooperative patient | Increase mA/decrease time; immobilise |
| **Geometric unsharpness** | Blurred edges; magnified anatomy | Normal | Long OFD; small SID; large focal spot | Reduce OFD; increase SID; use small focus |
| **Grid cut-off** | Density loss at image margins or throughout | Low (falsely) | Incorrect SID; angled tube; inverted grid | Correct SID; centre beam; check grid orientation |
| **Artefact: lead marker** | Dense opacity at known marker position | Falsely low EI | Marker in primary field | Reposition marker; note in report if pathology |
| **Processing error** | Incorrect display appearance; histogram failure | Normal or error | Wrong anatomy selected on console | Reprocess with correct anatomy; verify console protocol |
| **Collimation error** | Anatomy cropped; primary beam in field | Variable | Field size too small or too large | Adjust collimation; repeat if diagnostic adequacy affected |
| **Double exposure (CR)** | Ghost image from previous exposure | High | IP not erased before reuse | Erase and repeat; check IP handling protocol |
| **AEC backup timer** | Exposure terminated early; underexposed image | Low | AEC failure; chamber not in primary field | Check AEC; reposition; manual technique if necessary |

### 10.3 Repeat Analysis Programme

A formal **repeat/reject analysis** programme should:
- Record every repeated exposure and its reason
- Calculate **repeat rate** by category (patient preparation, positioning, exposure technique, equipment failure)
- Set target repeat rate thresholds (e.g., less than 5% overall; less than 2% for exposure-related repeats)
- Feed data into departmental quality improvement cycles quarterly

---

## 11. Quality Assurance in Digital Technique

### 11.1 Medical Physicist Acceptance Testing

Before a new digital system enters clinical service, a medical physicist must perform acceptance testing including:
- Detector dose response linearity
- EI calibration verification
- AEC calibration and uniformity
- Spatial resolution (MTF measurement)
- Noise characteristics (NPS measurement)
- Artefact survey
- Constancy of post-processing algorithms

### 11.2 Routine Quality Control Tests

| Test | Frequency | Performed By | Action Level |
|---|---|---|---|
| Flat-field uniformity | Daily | Radiographer | >5% non-uniformity |
| EI constancy | Weekly | Radiographer | DI > ±0.5 from baseline |
| Artefact survey | Daily | Radiographer | Any clinically significant artefact |
| Spatial resolution | Monthly | Radiographer/physicist | >10% MTF degradation |
| AEC calibration | 6-monthly | Physicist | Dose >20% from target |
| Full system performance review | Annual | Physicist | Any parameter outside tolerance |

---

## 12. Chapter Summary

<div className="chapter-summary-box">

### Key Points

- **kVp** determines subject contrast and beam penetration; digital post-processing adjusts display contrast but cannot replace optimal kVp selection at acquisition
- **mAs** controls detector dose and SNR; it is monitored via the Exposure Index (EI) in digital systems
- **IEC 62494-1** standardises EI and DI reporting across manufacturers; DI quantifies deviation from target detector dose
- **Dose creep** is an insidious hazard of digital radiography, driven by the visual acceptability of overexposed images; prevention requires systematic EI/DI monitoring and technique chart compliance
- **AEC** must be calibrated specifically for digital detectors; chamber selection must align with the diagnostic anatomy of interest
- **Post-processing** (rescaling, frequency enhancement, dynamic range compression) optimises image appearance but can mask technique errors from the viewer
- **Technique charts** must be specific to digital systems, anatomy-based, and reviewed at least annually
- **Special populations** (paediatric, bariatric, trauma, pregnant) require modified techniques and heightened dose awareness
- **Repeat analysis** and quality assurance programmes provide the institutional framework for maintaining optimal technique standards

</div>

---

## Review Questions

<div className="review-questions">

**1.** A chest PA examination produces a DI of +2.8. The image appears visually acceptable. What action should be taken, and why?

**2.** Explain why selecting the central AEC chamber for a PA chest radiograph in an adult patient may result in underexposed lung fields.

**3.** A paediatric department transitions from screen-film to digital radiography. Three months later, a dose audit reveals average entrance surface doses have increased by 40% compared to screen-film technique. Propose three likely causes and appropriate interventions.

**4.** Describe the inverse square law and calculate the mAs adjustment required when SID is changed from 100 cm to 180 cm, assuming a starting mAs of 20.

**5.** Compare and contrast the mechanisms of dose creep in a 200-bed district general hospital versus a specialist paediatric centre. Why might the paediatric centre be at greater risk?

**6.** A radiographer notices that all knee AP projections performed in Room 3 produce DI values consistently around −1.8, while the same projections in Room 4 produce DI values of 0. Outline a systematic approach to identifying the cause.

</div>

---

## Further Reading

- **Burns, S. (ed.)** *Radiographic Technique: A Practical Guide*. 4th ed. Society of Radiographers, 2021
- **Carlton, R.R. & Adler, A.M.** *Principles of Radiographic Imaging: An Art and a Science*. 6th ed. Cengage Learning, 2019
- **IEC 62494-1:2008+AMD1:2022** — Medical electrical equipment: Exposure index of digital X-ray imaging systems
- **Image Gently Alliance** — Paediatric radiation dose reduction guidelines: [www.imagegently.org](https://www.imagegently.org)
- **European Commission** — *Radiation Protection No. 180: Diagnostic Reference Levels in Thirty-six European Countries*, 2014
- **IPEM Report 32** — Measurement of the Performance Characteristics of Diagnostic X-ray Systems, Part I: X-ray Tubes and Generators

---

<div className="chapter-navigation-footer">
  <div className="prev-chapter">← Previous: Digital Radiography Systems</div>
  <div className="next-chapter">Next: Viewing the Digital Radiographic Image →</div>
</div>
