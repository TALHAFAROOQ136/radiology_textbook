---
id: electromagnetic-energy
title: "Electromagnetic Energy"
sidebar_label: "Electromagnetic Energy"
---

# Electromagnetic Energy

Every diagnostic image produced by a modern radiology department — whether a chest X-ray, a CT scan, an MRI, or a nuclear medicine study — relies on the physical principles of electromagnetic energy. X-rays, gamma rays, radiofrequency waves, and visible light are all members of the same electromagnetic family, differing only in their energy, frequency, and wavelength. This chapter provides a rigorous foundation in the physics of electromagnetic radiation, examining its dual wave–particle nature, its behaviour across the spectrum, its production and interaction with matter, and its precise application in medical imaging.

<div className="book-objectives">

- Describe the wave and particle (quantum) models of electromagnetic radiation and explain when each model applies
- State the fundamental wave equation and apply it to calculate frequency, wavelength, and photon energy
- Describe the full electromagnetic spectrum and identify the medical modality associated with each region
- Explain the properties of X-rays that make them suitable for diagnostic imaging
- Apply the inverse square law to calculate radiation intensity at different distances
- Describe the photoelectric effect, Compton scattering, and pair production as mechanisms of X-ray interaction with matter
- Distinguish between X-rays and gamma rays in terms of origin, energy, and clinical use
- Explain coherence, polarisation, and beam divergence in the context of X-ray production
- Describe energy conversion in the X-ray tube and explain the significance of the 1% efficiency figure
- Understand the clinical implications of beam quality (kVp) and beam quantity (mAs)

</div>

---

## The Nature of Electromagnetic Radiation

Electromagnetic (EM) radiation presents one of the most remarkable dualities in physics: depending on the experimental context, it behaves as a **continuous wave** or as a stream of discrete **particles (photons)**. Both models are physically valid; neither alone fully describes all observed phenomena.

### The Wave Model

In the wave model, electromagnetic radiation is described as coupled, oscillating **electric (E)** and **magnetic (B)** fields propagating through space:

- The electric and magnetic field vectors are **perpendicular to each other**
- Both fields are **perpendicular to the direction of propagation** (transverse wave)
- No medium is required — EM waves propagate through a perfect vacuum
- All EM waves travel at the **speed of light in vacuo**: **c = 2.998 × 10⁸ m/s** (≈ 3 × 10⁸ m/s)

**Wave parameters:**

| Parameter | Symbol | Definition | SI Unit |
|---|---|---|---|
| Wavelength | λ (lambda) | Distance between successive wave crests | Metre (m) |
| Frequency | f (or ν) | Number of complete oscillations per second | Hertz (Hz = s⁻¹) |
| Period | T | Time for one complete oscillation | Second (s) |
| Amplitude | A | Maximum field displacement | V/m (electric) |
| Speed | c | Rate of propagation in vacuum | m/s |

**The fundamental wave equation:**

**c = f × λ**

This equation expresses the inverse relationship between frequency and wavelength: as frequency **increases**, wavelength **decreases**, and vice versa — while their product always equals c.

**Example calculations:**

*What is the frequency of a diagnostic X-ray photon with wavelength 0.01 nm?*

λ = 0.01 nm = 0.01 × 10⁻⁹ m = 10⁻¹¹ m

f = c/λ = (3 × 10⁸) / (10⁻¹¹) = **3 × 10¹⁹ Hz**

*What is the wavelength of a 100 MHz MRI radiofrequency pulse?*

λ = c/f = (3 × 10⁸) / (10⁸) = **3 metres**

### The Particle (Quantum) Model

The wave model fails to explain two key phenomena: the **photoelectric effect** and **Compton scattering**. These require the quantum model, in which electromagnetic radiation is treated as a stream of discrete energy packets called **photons** (or quanta).

Each photon carries a fixed quantum of energy proportional to its frequency:

**E = hf = hc/λ**

Where:
- **E** = photon energy (Joules or electron-volts)
- **h** = Planck's constant = 6.626 × 10⁻³⁴ J·s
- **f** = frequency (Hz)
- **λ** = wavelength (m)
- **c** = speed of light (3 × 10⁸ m/s)

**The electron-volt (eV):** In radiologic physics, photon energies are expressed in electron-volts rather than Joules:

- 1 eV = 1.602 × 10⁻¹⁹ J (energy gained by one electron accelerated through 1 volt)
- 1 keV = 10³ eV; 1 MeV = 10⁶ eV

**A practical formula for X-ray photon energy:**

**E (keV) = 1.24 / λ (nm)**

| Wavelength | Photon Energy | Region |
|---|---|---|
| 3 m | ~4 × 10⁻⁷ eV | MRI radiofrequency |
| 500 nm | 2.5 eV | Green visible light |
| 10 nm | 124 eV | Ultraviolet boundary |
| 0.1 nm | 12.4 keV | Diagnostic X-ray |
| 0.01 nm | 124 keV | High-energy X-ray / gamma |

<div className="book-keypoint">

The **wave–particle duality** of electromagnetic radiation is not a paradox but a statement about the limits of classical models. The wave model correctly describes propagation, diffraction, and interference; the particle model correctly describes energy exchange (absorption, emission) at the atomic level. In radiologic physics: **wave model** is used to describe the X-ray beam as it travels; **particle model** is used to describe how individual photons interact with tissue atoms (photoelectric effect, Compton scatter).

</div>

---

## Planck's Constant and Quantum Theory

**Max Planck** (1858–1947) proposed in 1900 that electromagnetic energy could only be emitted or absorbed in discrete multiples of a fundamental unit — the **quantum**. This revolutionary idea resolved the "ultraviolet catastrophe" and launched the age of quantum mechanics.

**Albert Einstein** extended Planck's work in 1905 by demonstrating that light itself consists of quantised particles (photons) — work for which he received the **Nobel Prize in Physics in 1921**, not for relativity. Einstein's explanation of the photoelectric effect using photon theory was the decisive experimental proof that electromagnetic energy is quantised.

<div className="book-pearl">

The photoelectric effect — the ejection of electrons from a metal surface by light — could not be explained by wave theory. Wave theory predicted that any frequency of light with sufficient intensity should eject electrons; experimentally, electrons were only ejected above a **threshold frequency** regardless of intensity. Einstein's photon model perfectly explained this: only photons with energy above the electron's binding energy could cause ejection. This same principle — photon energy must exceed electron binding energy — governs photoelectric absorption in diagnostic X-ray imaging.

</div>

---

## The Electromagnetic Spectrum

The electromagnetic spectrum spans an enormous range of frequencies and energies — from extremely long radio waves (wavelengths of kilometres) to ultra-short gamma rays (wavelengths smaller than an atomic nucleus). All members share the same physical nature and travel at the speed of light; they differ only in their energy and frequency.

### Complete EM Spectrum with Medical Applications

| Region | Wavelength Range | Frequency Range | Photon Energy | Medical Application |
|---|---|---|---|---|
| **Radiofrequency (RF)** | &gt;1 mm | &lt;300 GHz | &lt;1.2 meV | MRI — proton excitation and signal detection |
| **Microwave** | 1 mm–1 m | 300 MHz–300 GHz | 1.2 µeV–1.2 meV | Diathermy; microwave ablation |
| **Infrared (IR)** | 700 nm–1 mm | 300 GHz–430 THz | 1.2 meV–1.8 eV | Thermography; photobiomodulation |
| **Visible light** | 400–700 nm | 430–750 THz | 1.8–3.1 eV | Endoscopy; fibre optics; fundoscopy |
| **Ultraviolet (UV)** | 10–400 nm | 750 THz–30 PHz | 3–120 eV | Phototherapy (UVB for psoriasis); sterilisation |
| **X-rays** | 0.001–10 nm | 30 PHz–300 EHz | 0.1–120 keV | Radiography, fluoroscopy, CT, mammography |
| **Gamma rays** | &lt;0.01 nm | &gt;3 × 10¹⁹ Hz | &gt;100 keV | Nuclear medicine (gamma camera, PET) |

### Key Boundary Points

**Ionising threshold (~10 eV / UV range):**
Radiation above this energy level can remove electrons from atoms (ionisation). This marks the boundary between non-ionising and ionising radiation — and the beginning of biological risk.

**X-ray / Gamma-ray overlap:**
X-rays and gamma rays have overlapping energy ranges (both can be found in the 100 keV region). They are **physically identical** — both are electromagnetic photons. The distinction is purely one of **origin**:
- **X-rays**: produced by electron interactions (X-ray tube, bremsstrahlung, characteristic emission)
- **Gamma rays**: produced by nuclear disintegration (radioactive decay)

<div className="book-remember">

**Mnemonic for the EM spectrum (low energy → high energy):**

**R**adio → **M**icrowave → **I**nfrared → **V**isible → **U**ltraviolet → **X**-rays → **G**amma

*"Real Men In Vegas Use X-ray Glasses"*

Ionising radiation begins at the **ultraviolet–X-ray boundary** (~10–120 eV). Everything below UV (including MRI radiofrequency and ultrasound) is non-ionising and carries no ionisation risk.

</div>

### Ionising vs Non-Ionising Radiation in Medical Imaging

| Modality | Radiation Type | Ionising? | Biological Risk |
|---|---|---|---|
| MRI | Radiofrequency (RF) | No | Minimal (thermal, implant hazards) |
| Diagnostic Ultrasound | Sound waves (not EM) | No | Negligible at diagnostic levels |
| Infrared thermography | Infrared | No | None |
| Plain X-ray / Fluoroscopy | X-rays (10–150 keV) | Yes | Stochastic (cancer risk) |
| CT | X-rays (80–140 kVp) | Yes | Stochastic (higher dose than plain film) |
| Mammography | X-rays (25–35 kVp) | Yes | Stochastic (low dose per examination) |
| Nuclear medicine (gamma camera) | Gamma rays (70–364 keV) | Yes | Stochastic |
| PET | Gamma rays (511 keV annihilation) | Yes | Stochastic |

---

## Properties of X-rays

X-rays possess a unique combination of physical properties that make them irreplaceable in diagnostic imaging:

### Physical Properties

**1. Propagation at the speed of light**
X-rays travel at c = 3 × 10⁸ m/s. The time for an X-ray photon to traverse a patient (30 cm) is approximately 10⁻⁹ s (1 nanosecond) — effectively instantaneous.

**2. Travel in straight lines (rectilinear propagation)**
X-rays diverge from a point source in straight lines, forming a divergent beam. This geometric property governs:
- Beam divergence and field size at the image receptor
- Geometric magnification
- Penumbra (geometric unsharpness) around the focal spot

**3. Invisibility**
X-rays have no colour, no flavour, no smell, and no direct tactile sensation. This invisibility necessitates radiation monitoring equipment (dosimeters, Geiger counters, ionisation chambers).

**4. Cannot be focused by conventional optics**
Unlike visible light, X-rays cannot be focused by glass lenses. The refractive index of all materials for X-rays is extremely close to 1 — they pass through without significant bending. Specialised X-ray optics (Fresnel zone plates, capillary optics) exist for research but are impractical for clinical imaging.

**5. Penetrate matter**
The degree of penetration depends on:
- **Photon energy** — higher energy = greater penetration
- **Atomic number (Z) of absorber** — higher Z = greater attenuation
- **Density of absorber** — greater density = greater attenuation
- **Thickness of absorber** — greater thickness = greater attenuation

**6. Differential attenuation creates image contrast**
Different tissues attenuate X-rays to different degrees:
- **Bone** (high Z, high density): absorbs heavily → appears **white**
- **Soft tissue** (moderate Z, moderate density): partial absorption → appears **grey**
- **Air/lung** (very low density): minimal absorption → appears **black**

**7. Ionise matter**
X-ray photons carry sufficient energy to eject electrons from atoms, creating ion pairs. This ionising property:
- Enables detection (ionisation chambers, photostimulable phosphors)
- Causes biological damage (DNA strand breaks, free radical formation)
- Is exploited therapeutically (radiation therapy)

**8. Cause fluorescence**
Many materials emit visible light when irradiated with X-rays (**fluorescence**). This property is exploited in:
- Image intensifier input screens
- Flat-panel detector scintillator layers (caesium iodide, gadolinium oxysulphide)
- Fluoroscopic screens
- Computed radiography (CR) photostimulable phosphor plates

**9. Affect photographic emulsions and digital detectors**
X-ray photons expose silver halide crystals in film and generate charge in digital detectors (flat-panel detectors, CR plates), enabling image formation.

**10. Biologically active**
X-rays can cause cell damage, mutation, carcinogenesis, and cell death — the basis of both the radiation hazard of diagnostic imaging and the curative potential of radiation therapy.

<div className="book-definition">

**X-rays** are electromagnetic photons with energies in the range of approximately 0.1–120 keV, produced by the deceleration of high-speed electrons (bremsstrahlung) or by electron transitions between inner orbital shells (characteristic radiation). They travel at the speed of light, cannot be focused by optical lenses, penetrate matter differentially according to atomic number and density, ionise atoms, and interact with biological tissue through photoelectric absorption and Compton scattering.

</div>

---

## The Inverse Square Law

### Derivation and Statement

X-rays diverge from a point source in all directions, spreading their total energy over an increasingly large spherical surface. The surface area of a sphere is 4πr². Therefore, as distance increases, the same total energy is distributed over a larger area, and the **intensity (energy per unit area) decreases**:

**I ∝ 1/d²**

Or, comparing intensities at two distances:

**I₁/I₂ = d₂²/d₁²**

Where:
- I₁, I₂ = intensities at distances d₁ and d₂ respectively
- d₁, d₂ = distances from the radiation source

### Worked Examples

**Example 1:** The radiation intensity at 1 m from an X-ray tube is 100 mGy/min. What is the intensity at 2 m?

I₂ = I₁ × (d₁/d₂)² = 100 × (1/2)² = 100 × 0.25 = **25 mGy/min**

**Example 2:** An operator receives 4 mSv/year standing at 0.5 m from a fluoroscopy source. What dose would they receive at 1.5 m?

I₂ = 4 × (0.5/1.5)² = 4 × (1/9) = **0.44 mSv/year**

### Inverse Square Law — Dose Reduction Table

| Distance from source | Relative intensity | % reduction from 1 m |
|---|---|---|
| 0.5 m | 400% | (higher — closer) |
| 1 m | 100% | Reference |
| 2 m | 25% | 75% reduction |
| 3 m | 11.1% | 89% reduction |
| 4 m | 6.25% | 93.75% reduction |
| 5 m | 4% | 96% reduction |

<div className="book-pearl">

The inverse square law has profound implications in interventional radiology and cardiac catheterisation. A cardiologist standing **0.5 m** from the patient during a procedure receives **4 times** the dose of a colleague standing at **1 m** — not twice as much. During cine acquisition, stepping back just 0.5 m can reduce personal dose by 75%. The inverse square law is one of the most powerful (and most underused) tools in occupational radiation protection.

</div>

### Limitations of the Inverse Square Law

The inverse square law applies **strictly** only to:
- A **point source** (or effectively point source)
- **Free space** (no scatter or attenuation)
- **Primary beam only** (scatter does not follow the inverse square law)

In clinical practice:
- The focal spot is not a perfect point — there is some deviation at very short distances
- Scatter radiation adds to dose at close distances
- Room backscatter slightly modifies the relationship
- Despite these limitations, the inverse square law remains an excellent approximation for radiation protection calculations

---

## X-ray Beam Characteristics

### Beam Quality (Hardness) and kVp

**Beam quality** describes the penetrating power of the X-ray beam — determined primarily by photon energy:

- **kVp (kilovolt peak)**: The maximum accelerating voltage applied across the X-ray tube. It determines the **maximum photon energy** in the beam (in keV numerically equal to kVp)
- Higher kVp → higher maximum energy → **harder** (more penetrating) beam
- The X-ray beam produced is actually **polyenergetic (heterogeneous)** — a spectrum of energies from near 0 up to E_max = kVp (in keV)

**Half Value Layer (HVL):** The most practical measure of beam quality — the thickness of a specified material (typically aluminium for diagnostic X-rays) required to reduce beam intensity to **exactly half**:

| kVp | Approximate HVL (mm Al) | Clinical Use |
|---|---|---|
| 25–35 kVp | 0.3–0.5 mm Al | Mammography |
| 60–70 kVp | 2.0–3.0 mm Al | Extremity radiography |
| 80–100 kVp | 3.5–4.5 mm Al | Chest, abdomen radiography |
| 120–140 kVp | 5.0–7.0 mm Al | CT scanning |

### Beam Quantity (Intensity) and mAs

**Beam quantity** describes the number of photons in the beam — determined by:

- **mA (milliamperes)**: Tube current = number of electrons striking the anode per second → controls photon output rate
- **s (seconds)**: Exposure time
- **mAs = mA × s**: The combined measure of beam quantity

Doubling mAs doubles the number of photons → doubles detector exposure → reduces quantum noise.

**kVp vs mAs effects:**

| Parameter | Effect on photon energy | Effect on photon number | Effect on patient dose | Effect on contrast |
|---|---|---|---|---|
| Increase kVp | Higher maximum energy | Slight increase | Moderate increase | Decrease (more Compton scatter) |
| Increase mAs | No change | Proportional increase | Proportional increase | No significant change |

### Beam Filtration

**Filtration** selectively removes low-energy (soft) photons from the beam — photons too weak to reach the image receptor but deposited entirely in the patient's superficial tissues:

- **Inherent filtration**: Glass envelope of the X-ray tube + insulating oil + tube window (equivalent to ~0.5 mm Al)
- **Added filtration**: Aluminium or copper sheets placed in the beam exit port
- **Total filtration**: Required minimum per regulatory standards (UK/EU: ≥2.5 mm Al total for tubes operating above 70 kVp)

Filtration **reduces patient dose** without significantly reducing image quality — a key component of dose optimisation.

---

## Beam Divergence and Geometric Factors

### Divergence from the Focal Spot

X-rays diverge from the focal spot in a cone-shaped beam. As Source-to-Image Distance (SID) increases:
- The beam covers a **larger field area** at the image receptor
- Beam intensity **decreases** (inverse square law)
- Geometric sharpness at the **edges** of the field increases slightly

### Source-to-Image Distance (SID) Effects

**Magnification factor (M):**

**M = SID / SOD**

Where SOD = Source-to-Object Distance

- Greater SID → less magnification → sharper image
- Standard SID for chest PA: **180 cm** (to minimise cardiac magnification)
- Standard SID for most projections: **100–115 cm**

### Focal Spot Size and Geometric Unsharpness

The focal spot is not a true point — it has a finite size (typically 0.3 mm fine focus to 1.2 mm broad focus). This produces **geometric unsharpness (penumbra)** around object edges:

**U_g = f × OID / SOD**

Where:
- U_g = geometric unsharpness
- f = focal spot size
- OID = Object-to-Image Distance
- SOD = Source-to-Object Distance

Minimising geometric unsharpness requires: **small focal spot, maximum SID, minimum OID**.

---

## Interactions of X-rays with Matter

When X-ray photons encounter matter, they may interact by four principal mechanisms. Three are clinically significant in diagnostic radiology:

### 1. Coherent (Rayleigh) Scattering

**Energy range:** Very low energy X-rays (&lt;10 keV)
**Mechanism:** The photon causes the entire atom to oscillate and re-emit a photon of the same energy in a slightly different direction — no energy transfer, no ionisation
**Clinical significance:** Minimal — occurs primarily at energies below the diagnostic range; does not contribute usefully to image formation and contributes negligibly to dose

### 2. Photoelectric Absorption

**Energy range:** Dominant at low-to-moderate energies (20–70 keV in diagnostic range); favoured when photon energy is just above the electron binding energy

**Mechanism:**
1. Incident photon is **completely absorbed** by an inner-shell (usually K-shell) electron
2. The electron is ejected as a **photoelectron** with kinetic energy = E_photon − E_binding
3. A vacancy in the inner shell is created
4. An outer-shell electron falls in to fill the vacancy → **characteristic X-ray** emitted (or **Auger electron**)
5. No scattered photon exits — complete absorption

**Probability:** ∝ Z³/E³ — increases dramatically with atomic number and decreases sharply with increasing photon energy

**Radiologic importance:**
- Responsible for **contrast** in diagnostic X-ray imaging — bone (Z~13.8) absorbs far more than soft tissue (Z~7.4) by photoelectric effect
- Explains why **iodine (Z=53) and barium (Z=56)** are effective contrast agents — their Z³ absorption is vastly greater than soft tissue
- Dominant interaction in **mammography** (low kVp, high-Z tissues)
- Major contributor to **patient dose** — the photon's energy is deposited entirely in the patient

### 3. Compton Scattering (Incoherent Scattering)

**Energy range:** Dominant in the **diagnostic and therapeutic energy range** (30 keV – 30 MeV); the most important interaction in clinical radiography and CT

**Mechanism:**
1. Incident photon interacts with a **loosely bound outer-shell electron** (binding energy negligible)
2. The photon transfers **part** of its energy to the electron → electron ejected as **Compton (recoil) electron**
3. The photon continues in a **new direction** at reduced energy → **scattered photon**
4. The scatter angle and energy distribution are governed by the **Klein-Nishina formula**

**Energy of scattered photon:**

The scattered photon energy depends on the scatter angle (θ):

At θ = 0° (forward scatter): photon retains most of its energy
At θ = 90°: moderate energy loss
At θ = 180° (backscatter): maximum energy loss (minimum scattered photon energy)

**Probability:** Proportional to electron density (electrons/gram) — approximately constant across soft tissues (independent of Z)

**Radiologic importance:**
- **Dominant interaction** in routine radiography (60–120 kVp)
- Scattered radiation reaches the detector and **degrades image contrast** (adds uniform "fog")
- Controlled by: **grids** (anti-scatter grids), **collimation** (limiting field size), **air gaps**
- Major source of **occupational radiation exposure** to radiographers and fluoroscopists (scattered photons travel sideways to the operator)
- In CT: scatter is a significant contributor to image noise and streak artefacts

### 4. Pair Production

**Energy range:** Requires **minimum 1.022 MeV** (threshold = 2 × electron rest mass energy)
**Mechanism:**
1. High-energy photon passes close to the nucleus
2. Photon is completely absorbed and converted into an **electron–positron pair**
3. The positron eventually undergoes **annihilation** with a nearby electron → two 511 keV photons
4. Any photon energy above 1.022 MeV is distributed as kinetic energy between the pair

**Clinical significance:**
- Does **not occur** in diagnostic radiology (photon energies too low — max ~120–150 keV)
- Occurs in **radiation therapy** (MV beams) and in the body of PET patients (⁵¹¹ keV annihilation photons)
- Important for shielding calculations in radiotherapy bunkers

### Summary of X-ray Interactions

| Interaction | Energy Range | Z Dependence | Outcome | Clinical Importance |
|---|---|---|---|---|
| Coherent scatter | &lt;10 keV | ~Z² | No energy transfer; scattered photon | Negligible in clinical range |
| Photoelectric effect | 1–100 keV (diagnostic) | ∝ Z³ | Complete absorption; characteristic X-ray | Image contrast; patient dose |
| Compton scatter | 30 keV–30 MeV | ~electron density | Scattered photon + recoil electron | Dominant in radiography; degrades contrast |
| Pair production | &gt;1.022 MeV | ~Z² | Electron–positron pair; annihilation | Radiotherapy; PET physics |

<div className="book-keypoint">

The **relative dominance** of photoelectric absorption vs Compton scattering depends on photon energy and tissue Z. At **low kVp** (mammography, 25–35 kVp): photoelectric effect dominates → high contrast, higher dose. At **high kVp** (chest X-ray, 120+ kVp): Compton scatter dominates → lower contrast, lower dose. The optimal kVp for any examination balances **image contrast** (favouring lower kVp, more photoelectric) against **patient dose** (favouring higher kVp, reduced photoelectric absorption). This balance is the theoretical basis of kVp selection in clinical radiographic technique.

</div>

---

## X-ray Production — Energy Conversion

### The Energy Chain

In the X-ray tube, a precisely defined sequence of energy conversion occurs:

**Electrical potential energy → Electron kinetic energy → X-ray photon energy + Heat**

**Quantitative efficiency:**
- **~1% of electron kinetic energy** is converted to X-ray photons
- **~99% is converted to heat**

This extremely low efficiency is the reason X-ray tube anode heating is a major engineering challenge and why:
- Anodes are made of tungsten (high melting point: 3,422°C) on a rhenium–tungsten alloy disk
- Anodes rotate at 3,000–10,000 rpm to distribute heat over a larger area
- External oil cooling and radiator systems are required for high-workload tubes

### Bremsstrahlung (Braking Radiation)

**Bremsstrahlung** (German: "braking radiation") accounts for ~80–90% of the X-ray output from a diagnostic tube:

**Mechanism:**
1. A high-speed electron enters the tungsten anode and approaches the nucleus
2. The Coulomb field of the nucleus decelerates the electron
3. The decelerated electron loses kinetic energy
4. This energy is emitted as an X-ray photon
5. The photon energy = the energy lost by the electron (from near-zero to E_max = kVp in keV)

**Key characteristics of bremsstrahlung:**
- Produces a **continuous, polyenergetic spectrum** (from ~0 to kVp)
- The spectrum peaks at approximately **1/3 of kVp** (in keV)
- Maximum photon energy = kVp (numerically, in keV) — only if an electron loses all its energy in a single interaction
- As kVp increases, the spectrum shifts to higher energies

### Characteristic Radiation

**Characteristic radiation** accounts for ~10–20% of X-ray output at diagnostic kVp levels:

**Mechanism:**
1. An electron from the cathode ejects an **inner-shell electron** (usually K-shell) from a tungsten atom
2. A vacancy is created in the K-shell
3. An outer-shell electron (L, M, or N shell) falls into the vacancy
4. The energy difference between shells is released as a **characteristic X-ray photon** with a fixed, discrete energy

**Energy of characteristic X-ray = E_outer shell − E_inner shell**

**Tungsten K-shell characteristic X-rays:**

| Transition | Photon Energy |
|---|---|
| L → K | ~58 keV (Kα) |
| M → K | ~67 keV (Kβ) |
| N → K | ~69 keV (Kγ) |

**Key point:** Characteristic X-rays only occur if the incident electrons have sufficient energy to eject the inner-shell electron — for tungsten K-shell, this requires tube voltage ≥ **69.5 kVp**. Below this threshold (e.g., in mammography using molybdenum or rhodium anodes), characteristic X-rays are generated at much lower energies (~17–23 keV), which are ideally suited to breast tissue imaging.

### The X-ray Emission Spectrum

The complete emission spectrum is the sum of bremsstrahlung (continuous) and characteristic radiation (discrete lines):

**Effect of increasing kVp:**
- Maximum photon energy increases
- Overall intensity increases (more electrons, more energetic beam)
- Characteristic lines shift (no change for tungsten — fixed by shell energies)

**Effect of increasing mAs:**
- Height of spectrum increases proportionally (more photons at each energy)
- Shape of spectrum unchanged
- Maximum energy unchanged

**Effect of added filtration:**
- Low-energy photons are selectively removed
- Peak of spectrum shifts to higher energy (beam hardening)
- Overall photon count decreases, but average energy increases

---

## Coherence and Polarisation of X-rays

### Coherence

**Coherent radiation** has photons with a fixed phase relationship to one another — all waves are "in step." **Incoherent radiation** has random phase relationships.

- X-rays from an X-ray tube are **incoherent** — produced by millions of individual bremsstrahlung events with random phases
- **Laser light** is highly coherent — produced by stimulated emission with fixed phase
- This incoherence is not a limitation for diagnostic imaging, where coherence is unnecessary
- **Synchrotron X-rays** (produced by electron storage rings) can be highly coherent and are used in research phase-contrast imaging

### Polarisation

**Polarised radiation** has electric field oscillations confined to a single plane. **Unpolarised radiation** oscillates in all planes perpendicular to propagation.

- X-rays from X-ray tubes are **unpolarised** — bremsstrahlung is emitted with random polarisation orientations
- Partial polarisation occurs with Compton scattering at 90° (used in research detectors)
- Polarisation is not exploited in conventional diagnostic X-ray imaging

---

## Radiofrequency Radiation in MRI

Although MRI is not an X-ray modality, its physical basis involves a different region of the electromagnetic spectrum — **radiofrequency (RF) radiation** — and is worth understanding in the context of the full EM spectrum.

### RF in MRI — Key Principles

| Parameter | Value |
|---|---|
| Field strength (clinical) | 1.5 T or 3.0 T (research: 7 T) |
| RF frequency at 1.5 T | ~63.9 MHz (Larmor frequency) |
| RF frequency at 3.0 T | ~127.7 MHz |
| Photon energy at 63.9 MHz | ~2.6 × 10⁻⁷ eV (~260 neV) |
| Wavelength at 63.9 MHz | ~4.7 m |

**Key points:**
- RF photons carry **far too little energy** to ionise atoms (10⁶× less than diagnostic X-rays)
- MRI is therefore **non-ionising** — no radiation dose to the patient from the RF pulse itself
- The **Larmor frequency** (ω₀ = γB₀) is determined by the magnetic field strength and the gyromagnetic ratio (γ) of the proton
- The RF pulse **excites hydrogen protons** (abundant in water and fat) by flipping their magnetic moment
- The detected MRI signal is the RF energy re-emitted as protons **relax back** to their equilibrium state

<div className="book-important">

MRI carries **no ionising radiation risk** from the RF pulse itself. However, MRI carries specific safety hazards related to the **static magnetic field** (ferromagnetic projectile hazard, implant displacement), the **gradient magnetic fields** (peripheral nerve stimulation), and the **RF energy deposition** (tissue heating, quantified by Specific Absorption Rate — SAR, measured in W/kg). These are distinct from ionising radiation hazards and require separate safety screening protocols.

</div>

---

## Electromagnetic Energy in Nuclear Medicine — Gamma Rays

### Gamma Ray Properties

Gamma rays used in nuclear medicine are electromagnetic photons emitted by **nuclear transitions** following radioactive decay. Their properties:

- Energies used clinically: **70–511 keV**
- Travel at the speed of light (as all EM radiation)
- Highly penetrating — can exit the patient's body and be detected externally
- Interact with matter primarily by **photoelectric effect** (low-energy gammas) and **Compton scattering** (dominant at intermediate energies)
- Cannot be focused — collimation achieved by **lead collimators** in gamma cameras

### Optimal Gamma Energy for Imaging

The ideal gamma energy for external gamma camera imaging balances two competing requirements:
1. **High enough** to penetrate tissue and exit the body (requires &gt;100 keV)
2. **Low enough** to be absorbed efficiently by the detector crystal (requires &lt;300 keV)
3. **Low enough** that collimation and shielding are practical (very high energies require impractically thick lead)

**⁹⁹ᵐTc (140 keV)** strikes this balance almost perfectly — one reason it dominates nuclear medicine worldwide.

| Nuclide | Principal Gamma Energy | Suitability for Imaging |
|---|---|---|
| ⁹⁹ᵐTc | 140 keV | Excellent — optimal energy |
| ¹²³I | 159 keV | Excellent |
| ⁶⁷Ga | 93, 184, 300 keV | Good |
| ¹³¹I | 364 keV | Moderate — higher energy increases septal penetration |
| ²⁰¹Tl | 69–83 keV (Hg X-rays) | Good but low energy |
| ¹¹¹In | 171, 245 keV | Good |

---

<div className="book-summary">

- Electromagnetic radiation has a **dual nature**: the **wave model** describes propagation (using c = fλ), while the **particle (quantum) model** describes energy exchange (using E = hf). Both are required to fully explain X-ray behaviour.
- All EM radiation travels at **c = 3 × 10⁸ m/s** in vacuum. Energy increases with frequency and decreases with wavelength. The diagnostic X-ray range spans **0.1–120 keV**, with wavelengths of 0.001–10 nm.
- The EM spectrum from low to high energy: **Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma**. Ionisation begins at the UV–X-ray boundary (~10 eV).
- X-rays and gamma rays are **physically identical** — both are electromagnetic photons. They differ only in **origin**: X-rays from electron interactions; gamma rays from nuclear disintegration.
- The **inverse square law** states that radiation intensity decreases with the square of distance: **I ∝ 1/d²**. Doubling distance reduces intensity to **25%**; tripling distance reduces intensity to **11%**.
- The **photoelectric effect** (∝ Z³/E³) provides radiographic contrast between bone, soft tissue, and contrast agents. It is the dominant interaction at **low kVp** and is responsible for patient dose from fully absorbed photons.
- **Compton scattering** (proportional to electron density, independent of Z) dominates in the clinical radiographic range (60–120 kVp). Scattered photons degrade image contrast and are the primary source of **occupational dose** to staff.
- The X-ray tube produces a **polyenergetic bremsstrahlung spectrum** (continuous, 0 to kVp) plus discrete **characteristic radiation** lines. Only ~**1%** of electron energy is converted to X-rays; ~**99%** becomes heat.
- **Beam quality** (penetrating power) is controlled by **kVp**; **beam quantity** (photon number) is controlled by **mAs**. **Filtration** removes low-energy photons, reducing patient skin dose without sacrificing image quality.
- MRI uses **radiofrequency radiation** (~64 MHz at 1.5 T) — non-ionising, carrying only nanoelectronvolt photon energies. Nuclear medicine imaging detects **gamma rays** (70–511 keV) emitted from within the patient after administration of radionuclides.

</div>
