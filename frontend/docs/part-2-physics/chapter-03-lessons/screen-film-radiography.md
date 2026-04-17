---
id: screen-film-radiography
title: "Screen-Film Radiography"
sidebar_label: "Screen-Film Radiography"
---

# Screen-Film Radiography

<div className="book-objectives">

**Learning Objectives**

By the end of this chapter, the student should be able to:

1. Describe the construction and function of intensifying screens, including phosphor chemistry and conversion efficiency
2. Explain the structure of radiographic film and the photochemical basis of the latent image
3. Interpret the characteristic (H&D) curve and derive its key parameters: speed, gamma, average gradient, and latitude
4. Outline the four stages of automatic film processing and identify the chemical functions at each stage
5. Explain the physical basis of screen-film unsharpness and the speed–detail trade-off
6. Describe cassette construction and the consequences of poor screen-film contact
7. Identify artefacts unique to screen-film systems and their causes
8. Compare screen-film with digital systems in terms of dynamic range, resolution, dose, and workflow
9. Explain why screen-film knowledge remains clinically and academically relevant in the digital era

</div>

---

## 1. Historical Context and Significance

Screen-film radiography dominated diagnostic imaging from the discovery of X-rays in 1895 until the widespread adoption of computed radiography (CR) in the 1990s and digital radiography (DR) in the 2000s. For nearly a century, every radiograph produced worldwide was a screen-film image.

<div className="book-definition">

**Screen-Film System**: A radiographic image receptor consisting of a pair of phosphor-coated intensifying screens and a double-emulsion radiographic film, housed in a light-tight cassette. X-ray photons are first converted to light by the screens; the light then exposes the film emulsion.

</div>

Understanding screen-film technology is essential because:

- **Historical baseline**: All current image quality standards (resolution, contrast, noise) were defined using screen-film benchmarks
- **Conceptual foundation**: The characteristic curve, speed, contrast, latitude, and noise concepts apply directly to digital receptors
- **Ongoing clinical presence**: Screen-film mammography, dental periapical films, and legacy systems remain in use in low-resource settings globally
- **Examination relevance**: Screen-film physics features prominently in radiography licensing examinations worldwide

---

## 2. The Intensifying Screen

### 2.1 Purpose and Principle

Without intensifying screens, the X-ray dose required to produce a diagnostic image on photographic film would be approximately 50–100 times greater. The screens amplify the effect of each absorbed X-ray photon by converting it into many light photons, which then expose the adjacent film emulsion.

<div className="book-keypoint">

Approximately 95–99% of the optical density on a screen-film radiograph is produced by screen light, not by direct X-ray exposure of the film. Only 1–5% of film exposure results from X-rays that pass through the screen and strike the film directly.

</div>

### 2.2 Screen Construction

An intensifying screen is a multi-layered structure:

| Layer | Composition | Function |
|---|---|---|
| **Protective coat** | Clear plastic, 10–20 µm | Prevents physical damage, allows cleaning |
| **Phosphor layer** | Phosphor crystals in polymer binder, 100–300 µm | X-ray → light conversion |
| **Reflective layer** | TiO₂ (titanium dioxide) or BaSO₄ | Reflects light toward film, increases efficiency |
| **Base** | Polyester, 250–300 µm | Structural support, dimensional stability |
| **Anti-halation backing** (some designs) | Light-absorbing layer | Prevents light reflection back through film |

### 2.3 Phosphor Chemistry: Classical vs. Rare Earth

**Calcium Tungstate (CaWO₄) — Classical Phosphor**

Calcium tungstate was the standard screen phosphor from about 1896 to the 1970s. It emits **blue-violet light** (peak emission ~430 nm) when excited by X-rays. While reliable and durable, its X-ray-to-light conversion efficiency is only approximately 3–5%.

**Rare Earth Phosphors — Modern Standard**

Introduced in the 1970s, rare earth phosphors offer substantially higher conversion efficiency (15–20%) and are now universal in screen-film systems:

| Phosphor | Chemical Formula | Emission Colour | Peak Wavelength | Activator |
|---|---|---|---|---|
| Gadolinium oxysulphide | Gd₂O₂S:Tb | Green | 540 nm | Terbium (Tb³⁺) |
| Lanthanum oxybromide | LaOBr:Tm | Blue-violet | 360 nm | Thulium (Tm³⁺) |
| Lanthanum oxysulphide | La₂O₂S:Tb | Green | 540 nm | Terbium (Tb³⁺) |
| Yttrium tantalate | YTaO₄:Nb | Near-UV/blue | 410 nm | Niobium (Nb⁵⁺) |

The higher efficiency of rare earth phosphors arises because:
1. **K-edge absorption**: Gd has a K-edge at 50.2 keV and La at 38.9 keV — optimal for the 50–80 keV diagnostic range
2. **Luminescent efficiency**: The rare earth crystal structure couples X-ray energy to the activator ion more efficiently than CaWO₄

<div className="book-important">

**Film-Screen Spectral Matching**: The film emulsion must be spectrally matched to the screen's emission. Using a blue-sensitive film with a green-emitting rare earth screen results in massive underexposure. Conversely, using an orthochromatic (green-sensitive) film with a blue-emitting screen is equally wasteful. Mismatching is a common and easily preventable source of exposure error.

</div>

### 2.4 The Luminescence Process

When an X-ray photon is absorbed by a phosphor crystal, the following sequence occurs:

1. **Photoelectric absorption**: An inner-shell electron is ejected, creating an electron-hole pair (or exciton)
2. **Energy migration**: The exciton migrates through the crystal lattice to an activator centre (e.g., Tb³⁺)
3. **Luminescent emission**: The activator de-excites by emitting a visible light photon
4. **Light propagation**: Multiple light photons spread in all directions; the reflective layer redirects backward-going photons toward the film

A single 80 keV X-ray photon absorbed in a rare earth screen generates approximately **1,000–3,000 visible light photons**. Since each light photon requires only ~2–3 eV to expose a silver halide grain, this represents a large amplification.

### 2.5 Screen Speed: Definition and Determinants

<div className="book-definition">

**Screen Speed**: A relative measure of the exposure required to produce a given film density. Higher speed = less exposure needed. Speed is inversely proportional to the radiation dose required. A "400 speed" system requires half the exposure of a "200 speed" system to produce the same density.

</div>

Screen speed is determined by five main factors:

| Factor | Higher Speed | Lower Speed |
|---|---|---|
| **Phosphor type** | Rare earth (Gd₂O₂S) | Calcium tungstate |
| **Crystal size** | Large (8–12 µm) | Small (3–5 µm) |
| **Phosphor layer thickness** | Thick (&gt;200 µm) | Thin (&lt;100 µm) |
| **Reflective layer** | Present | Absent |
| **Phosphor concentration** | Dense packing | Sparse packing |

**Standard Speed Classes**:

| Speed Class | Relative Speed | Typical Use |
|---|---|---|
| Detail (slow) | 50–100 | Extremities, paediatric, small parts |
| Standard (medium) | 200–400 | General radiography (most common) |
| Fast | 400–800 | Chest, abdomen, trauma |
| Ultra-fast | 800–1200 | High-dose-reduction applications |

### 2.6 The Speed–Detail Trade-Off

Increasing screen speed inevitably degrades spatial resolution. The mechanisms are:

1. **Crystal size effect**: Larger crystals absorb X-rays over a wider area, causing each absorbed photon to produce light over a larger region
2. **Phosphor layer thickness effect**: Light from deep within a thick layer spreads laterally before reaching the film surface, producing a larger blur spot
3. **Quantum mottle increase**: Faster screens use fewer X-ray photons (by definition), so statistical fluctuations in photon number (quantum noise) become more visible

<div className="book-pearl">

**The Fundamental Trade-Off Triangle**: Every screen-film system represents a compromise between three properties — speed (dose), resolution (detail), and noise (quantum mottle). Improving any one of these properties necessarily worsens at least one of the others. This is why there is no single "best" screen speed; the optimal choice depends on the clinical application. A hand radiograph demands high resolution (slow screen); a chest X-ray demands low dose (fast screen).

</div>

---

## 3. Radiographic Film

### 3.1 Film Structure

Radiographic film is a multi-layered product engineered for consistent photographic response:

```
┌─────────────────────────────────────┐
│  Supercoat (protective gelatin)     │  ~1 µm
├─────────────────────────────────────┤
│  Emulsion (AgBr in gelatin)         │  ~10–15 µm
├─────────────────────────────────────┤
│  Subbing layer (adhesive)           │  ~1 µm
├─────────────────────────────────────┤
│  POLYESTER BASE (blue-tinted)       │  ~175–200 µm
├─────────────────────────────────────┤
│  Subbing layer (adhesive)           │  ~1 µm
├─────────────────────────────────────┤
│  Emulsion (AgBr in gelatin)         │  ~10–15 µm
├─────────────────────────────────────┤
│  Supercoat (protective gelatin)     │  ~1 µm
└─────────────────────────────────────┘
```

**Why double emulsion?** Having emulsion on both sides doubles the number of silver halide crystals available to interact with light. This effectively doubles the film's sensitivity without requiring a thicker single emulsion layer (which would degrade resolution). Each emulsion is in contact with one screen in the cassette.

**The Polyester Base**: The base is tinted slightly blue to reduce the "hot-light" appearance when viewed on an illuminator. It must be:
- Dimensionally stable (does not shrink or swell with humidity)
- Chemically inert to processing solutions
- Optically clear (transmitting) except for the blue tint
- Mechanically strong (does not crack or tear in processing)

### 3.2 Silver Halide Emulsion

**Crystal Composition**: Radiographic film uses predominantly **silver bromide (AgBr)** with a small amount of silver iodide (AgI, typically 1–5 mol%). The iodide ions incorporate into the crystal lattice, creating lattice defects that act as **sensitivity specks** — sites where the latent image preferentially forms.

**Crystal Morphology**:
- Traditional: cubic crystals, 0.5–1.5 µm in diameter
- Modern: tabular (T-grain) crystals — flat hexagonal platelets with high surface-area-to-volume ratio
- T-grain advantages: higher light capture efficiency, improved spectral sensitisation, reduced crossover of light between emulsion layers

**Spectral Sensitivity**:
- Plain (native) AgBr: sensitive only to blue-violet and UV light (&lt;500 nm)
- **Orthochromatic sensitisation**: Adding spectral sensitising dyes extends sensitivity to green light (500–600 nm) — required for green-emitting rare earth screens
- **Panchromatic sensitisation**: Extends sensitivity to red light — used in some specialised films (e.g., fluorography, laser printer films)

<div className="book-important">

**Safelight Requirements**: Green-sensitive (orthochromatic) film is NOT safe under the traditional red amber safelight used for blue-sensitive films. Green-sensitive film requires a specific safelight filter (e.g., Kodak GBX-2 — dark red/amber) that blocks both blue and green wavelengths. Using the wrong safelight is a significant cause of film fogging in darkrooms.

</div>

### 3.3 The Latent Image: Formation and Structure

When light photons from the intensifying screen strike the film emulsion, a **latent image** is formed — an invisible photochemical change that records the pattern of exposure. The process follows the **Gurney-Mott theory** (1938):

**Step 1 — Photoionisation**: A light photon is absorbed by a Br⁻ ion within the AgBr crystal, liberating an electron:
- Br⁻ + hf → Br⁰ + e⁻

**Step 2 — Electron trapping**: The free electron migrates through the crystal lattice and is trapped at a sensitivity speck (a silver sulphide aggregate or crystal imperfection).

**Step 3 — Silver ion migration**: The trapped electron attracts a mobile Ag⁺ ion from the lattice, which is neutralised to form a single silver atom (Ag⁰).

**Step 4 — Amplification by repetition**: Steps 1–3 repeat many times. A cluster of **3–10 silver atoms** at a sensitivity speck constitutes the latent image centre.

**Step 5 — Development amplification**: During chemical development, this tiny silver cluster catalyses the reduction of the entire AgBr grain to metallic silver, amplifying the original signal by a factor of approximately **10⁸**.

<div className="book-keypoint">

The latent image exists as clusters of only 3–10 silver atoms at sensitivity specks within exposed crystals. Chemical development amplifies this invisible record by approximately 100 million times, making the image visible.

</div>

---

## 4. The Characteristic Curve (Hurter and Driffield Curve)

### 4.1 Definition and Measurement

The characteristic curve (H&D curve, named after Ferdinand Hurter and Vero Charles Driffield, 1890) describes the relationship between the **exposure** received by a film and the resulting **optical density** after processing.

<div className="book-definition">

**Optical Density (OD)**: OD = log₁₀(I₀/I_t), where I₀ is the intensity of light incident on the film and I_t is the intensity of light transmitted through the film. OD is a logarithmic measure: OD 0 = 100% transmission (clear), OD 1 = 10% transmission, OD 2 = 1% transmission, OD 3 = 0.1% transmission.

</div>

The curve is plotted as:
- **X-axis**: Log₁₀ of relative exposure (log E)
- **Y-axis**: Optical density (OD)

### 4.2 Regions of the Characteristic Curve

```
    OD
 3.5│                                        ╭────── Dmax (Shoulder)
    │                                   ╭────╯
 3.0│                              ╭────╯  ← D-max region
    │                         ╭────╯
 2.5│                    ╭────╯
    │               ╭────╯  ← Straight-line portion (optimal)
 2.0│          ╭────╯        (maximum contrast region)
    │     ╭────╯
 1.5│╭────╯
    │╯ ← Toe (underexposure)
 0.5│
    │←── Base + Fog (≈0.15–0.25 OD)
 0.2│────────────────────────────────────────────── log E
```

**Toe Region**:
- Underexposed portion of the curve
- Slope is low → low contrast
- Film density barely changes with increasing exposure
- Anatomical detail is lost in grey tones

**Straight-Line Portion** (Linear Region):
- Optimal exposure range for diagnostic imaging
- Maximum and most uniform contrast
- OD increases linearly with log exposure
- The slope (gamma) is steepest and most constant here

**Shoulder Region**:
- Overexposed portion
- Density approaches D-max and plateaus
- Slope decreases → contrast falls
- Film "blocks up" — dark structures merge

**D-max (Maximum Density)**:
- Maximum optical density the film can achieve (~3.5–4.0 OD for radiographic film)
- Occurs when virtually all AgBr grains have been reduced to silver

### 4.3 Key Parameters Derived from the H&D Curve

**1. Base + Fog (B+F) Density**
- OD of an unexposed, processed film
- Consists of: base tint (≈0.07 OD) + chemical fog (≈0.05–0.10 OD)
- Acceptable range: 0.15–0.25 OD
- Values >0.25 indicate fogging (safelight, temperature, chemical contamination)

**2. Speed (Film Speed)**
- Defined as the reciprocal of the exposure (in mR or mGy) required to produce OD = 1.0 above base+fog
- Speed = 1/E, where E is exposure at (B+F + 1.0) OD
- Higher speed films require less exposure
- Speed is inversely related to the dose required

**3. Gamma (γ)**
- The slope of the straight-line portion of the H&D curve
- Gamma = ΔOD / Δlog E = (OD₂ − OD₁) / (log E₂ − log E₁)
- Represents the **maximum contrast** the film can produce
- Typical values: 2.5–3.5 for medical radiographic film (very steep compared to photographic film)

**4. Average Gradient (Ḡ)**
- Slope measured between specific OD points (e.g., OD = 0.25 + B+F and OD = 2.0 + B+F)
- More clinically relevant than gamma, as it reflects contrast across the entire diagnostic density range
- Typical values: 2.5–3.0

**5. Latitude**
- The range of exposures (in log E units) that produce diagnostically useful densities (typically OD 0.5 to 2.5)
- **Inverse relationship with contrast**: High gamma films have narrow latitude; low gamma films have wide latitude
- Narrow latitude systems punish exposure errors; wide latitude systems are more forgiving

| Film Parameter | Typical Value | Clinical Significance |
|---|---|---|
| Base + fog density | 0.15–0.25 OD | >0.25 indicates fogging problem |
| Speed point OD | B+F + 1.0 | Used to compare film speeds |
| Gamma (γ) | 2.5–3.5 | Film contrast capability |
| Average gradient (Ḡ) | 2.5–3.0 | Practical contrast over useful range |
| Latitude (log E range) | 0.8–1.5 decades | Exposure latitude / tolerance |
| D-max | 3.5–4.0 OD | Maximum achievable density |
| Minimum density | 0.15–0.25 OD | Base + fog level |

### 4.4 Sensitometry: Measuring the H&D Curve

**Sensitometry** is the science of measuring and characterising the photographic response of film. The process:

1. **Sensitometer**: A calibrated light source that exposes a series of known exposures (typically 21 steps in ½ stop increments) onto a strip of film
2. **Processing**: The film is processed under strictly controlled conditions
3. **Densitometry**: Each step is measured with a densitometer (instrument that measures OD)
4. **Curve plotting**: OD values are plotted against log E to construct the H&D curve

**Quality Control Use**: Daily sensitometry strips are a standard QC tool for monitoring processor performance. Acceptable variations:
- Speed point: ±0.15 OD
- Contrast (Ḡ): ±0.10 OD change
- B+F: ±0.03 OD

---

## 5. Film Processing

### 5.1 Overview of Automatic Processing

Automatic film processors replaced manual tank processing in the 1960s and became universal by the 1970s. Processing time was reduced from 45–60 minutes (manual) to 90 seconds (extended cycle) or 45 seconds (rapid cycle).

The processor transports the film through four stages:

```
[Feed tray] → [Developer] → [Fixer] → [Wash] → [Dryer] → [Output]
                35°C         28°C      25°C      50°C
               20–25 sec    20–25 sec  20–25 sec  25–30 sec
```

### 5.2 The Developer

**Function**: Converts exposed (latent image) silver halide crystals to metallic silver (black silver). Unexposed crystals must not be reduced.

**Chemistry**: The developer provides electrons to reduce Ag⁺ ions:
- Ag⁺ + e⁻ → Ag⁰ (black metallic silver)

**Developer Components**:

| Component | Example Chemicals | Function |
|---|---|---|
| **Developing agents** | Hydroquinone + Phenidone (PHQ-P system) | Donate electrons to reduce Ag⁺; PHQ provides rapid initiation, hydroquinone provides sustained density |
| **Accelerator (alkali)** | Sodium/potassium carbonate or hydroxide | Raises pH to 9.8–11.5 (developer is active only at alkaline pH) |
| **Restrainer** | Potassium bromide (KBr) | Prevents excessive development of unexposed crystals (reduces chemical fog) |
| **Preservative** | Sodium sulphite (Na₂SO₃) | Prevents oxidation of developing agents by dissolved oxygen |
| **Hardener** | Glutaraldehyde | Cross-links gelatin to prevent swelling and mechanical damage during transport |
| **Water** | Distilled/deionised | Solvent medium |

**Superadditivity (Synergism)**: The Phenidone-hydroquinone combination is synergistic — together they produce more contrast and speed than either developer alone. This is because Phenidone rapidly develops the latent image (providing a head start), and hydroquinone regenerates oxidised Phenidone while also building shadow densities.

**Replenishment**: As developer is consumed (and diluted by carry-over of water from previous films), fresh developer must be added to maintain activity. Automatic replenisher pumps add a fixed volume per unit area of film processed.

<div className="book-important">

**Developer Temperature Control**: Developer temperature is the most critical processing variable. The standard temperature is **35°C ± 0.3°C**. For every 1°C rise above optimal:
- Film speed increases by approximately 5–10%
- Chemical fog increases
- Image contrast changes
- This manifests on QC sensitometry strips as speed point shift

Temperature must be maintained by thermostatically controlled water jackets and recirculation systems.

</div>

### 5.3 The Fixer

**Function**: 
1. **Clearing**: Dissolves and removes all unexposed, undeveloped silver halide (which would continue to darken on exposure to light)
2. **Hardening**: Further hardens the gelatin (with alum hardener)
3. **Neutralisation**: Stops any residual development by lowering pH

**Fixer Components**:

| Component | Example Chemicals | Function |
|---|---|---|
| **Fixing agents (thiosulphates)** | Ammonium thiosulphate (rapid) or sodium thiosulphate | Dissolve AgBr: AgBr + 2S₂O₃²⁻ → [Ag(S₂O₃)₂]³⁻ + Br⁻ |
| **Acidifier** | Acetic acid | Lowers pH to 4–5 (stops developer, activates alum hardener) |
| **Hardener** | Potassium aluminium sulphate (alum) | Cross-links and hardens gelatin |
| **Preservative** | Sodium sulphite | Prevents oxidation of thiosulphate |
| **Buffer** | Borate salts | Maintains stable acid pH |

**Clearing Time**: The time for the fixer to clear the milky appearance from unexposed emulsion. The total fixing time should be at least twice the clearing time for adequate fixation.

**Silver Recovery**: The fixer solution accumulates dissolved silver (from cleared AgBr). Silver recovery is both economically valuable (silver is a precious metal) and environmentally required (silver is toxic to aquatic organisms). Methods include metallic replacement (steel wool cartridges) and electrolytic recovery.

### 5.4 The Wash

**Function**: Removes processing chemicals (especially thiosulphate) from the film. Inadequate washing causes:
- **Residual thiosulphate**: Degrades silver over years, causing brown/yellow staining (archival failure)
- **Residual silver complexes**: Additional staining

**Standard**: Thiosulphate concentration in processed film should be &lt;2 µg/cm² (ANSI/ISO standard for archival quality).

**Water Flow Requirements**: Wash tanks require continuous flow-through of clean water. Temperature maintained at approximately 25°C.

### 5.5 The Dryer

**Function**: Removes water from the swollen gelatin emulsion without causing surface damage.

**Temperature**: Hot air at 40–55°C directed over both film surfaces. Too hot → emulsion damage (reticulation, bubbling). Too cold → film exits wet and sticks together.

---

## 6. Screen-Film Cassettes

### 6.1 Cassette Construction

<div className="book-definition">

**Cassette**: A light-tight, rigid container that houses the film and screens in close, uniform contact during exposure. It must block all external light while allowing X-rays to pass with minimal attenuation.

</div>

**Cassette Components**:

| Component | Material | Function |
|---|---|---|
| **Front face** | Carbon fibre or aluminium | Minimises X-ray attenuation; patient-facing |
| **Frame** | Aluminium alloy or ABS plastic | Structural rigidity |
| **Light seal** | Felt or foam gaskets | Prevents light entry at cassette edges |
| **Hinge and latches** | Metal | Allows cassette opening in darkroom |
| **Back face** | Aluminium with lead backing | Lead (0.5–1.0 mm) absorbs backscattered X-rays |
| **Foam padding** | Polyurethane foam | Maintains uniform screen-film contact pressure |
| **Intensifying screens** | Mounted front and back | X-ray to light conversion |

### 6.2 Screen-Film Contact

Close, uniform contact between screen and film is essential for spatial resolution. Poor contact causes localised blurring (unsharpness).

**Testing Screen-Film Contact**:
- Standard test: Place a wire mesh test object (50 or 40 mesh/cm) on the cassette; expose and process
- Good contact: Wire mesh is uniformly sharp across the entire image
- Poor contact: Focal blurring appears at regions of inadequate contact (cassette edges, centre, or anywhere foam padding is compressed)
- Frequency: Monthly QC test recommended

**Causes of Poor Contact**:
1. Warped cassette frame (from dropping or mechanical stress)
2. Compressed or deteriorated foam padding
3. Debris (dust, crystals) trapped between screen and film
4. Screen delamination

### 6.3 Screen Care and Maintenance

Intensifying screens must be kept scrupulously clean:
- **Dust and debris**: Cause white (unexposed) artefacts on the image — appear as white dots or marks
- **Scratches**: Permanent damage; screen must be replaced
- **Cleaning**: Use manufacturer-approved antistatic screen cleaner; allow complete drying before loading film (moisture causes sticking)
- **Static electricity**: Low-humidity environments promote static buildup; static discharge causes characteristic **tree artefacts** (branching lightning bolt pattern) on film

---

## 7. Screen-Film Image Quality

### 7.1 Spatial Resolution

Screen-film systems can achieve high spatial resolution, but this is strongly dependent on screen speed:

| Screen Type | Maximum Resolution (lp/mm) | Screen Speed |
|---|---|---|
| Mammography detail | 15–20 lp/mm | 25–50 |
| Fine detail (extremity) | 8–12 lp/mm | 50–100 |
| Medium detail | 5–8 lp/mm | 200 |
| Standard | 4–6 lp/mm | 400 |
| Fast | 2–4 lp/mm | 800+ |

**Limiting factors for screen-film resolution**:
1. **Screen unsharpness**: The dominant factor. Light spreads laterally from the absorption site through the phosphor layer
2. **Film grain**: The silver halide crystal size limits resolution (minor factor)
3. **Geometric unsharpness**: U_g = f × OID/SOD (geometry dependent, not an intrinsic receptor property)
4. **Motion unsharpness**: Patient movement during exposure

### 7.2 Contrast

Screen-film contrast depends on:

**1. Film gamma/average gradient**: Higher gamma = higher contrast. Medical radiographic film has steep H&D curves (gamma 2.5–3.5) to maximise contrast.

**2. Subject contrast**: The inherent difference in X-ray attenuation between structures. Screen-film systems cannot recover lost subject contrast (unlike digital systems with windowing).

**3. Film density**: Maximum contrast occurs at densities within the straight-line portion of the H&D curve (typically OD 0.5–2.0). Films exposed into the toe or shoulder show reduced contrast.

**4. Fogging**: Any fogging (from light, heat, radiation, chemical contamination) adds a uniform density veil that reduces contrast by reducing the OD ratio between adjacent structures.

### 7.3 Noise in Screen-Film Systems

**1. Quantum Mottle (Quantum Noise)**:
- The dominant noise source in screen-film systems
- Arises from the statistical fluctuation in the number of X-ray photons absorbed per unit area
- Since N photons are absorbed per area, the standard deviation is √N (Poisson statistics)
- Signal-to-noise ratio: SNR = N/√N = √N
- More photons (lower speed screen, higher mAs) → higher SNR → less visible noise

**2. Film Graininess**:
- The inherent granular pattern visible on film
- Results from the random distribution of silver halide crystals and developed silver grains
- Distinct from quantum mottle, but often difficult to separate visually
- Reduces with smaller crystal size (slower film) but at the cost of speed

**3. Structure Noise (Screen Mottle)**:
- Variations in phosphor crystal density, size, and distribution within the screen
- More visible at low exposure levels
- Cannot be removed by increasing mAs (unlike quantum mottle)
- Contributes a fixed "background noise floor"

**Total Noise**: Measured as RMS (root-mean-square) granularity:
- RMS granularity = √(quantum mottle² + film graininess² + structure mottle²)

### 7.4 Dynamic Range and Exposure Latitude

<div className="book-important">

**The Critical Limitation of Screen-Film**: Screen-film systems have a **narrow dynamic range** (typically 25:1 to 50:1, or about 1.4–1.7 decades of log E in the diagnostic density range). Digital systems have dynamic ranges of 1,000:1 to 10,000:1.

This means:
- Exposures outside the optimal range (underexposure or overexposure) require **repeat radiographs**
- Different body parts with large density differences (lung and mediastinum on a chest X-ray) cannot both be optimally exposed simultaneously
- Exposure errors are the single largest source of repeat radiographs and unnecessary dose in screen-film practice

</div>

---

## 8. Screen-Film Artefacts

### 8.1 Classification of Screen-Film Artefacts

Artefacts can be classified by their cause: screen problems, film problems, cassette problems, processing problems, or handling problems.

| Artefact | Appearance | Cause |
|---|---|---|
| **Screen artefacts** | | |
| Dust/debris on screen | White (unexposed) dots or marks | Foreign particles on screen surface |
| Screen scratch | White linear mark | Physical damage to phosphor layer |
| Screen crack | White irregular area | Broken phosphor layer |
| Wet screen | Blurring, circular marks | Loading film onto damp screen |
| **Static artefacts** | | |
| Tree static | Black branching pattern (lightning bolt) | Electrostatic discharge from film/screen |
| Crown static | Black star-burst/crown pattern | Point discharge |
| Smear static | Black irregular smear | Slow discharge during film loading |
| **Processing artefacts** | | |
| Roller marks | Parallel bands at regular intervals | Dirty or worn transport rollers |
| Pressure marks | Black (exposed) or white marks | Pressure on film before processing |
| Chemical fog | Uniform grey veil, reduced contrast | Exhausted or contaminated developer |
| Pi lines | Periodic bands | Processor roller diameter related marks |
| Reticulation | Cracked emulsion pattern | Temperature shock in processing |
| Dichroic fog | Yellow-green on transmitted, pink on reflected | Incomplete fixation or oxidised developer |
| **Handling artefacts** | | |
| Kink marks (crescent marks) | Black or white crescent-shaped marks | Bending film sharply before processing |
| Fingerprint marks | Fingerprint pattern | Oil/moisture from fingers on unprocessed film |
| Exposure to light | Overall blackening, edge fog | Light leak in cassette, darkroom, or film box |
| Radiation fog | Uniform grey fog | Accidental exposure to scatter radiation |

### 8.2 Light Leaks

Light leaks are particularly problematic and must be systematically investigated:

**Sources**:
1. Cassette edge seal failure (damaged felt/foam)
2. Cracked or warped cassette body
3. Darkroom safelight failure (wrong filter, too close, too bright)
4. Darkroom wall/ceiling/door light leaks

**Testing cassettes for light leaks**:
- Load cassette with film; close and hold under bright light for 1 minute
- Process film: any density increase indicates a light leak
- Coin test: Place a coin on the closed cassette during this test to localise the leak

---

## 9. Sensitometry and Quality Control

### 9.1 Sensitometric QC Programme

A processor sensitometry programme monitors the constancy of film processing using three metrics measured daily:

**Speed Index (SI)**:
- OD at a specified mid-density step (typically step that gives OD closest to 1.0 + B+F)
- Reflects combined film-screen-processor speed
- Control limit: ±0.15 OD from established operating level

**Contrast Index (CI)**:
- Difference in OD between two specified high-density and low-density steps (e.g., step 8 minus step 3)
- Reflects the slope/contrast of the H&D curve
- Control limit: ±0.15 OD from established operating level

**Base + Fog (B+F)**:
- OD of unexposed step (step 1) after processing
- Reflects chemical fog, background radiation, safelight fogging
- Control limit: ±0.03 OD from established operating level

### 9.2 Interpreting QC Chart Patterns

| Pattern | Likely Cause |
|---|---|
| Speed increases, contrast stable | Developer temperature too high; replenisher rate too high |
| Speed decreases, contrast decreases | Developer exhausted; temperature too low |
| B+F increases, speed stable | Safelight fogging; storage radiation fog; chemical contamination |
| All three drift slowly upward | Replenisher rate too low (under-replenishment) |
| Sudden change all parameters | Developer solution change or dilution error |
| Cyclic pattern | Thermostat malfunction (temperature cycling) |

---

## 10. Mammography Screen-Film Systems

### 10.1 Special Requirements

Mammography imposes particularly stringent image quality requirements because:
- Fine microcalcifications (0.1–0.5 mm) must be resolved
- Subtle soft tissue density differences between normal and malignant tissue must be detected
- The dose-detail trade-off is especially critical (glandular breast tissue is radiosensitive)

### 10.2 Mammography Film-Screen Systems

Conventional mammographic screen-film systems used **single screen, single emulsion** configurations:

**Single-sided design rationale**:
- Double-emulsion film has crossover exposure: light from one screen passes through the base and exposes the opposite emulsion, creating a slight blurring called **crossover**
- Crossover degrades resolution — unacceptable for the fine detail required in mammography
- Single emulsion (one emulsion layer, one screen) eliminates crossover

**Mammography phosphors**:
- BaFBr:Eu (barium fluorobromide: europium activator) — used in some earlier systems
- Gd₂O₂S:Tb (gadolinium oxysulphide) — most common; blue-green emission; matched to green-sensitive film
- Screen very thin (~100 µm) to maximise resolution
- Grid used: 4:1 to 5:1 ratio (lower than general radiography to reduce dose)

**Mammography film characteristics**:
- Very high contrast (average gradient 3.0–3.5)
- Single emulsion, single-sided
- Green-sensitive (orthochromatic)
- Narrow latitude (optimised for 2–8 cm breast thickness range)
- Processed at slightly lower temperature (33–35°C) to control chemical fog

### 10.3 The ACR Mammography Accreditation Phantom

Quality control for mammographic screen-film systems uses the ACR accreditation phantom, which contains:
- Fibrous masses (fibre objects of varying diameters)
- Specks (simulated microcalcification groups, 0.16–0.54 mm)
- Masses (simulated nodular densities)

**Minimum passing scores**: 4 fibre objects, 3 specks groups, 3 masses (detected and scored)

---

## 11. Comparison: Screen-Film vs. Digital Systems

| Property | Screen-Film | Computed Radiography (CR) | Digital Radiography (DR) |
|---|---|---|---|
| **Dynamic range** | 25:1 – 50:1 | 1000:1 – 10,000:1 | 1000:1 – 10,000:1 |
| **Spatial resolution** | 5–20 lp/mm | 2–5 lp/mm | 3–7 lp/mm |
| **DQE at zero frequency** | 20–30% | 15–25% | 40–75% |
| **Dose for equivalent image quality** | Reference | Comparable or slightly higher | 20–50% lower |
| **Latitude** | Narrow | Wide | Wide |
| **Repeat rate** | 5–10% (exposure errors) | 1–2% | 1–2% |
| **Image post-processing** | None | Extensive | Extensive |
| **Physical archive** | Film storage required | Digital PACS | Digital PACS |
| **Workflow speed** | 90 seconds processing | 30–60 seconds scanning | 5–15 seconds |
| **Artefacts** | Processing, static, dust | PSP artefacts, ghosting | Dead pixels, lag, ghosting |
| **Chemical waste** | Developer, fixer, silver | Phosphor imaging plates | Minimal |

<div className="book-pearl">

**Why Screen-Film Still Has Higher Resolution**: Despite its narrow dynamic range and processing requirements, screen-film achieves the highest spatial resolution of any area detector — up to 20 lp/mm for mammography detail screens. The silver halide crystal (0.5–1.5 µm) is a smaller detector element than the pixels in DR flat-panel detectors (typically 100–200 µm pixel pitch). For this reason, screen-film remained the gold standard for mammography resolution until the development of high-resolution digital detectors.

</div>

---

## 12. Film Viewing

### 12.1 Illuminator Requirements

Screen-film radiographs are viewed on **illuminators (viewboxes)**. Correct viewing conditions are essential for accurate diagnosis.

**Standard Requirements**:
- **Luminance**: 1,500–3,000 cd/m² (candela per square metre)
- **Uniformity**: ≤15% variation across illuminated area
- **Colour temperature**: 6,500 K (daylight quality — neutral white)
- **Masking**: Unused portions of the illuminator must be masked to prevent flare (glare that reduces apparent film contrast)

**Effect of viewing conditions on apparent contrast**:
- Excessive ambient light → reduces perceived OD differences → reduced apparent contrast (underdiagnosis of subtle findings)
- Under-powered illuminator → dense films appear uniformly black (loss of detail in high-density areas)
- Hot-light viewing → reveals detail in dense regions but loses detail in lighter areas

### 12.2 Film Labelling and Orientation

Radiographic films must carry legally required information:
- Patient name, date of birth, examination date
- Facility name and address
- Side marker (L/R)
- Examination type
- Radiographer identification

Chest films are viewed with the patient facing the viewer (anatomical position), left on viewer right.

---

## 13. Environmental and Regulatory Considerations

### 13.1 Chemical Waste Management

Screen-film processing generates significant chemical waste:

| Waste Stream | Composition | Environmental Hazard | Disposal |
|---|---|---|---|
| Spent developer | Hydroquinone, Phenidone, alkali | High pH, organic compounds | Neutralise; drain or licensed disposal |
| Spent fixer | Silver thiosulphate, thiosulphate | Silver toxicity to aquatic organisms | Silver recovery; licensed disposal |
| Recovered silver | Metallic silver | None (valuable) | Sale to silver recyclers |
| Wash water | Dilute thiosulphate, silver traces | Silver traces | Monitor silver level (&lt;5 mg/L) |

**Regulation**: In the UK, the Environmental Protection Act 1990 and Water Industry Act 1991 govern disposal of photographic chemicals. Silver-bearing fixer may not be discharged directly to drain above regulatory thresholds.

### 13.2 Film Storage

Unprocessed film is sensitive to multiple agents and must be stored correctly:

| Hazard | Effect | Prevention |
|---|---|---|
| Temperature (>21°C) | Speed increase, fog increase | Climate-controlled storage (15–20°C) |
| Humidity (>60% RH) | Emulsion softening, sticking | Humidity control (40–60% RH) |
| Radiation | Fog (background → 0.03 OD) | Lead-lined storage cabinets near X-ray rooms |
| Chemical fumes | Fog, reduced contrast | Isolate from fixer, developer, paints, solvents |
| Pressure | Kink artefacts | Vertical storage in original packaging |
| X-ray (scattered) | Fog | Storage ≥2 m from X-ray rooms or behind lead |

**FIFO (First In, First Out)**: Film stock must be rotated so that older batches are used first. Film has an expiry date; expired film shows increased B+F and reduced speed.

---

## 14. Legacy and Clinical Relevance

Although screen-film radiography has been largely replaced by digital imaging in high-income countries, it remains relevant for several reasons:

**1. Continuing clinical presence**:
- Screen-film mammography is still used in some screening programmes
- Dental periapical and bitewing films remain common
- Low-resource settings globally (sub-Saharan Africa, parts of Asia and Latin America) still rely on screen-film systems

**2. Foundational concepts for digital imaging**:
- The H&D curve concept translates directly to digital LUT (look-up tables) and tone mapping
- Speed/noise/resolution trade-offs are universal across all receptor types
- Quantum mottle and DQE concepts originated in screen-film physics

**3. Image quality standards**:
- MQSA (Mammography Quality Standards Act, USA) and NHS Breast Screening Programme QA standards were developed around screen-film benchmarks and continue to inform digital standards

**4. Examination requirement**:
- Screen-film physics is a significant component of radiographer licensing examinations in the UK (HCPC), USA (ARRT), and internationally

<div className="book-remember">

**Key Relationships to Remember**:
- Screen speed ↑ → dose ↓, resolution ↓, noise ↑ (quantum mottle ↑)
- Film gamma ↑ → contrast ↑, latitude ↓
- Developer temperature ↑ → density ↑, contrast changes, fog ↑
- Phosphor layer thickness ↑ → speed ↑, resolution ↓
- Crystal size ↑ → speed ↑, resolution ↓

</div>

---

<div className="book-summary">

## Chapter Summary

Screen-film radiography combines two components: **intensifying screens** (which convert X-rays to light, amplifying exposure efficiency by 50–100×) and **radiographic film** (which records the light as a latent image via silver halide photochemistry).

**Screens**: Rare earth phosphors (Gd₂O₂S:Tb, LaOBr:Tm) have replaced calcium tungstate due to higher conversion efficiency (15–20% vs 3–5%) and optimal K-edge absorption (Gd at 50.2 keV, La at 38.9 keV). Screen speed is determined by phosphor type, crystal size, and layer thickness. Higher speed reduces dose but degrades resolution and increases quantum mottle — the fundamental speed-detail-noise triangle.

**Film**: Double-emulsion construction (emulsion on both sides of a polyester base) doubles sensitivity. The latent image forms as 3–10 silver atom clusters at sensitivity specks (Gurney-Mott mechanism). Development amplifies this by ∼10⁸ times. Film must be spectrally matched to the screen emission colour; orthochromatic film for green-emitting rare earth screens.

**Processing**: The automatic processor runs film through developer (35°C, reduces Ag⁺ → Ag⁰ at latent image sites), fixer (dissolves unexposed AgBr; pH 4–5), wash (removes chemicals), and dryer. Temperature control ±0.3°C is critical. Spent fixer requires silver recovery before disposal.

**The H&D curve** defines film performance: speed (exposure for OD = B+F + 1.0), gamma/average gradient (slope of straight-line portion; typical 2.5–3.5), and latitude (useful exposure range). High gamma = high contrast but narrow latitude. Sensitometry with daily QC plots detects processor drift before it affects clinical images.

**Key limitation**: Narrow dynamic range (25:1 to 50:1) requires precise exposure technique. Unlike digital systems, screen-film cannot recover contrast from under- or over-exposed images. This drives repeat rates of 5–10% in screen-film departments.

**Resolution advantage**: Up to 20 lp/mm for mammography detail screens — higher than most digital detectors — due to the small silver halide crystal (0.5–1.5 µm effective detector element).

</div>