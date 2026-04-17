---
id: the-x-ray-tube
title: "The X-ray Tube"
sidebar_label: "The X-ray Tube"
---

# The X-ray Tube

The X-ray tube is the most critical and the most mechanically demanding component in the diagnostic imaging system. It must accelerate electrons to velocities approaching the speed of light, focus them onto a target area smaller than a square millimetre, withstand instantaneous power loads of 30–150 kilowatts, and sustain anode temperatures approaching 2,500°C — all within a glass or metal envelope the size of a large thermos flask, maintained at a vacuum one billion times lower than atmospheric pressure. Understanding the X-ray tube in depth is not merely academic: it underpins every decision about technique selection, tube protection, image quality optimisation, and the recognition of equipment failure.

<div className="book-objectives">

- Describe the complete construction of the X-ray tube, identifying each component and its material composition
- Explain thermionic emission and the space charge effect, and relate them to mA control
- Describe the line focus principle and calculate effective focal spot size from anode angle and actual focal spot dimensions
- Distinguish between stationary and rotating anodes and explain the engineering rationale for each design
- Explain the production of bremsstrahlung and characteristic radiation, including the energy spectrum produced
- Describe the anode heel effect and explain its clinical significance and applications
- Explain the principles of tube rating, heat unit calculation, and the three rating charts
- Identify the causes, mechanisms, and prevention of X-ray tube failure
- Describe the construction, materials, and thermal properties of the tube housing
- Explain off-focus radiation and its effects on image quality

</div>

---

## Historical Development

The modern X-ray tube is the direct descendant of Wilhelm Röntgen's apparatus of 1895, but shares almost nothing with it beyond the fundamental principle:

- **1895 — Crookes tube** (Röntgen's tube): A cold-cathode gas discharge tube. Electrons produced by ionisation of residual gas; no filament; unreliable and inconsistent output. Röntgen discovered X-rays accidentally while studying cathode rays.
- **1913 — Coolidge tube** (William D. Coolidge, General Electric): The first hot-cathode, high-vacuum tube. A heated tungsten filament provided a reliable, controllable electron source. **The direct ancestor of every modern X-ray tube.** Coolidge's design remained essentially unchanged for over 50 years.
- **1920s–1930s**: Rotating anode introduced (Bouwers, 1929) to distribute heat over a larger anode area.
- **1960s–1970s**: Metal–ceramic envelopes replaced glass for superior thermal performance.
- **1990s–present**: Liquid-bearing anodes, carbon composite disc anodes, and CT tubes with continuous rotation and megajoule heat storage capacity.

<div className="book-pearl">

William Coolidge's hot-cathode vacuum tube, patented in 1913, solved two critical problems of the Crookes tube simultaneously: unreliable electron emission (solved by the heated tungsten filament) and inconsistent voltage (solved by the high vacuum eliminating gas ionisation discharge). Coolidge's tube allowed, for the first time, independent control of tube current (by filament temperature) and tube voltage (by the applied kVp) — the fundamental control paradigm of X-ray imaging that has remained unchanged for over a century.

</div>

---

## Part I: The Vacuum Envelope

### Purpose

The vacuum envelope (also called the insert or tube envelope) serves two essential functions:

1. **Maintains the vacuum**: Air molecules would scatter the electron beam, reducing efficiency and causing arcing. The operating vacuum is approximately **10⁻⁶ to 10⁻⁷ mmHg** (one billionth of atmospheric pressure) — comparable to low Earth orbit.

2. **Provides structural integrity and electrical insulation**: Withstands the mechanical stress of the rotating anode and provides electrical insulation between cathode (−kVp/2) and anode (+kVp/2) at high voltage.

### Glass Envelope Tubes

Traditional tubes use a **borosilicate glass** envelope:

- Transparent to X-rays at low energies (important for beam exit window)
- Excellent electrical insulation
- **Limitation**: Tungsten vaporised from the filament and anode during operation deposits on the inner glass wall, reducing transparency, increasing electrical conductance of the wall, and eventually causing arcing — a common failure mode

### Metal–Ceramic Envelope Tubes

Modern high-performance tubes use a **metal (steel or molybdenum) and ceramic** composite:

- **Superior heat dissipation** — metal conducts heat to the surrounding oil bath more efficiently than glass
- **No tungsten deposition problem** — metal walls are not degraded by tungsten deposits
- **Longer tube life** — especially important for CT tubes with extreme heat loading
- The **beam exit window** in metal–ceramic tubes uses a beryllium or thin aluminium insert — beryllium has very low X-ray attenuation, maximising transmitted intensity

---

## Part II: The Cathode Assembly

The cathode is the negative electrode of the X-ray tube. It consists of two principal components: the **filament(s)** and the **focusing cup**.

### The Filament

The filament is a tightly coiled spiral of **tungsten wire**, typically 0.2 mm in diameter, wound into a helix 1–2 cm long and 1–2 mm in diameter.

**Why tungsten for the filament?**

| Property | Value | Significance |
|---|---|---|
| Melting point | 3,422°C | Survives operating temperatures of 2,200°C without melting |
| Atomic number | 74 | Efficient thermionic emission at high temperatures |
| Vapour pressure | Very low at 2,000°C | Minimal evaporation → long filament life |
| Tensile strength | High | Resists thermal expansion stresses |
| Electrical resistivity | Moderate | Self-limiting heating |

### Thermionic Emission

When the tungsten filament is heated by a low-voltage AC filament current (typically **3–6 amperes** at **6–12 volts**), electrons near the surface gain sufficient thermal energy to overcome the **work function** (surface binding energy) and escape from the metal:

**This process is called thermionic emission** (also known as the Edison effect, discovered by Thomas Edison in 1880).

The rate of electron emission follows the **Richardson–Dushman equation**:

**J = A × T² × e^(−φ/kT)**

Where:
- J = emission current density (A/m²)
- A = material constant
- T = absolute temperature (Kelvin)
- φ = work function of the material (eV)
- k = Boltzmann's constant

**Practical implication**: A **small increase in filament temperature produces a large increase in electron emission**. This is why filament current is the control for tube current (mA) — small adjustments to filament heating produce precise, reproducible changes in electron emission and therefore in tube current.

### The Space Charge Effect

At low tube voltages, emitted electrons accumulate near the filament as a **negative space charge cloud**. This cloud repels further electron emission and limits the tube current:

- At low kVp: tube current is **space-charge limited** — governed by the space charge, not by filament temperature
- At high kVp: the strong electric field sweeps electrons away rapidly → tube current is **temperature-limited** (emission-limited) — fully controlled by filament temperature

**Clinical consequence**: The space charge effect means that at low kVp settings (below ~40 kVp), the actual mA achieved may be lower than set — the generator must compensate by increasing filament temperature. Modern generators incorporate **space charge compensation circuits** that automatically adjust filament current to maintain the selected mA across the full kVp range.

### Dual Filaments

Most diagnostic X-ray tubes contain **two filaments** of different sizes within the focusing cup:

| Filament | Size | Effective Focal Spot | Application |
|---|---|---|---|
| Small (fine) filament | Shorter, narrower helix | 0.3–0.6 mm | High-resolution work: extremities, skull, magnification |
| Large (broad) filament | Longer, wider helix | 0.6–1.2 mm | High-output work: chest, abdomen, CT |

The filament selected determines the focal spot size. Smaller focal spot → better spatial resolution → lower heat tolerance (smaller area to distribute heat). The radiographer selects fine or broad focus based on the clinical requirement.

### The Focusing Cup

The focusing cup (also called the **Wehnelt cylinder**) is a shallow dish of **molybdenum** that surrounds the filament:

- Carries a **negative charge** (at cathode potential) → electrostatic repulsion focuses diverging electrons into a narrow beam
- Concentrates the electron beam onto a small focal area on the anode
- The shape, depth, and charge of the focusing cup determine the **focal spot size and shape**
- **Grid-biased tubes**: A negative bias voltage applied to the focusing cup (relative to the cathode) can completely suppress electron emission → acts as an electronic switch for pulsed fluoroscopy and cine angiography

---

## Part III: The Anode Assembly

The anode is the positive electrode of the X-ray tube — the target against which electrons are directed to produce X-rays.

### Anode Functions

1. **Target**: Provides the material in which electrons decelerate and produce X-rays
2. **Electrical conductor**: Conducts the tube current back to the generator circuit
3. **Heat sink**: Absorbs and dissipates the ~99% of input energy converted to heat

### Stationary Anode

The simplest anode design — a fixed tungsten target embedded in a copper block:

**Construction:**
- Tungsten target insert (~2 mm thick): provides the X-ray producing surface
- Copper block: high thermal conductivity (~400 W/m·K) → rapidly conducts heat away from the tungsten
- The assembly is fixed — it does not rotate

**Tungsten–copper interface**: Tungsten has poor thermal conductivity (~170 W/m·K) relative to copper; the copper block rapidly conducts heat from the tungsten surface to the oil bath

**Limitations:**
- Heat concentrates on a small fixed area → limits maximum instantaneous power and continuous output
- Not suitable for high-output work

**Applications:**
- Dental intraoral X-ray units (very low output)
- Some portable/mobile radiography units
- Fluoroscopy spot film devices (limited duty cycle)
- Some mammography tubes

### Rotating Anode

The rotating anode was invented specifically to solve the heat limitation of the stationary anode by distributing electron bombardment over a large circular **focal track** rather than a fixed point.

**Construction:**

| Component | Material | Function |
|---|---|---|
| Anode disc | Tungsten–rhenium alloy (10% Re) or carbon composite | Provides focal track; withstands thermal and mechanical stress |
| Graphite backing | Pyrolytic carbon | High heat capacity and radiation emissivity |
| Molybdenum stem | Molybdenum alloy | Low thermal conductivity → thermal insulation between disc and bearing |
| Bearings | Ball bearings (lubricated with silver, lead, or gallium) | Support rotation in vacuum |
| Rotor (induction motor rotor) | Copper cylinder | Driven by rotating electromagnetic field from stator |
| Stator coils | Copper windings outside envelope | Create rotating magnetic field → spin rotor by induction |

**Why the stem is molybdenum:** Molybdenum has low thermal conductivity (~138 W/m·K) — far lower than copper or steel. This **thermal barrier** prevents heat from the anode disc flowing rapidly to the bearings, which would cause bearing failure at elevated temperatures.

**Anode disc materials:**

| Material | Advantage | Limitation | Use |
|---|---|---|---|
| Pure tungsten | High Z (X-ray efficient), high melting point | Brittle at high temperature | Early rotating anodes |
| W–Re alloy (5–10% Re) | Ductile; resists surface roughening (pitting) | Slightly lower melting point | Standard rotating anodes |
| Carbon composite (graphite disc with W–Re focal track) | Very high heat capacity and emissivity | Complex manufacture | High-power CT tubes |

### Anode Rotation

The rotating anode is driven by an **induction motor** built into the tube:

- **Stator**: Coils wound outside the glass/metal envelope, connected to a starter circuit
- **Rotor**: Copper cylinder on the anode stem, inside the vacuum envelope
- A rotating electromagnetic field from the stator induces currents in the rotor (Faraday's Law) → these currents interact with the stator field (Lorentz force) → rotor spins
- **No mechanical contact** — the drive is entirely electromagnetic through the envelope wall → preserves the vacuum

**Rotation speeds:**
- Standard speed: **3,000 rpm** (50 Hz supply) or 3,600 rpm (60 Hz supply)
- High speed: **9,000–10,000 rpm** (using a higher-frequency starter circuit)

**Why high speed?** At higher rotation, each point on the focal track is bombarded for a shorter time per revolution → peak temperature per point is lower → higher maximum power output is possible.

| Rotation Speed | Focal Track Temperature | Max Power Advantage vs 3,000 rpm |
|---|---|---|
| 3,000 rpm | High | Reference |
| 9,000 rpm | Lower (same heat; shorter dwell) | ~√3 ≈ 1.73× higher maximum power |

**Pre-exposure rotation**: The starter circuit must spin the anode to operating speed **before** the exposure. Modern tubes take 0.5–1.0 seconds to reach full speed. Short exposures initiated before full speed is reached cause uneven heat distribution — a cause of focal track pitting and premature failure.

<div className="book-keypoint">

The rotating anode does not reduce the total heat generated — it distributes that heat over the entire focal track circumference rather than a fixed spot. If the disc radius at the focal track is r and the disc spins at N rpm, the **focal track circumference = 2πr**. A typical 10 cm diameter disc has a focal track circumference of approximately 31 cm — the electron beam sweeps this entire circumference every revolution, allowing each segment to cool slightly before the next bombardment. This is the engineering principle that enables rotating anodes to sustain **10–100× higher power** than stationary anodes.

</div>

---

## Part IV: The Line Focus Principle

### The Problem of Focal Spot Size

Two competing requirements govern focal spot design:

1. **Image sharpness** demands a small focal spot — a point source produces no geometric unsharpness; a large source creates a penumbra (blurred edge)
2. **Heat tolerance** demands a large target area — power density (W/mm²) must be kept below the anode material's limit to prevent melting or surface damage

The **line focus principle** (Goetze, 1918) elegantly resolves this conflict.

### The Line Focus Principle Explained

The anode face is angled at a **target angle (θ)** relative to the incident electron beam (typically **7°–20°**):

- The electrons strike a **long, narrow rectangular area** on the angled anode face — the **actual focal spot**
- Viewed from the image receptor directly below, this elongated rectangle appears **foreshortened** in one dimension
- The **effective focal spot** (the projected image of the actual focal spot) is therefore **much smaller** than the actual focal spot

**Relationship:**

**Effective focal spot = Actual focal spot length × sin(θ)**

Where θ = anode target angle

**Example:**

Actual focal spot: 4 mm (along beam direction) × 2 mm (across beam) at θ = 15°

Effective focal spot = 4 × sin(15°) = 4 × 0.259 = **1.04 mm** (along beam direction)

Cross-beam dimension is unchanged: **2 mm**

With fine filament at θ = 10°: effective ≈ 4 × sin(10°) = **0.69 mm**

**Practical values:**

| Anode Angle (θ) | Geometric Factor (sin θ) | Effect on Effective Spot |
|---|---|---|
| 7° | 0.122 | Smallest effective spot; severe heel effect |
| 10° | 0.174 | Fine focus tubes; magnification work |
| 12° | 0.208 | Standard fine focus |
| 15° | 0.259 | Broad focus general radiography |
| 17° | 0.292 | Larger effective spot; higher power |
| 20° | 0.342 | Largest effective spot; maximum power |

<div className="book-definition">

The **line focus principle** is the design approach in which the anode face is inclined at a small angle (θ) to the electron beam, so that a large actual focal spot area (for heat distribution) projects as a small effective focal spot (for geometric sharpness) when viewed from the image receptor. It allows X-ray tubes to achieve both high spatial resolution and high power tolerance simultaneously — the fundamental engineering compromise in all diagnostic X-ray tubes.

</div>

---

## Part V: The Anode Heel Effect

### Description

The X-ray intensity across the field is **not uniform** — it is systematically higher on the cathode side than on the anode side. This phenomenon is called the **anode heel effect**.

### Physical Explanation

X-rays are produced throughout the depth of the tungsten target, not only at the surface. Photons directed toward the **anode side** must travel through more tungsten before exiting the target face — they are progressively attenuated by the anode material itself:

- Photons directed toward the **cathode side** exit through less material → **higher intensity**
- Photons directed toward the **anode side** are partially absorbed → **lower intensity**
- The effect increases with **smaller anode angles** (steeper angle → more target material in the exit path)
- The effect is **more pronounced at lower kVp** (lower-energy photons are more easily attenuated)
- The effect is **more pronounced at shorter SID** and **larger field sizes**

### Heel Effect — Intensity Distribution

The intensity variation across the field from anode to cathode side:

| Position | Approximate Intensity (relative to central ray = 100%) |
|---|---|
| 20° toward anode | ~75% |
| 10° toward anode | ~90% |
| Central ray (0°) | 100% (reference) |
| 10° toward cathode | ~110% |
| 20° toward cathode | ~120% |

The intensity difference across a 40 cm field at 100 cm SID with a 12° anode can be **30–40%**.

### Clinical Applications of the Heel Effect

The heel effect, though often regarded as an artefact, can be **deliberately exploited** for clinical advantage:

| Clinical Situation | Optimal Positioning | Rationale |
|---|---|---|
| **AP thoracic spine** | Thick end (shoulders) toward cathode; thin end (waist) toward anode | Cathode side compensates for greater shoulder thickness |
| **Femur AP** | Hip (thick) toward cathode; knee (thin) toward anode | More even density across the divergent femur |
| **Lower leg** | Ankle (thin) toward anode; knee (thicker) toward cathode | Compensates for tapering anatomy |
| **Chest AP (neonate)** | Shoulders toward cathode | Compensates for thoracic/abdominal thickness gradient |

<div className="book-pearl">

The heel effect can be turned from a liability into a diagnostic advantage with deliberate positioning. In AP thoracic spine radiography, the shoulders are significantly thicker than the waist — without compensation, the upper spine is underexposed and the lower spine overexposed. Orienting the spine along the tube axis with the **shoulders toward the cathode** (higher-intensity side) and the **waist toward the anode** (lower-intensity side) automatically compensates for the anatomical thickness gradient — producing more uniform density without additional filtration or split exposure technique.

</div>

### Minimising the Heel Effect

When uniform field coverage is required:
- Use a **longer SID** — the heel effect is less pronounced at greater distances
- Use a **smaller field size** — the intensity variation is less across a smaller field
- Use a **larger anode angle** — reduces the heel effect but increases effective focal spot size
- Use **compensation filters** (wedge filters) — attenuate the cathode-side beam to equalise intensity

---

## Part VI: X-ray Production in the Tube

### Bremsstrahlung Radiation

The majority (~80–90%) of X-ray output from a diagnostic tube is **bremsstrahlung** (German: braking radiation):

**Mechanism:**
1. An electron from the cathode beam enters the tungsten anode
2. The electron passes close to a tungsten nucleus
3. The intense Coulomb field of the nucleus decelerates the electron
4. The lost kinetic energy is emitted as an **X-ray photon** (bremsstrahlung photon)
5. The photon energy equals the energy lost: from near-zero to the full electron kinetic energy (E_max = kVp in keV)
6. Each interaction produces a different energy loss → bremsstrahlung is **polychromatic**

**The bremsstrahlung spectrum:**
- Continuous from ~0 to E_max
- Intensity peaks at approximately **1/3 of E_max** (mean energy ≈ 1/3 kVp in keV)
- Practical mean energy after filtration ≈ **1/3 to 1/2 kVp** (in keV)

### Characteristic Radiation

The remaining ~10–20% of X-ray output at diagnostic kVp levels is **characteristic radiation**:

**Mechanism:**
1. An incident electron collides with and ejects a **K-shell** (or L-shell) electron from a tungsten atom
2. A vacancy is created in the K shell
3. An outer-shell electron (from L, M, or N shell) transitions to fill the K-shell vacancy
4. The energy difference between shells is released as a **characteristic X-ray photon** of precise, discrete energy

**Characteristic radiation is only produced when:** The tube voltage exceeds the **K-shell binding energy** of the target material. For tungsten: K-edge = **69.5 keV** → characteristic radiation only produced above **~70 kVp**.

**Tungsten K-shell characteristic X-ray energies:**

| Electron Transition | Designation | Photon Energy |
|---|---|---|
| L-shell → K-shell | Kα | ~58 keV |
| M-shell → K-shell | Kβ | ~67 keV |
| N-shell → K-shell | Kγ | ~69 keV |

**L-shell characteristic X-rays** (~8–12 keV): too low energy to penetrate the tube housing — filtered out by inherent filtration; contribute only to patient skin dose if the filtration is inadequate.

### The Complete X-ray Emission Spectrum

The spectrum reaching the patient is the bremsstrahlung continuum with superimposed characteristic peaks, after modification by filtration:

**Effect of increasing kVp on the spectrum:**
- E_max increases → spectrum extends to higher energies
- Characteristic lines unchanged in position (fixed by tungsten shell energies) but increase in intensity
- Overall photon output increases substantially (∝ kVp²)

**Effect of increasing mA on the spectrum:**
- All intensities increase proportionally
- Shape of spectrum unchanged
- E_max unchanged

**Effect of added filtration:**
- Low-energy photons selectively removed
- Mean beam energy increases (beam "hardening")
- Total photon count decreases, but remaining photons are more penetrating

---

## Part VII: Heat Production and Management

### The Heat Problem

The fundamental thermal challenge of the X-ray tube arises from its extreme inefficiency as an X-ray source:

**X-ray conversion efficiency ≈ (Z × kVp) / 500,000 × 100%**

For tungsten (Z = 74) at 100 kVp: efficiency ≈ (74 × 100) / 500,000 = **~1.5%**

Therefore, approximately **98.5% of input power is converted to heat**. At a tube power of 100 kW (e.g., 100 kVp, 1,000 mA), approximately **98.5 kW is deposited as heat in the anode** — equivalent to nearly 100 single-bar electric heaters concentrated on a disc weighing ~1 kg.

### Heat Units (HU)

Heat loading was historically expressed in **Heat Units (HU)**:

**HU = kVp × mA × time(s) × waveform factor**

Waveform factors:
- Single-phase (full-wave): 1.0
- Three-phase (6-pulse): 1.35
- Three-phase (12-pulse): 1.41
- High-frequency (constant potential): 1.40–1.41

**Modern standard: Joules (J)**

1 HU (three-phase/high-frequency) ≈ **0.7 J** (exactly: 1 J = 1 W·s = 1 V·A·s; 1 HU_hf ≈ 0.7 J)

At 100 kVp, 200 mA, 0.1s:
- HU = 100 × 200 × 0.1 × 1.4 = **2,800 HU**
- Energy = 100 kV × 200 mA × 0.1 s = **2,000 J = 2 kJ**

### Anode Heat Capacity and Cooling

**Anode heat capacity (HU or J):** The maximum energy the anode can store without exceeding its temperature limits. Determined by:
- **Mass** of anode disc
- **Specific heat capacity** of anode material
- **Maximum allowable temperature** (below melting point of tungsten: 3,422°C; practical limit ~2,500°C to preserve anode surface and avoid excessive rhenium migration)

**Modern anode capacities:**

| Tube Type | Anode Heat Capacity | Application |
|---|---|---|
| General radiography | 200,000–500,000 HU | Routine work |
| High-performance radiography | 500,000–1,000,000 HU | Fluoroscopy, DSA |
| CT (single-slice) | 1,000,000–2,000,000 HU | CT scanning |
| CT (multi-slice, modern) | 5,000,000–8,000,000 HU | High-speed CT |
| Carbon composite CT | Up to 30,000,000 HU | Cardiac CT, perfusion |

**Anode cooling mechanisms:**

1. **Radiation (primary mechanism)**: Hot anode disc emits infrared radiation → absorbed by tube housing walls → conducted to oil bath. Rate: Stefan-Boltzmann law (∝ T⁴). At 1,000°C the cooling rate is significant; at 2,500°C it is very rapid.

2. **Oil bath convection**: Surrounding dielectric oil (within the housing) absorbs heat radiated from the anode and housing, circulating it to the external radiator.

3. **External radiator (fan cooler)**: Circulating oil is pumped through an external radiator with forced air cooling — standard on CT and high-volume fluoroscopy tubes.

4. **Direct liquid cooling**: Some modern CT tubes circulate liquid coolant directly behind the anode focal track — dramatically improving continuous power capacity.

### Tube Rating Charts

Before making any non-standard or high-load exposure, three rating charts must be considered:

#### 1. Single Exposure Rating Chart

Defines the **maximum combination of kVp, mA, and time** that can be delivered in a single exposure without damaging the anode.

- Plotted as a family of curves: each curve represents a specific kVp; x-axis = exposure time; y-axis = maximum mA
- Any point **below** the curve = safe; any point **above** the curve = exceeds tube rating
- At short exposure times, higher mA is possible; at longer times, mA must be reduced
- **Practical use**: Verify that the selected technique (kVp/mA/s combination) lies within the safe zone before making the exposure

#### 2. Anode Cooling Chart

Defines how long the anode takes to cool from a given heat load to a lower heat load:

- Used when making **sequential exposures** (e.g., fluoroscopy series, multiple projections)
- If the anode has not cooled sufficiently between exposures, the cumulative heat may exceed anode capacity
- Modern generators track cumulative anode heat load automatically and display a "thermal loading" indicator

#### 3. Housing Cooling Chart

Defines the heat capacity of the **tube housing** (the outer assembly containing the oil bath):

- Relevant only for high-volume work (fluoroscopy, multi-patient CT)
- The housing cools much more slowly than the anode — heat accumulates in the oil bath over many procedures
- The housing must not be allowed to overheat — overheated oil expands, can activate the thermal expansion switch, and may damage surrounding equipment

<div className="book-remember">

**Tube protection summary — three levels:**

1. **Single exposure limit**: Do not exceed the kVp/mA/time combination on the single exposure chart
2. **Anode thermal limit**: Allow adequate cooling time between exposures; monitor thermal loading indicator
3. **Housing thermal limit**: In high-volume departments, track housing temperature across the session

Modern generators enforce these limits automatically with interlocks. However, understanding the limits helps the radiographer make intelligent protocol adjustments when operating near tube capacity — for example, increasing kVp and reducing mAs to achieve the same diagnostic image with less anode heat loading.

</div>

---

## Part VIII: The Tube Housing

The X-ray tube insert (vacuum envelope + anode + cathode) is mounted within a **protective housing** that provides:

### Functions of the Housing

1. **Radiation shielding**: Lead lining absorbs leakage radiation from all directions except the beam exit port. Regulatory requirement: leakage radiation at 1 metre must not exceed **1 mGy/hour** at maximum continuous operating conditions (IEC 60601-1-3).

2. **High-voltage insulation**: The housing is filled with **dielectric oil** (transformer oil) that insulates the cathode (−kVp/2) and anode (+kVp/2) cables at kilovoltage potentials.

3. **Cooling**: Oil bath surrounds the tube insert, absorbing radiated heat from the anode and conducting it to the housing walls and external radiator.

4. **Mechanical protection**: Protects the fragile glass/metal tube insert from vibration, impact, and handling damage.

5. **Earthing (grounding)**: The housing outer casing is earthed — ensures any electrical fault routes to earth rather than to the patient or operator.

### Housing Construction

| Component | Material | Function |
|---|---|---|
| Outer casing | Steel or aluminium | Structural strength; earthing |
| Lead lining | 1–3 mm lead | Leakage radiation absorption |
| Dielectric oil | Mineral oil (transformer oil) | Electrical insulation; heat conduction |
| Expansion bellows | Rubber or metal | Accommodates oil expansion with heating |
| Thermal expansion switch | Thermostat | Cuts off exposure if oil overheats |
| Beam exit port | No lead; beam-limiting device attaches here | Allows useful beam to exit |
| High-voltage cable connectors | Ceramic/rubber insulated plugs | Connect generator cables at ±kVp/2 |

### Leakage Radiation

Any X-ray photons exiting the housing outside the intended beam constitute **leakage radiation**:
- The IEC limit is **1 mGy/hour at 1 metre** at the tube's maximum continuous rated loading
- Leakage is absorbed by the lead housing lining
- Leakage radiation is the primary reason lead aprons remain important for fluoroscopists standing adjacent to the tube

---

## Part IX: Special Tube Designs

### Mammography Tubes

Mammography requires unique tube characteristics because breast tissue has very low inherent contrast and high radiation sensitivity:

| Feature | Mammography Tube | Rationale |
|---|---|---|
| Target material | Molybdenum (Mo, Z=42) or Rhodium (Rh, Z=45) | K-edge characteristic X-rays at 17–23 keV — ideal for breast tissue |
| Anode angle | 10°–16° | Small effective focal spot for fine microcalcification detail |
| kVp range | 25–35 kVp | Low energy → high photoelectric contrast in soft tissue |
| Beryllium window | 0.5–1 mm Be | Very low inherent filtration — preserves low-energy spectrum |
| Added filters | Mo (0.03 mm), Rh (0.025 mm), Ag (0.05 mm) | K-edge filtering — selects narrow energy band |
| Focal spot sizes | 0.1 mm (magnification), 0.3 mm (contact) | Microcalcification detection requires 0.1 mm |

**Molybdenum characteristic X-rays:**
- Kα: 17.4 keV
- Kβ: 19.6 keV
These energies are ideally matched to breast tissue thickness and composition — providing high contrast with minimised dose.

### CT Tubes

CT scanner tubes are the most demanding X-ray tubes in clinical use:

| Parameter | CT Tube | General Radiography Tube |
|---|---|---|
| Continuous power | 20–100 kW | 20–50 kW (intermittent) |
| Rotation speed (gantry) | 0.25–1.0 s/rotation | N/A |
| Anode heat capacity | 2–30 MHU | 0.3–1 MHU |
| Focal spot | 0.5–1.0 mm | 0.3–1.2 mm |
| kVp range | 70–150 kVp | 40–150 kVp |
| Duty cycle | Near-continuous | Short bursts |
| Tube life | 50,000–200,000 rotations | Many years of intermittent use |

**CT tube innovations:**
- **Carbon composite anodes**: Pyrolytic graphite disc with tungsten focal track — graphite has 3× the specific heat of tungsten and much higher radiation emissivity → dramatically improved heat capacity
- **Liquid bearing anodes (Straton tube, Siemens)**: The entire rotating anode assembly floats on a liquid metal (gallium–indium alloy) bearing → the bearing itself becomes a heat conductor, transferring anode heat directly to the oil coolant → enables near-unlimited continuous operation
- **Direct liquid cooling**: Coolant channels behind the anode focal track → removes heat at the point of generation

### Tomosynthesis Tubes

Digital breast tomosynthesis (DBT) and chest tomosynthesis require rapid, precise tube motion:
- Tube sweeps through an arc of 15°–50° during acquisition (0.5–4 seconds)
- Multiple low-dose exposures (10–25 projections) acquired during the sweep
- Requires very precise kVp and mAs control at each position
- Tube focal spot stability during motion is critical for reconstruction quality

---

## Part X: Off-Focus Radiation

### Definition and Origin

**Off-focus radiation** (also called extra-focal radiation or stem radiation) arises from electrons that are not precisely focused on the anode focal spot:

- Some electrons in the beam miss the focal track entirely, striking other parts of the anode disc or tube envelope
- These electrons produce X-rays at locations **outside** the focal spot
- These off-focus photons exit the housing through the beam port — but from different geometric origins

### Effects on Image Quality

Off-focus radiation has two important consequences:

1. **Increased patient dose**: Off-focus photons add to patient exposure without contributing useful image information

2. **Reduced image contrast**: Off-focus photons produce a low-level, diffuse exposure of the image receptor that reduces contrast — equivalent to a form of scatter

3. **Effective increase in focal spot size**: The effective source is no longer just the focal spot — it includes the distributed off-focus origins → penumbra is larger than predicted from focal spot size alone

### Minimising Off-Focus Radiation

- **Accurate electron beam focusing** (by appropriate focusing cup charge)
- **Collimation near the X-ray tube exit** (a small metallic aperture immediately below the tube window — "pre-patient collimation" — stops off-focus photons before they reach the patient; some manufacturers incorporate this as a fixed aperture diaphragm)
- **High-voltage stability** (from high-frequency generators) maintains consistent electron beam focus

---

## Part XI: Tube Failure Modes

Understanding the causes of X-ray tube failure allows the radiographer and engineer to take preventive action and recognise early warning signs:

### Failure Mode 1: Filament Burnout

**Mechanism:** The filament wire evaporates gradually during normal use (tungsten sublimation). The wire becomes progressively thinner until it breaks — like a light bulb filament.

**Accelerating factors:**
- Excessive filament current (overheating)
- Frequent switching between large and small focal spots at high mA
- Insufficient warm-up time from cold start
- Rapid mA changes in pulsed fluoroscopy

**Warning signs:** Gradual increase in exposure required to maintain image density (filament resistance rising as wire thins); intermittent output; occasional arcing

**Prevention:** Follow manufacturer warm-up protocols; avoid excessive prolonged high-mA exposures; use AEC rather than manual overexposure

### Failure Mode 2: Tungsten Deposition on Envelope

**Mechanism:** Evaporated tungsten from the filament and anode surface deposits as a dark metallic film on the inner wall of the glass envelope.

**Consequences:**
- Reduces X-ray transmission through glass window
- Increases electrical conductance of glass wall → arcing between anode and glass → catastrophic tube failure
- Visible as progressive darkening of the glass envelope (detectable at inspection)

**Accelerating factors:** Excessive mA; high-temperature operation; frequent thermal cycling

**Prevention:** Metal–ceramic envelopes are not susceptible; in glass tubes, follow rated mA limits

### Failure Mode 3: Anode Cracking and Pitting

**Mechanism:** Thermal fatigue from repeated heating/cooling cycles causes surface cracking (thermal checking). Pitting occurs when surface material is lost due to high-energy electron impact causing micro-melting.

**Consequences:**
- Surface irregularities scatter the electron beam → loss of focal spot precision → reduced spatial resolution
- Increased roughness increases X-ray attenuation within the anode → reduced output

**Accelerating factors:** Large single exposures approaching rated limit; inadequate pre-warming; using high mA at low kVp (maximum anode temperature per photon produced)

**Prevention:** Follow warm-up procedure; use high-frequency generators (reduces peak thermal stress); do not exceed single-exposure rating

### Failure Mode 4: Bearing Failure

**Mechanism:** The ball bearings supporting the rotating anode shaft operate at high temperatures, under vacuum, without conventional liquid lubrication (liquid lubricants vaporise and destroy the vacuum). They are lubricated with solid-film lubricants (silver, lead, or gallium) that gradually wear out.

**Warning signs:** **Audible change in anode rotation sound** — a smooth, quiet hum becomes a grinding, rattling, or irregular noise. This is one of the most important warning signs a radiographer can detect.

**Consequences of bearing failure:** Anode rotation slows or stops → all heat concentrated on a small arc → catastrophic thermal overload → anode melting or cracking → end of tube life

**Prevention:** Listen to the tube at startup; report unusual anode rotation sounds immediately; allow the tube to slow to rest (momentum braking) before the next exposure — do not re-energise the stator immediately after a high-power exposure

### Failure Mode 5: Arcing and Electrical Breakdown

**Mechanism:** High-voltage electrical discharge (arc) between the anode and cathode or between electrode and envelope, caused by vacuum degradation, contamination, or surface charge buildup.

**Causes:** Tungsten deposition on glass (reducing insulation); gas release from inadequately degassed components; excessive kVp beyond tube rating

**Consequences:** Sudden electrical discharge → loud cracking sound → single X-ray pulse of very high intensity → potential detector damage; if severe, permanent tube damage

**Prevention:** Condition the tube after extended non-use (gradually increasing kVp to drive off surface charges); use within rated kVp

### Summary of Tube Failure Prevention

| Failure Mode | Key Prevention Measures |
|---|---|
| Filament burnout | Warm-up protocol; rated mA compliance; avoid prolonged high mA |
| Tungsten deposition | Rated mA compliance; metal–ceramic envelope preferred |
| Anode cracking/pitting | Warm-up protocol; rated exposure compliance; HF generator |
| Bearing failure | Listen for abnormal sounds; report early; replace proactively |
| Arcing | Tube conditioning; rated kVp compliance; adequate vacuum maintenance |

---

<div className="book-summary">

- The **Coolidge hot-cathode vacuum tube** (1913) established the design paradigm still used today: independent control of tube current (by filament temperature via thermionic emission) and tube voltage (by kVp), within a vacuum envelope at ~10⁻⁶ mmHg.
- The **cathode assembly** consists of a tungsten filament (thermionic electron source) and a molybdenum focusing cup (electrostatic beam shaping). Dual filaments provide fine (0.3–0.6 mm) and broad (0.6–1.2 mm) focal spots; filament current controls mA through the space charge effect.
- The **rotating anode** (W–Re alloy disc on a molybdenum stem, driven by induction motor at 3,000–10,000 rpm) distributes heat over the focal track circumference, enabling 10–100× higher power than stationary anodes.
- The **line focus principle** (anode angled at θ = 7°–20°) produces an effective focal spot = actual focal spot × sin(θ), achieving simultaneously a large actual area (for heat distribution) and a small projected area (for spatial resolution).
- The **anode heel effect** produces lower intensity on the anode side and higher intensity on the cathode side of the beam. It can be clinically exploited by positioning thicker anatomy toward the cathode in AP thoracic spine, femur, and neonate chest radiography.
- X-ray output is ~**1.5% efficient** — ~98.5% of input power becomes heat in the anode. Heat is managed through anode mass and rotation, radiation cooling, oil bath convection, and external radiators. Three rating charts (single exposure, anode cooling, housing cooling) define safe operating limits.
- **Bremsstrahlung** (80–90% of output) produces a continuous polyenergetic spectrum from ~0 to kVp (in keV). **Characteristic radiation** (~10–20%) produces discrete energies specific to the target material — important for mammography (Mo/Rh targets at 17–23 keV).
- **Tube failure modes** — filament burnout, tungsten deposition, anode cracking, bearing failure, and arcing — all have recognisable warning signs and are substantially preventable by correct warm-up protocols, rated exposure compliance, and prompt reporting of abnormal sounds or output.
- **Mammography tubes** use molybdenum or rhodium targets with beryllium windows and K-edge filtration to produce a narrow, low-energy spectrum (17–23 keV) optimised for soft tissue contrast at minimal dose. **CT tubes** use carbon composite or liquid-bearing anodes with heat capacities up to 30 million HU for near-continuous high-power operation.

</div>
