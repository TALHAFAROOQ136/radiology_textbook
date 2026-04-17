---
id: x-ray-production
title: "X-ray Production"
sidebar_label: "X-ray Production"
---

# X-ray Production

Every diagnostic radiograph, every CT slice, every fluoroscopic frame originates from a single physical event: a high-speed electron, accelerated through tens of thousands of volts, collides with a tungsten atom and surrenders its kinetic energy. Understanding precisely how this energy transfer produces X-ray photons — the mechanisms involved, the energy spectrum produced, and the factors that modify it — is the cornerstone of radiographic technique. The radiographer who understands X-ray production does not merely select numbers on a console; they engineer a beam tailored to the specific diagnostic task while minimising the dose to their patient.

<div className="book-objectives">

- State the three essential prerequisites for X-ray production and explain the role of each
- Describe the mechanism of bremsstrahlung production step-by-step, including the role of the Coulomb field
- Explain why bremsstrahlung produces a continuous spectrum and derive the maximum photon energy from first principles
- Describe the mechanism of characteristic radiation production, including each transition and the resulting photon energies for tungsten
- Explain the production of Auger electrons as an alternative to characteristic X-ray emission
- Interpret a complete X-ray emission spectrum diagram, identifying the bremsstrahlung continuum, characteristic lines, and the effect of filtration
- Predict and explain the effect on the X-ray spectrum of changing kVp, mAs, filtration, and target material
- Calculate X-ray production efficiency and relate it to anode heat loading
- Explain the significance of the mean beam energy and its relationship to kVp
- Describe the X-ray spectra produced by mammography tubes (Mo, Rh targets) and explain why they differ from general radiography tubes
- Explain isotropic emission and the directional distribution of bremsstrahlung

</div>

---

## Prerequisites for X-ray Production

Three conditions must be simultaneously satisfied for X-ray production:

### 1. A Source of Electrons

Electrons must be available in large numbers and in a controllable way. In the diagnostic X-ray tube, electrons are produced by **thermionic emission** from a heated tungsten filament:

- The filament is heated by a low-voltage AC current (3–6 A at 6–12 V) to approximately 2,200°C
- At this temperature, electrons acquire sufficient thermal energy to overcome the tungsten **work function** (approximately 4.5 eV) and escape from the metal surface
- The rate of emission — and therefore the **tube current (mA)** — is controlled by the filament temperature, which in turn is controlled by the filament heating current
- Typical electron emission rates: at 200 mA, approximately **1.25 × 10²¹ electrons per second** leave the filament

### 2. A High Accelerating Voltage

The emitted electrons must be accelerated to sufficient kinetic energy to produce X-rays of diagnostic quality. This requires:

- A **potential difference (kVp)** applied across the X-ray tube — cathode at high negative potential, anode at high positive potential (or equivalently, cathode at −kVp/2, anode at +kVp/2)
- In modern tubes: **40–150 kVp** for diagnostic radiography (up to 400–500 kVp for industrial and therapeutic applications)
- Each electron accelerated through a potential difference of V volts gains kinetic energy: **E_k = eV = 1 eV per volt** (where e = electron charge = 1.602 × 10⁻¹⁹ C)
- An electron accelerated through 100,000 V (100 kVp) arrives at the anode with **100 keV of kinetic energy**
- The velocity of a 100 keV electron: approximately **1.64 × 10⁸ m/s** (~55% of the speed of light — relativistic effects become relevant)

**Electron velocity at diagnostic kVp values:**

| kVp | Electron Energy | Velocity (m/s) | % Speed of Light |
|---|---|---|---|
| 40 kVp | 40 keV | 1.18 × 10⁸ | 39% c |
| 80 kVp | 80 keV | 1.51 × 10⁸ | 50% c |
| 100 kVp | 100 keV | 1.64 × 10⁸ | 55% c |
| 120 kVp | 120 keV | 1.74 × 10⁸ | 58% c |
| 150 kVp | 150 keV | 1.87 × 10⁸ | 62% c |

At these velocities, the electrons are approaching relativistic speeds — a small but measurable correction to classical mechanics. Modern CT tube electron energies (up to 140 keV) are clearly within the relativistic regime.

### 3. A Target Material of High Atomic Number

The accelerated electrons must encounter a material capable of efficiently converting their kinetic energy into X-ray photons:

- The **efficiency of bremsstrahlung production** is proportional to the **atomic number (Z)** of the target
- **Tungsten (W, Z = 74)** is used in virtually all general radiography, fluoroscopy, and CT tubes
- High Z → more efficient X-ray production (more photons per electron)
- High melting point → tolerates the extreme thermal loading

<div className="book-definition">

**X-ray production** occurs when a beam of electrons, accelerated through a high potential difference, strikes a metal target of high atomic number. Kinetic energy is transferred from the electrons to X-ray photons by two mechanisms: **bremsstrahlung** (deceleration of electrons by nuclear Coulomb fields) and **characteristic radiation** (inner-shell ionisation with subsequent electron transitions). Approximately 1% of input electron kinetic energy is converted to X-ray photons; the remaining 99% is deposited as heat in the anode.

</div>

---

## Mechanism 1: Bremsstrahlung Radiation

### Physical Basis

**Bremsstrahlung** (German: *Bremsung* = braking, *Strahlung* = radiation) is electromagnetic radiation emitted when a charged particle undergoes acceleration (or deceleration). It is the dominant X-ray production mechanism in the diagnostic tube, accounting for **80–90%** of total X-ray output.

The physical basis lies in **classical electrodynamics**: any accelerating charge radiates electromagnetic energy. A high-speed electron decelerating in the Coulomb field of an atomic nucleus is a powerful radiating system.

### Step-by-Step Mechanism

**Step 1 — Electron enters the target**

A high-speed electron (kinetic energy = eV = kVp in keV) leaves the cathode and is accelerated toward the tungsten anode. It enters the tungsten target at the focal spot and begins to penetrate the material.

**Step 2 — Coulomb interaction with the nucleus**

As the electron passes close to a tungsten nucleus (Z = 74, nuclear charge = +74e), it experiences a powerful **attractive Coulomb force**:

- The electrostatic force deflects the electron from its straight-line path
- The trajectory curves toward the nucleus
- The electron is simultaneously **decelerated** (losing kinetic energy)

The magnitude of the force: **F = k × Ze × e / r²** (inversely proportional to the square of the distance from the nucleus). Electrons that pass very close to the nucleus experience a stronger force and lose more energy; those passing at a greater distance are deflected less.

**Step 3 — Emission of bremsstrahlung photon**

By Maxwell's equations of electrodynamics, any **accelerating charge emits electromagnetic radiation**. The decelerating electron emits this radiation as a **bremsstrahlung X-ray photon**:

- Photon energy = energy lost by the electron in that interaction
- Energy lost = initial kinetic energy − final kinetic energy = **E_initial − E_final**
- The electron continues with reduced kinetic energy and may undergo further bremsstrahlung interactions

**Step 4 — Range of interaction distances produces continuous spectrum**

Because electrons interact with nuclei at all possible distances (from grazing encounters to near-direct hits), the energy lost per interaction ranges continuously from **near-zero** (distant glancing interaction) to the **full kinetic energy of the electron** (head-on interaction — complete deceleration in one event):

- **Maximum photon energy = E_k = eV = kVp (in keV)** — produced when an electron surrenders all its kinetic energy in a single bremsstrahlung event
- **Minimum photon energy → 0** — produced by very distant, near-zero deflections
- **All energies between these limits** are produced with varying probability → **continuous (polyenergetic) spectrum**

**Step 5 — Multiple interactions**

In reality, most electrons undergo **dozens to hundreds** of small bremsstrahlung interactions before coming to rest — each producing a low-energy photon. A minority produce one or two large-energy-transfer events. The statistical distribution of all these events across all electrons produces the characteristic shape of the bremsstrahlung spectrum.

<div className="book-keypoint">

The **maximum X-ray photon energy** produced by bremsstrahlung equals the **peak kinetic energy of the incident electrons** — which equals the peak tube voltage in keV. A 100 kVp tube produces photons with energies up to **100 keV** but not above. This is an absolute physical limit: no X-ray photon can carry more energy than the electron that produced it. This principle is used in quality assurance — the high-energy limit of the bremsstrahlung spectrum provides a direct measurement of the actual peak kVp delivered by the generator.

</div>

### Directionality of Bremsstrahlung

The angular distribution of bremsstrahlung is not isotropic — it depends on electron energy:

- **Low-energy electrons** (non-relativistic, &lt;50 keV): bremsstrahlung emitted in **all directions** with maximum intensity perpendicular to the electron beam (classic dipole radiation pattern)
- **High-energy electrons** (relativistic, &gt;100 keV): bremsstrahlung is preferentially emitted in the **forward direction** (in the direction of electron travel) — increasingly collimated as energy increases

**Clinical consequence of directionality:**
- In the diagnostic tube, the electron beam travels from cathode to anode (downward in the standard orientation)
- Forward-directed bremsstrahlung exits through the anode face toward the patient — this is the useful beam
- Backscattered bremsstrahlung contributes to leakage radiation in the tube housing
- At diagnostic kVp (40–150 kVp), the distribution is intermediate — neither purely dipole nor fully forward-directed

### The Bremsstrahlung Spectrum Shape

The unfiltered bremsstrahlung spectrum has a characteristic shape:

- **Starts at zero** for photon energy = 0
- **Rises linearly** (approximately) with decreasing photon energy (more low-energy photons are produced than high-energy ones — because low-energy-loss interactions are much more probable than complete-stop events)
- **Cuts off abruptly** at E_max = kVp (in keV) — the maximum photon energy limit
- **Peak of the unfiltered spectrum**: approximately at 1/3 of E_max

**After filtration** (which is always present in practice):
- The low-energy tail is removed (photons below ~15–20 keV absorbed by inherent + added filtration)
- The effective (mean) energy shifts higher
- The spectrum peak moves to approximately **1/3 to 1/2 of E_max**
- The spectrum now has a rounded, roughly triangular shape with a peak at intermediate energies

---

## Mechanism 2: Characteristic Radiation

### Physical Basis

**Characteristic radiation** arises from a fundamentally different interaction: not between the electron and a nucleus, but between the incident electron and an **inner-shell orbital electron** of a target atom. It accounts for **10–20%** of X-ray output in the diagnostic energy range when the tube voltage exceeds the K-shell binding energy of the target.

### Step-by-Step Mechanism

**Step 1 — Inner-shell ionisation**

An incident electron from the cathode beam collides with and transfers sufficient energy to eject a **bound inner-shell electron** (usually the **K-shell** electron, the most tightly bound) from a tungsten atom:

- Required energy: must exceed the **K-shell binding energy** of tungsten = **69.5 keV**
- Therefore, **characteristic radiation from the K-shell only occurs when kVp ≥ 70 kVp**
- The ejected inner-shell electron (now called a **photoelectron**) carries away the excess energy as kinetic energy: KE = E_incident − E_binding

**Step 2 — Creation of the inner-shell vacancy**

The ejected electron leaves a **vacancy in the K-shell** — a "hole" in the innermost electron shell. This is an extremely unstable configuration: the atom now has an unfilled inner shell surrounded by outer electrons at higher energy.

**Step 3 — Outer-shell electron transition (de-excitation)**

The atom immediately de-excites by an **outer-shell electron dropping into the K-shell vacancy**:

- An electron from the **L-shell** drops to fill the K-shell → this is the most probable transition
- Alternatively, an electron from the **M-shell** or **N-shell** drops directly to the K-shell

**Step 4 — Emission of characteristic X-ray photon**

The transitioning electron moves from a higher-energy outer shell to the lower-energy K-shell. The **energy difference** between the two shells is released as a **characteristic X-ray photon**:

**E_photon = E_outer shell − E_inner shell (K-shell binding energy)**

Because the electron shell energies are **fixed and unique for each element**, the emitted photon energies are fixed and element-specific — hence the term "characteristic." They act as an atomic fingerprint.

### Characteristic X-ray Energies for Tungsten (Z = 74)

| Electron Transition | Designation | Shell Binding Energies | Photon Energy |
|---|---|---|---|
| L-shell (11.5 keV) → K-shell (69.5 keV) | **Kα** | 69.5 − 11.5 | **~58 keV** |
| M-shell (2.5 keV) → K-shell (69.5 keV) | **Kβ** | 69.5 − 2.5 | **~67 keV** |
| N-shell (0.6 keV) → K-shell (69.5 keV) | **Kγ** | 69.5 − 0.6 | **~69 keV** |
| M-shell (2.5 keV) → L-shell (11.5 keV) | **Lα** | 11.5 − 2.5 | **~9 keV** |

**Notes:**
- The **Kα line** is the most intense (L→K transition is most probable — the L-shell is immediately adjacent to K-shell)
- **Kβ and Kγ lines** are less intense but present as distinct peaks
- **L-shell characteristic X-rays** (~9 keV) are too low in energy to penetrate the tube housing inherent filtration — they do not reach the patient and are clinically irrelevant
- The K-shell characteristic lines appear as **sharp spikes** superimposed on the bremsstrahlung continuum at 58, 67, and 69 keV

### The Auger Effect — Alternative to Characteristic X-ray Emission

When a K-shell vacancy is created, there is a **competing process** to characteristic X-ray emission — the **Auger effect**:

Instead of emitting a characteristic X-ray photon, the de-excitation energy is transferred to **another orbital electron** (the Auger electron), which is then ejected from the atom:

- The Auger electron carries away kinetic energy = E_transition − E_binding(Auger electron shell)
- No X-ray photon is emitted in this process
- The atom is left with **two vacancies** in outer shells instead of one

**Probability of Auger effect vs characteristic X-ray emission:**

This is described by the **fluorescence yield (ω)**:

**ω = probability of characteristic X-ray emission / (characteristic X-ray + Auger electron)**

| Element (Z) | K-shell Fluorescence Yield (ω_K) |
|---|---|
| Carbon (Z=6) | ~0.003 (0.3%) — almost all Auger |
| Calcium (Z=20) | ~0.15 (15%) |
| Iodine (Z=53) | ~0.87 (87%) |
| Tungsten (Z=74) | ~0.96 (96%) |
| Lead (Z=82) | ~0.97 (97%) |

**Key conclusion**: For high-Z elements like tungsten, **characteristic X-ray emission (not Auger) dominates** (96% of K-shell vacancies produce characteristic X-rays). For low-Z elements, Auger dominates.

**Clinical relevance of Auger electrons:**
- In diagnostic radiology: limited relevance (low-Z tissue; Auger electrons have very short range)
- In **targeted radiotherapy**: Auger-emitting radionuclides (e.g., ¹²³I, ¹¹¹In) incorporated into tumour cells deposit extremely high local energy dose from multiple Auger electrons — an active area of therapeutic development

<div className="book-pearl">

The **fluorescence yield** explains why tungsten is so effective as an X-ray tube target beyond its thermal properties. With ω_K ≈ 0.96, nearly every K-shell ionisation in tungsten produces a useful characteristic X-ray photon at clinically relevant energies (58–69 keV). By contrast, if the tube were made of carbon (Z=6), 99.7% of inner-shell vacancies would produce Auger electrons rather than X-ray photons — an almost completely inefficient X-ray source. High atomic number targets are therefore doubly efficient: more bremsstrahlung (∝ Z) and near-complete characteristic X-ray emission (high fluorescence yield).

</div>

---

## The Complete X-ray Emission Spectrum

### Combining Bremsstrahlung and Characteristic Radiation

The **total X-ray emission spectrum** is the superposition of:
1. **Bremsstrahlung continuum**: a continuous distribution from ~0 to E_max (= kVp in keV)
2. **Characteristic radiation lines**: discrete spikes at 58, 67, and 69 keV (for tungsten)

**The unfiltered spectrum** (theoretical — never seen in practice):
- Starts at E = 0, rises approximately linearly to a peak at low energy, falls to zero at E_max
- Characteristic spikes appear only if kVp ≥ 70 kVp

**The clinically relevant filtered spectrum**:
- Inherent filtration (glass/metal envelope + oil + Be window ≈ 0.5–1.0 mm Al equivalent) removes photons below ~15 keV
- Added filtration (aluminium, copper) removes photons up to ~20–30 keV
- The spectrum now has a rounded triangular shape with:
  - **Low-energy cutoff** at ~15–25 keV (depending on filtration)
  - **Peak** at approximately 40–50% of E_max
  - **Characteristic peaks** at 58 and 67 keV (if kVp ≥ 70)
  - **High-energy cutoff** at E_max = kVp (in keV)

### Key Spectrum Metrics

**Maximum photon energy (E_max):**
- E_max (keV) = kVp (numerically)
- This is the highest-energy photon producible — from a complete-stop bremsstrahlung event

**Mean beam energy (E_mean):**
- The average energy of all photons in the filtered beam
- Approximately: **E_mean ≈ kVp / 3** (unfiltered); **E_mean ≈ kVp / 2** (with standard filtration)
- Higher filtration → higher mean energy
- Higher kVp → higher mean energy (proportionally)

**Effective energy:**
- The energy of a monoenergetic beam that would be attenuated by the same HVL as the actual polyenergetic beam
- Related to but not identical to mean energy
- Used in dosimetry and HVL measurement

---

## Factors Affecting the X-ray Spectrum

### Effect of Changing kVp

Increasing kVp has **four simultaneous effects** on the spectrum:

| Effect | Mechanism | Clinical Consequence |
|---|---|---|
| **E_max increases** | Higher electron energy → higher maximum photon energy | More penetrating beam |
| **Spectrum shifts to higher energies** | All bremsstrahlung interactions produce higher-energy photons | Harder beam; more Compton scatter |
| **Total output increases** | Output ∝ kVp² approximately | More photons per mAs |
| **Characteristic lines unchanged** | Shell binding energies fixed by element | New lines appear if kVp crosses a K-edge |

**Quantitative relationship:** Total X-ray output (intensity) ∝ **kVp^n**, where n ≈ 2 for unfiltered spectrum and slightly less for filtered clinical beams. This means:

- Increasing kVp by 10% increases output by approximately **21%** (1.1² = 1.21)
- The **15% rule**: increasing kVp by 15% approximately doubles beam intensity — equivalent to doubling mAs

### Effect of Changing mAs

Increasing mAs (either by increasing mA or extending time) has a **simpler effect**:

| Effect | Mechanism | Clinical Consequence |
|---|---|---|
| **All photon numbers scale proportionally** | More electrons → more X-ray production events | Higher detector exposure |
| **Spectrum shape unchanged** | Same energy distribution; just more photons | No change in beam quality |
| **E_max unchanged** | kVp unchanged | No change in penetration |
| **Mean energy unchanged** | Spectrum shape unchanged | No change in tissue contrast |

**Patient dose is directly proportional to mAs** (at constant kVp, SID, and filtration). Doubling mAs exactly doubles the number of photons and the patient dose.

### Effect of Changing Filtration

Filtration selectively removes photons from the low-energy portion of the spectrum:

| Parameter | Effect of Adding Filtration |
|---|---|
| Low-energy photons (&lt;20 keV) | Removed — do not reach patient |
| Mean beam energy | Increases (beam "hardens") |
| E_max | Unchanged (high-energy photons unaffected) |
| Total photon count | Decreases |
| Patient skin dose | Decreases substantially |
| Image quality | Minimal effect (low-energy photons didn't contribute to image) |
| HVL | Increases (beam is harder) |

**Filtration and the HVL:**

The **Half-Value Layer (HVL)** is the thickness of a specified material (aluminium for diagnostic X-rays) that reduces beam intensity by 50%. It is the practical measure of beam quality (hardness):

| kVp | No Added Filtration HVL | With 2.5 mm Al Total HVL |
|---|---|---|
| 50 kVp | ~0.5 mm Al | ~1.5 mm Al |
| 80 kVp | ~1.5 mm Al | ~3.0 mm Al |
| 100 kVp | ~2.0 mm Al | ~4.0 mm Al |
| 120 kVp | ~2.5 mm Al | ~5.0 mm Al |

**Regulatory requirement (UK/EU):**
- Minimum total filtration: **≥2.5 mm Al equivalent** for tubes operating above 70 kVp
- Mammography: **≥0.5 mm Be** inherent (much lower, to preserve low-energy spectrum)

### Effect of Changing Target Material (Z)

The atomic number of the anode target affects both bremsstrahlung efficiency and characteristic line energies:

**Bremsstrahlung efficiency ∝ Z:**

Higher Z targets produce more bremsstrahlung per electron. This is why tungsten (Z = 74) is preferred over lower-Z alternatives.

**Characteristic line energies scale with Z²** (Moseley's Law approximation):

| Target Material | Z | K-shell Binding Energy | Kα Characteristic Energy | Clinical Application |
|---|---|---|---|---|
| Molybdenum (Mo) | 42 | 20.0 keV | 17.4 keV | Mammography |
| Rhodium (Rh) | 45 | 23.2 keV | 20.2 keV | Mammography (thicker breasts) |
| Silver (Ag) | 47 | 25.5 keV | 22.2 keV | Mammography (contrast-enhanced) |
| Tungsten (W) | 74 | 69.5 keV | 58.0 keV | General radiography, CT, fluoroscopy |

**Why molybdenum for mammography?**

At 25–35 kVp (typical mammography range):
- Tungsten Kα at 58 keV: **above the kVp limit** → no characteristic radiation, only low-energy bremsstrahlung
- Molybdenum Kα at 17.4 keV and Kβ at 19.6 keV: **within the mammography kVp range** → characteristic peaks present
- These ~17–20 keV photons are ideally suited to breast tissue — high enough to penetrate, low enough for maximum photoelectric contrast
- A molybdenum filter (0.03 mm) removes photons above the Mo K-edge (20 keV), eliminating the bremsstrahlung component above this energy and producing a near-monoenergetic beam at 17–20 keV

<div className="book-keypoint">

The choice of **molybdenum vs rhodium** target (and filter combination) in mammography is not arbitrary — it is a precision engineering of the X-ray spectrum for specific breast types. **Mo/Mo** (molybdenum target, molybdenum filter) produces characteristic X-rays at 17.4–19.6 keV — optimal for thin, fatty breasts. **Mo/Rh** shifts the effective energy slightly higher, improving penetration through denser glandular tissue. **Rh/Rh** (rhodium target and filter, 20.2–22.7 keV) is used for dense, thick breasts. This careful spectrum engineering is how mammography achieves both high soft-tissue contrast and minimal dose — the two requirements that are normally in direct conflict in X-ray imaging.

</div>

---

## X-ray Production Efficiency

### The Efficiency Formula

The fraction of electron kinetic energy converted to X-ray photons is described by:

**Efficiency (η) = k × Z × E_k**

Where:
- k = proportionality constant ≈ 9 × 10⁻¹⁰ (V⁻¹) for bremsstrahlung
- Z = atomic number of target material
- E_k = electron kinetic energy in eV (= kVp × 1000)

**Simplified clinical form:**

**η ≈ (Z × kVp) / 500,000** (expressed as a fraction; multiply by 100 for %)

**Worked examples:**

| Target | kVp | Efficiency Calculation | Efficiency |
|---|---|---|---|
| Tungsten (Z=74) | 80 kVp | (74 × 80) / 500,000 | **~1.2%** |
| Tungsten (Z=74) | 100 kVp | (74 × 100) / 500,000 | **~1.5%** |
| Tungsten (Z=74) | 140 kVp | (74 × 140) / 500,000 | **~2.1%** |
| Molybdenum (Z=42) | 28 kVp | (42 × 28) / 500,000 | **~0.24%** |
| Copper (Z=29) | 80 kVp | (29 × 80) / 500,000 | **~0.46%** |

**Key conclusions:**
- Even at 140 kVp with tungsten, only **~2%** of electron energy becomes X-ray photons
- **~98% is deposited as heat** in the anode — the reason anode heat management is so critical
- Higher Z target → more efficient X-ray production (linear relationship)
- Higher kVp → more efficient X-ray production (linear relationship)

### Heat Production Rate

At any given moment of tube operation:

**Heat production rate (W) = Tube power (W) × (1 − efficiency)**

**Example:** At 100 kVp, 400 mA:
- Tube power = 100,000 V × 0.4 A = **40,000 W = 40 kW**
- X-ray output power = 40,000 × 0.015 = 600 W
- **Heat production = 40,000 − 600 ≈ 39,400 W ≈ 39.4 kW**

This is equivalent to approximately **39 one-kilowatt electric bar heaters** concentrated on an anode disc weighing about 1 kg — the scale of the thermal engineering challenge is immediately apparent.

---

## Beam Quality Parameters

### Hardness vs Softness

**Hard beam**: High mean energy; highly penetrating; produced at high kVp with filtration
**Soft beam**: Low mean energy; low penetrating power; produced at low kVp with minimal filtration

| Beam Type | kVp | Filtration | HVL | Mean Energy | Clinical Use |
|---|---|---|---|---|---|
| Very soft | 25–35 kVp | Minimal (0.5 mm Be) | &lt;0.5 mm Al | ~12–15 keV | Mammography |
| Soft | 40–60 kVp | 1.5 mm Al | 1.0–2.0 mm Al | ~20–25 keV | Extremity, paediatric |
| Medium | 60–90 kVp | 2.5 mm Al | 2.5–3.5 mm Al | ~30–40 keV | General body radiography |
| Hard | 100–120 kVp | 2.5–3.0 mm Al | 4.0–5.5 mm Al | ~40–50 keV | Chest, barium studies |
| Very hard | 120–150 kVp | 3.0 mm Al + Cu | 5.0–7.0 mm Al | ~50–60 keV | CT scanning |

### The Half-Value Layer (HVL) in Detail

The HVL is determined experimentally by measuring beam attenuation:

1. Measure baseline intensity (I₀) without attenuator
2. Add successive layers of aluminium, measuring intensity after each
3. Plot intensity vs thickness on semi-log graph
4. Read off the thickness at which I = I₀/2 → this is the HVL

**Second HVL (HVL₂):** The thickness of material required to reduce intensity from I₀/2 to I₀/4 (i.e., the HVL of the already-filtered beam):

- For an ideal monoenergetic beam: HVL₁ = HVL₂ (beam does not change quality as it passes through attenuator)
- For a real polyenergetic beam: **HVL₂ > HVL₁** — the beam becomes progressively harder as low-energy photons are preferentially removed

**Homogeneity coefficient (HC):** HC = HVL₁ / HVL₂

- HC = 1.0 for monoenergetic beam
- HC < 1.0 for polyenergetic beam (typical clinical values: 0.5–0.7)
- Lower HC → more heterogeneous (polychromatic) beam

---

## Beam Hardening

**Beam hardening** is the progressive increase in mean beam energy as an X-ray beam passes through matter (patient tissues or filters):

**Mechanism:**
- Low-energy photons are more readily absorbed (photoelectric effect ∝ 1/E³)
- High-energy photons penetrate further
- The transmitted beam becomes **progressively richer in high-energy photons** as it penetrates deeper tissue
- Mean energy of the beam increases with depth of penetration

**Clinical consequences of beam hardening:**

1. **Cupping artefact in CT**: In a uniform cylindrical object (e.g., a water phantom), beam hardening causes the centre to appear less dense than the periphery — a characteristic "cupping" of the CT number profile. This occurs because the beam reaching the central detectors has been hardened more than beams reaching peripheral detectors.

2. **Streak artefacts in CT**: At high-density interfaces (e.g., metal implants, dense bone), extreme beam hardening produces dark streaks between dense objects — a major artefact in patients with hip prostheses or dental implants.

3. **Correct exposure chart design**: Technique charts must account for the fact that thicker body parts require not just more mAs but also higher kVp — because beam hardening through thick tissue reduces contrast at low kVp.

**Beam hardening correction in CT:**
- **Water correction**: Scanner software applies a polynomial correction derived from the known HVL of water — reduces cupping artefact for soft tissue
- **Bone correction**: Additional correction for high-density structures
- **Metal artefact reduction (MAR)**: Advanced iterative algorithms that model and correct for metal implant beam hardening

---

## Beam Filtration in Depth

### Inherent Filtration

Every X-ray tube has inherent filtration from the materials between the focal spot and the exit port:

| Component | Material | Al Equivalent |
|---|---|---|
| Glass envelope window | Borosilicate glass (~1 mm) | ~0.5 mm Al |
| Metal/ceramic envelope | Beryllium window (~0.5 mm) | &lt;0.1 mm Al |
| Insulating oil | Transformer oil (~10 mm) | ~0.1 mm Al |
| Tube housing window | Aluminium (~1 mm) | ~1.0 mm Al |
| **Total inherent** | | **~0.5–1.5 mm Al equivalent** |

### Added Filtration

Additional filters placed in the beam after the tube exit port:

**Aluminium (Al, Z=13):** Most common added filter material
- Low cost; easy to machine; widely available
- Effectively removes photons below ~20–25 keV
- Standard: 1.0–2.5 mm Al added

**Copper (Cu, Z=29):** Used for high-kVp applications (CT, high-energy fluoroscopy)
- Higher Z than Al → more effective at removing mid-energy photons (20–50 keV)
- Typically 0.1–0.3 mm Cu (equivalent to ~10–15 mm Al)
- A thin aluminium layer is placed after copper to absorb the copper's own characteristic X-rays (~8 keV) produced by photoelectric interaction with the copper filter

**Compound filters (K-edge filters):**
- Used in mammography — molybdenum or rhodium filter exploits the K-edge to selectively transmit a narrow energy band
- Used in dual-energy subtraction to shape the high-energy beam

### Compensation (Wedge) Filters

These are not beam-hardening filters — they are **intensity-modifying filters** used to compensate for non-uniform patient thickness:

- **Wedge filter**: Thick end attenuates the beam on the thin side of the patient; thin end over thick side → more uniform image density
- **Trough filter (bow-tie filter)**: Used in CT scanners — thicker at the periphery (where the path through the patient is shorter and beam intensity higher) → equalises detector input across the detector array → reduces dose at the patient periphery

**Bow-tie filter effect in CT:**
- Reduces peripheral patient dose by 20–40%
- Improves uniformity of detector signal → better image noise uniformity
- Reduces detector dynamic range requirements

---

## Spectrum Comparisons Across Modalities

### General Radiography (80 kVp, 2.5 mm Al filtration)

- Continuous bremsstrahlung from ~20 to 80 keV
- Characteristic peaks at 58 and 67 keV (if kVp ≥ 70)
- Mean energy ≈ 35–40 keV
- HVL ≈ 3.0 mm Al
- Optimised for soft tissue and bone contrast simultaneously

### Chest Radiography (120 kVp, 2.5 mm Al filtration)

- Continuous bremsstrahlung from ~25 to 120 keV
- Characteristic peaks at 58 and 67 keV
- Mean energy ≈ 50–55 keV
- HVL ≈ 5.0 mm Al
- Higher energy → more penetrating through ribs and mediastinum; reduced bone contrast (deliberate — lung detail prioritised)

### CT Scanning (120 kVp, 2.5 mm Al + 0.1–0.3 mm Cu filtration + bow-tie)

- Very similar to chest radiography spectrum but with heavier filtration
- Mean energy ≈ 55–65 keV
- HVL ≈ 6.0–7.0 mm Al
- Very hard beam → minimises beam hardening artefacts
- Bow-tie filter modifies spatial intensity distribution

### Mammography (28 kVp, Mo target, 0.03 mm Mo filter)

- Very low-energy spectrum: 17–20 keV
- Dominated by Mo characteristic peaks (17.4 and 19.6 keV)
- Bremsstrahlung above 20 keV absorbed by Mo filter
- Mean energy ≈ 17–18 keV
- Extremely soft beam — only 2–3 cm of breast tissue penetrated
- High photoelectric contrast between glandular tissue, fat, and microcalcifications

### Fluoroscopy (70–90 kVp, 2.5–3.0 mm Al filtration)

- Continuous beam during screening; pulsed during acquisitions
- Mean energy ≈ 35–40 keV
- Continuous beam quality adjustment during procedure as patient anatomy changes
- Dose rate varies from 1–10 mGy/min (screening) to 25–100 mGy/min (high-dose mode)

---

## Practical Implications for Radiographic Technique

### The kVp–mAs Trade-off

Since beam output ∝ kVp², reducing kVp and increasing mAs can maintain the same detector exposure while changing image contrast and patient dose:

| Change | Detector Exposure | Image Contrast | Patient Dose |
|---|---|---|---|
| Increase kVp 15%, reduce mAs 50% | Maintained (~equal) | Decreased | **Decreased** |
| Decrease kVp 15%, double mAs | Maintained (~equal) | Increased | **Increased** |

The **optimal kVp** for any examination is the minimum required for adequate penetration — above this, increasing kVp reduces both contrast and dose (lower photoelectric fraction).

### Optimising the Spectrum for Low-Contrast Lesions

Soft tissue lesions (liver lesion, pulmonary nodule, renal mass) have very low inherent contrast. Optimisation strategy:
- Use **lower kVp** to increase photoelectric absorption differential between lesion and background
- Use **contrast agents** (iodine, barium) to exploit the K-edge
- In CT: **dual-energy acquisitions** (80 kVp + 140 kVp) allow virtual monoenergetic image reconstruction at any keV, optimised for iodine or calcium characterisation

### Paediatric Technique

Children require different spectrum optimisation:
- Smaller body habitus → **lower kVp** adequate for penetration
- More radiosensitive tissues → **dose minimisation** is paramount
- Lower kVp + appropriately reduced mAs → acceptable image quality at significantly lower dose
- **Never use adult technique factors** on children — the dose consequences are disproportionately large relative to body mass and lifetime cancer risk

<div className="book-important">

**Radiosensitivity and kVp selection in paediatrics**: Lower-energy X-ray beams (lower kVp) deposit more dose per unit of image information than higher-energy beams in the same tissue volume. However, higher-energy beams penetrate further and irradiate a larger tissue volume. For paediatric examinations, the **smallest field size, lowest adequate kVp, and minimum mAs** consistent with diagnostic quality — combined with gonadal and thyroid shielding where appropriate — constitute the optimised technique. Reference dose levels for paediatric examinations are published by the ICRP and national bodies and should be used as a quality benchmark.

</div>

---

<div className="book-summary">

- X-ray production requires three prerequisites: a **thermionic electron source** (heated tungsten filament), a **high accelerating voltage** (kVp), and a **high-Z metal target** (tungsten, Z=74). Each electron arrives at the anode with kinetic energy = kVp in keV; at 100 kVp, electrons travel at ~55% of the speed of light.
- **Bremsstrahlung** (80–90% of output) is produced when electrons decelerate in the Coulomb field of tungsten nuclei. The energy lost per interaction ranges from near-zero to the full electron kinetic energy → **continuous polyenergetic spectrum** from ~0 to E_max = kVp (in keV).
- **Characteristic radiation** (10–20% of output above 70 kVp) is produced when incident electrons eject K-shell electrons from tungsten atoms. Outer-shell electrons fall into the vacancy, emitting photons of fixed energy: **Kα ≈ 58 keV** (L→K), **Kβ ≈ 67 keV** (M→K), **Kγ ≈ 69 keV** (N→K). These appear as discrete spikes on the bremsstrahlung continuum.
- The **Auger effect** (competing with characteristic X-ray emission) ejects an outer electron rather than emitting a photon. Tungsten's high **fluorescence yield** (ω_K ≈ 0.96) means 96% of K-shell vacancies produce characteristic X-rays — reinforcing tungsten's suitability as a target.
- **Increasing kVp**: raises E_max, shifts spectrum to higher energies, increases total output (∝ kVp²), unchanged characteristic line positions. **Increasing mAs**: scales all photon numbers proportionally; shape and E_max unchanged. **Adding filtration**: removes low-energy photons, increases mean energy (beam hardening), reduces skin dose.
- X-ray production **efficiency ≈ (Z × kVp) / 500,000** — typically **1–2%** for tungsten at diagnostic kVp. The remaining **98–99% becomes heat** in the anode, driving all thermal management requirements.
- **Mammography tubes** use Mo or Rh targets with matched K-edge filters to produce near-monoenergetic beams at **17–23 keV** — precisely tuned for maximum soft-tissue photoelectric contrast at minimal glandular dose. **Mo/Mo** for thin/fatty breasts; **Rh/Rh** for dense/thick breasts.
- **Beam hardening** (progressive increase in mean energy with depth penetration) causes **cupping and streak artefacts in CT**, corrected by software algorithms and bow-tie filtration. The **HVL** and **homogeneity coefficient** (HVL₁/HVL₂) quantify beam polychromaticity.
- The **15% rule** (increasing kVp by 15% ≈ doubling beam output) and **kVp–mAs trade-off** are the principal tools for optimising image quality against patient dose. Lower kVp increases contrast but increases dose; higher kVp reduces both contrast and dose — the optimum is the minimum kVp that provides adequate penetration.

</div>
