---
title: "MRI Physics and Signal Generation"
sidebar_label: "MRI Physics and Signal Generation"
---

# MRI Physics and Signal Generation

Magnetic Resonance Imaging (MRI) is a non-ionizing imaging modality that uses strong magnetic fields, radiofrequency pulses, and gradient fields to generate detailed images of soft tissues. The physics of MRI is fundamentally different from other imaging modalities and is based on the principles of nuclear magnetic resonance (NMR).

## Basic Physics Principles

### Nuclear Spin Properties

MRI exploits the magnetic properties of atomic nuclei with odd numbers of protons or neutrons:

- **Hydrogen nuclei (¹H)**: Most abundant in the human body (water and fat)
- **Spin quantum number**: I = ½ for hydrogen nuclei
- **Magnetic moment**: μ = γħI, where γ is the gyromagnetic ratio
- **Gyromagnetic ratio**: γ = 42.58 MHz/T for hydrogen
- **Net magnetization**: Macroscopic sum of individual nuclear magnetic moments

### Magnetic Field Interactions

When placed in a strong external magnetic field (B₀), nuclear spins align with the field:

- **Parallel alignment**: Lower energy state (spin up), slightly more populated
- **Anti-parallel alignment**: Higher energy state (spin down), slightly less populated
- **Population difference**: Creates net longitudinal magnetization (Mz)
- **Larmor frequency**: ω₀ = γB₀, the frequency at which nuclei precess

### Thermal Equilibrium

At room temperature, the population difference follows the Boltzmann distribution:

- **Small difference**: ~1 in 2 million at 1.5 T
- **Temperature dependence**: Higher temperature reduces polarization
- **Field dependence**: Higher field increases polarization
- **Equilibrium magnetization**: M₀ = χB₀, where χ is magnetic susceptibility

## The MRI Process

### Excitation

RF pulses are used to perturb the equilibrium magnetization:

- **Resonance condition**: RF frequency equals Larmor frequency
- **90° pulse**: Rotates magnetization into transverse plane (Mxy)
- **Flip angle**: Depends on pulse amplitude and duration
- **Selective excitation**: Gradient fields make excitation spatially selective

### Relaxation Mechanisms

After excitation, magnetization returns to equilibrium through relaxation:

#### T1 Relaxation (Longitudinal)
- **Spin-lattice relaxation**: Energy transfer to surrounding lattice
- **Time constant**: T1, typically 200-2000 ms for biological tissues
- **Physical mechanism**: Fluctuating magnetic fields at Larmor frequency
- **T1 values**: Fat ~250 ms, CSF ~4000 ms, muscle ~1000 ms

#### T2 Relaxation (Transverse)
- **Spin-spin relaxation**: Loss of phase coherence among spins
- **Time constant**: T2, typically 50-200 ms for biological tissues
- **Physical mechanism**: Local magnetic field inhomogeneities
- **T2 values**: Fat ~80 ms, CSF ~2000 ms, muscle ~50 ms

#### T2* Relaxation
- **Apparent relaxation**: Includes both T2 and static field inhomogeneities
- **Time constant**: T2*, always shorter than T2
- **Echo formation**: Gradient refocusing can recover signal

## MRI Signal Generation

### Free Induction Decay (FID)

When transverse magnetization precesses, it induces a signal in receiver coils:

- **Initial amplitude**: Proportional to Mxy
- **Decay**: Exponential with time constant T2*
- **Frequency**: Equal to Larmor frequency offset
- **Phase**: Determined by magnetic field at spin location

### Spin Echo Formation

Gradient refocusing recovers signal lost to field inhomogeneities:

- **180° refocusing pulse**: Reverses dephasing caused by gradients
- **Echo time (TE)**: Time from excitation to echo formation
- **Echo amplitude**: Proportional to exp(-TE/T2) for ideal spin echoes
- **Multiple echoes**: Can be generated with repeated 180° pulses

### Gradient Echo Formation

Gradient reversal creates echoes without RF refocusing:

- **Gradient reversal**: Reverses dephasing caused by gradient
- **Shorter TE**: Generally achievable than spin echo TE
- **T2* weighting**: Signal decay follows T2* rather than T2
- **Susceptibility effects**: More prominent than in spin echo

## Magnetic Gradients

### Gradient Coils

Three orthogonal gradient systems provide spatial encoding:

- **Slice selection**: Localizes RF excitation in z-direction
- **Frequency encoding**: Spatially encodes frequency in x-direction
- **Phase encoding**: Spatially encodes phase in y-direction
- **Gradient strength**: 20-40 mT/m in clinical systems

### Spatial Encoding

#### Slice Selection
- **Simultaneous RF and gradient**: Selects slice thickness
- **Slice thickness**: Inversely proportional to RF bandwidth
- **Slice gap**: Allows imaging of non-contiguous slices
- **Slice profile**: Affected by gradient linearity and RF homogeneity

#### Frequency Encoding
- **Readout gradient**: Applied during signal acquisition
- **Fourier transformation**: Converts frequency to spatial information
- **Sampling rate**: Must satisfy Nyquist criterion
- **Field of view**: FOV = sampling frequency / gradient strength

#### Phase Encoding
- **Preparation gradient**: Applied before slice selection
- **Phase steps**: N/2 to N/2-1 for N pixels
- **Imaging time**: Proportional to number of phase steps
- **Spatial resolution**: Inversely proportional to FOV/phase steps

## MRI Sequences

### Conventional Sequences

#### Spin Echo (SE)
- **Pulse sequence**: 90°-180°-echo
- **TR**: Repetition time, controls T1 weighting
- **TE**: Echo time, controls T2 weighting
- **T1-weighted**: Short TR, short TE (e.g., 500/15 ms)
- **T2-weighted**: Long TR, long TE (e.g., 4000/100 ms)
- **PD-weighted**: Long TR, short TE (e.g., 2000/15 ms)

#### Gradient Echo (GRE)
- **Pulse sequence**: α°-echo (α < 90°)
- **Steady state**: Can achieve rapid imaging
- **T2*-weighting**: Susceptibility effects prominent
- **Flow sensitivity**: Can be exploited for angiography

### Advanced Sequences

#### Inversion Recovery (IR)
- **Pulse sequence**: 180°-TI-90°-echo
- **T1 contrast**: Enhanced compared to SE
- **STIR**: Short TI inversion recovery for fat suppression
- **FLAIR**: Fluid-attenuated inversion recovery for CSF suppression

#### Echo Planar Imaging (EPI)
- **Single shot**: Entire image acquired after single excitation
- **Speed**: Extremely fast imaging capability
- **Distortion**: Susceptibility artifacts prominent
- **Applications**: Functional MRI, diffusion imaging

## Contrast Mechanisms

### T1-Weighted Contrast

T1 differences create contrast in T1-weighted images:

- **Short T1**: Bright signal (fat, subacute hemorrhage, proteinaceous fluids)
- **Long T1**: Dark signal (CSF, tendons, ligaments)
- **Paramagnetic agents**: Shorten T1, increase signal intensity
- **Sequence parameters**: TR < 2×T1 of tissues of interest

### T2-Weighted Contrast

T2 differences create contrast in T2-weighted images:

- **Long T2**: Bright signal (CSF, edema, inflammation)
- **Short T2**: Dark signal (fat, melanin, calcification)
- **Sequence parameters**: TE approaches T2 of tissues of interest

### Proton Density Weighted

Minimizes T1 and T2 contrast to emphasize spin density:

- **High spin density**: Bright signal (CSF, muscle)
- **Low spin density**: Dark signal (bone, air)
- **Sequence parameters**: Long TR, short TE

## Image Weighting and Contrast

### Controlling Image Contrast

- **TR effects**: Longer TR reduces T1 contrast, increases SNR
- **TE effects**: Longer TE increases T2 contrast, reduces SNR
- **Flip angle**: Affects both T1 and T2 contrast in GRE sequences
- **TI effects**: Inversion time controls contrast in IR sequences

### Common Contrast Agents

#### Gadolinium-Based Agents
- **Mechanism**: Paramagnetic, shortens T1 and T2
- **Effect**: Increases T1 signal intensity
- **Distribution**: Extracellular, requires intact blood-brain barrier
- **Safety**: Nephrogenic systemic fibrosis risk in renal failure

#### Superparamagnetic Iron Oxide
- **Mechanism**: Strongly paramagnetic, shortens T2*
- **Effect**: Decreases signal intensity
- **Applications**: Liver imaging, lymph node assessment

## MRI Safety

### Static Magnetic Field Safety

- **Projectile risk**: Ferromagnetic objects become dangerous projectiles
- **Implants**: Pacemakers, cochlear implants, aneurysm clips contraindicated
- **Induced currents**: Generally minimal at clinical field strengths
- **Recommended limits**: ≤3 T for clinical imaging

### Gradient Field Safety

- **Peripheral nerve stimulation**: Can cause twitching or discomfort
- **Acoustic noise**: Loud knocking sounds from gradient switching
- **SAR limits**: Specific absorption rate limits to prevent heating
- **Switching rate**: Limited to prevent neural stimulation

MRI physics is fundamentally based on nuclear magnetic resonance, involving complex interactions between magnetic fields, radiofrequency pulses, and gradient fields to create detailed images of soft tissues. Understanding these principles is essential for optimizing image quality and ensuring patient safety.