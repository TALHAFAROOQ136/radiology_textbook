---
sidebar_position: 2
title: "Chapter 2: Physics of Medical Imaging"
description: "Understanding the fundamental physics principles behind different medical imaging modalities"
---

# Chapter 2: Physics of Medical Imaging

Medical imaging relies on various physical principles to visualize the internal structures of the human body. Understanding these principles is crucial for interpreting images correctly and optimizing imaging protocols. This chapter covers the fundamental physics behind the most common imaging modalities.

## Basic Principles of X-ray Production

X-rays are electromagnetic waves with wavelengths ranging from 0.01 to 10 nanometers, corresponding to frequencies in the range 30 petahertz to 30 exahertz. The production of X-rays occurs in an X-ray tube through the following process:

### Fundamental Physics of X-rays

X-rays are part of the electromagnetic spectrum, positioned between ultraviolet radiation and gamma rays. They possess sufficient energy to ionize atoms and molecules, which gives them their penetrating power and their potential biological effects. The energy of an X-ray photon is inversely proportional to its wavelength and directly proportional to its frequency, according to the equation E = hf = hc/λ, where h is Planck's constant, f is frequency, c is the speed of light, and λ is wavelength.

The diagnostic range of X-rays typically corresponds to energies between 20-150 keV (kiloelectron volts). At these energies, X-rays can penetrate soft tissues but are attenuated by denser materials like bone and metal, creating the contrast needed for diagnostic imaging.

### X-ray Tube Components and Design

The X-ray tube is the heart of diagnostic X-ray equipment, designed to convert electrical energy into X-ray photons efficiently:

1. **Cathode Assembly**:
   - **Filament**: A coiled tungsten wire that emits electrons when heated to approximately 2,200°C through thermionic emission
   - **Focusing Cup**: A nickel or molybdenum cup that shapes and focuses the electron beam onto the target
   - The filament is powered by a low-voltage, high-current circuit (typically 5-15 V, 4-10 A)

2. **Anode Assembly**:
   - **Target Material**: Usually tungsten (atomic number 74) due to its high melting point (3,422°C), high atomic number, and high thermal conductivity
   - **Rotating Anode**: In most diagnostic equipment, the anode rotates at 3,000-10,000 RPM to distribute heat over a larger area
   - **Stator**: Stationary electromagnets that induce rotation of the anode
   - **Stationary Anodes**: Used in low-power applications like dental X-rays

3. **Glass or Metal Envelope**:
   - Maintains vacuum (~10⁻⁶ torr) to prevent electron scattering and arcing
   - Made of Pyrex glass or ceramic/metal combinations
   - The envelope contains the cathode-anode assembly

4. **High-Voltage Connections**:
   - Electrical pathways that carry the high potential difference between cathode and anode
   - Designed to withstand voltages up to 150 kV

### X-ray Generation Process in Detail

The conversion of electrical energy to X-ray photons involves several physical processes:

1. **Thermionic Emission**: Heating the tungsten filament to incandescence causes electrons to gain sufficient kinetic energy to overcome the work function of the metal (approximately 4.5 eV for tungsten), creating a space charge of free electrons.

2. **Electron Acceleration**: Application of high voltage (kVp - peak kilovolt potential) between cathode and anode creates a strong electric field. Electrons are accelerated toward the anode at speeds reaching up to half the speed of light.

3. **Electron-Target Interactions**: When high-speed electrons strike the target material, approximately 99% of the energy is converted to heat, while only 1% becomes X-ray photons. Two distinct mechanisms produce X-rays:

   - **Bremsstrahlung Radiation** ("braking radiation"): Accounts for 85-90% of X-rays produced
     - Occurs when incident electrons pass close to atomic nuclei
     - The strong electric field of the nucleus decelerates the electrons
     - Energy lost by the electron is emitted as an X-ray photon
     - Produces a continuous spectrum of energies up to the maximum kVp
     - The intensity is proportional to Z (atomic number) and (kVp)²

   - **Characteristic Radiation**: Accounts for 10-15% of X-rays produced
     - Occurs when incident electrons have sufficient energy (>69.5 keV) to eject inner-shell electrons
     - When outer-shell electrons drop to fill the vacancy, characteristic X-rays are emitted
     - For tungsten, K-shell binding energy is 69.5 keV, producing characteristic peaks at 59.3 keV and 67.2 keV
     - The energy of characteristic radiation is specific to the target material

### X-ray Spectrum Characteristics

The resulting X-ray beam has a complex energy distribution:

- **Continuous Spectrum**: Due to Bremsstrahlung radiation, ranging from near zero to the maximum kVp
- **Characteristic Peaks**: Discrete energy levels due to characteristic radiation
- **Energy Distribution Factors**:
  - **Applied voltage (kVp)**: Determines the maximum photon energy and affects both quantity and quality of X-rays
  - **Target material**: Influences characteristic radiation and overall efficiency
  - **Filtration**: Removes low-energy photons that contribute to patient dose without enhancing image quality
  - **Tube current (mA)**: Affects the number of photons produced (quantity) but not energy distribution (quality)

### X-ray Beam Modification

Several factors modify the primary X-ray beam before it reaches the patient:

1. **Inherent Filtration**: Built-in filtration from the tube window (typically 2.5-3.0 mm Al equivalent)
2. **Added Filtration**: Additional aluminum or equivalent material (typically 1.0-2.5 mm Al equivalent)
3. **Beam Hardening**: As the beam passes through matter, low-energy photons are preferentially absorbed, increasing the average energy of the remaining beam
4. **Anode Heel Effect**: Variation in beam intensity across the X-ray field due to the geometry of the anode

### Heat Management

Heat dissipation is critical for X-ray tube operation:
- Approximately 99% of electrical energy is converted to heat
- X-ray tubes must be designed with high thermal conductivity materials
- Rotating anodes spread heat over a larger surface area
- Cooling systems (oil bath, fans) dissipate accumulated heat
- Exposure times and duty cycles are limited by thermal considerations

This fundamental understanding of X-ray production is essential for optimizing imaging protocols, understanding image quality factors, and ensuring radiation safety in clinical practice.

## Physics of CT Scanning

Computed Tomography (CT) uses X-rays to produce cross-sectional images of the body. The physics principles include:

### X-ray Attenuation

- **Beer-Lambert Law**: I = I₀e^(-μx), where μ is the linear attenuation coefficient
- Different tissues have different attenuation coefficients (measured in Hounsfield Units)
- Bone > Soft tissue > Fat > Air in terms of attenuation

### Image Reconstruction

- **Filtered Back Projection**: Mathematical technique to reconstruct cross-sectional images
- **Iterative Reconstruction**: Advanced algorithms that improve image quality and reduce noise
- Multiple projections acquired around the patient to create 3D volume data

### CT Parameters

- **Slice thickness**: Determines resolution in the z-direction
- **Pitch**: Ratio of table movement to beam collimation per rotation
- **mA**: Tube current affecting image noise and patient dose
- **kV**: Tube voltage affecting penetration and contrast

## MRI Physics and Signal Generation

Magnetic Resonance Imaging (MRI) relies on nuclear magnetic resonance principles:

### Basic Principles

1. **Nuclear Spin**: Hydrogen nuclei (protons) behave as tiny magnets
2. **Magnetic Field**: Strong magnetic field (1.5T or 3T) aligns proton spins
3. **Radiofrequency Pulse**: Excites protons out of equilibrium
4. **Signal Detection**: Relaxation process generates detectable MR signal

### Relaxation Mechanisms

- **T1 Relaxation**: Longitudinal recovery of magnetization (spin-lattice)
- **T2 Relaxation**: Transverse decay of magnetization (spin-spin)
- **T2* Relaxation**: Additional dephasing due to magnetic field inhomogeneities

### MR Sequences

- **Spin Echo**: Uses 90°-180° pulse sequence to refocus spins
- **Gradient Echo**: Uses gradient reversals to refocus spins
- **Inversion Recovery**: Prepares magnetization for T1-weighted imaging

### Contrast Mechanisms

- **T1 weighting**: Short TR and short TE (fat bright, fluid dark)
- **T2 weighting**: Long TR and long TE (fluid bright, fat bright)
- **Proton density**: Long TR and short TE (anatomical detail)

## Ultrasound Physics and Doppler Principles

Ultrasound uses high-frequency sound waves (typically 2-15 MHz) for imaging:

### Sound Wave Properties

- **Frequency**: Number of cycles per second (MHz)
- **Wavelength**: Distance between wave peaks
- **Propagation speed**: ~1540 m/s in soft tissue
- **Acoustic impedance**: Z = ρ × c (density × speed)

### Image Formation

- **Pulse-Echo Principle**: Sound waves reflect at tissue interfaces
- **Time-of-flight**: Distance calculated from round-trip time
- **Amplitude**: Reflection strength determines brightness (B-mode)

### Acoustic Interactions

1. **Reflection**: Occurs at tissue interfaces with different impedances
2. **Refraction**: Bending at oblique interfaces
3. **Scattering**: From small structures (Rayleigh scattering)
4. **Absorption**: Conversion to heat (main cause of attenuation)

### Doppler Effect

- **Principle**: Frequency shift due to moving reflectors
- **Equation**: Δf = (2f₀v cos θ)/c
- **Applications**: Blood flow velocity measurement
- **Modes**: Continuous wave (CW) and pulsed wave (PW) Doppler

## Nuclear Medicine Basics (PET, SPECT)

Nuclear medicine uses radioactive tracers to image physiological processes:

### Radioactive Decay

- **Positron Emission**: Used in PET (¹⁸F-FDG, ¹¹C, ¹³N, ¹⁵O)
- **Gamma Emission**: Used in SPECT (⁹⁹ᵐTc, ¹²³I, ¹¹¹In)
- **Half-life**: Time for activity to decrease by half

### PET Physics

- **Coincidence Detection**: 511 keV photons detected simultaneously
- **Annihilation**: Positron meets electron, producing two 511 keV photons
- **Attenuation Correction**: Required for quantitative imaging

### SPECT Physics

- **Gamma Camera**: NaI(Tl) crystal detects gamma photons
- **Collimation**: Parallel-hole or fan-beam collimators
- **Reconstruction**: Similar to CT but with lower resolution

## Safety Considerations

### Radiation Protection (X-ray/CT)

- **ALARA principle**: As Low As Reasonably Achievable
- **Shielding**: Lead aprons, thyroid shields
- **Distance**: Intensity decreases with square of distance
- **Time**: Minimize exposure duration

### MRI Safety

- **Projectile risk**: Metallic objects attracted to magnet
- **RF heating**: Specific Absorption Rate (SAR) limits
- **Gradient switching**: Acoustic noise and peripheral nerve stimulation

This chapter provides the foundation for understanding how different imaging modalities work and how to optimize their use in clinical practice.