---
id: electricity-magnetism-and-electromagnetism
title: "Electricity, Magnetism & Electromagnetism"
sidebar_label: "Electricity, Magnetism & Electromagnetism"
---

# Electricity, Magnetism, and Electromagnetism

Every piece of equipment in the modern radiology department — the X-ray tube that accelerates electrons to produce photons, the transformer that steps mains voltage to kilovolts, the superconducting magnet that generates the static field in MRI, and the gradient coils that encode spatial information — operates on principles of electricity, magnetism, and electromagnetism. These are not abstract concepts: they are the engineering reality behind every image produced. This chapter builds a rigorous and clinically anchored understanding of each discipline, from fundamental charge through to MRI resonance physics.

<div className="book-objectives">

- Define electric charge, current, voltage, resistance, and power and state their SI units
- Apply Ohm's Law and the power equations to X-ray circuit calculations
- Distinguish between direct current (DC) and alternating current (AC) and explain their roles in X-ray generation
- Describe the construction and operating principles of step-up and step-down transformers
- Explain the purpose of rectification and the difference between half-wave, full-wave, and three-phase rectification
- Define magnetic field strength, flux density, and the units Tesla and Gauss
- Classify materials as ferromagnetic, paramagnetic, or diamagnetic with clinical examples
- State Faraday's Law of electromagnetic induction and describe its applications in radiology
- Explain the Larmor equation and calculate precession frequency at clinical field strengths
- Describe the roles of the static field (B₀), gradient coils, and RF coils in MRI
- Explain electromagnetic shielding and its application in MRI suite design

</div>

---

## Part I: Electricity

### Electric Charge

Electric charge is a fundamental property of matter arising from the presence of subatomic particles:

- **Proton**: charge = +1.602 × 10⁻¹⁹ C (positive)
- **Electron**: charge = −1.602 × 10⁻¹⁹ C (negative)
- **Neutron**: charge = 0

The **SI unit of charge** is the **Coulomb (C)**:
- 1 Coulomb = the charge of **6.24 × 10¹⁸ electrons**
- Conversely, 1 electron carries a charge of **1.602 × 10⁻¹⁹ C**

**Fundamental laws of charge:**
1. **Like charges repel; unlike charges attract** (Coulomb's Law)
2. Charge is **conserved** — it cannot be created or destroyed, only transferred
3. Charge is **quantised** — always a multiple of the elementary charge (e = 1.602 × 10⁻¹⁹ C)

**Coulomb's Law** — the force between two point charges:

**F = k × q₁ × q₂ / r²**

Where:
- F = electrostatic force (Newtons)
- k = Coulomb's constant = 8.99 × 10⁹ N·m²/C²
- q₁, q₂ = magnitudes of the charges (Coulombs)
- r = distance between charges (metres)

This inverse-square relationship between force and distance is analogous to the inverse square law for radiation intensity — and shares the same geometric origin.

### Electric Field

An **electric field (E)** exists in the space around a charged object. It describes the force that would act on a unit positive test charge placed at that location:

**E = F/q** (N/C, or equivalently V/m)

- Field lines point **from positive to negative** charges
- The electric field is uniform between parallel plates (the principle of the X-ray tube cathode–anode gap)
- Electrons in the X-ray tube are accelerated through a uniform electric field created by the kVp potential difference

### Electric Potential and Voltage

**Electric potential (V)** at a point is the work done per unit positive charge in moving a charge from infinity to that point:

**V = W/q** (unit: Volt = Joule/Coulomb)

**Potential difference (voltage, ΔV)** between two points is the work done per unit charge moving between them. It is this potential difference that drives current flow and accelerates electrons in the X-ray tube.

**The electron-volt (eV)** — defined using this concept:
- When an electron (charge = 1.602 × 10⁻¹⁹ C) is accelerated through a potential difference of 1 volt:
- Energy gained = qV = 1.602 × 10⁻¹⁹ C × 1 V = **1.602 × 10⁻¹⁹ J = 1 eV**
- At 100 kVp: each electron gains **100 keV** of kinetic energy

<div className="book-keypoint">

In the X-ray tube, electrons emitted from the heated cathode filament are accelerated through a potential difference of **40–150 kVp** (kilovolt peak). Each electron arrives at the anode with kinetic energy equal to kVp (in keV). The **maximum energy of any X-ray photon** produced equals this kinetic energy — which is why the X-ray spectrum extends up to, but never exceeds, the applied kVp numerically expressed in keV. A 120 kVp tube produces photons with energies ranging from near zero up to **120 keV**.

</div>

### Electric Current

**Electric current (I)** is the rate of flow of electric charge:

**I = Q/t** (unit: Ampere = Coulomb/second)

- 1 Ampere = 1 Coulomb of charge flowing per second past a cross-section
- In metallic conductors, current is carried by **electrons** flowing from negative to positive (conventional current is defined as flowing from positive to negative — the opposite direction)
- In the X-ray tube: the tube current is measured in **milliamperes (mA)**, typically 50–1,200 mA

**Current in clinical X-ray practice:**

| mA Setting | Electrons/second (approx.) | Clinical Context |
|---|---|---|
| 100 mA | 6.24 × 10²⁰ e⁻/s | Low-dose screening |
| 300 mA | 1.87 × 10²¹ e⁻/s | General radiography |
| 600 mA | 3.74 × 10²¹ e⁻/s | High-output radiography |
| 1000 mA | 6.24 × 10²¹ e⁻/s | High-speed CT |

### Resistance and Ohm's Law

**Electrical resistance (R)** is the opposition to current flow in a material:

**Unit: Ohm (Ω)** — named after Georg Simon Ohm (1789–1854)

**Ohm's Law:** For a conductor at constant temperature:

**V = I × R**

Or equivalently: **I = V/R** and **R = V/I**

**Factors affecting resistance:**
- **Material** — copper has very low resistance; nichrome (filament wire) has higher resistance
- **Length** — longer conductor → higher resistance
- **Cross-sectional area** — wider conductor → lower resistance
- **Temperature** — in most metals, resistance **increases** with temperature; in semiconductors, resistance **decreases** with temperature

**Resistivity (ρ):** Intrinsic material property: **R = ρL/A**

| Material | Resistivity (Ω·m) | Application |
|---|---|---|
| Silver | 1.59 × 10⁻⁸ | High-conductivity contacts |
| Copper | 1.72 × 10⁻⁸ | Electrical wiring, coils |
| Tungsten | 5.60 × 10⁻⁸ | X-ray tube filament, anode |
| Nichrome | ~1.1 × 10⁻⁶ | Heating elements |
| Silicon | ~6.4 × 10² | Semiconductor detectors |
| Glass | ~10¹² | Insulator |

### Superconductivity

At very low temperatures, certain materials exhibit **zero electrical resistance** — the phenomenon of **superconductivity**:

- Below the **critical temperature (Tc)**, resistance drops to exactly zero
- Current flows indefinitely without energy loss
- **Niobium–titanium (NbTi) alloy**: Tc ≈ 9.2 K (−264°C)
- Used in MRI superconducting magnets — cooled with **liquid helium at 4.2 K**
- Once energised, the magnet coil sustains its current (and therefore its magnetic field) indefinitely without power input — the basis of persistent-mode MRI operation

<div className="book-definition">

**Superconductivity** is the phenomenon in which certain materials, when cooled below a critical temperature (Tc), exhibit exactly zero electrical resistance. In MRI, superconducting coils of niobium–titanium alloy are cooled to 4.2 K by liquid helium. The coil is energised once during installation and then enters **persistent mode** — maintaining its full magnetic field without ongoing electrical power. A quench (sudden loss of superconductivity) rapidly boils the liquid helium and can damage the magnet — a serious MRI safety event.

</div>

### Power and Energy

**Electrical power (P)** is the rate of energy transfer:

**P = V × I = I² × R = V²/R** (unit: Watt = Joule/second)

**Electrical energy (W):**

**W = P × t = V × I × t** (unit: Joule, or kilowatt-hour for commercial electricity)

**X-ray tube power calculations:**

| Generator Setting | Tube Power | Application |
|---|---|---|
| 80 kVp, 500 mA | 80 × 0.5 = **40 kW** | Abdominal radiography |
| 120 kVp, 600 mA | 120 × 0.6 = **72 kW** | High-output chest X-ray |
| 140 kVp, 800 mA, 1s CT | 140 × 0.8 = **112 kW** | CT scanner (high-power tube) |

**Heat Units (HU):** Historically, tube heat loading was measured in Heat Units:

HU = kVp × mA × s × waveform factor

Modern systems use **Joules** (1 HU ≈ 0.7 J for three-phase generators).

---

## Part II: Circuits and Current Types

### Direct Current (DC)

**Direct current (DC)** flows continuously in **one direction**:

- Produced by batteries, DC generators, and after rectification of AC
- The X-ray tube requires DC — electrons must travel in one direction only (cathode → anode)
- Reversed polarity would destroy the tube (anode cannot emit the required thermionic current)

### Alternating Current (AC)

**Alternating current (AC)** periodically reverses direction:

- Mains supply frequency: **50 Hz** (UK/Europe) or **60 Hz** (USA)
- Described by: **peak voltage (V_peak)**, **root mean square voltage (V_rms)**, and **frequency (f)**
- **V_rms = V_peak / √2 ≈ 0.707 × V_peak**
- UK mains: V_rms = 230 V, V_peak ≈ 325 V
- AC is used for power distribution because it can be **stepped up and down** using transformers (which require a changing current)

### Rectification

Rectification converts AC to pulsating DC suitable for X-ray tube operation:

**Half-wave rectification:**
- Only one half of the AC cycle is used; the other half is blocked
- Produces pulsating DC at the same frequency as the AC input (50 Hz)
- X-ray output: intermittent, very pulsatile — **100% ripple**
- Used only in very simple, low-powered dental X-ray units

**Full-wave rectification:**
- Both halves of the AC cycle are used (negative half inverted to positive)
- Produces pulsating DC at **twice** the AC frequency (100 Hz for 50 Hz supply)
- X-ray output: **pulsatile but more continuous** — **100% ripple** (voltage still dips to zero)
- Standard in older single-phase X-ray generators

**Three-phase rectification (6-pulse or 12-pulse):**
- Uses three-phase AC supply (120° phase offset between three phases)
- Voltage ripple dramatically reduced:
  - 6-pulse: **~14% ripple**
  - 12-pulse: **~3.5% ripple**
- Near-constant high voltage → nearly constant X-ray output → better beam quality and efficiency
- Standard in modern radiographic and fluoroscopic generators

**High-frequency (inverter) generators:**
- Modern standard for all clinical X-ray equipment
- AC mains → rectified to DC → chopped to **high-frequency AC (1–200 kHz)** by inverter circuit → stepped up by high-frequency transformer → rectified and smoothed to near-constant DC
- Voltage ripple: **&lt;1%** — essentially constant potential
- Benefits: compact size, precise kVp control, rapid exposure times, low patient dose
- Virtually all modern X-ray tubes, CT scanners, and fluoroscopy units use high-frequency generators

<div className="book-remember">

**Voltage ripple** matters because X-ray output is proportional to the tube voltage squared. A generator with high ripple (voltage repeatedly dipping to zero) produces many low-energy photons that are too weak to penetrate the patient — contributing to dose without forming useful image. **High-frequency generators** produce near-constant kVp, ensuring a harder, more consistent beam with less patient dose per useful image.

</div>

### Transformers

A **transformer** is a device that uses electromagnetic induction to transfer electrical energy between two circuits with different voltages, while maintaining the same frequency.

**Construction:**
- **Primary coil (N₁ turns)**: receives input voltage V₁
- **Secondary coil (N₂ turns)**: delivers output voltage V₂
- **Iron core**: channels the magnetic flux linking the two coils

**Transformer equation:**

**V₁/V₂ = N₁/N₂ = I₂/I₁**

(For an ideal transformer with 100% efficiency: power in = power out → V₁I₁ = V₂I₂)

**Types of transformers in X-ray equipment:**

| Transformer | Turns Ratio | Function | Voltage Change |
|---|---|---|---|
| **High-voltage (step-up)** | N₂ ≫ N₁ | Generates kVp for X-ray tube | 230 V AC → 40,000–150,000 V AC |
| **Filament (step-down)** | N₂ ≪ N₁ | Heats cathode filament | 230 V AC → 3–15 V AC |
| **Autotransformer** | Variable tap | Selects kVp (pre-regulation) | Adjustable ratio |

**Worked example:**

A step-up transformer has 500 turns in the primary and 200,000 turns in the secondary. If the primary voltage is 220 V, what is the secondary voltage?

V₂ = V₁ × (N₂/N₁) = 220 × (200,000/500) = 220 × 400 = **88,000 V = 88 kV**

What is the secondary current if the primary current is 10 A?

I₂ = I₁ × (N₁/N₂) = 10 × (500/200,000) = **0.025 A = 25 mA**

---

## Part III: Magnetism

### The Nature of Magnetic Fields

A **magnetic field** is a region of space in which a magnetic force acts on moving charges, magnetic dipoles, or magnetic materials. Magnetic fields are produced by:

1. **Permanent magnets** (aligned magnetic domains in ferromagnetic materials)
2. **Moving electric charges** (any current-carrying conductor)
3. **Changing electric fields** (Maxwell's extension of Ampere's Law)

**Magnetic field quantities:**

| Quantity | Symbol | Definition | SI Unit |
|---|---|---|---|
| Magnetic flux density | **B** | Force per unit moving charge; "field strength" in MRI | Tesla (T) |
| Magnetic field intensity | **H** | B corrected for material permeability | Ampere/metre (A/m) |
| Magnetic flux | **Φ** | Total magnetic field through a surface | Weber (Wb) |
| Permeability | **μ** | Measure of material's magnetisability | H/m |

**Unit relationships:**
- 1 Tesla (T) = 1 Weber/metre² = 10,000 Gauss (G)
- Earth's magnetic field ≈ 25–65 μT (0.25–0.65 G)

### Magnetic Field Lines

Magnetic field lines are a visualisation tool describing the direction and magnitude of the magnetic field:

- Lines emerge from the **north pole** and enter the **south pole** (outside the magnet)
- Inside the magnet, lines run from south to north (forming closed loops — unlike electric field lines, magnetic field lines never begin or end)
- **Density of lines** represents field strength — closer lines = stronger field
- **Direction of lines** represents field direction — tangent to field line at any point

### Magnetic Field of a Current-Carrying Conductor

**Ampere's Law** (simplified): A current-carrying conductor produces a magnetic field encircling it. The field magnitude around a long straight wire:

**B = μ₀I / (2πr)**

Where:
- μ₀ = permeability of free space = 4π × 10⁻⁷ T·m/A
- I = current (Amperes)
- r = distance from the wire (metres)

**Right-hand rule:** Point the right thumb in the direction of conventional current — the fingers curl in the direction of the magnetic field circles.

### The Solenoid and Electromagnet

A **solenoid** is a helical coil of wire. When current flows, the fields from individual turns superpose to create a nearly uniform magnetic field inside the coil:

**B_solenoid = μ₀ × n × I**

Where n = turns per unit length (turns/metre)

- The field inside a solenoid is **uniform and axial** — aligned with the solenoid axis
- This is directly analogous to the MRI bore: the superconducting coils create a highly uniform B₀ field along the patient axis
- Field homogeneity in clinical MRI: **≤1–5 ppm** over the imaging volume (achieved by passive and active shimming)

### Magnetic Properties of Materials

All materials respond to an external magnetic field, classified by the nature and magnitude of their response:

#### Diamagnetic Materials

- Weakly **repelled** by a magnetic field
- Effect is very small and temporary — disappears when the external field is removed
- Net magnetic moment = zero when no external field applied
- **Examples**: Water, most biological tissue, copper, gold, graphite
- **MRI relevance**: Normal tissue is diamagnetic — this is why patients can be imaged in MRI. Tissue does not respond dangerously to the static field. However, diamagnetic susceptibility differences between tissues (e.g., deoxyhaemoglobin vs oxyhaemoglobin) produce **susceptibility-weighted contrast** in MRI.

#### Paramagnetic Materials

- Weakly **attracted** to a magnetic field
- Have unpaired electrons that align partially with the external field
- Effect is temporary — disappears when the external field is removed
- **Examples**: Gadolinium, manganese, molecular oxygen, methaemoglobin
- **MRI relevance**: **Gadolinium-based contrast agents (GBCAs)** are paramagnetic. Gadolinium has 7 unpaired electrons, generating a large local magnetic moment that shortens the **T1 relaxation time** of adjacent water protons — producing T1 signal enhancement. Free gadolinium is toxic; clinical GBCAs chelate the gadolinium to stabilise it.

#### Ferromagnetic Materials

- **Strongly attracted** to a magnetic field — attraction can be **thousands of times** greater than paramagnetism
- Contain magnetic domains that align strongly with external fields
- **Permanently magnetised** after exposure to a strong field (remnant magnetism)
- **Examples**: Iron (Fe), Nickel (Ni), Cobalt (Co), and their alloys (steel)
- **MRI hazard**: Ferromagnetic objects become dangerous **projectiles** in MRI — the attractive force of a 1.5 T magnet on a steel object can be hundreds of Newtons. This is the **"missile effect"** — the leading cause of MRI-related serious adverse events. Ferromagnetic implants (certain pacemakers, aneurysm clips, metallic foreign bodies) may be displaced or heated by the MRI field.

#### Superparamagnetic Materials

- Behave like paramagnets at zero field but have very high magnetisability when a field is applied
- **Iron oxide nanoparticles (SPIO, USPIO)**: Superparamagnetic — used as MRI contrast agents targeting the reticuloendothelial system
- Produce dramatic **T2* signal loss** (susceptibility effects) — used in liver lesion characterisation and lymph node imaging

<div className="book-important">

**MRI Safety and Magnetic Material Classification:**

The ACR and MHRA classify implants as:
- **MR Safe** (no magnetic, electrical, or thermal hazard in MRI) — typically non-metallic
- **MR Conditional** (safe under specified conditions of field strength, SAR, gradient exposure)
- **MR Unsafe** (presents known hazard — ferromagnetic implants, certain pacemakers, cochlear implants)

The critical MRI screening question for any patient is: **"Do you have any metallic implant, device, or foreign body?"** Ferromagnetic objects can migrate, rotate, heat, or develop induced currents in the MRI environment — each mechanism capable of serious patient injury.

</div>

---

## Part IV: Electromagnetism

### Faraday's Law of Electromagnetic Induction

**Michael Faraday** (1791–1867) discovered in 1831 that a **changing magnetic field induces an electromotive force (EMF)** in a conductor. This is the foundational principle of electromagnetic induction:

**Faraday's Law:**

**EMF = −N × ΔΦ/Δt**

Where:
- EMF = induced electromotive force (Volts)
- N = number of turns in the conductor coil
- ΔΦ/Δt = rate of change of magnetic flux (Wb/s)
- The negative sign (Lenz's Law) indicates the induced EMF opposes the change that created it

**Key principle:** The greater the **rate of change** of magnetic flux, the greater the induced EMF. A static magnetic field induces **no** EMF — only a **changing** field does.

### Lenz's Law

Lenz's Law states that the induced current flows in a direction that **opposes the change in magnetic flux** that caused it:

- If the magnetic flux through a coil increases, the induced current creates a magnetic field that **opposes** the increase
- This is a consequence of conservation of energy — it would violate energy conservation if the induced current aided the change

**Clinical consequence:** Lenz's Law explains why rapidly switching MRI gradient coils induce **eddy currents** in conductive parts of the scanner (cryostat, patient table, implants) — these eddy currents oppose the gradient switching and cause:
- Gradient field distortion (reduced by gradient pre-emphasis corrections)
- Heating of metallic implants (MRI safety concern)
- The characteristic loud **knocking noise** during MRI scanning

### Applications of Electromagnetic Induction in Radiology

#### 1. Transformers (Revisited)

The transformer operates by mutual induction:
1. AC current in the primary coil creates a **time-varying magnetic flux** in the iron core
2. This changing flux **induces an EMF** (and thus a current, if loaded) in the secondary coil
3. The voltage ratio equals the turns ratio: V₂/V₁ = N₂/N₁
4. A DC current in the primary would create a **static** flux → **zero induction** → no transformer action

This explains why transformers only work with AC — and why AC must be converted to DC **after** the transformer stage in X-ray generators.

#### 2. Generators and Motors

- **Generator (dynamo)**: Mechanical rotation of a conductor in a magnetic field → changing flux → induced EMF. Converts mechanical energy to electrical energy.
- **Motor**: Current-carrying conductor in a magnetic field → force (Lorentz force) → mechanical rotation. Converts electrical energy to mechanical energy.
- **Rotating anode motor**: The X-ray tube's anode is spun by an **induction motor** built into the tube insert — the stator coils outside the glass envelope create a rotating magnetic field that induces currents in the rotor (the anode stem), driving rotation at 3,000–10,000 rpm without any direct mechanical connection.

<div className="book-pearl">

The **rotating anode induction motor** is an elegant application of electromagnetic induction in X-ray tube design. No mechanical shaft penetrates the glass vacuum envelope — instead, the stator coils outside the envelope create a rotating magnetic field that induces eddy currents in the copper/iron rotor **inside** the vacuum. These induced currents interact with the stator field (Lorentz force) to spin the rotor. This contactless drive is essential because any shaft bearing would introduce gas molecules that would destroy the vacuum required for X-ray production.

</div>

#### 3. MRI Radiofrequency (RF) Coils

RF coils in MRI both **transmit** and **receive** electromagnetic energy:

**Transmit function (excitation):**
- The body coil or volume coil generates a **radiofrequency electromagnetic field (B₁ field)** at the Larmor frequency
- This oscillating B₁ field, perpendicular to B₀, flips the magnetisation of hydrogen protons from their equilibrium alignment
- Power: 1–25 kW during pulse transmission

**Receive function (signal detection):**
- After the RF pulse, precessing magnetisation induces an **EMF in the receiver coil** by Faraday's Law
- The signal (Free Induction Decay — FID) is amplified, digitised, and Fourier-transformed to generate the image
- Modern receive arrays use multiple small coils (8–128 elements) for improved SNR

#### 4. MRI Gradient Coils

Gradient coils are electromagnets that produce **linear spatial variation** of the magnetic field:

- Three sets of gradient coils: **X, Y, Z** (slice select, phase encode, frequency encode)
- Each gradient coil is rapidly switched (rise times: 200–500 μs; slew rate: up to 200 T/m/s)
- The rapidly changing current in gradient coils produces rapidly changing magnetic fields → induces eddy currents in the cryostat and patient — causing heating and the acoustic noise of MRI

### The Lorentz Force

A charged particle moving in a magnetic field experiences a force called the **Lorentz force**:

**F = q × v × B × sin(θ)**

Where:
- F = force (Newtons)
- q = charge (Coulombs)
- v = velocity of particle (m/s)
- B = magnetic flux density (Tesla)
- θ = angle between velocity and magnetic field vectors

**Key properties:**
- Force is **always perpendicular** to both velocity and field → causes circular motion
- Does **no work** on the particle (force perpendicular to motion → no displacement in direction of force)
- Causes charges to move in **circular or helical paths** in a uniform magnetic field

**Clinical applications of the Lorentz force:**

| Application | How Lorentz force is involved |
|---|---|
| Cathode ray tube (historical) | Electron beam deflection by magnetic coils |
| Cyclotron (PET isotope production) | Charged particles spiral in magnetic field |
| MRI blood flow artefacts | Moving ions in blood interact with B₀ → flow-related signal |
| Magnetohydrodynamic (MHD) effect in MRI | Blood flow in large vessels near magnets → induced voltages on ECG → T-wave elevation artefact |

---

## Part V: The MRI Magnetic Environment

### The Static Magnetic Field (B₀)

The static magnetic field is the dominant feature of the MRI environment. It is:

- **Always on** in superconducting MRI systems — 24 hours a day, 365 days a year, even when not scanning
- Oriented **along the bore axis** (z-axis, head-to-foot for conventional bore)
- Produced by **superconducting coils** of NbTi wire cooled to 4.2 K with liquid helium
- Highly homogeneous (≤5 ppm over the central imaging volume after shimming)

**Clinical field strengths:**

| System | B₀ (Tesla) | Larmor Frequency (¹H) | Clinical Use |
|---|---|---|---|
| Low-field open MRI | 0.2–0.5 T | 8.5–21.3 MHz | Claustrophobia, bariatric patients |
| Standard clinical | 1.5 T | 63.9 MHz | General MRI — workhorse system |
| High-field clinical | 3.0 T | 127.7 MHz | Neuroimaging, cardiac, spectroscopy |
| Research (ultra-high field) | 7.0 T | 297.2 MHz | Research; some clinical approval |
| Research extremes | 9.4–14.0 T | 400–600 MHz | Animal imaging, spectroscopy |

### The Larmor Equation

Hydrogen nuclei (protons) in a magnetic field precess around B₀ at the **Larmor frequency**:

**ω₀ = γ × B₀**

Where:
- ω₀ = Larmor (precession) frequency (MHz)
- γ = gyromagnetic ratio for ¹H = **42.577 MHz/T**
- B₀ = static magnetic field strength (Tesla)

**Larmor frequencies for key nuclei:**

| Nucleus | γ (MHz/T) | Larmor freq at 1.5 T | Larmor freq at 3.0 T | Clinical Use |
|---|---|---|---|---|
| ¹H (proton) | 42.577 | 63.9 MHz | 127.7 MHz | Standard MRI (water, fat) |
| ²³Na (sodium) | 11.262 | 16.9 MHz | 33.8 MHz | Sodium MRI (brain, cartilage) |
| ³¹P (phosphorus) | 17.235 | 25.9 MHz | 51.7 MHz | MRS (energy metabolism) |
| ¹³C (carbon-13) | 10.705 | 16.1 MHz | 32.1 MHz | Hyperpolarised carbon MRI |
| ¹⁹F (fluorine-19) | 40.052 | 60.1 MHz | 120.1 MHz | Fluorine MRI (drug tracking) |

### Magnetic Resonance — The Physical Principle

When hydrogen protons are placed in B₀, they align either **parallel** (low energy, slightly more protons) or **anti-parallel** (high energy) to the field. The net excess of parallel protons produces a **net magnetisation vector (M₀)** aligned with B₀.

An **RF pulse at exactly the Larmor frequency** resonantly excites the protons:
1. The B₁ field of the RF pulse tips M₀ away from B₀ (by a flip angle α°)
2. The tipped magnetisation precesses about B₀ at the Larmor frequency
3. This precessing magnetisation induces an **EMF in the receive coil** (Faraday's Law)
4. The induced signal decays as the protons **relax** back to equilibrium:
   - **T1 relaxation** (spin-lattice): return of longitudinal magnetisation (recovery)
   - **T2 relaxation** (spin-spin): decay of transverse magnetisation (dephasing)
5. Spatial encoding is achieved by applying **magnetic field gradients** (Gx, Gy, Gz) that cause protons at different locations to precess at slightly different frequencies — encoding position in the frequency and phase of the detected signal

<div className="book-keypoint">

The entire information content of an MRI image is encoded in the **frequency and phase** of the RF signal induced in the receiver coil by the precessing protons. Gradient coils create a controlled, spatially varying magnetic field — protons in different locations precess at slightly different Larmor frequencies. By measuring the frequencies present in the detected signal and applying a **Fourier transform**, the scanner reconstructs the spatial distribution of proton density and relaxation times — generating the MRI image. This is electromagnetically elegant: position is encoded as frequency, and frequency is decoded by Fourier mathematics.

</div>

### Electromagnetic Shielding in MRI

MRI magnets require two types of shielding:

**1. Passive magnetic shielding (fringe field confinement):**
- The magnetic fringe field of the MRI magnet extends beyond the scanner room
- The **5 gauss (0.5 mT) line** defines the safe perimeter for pacemakers and ferromagnetic equipment
- Passive shielding uses **iron plates** in the walls, floor, and ceiling to contain the fringe field
- Active shielding (secondary coils wound opposite to the main coil) reduces fringe field more efficiently — standard in modern "self-shielded" MRI magnets

**2. RF shielding (Faraday cage):**
- The MRI scanner room is enclosed in a **copper or aluminium Faraday cage** (RF cage)
- Purpose: prevents external RF signals (mobile phones, broadcast radio, electrical equipment) from reaching the RF receiver coils and corrupting the MRI signal
- A Faraday cage works by Faraday's Law: external electromagnetic radiation induces surface currents on the conducting enclosure, which generate an opposing field that cancels the incident field inside
- The cage must be continuous — all penetrations (waveguides, power supply filters, patient monitoring cables) must be filtered or constructed as waveguide penetrations

---

## Part VI: Electrical Safety in Radiology

### Shock Hazard — Principles

Electric current through the human body causes injury by:
- **Electrolysis** of tissue fluids
- **Thermal injury** (Joule heating: P = I²R)
- **Ventricular fibrillation** (most dangerous — can occur with currents as low as 50 mA)
- **Respiratory muscle paralysis**

**Threshold currents:**

| Current (mA) | Physiological Effect |
|---|---|
| 1 mA | Threshold of perception (tingling) |
| 5 mA | Maximum safe current (UK regulatory limit) |
| 10–20 mA | Painful; "let-go threshold" — muscle tetany prevents release |
| 50–100 mA | Risk of ventricular fibrillation |
| &gt;100 mA | Certain fibrillation; cardiac arrest; severe burns |

### Electrical Safety in X-ray Equipment

- **Earthing (grounding)**: All metallic casings connected to earth — fault current flows to ground rather than through the patient or operator
- **Double insulation**: Two independent layers of insulation on patient-contact equipment — no earth required
- **Residual Current Devices (RCDs)**: Detect current imbalance between live and neutral (indicating current flowing to earth through a person) and disconnect within 30 ms
- **Isolation transformers**: Electrically isolated secondary circuit — prevents direct connection between equipment and mains earth, reducing microshock risk in cardiac catheterisation laboratories

### Microshock Hazard in Catheterisation Laboratories

Patients with intracardiac catheters are particularly vulnerable:
- **Macroshock**: ≥50 mA can cause fibrillation when current flows through the intact body
- **Microshock**: As little as **50–100 μA** can cause fibrillation when current is delivered **directly to the myocardium** via a catheter or pacemaker lead
- Catheterisation labs require isolated power supplies, equipotential bonding, and strict cable management

---

## Summary: Electrical and Magnetic Parameters in Radiologic Equipment

| Parameter | Symbol | Unit | Controls / Significance |
|---|---|---|---|
| Tube voltage | kVp | kilovolt peak | Maximum X-ray photon energy; beam penetration; image contrast |
| Tube current | mA | milliampere | X-ray photon quantity; dose rate |
| Exposure time | s | second | Motion blur risk; total dose (with mA) |
| Exposure | mAs | milliampere-second | Total photon output; image receptor dose |
| Tube power | W or kW | kilowatt | Heat loading; output capacity |
| MRI field strength | B₀ | Tesla | SNR (∝ B₀); Larmor frequency; image quality |
| Gradient strength | G | T/m | Spatial resolution; slice thickness; scan speed |
| Gradient slew rate | SR | T/m/s | Echo time; peripheral nerve stimulation risk |
| RF frequency | f | MHz | Larmor frequency = 42.58 × B₀ (for ¹H) |
| SAR | W/kg | watt/kilogram | RF energy deposition; tissue heating risk |

---

<div className="book-summary">

- **Electric charge** (unit: Coulomb) is a fundamental particle property. Current (Ampere = C/s), voltage (Volt = J/C), and resistance (Ohm) are related by **Ohm's Law: V = I × R**. In the X-ray tube, kVp determines electron (and X-ray photon) energy; mA determines electron number and X-ray quantity.
- **Transformers** exploit electromagnetic induction to step AC voltage up or down: **V₁/V₂ = N₁/N₂**. High-voltage step-up transformers generate the kVp for X-ray tubes; step-down transformers heat the cathode filament. Transformers require AC — DC causes no induction.
- **Rectification** converts AC to pulsating DC required by the X-ray tube. High-frequency (inverter) generators achieve &lt;1% voltage ripple, producing a near-constant kVp and superior beam quality with lower patient dose.
- **Magnetic flux density (B)** is measured in **Tesla** (1 T = 10,000 Gauss). MRI uses superconducting NbTi coils cooled to 4.2 K with liquid helium, operating in persistent mode with zero electrical resistance and zero energy loss.
- Materials are classified as **ferromagnetic** (strongly attracted — MRI projectile hazard), **paramagnetic** (weakly attracted — basis of Gd contrast agents), or **diamagnetic** (weakly repelled — normal tissue).
- **Faraday's Law**: a changing magnetic flux induces an EMF (EMF = −NΔΦ/Δt). This is the operating principle of transformers, generators, the rotating anode induction motor, MRI RF coils (signal detection), and the Faraday cage shielding the MRI room.
- The **Larmor equation** (ω₀ = γB₀) governs MRI: at 1.5 T, hydrogen protons precess at **63.9 MHz**; at 3.0 T, at **127.7 MHz**. RF pulses at the Larmor frequency cause resonance; the return signal (FID) is detected by Faraday induction and Fourier-transformed to produce the image.
- **Lorentz force** (F = qvB sinθ) acts on moving charges in magnetic fields — the basis of cyclotrons (PET isotope production), the MHD effect (T-wave artefact in MRI ECG monitoring), and cathode ray deflection.
- **MRI shielding** requires passive iron shielding or active coil shielding to contain the magnetic fringe field, and a **Faraday cage** (copper/aluminium enclosure) to exclude external RF interference from the receive coils.
- Electrical safety in radiology depends on **earthing, double insulation, RCDs**, and **isolation transformers**. Ventricular fibrillation can occur at 50 mA (macroshock) or as little as 50 μA (microshock via intracardiac catheter) — particularly relevant in cardiac catheterisation laboratories.

</div>
