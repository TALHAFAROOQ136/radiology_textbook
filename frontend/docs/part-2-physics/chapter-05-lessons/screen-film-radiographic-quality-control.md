---
id: screen-film-radiographic-quality-control
title: "Screen-Film Radiographic Quality Control"
sidebar_label: "Screen-Film Quality Control"
---

<div className="book-chapter-header">
  <div className="chapter-number">Chapter 5 · Lesson 2</div>
  <h1 className="chapter-title">Screen-Film Radiographic Quality Control</h1>
  <p className="chapter-subtitle">
    Principles, methods, and systematic implementation of quality control programmes for conventional screen-film radiographic practice
  </p>
</div>

<div className="learning-objectives">

### Learning Objectives

By the end of this lesson, the student should be able to:

1. Define quality control (QC) in the context of screen-film radiography and distinguish it from quality assurance (QA)
2. Describe the role and function of sensitometry in processor quality control
3. Explain how a sensitometric control chart is constructed, maintained, and interpreted
4. Define base plus fog, speed index, and contrast index, and state their acceptable limits
5. Describe the safelight test and darkroom fog test procedures, including acceptance criteria
6. Explain the wire mesh test for screen-film contact and interpret its results
7. Outline the requirements for viewbox standardisation and the consequences of inadequate luminance
8. Describe repeat/reject analysis methodology and interpret the findings to drive quality improvement
9. Construct a comprehensive departmental QC schedule assigning tests, frequencies, and responsible personnel
10. Explain the role of QC in radiation dose optimisation and medicolegal accountability

</div>

---

## 1. Introduction: Quality Control in Diagnostic Imaging

### 1.1 Definitions

**Quality** in diagnostic radiography is defined as the consistent production of images that provide the diagnostic information required by the clinical referrer, at the lowest practicable radiation dose to the patient.

**Quality Assurance (QA)** is the overarching management system that plans, organises, and monitors all activities affecting image quality — including staff training, equipment procurement, documentation, and departmental policies.

**Quality Control (QC)** is the practical, technical component of QA: the set of specific tests, measurements, and corrective actions applied to equipment, materials, and processes to ensure they perform within defined specifications.

The distinction is important: QA is the system; QC is the tool that feeds data into that system. A department may have a written QA policy, but without rigorous QC testing, the policy has no empirical foundation.

### 1.2 The Purpose of QC in Screen-Film Radiography

In screen-film radiography, image quality is determined by a complex chain of events and materials:

```
Patient → X-ray exposure → Intensifying screen → Film → Darkroom handling
                                                        → Processor chemistry
                                                        → Processor mechanics
                                                        → Viewbox/viewing conditions
                                                        → Radiologist interpretation
```

Each link in this chain can degrade. QC programmes detect degradation at each stage, attribute it to its source, and restore the system to specification before diagnostic quality is compromised — and before the patient has been recalled for a repeat examination.

### 1.3 Regulatory and Professional Framework

Screen-film QC is required by:
- **Ionising Radiation (Medical Exposure) Regulations (IR(ME)R)** — UK; comparable legislation in other jurisdictions
- **IAEA Safety Reports Series No. 17** — Quality Assurance in Diagnostic Radiology (international)
- **IPEM Report 32** — Measurement of performance characteristics of diagnostic X-ray systems
- **ACR (American College of Radiology)** — Mammography QC Manual; general radiology QC guidelines
- **European Commission Radiation Protection No. 162** — Criteria for acceptability of radiological installations

QC records are medicolegally significant. They demonstrate due diligence in maintaining equipment performance and may be required in negligence proceedings or regulatory inspections.

### 1.4 Components of a Comprehensive Screen-Film QC Programme

A complete programme addresses every element of the imaging chain:

1. **Processor quality control** — sensitometry, chemistry, mechanical performance
2. **Screen and cassette maintenance** — cleaning, contact testing, speed matching
3. **Darkroom integrity** — safelight testing, light leak detection
4. **Viewbox and viewing conditions** — luminance, uniformity, cleanliness
5. **Repeat and reject analysis** — statistical monitoring of image quality failures
6. **X-ray equipment testing** — kVp accuracy, mAs linearity, AEC performance, focal spot size
7. **Radiation dose monitoring** — entrance surface dose, dose-area product records

This chapter addresses each component in detail.

---

## 2. Processor Quality Control: Sensitometry

Processor QC is the most frequently performed and arguably the most critical QC test in screen-film radiography. The automatic film processor is the single component most susceptible to day-to-day variation, and subtle chemistry changes can significantly degrade image quality before visual inspection detects a problem.

### 2.1 The Sensitometer

A **sensitometer** is a precision optical device that exposes a film strip to a standardised series of known light exposures, producing a range of densities from minimum (base + fog) to maximum (saturation) in discrete steps.

**Construction:** The sensitometer contains a calibrated light source and a step wedge (optical attenuator) that reduces light exposure by a fixed factor at each step — typically in 0.15 log exposure increments (a factor of approximately 1.41 between adjacent steps).

**Key requirements:**
- Output must be stable and reproducible (lamp intensity calibrated)
- Spectral output must match the sensitivity of the film being tested (blue-emitting or green-emitting sensitometer matched to the film type)
- Steps must be clearly distinguishable on the processed film

**Important:** The sensitometer must be used with the **same film type** as used clinically. Mixing film types invalidates the control chart.

### 2.2 The Densitometer

A **densitometer** measures the optical density (OD) of processed film by passing a calibrated light beam through the film and measuring the transmitted light.

**Optical density (OD)** is defined as:

`OD = log10 (I0 / I)`

Where I0 is the incident light intensity and I is the transmitted light intensity.

| OD Value | Transmission | Description |
|---|---|---|
| 0.00 | 100% | Completely clear (no film) |
| 0.30 | 50% | Half of light transmitted |
| 1.00 | 10% | One-tenth of light transmitted |
| 2.00 | 1% | Dense area |
| 3.00 | 0.1% | Very dense (nearly black) |
| 4.00+ | 0.01% | Maximum optical density (Dmax) |

**Densitometer requirements:**
- Regular calibration using certified neutral density calibration filters
- Point aperture appropriate for step size (typically 2–3 mm)
- Annual service and calibration verification

### 2.3 The Characteristic Curve (H and D Curve)

The relationship between log exposure and optical density for a given film-screen system is described by the **characteristic curve** (Hurter and Driffield curve, or H and D curve). Understanding this curve is essential for interpreting sensitometric measurements.

**Regions of the characteristic curve:**

```
    OD
  4 │                                        ┌── Shoulder (overexposure region)
    │                                      ╱
  3 │                                    ╱
    │                          ╱─────────  ← Linear (straight-line) portion
  2 │                        ╱              (diagnostic range)
    │                      ╱
  1 │              ╱──────
    │    ╱────────             ← Toe (underexposure region)
  0 │───
    └────────────────────────────────────── log Exposure
         Under  │   Diagnostic   │   Over
```

**Base + Fog (B+F):** The minimum density of the film with no exposure — includes the optical density of the film base (0.05–0.10 OD) and chemical fog produced by spontaneous development during processing (typically 0.05–0.15 OD).

**Speed point:** The density level corresponding to a defined exposure level on the linear portion of the curve — used to track processor speed (development activity).

**Contrast index (gradient):** The slope of the linear portion of the characteristic curve — a measure of the density difference produced per unit log exposure increment.

### 2.4 Control Chart Parameters

The sensitometric control chart tracks three key parameters derived from the processed sensitometric strip:

#### Base Plus Fog (B+F)

- **Definition:** Optical density of an unexposed (or minimally exposed) step on the sensitometric strip; represents the minimum possible film density
- **Clinical significance:** Elevated B+F reduces image contrast by lifting the dark end of the density scale; fog reduces the visibility of subtle low-density structures
- **Established control value:** Measured during processor setup from at least 5 consecutive reference strips
- **Acceptable variation:** ±0.03 OD from the established mean

**Causes of elevated B+F:**
- Fogged film (light leak, radiation, age, heat/humidity)
- Contaminated or exhausted developer
- Developer temperature too high
- Inadequate replenishment

#### Speed Index

- **Definition:** The optical density at a defined mid-scale step, typically the step closest to 1.0 OD above B+F (or as defined by the specific protocol in use)
- **Clinical significance:** The speed index reflects the development activity — how strongly the processor is developing the film; high speed = overdevelopment; low speed = underdevelopment
- **Acceptable variation:** ±0.10 OD from the established mean

**Causes of elevated speed index (overdevelopment):**
- Developer temperature too high
- Developer concentration too high (excessive replenishment or concentrated solution)
- Extended development time (slow film transport)

**Causes of decreased speed index (underdevelopment):**
- Developer temperature too low
- Developer exhaustion (insufficient replenishment)
- Diluted developer (replenishment pump failure; solution contamination with wash water)
- Reduced development time (fast film transport; worn rollers causing slippage)

#### Contrast Index

- **Definition:** The optical density difference between a high-density step and a low-density step on the sensitometric strip — a measure of the gradient (slope) of the characteristic curve in the diagnostic range
- **Clinical significance:** Reduced contrast index means less density difference per unit log exposure — images appear "flat" with reduced visual contrast; elevated contrast index may produce blocking (loss of detail in dense regions)
- **Acceptable variation:** ±0.10 OD from the established mean
- **Note:** Some protocols use **Dmax - Dmin** (density range) as the contrast index; others use a specific step difference (e.g., step 11 minus step 5)

### 2.5 Constructing and Maintaining the Control Chart

#### Establishing the Control Values (Setup)

1. Ensure the processor has been operating under normal conditions for at least 30 minutes (warm-up)
2. Expose sensitometric strips using the sensitometer and the film type in clinical use
3. Process 5 consecutive strips under normal operating conditions (same film type, same processor conditions)
4. Measure B+F, speed index, and contrast index for each strip
5. Calculate the mean of the 5 measurements for each parameter
6. These means become the **established control values** (target values)
7. Plot on the control chart with ±0.03 action limit lines for B+F and ±0.10 action limit lines for speed and contrast

#### Daily Operation

1. Each morning before clinical use, expose one sensitometric strip
2. Process the strip in the first run of the day (same conditions as clinical films)
3. Measure B+F, speed, and contrast
4. Plot on the control chart
5. Compare with action limits:
   - If all within limits: processor approved for clinical use
   - If any parameter exceeds a limit: **stop clinical processing; investigate; correct before resuming**

#### Control Chart Interpretation

The control chart is a continuous time-series record of processor performance. Analysis should consider not only whether individual values exceed limits, but also **trends**:

| Pattern | Significance | Action |
|---|---|---|
| Single value outside limit | Acute processor change or measurement error | Repeat measurement; if confirmed, investigate immediately |
| Gradual upward/downward drift | Progressive chemistry change (exhaustion or build-up) | Adjust replenishment; check temperature |
| Sudden step change | Chemistry replacement; roller cleaning; pump change | Verify cause; re-establish control values if justified |
| Cyclical variation | Related to workload patterns, weekend chemistry stagnation | Adjust replenishment; run standby films |
| Increased scatter (variability) | Processor instability; replenishment irregularity | Service processor; check replenishment pumps |

:::warning Action on Limit Breach
When any sensitometric parameter exceeds its action limit:
1. **Do not process clinical films until the cause is identified and corrected**
2. Repeat the sensitometric strip to confirm the reading is not a measurement error
3. Check developer temperature, replenishment levels, and solution condition
4. If correction requires chemistry change, re-expose and re-establish control values
5. Document the event, cause, corrective action, and resolution in the QC log
:::

### 2.6 Replenishment Rate Control

Processor chemistry is consumed during film development. **Replenishment** replaces consumed chemicals to maintain solution activity.

**Developer replenishment:**
- Triggered by film entering the processor (volume-based replenishment) or by timer (time-based)
- Typical rate: 60–100 mL per 35 × 43 cm film (varies by manufacturer and chemistry)
- **Under-replenishment:** Developer exhaustion → falling speed index → underdevelopment
- **Over-replenishment:** Excessive chemistry → rising speed and fog

**Fixer replenishment:**
- Fixer is consumed by dissolving silver halide from the film
- Under-replenishment → inadequate fixation → milky/cloudy image areas; residual silver causes fixer retention and eventual staining

**Verifying replenishment rates:**
- Measure volume dispensed per film using a graduated cylinder
- Verify pump calibration against manufacturer specification
- Adjust pump settings if out of specification

### 2.7 Developer Temperature Control

Developer temperature is the single most critical processor parameter:
- Optimal temperature for most rapid-access processors: **35°C ± 0.3°C**
- Manual/conventional processors: **20°C ± 0.5°C**
- A 1°C increase in developer temperature may increase speed index by 0.10–0.15 OD

**Temperature monitoring:**
- Verify with an independent calibrated thermometer daily
- Do not rely solely on the processor's internal temperature display
- Allow at least 30 minutes warm-up before use or sensitometric measurement

---

## 3. Screen and Cassette Quality Control

### 3.1 Intensifying Screen Cleaning

Dust, debris, and skin cells accumulate on screen surfaces during routine cassette use. Even a single particle of dust creates a white artefact on the processed image. Regular, systematic cleaning is essential.

#### Cleaning Procedure

1. Work in the darkroom or a clean, low-dust environment
2. Open cassette; lay flat with screens facing up
3. Apply a small amount of **manufacturer-approved antistatic screen cleaner** to a **lint-free cloth** — not directly to the screen surface
4. Wipe gently in straight, overlapping strokes from one end to the other
5. Allow screens to dry completely (minimum 10–15 minutes) before closing — residual moisture trapped against film causes artefacts and may damage the phosphor coating
6. Close cassette and return to clinical use

**Do not use:**
- Alcohol-based solvents (damage phosphor coating)
- Household cleaning products (chemical damage)
- Rough cloths or paper towels (scratch phosphor surface)
- Compressed air sprays (force debris into phosphor coating)

#### Cleaning Frequency

| Trigger | Frequency |
|---|---|
| Scheduled maintenance | Monthly minimum |
| White artefact detected on clinical image | Immediately |
| After cassette contamination (developer splash, etc.) | Immediately |
| After screen-film contact test failure | As part of investigation |

### 3.2 Screen-Film Contact Testing

#### Clinical Significance

Poor screen-film contact is a major cause of localised image blurring. A gap between the screen surface and the film emulsion allows light from the phosphor to spread laterally before reaching the film, producing geometric unsharpness proportional to the size of the gap. This can obscure:
- Fine fracture lines
- Trabecular bone detail
- Pulmonary vessel margins
- Small pneumothorax
- Microcalcifications (in mammography, even minor contact failure is unacceptable)

#### Wire Mesh Contact Test: Full Procedure

**Equipment required:**
- Wire mesh phantom (standard copper mesh; 40 mesh/inch is typical)
- Cassette to be tested
- Access to X-ray room and processor

**Exposure parameters:**
- kVp: 50–60 kVp (low kVp maximises contrast of the wire mesh)
- mAs: sufficient to produce approximately 0.8–1.2 OD in the clear areas of the mesh
- SID: 100 cm (standard)
- No grid
- Cassette lying flat on the table; mesh placed directly on top

**Processing:**
- Process under normal conditions

**Evaluation:**
- View the processed film at **2–3 metres distance** in a dimly lit room, NOT on a bright viewbox at close range (distant viewing limits spatial resolution to the level of the contact gap, making blurred areas more visible)
- Inspect for any region of reduced sharpness compared to the surrounding mesh

**Grading:**

| Finding | Grade | Action |
|---|---|---|
| Uniform sharpness throughout | Pass | Return to clinical use |
| Slight blurring at extreme corners | Borderline | Repeat test; allow cassette to stand vertically (air escape); retest |
| Blurring covering more than 1 cm² in any region | Fail | Remove from clinical use; investigate; replace foam or cassette |
| Central blurring | Fail — warped back | Replace cassette |
| Peripheral blurring | Fail — worn foam | Replace foam padding |

**Frequency:**
- All cassettes: every 6 months
- Any cassette suspected of contact failure: immediately
- New cassettes: before entry into clinical use

### 3.3 Screen Speed Uniformity Testing

All cassettes of the same screen type should produce equivalent film density when exposed to the same X-ray technique. Speed mismatch between cassettes of nominally the same type leads to:
- Inconsistent image density for the same technique
- Increased repeat rate as radiographers adjust technique for individual cassettes
- Unpredictable AEC performance

#### Speed Matching Procedure

1. Load all cassettes of the same type with the same film batch
2. Expose each cassette with identical technique (fixed mAs, same kVp, same SID, no grid)
3. Process all films simultaneously in the same processor run
4. Measure the OD of the processed films at the same anatomical point on each
5. Compare densities: acceptable if all within ±0.10 OD of the group mean

**Cassettes outside speed tolerance:** Remove from the matched group; use only where consistent speed matching is not required; label clearly.

### 3.4 Cassette Integrity Testing

#### Light Leak Test

1. Load cassette with unexposed film in the darkroom
2. Close and latch the cassette
3. Take the loaded cassette into a normally lit room for 2 minutes
4. Return to darkroom; process film without further exposure
5. Inspect processed film for any density (uniform or localised)
6. A clean, unexposed film (only B+F density) indicates no light leak

**Cassettes with any density above B+F fail the light leak test** and must be repaired or replaced before clinical use.

#### Visual Inspection Checklist

| Component | Check | Action if Defective |
|---|---|---|
| Cassette body | Cracks, deformation | Replace cassette |
| Hinge mechanism | Stiffness, misalignment | Service or replace |
| Latch and clasp | Secure closure; no gap when closed | Repair or replace |
| Felt/foam seal (perimeter) | Compressed, torn, or absent | Replace seal material |
| Screen surface | Scratches, stains, phosphor loss | Replace screen |
| Foam backing pad | Compressed, hardened | Replace foam |
| ID blocker window | Intact light-tight seal | Replace if cracked |

---

## 4. Darkroom Quality Control

### 4.1 The Darkroom as a Quality-Critical Environment

The darkroom is the most controlled environment in a screen-film department. Any uncontrolled light source — however faint — can reduce film contrast, increase fog, and degrade diagnostic quality. The darkroom must also be:
- Clean (dust-free to prevent screen contamination)
- Temperature and humidity controlled (film storage stability)
- Ergonomically designed (reduce handling artefacts)
- Adequately ventilated (processor chemical fumes; staff health and safety)

### 4.2 Safelight Testing

Safelights illuminate the darkroom during film handling with light of a wavelength to which the film is least sensitive. The "safety" of a safelight is not absolute — all safelights can fog film if conditions are inappropriate.

#### Safelight Requirements

| Film Type | Appropriate Safelight Filter | Colour |
|---|---|---|
| Blue-sensitive (conventional) | Wratten 6B or equivalent | Amber/orange |
| Green-sensitive (orthochromatic) | Wratten 0C or equivalent | Red/dark amber |
| Panchromatic (colour) | No safelight — total darkness only | — |

**Additional requirements:**
- Bulb wattage must not exceed the maximum specified for the filter housing (typically 15–25 W)
- Safelight must be positioned at least 1.2 m (4 feet) from the work surface
- Filter must be intact — no cracks, fading, or pinholes

#### Safelight Test (Sensitometric / Coin Method)

**Sensitometric method (quantitative):**
1. Use the sensitometer to expose a strip to produce a mid-scale density (approximately 0.8 OD)
2. Place the strip on the darkroom work surface under safelight conditions
3. Cover half the strip with an opaque card
4. Leave exposed to the safelight for 2 minutes from normal working distance
5. Process immediately
6. Measure density on covered and uncovered halves
7. **Acceptance criterion:** Density difference less than 0.05 OD between covered and uncovered halves

**Coin method (qualitative):**
1. Place an unexposed film on the work surface
2. Place a coin on the centre of the film
3. Expose to safelight for 4 minutes
4. Process
5. **Acceptance:** No visible coin impression on processed film

**Frequency:** Semi-annually; immediately when safelight bulb, filter, or position is changed.

### 4.3 Darkroom Fog Test

This test evaluates total darkroom fog from all sources (safelight, residual light leaks, background radiation):

**Procedure:**
1. Expose a film to produce a density of approximately 0.5 OD (using a sensitometric strip or a direct exposure)
2. Place the exposed (but unprocessed) film on the darkroom work surface
3. Work normally in the darkroom for 2 minutes
4. Process the film
5. Measure the density of the processed film
6. Compare to an unexposed control film processed identically

**Acceptance criterion:** Density increase less than 0.05 OD above the unexposed control

:::info Relationship to Safelight Test
The darkroom fog test evaluates the combined fog from all sources under normal working conditions. A passing darkroom fog test but failing safelight test indicates the safelight is the primary fog source. A failing darkroom fog test with a passing safelight test suggests a light leak source other than the safelight.
:::

### 4.4 Light Leak Detection

Light leaks in the darkroom are detected by **visual dark-adaptation inspection**:

1. Enter the darkroom and turn off all lights (including safelights and processor indicator lights)
2. Allow eyes to adapt for **5 minutes** — short-circuit visual pigment regeneration does not occur in less than 3–4 minutes in total darkness
3. Systematically inspect:
   - All four walls and ceiling for pinhole light transmission
   - Door frame perimeter (most common leak site)
   - Pass-through box seals
   - Ventilation grille covers
   - Processor access panel edges
   - Light switch covers and electrical outlet surrounds
   - ID printer/illuminator aperture

**Action for any identified light leak:**
- Mark the leak location (tape a piece of paper from the outside before switching lights back on)
- Seal with appropriate material (foam tape, blackout tape, flexible sealant)
- Repeat the light leak inspection after sealing
- Process a fogging test film to confirm resolution

**Frequency:** Monthly inspection; immediately after any structural work, door seal replacement, or installation of new equipment in the darkroom.

### 4.5 Darkroom Cleanliness and Environment

| Parameter | Requirement | Monitoring |
|---|---|---|
| Temperature | 18–22°C | Daily thermometer check |
| Relative humidity | 40–60% | Weekly hygrometer check |
| Ventilation | Negative pressure (processor fumes exhaust externally) | Monthly airflow verification |
| Cleanliness | No dust, debris on work surfaces | Daily visual inspection |
| Film storage | Vertical, in original packaging, away from heat/radiation | Monthly storage audit |

---

## 5. Viewbox Quality Control

### 5.1 Clinical Significance of Viewbox Performance

In screen-film radiography, the viewbox is the final display medium. All image quality gains from optimised exposure technique and processor control are wasted if the viewbox does not provide adequate, uniform, and consistent luminance for image interpretation.

Unlike digital monitors (which can be calibrated to a standard luminance-response function), viewboxes depend on fluorescent tube condition and surface cleanliness. Performance degrades gradually and may not be noticed until diagnostic errors occur.

### 5.2 Luminance Requirements

| Application | Required Luminance | Notes |
|---|---|---|
| General diagnostic reporting | 1500–3500 cd/m² | Most common requirement |
| Mammography reporting | Minimum 3000 cd/m² | EUREF/ACR requirement |
| Clinical review (secondary) | 1000–2000 cd/m² | Non-primary diagnosis |

**Luminance uniformity:** Variation across the illuminated surface should not exceed **±15%** of the mean luminance. Non-uniform viewboxes create the impression of density differences that do not exist in the film.

**Luminance matching:** All viewboxes used for primary diagnosis in the same department should be matched to within ±15% of each other. A film appears darker on a bright viewbox than on a dim viewbox — mismatched viewboxes prevent consistent interpretation of the same film on different display units.

### 5.3 Luminance Testing Procedure

**Equipment:** Calibrated photometer (luminance meter); calibration traceable to national standards.

**Procedure:**
1. Allow viewbox to warm up for 15 minutes before measurement
2. Clean the viewbox surface with a lint-free cloth
3. Measure luminance at 9 points: four corners, four edge midpoints, and centre
4. Record maximum, minimum, and mean values
5. Calculate uniformity: ((Lmax - Lmin) / Lmean) × 100%

**Acceptance criteria:**
- Mean luminance within specification for the application
- Uniformity: less than 30% variation (centre to corner)
- Matching between viewboxes: within ±15%

### 5.4 Viewbox Maintenance

| Maintenance Task | Frequency | Rationale |
|---|---|---|
| Surface cleaning | Daily | Finger marks and dust reduce transmitted light and perceived contrast |
| Tube replacement | When luminance below threshold | Fluorescent tubes degrade over 12–18 months of use |
| Diffuser cleaning | Monthly | Dust accumulation on diffuser panel reduces uniformity |
| Luminance measurement | Annually minimum | Detect tube degradation; confirm matching |
| Full inspection | Annually | Check tube contacts; starter condition; housing integrity |

### 5.5 Viewing Conditions at the Viewbox

Even a technically compliant viewbox fails to support optimal diagnosis in poor viewing conditions:

**Masking:** Unexposed areas of the film (areas not covered by the primary X-ray beam) transmit maximum viewbox light. This intense peripheral light reduces apparent contrast in the film image by dark-adaptation effects. Masking unexposed areas with black card reduces glare and significantly improves perceived contrast.

**Ambient light:** Ambient light reflects from the film surface, superimposing on the transmitted viewbox light and reducing effective contrast. Reporting rooms should have controllable, low ambient light. Direct illumination of the viewbox from windows or overhead lights must be avoided.

**Eye protection during viewing:** Never view a high-luminance viewbox with empty panels — the direct light can cause temporary visual adaptation effects that impair subsequent diagnostic viewing.

---

## 6. Repeat and Reject Analysis

### 6.1 Definitions

**Rejected film (reject):** Any film that is of insufficient quality for the diagnostic purpose for which it was taken and does not contribute to patient management.

**Repeated film (repeat):** A film taken to replace a rejected film on the same patient in the same session.

The distinction matters for dose calculation: rejected films contribute patient dose but not diagnostic benefit; repeated films add further dose to obtain the required image.

### 6.2 Purpose of Repeat/Reject Analysis

Repeat/reject analysis serves multiple functions:

| Function | Benefit |
|---|---|
| Identify technical problems | Processor failure, equipment malfunction |
| Identify training needs | Positioning errors, technique selection |
| Reduce patient radiation dose | Unnecessary repeats expose patients without benefit |
| Benchmark departmental performance | Compare against national standards |
| Audit resource use | Film cost; staff time; patient throughput |
| Support medicolegal accountability | Document quality management activity |

### 6.3 Methodology

#### Data Collection

All films removed from clinical use without contributing to a report must be logged. The log should record:
- Date, time, room, and operator
- Patient details (anonymised for audit purposes)
- Examination type and projection
- Reason for rejection (from standardised category list)

**Rejection reason categories:**

| Category | Subcategory Examples |
|---|---|
| **Positioning error** | Rotation, wrong projection, anatomy not included |
| **Exposure error** | Overexposure, underexposure, AEC failure |
| **Motion unsharpness** | Respiratory motion, patient movement, cardiac blur |
| **Artefact** | Processing artefact, screen artefact, foreign object |
| **Equipment failure** | Grid failure, Bucky failure, AEC malfunction |
| **Patient factors** | Unable to cooperate, body habitus issue, prosthesis |
| **Identification error** | Wrong patient labels, missing information |
| **Other** | Unexplained; miscellaneous |

#### Calculation of Repeat Rate

**Overall repeat rate:**
`Repeat rate (%) = (Number of repeated films / Total films produced) × 100`

**Category-specific rates:**
`Category rate (%) = (Repeats in category / Total films) × 100`

#### Benchmarks and Action Thresholds

| Metric | Target | Investigation Threshold |
|---|---|---|
| Overall repeat rate | Less than 5% | Greater than 10% |
| Exposure-related repeats | Less than 2% | Greater than 5% |
| Processing-related repeats | Less than 1% | Greater than 3% |
| Single operator repeat rate | Within 2% of departmental mean | More than 5% above mean |
| Single room repeat rate | Within 2% of departmental mean | More than 5% above mean |

### 6.4 Analysis and Action

Repeat/reject data should be reviewed at minimum monthly, at a departmental meeting attended by:
- Superintendent radiographer / QA lead
- Radiographers performing the work
- Medical physicist (quarterly or when equipment issues identified)
- Radiologist representative (for clinical quality discussion)

**Analysis process:**

1. **Trend analysis:** Is the overall rate stable, rising, or falling compared to previous periods?
2. **Category breakdown:** Which category accounts for the most repeats? Has this changed?
3. **Room analysis:** Is any specific X-ray room producing significantly more repeats?
4. **Operator analysis:** Is any specific individual producing significantly more repeats in a given category?
5. **Examination type:** Are specific projections (e.g., lateral lumbar spine) disproportionately represented?

**Closing the loop — PDSA cycle:**

```
Plan  → Identify the problem and plan an intervention
Do    → Implement the intervention (retraining, technique change, equipment repair)
Study → Re-measure the repeat rate after the intervention
Act   → Standardise the intervention if effective; escalate if not
```

All actions, interventions, and outcomes must be documented in the QC record.

---

## 7. X-Ray Equipment Quality Control

### 7.1 Overview

The X-ray generator and tube are tested by medical physics staff (at acceptance and periodically) and by radiographers (routine checks). The following parameters are relevant to screen-film quality:

### 7.2 kVp Accuracy

Incorrect kVp affects subject contrast and patient dose:
- **Test:** Non-invasive kVp meter placed in the primary beam; measure at clinical kVp settings
- **Acceptance criterion:** kVp within ±5% of indicated value at all clinical settings
- **Impact of kVp error:** 10 kVp error changes patient dose by approximately 25–30%

### 7.3 mAs Linearity

mAs (exposure output) should be proportional to the selected mAs value:
- **Test:** Ion chamber exposure measurement at multiple mA and time combinations
- **Acceptance criterion:** Coefficient of variation of exposure less than 10% across the mAs range
- **Impact of non-linearity:** Inconsistent density for nominally equivalent techniques

### 7.4 Automatic Exposure Control (AEC) Performance

AEC should deliver a consistent film density across patient sizes and projections:
- **Reproducibility test:** Expose a standard phantom at the same AEC setting 5 times; measure film density variation
- **Acceptance criterion:** Density variation less than ±0.10 OD
- **Thickness compensation test:** Expose phantoms of different thicknesses using AEC; verify consistent film density across the range

### 7.5 Focal Spot Size Testing

The focal spot determines image sharpness:
- **Test:** Star test pattern or pinhole camera technique
- **Acceptance criterion:** Effective focal spot size within 50% of manufacturer's nominal value
- **Impact:** Enlarged focal spot reduces spatial resolution; significant in fine-detail work (extremities, chest)

### 7.6 Collimation and Field Size Accuracy

- **Test:** Expose a cassette with a radiopaque ruler at standard SID; compare exposed field to light field
- **Acceptance criterion:** Light field and radiation field alignment within 1% of SID (i.e., within 1 cm at 100 cm SID)

---

## 8. Radiation Dose Monitoring

### 8.1 Entrance Surface Dose (ESD) Monitoring

Regular measurement of **entrance surface dose** for standard projections allows comparison with national **Diagnostic Reference Levels (DRLs)**:

| Projection | UK DRL (2019) | EU DRL |
|---|---|---|
| Chest PA | 0.1 mGy | 0.1 mGy |
| Lumbar spine AP | 4 mGy | 4 mGy |
| Lumbar spine lateral | 10 mGy | 10 mGy |
| Abdomen AP | 4 mGy | 4 mGy |
| Pelvis AP | 4 mGy | 4 mGy |
| Skull AP | 3 mGy | 3 mGy |

**If doses consistently exceed DRLs:** Investigate technique; review AEC calibration; optimise kVp/mAs; compare with technique chart.

### 8.2 Dose-Area Product (DAP)

DAP meters mounted on the X-ray tube measure the product of dose and irradiated area:
- **Units:** cGy·cm² or mGy·cm²
- Useful for comparing doses across different examination types and patient sizes
- Required for DRL compliance monitoring in many jurisdictions

---

## 9. Documentation and Records Management

### 9.1 QC Record Keeping

All QC test results must be documented and retained. Records serve as:
- Evidence of regulatory compliance
- Baseline for trend analysis
- Reference for medicolegal proceedings
- Training record for new staff

**Minimum retention period:** Most regulations require QC records to be retained for at least **5 years** (some jurisdictions require longer for mammography records).

### 9.2 Required Documentation

| Document | Content | Retention |
|---|---|---|
| Daily sensitometric chart | Date, B+F, speed index, contrast index, action taken | 5 years |
| Screen cleaning log | Date, cassette ID, operator | 2 years |
| Contact test log | Date, cassette ID, result, action | 5 years |
| Safelight test record | Date, method, result, action | 5 years |
| Viewbox luminance log | Date, measurements, results, action | 5 years |
| Repeat/reject analysis | Monthly summary, categories, actions | 5 years |
| Equipment service records | Test dates, results, engineer reports | Life of equipment |
| Corrective action log | Problem, cause, action taken, resolution | 5 years |

### 9.3 QC Responsibility Structure

| Role | Responsibility |
|---|---|
| Superintendent Radiographer | Oversee entire QC programme; sign off monthly reports |
| Named QC Radiographer | Perform daily and routine QC; maintain records |
| All Radiographers | Daily sensitometry; report artefacts; participate in reject analysis |
| Medical Physicist | Annual equipment testing; QC programme review; DRL monitoring |
| Radiology Manager | Resource allocation; ensure QC programme is funded and staffed |
| Radiation Protection Advisor (RPA) | Regulatory compliance review; DRL assessment |

---

## 10. Comprehensive QC Schedule

### 10.1 Daily Tasks

| Test | Performed By | Method | Action Limit |
|---|---|---|---|
| Processor sensitometry (B+F, speed, contrast) | QC radiographer | Sensitometer + densitometer | B+F ±0.03; speed/contrast ±0.10 OD |
| Darkroom cleanliness inspection | All radiographers | Visual | Any dust or debris on work surfaces |
| Processor feed tray cleaning | All radiographers | Visual + wipe | Visible contamination |
| Developer temperature check | QC radiographer | Independent thermometer | Outside ±0.5°C of setpoint |

### 10.2 Weekly Tasks

| Test | Performed By | Method | Action Limit |
|---|---|---|---|
| Crossover roller removal and cleaning | QC radiographer | Physical cleaning | Per manufacturer protocol |
| Screen cleaning (high-use cassettes) | QC radiographer | Approved cleaner + lint-free cloth | Visible contamination |
| Replenishment rate check | QC radiographer | Graduated cylinder measurement | Outside ±10% of specified rate |
| Fixer retention test | QC radiographer | Hypo estimator | Greater than 5 micrograms/cm² |

### 10.3 Monthly Tasks

| Test | Performed By | Method | Action Limit |
|---|---|---|---|
| Screen-film contact test (all cassettes) | QC radiographer | Wire mesh; viewed at 2 m | Any blurring |
| Cassette light leak test | QC radiographer | Exposed film in lit room | Any density above B+F |
| Darkroom light leak inspection | QC radiographer | Dark adaptation; visual | Any visible light |
| Safelight fog assessment | QC radiographer | Sensitometric or coin test | Greater than 0.05 OD difference |
| Screen cleaning (all cassettes) | QC radiographer | Approved cleaner | All cassettes cleaned |
| Repeat/reject analysis | Superintendent | Statistical analysis of collected data | Greater than 10% overall rate |
| Viewbox surface cleaning | All radiographers | Lint-free cloth | Visible contamination |
| Developer temperature verification | Medical physicist / QC radiographer | Calibrated thermometer | Outside ±0.5°C |

### 10.4 Semi-Annual Tasks

| Test | Performed By | Method | Action Limit |
|---|---|---|---|
| Safelight test (formal) | QC radiographer | Sensitometric method | Greater than 0.05 OD difference |
| Screen speed matching | QC radiographer | Uniform exposure; OD comparison | Greater than ±0.10 OD from mean |
| Full cassette visual inspection | QC radiographer | Inspection checklist | Any structural failure |
| Darkroom temperature/humidity audit | QC radiographer | Thermometer + hygrometer | Outside specification |

### 10.5 Annual Tasks

| Test | Performed By | Method | Action Limit |
|---|---|---|---|
| kVp accuracy | Medical physicist | Non-invasive kVp meter | Outside ±5% of indicated |
| mAs linearity | Medical physicist | Ion chamber | Coefficient of variation greater than 10% |
| AEC reproducibility and thickness compensation | Medical physicist | Phantom; ion chamber | Outside ±0.10 OD |
| Focal spot size | Medical physicist | Star test pattern | Greater than 50% above nominal |
| Field size and collimator alignment | Medical physicist | Ruler/film method | Greater than 1% of SID |
| Viewbox luminance and uniformity | Medical physicist | Calibrated photometer | Below specification; greater than 30% non-uniformity |
| Entrance surface dose survey | Medical physicist | TLD or ion chamber | Greater than national DRL |
| Full processor preventive maintenance | Service engineer | Strip-down and inspection | Per manufacturer schedule |

---

## 11. Chapter Summary

<div className="chapter-summary-box">

### Key Points

- **Quality Control (QC)** is the practical measurement and correction component of the broader Quality Assurance (QA) system; without QC data, QA policy lacks empirical foundation
- **Processor sensitometry** is the most critical daily QC task; the control chart tracks base plus fog (±0.03 OD), speed index (±0.10 OD), and contrast index (±0.10 OD); any limit breach requires cessation of clinical processing pending investigation
- **Trends on the control chart** are as diagnostically important as limit breaches; gradual drift indicates progressive chemistry change requiring replenishment adjustment
- **Screen-film contact testing** using the wire mesh phantom, viewed at 2–3 metres, detects poor contact causing localised image blurring; cassettes failing this test must be removed from clinical use
- **The safelight test** (sensitometric method; acceptance less than 0.05 OD fog difference) and **darkroom fog test** must be performed at least semi-annually and whenever safelight components change
- **Viewbox luminance** must meet minimum requirements for the application (1500–3500 cd/m² for general diagnosis; minimum 3000 cd/m² for mammography); uniformity should not exceed ±15% across the surface
- **Repeat/reject analysis** closes the quality loop by identifying the source of image quality failures; target overall repeat rate is less than 5%; category and operator analysis direct targeted interventions
- **Documentation** of all QC activities is mandatory; records must be retained for at least 5 years and are medicolegally significant
- **The QC schedule** assigns specific tests, frequencies, responsible personnel, and action thresholds to create a systematic, accountable programme; no element of the chain should be untested

</div>

---

## Review Questions

<div className="review-questions">

**1.** During processor sensitometric testing on a Monday morning, the QC radiographer records: B+F = 0.19 (control: 0.17), speed index = 1.32 (control: 1.18), contrast index = 1.45 (control: 1.51). Interpret these results, identify the most likely cause, and state the actions required before clinical use can resume.

**2.** A monthly repeat/reject analysis reveals that the overall repeat rate has risen from 4.2% last month to 8.9% this month. The category breakdown shows 60% of repeats are classified as "exposure error" and are distributed across three different X-ray rooms. Outline a systematic approach to identifying the cause and implementing corrective action.

**3.** Explain why the wire mesh contact test film should be viewed at 2–3 metres from the illuminator rather than at normal close viewing distance. Describe the expected appearance of a cassette with a central area of poor screen-film contact.

**4.** A darkroom safelight was recently replaced with a new bulb. The QC radiographer performs the sensitometric safelight test and measures a density difference of 0.09 OD between the exposed and covered halves of the test film. What does this result indicate, what are the possible causes, and what corrective actions should be taken?

**5.** The control chart for a processor in a busy department shows the following pattern over 3 weeks: speed index values have drifted from 1.20 to 1.32 over 15 working days, while B+F and contrast index remain within limits. No individual value has yet exceeded the ±0.10 action limit. Is action required? Explain the significance of this pattern and the appropriate response.

**6.** A newly qualified radiographer asks why the department should invest time and resources in QC when digital radiography is replacing screen-film. Outline the argument for maintaining a rigorous QC programme, referencing patient safety, regulatory requirements, and professional accountability.

</div>

---

## Further Reading

- **IPEM Report 32** — Measurement of the Performance Characteristics of Diagnostic X-ray Systems (multiple parts)
- **IAEA Safety Reports Series No. 17** — Quality Assurance in Diagnostic Radiology. Vienna: IAEA, 1997
- **ACR Mammography Quality Control Manual** — American College of Radiology, 1999
- **European Commission RP No. 162** — Criteria for Acceptability of Radiological, Nuclear Medicine and Radiotherapy Installations, 2012
- **Sprawls, P.** *Physical Principles of Medical Imaging.* 2nd ed. Medical Physics Publishing, 1995
- **AAPM Report No. 74** — Quality Control in Diagnostic Radiology. Madison, WI: AAPM, 2002

---

<div className="chapter-navigation-footer">
  <div className="prev-chapter">← Previous: Screen-Film Radiographic Artefacts</div>
  <div className="next-chapter">Next: Digital Radiographic Artefacts →</div>
</div>
