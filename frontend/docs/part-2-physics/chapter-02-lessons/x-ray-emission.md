---
id: x-ray-emission
title: "X-Ray Emission Spectrum"
sidebar_label: "X-Ray Emission Spectrum"
---

# X-ray Emission Spectrum

The X-ray emission spectrum is the complete description of the X-ray beam leaving the tube — the distribution of photon energies, the total number of photons, and their spatial arrangement. It is the bridge between X-ray production physics and radiographic technique: every decision about kVp, mAs, filtration, and target material is ultimately a decision about shaping this spectrum to match the diagnostic task. A radiographer who can mentally model the emission spectrum under different technique conditions possesses the deepest possible understanding of image quality and dose optimisation.

<div className="book-objectives">

- Define beam quantity and beam quality and state how each is measured clinically
- Describe the complete shape of the X-ray emission spectrum, identifying the bremsstrahlung continuum, characteristic peaks, low-energy cutoff, and E_max
- Explain how the spectrum changes with alterations in kVp, mAs, filtration, and target material, and predict the effect on image quality and patient dose
- Define the half-value layer (HVL), describe how it is measured, and use it to characterise beam quality
- Distinguish between the first and second HVL and explain the homogeneity coefficient
- Define effective energy and explain its relationship to the HVL
- Describe the spatial intensity distribution of the X-ray beam, including the heel effect and inverse square law
- Explain the clinical applications and limitations of beam filtration
- Interpret and compare X-ray spectra from different imaging modalities
- Apply knowledge of the emission spectrum to optimise technique for specific clinical examinations

</div>

---

## Beam Quantity and Beam Quality

Before examining the spectrum in detail, it is essential to understand the two fundamental dimensions by which an X-ray beam is characterised:

### Beam Quantity

**Beam quantity** is the total number of X-ray photons in the beam — the measure of how much radiation is present.

**Clinical measure:** mAs (milliampere-seconds)
- mAs = mA × exposure time (seconds)
- Doubling mAs exactly doubles the number of photons produced
- Also expressed as **air kerma** (mGy) or **exposure** (mR) at a specified distance

**Factors affecting beam quantity:**

| Factor | Effect on Quantity | Relationship |
|---|---|---|
| mAs | Primary control | Directly proportional: Q ∝ mAs |
| kVp | Secondary control | Q ∝ kVp² (approximately) |
| Target Z | Minor | Q ∝ Z (bremsstrahlung efficiency) |
| SID | Reduces at detector | Q ∝ 1/d² (inverse square law) |
| Filtration | Reduces | Removes low-energy photons |

### Beam Quality

**Beam quality** is the penetrating power of the beam — determined by the energy distribution (spectrum shape) of the photons, not their number.

**Primary clinical measure:** kVp
**Objective measure:** Half-Value Layer (HVL)

- Higher kVp → higher photon energies → greater penetrating power → **harder beam**
- Lower kVp → lower photon energies → less penetrating → **softer beam**

**Key principle:** Quantity and quality can be changed independently:
- Increasing mAs increases quantity without changing quality (same spectrum shape)
- Increasing kVp increases both quality and quantity simultaneously
- Adding filtration increases quality while decreasing quantity

<div className="book-definition">

**Beam quantity** is the total number of X-ray photons per unit area at a given point, measured in mAs at the source or as air kerma (mGy) at the measurement point. **Beam quality** is the penetrating power of the X-ray beam, determined by the photon energy distribution. Quality is controlled primarily by kVp and filtration; quantity is controlled primarily by mAs. These two properties together — along with beam geometry — fully characterise the X-ray beam reaching the patient.

</div>

---

## The X-ray Emission Spectrum — Detailed Description

### The Unfiltered (Theoretical) Spectrum

The theoretical emission spectrum from the anode, before any filtration, has a characteristic shape that reflects the physics of bremsstrahlung production:

**Shape characteristics:**
- Begins at photon energy E = 0 (from near-zero energy-loss interactions)
- **Rises linearly** as photon energy decreases (more low-energy photons are produced because glancing electron–nucleus interactions are far more probable than direct-stop events)
- Reaches a **maximum intensity at very low energies** (near zero)
- **Cuts off abruptly at E_max = kVp (in keV)** — no photon can carry more energy than the electron that produced it
- Superimposed **characteristic radiation spikes** appear at fixed energies specific to the target material (for tungsten: 58 keV, 67 keV, 69 keV) — but only if kVp exceeds the K-shell binding energy (69.5 keV for tungsten)

**This theoretical spectrum is never seen in practice** — inherent filtration in every tube immediately removes the lowest-energy photons.

### The Clinically Observed (Filtered) Spectrum

The actual spectrum emerging from the tube exit port, after inherent and added filtration, differs substantially from the theoretical unfiltered spectrum:

**Shape characteristics of the filtered spectrum:**
- **Low-energy cutoff**: Photons below ~15–25 keV (depending on total filtration) are completely removed — they cannot penetrate the tube housing, oil bath, and filtration layers
- **Rising portion**: Intensity rises from the low-energy cutoff toward the spectrum peak
- **Peak**: Occurs at approximately **1/3 to 1/2 of E_max** (for typical clinical filtration)
- **Falling portion**: Intensity falls from the peak toward E_max
- **High-energy cutoff at E_max**: Sharp absolute cutoff at E_max = kVp (in keV)
- **Characteristic peaks**: Discrete spikes at 58 and 67 keV visible above the bremsstrahlung continuum when kVp ≥ 70 kVp

**The filtered spectrum resembles a rounded hill** — rising from a low-energy cutoff, peaking at intermediate energy, then falling to zero at E_max.

### Characteristic Radiation Peaks in the Spectrum

When kVp exceeds 69.5 kVp (the K-shell binding energy of tungsten), characteristic radiation peaks appear at:

| Peak | Transition | Energy | Relative Intensity |
|---|---|---|---|
| Kα₁ | L₃ → K | 59.3 keV | Most intense |
| Kα₂ | L₂ → K | 57.9 keV | Intense (close to Kα₁) |
| Kβ₁ | M₃ → K | 67.2 keV | Moderate |
| Kβ₂ | N₂,₃ → K | 69.1 keV | Weak |

In clinical descriptions, these are simplified to:
- **Kα ≈ 58 keV** (combined Kα₁ + Kα₂)
- **Kβ ≈ 67–69 keV** (combined Kβ lines)

The characteristic peaks represent a significant contribution to the total spectrum — particularly at 80–100 kVp where the peaks fall in the middle of the diagnostic energy range. At 120–140 kVp (CT range), the characteristic peaks at 58–69 keV are still present but represent a smaller fraction of the now broader bremsstrahlung continuum.

<div className="book-keypoint">

The abrupt **high-energy cutoff at E_max = kVp (in keV)** is one of the most important and reliable features of the X-ray emission spectrum. It follows directly from conservation of energy: no photon can carry more energy than the electron that produced it. This cutoff is used in tube voltage measurement — by measuring the maximum photon energy in the beam (using a dosimeter with energy discrimination), the actual peak kVp delivered by the generator can be verified independently. A measured E_max of 95 keV when 100 kVp is set indicates a 5% kVp error — detectable and correctable through generator calibration.

</div>

---

## Factors That Modify the Spectrum

### 1. Effect of Increasing kVp

Increasing kVp while keeping mAs constant produces **four simultaneous changes** to the spectrum:

**Change 1 — E_max increases**
The maximum photon energy rises proportionally with kVp. At 80 kVp: E_max = 80 keV. At 120 kVp: E_max = 120 keV. The spectrum extends to higher energies.

**Change 2 — The entire spectrum shifts to higher energies**
All bremsstrahlung photon energies increase because the electrons arrive at the anode with greater kinetic energy. The peak of the spectrum shifts to higher energy.

**Change 3 — Total output (beam quantity) increases**
Output ∝ kVp² approximately. Increasing kVp from 80 to 120 (+50%) increases output by approximately (120/80)² = 2.25× — more than doubling the photon output. This means the same mAs delivers more radiation to the patient and detector at higher kVp.

**Change 4 — Characteristic peaks unchanged in position**
The characteristic peak energies (58 keV, 67 keV) are fixed by tungsten's electron shell binding energies — they cannot shift with kVp. However, at higher kVp, new characteristic lines may appear (already present for tungsten K-lines above 70 kVp).

**Clinical consequence of increased kVp:**
- More penetrating beam → adequate exposure of thick or dense structures
- Higher mean energy → more Compton scatter relative to photoelectric effect → **reduced radiographic contrast**
- Greater efficiency → same detector exposure at lower mAs → **lower patient dose per image**
- Wider dynamic range exposed → more tissues within diagnostic range simultaneously

### 2. Effect of Increasing mAs

Increasing mAs while keeping kVp constant produces a **simple, uniform scaling** of the spectrum:

- Every point on the spectrum increases proportionally
- Spectrum **shape** (energy distribution) is unchanged
- E_max is unchanged (kVp unchanged)
- Mean energy is unchanged
- HVL is unchanged (beam quality unchanged)
- **All photon numbers scale by the same factor** as the mAs change

**Clinical consequence of increased mAs:**
- More photons reach the detector → less quantum noise → better low-contrast detectability
- Patient dose increases proportionally — **dose is directly proportional to mAs**
- No change in contrast (beam quality unchanged)
- No change in penetration (kVp unchanged)

### 3. Effect of Added Filtration

Adding filtration (aluminium, copper, or compound K-edge filters) to the beam:

**Changes to the spectrum:**
- **Removes the low-energy portion** of the spectrum preferentially (photoelectric attenuation ∝ 1/E³ → low-energy photons attenuated much more strongly)
- **Low-energy cutoff rises** — the threshold below which no photons are present shifts to higher energy
- **Spectrum peak shifts to higher energy** — the peak moves toward E_max as the low-energy flank is removed
- **Mean energy (effective energy) increases** — beam becomes harder
- **Total photon count decreases** — fewer photons overall, but the remaining photons are more useful (more penetrating)
- **E_max is unchanged** — the high-energy cutoff is unaffected by filtration

**Consequence for patient dose:**
- Low-energy photons removed by filtration would have been completely absorbed in the patient's superficial tissues (skin and subcutaneous fat) — contributing dose without reaching the detector
- Removing them reduces **skin dose and effective dose** without reducing diagnostic image quality
- This is the fundamental justification for mandatory minimum filtration requirements

**Consequence for image quality:**
- The harder beam may require slightly higher mAs to maintain detector exposure (fewer total photons)
- However, the harder beam penetrates more uniformly — better for thick or high-density regions
- **Contrast may decrease slightly** (harder beam → more Compton scatter) — acceptable trade-off against dose reduction

### 4. Effect of Changing Target Material

The atomic number (Z) of the anode target affects both the bremsstrahlung continuum and the characteristic peaks:

**Bremsstrahlung:** Output ∝ Z. Higher Z target → more efficient bremsstrahlung production per electron → greater photon yield. This is why tungsten (Z=74) is used for general radiography.

**Characteristic peaks:** Shift to lower energies for lower-Z targets (Moseley's Law: characteristic energies ∝ Z²):

| Target | Z | Kα Energy | Kβ Energy | K-edge | Threshold kVp |
|---|---|---|---|---|---|
| Molybdenum | 42 | 17.4 keV | 19.6 keV | 20.0 keV | 20 kVp |
| Rhodium | 45 | 20.2 keV | 22.7 keV | 23.2 keV | 23 kVp |
| Silver | 47 | 22.2 keV | 24.9 keV | 25.5 keV | 26 kVp |
| Tungsten | 74 | 58.0 keV | 67.2 keV | 69.5 keV | 70 kVp |

**Why this matters clinically:**
- At mammography kVp (25–35 kVp): tungsten produces NO characteristic radiation (its K-edge is at 69.5 keV, far above the beam kVp) — only low-energy bremsstrahlung
- Molybdenum at 28 kVp produces characteristic peaks at 17.4 and 19.6 keV — precisely within the optimal energy range for breast tissue imaging
- The molybdenum filter (0.03 mm) acts as a K-edge filter: it absorbs photons above 20 keV (above Mo K-edge) while transmitting the characteristic peaks — producing a near-monoenergetic beam at 17–20 keV

### Spectrum Modification Summary Table

| Change | E_max | Mean Energy | Total Photons | Contrast | Patient Dose |
|---|---|---|---|---|---|
| kVp ↑ | ↑ (= new kVp) | ↑ | ↑↑ (∝ kVp²) | ↓ | ↓ per image (if mAs reduced) |
| mAs ↑ | Unchanged | Unchanged | ↑ (proportional) | Unchanged | ↑ (proportional) |
| Filtration ↑ | Unchanged | ↑ | ↓ | ↓ slightly | ↓ |
| Z ↑ | Unchanged | Unchanged | ↑ | Unchanged | ↑ (more photons) |
| Z ↓ (Mo for mammo) | Unchanged | ↓ | ↓ | ↑ (lower energy → PE) | Variable |

---

## Half-Value Layer (HVL) — The Objective Measure of Beam Quality

### Definition

The **Half-Value Layer (HVL)** is the thickness of a specified attenuating material that reduces the **intensity of the X-ray beam to exactly half (50%)** of its original value under narrow-beam (good geometry) conditions.

- **Material specified**: Aluminium (Al) for diagnostic X-ray beams; lead (Pb) for higher-energy beams
- **Condition**: Narrow-beam geometry — collimated beam, detector far from attenuator to exclude scattered photons
- **Higher HVL = harder beam** (more penetrating; higher mean energy)
- **Lower HVL = softer beam** (less penetrating; lower mean energy)

The HVL provides an objective, reproducible measure of beam quality that accounts for the combined effect of kVp, filtration, and target material — superior to kVp alone as a quality descriptor.

### HVL Measurement Technique

**Equipment required:**
- Calibrated ionisation chamber (dosimeter)
- Graded aluminium attenuators (0.5, 1.0, 1.5, 2.0, 2.5, 3.0 mm Al sheets)
- Long SID (≥150 cm) to achieve narrow-beam geometry

**Procedure:**
1. Set a fixed technique (kVp, mAs) and record baseline dose rate (D₀)
2. Add aluminium attenuators in the beam path one at a time
3. Record dose rate after each addition: D₁, D₂, D₃...
4. Plot dose rate vs total aluminium thickness on a semi-logarithmic graph
5. Read off the aluminium thickness at which D = D₀/2 → this is the **HVL₁ (first HVL)**

**Important technical requirements:**
- The attenuator must be positioned **close to the tube** (minimises scatter reaching the detector)
- The detector must be positioned at a **large distance** from the attenuator (any scattered photons diverge away from the detector)
- This **narrow-beam geometry** ensures that scattered photons do not contribute to the measured transmission — giving a true measure of attenuation

### First and Second HVL

For a **monoenergetic beam**, every successive layer of attenuator reduces intensity by exactly 50%:
- After 1 HVL: 50% remaining
- After 2 HVL: 25% remaining
- After 3 HVL: 12.5% remaining
- HVL₁ = HVL₂ = HVL₃ (all equal)

For a **polyenergetic (clinical) X-ray beam**, successive HVL layers are **not equal**:
- The first layer removes low-energy photons preferentially → the transmitted beam is harder
- The second HVL is measured on this already-hardened beam → it requires a **thicker layer** to reduce by 50% again
- **HVL₂ > HVL₁** always for a polyenergetic beam

**The Homogeneity Coefficient (HC):**

**HC = HVL₁ / HVL₂**

- HC = 1.0 for a perfectly monoenergetic beam
- HC < 1.0 for a polyenergetic beam
- Typical clinical values: **0.5 – 0.7**
- Lower HC → more heterogeneous (broader energy spread) beam
- Higher HC → approaches monoenergetic behaviour (very heavily filtered beam)

**Clinical significance of HC:**
- Beam hardening artefacts in CT worsen as HC decreases (broader spectrum → more differential hardening)
- Dosimetry calculations are more complex for low-HC beams (depth dose varies as the beam hardens with depth)

### HVL Values Across Clinical Applications

| Modality | kVp | Total Filtration | HVL₁ (mm Al) | Mean Energy (approx.) |
|---|---|---|---|---|
| Mammography | 28 kVp | 0.03 mm Mo | 0.35 mm Al | ~17 keV |
| Paediatric chest | 60 kVp | 2.5 mm Al | 2.0 mm Al | ~25 keV |
| Extremity | 55 kVp | 2.5 mm Al | 1.8 mm Al | ~22 keV |
| Adult abdomen | 80 kVp | 2.5 mm Al | 3.0 mm Al | ~33 keV |
| Chest PA | 120 kVp | 2.5 mm Al | 5.0 mm Al | ~48 keV |
| CT (body) | 120 kVp | 2.5 mm Al + 0.2 mm Cu | 6.5 mm Al | ~55 keV |
| Fluoroscopy | 75 kVp | 2.5 mm Al | 2.8 mm Al | ~30 keV |

<div className="book-remember">

**HVL quick reference rules:**

- HVL increases with **higher kVp** (harder beam penetrates more Al)
- HVL increases with **more filtration** (already-hardened beam penetrates more Al)
- HVL is **independent of mAs** (beam quality unchanged by mAs)
- At the same kVp, **copper filters produce a higher HVL** than aluminium filters (copper hardens the beam more effectively per gram)
- The regulatory minimum HVL for tubes above 70 kVp is approximately **2.5–3.0 mm Al** — this corresponds to 2.5 mm Al total filtration

</div>

### Effective Energy

The **effective energy** (also called equivalent monoenergetic energy) is the energy of a hypothetical monoenergetic beam that would have the same HVL as the actual polyenergetic beam in the same attenuating material:

- Determined from the **mass attenuation coefficient** of aluminium at the HVL value
- Approximately: **E_eff ≈ (1/3 to 1/2) × kVp** for a standard filtered beam
- More precisely calculated from the HVL using published attenuation data

**Example:**
At 80 kVp, 2.5 mm Al filtration: HVL = 3.0 mm Al
From Al attenuation tables: μ/ρ at 3.0 mm HVL corresponds to approximately **33 keV**
→ Effective energy ≈ 33 keV (compared to E_max = 80 keV)

**Effective energy vs mean energy:**
- **Mean energy** = arithmetic average of all photon energies in the spectrum (weighted by fluence)
- **Effective energy** = energy giving the same HVL as the measured beam
- They are related but not identical — effective energy is slightly higher than mean energy for typical beams
- Both are approximately 1/3 to 1/2 of kVp for standard filtration

---

## Spatial Distribution of the X-ray Beam

### Isotropic Emission and Collimation

X-rays are emitted from the focal spot in **all directions simultaneously**. Without restriction:
- The beam would irradiate the entire room
- Patient dose would be enormous
- No useful diagnostic image would be possible

The collimator restricts the beam to the clinical area of interest. Within the collimated field, the intensity distribution is not uniform — governed by the **inverse square law** and the **anode heel effect**.

### Inverse Square Law

The X-ray beam diverges from the focal spot as a cone. As distance increases, the same total energy is spread over an increasingly large area (area ∝ d²), so intensity per unit area decreases:

**I ∝ 1 / d²** &nbsp;&nbsp; or &nbsp;&nbsp; **I₁/I₂ = d₂²/d₁²**

**Worked examples:**

*At SID = 100 cm, air kerma = 2.0 mGy. What is the air kerma at 150 cm?*

I₂ = I₁ × (d₁/d₂)² = 2.0 × (100/150)² = 2.0 × (2/3)² = 2.0 × 0.444 = **0.89 mGy**

*A radiographer stands 0.8 m from the patient during fluoroscopy and receives 0.5 mSv/hr. What is the dose at 2.0 m?*

D₂ = 0.5 × (0.8/2.0)² = 0.5 × 0.16 = **0.08 mSv/hr** (84% reduction)

**Inverse square law — dose at various distances:**

| Distance from source | Relative Intensity | % Reduction from 1 m |
|---|---|---|
| 0.5 m | 400% | (4× higher) |
| 0.7 m | 204% | (2× higher) |
| 1.0 m | 100% | Reference |
| 1.4 m | 51% | 49% |
| 2.0 m | 25% | 75% |
| 3.0 m | 11% | 89% |
| 4.0 m | 6.25% | 93.75% |

### The Anode Heel Effect and Beam Intensity Distribution

Within the X-ray field, intensity is not uniform across the field — it systematically decreases from the cathode side to the anode side, an effect called the **anode heel effect**:

**Physical cause:**
X-rays produced within the tungsten target must exit through the anode material before reaching the patient. Photons directed toward the **anode side** of the field must travel through more tungsten (because the anode face is angled) before exiting — they are progressively attenuated. Photons directed toward the **cathode side** travel through less tungsten → greater intensity.

**Magnitude of the heel effect:**

| Field Position | Approximate Intensity | Relative to Central Ray |
|---|---|---|
| 20° anode side | ~75% | −25% |
| 10° anode side | ~90% | −10% |
| Central ray | 100% | Reference |
| 10° cathode side | ~110% | +10% |
| 20° cathode side | ~120% | +20% |

The total variation across a 40 cm field at 100 cm SID with a 12° anode angle can be **30–40%** — clinically significant.

**Factors that increase the heel effect:**
- Smaller anode angle (steeper angle → more target material in the exit path)
- Shorter SID (larger field subtends a greater angular range)
- Larger field size (wider angular range sampled)
- Lower kVp (lower-energy photons more easily attenuated within the target)

**Clinical use of the heel effect:**

| Examination | Positioning | Rationale |
|---|---|---|
| AP thoracic spine | Shoulders toward cathode | Compensates for shoulder/thorax thickness gradient |
| Femur AP | Hip (thick) toward cathode | More uniform density along femur |
| Lower leg | Ankle (thin) toward anode | Compensates for tapering anatomy |
| Neonatal chest AP | Shoulders toward cathode | Thorax thicker than abdomen |
| Lateral lumbar spine | Lower back (thicker) toward cathode | Compensates for waist–pelvis gradient |

<div className="book-pearl">

The heel effect is often taught as a problem to be avoided — but experienced radiographers treat it as a **free compensating filter**. In AP thoracic spine radiography, the shoulder region is substantially thicker than the waist. Without compensation, the upper spine is underexposed and the lower spine overexposed. By positioning the shoulders toward the cathode (the high-intensity side), the natural intensity gradient of the heel effect compensates for the anatomical thickness gradient — producing more uniform spinal density without any additional hardware. This is elegant technique optimisation that costs nothing and requires no extra dose.

</div>

---

## Beam Filtration in the Emission Spectrum Context

### Why Filtration Shapes the Spectrum

The relationship between filtration and the spectrum can be understood through the attenuation equation:

For a monoenergetic beam: **I = I₀ × e^(−μx)**

For a polyenergetic beam, each energy component attenuates independently:

**I(E) = I₀(E) × e^(−μ(E) × x)**

Since **μ(E) ∝ 1/E³** (for photoelectric attenuation), low-energy photons have a much higher attenuation coefficient than high-energy photons. A given thickness of aluminium removes far more low-energy photons than high-energy photons — which is precisely why filtration hardens the beam.

### Filtration Materials and Their Spectral Effects

**Aluminium (Al, Z=13) — Standard filtration:**
- K-edge at 1.56 keV (below the diagnostic range → no K-edge enhancement)
- Smooth attenuation curve across the diagnostic range
- Effective for removing photons below ~25 keV
- Standard added filtration: 1.0–2.5 mm Al

**Copper (Cu, Z=29) — High-kVp hardening:**
- K-edge at 8.98 keV
- More effective than aluminium per unit thickness for removing photons in the 10–50 keV range
- Typically used as 0.1–0.3 mm Cu (equivalent to ~10–15 mm Al in filtering power)
- A thin Al layer is placed downstream of the Cu filter to absorb the copper's own characteristic X-rays (~8 keV)
- Used in CT scanners (combined with bow-tie filter), high-kVp fluoroscopy, and DSA

**Molybdenum (Mo, Z=42) — Mammography K-edge filter:**
- K-edge at 20.0 keV
- Photons below 20 keV: transmitted (characteristic peaks at 17.4 and 19.6 keV pass through)
- Photons above 20 keV: dramatically attenuated (above K-edge → photoelectric absorption surges)
- Effect: isolates the Mo characteristic peaks from the bremsstrahlung background → near-monoenergetic beam at 17–20 keV

**Rhodium (Rh, Z=45) — Mammography K-edge filter:**
- K-edge at 23.2 keV
- Transmits Rh characteristic peaks (20.2 and 22.7 keV)
- Blocks photons above 23.2 keV
- Provides slightly higher mean energy than Mo/Mo → used for denser breasts

### Regulatory Filtration Requirements

| Application | Minimum Total Filtration | Regulatory Basis |
|---|---|---|
| General radiography (&gt;70 kVp) | 2.5 mm Al equivalent | IEC 60601-1-3; UK IRR 2017 |
| General radiography (50–70 kVp) | 1.5 mm Al equivalent | IEC 60601-1-3 |
| General radiography (&lt;50 kVp) | 0.5 mm Al equivalent | IEC 60601-1-3 |
| Mammography | 0.5 mm Be inherent + Mo or Rh added | IEC 60601-2-45 |
| Dental intraoral | 1.5 mm Al (70 kVp) | As above |
| Fluoroscopy | 2.5 mm Al equivalent | As above |

---

## Leakage and Scatter Radiation

### Leakage Radiation

**Leakage radiation** comprises X-ray photons that exit the tube housing through paths other than the beam exit port:

- The lead-lined tube housing absorbs the vast majority of off-axis radiation
- **Regulatory limit**: Leakage radiation must not exceed **1 mGy/hour** at 1 metre from the tube focus, measured at the tube's maximum continuous rated load
- Modern tube housings achieve leakage levels well below this limit
- Leakage is the primary reason lead aprons remain important for fluoroscopists standing adjacent to the tube — even though scatter from the patient is usually the dominant dose source

**Sources of leakage:**
- Imperfect lead lining at housing seams and cable penetrations
- Lead lining thinning over time (manufacturing variation)
- Housing damage from dropped tubes

### Scatter Radiation

**Scatter radiation** (predominantly Compton scatter) is X-radiation that has interacted with the patient and changed direction:

- Emerges in all directions from the patient
- Reduces image contrast (adds diffuse background exposure to the detector)
- Is the **primary source of occupational radiation exposure** to radiographers, fluoroscopists, and interventional radiologists
- The scattered photon energies are lower than the incident beam (energy lost in Compton interaction) but still penetrating

**Scatter distribution and operator dose:**

| Position relative to patient | Approximate scatter intensity (% of incident beam at 1 m) |
|---|---|
| 90° from beam direction | ~0.1% |
| 135° (toward tube) | ~0.05–0.1% |
| 180° (backscatter) | ~0.1–0.15% |
| Fluoroscopist at 0.5 m | 1–5 mSv/hour (cumulative in procedures) |

**Scatter reduction strategies:**

| Strategy | Mechanism | Dose Reduction |
|---|---|---|
| **Collimation** | Reduces scatter-producing volume | 20–60% reduction in scatter |
| **Distance** | Inverse square law | 75% at 2× distance |
| **Anti-scatter grid** | Absorbs obliquely travelling scatter at detector | 80–90% scatter rejection |
| **Lead apron (0.25–0.5 mm Pb)** | Attenuates scatter to operator | 90–95% reduction |
| **Lead glass screen** | Shields operator's eyes and upper body | 90–95% reduction |
| **Ceiling-suspended shield** | Mobile leaded acrylic shield | 90–95% reduction |
| **kVp optimisation** | Higher kVp → more forward-directed scatter | Modest effect |

---

## Spectrum Comparison Across Modalities

Understanding how the spectrum differs between modalities explains why each modality uses different technique parameters:

### General Radiography (80 kVp, 2.5 mm Al)

- Bremsstrahlung continuum: 20–80 keV
- Characteristic peaks: 58 and 67 keV (visible above continuum)
- Mean energy: ~33–35 keV
- HVL: ~3.0 mm Al
- Optimised for: balanced soft tissue and bone contrast

### Chest Radiography PA (120 kVp, 2.5 mm Al, 180 cm SID)

- Bremsstrahlung continuum: 25–120 keV
- Characteristic peaks: 58 and 67 keV (smaller proportion of total)
- Mean energy: ~48–52 keV
- HVL: ~5.0 mm Al
- Optimised for: lung parenchymal detail; rib and mediastinal penetration; low dose

### CT (120 kVp, 2.5 mm Al + 0.2 mm Cu + bow-tie filter)

- Bremsstrahlung continuum: 30–120 keV
- Mean energy: ~55–60 keV
- HVL: ~6.5–7.0 mm Al
- Optimised for: minimum beam hardening artefacts; uniform detector exposure across full body width

### Mammography (28 kVp, Mo target, 0.03 mm Mo filter)

- Near-monoenergetic: 17.4 and 19.6 keV characteristic peaks dominate
- Bremsstrahlung above 20 keV removed by Mo K-edge filter
- Mean energy: ~17–18 keV
- HVL: ~0.3–0.4 mm Al
- Optimised for: maximum soft-tissue contrast at minimum glandular dose

### Fluoroscopy (75–90 kVp, 2.5 mm Al, pulsed mode)

- Similar to general radiography spectrum
- Mean energy: ~30–38 keV
- Continuous or pulsed (3–30 pulses/second)
- AEC continuously adjusts kVp and mAs as anatomy changes
- Dose rate: 1–100 mGy/min depending on mode

### Paediatric Radiography (55–65 kVp, 2.5 mm Al)

- Softer spectrum: 18–65 keV
- Mean energy: ~22–28 keV
- HVL: ~1.8–2.2 mm Al
- Lower kVp than adult (adequate penetration for smaller body)
- Lower mAs (less attenuation)
- Net effect: significantly lower dose than adult examination

---

## Applying Spectrum Knowledge to Clinical Technique

### Choosing kVp for Specific Examinations

The optimal kVp for any examination is the **minimum required to adequately penetrate the thickest part of the anatomy** while maintaining acceptable contrast:

| Anatomy | Typical kVp Range | Rationale |
|---|---|---|
| Finger, hand, foot | 45–55 kVp | Small, thin; high inherent contrast (bone/air) |
| Wrist, elbow, ankle | 55–65 kVp | Moderate thickness; good bone detail needed |
| Shoulder, knee | 65–75 kVp | Moderately thick; mixed bone/soft tissue |
| Pelvis, lumbar spine | 75–85 kVp | Thick; high-density bone |
| Chest PA | 100–125 kVp | Wide density range; lung air vs mediastinum |
| Abdomen | 70–80 kVp | Moderate thickness; low inherent contrast |
| Barium studies | 100–120 kVp | High-density contrast agent in GI tract |

### The 15% Rule in Practice

**The 15% Rule:**
- Increasing kVp by 15% approximately doubles beam output (equivalent to doubling mAs)
- Simultaneously requires halving the mAs to maintain the same detector exposure
- Net effect: same image density, slightly lower contrast, approximately **same or slightly lower patient dose**

**When to apply:**
- Large patients where higher penetration is needed
- High-density anatomy (thick abdomen, lateral spine)
- When the generator cannot deliver sufficient mAs at the current kVp

**When not to apply:**
- Low-contrast examinations where contrast is critical (soft tissue masses, GI studies without contrast)
- Examinations already at optimal kVp for contrast

### Dual-Energy and Spectral Imaging

Modern CT scanners and some radiographic systems can exploit spectral differences to extract additional diagnostic information:

**Dual-energy CT (DECT):**
- Two X-ray beams at different kVp (e.g., 80 kVp and 140 kVp) acquire data simultaneously or sequentially
- Material decomposition algorithms use differential attenuation at two energies to distinguish materials
- Applications: iodine quantification, uric acid crystal detection (gout), virtual unenhanced images, bone removal

**Photon-counting CT:**
- Next-generation detectors count individual photons and measure their energy
- Provides full spectral information for every detector pixel
- Allows virtual monoenergetic images at any keV, simultaneous multi-energy material decomposition, and substantially improved dose efficiency
- Entering clinical practice at major centres (2022–present)

<div className="book-important">

The **exposure index (EI)** is a digital detector's measure of the radiation exposure it received — displayed on every CR and DR image. It should be compared against the **target EI** for each examination type. An EI significantly above target indicates overexposure (excess patient dose); significantly below target indicates underexposure (increased image noise, possible repeat). Unlike film, digital detectors do not look over- or underexposed — the system normalises appearance automatically. **Regular audit of EI values** is the only way to detect systematic over- or underexposure in a digital department. This is a regulatory requirement under IR(ME)R 2017 (UK) and equivalent legislation elsewhere.

</div>

---

<div className="book-summary">

- **Beam quantity** (photon number, controlled by mAs) and **beam quality** (penetrating power, controlled by kVp) are independent beam properties. mAs changes quantity without affecting quality; kVp changes both simultaneously. Filtration increases quality while reducing quantity.
- The **X-ray emission spectrum** has a characteristic shape: a rounded continuum (bremsstrahlung) from a low-energy cutoff (~15–25 keV) to E_max = kVp (in keV), with discrete characteristic peaks superimposed at 58 and 67 keV for tungsten (when kVp ≥ 70 kVp).
- **Increasing kVp** raises E_max, shifts the spectrum to higher energies, increases output (∝ kVp²), and leaves characteristic line positions unchanged. **Increasing mAs** uniformly scales all photon numbers without changing spectrum shape. **Adding filtration** removes low-energy photons, raising mean energy (hardening) while reducing total count.
- The **Half-Value Layer (HVL)** — the attenuator thickness reducing beam intensity by 50% — is the objective measure of beam quality. For clinical beams, HVL₂ > HVL₁ because the polyenergetic beam hardens as it passes through attenuator. The **homogeneity coefficient** (HC = HVL₁/HVL₂) quantifies polychromaticity; typical values 0.5–0.7.
- **Effective energy** ≈ 1/3 to 1/2 of kVp for a standard filtered beam — the energy of the monoenergetic beam with equivalent HVL. Mean energy is the fluence-weighted average of all photon energies; effective energy is slightly higher.
- The **anode heel effect** produces 30–40% intensity variation across the field: cathode side (higher) to anode side (lower). It is clinically exploited by positioning the thicker anatomical region toward the cathode in AP thoracic spine, femur, and lower leg radiography.
- **Filtration materials** are selected for their spectral properties: Al for general dose reduction (&lt;25 keV removal); Cu for CT and high-kVp hardening (10–50 keV range); Mo K-edge filter for mammography (transmits 17–20 keV characteristic peaks; blocks above 20 keV); Rh for denser breasts.
- **Scatter radiation** is the dominant source of occupational exposure. Distance (inverse square law), collimation, lead shielding, and grids are the principal protective measures. Every doubling of distance from a scatter source reduces dose by 75%.
- **Exposure Index (EI)** monitoring is the essential quality assurance tool for detecting systematic overexposure in digital departments — where the wide detector latitude masks overexposure through automatic brightness normalisation.

</div>
