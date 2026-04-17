---
id: x-ray-interaction-with-matter
title: "X-Ray Interactions with Matter"
sidebar_label: "X-Ray Interactions with Matter"
---

# X-ray Interaction with Matter

Every diagnostic radiograph is a map of differential X-ray attenuation — a record of where photons were absorbed, scattered, or transmitted as they passed through the patient. The contrast between bone and soft tissue, the enhancement produced by iodinated contrast, the scatter fog that degrades an abdominal image, the reason a chest X-ray uses 120 kVp while a finger requires only 50 kVp — all of these phenomena arise from the same five fundamental mechanisms by which X-ray photons interact with matter. Mastery of these interactions is the theoretical foundation for every practical decision in radiographic technique.

<div className="book-objectives">

- Describe the five mechanisms of X-ray interaction with matter, stating the energy range, physical process, and probability dependence for each
- Explain the photoelectric effect in detail, including the role of binding energy, Z-dependence, and the production of characteristic X-rays and Auger electrons
- Describe Compton scattering using the Klein-Nishina relationship, explaining how scatter angle affects scattered photon energy and direction
- Explain pair production and its relevance to PET imaging and radiotherapy
- Define the linear attenuation coefficient, mass attenuation coefficient, and their relationship to tissue properties
- Apply the exponential attenuation law to calculate transmitted intensity through specified thicknesses of material
- Define and distinguish between absorption, scatter, and attenuation
- Explain the concepts of mean free path and half-value layer in terms of attenuation coefficients
- Relate the dominant interaction mechanism to radiographic contrast at different kVp settings
- Explain the K-edge phenomenon and its clinical application in contrast agents and K-edge subtraction imaging
- Describe how beam hardening arises from differential attenuation across the polyenergetic spectrum

</div>

---

## Overview: What Happens When X-rays Encounter Matter

When an X-ray photon enters a material, three outcomes are possible:

1. **Transmission**: The photon passes through without any interaction — contributing to the primary beam that reaches the detector
2. **Absorption**: The photon is completely absorbed — its energy is deposited in the material as ionisation and heat
3. **Scattering**: The photon interacts and changes direction — it may or may not deposit energy in the process

The relative probabilities of these outcomes depend on:
- **Photon energy** (E, in keV)
- **Atomic number of the absorber** (Z)
- **Physical density of the absorber** (ρ, g/cm³)
- **Thickness of the absorber** (x, cm)

These four variables collectively determine **attenuation** — the total reduction in primary beam intensity — which is the physical basis of all X-ray image contrast.

<div className="book-definition">

**Attenuation** is the reduction in X-ray beam intensity as it passes through matter, resulting from the combined effects of absorption (photoelectric effect, pair production) and scattering (coherent scatter, Compton scatter). It is not synonymous with absorption — scattered photons are attenuated from the primary beam even if their energy is not deposited locally. The degree of attenuation at any point in the patient determines the optical density or pixel value at the corresponding point in the image.

</div>

---

## Interaction 1: Coherent (Rayleigh) Scattering

### Physical Process

**Coherent scattering** (also called **Rayleigh scattering** or **classical scattering**) is an elastic interaction between a low-energy X-ray photon and an atom as a whole:

1. The incident photon's electromagnetic field interacts with the **entire electron cloud** of the atom simultaneously
2. The atom is set into oscillation at the photon's frequency
3. The oscillating electrons re-radiate a photon of **exactly the same energy** (same wavelength, same frequency) — elastic scattering
4. The re-emitted photon travels in a **slightly different direction** — predominantly in the forward direction (small angular deflection)
5. **No energy is transferred** to the atom; no ionisation occurs

### Probability and Energy Dependence

- Probability ∝ **Z² / E²** — strongly favoured by high atomic number and low photon energy
- Predominant at energies **below 30 keV**
- At 20 keV in soft tissue: coherent scatter constitutes approximately 10–12% of interactions
- Becomes negligible above 70 keV in soft tissue

### Clinical Significance

Coherent scattering has **minimal clinical importance** in diagnostic radiography:

- No ionisation → no direct radiation damage from this interaction alone
- No energy deposition → does not contribute to patient dose
- Scattered photons travel predominantly forward → may reach the detector but contribute minimally to image fog
- Slightly increases the effective field size by redirecting photons at small angles

The interaction is included for completeness and theoretical understanding; it does not meaningfully affect technique selection or image quality in the diagnostic range.

---

## Interaction 2: Photoelectric Absorption

### Physical Process — Step by Step

The **photoelectric effect** is the complete absorption of an X-ray photon by an inner-shell orbital electron. It is the most important interaction for image contrast formation in diagnostic radiology.

**Step 1 — Photon absorption by inner-shell electron:**
The incident X-ray photon is completely absorbed by a **tightly bound inner-shell electron** (usually the K-shell, occasionally the L-shell). For this to occur, the photon energy must be **at least equal to the binding energy** of that electron shell:

**Required condition: E_photon ≥ E_binding (shell)**

**Step 2 — Photoelectron ejection:**
The absorbed photon's energy is used to:
- Overcome the electron's binding energy (E_b)
- Accelerate the ejected electron (now called the **photoelectron**) with kinetic energy:

**KE_photoelectron = E_photon − E_binding**

The photoelectron travels a short distance through tissue, depositing its kinetic energy through ionisation of nearby atoms.

**Step 3 — Inner-shell vacancy creation:**
The ejected electron leaves a **vacancy in the inner shell** — the atom is now ionised with a missing inner-shell electron.

**Step 4 — De-excitation:**
The vacancy is immediately filled by one of two competing processes:

**(a) Characteristic X-ray emission:**
An outer-shell electron falls into the vacancy. The energy difference between the two shells is emitted as a **characteristic X-ray photon**:

E_characteristic = E_outer shell − E_inner shell

For K-shell vacancies in soft tissue elements (C, N, O, Z ≈ 6–8): characteristic X-ray energies are very low (&lt;0.5 keV) — immediately reabsorbed within nanometres.
For K-shell vacancies in iodine (Z=53): characteristic X-rays at ~28–33 keV — may travel a short distance before reabsorption.

**(b) Auger electron emission:**
Instead of emitting a characteristic X-ray, the de-excitation energy is transferred to another orbital electron (the **Auger electron**), which is ejected. No X-ray photon is emitted. The atom is left with two outer-shell vacancies.

The **fluorescence yield** (ω) determines which process dominates:
- Low-Z elements (tissue): ω ≈ 0–10% → Auger dominates → all energy deposited locally
- High-Z elements (iodine, barium, lead): ω ≈ 85–97% → characteristic X-rays dominate

### Probability Dependence

The photoelectric effect probability (cross-section, σ_PE) depends strongly on both photon energy and atomic number:

**σ_PE ∝ Z³ / E³**

This **cubic dependence on Z** has profound clinical consequences:

| Tissue / Material | Effective Z | Relative Photoelectric Probability (at 80 keV) |
|---|---|---|
| Air | 7.6 | Reference |
| Fat | 5.9 | 0.5× (lower — less C, more H) |
| Soft tissue / Water | 7.4 | ~1× |
| Bone (cortical) | 13.8 | (13.8/7.4)³ ≈ **6.4×** |
| Iodine | 53 | (53/7.4)³ ≈ **720×** |
| Barium | 56 | (56/7.4)³ ≈ **850×** |
| Lead | 82 | (82/7.4)³ ≈ **2,700×** |

This is why:
- Bone is clearly visible against soft tissue on radiographs
- Iodinated contrast produces dramatic vascular enhancement
- Lead is an effective radiation shield at diagnostic energies

### The K-Edge Phenomenon

The photoelectric cross-section is not a smoothly decreasing function of energy — it contains a series of **sharp discontinuities** called **absorption edges** (or K-edges, L-edges, M-edges):

**Physical explanation:**
- At photon energies just below the K-shell binding energy: K-shell electrons cannot be ejected (insufficient energy) → photoelectric absorption uses only L, M shells → lower total cross-section
- At photon energies just **at or above** the K-shell binding energy: K-shell electrons suddenly become available for photoelectric absorption → cross-section **jumps sharply upward** (2–10 fold increase)
- This discontinuity occurs at the energy corresponding exactly to the K-shell binding energy of the element

**K-edge energies of clinically important elements:**

| Element | Z | K-edge Energy | Clinical Relevance |
|---|---|---|---|
| Oxygen | 8 | 0.53 keV | Tissue constituent; below diagnostic range |
| Calcium | 20 | 4.04 keV | Bone; below practical diagnostic range |
| Iodine | 53 | 33.2 keV | IV contrast agent; within diagnostic range |
| Barium | 56 | 37.4 keV | GI contrast agent; within diagnostic range |
| Gadolinium | 64 | 50.2 keV | MRI contrast / K-edge subtraction |
| Tungsten | 74 | 69.5 keV | X-ray tube target |
| Lead | 82 | 88.0 keV | Radiation shielding |

**Clinical exploitation of the K-edge:**

1. **Iodinated IV contrast**: At 80–100 kVp, the diagnostic beam contains photons near the iodine K-edge (33.2 keV). Photons at energies just above 33.2 keV are very efficiently photoelectrically absorbed by iodine — producing the marked enhancement seen in CT angiography, contrast-enhanced CT, and fluoroscopic studies.

2. **K-edge subtraction angiography**: Two images acquired at photon energies just below and just above the K-edge of iodine are subtracted. The iodine-containing vessels show dramatic differential contrast; bone and soft tissue (whose attenuation does not change abruptly at 33.2 keV) cancel out. Used in dual-energy CT and synchrotron angiography.

3. **Mammography filter design**: The molybdenum K-edge filter (K-edge = 20.0 keV) transmits the useful Mo characteristic X-ray photons (17–20 keV) while strongly absorbing the bremsstrahlung component above 20 keV — creating a near-monoenergetic beam precisely matched to breast tissue imaging.

4. **Gadolinium-based contrast in dual-energy CT**: Gadolinium K-edge at 50.2 keV falls within the CT beam energy range, enabling material-specific gadolinium quantification with dual-energy acquisitions.

<div className="book-keypoint">

The **Z³ dependence of photoelectric absorption** is the single most important physical principle underpinning diagnostic radiology contrast. It means that iodine (Z=53) is approximately **720 times** more attenuating per unit mass than soft tissue (effective Z ≈ 7.4) at 80 keV — entirely from the photoelectric effect. Without this Z³ dependence, contrast agents would be ineffective and bone-soft tissue contrast would barely exist. The same principle makes lead an effective shield: at diagnostic energies, lead's photoelectric absorption coefficient is approximately **2,700 times** that of soft tissue per unit mass.

</div>

### Energy Dependence and kVp Selection

Because photoelectric probability ∝ 1/E³, **lower kVp substantially increases the photoelectric fraction**:

| kVp (mean energy) | Photoelectric fraction in soft tissue | Compton fraction |
|---|---|---|
| 40 kVp (~15 keV mean) | ~50–60% | ~40–50% |
| 60 kVp (~25 keV mean) | ~20–30% | ~70–80% |
| 80 kVp (~33 keV mean) | ~10–15% | ~85–90% |
| 100 kVp (~40 keV mean) | ~5–8% | ~92–95% |
| 120 kVp (~48 keV mean) | ~2–4% | ~96–98% |

**Clinical consequence:**
- Lower kVp → more photoelectric interactions → **more contrast** between tissues of different Z (bone, iodine, soft tissue)
- Lower kVp → more complete photon absorption → **higher patient dose per unit detector exposure**
- The optimal kVp balances adequate contrast against acceptable patient dose

---

## Interaction 3: Compton Scattering

### Physical Process — Step by Step

**Compton scattering** (also called **incoherent scattering**) is the interaction of an X-ray photon with a **loosely bound or free outer-shell electron**. It is the **dominant interaction** in diagnostic radiography across the clinical kVp range (40–150 kVp).

**Step 1 — Photon-electron collision:**
The incident photon (energy E₀) interacts with an outer-shell electron. Because the electron's binding energy is negligibly small compared to the photon energy (typically 10–100 eV vs 40–150,000 eV), the electron behaves as a **free electron** at rest.

**Step 2 — Energy transfer:**
The photon transfers **part** of its energy to the electron:
- The electron recoils as the **Compton (recoil) electron** with kinetic energy KE_recoil
- The photon continues as a **scattered photon** (also called the **Compton scattered photon**) with reduced energy E_scattered and a new direction at angle θ from the original beam direction

**Step 3 — Energy conservation:**
E₀ = E_scattered + KE_recoil + E_binding ≈ E_scattered + KE_recoil (binding energy negligible)

### The Compton Energy-Angle Relationship

The energy of the scattered photon depends on the **scatter angle (θ)**:

**E_scattered = E₀ / (1 + (E₀ / 511) × (1 − cos θ))**

Where:
- E₀ = incident photon energy (keV)
- E_scattered = scattered photon energy (keV)
- θ = scatter angle (degrees)
- 511 = rest mass energy of the electron (keV)

**Scattered photon energies at different angles (incident energy = 80 keV):**

| Scatter Angle (θ) | Scattered Photon Energy | Energy Lost to Recoil Electron | Direction |
|---|---|---|---|
| 0° (forward) | 80 keV | 0 keV | Continues forward |
| 30° | 75.2 keV | 4.8 keV | Small deflection |
| 45° | 70.3 keV | 9.7 keV | Moderate deflection |
| 90° | 57.2 keV | 22.8 keV | Perpendicular to beam |
| 135° | 46.3 keV | 33.7 keV | Back-oblique |
| 180° (backscatter) | 40.9 keV | 39.1 keV | Directly back toward tube |

**Key observations:**
- **Forward scatter (θ ≈ 0°)**: Photon retains almost all its energy; barely deflected → most likely to reach detector and degrade image
- **Backscatter (θ = 180°)**: Maximum energy loss to recoil electron; scattered photon has minimum energy (~41 keV for 80 keV incident)
- **At all angles**: Compton scattered photons retain substantial energy → remain penetrating → travel long distances → primary source of radiation to operators in fluoroscopy suites

### Probability and Z Dependence

Unlike photoelectric absorption, Compton scattering probability depends on **electron density** (electrons per gram), not on Z:

**σ_Compton ∝ electron density (e⁻/g)**

Because electron density (Z/A) is approximately constant for most elements (Z/A ≈ 0.5 for most biological materials):

- Compton probability is **nearly independent of Z** in soft tissue
- Compton probability is approximately **proportional to physical density** (more atoms per cm³ → more electrons per cm³)
- This means soft tissue and fat attenuate similarly by Compton scatter, while bone (higher density) attenuates more

**Practical consequence:**
At energies where Compton dominates (above 80 kVp), the **differential contrast between soft tissues is very low** — there is little photoelectric-driven contrast between fat, muscle, liver, and spleen. This is why:
- CT uses contrast agents to differentiate soft tissue structures
- Abdominal radiography at high kVp shows poor soft tissue contrast
- Mammography uses low kVp to maximise photoelectric contrast in breast tissue

### Compton Scatter and Image Quality

Compton scatter is the **primary source of image degradation** in clinical radiography:

**How scatter degrades contrast:**
- A primary photon from an unattenuated part of the beam reaches the detector at its correct location → correct image information
- A Compton scattered photon from another part of the beam may arrive at the same detector pixel from a different direction → incorrect information (it appears as if there were a primary photon from that direction)
- Scattered photons add a **diffuse, relatively uniform background exposure** to the image → the difference in exposure between a "dark" area and a "light" area is reduced → contrast decreases

**Scatter-to-primary ratio (SPR):**
The ratio of scattered to primary photons at the detector:

| Examination | Scatter-to-Primary Ratio | % of Total Signal from Scatter |
|---|---|---|
| Hand/foot (no grid) | 0.1 – 0.3 | 10–23% |
| Skull AP | 0.5 – 1.0 | 33–50% |
| Chest PA | 0.5 – 1.0 | 33–50% |
| Abdomen AP | 3 – 6 | 75–86% |
| Pelvis AP | 4 – 8 | 80–89% |
| Lateral lumbar spine | 6 – 10 | 86–91% |

For adult abdominal radiography, scattered photons can account for over **80% of total detector exposure** — the image contrast would be severely degraded without scatter rejection.

**Scatter reduction methods:**

| Method | Mechanism | Effectiveness |
|---|---|---|
| Collimation | Reduces scatter-producing volume | 20–60% scatter reduction |
| Anti-scatter grid (10:1) | Lead strips absorb oblique scatter | 80–90% scatter rejection |
| Air gap technique | Scatter diverges; fewer reach detector | 60–80% scatter reduction |
| Compression (mammography) | Reduces breast thickness → less scatter | Significant improvement |
| High kVp + reduced mAs | Forward-peaked scatter; less absolute scatter | Modest effect |

<div className="book-pearl">

The **air gap technique** is an elegant, equipment-free alternative to the anti-scatter grid for certain examinations. By increasing the distance between the patient and the image receptor (OID), scattered photons — which travel in oblique directions — miss the detector while primary photons (travelling in straight lines from the focal spot) continue to reach it. An air gap of 15–20 cm can reduce scatter by 60–80% without requiring a grid and its associated mAs increase. The trade-off is increased magnification, requiring either a fine focal spot or extended SID to maintain spatial resolution. Air gap technique is used in lateral cervical spine, skull, and some paediatric examinations.

</div>

---

## Interaction 4: Pair Production

### Physical Process

**Pair production** occurs when a high-energy photon interacts with the **strong electromagnetic field of an atomic nucleus** (or, less commonly, near an orbital electron — "triplet production"). The photon ceases to exist and its energy is used to create an **electron–positron pair**:

**E_photon → electron (e⁻) + positron (e⁺)**

**Energy threshold:**
The rest mass energy of an electron = 0.511 MeV. Since an electron–positron pair is created, the minimum photon energy required is:

**E_threshold = 2 × 0.511 MeV = 1.022 MeV**

Any photon energy above 1.022 MeV is distributed as kinetic energy equally between the electron and positron:

**KE_electron + KE_positron = E_photon − 1.022 MeV**

### Annihilation Radiation

The positron, after travelling a short distance and losing its kinetic energy, undergoes **annihilation** with a nearby electron:

**e⁺ + e⁻ → two 511 keV photons emitted at exactly 180° to each other**

This annihilation radiation is the **physical basis of PET (Positron Emission Tomography)**:
- The two 511 keV photons travel in opposite directions
- They are detected simultaneously (**in coincidence**) by opposing detector rings
- The line connecting the two detectors defines the path of the original positron emitter
- Spatial reconstruction of many such coincidence lines generates the PET image

### Probability Dependence

- Pair production probability ∝ **Z² × (E − 1.022 MeV)**
- Increases with atomic number and with photon energy above the threshold
- Dominant interaction above **~5–10 MeV** in most materials

### Clinical Relevance

| Context | Relevance of Pair Production |
|---|---|
| Diagnostic radiography (40–150 kVp) | **None** — photon energies far below 1.022 MeV threshold |
| Diagnostic fluoroscopy | **None** |
| Megavoltage radiotherapy (4–25 MV) | **Significant** — pair production becomes dominant above ~5 MeV |
| PET imaging | The **annihilation radiation** (511 keV) from positron decay is the detected signal |
| High-energy CT (research) | Emerging at 300–400 kVp; pair production just begins to be possible |
| Shielding design (radiotherapy bunkers) | Must account for pair production-generated scattered photons |

---

## Interaction 5: Photonuclear Disintegration (Photodisintegration)

### Physical Process

At extremely high photon energies (**above 7–15 MeV**), a photon can be absorbed directly by the **atomic nucleus**, causing it to eject a nuclear particle:

- Typically: **nucleus + γ → nucleus + neutron** (photoneutron production)
- The threshold energy is the nuclear binding energy per nucleon (~7–15 MeV depending on the element)
- The process produces **neutron radiation** — which has very high biological effectiveness (RBE = 5–20)

### Clinical Relevance

| Context | Relevance |
|---|---|
| Diagnostic radiology (all modalities) | **None** — energies far below threshold |
| Low-energy radiotherapy (&lt;10 MV) | None |
| High-energy radiotherapy (&gt;10 MV linear accelerators) | **Relevant** — photoneutron production occurs at tungsten and lead components; contributes to whole-body neutron dose |
| Radiotherapy vault shielding (&gt;10 MV) | Must incorporate **neutron shielding** (polyethylene, borated concrete) in addition to lead |

This interaction has no relevance whatsoever to diagnostic imaging but is included for completeness of the five classical X-ray interactions.

---

## Relative Dominance of Interactions

The dominant interaction mechanism at any given clinical situation depends on **photon energy** and the **atomic number of the absorber**:

### Energy-Z Interaction Map for Soft Tissue (Z ≈ 7.4)

| Photon Energy | Dominant Interaction | Clinical Context |
|---|---|---|
| &lt;30 keV | Photoelectric effect | Mammography; very low-energy beams |
| 30–50 keV | Transitional (PE and Compton comparable) | Low-kVp general radiography |
| 50–100 keV | Compton scatter | General radiography, fluoroscopy |
| 100 keV–1 MeV | Compton scatter (strongly dominant) | High-kVp radiography, CT |
| 1.022–5 MeV | Compton + Pair production (emerging) | Low-energy radiotherapy |
| &gt;5 MeV | Pair production | High-energy radiotherapy |

### Energy-Z Interaction Map for Bone (Z ≈ 13.8)

| Photon Energy | Dominant Interaction |
|---|---|
| &lt;80 keV | Photoelectric effect (Z³ strongly favours PE in bone) |
| 80–200 keV | Transitional |
| &gt;200 keV | Compton scatter |

### Transition Energy Between PE and Compton

The energy at which photoelectric and Compton probabilities are equal (crossover energy):

| Material | PE-Compton Crossover Energy |
|---|---|
| Soft tissue (Z ≈ 7.4) | ~30 keV |
| Bone (Z ≈ 13.8) | ~80–100 keV |
| Iodine (Z = 53) | ~300–400 keV |
| Lead (Z = 82) | ~~500 keV |

**Clinical implication:** At 80 kVp, bone is still significantly in the photoelectric regime → strong bone contrast. At 120 kVp (CT), soft tissue is deep into the Compton regime → low inherent contrast → contrast agents needed for soft tissue differentiation.

---

## Attenuation — Quantitative Description

### The Exponential Attenuation Law

The reduction in beam intensity as it passes through a homogeneous material follows an **exponential law**:

**I = I₀ × e^(−μx)**

Where:
- **I₀** = incident beam intensity (photons/cm²/s or mGy/s)
- **I** = transmitted beam intensity after passing through thickness x
- **μ** = linear attenuation coefficient (cm⁻¹) — the fraction of photons removed per unit thickness
- **x** = thickness of material (cm)

This exponential relationship means:
- A fixed **fraction** of remaining photons is removed per unit thickness (not a fixed number)
- The beam is never completely attenuated — intensity asymptotically approaches (but never reaches) zero
- Each successive centimetre of the same material attenuates by the same fraction

**Worked example:**

Beam of 1,000 photons passes through material with μ = 0.2 cm⁻¹, thickness = 5 cm:

I = 1,000 × e^(−0.2 × 5) = 1,000 × e^(−1.0) = 1,000 × 0.368 = **368 photons transmitted**

632 photons were attenuated (absorbed or scattered).

### The Linear Attenuation Coefficient (μ)

The linear attenuation coefficient is the **probability per unit path length** that a photon will interact:

**μ = μ_coherent + μ_photoelectric + μ_Compton + μ_pair**

(Sum of individual interaction coefficients)

**Factors affecting μ:**
- **Photon energy (E)**: μ decreases with increasing energy (beam becomes more penetrating at higher kVp)
- **Atomic number (Z)**: μ increases sharply with Z (photoelectric contribution ∝ Z³)
- **Physical density (ρ)**: μ is directly proportional to density

**Linear attenuation coefficients at 80 keV (approximate):**

| Material | Density (g/cm³) | μ (cm⁻¹) | HVL |
|---|---|---|---|
| Air | 0.0013 | 0.000183 | 3,790 cm |
| Lung (inflated) | 0.3 | 0.055 | 12.6 cm |
| Fat | 0.92 | 0.168 | 4.1 cm |
| Water / soft tissue | 1.00 | 0.184 | 3.77 cm |
| Muscle | 1.05 | 0.193 | 3.59 cm |
| Bone (cortical) | 1.85 | 0.480 | 1.44 cm |
| Iodine (pure) | 4.93 | 10.07 | 0.069 cm |
| Lead | 11.35 | 59.7 | 0.012 cm |

### The Mass Attenuation Coefficient (μ/ρ)

The **mass attenuation coefficient** (μ/ρ, cm²/g) removes the effect of density:

**μ/ρ = μ / ρ**

This allows comparison of the intrinsic attenuating ability of materials independent of their physical state:

- Useful for comparing gases, liquids, and solids of the same element
- Air and water have similar mass attenuation coefficients at most energies (similar effective Z)
- The large difference in their linear attenuation coefficients arises entirely from density

**Modified attenuation equation using mass attenuation coefficient:**

**I = I₀ × e^(−(μ/ρ) × ρx)**

Where ρx = **mass thickness** (g/cm²) — thickness in grams per unit area

### Mean Free Path

The **mean free path (λ)** is the average distance a photon travels before interacting:

**λ = 1 / μ**

This is the distance at which beam intensity falls to **1/e (≈ 37%)** of its original value:

| Material | μ at 80 keV | Mean Free Path |
|---|---|---|
| Air | 0.000183 cm⁻¹ | 5.46 m |
| Soft tissue | 0.184 cm⁻¹ | 5.4 cm |
| Cortical bone | 0.480 cm⁻¹ | 2.1 cm |
| Lead | 59.7 cm⁻¹ | 0.17 mm |

The mean free path is the **fundamental scale of penetration** in a material — a patient's 20 cm abdomen represents ~3.7 mean free paths of soft tissue, transmitting e^(−3.7) ≈ 2.5% of the beam.

### Relationship Between μ, HVL, and Mean Free Path

The Half-Value Layer (HVL), linear attenuation coefficient (μ), and mean free path (λ) are all related:

**HVL = ln(2) / μ = 0.693 / μ**

**λ = 1 / μ = HVL / 0.693 = 1.443 × HVL**

**Summary of relationships:**

| Measurement | Formula | Physical Meaning |
|---|---|---|
| HVL | 0.693 / μ | Thickness reducing intensity to 50% |
| TVL (tenth-value layer) | 2.303 / μ | Thickness reducing intensity to 10% |
| Mean free path (λ) | 1 / μ | Average interaction distance; I = I₀/e |

---

## Attenuation in Composite Materials and Tissues

### Mixture Rule

For a material composed of multiple elements, the mass attenuation coefficient is the **weighted sum** of the individual element coefficients:

**(μ/ρ)_mixture = Σ w_i × (μ/ρ)_i**

Where w_i = weight fraction of element i

**Example — Soft tissue (approximate composition: H 10%, C 18%, N 3%, O 65%, other 4%):**

At 80 keV, the contributions are dominated by oxygen (65% by weight) and carbon (18%) — explaining why soft tissue attenuation closely approximates water (H₂O).

### Effective Atomic Number (Z_eff)

For composite materials like bone, tissue, and contrast media, an **effective atomic number** summarises their overall photoelectric behaviour:

**Z_eff = (Σ f_i × Z_i^n)^(1/n)** where n ≈ 2.94 for photoelectric effect

**Effective Z values:**

| Material | Z_eff | Dominant Interaction (80 kVp) |
|---|---|---|
| Air | 7.6 | Compton |
| Fat | 5.9 | Compton |
| Water | 7.4 | Compton |
| Soft tissue | 7.4–7.6 | Compton |
| Bone (cortical) | 13.8 | Photoelectric + Compton |
| Calcium phosphate | 15.3 | Photoelectric |
| Iodine solution (300 mg/mL) | ~50 (iodine dominant) | Photoelectric |

### Beam Hardening in Tissue

As a polyenergetic X-ray beam penetrates the patient, **beam hardening** progressively occurs:

1. Low-energy photons are preferentially absorbed (photoelectric ∝ 1/E³)
2. The surviving beam becomes progressively richer in high-energy photons
3. Mean beam energy increases with depth of penetration
4. The attenuation coefficient decreases with depth (harder beam → lower μ)

**Consequences of beam hardening:**

| Effect | Manifestation | Solution |
|---|---|---|
| CT cupping artefact | Uniform cylinder appears denser at periphery than centre | Software correction; pre-filtration |
| CT streak artefacts | Dark bands between dense objects (e.g., petrous bones) | Metal artefact reduction (MAR) |
| Underestimation of bone density | CT number of bone depends on scan position | Beam hardening correction algorithms |
| kVp-dependent contrast | Soft tissue contrast lower at high kVp | Optimise kVp for examination type |

---

## Attenuation and the Radiographic Image

### How Attenuation Creates the Image

A radiograph is formed by the **differential attenuation** of the primary X-ray beam:

- Where the beam is heavily attenuated (bone, contrast agents, metallic implants): few photons reach the detector → **low detector exposure → white (bright) on the image**
- Where the beam is minimally attenuated (air, lung, gas): most photons reach the detector → **high detector exposure → black (dark) on the image**
- Intermediate tissues (fat, muscle, organs): partial attenuation → **various shades of grey**

**The five radiographic densities (from least to most attenuating):**

| Density | Examples | Appearance | μ relative to soft tissue |
|---|---|---|---|
| **Air/Gas** | Lung parenchyma, bowel gas, pneumothorax | Black | ~0.001× |
| **Fat** | Subcutaneous fat, retroperitoneal fat, fatty liver | Dark grey | ~0.9× |
| **Soft tissue/Water** | Muscle, liver, spleen, blood, solid organs | Medium grey | 1× (reference) |
| **Bone/Calcium** | Cortical bone, calcification, renal stone | Light grey to white | ~2.5–3× |
| **Metal/Contrast** | Lead, iodine contrast, barium, surgical clips | Bright white | 10–300× |

### Radiographic Contrast and Attenuation

**Radiographic contrast** between two adjacent regions arises from their **difference in attenuation coefficients**:

**Contrast ∝ (μ₁ − μ₂) × Δx**

Where Δx is the thickness of the attenuating structure.

**Factors that determine contrast:**

1. **Photon energy (kVp)**: Lower kVp → greater photoelectric fraction → greater μ differential between tissues of different Z → better contrast. Higher kVp → Compton dominates → μ differences smaller → less contrast.

2. **Tissue composition (Z)**: Greater Z difference between adjacent tissues → greater μ difference → better contrast. Bone vs soft tissue (ΔZ ≈ 6): good contrast. Liver vs spleen (ΔZ ≈ 0): very poor inherent contrast — contrast agent required.

3. **Tissue density**: Denser tissue attenuates more. Dense bone vs less dense bone (osteoporosis): contrast reduced by density loss.

4. **Contrast agents**: Iodine or barium replaces tissue (Z ≈ 7.4) with Z = 53–56 → enormous photoelectric absorption increase → dramatic contrast enhancement.

<div className="book-important">

**The fundamental limitation of contrast in X-ray imaging** is that many pathological lesions (early tumours, subtle infiltrates, early ischaemia) have nearly identical attenuation to surrounding normal tissue — the same density, same composition, same effective Z. No amount of technique optimisation can create contrast when there is no differential attenuation. This is the primary reason CT uses intravenous contrast routinely, why MRI (which provides contrast through different tissue relaxation times, not attenuation) detects many lesions invisible on CT, and why nuclear medicine identifies functional differences invisible to all anatomical modalities. Understanding the physics of X-ray attenuation is understanding both the power and the limitations of X-ray imaging.

</div>

---

## Summary of Five Interactions — Master Reference

| Interaction | Energy Range | Probability | Z Dependence | Outcome | Dose Contribution | Image Relevance |
|---|---|---|---|---|---|---|
| Coherent (Rayleigh) | &lt;30 keV | Low | ∝ Z² | Photon redirected; no energy loss | None | Negligible |
| Photoelectric | &lt;100 keV dominant | High at low E | ∝ Z³/E³ | Complete absorption; photoelectron ejected | High (all energy deposited) | Primary contrast mechanism |
| Compton | 30 keV–30 MeV | Moderate–high | ∝ electron density | Scatter photon + recoil electron | Partial | Main scatter source; degrades contrast |
| Pair production | &gt;1.022 MeV | Low (diagnostic) | ∝ Z² | e⁻–e⁺ pair; 511 keV annihilation | Complete | None (diagnostic); PET basis |
| Photodisintegration | &gt;7 MeV | Very low | Varies | Nuclear fragment + neutron | Complete | None |

---

<div className="book-summary">

- Five mechanisms govern X-ray interaction with matter: **coherent scatter** (elastic, no energy transfer, &lt;30 keV), **photoelectric effect** (complete absorption, ∝ Z³/E³), **Compton scatter** (partial absorption, ∝ electron density), **pair production** (&gt;1.022 MeV, electron-positron pair), and **photodisintegration** (&gt;7 MeV, nuclear fragmentation). Only the first three are relevant in diagnostic radiography.
- The **photoelectric effect** (∝ Z³/E³) is the basis of radiographic contrast — it explains why bone is 6× more attenuating than soft tissue, why iodine is 720× more attenuating than soft tissue, and why lead is an effective radiation shield. It dominates at low kVp and in high-Z materials.
- The **K-edge** — a sharp increase in photoelectric absorption at the photon energy matching an element's inner-shell binding energy — is clinically exploited in iodinated contrast agents (K-edge 33.2 keV), barium contrast (37.4 keV), mammographic K-edge filtration (Mo: 20 keV, Rh: 23.2 keV), and dual-energy CT material decomposition.
- **Compton scattering** (∝ electron density, Z-independent) dominates in soft tissue above 30–50 keV. It does not differentiate between tissues of similar density — the primary reason soft tissue contrast requires contrast media in CT. Compton scatter is the dominant source of image fog and occupational dose in fluoroscopy suites.
- The scattered photon energy in Compton interactions follows: **E_scattered = E₀ / (1 + (E₀/511)(1 − cos θ))**. Forward scatter retains most energy; backscatter loses maximum energy. All scattered photons remain penetrating — primary scatter source is operator dose.
- **Attenuation** follows the exponential law: **I = I₀ × e^(−μx)**. The linear attenuation coefficient μ (cm⁻¹) depends on Z, density, and energy. The HVL = 0.693/μ; mean free path λ = 1/μ = 1.443 × HVL.
- The **five radiographic densities** from black to white: air, fat, soft tissue/water, bone/calcium, metal/contrast. Contrast between adjacent structures equals the difference in their attenuation coefficients multiplied by the thickness of the attenuating structure.
- **Beam hardening** (progressive increase in mean energy with tissue penetration) produces CT cupping and streak artefacts. It is corrected by software algorithms and minimised by pre-patient filtration (bow-tie filter, added Cu filter).
- When adjacent tissues have the same Z and density — as in early tumours vs surrounding parenchyma — X-ray imaging has no physical mechanism to generate contrast. This defines the fundamental limitation of X-ray-based modalities and the rationale for contrast enhancement, MRI, and nuclear medicine.

</div>
