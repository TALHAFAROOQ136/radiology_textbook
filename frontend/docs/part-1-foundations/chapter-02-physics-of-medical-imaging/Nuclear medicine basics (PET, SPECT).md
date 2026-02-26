---
title: "Nuclear Medicine Basics (PET, SPECT)"
sidebar_label: "Nuclear Medicine Basics (PET, SPECT)"
---

# Nuclear Medicine Basics (PET, SPECT)

Nuclear medicine is a specialized branch of radiology that uses radioactive substances (radiopharmaceuticals) to diagnose and treat disease. The imaging modalities in nuclear medicine include Single Photon Emission Computed Tomography (SPECT) and Positron Emission Tomography (PET).

## Fundamentals of Nuclear Physics

### Atomic Structure and Radioactivity

Nuclear medicine is based on the properties of unstable atomic nuclei:

- **Nucleons**: Protons and neutrons in the atomic nucleus
- **Isotopes**: Atoms with the same number of protons but different numbers of neutrons
- **Radionuclides**: Unstable isotopes that decay spontaneously
- **Radioactivity**: The process of spontaneous nuclear decay

### Types of Radiation

#### Alpha Particles (α)
- **Composition**: 2 protons and 2 neutrons (helium nucleus)
- **Charge**: +2
- **Mass**: 4 amu
- **Penetration**: Very low (stopped by paper/skin)
- **Ionization**: Very high (dense ionization track)

#### Beta Particles (β)
- **Composition**: High-energy electrons (β⁻) or positrons (β⁺)
- **Charge**: -1 (β⁻) or +1 (β⁺)
- **Mass**: Negligible
- **Penetration**: Moderate (stopped by aluminum)
- **Ionization**: Moderate

#### Gamma Rays (γ)
- **Composition**: High-energy photons
- **Charge**: 0
- **Mass**: 0
- **Penetration**: High (requires dense material like lead to stop)
- **Ionization**: Low (indirect ionization)

#### X-rays
- **Composition**: High-energy photons
- **Origin**: Electron shell transitions (characteristic X-rays) or bremsstrahlung
- **Energy**: Lower than gamma rays (typically 10-100 keV)
- **Use**: Often accompany gamma emissions

### Radioactive Decay

#### Exponential Decay Law
- **Formula**: N(t) = N₀e^(-λt), where N₀ is initial number of atoms
- **Decay constant**: λ (probability of decay per unit time)
- **Activity**: A = λN, measured in Becquerels (Bq) or Curies (Ci)
- **Conversion**: 1 Ci = 3.7 × 10¹⁰ Bq

#### Half-Life
- **Definition**: Time for half of the radioactive atoms to decay
- **Formula**: T₁/₂ = ln(2)/λ ≈ 0.693/λ
- **Range**: From microseconds to billions of years
- **Clinical significance**: Determines imaging timing and radiation exposure

### Decay Modes

#### Beta-minus Decay (β⁻)
- **Process**: n → p + e⁻ + ν̄ₑ
- **Electron capture competition**: Sometimes competes with β⁻ decay
- **Examples**: ⁹⁹ᵐTc, ¹²³I, ¹¹¹In
- **Result**: Atomic number increases by 1

#### Beta-plus Decay (β⁺)
- **Process**: p → n + e⁺ + νₑ
- **Requirement**: Energy threshold of 1.022 MeV
- **Examples**: ¹⁸F, ¹¹C, ¹³N, ¹⁵O
- **Result**: Atomic number decreases by 1

#### Electron Capture
- **Process**: p + e⁻ → n + νₑ
- **Competitor**: Competes with β⁺ decay
- **Examples**: ¹²³I, ²⁰¹Tl
- **Result**: Atomic number decreases by 1

#### Isomeric Transition
- **Process**: Excited nucleus → ground state + γ-ray
- **Examples**: ⁹⁹ᵐTc → ⁹⁹Tc + γ-ray
- **Isomers**: Metastable states with longer half-lives
- **Notation**: Metastable state indicated by 'm' (e.g., ⁹⁹ᵐTc)

## Single Photon Emission Computed Tomography (SPECT)

### Basic Principles

SPECT uses gamma-emitting radionuclides to create three-dimensional functional images:

- **Photon emission**: Single gamma photon per decay event
- **Energy range**: Typically 100-200 keV (¹²³I: 159 keV, ⁹⁹ᵐTc: 140 keV)
- **Detection**: Gamma camera detects emitted photons
- **Reconstruction**: Computer reconstructs 3D distribution

### Gamma Camera Components

#### Collimator
- **Function**: Determines direction of incoming photons
- **Types**:
  - **Parallel hole**: Most common, equal magnification
  - **Pinhole**: Magnification, small field of view
  - **Converging**: Magnification, larger field of view
  - **Diverging**: Demagnification
- **Characteristics**:
  - **Resolution**: Hole diameter and septal thickness
  - **Sensitivity**: Aperture size and length
  - **Trade-off**: Better resolution means lower sensitivity

#### Sodium Iodide Crystal (NaI(Tl))
- **Material**: NaI activated with thallium
- **Thickness**: Typically ⅜ to ¾ inch
- **Function**: Converts gamma photons to light photons
- **Efficiency**: ~85% for 140 keV photons
- **Light output**: ~4000 photons per gamma interaction

#### Photomultiplier Tubes (PMTs)
- **Number**: 37-99 tubes in modern cameras
- **Function**: Convert light photons to electrical signals
- **Gain**: 10⁶ to 10⁷ amplification
- **Positioning**: Circular arrangement around crystal

#### Electronics
- **Pulse processing**: Energy and position determination
- **Window settings**: Energy windows for imaging
- **Data acquisition**: Computerized data collection
- **Quality control**: Real-time performance monitoring

### SPECT Image Acquisition

#### Acquisition Parameters
- **Matrix size**: 64×64 to 256×256 pixels
- **Zoom**: 1.0 to 3.0 for magnification
- **Views**: 60-120 views for 360° acquisition
- **Time per view**: 20-60 seconds depending on activity

#### Reconstruction Methods
- **Filtered back projection**: Traditional method
- **Iterative reconstruction**: More sophisticated, better noise handling
- **Attenuation correction**: Compensates for photon absorption
- **Scatter correction**: Compensates for Compton scattered photons

### Common SPECT Isotopes and Applications

#### Technetium-99m (⁹⁹ᵐTc)
- **Half-life**: 6.02 hours
- **Gamma energy**: 140 keV
- **Applications**:
  - Myocardial perfusion imaging (sestamibi, tetrofosmin)
  - Bone scans (MDP)
  - Renal imaging (MAG3, DTPA)
  - Brain imaging (HMPAO, ECD)
  - Lung ventilation/perfusion (MAA, DTPA)

#### Iodine-123 (¹²³I)
- **Half-life**: 13.2 hours
- **Gamma energy**: 159 keV
- **Applications**:
  - Thyroid imaging and uptake
  - Brain dopamine transporter imaging (FP-CIT)
  - Cardiac sympathetic imaging (MIBG)

#### Iodine-131 (¹³¹I)
- **Half-life**: 8.02 days
- **Gamma energy**: 364 keV
- **Applications**:
  - Thyroid cancer treatment and imaging
  - Hyperthyroidism treatment
  - Dosimetry studies

#### Thallium-201 (²⁰¹Tl)
- **Half-life**: 3.05 days
- **Gamma energies**: 135 and 167 keV
- **Applications**:
  - Myocardial perfusion imaging
  - Tumor imaging
  - Parathyroid imaging

## Positron Emission Tomography (PET)

### Basic Principles

PET uses positron-emitting radionuclides to create functional images:

- **Annihilation reaction**: e⁺ + e⁻ → 2γ-rays (511 keV each)
- **Coincidence detection**: Both photons detected simultaneously
- **Line of response**: Straight line between detector pair
- **Timing window**: ~10 ns coincidence timing requirement

### PET Physics

#### Positron Range
- **Distance**: 0.5-7 mm in tissue depending on isotope
- **Energy**: Related to positron kinetic energy
- **Resolution effect**: Limits ultimate spatial resolution
- **Isotope dependence**: ¹⁸F ~0.5 mm, ¹¹C ~1.2 mm

#### Annihilation Process
- **Energy conservation**: Each gamma ray has 511 keV energy
- **Angular conservation**: Photons travel 180° apart
- **Coincidence detection**: Both photons must be detected within timing window
- **Random coincidences**: Background events that don't originate from same annihilation

### PET Scanner Components

#### Detector Materials
- **BGO (Bismuth Germanate)**: High density, high Z, good stopping power
- **LSO/LYSO (Lutetium Oxyorthosilicate)**: Faster decay time, higher light output
- **GSO (Gadolinium Oxyorthosilicate)**: Intermediate properties
- **Characteristics**: Density, Z, decay time, light output, cost

#### Block Detectors
- **Design**: Large crystals with position-sensitive PMTs
- **Function**: Determine location of gamma interaction
- **Depth of interaction**: Some systems measure Z-location
- **Timing**: Critical for coincidence detection

#### Electronics
- **Coincidence electronics**: Detect simultaneous detections
- **Dead time**: Time system is busy after event
- **Count rate performance**: True vs. random vs. scattered events
- **Pileup rejection**: Rejects overlapping pulses

### PET Image Acquisition

#### Static vs. Dynamic Imaging
- **Static**: Single image over time period (e.g., 10-30 minutes)
- **Dynamic**: Multiple frames over time course (e.g., 60-90 minutes)
- **Kinetic modeling**: Quantitative analysis of tracer kinetics
- **Parametric imaging**: Derived parameter maps

#### Attenuation Correction
- **Challenge**: No transmission source in PET unlike SPECT
- **Methods**:
  - Transmission scanning (GE, Siemens legacy systems)
  - CT-based attenuation correction (PET/CT)
  - MR-based attenuation correction (PET/MR)
- **Importance**: Critical for accurate quantification

### Common PET Isotopes and Applications

#### Fluorine-18 (¹⁸F)
- **Half-life**: 109.8 minutes
- **Applications**:
  - FDG (fluorodeoxyglucose): Glucose metabolism imaging
  - FLT (fluorothymidine): Proliferation imaging
  - FES (fluoroestradiol): Estrogen receptor imaging
  - FCholine: Choline metabolism imaging

#### Carbon-11 (¹¹C)
- **Half-life**: 20.4 minutes
- **Applications**:
  - C-acetate: Fatty acid metabolism
  - C-choline: Choline metabolism
  - C-methionine: Amino acid transport
  - C-PIB: Amyloid imaging for Alzheimer's

#### Oxygen-15 (¹⁵O)
- **Half-life**: 2.04 minutes
- **Applications**:
  - H₂¹⁵O: Blood flow imaging
  - C¹⁵O: Blood volume and metabolism
  - CO₂¹⁵O: Cerebral blood flow

#### Nitrogen-13 (¹³N)
- **Half-life**: 9.97 minutes
- **Applications**:
  - NH₃: Myocardial perfusion
  - N-ammonia: Hepatic function

## Hybrid Imaging

### PET/CT
- **Integration**: PET and CT in single gantry
- **Advantages**:
  - Attenuation correction using CT
  - Anatomical localization of PET findings
  - Combined reporting
  - Improved workflow
- **Protocols**: Low-dose CT for attenuation, diagnostic CT optional

### SPECT/CT
- **Integration**: SPECT and CT in single system
- **Advantages**:
  - Attenuation correction using CT
  - Anatomical localization
  - Improved sensitivity and specificity
  - Reduced imaging time

## Radiation Safety

### Patient Dosimetry
- **Effective dose**: Typical range 2-25 mSv depending on study
- **PET**: Generally higher than SPECT (due to positron emitters)
- **SPECT**: Variable depending on isotope and activity
- **Optimization**: ALARA principle for patient dose

### Occupational Safety
- **Exposure**: Primarily from handling radiopharmaceuticals
- **Protection**: Time, distance, shielding principles
- **Monitoring**: Personal dosimetry for radiation workers
- **Regulations**: NRC and state regulatory requirements

## Quality Control

### SPECT QC
- **Energy peaking**: Daily calibration of energy windows
- **Uniformity**: Flood source for crystal uniformity
- **Resolution**: Point source for system resolution
- **Sensitivity**: Known source for sensitivity measurement

### PET QC
- **Normalization**: Correction for detector efficiency variations
- **Coincidence timing**: Timing window optimization
- **Spatial resolution**: Line source or point source
- **Count rate performance**: True vs. random vs. scatter rates

Nuclear medicine combines physics, chemistry, and biology to provide functional imaging of organ systems. Understanding the underlying physics is essential for optimizing image quality, ensuring patient safety, and interpreting results accurately.