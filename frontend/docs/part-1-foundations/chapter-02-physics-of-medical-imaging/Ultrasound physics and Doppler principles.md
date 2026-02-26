---
title: "Ultrasound Physics and Doppler Principles"
sidebar_label: "Ultrasound Physics and Doppler Principles"
---

# Ultrasound Physics and Doppler Principles

Ultrasound imaging uses high-frequency sound waves to create real-time images of internal body structures. Understanding the physics of ultrasound is crucial for optimizing image quality and interpreting findings correctly.

## Basic Acoustic Physics

### Sound Wave Properties

Ultrasound uses mechanical waves with frequencies above human hearing range:

- **Frequency range**: 2-15 MHz for diagnostic ultrasound
- **Wavelength**: λ = c/f, where c is propagation speed and f is frequency
- **Propagation speed**: ~1540 m/s in soft tissue (range 1450-1650 m/s)
- **Period**: T = 1/f, the time for one complete cycle
- **Amplitude**: Maximum displacement of particles in the medium

### Acoustic Impedance

Acoustic impedance is fundamental to ultrasound image formation:

- **Definition**: Z = ρc, where ρ is density and c is propagation speed
- **Units**: Rayls (kg/m²·s) or acoustic ohms
- **Tissue values**:
  - Air: 400 rayls
  - Fat: 1.38×10⁶ rayls
  - Soft tissue: 1.63×10⁶ rayls
  - Bone: 6.0-18.0×10⁶ rayls
- **Interface reflection**: Greater impedance mismatch produces stronger reflections

## Ultrasound Generation and Detection

### Piezoelectric Effect

Ultrasound transducers operate on the piezoelectric principle:

- **Direct piezoelectric effect**: Mechanical stress generates electrical charge
- **Inverse piezoelectric effect**: Electrical voltage generates mechanical deformation
- **Materials**: Lead zirconate titanate (PZT), composite materials
- **Resonance frequency**: f = c/(2t), where t is crystal thickness

### Transducer Design

Modern ultrasound transducers incorporate several key elements:

- **Active elements**: PZT crystals that generate and receive ultrasound
- **Backing material**: Damps vibrations, reduces pulse duration
- **Matching layer**: Reduces impedance mismatch with tissue
- **Frequency tuning**: Crystal thickness determines fundamental frequency

### Array Transducers

#### Linear Arrays
- **Elements**: 64-256 rectangular elements in straight line
- **Beam steering**: Electronic time delays control beam direction
- **Applications**: Small parts, superficial structures
- **Image shape**: Rectangular field of view

#### Curved Arrays
- **Elements**: Arranged in curved line
- **Applications**: Abdominal, obstetric, cardiac imaging
- **Image shape**: Sector or trapezoidal field of view
- **Penetration**: Better than linear arrays

#### Phased Arrays
- **Elements**: 32-128 small elements
- **Steering**: Precise time delays for beam steering and focusing
- **Applications**: Cardiac imaging, interventional procedures
- **Flexibility**: Electronic beam control

## Pulse-Echo Principles

### Time-of-Flight Measurement

Distance calculation is fundamental to ultrasound imaging:

- **Formula**: d = ct/2, where d is depth, c is speed, t is round-trip time
- **Speed assumption**: System assumes 1540 m/s regardless of tissue
- **Range equation**: Determines maximum imaging depth
- **Pulse repetition frequency**: PRF = 77,000/depth (Hz)

### Pulse Characteristics

#### Pulse Duration
- **Definition**: Time for one pulse to occur
- **Formula**: PD = n × T, where n is cycles and T is period
- **Typical values**: 2-4 cycles for diagnostic ultrasound
- **Relationship**: Shorter pulses improve axial resolution

#### Pulse Repetition Period
- **Definition**: Time between successive pulses
- **Formula**: PRP = 1/PRF
- **Depth relationship**: Longer PRP for greater imaging depth
- **Duty factor**: PD/PRP, typically {'<'}0.001 for imaging

## Acoustic Interactions

### Reflection and Refraction

#### Specular Reflection
- **Surface reflection**: Smooth surfaces larger than wavelength
- **Angle relationship**: Angle of incidence = angle of reflection
- **Applications**: Organ boundaries, vessel walls
- **Optimal imaging**: Perpendicular beam orientation

#### Scattering
- **Rayleigh scattering**: From structures smaller than wavelength
- **Intensity**: Proportional to f⁴, making higher frequencies scatter more
- **Backscatter**: Scattered energy returned to transducer
- **Tissue characterization**: Provides texture information

#### Refraction
- **Snell's law**: sin θ₁/sin θ₂ = c₁/c₂
- **Conditions**: Oblique incidence at boundary with different speeds
- **Artifacts**: Causes edge shadowing and duplicate images
- **Compensation**: Automatic corrections in modern systems

### Attenuation

Sound energy is lost as ultrasound propagates through tissue:

- **Absorption**: Conversion of sound to heat
- **Scattering**: Deflection of sound energy
- **Formula**: I = I₀e^(-αfz), where α is attenuation coefficient
- **Tissue values**: Muscle ~1.0 dB/cm/MHz, liver ~0.5 dB/cm/MHz

## Image Formation

### B-Mode Imaging

Brightness mode imaging forms the foundation of ultrasound:

- **Amplitude mapping**: Echo amplitude determines pixel brightness
- **Time mapping**: Echo arrival time determines pixel depth
- **Scan conversion**: Converts polar coordinates to rectangular display
- **Dynamic range**: Typically 60-80 dB compressed to 256 gray levels

### Spatial Resolution

#### Axial Resolution
- **Definition**: Ability to resolve structures along beam axis
- **Formula**: λ/2, where λ is wavelength
- **Improvement**: Higher frequency, shorter pulses
- **Typical values**: 0.5-1.0 mm in clinical systems

#### Lateral Resolution
- **Definition**: Ability to resolve structures perpendicular to beam
- **Dependence**: Beam width at focal zone
- **Improvement**: Focusing, higher frequency
- **Variation**: Changes with depth

#### Elevational Resolution
- **Definition**: Resolution in third dimension (slice thickness)
- **Dependence**: Focusing in elevational direction
- **Effect**: Affects speckle pattern and contrast
- **Optimization**: 1.5D or 2D array elements

## Doppler Principles

### Doppler Effect

The Doppler effect measures motion using frequency shifts:

- **Principle**: Moving reflectors cause frequency shifts
- **Formula**: Δf = 2f₀v cos θ/c, where v is velocity, θ is angle
- **Clinical significance**: Blood flow velocity measurement
- **Direction**: Positive for flow toward transducer

### Continuous Wave (CW) Doppler

- **Configuration**: Separate transmit and receive elements
- **Advantage**: No velocity limit (aliasing-free)
- **Disadvantage**: No range specificity
- **Applications**: High-velocity flows (cardiac, vascular)

### Pulsed Wave (PW) Doppler

- **Configuration**: Same element for transmit and receive
- **Advantage**: Range specificity (sample volume)
- **Disadvantage**: Velocity aliasing possible
- **Nyquist limit**: vmax = PRF × λ/2

### Color Doppler

- **Principle**: Maps Doppler velocities to color scale
- **Information**: Flow direction and relative velocity
- **Limitations**: Aliasing, angle dependence
- **Applications**: Flow detection, direction assessment

### Power Doppler

- **Principle**: Displays Doppler signal power rather than velocity
- **Advantages**: Angle-independent, more sensitive to slow flow
- **Disadvantages**: No directional information
- **Applications**: Organ perfusion assessment

## Imaging Modes and Techniques

### Harmonic Imaging

- **Principle**: Uses nonlinear propagation to generate harmonics
- **Advantages**: Improved contrast, reduced artifacts
- **Mechanism**: Tissue and contrast agents generate second harmonic
- **Implementation**: Transmit fundamental, receive harmonic

### Contrast-Enhanced Ultrasound

- **Agents**: Microbubble suspensions (definity, optison)
- **Mechanism**: Nonlinear oscillation of bubbles
- **Applications**: Perfusion imaging, lesion characterization
- **Safety**: Generally safe with appropriate protocols

### Elastography

- **Principle**: Measures tissue stiffness to differentiate pathology
- **Types**: Strain elastography, shear wave elastography
- **Applications**: Liver fibrosis, breast lesions
- **Quantification**: Shear modulus in kPa

## Technical Parameters

### Frequency Selection

- **Resolution vs. Penetration**: Higher frequency = better resolution but less penetration
- **Tissue type**: High frequency for superficial, low frequency for deep
- **Common frequencies**:
  - Superficial: 7-15 MHz
  - Abdominal: 2-5 MHz
  - Cardiac: 2-4 MHz
- **Adjustment**: Tissue harmonic imaging at half transmit frequency

### Gain and Compensation

#### Time Gain Compensation (TGC)
- **Purpose**: Compensate for depth-dependent attenuation
- **Function**: Amplifier gain increases with depth
- **Control**: Usually multiple slider controls
- **Optimization**: Maintain uniform appearance throughout image

#### Overall Gain
- **Purpose**: Global amplification adjustment
- **Effect**: Affects entire image brightness
- **Optimization**: Adjust to optimize target structure visibility
- **Caution**: Excessive gain increases noise

### Dynamic Range and Compression

- **Dynamic range**: Range of echo amplitudes in raw data
- **Log compression**: Compresses data to display range
- **Compression ratio**: Typically 60-80 dB to 0-40 dB
- **Effects**: Affects contrast and appearance

## Artifacts and Limitations

### Common Artifacts

#### Reverberation
- **Cause**: Multiple reflections between transducer and strong reflector
- **Appearance**: Equally spaced parallel lines
- **Location**: Near strong reflectors (diaphragm, bowel gas)
- **Reduction**: Change acoustic window

#### Side Lobe
- **Cause**: Energy from side lobes of beam profile
- **Appearance**: Duplicate of strong reflector
- **Location**: Laterally displaced from true structure
- **Reduction**: Tissue harmonics, spatial compounding

#### Shadowing
- **Cause**: High attenuation or reflection at interface
- **Appearance**: Anechoic region distal to structure
- **Location**: Behind calcifications, gas, metallic objects
- **Significance**: Indicates high attenuation

#### Enhancement
- **Cause**: Low attenuation structure
- **Appearance**: Hyperechoic region distal to structure
- **Location**: Behind fluid-filled structures
- **Significance**: Indicates low attenuation

Ultrasound physics encompasses a wide range of acoustic principles that are essential for understanding image formation, optimizing acquisition parameters, and recognizing artifacts. Mastery of these principles enables better diagnostic capability and image quality.