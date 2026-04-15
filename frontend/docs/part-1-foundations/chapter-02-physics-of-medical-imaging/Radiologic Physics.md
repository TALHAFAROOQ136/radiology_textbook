---
id: radiologic-physics
title: "Radiologic Physics"
sidebar_label: "Radiologic Physics"
---

# Radiologic Physics

Radiologic physics is the branch of physics that underpins all diagnostic and therapeutic imaging modalities. It encompasses the nature of electromagnetic radiation, its interactions with matter, and the principles of energy transfer that make medical imaging possible.

## The Electromagnetic Spectrum

All major imaging modalities except ultrasound use electromagnetic (EM) radiation:

| Region | Wavelength | Energy | Medical Use |
|---|---|---|---|
| Radiofrequency | 1 m – 1 mm | µeV | MRI |
| Infrared | 1 mm – 700 nm | meV | Thermography |
| Visible light | 700 – 400 nm | ~2 eV | Endoscopy, microscopy |
| Ultraviolet | 400 – 10 nm | 3–120 eV | — |
| X-rays | 10 nm – 0.001 nm | 0.1–120 keV | Radiography, CT, fluoroscopy |
| Gamma rays | < 0.001 nm | > 100 keV | Nuclear medicine (PET, SPECT) |

**Key equation**: E = hf = hc/λ  
where h = 6.626 × 10⁻³⁴ J·s (Planck's constant), f = frequency, c = speed of light, λ = wavelength.

---

## Interactions of X-rays with Matter

When X-rays pass through tissue, five fundamental interactions occur:

### 1. Coherent (Rayleigh) Scattering
- **Energy range**: Low energy (< 30 keV)
- **Process**: Photon excites an atom, which re-emits a photon of the **same energy** in a different direction
- **Imaging effect**: Contributes to background scatter; no energy deposited
- **Clinical relevance**: Minor contribution in diagnostic imaging

### 2. Photoelectric Effect
- **Energy range**: Dominant at low energies (20–70 keV in soft tissue)
- **Process**: Incoming photon ejects an inner-shell electron; photon is completely absorbed
- **Probability**: Proportional to Z³/E³ (atomic number cubed, energy cubed inverse)
- **Imaging importance**: Creates contrast between bone (high Z) and soft tissue; basis of differential absorption
- **Dose implication**: Entire photon energy deposited — higher dose contribution

### 3. Compton Scattering
- **Energy range**: Dominant at diagnostic energies (40–150 keV)
- **Process**: Photon ejects an outer-shell (free) electron; scattered photon continues at lower energy
- **Probability**: Proportional to electron density (nearly equal in all soft tissues)
- **Imaging importance**: Primary source of scatter radiation; degrades image contrast
- **Dose implication**: Partial energy deposition; scattered photon increases patient dose

### 4. Pair Production
- **Energy threshold**: > 1.022 MeV
- **Process**: Photon converts to an electron–positron pair near a nucleus
- **Relevance**: Not significant in diagnostic X-ray imaging; important in PET (511 keV annihilation photons)

### 5. Photodisintegration
- **Energy threshold**: > 7 MeV
- **Process**: Photon absorbed by nucleus, ejecting a nucleon
- **Relevance**: Occurs only in high-energy radiotherapy; not relevant in diagnostic imaging

---

## Attenuation of X-rays

As an X-ray beam passes through matter, its intensity decreases — this is called **attenuation**.

### Beer-Lambert Law (Monoenergetic beam)

I = I₀ × e^(−μx)

- **I₀**: Incident intensity
- **I**: Transmitted intensity
- **μ**: Linear attenuation coefficient (cm⁻¹)
- **x**: Thickness of material (cm)

### Linear Attenuation Coefficient (μ)

Depends on:
- **Photon energy**: Lower energy → higher attenuation
- **Atomic number (Z)**: Higher Z → higher attenuation (photoelectric effect dominates)
- **Physical density (ρ)**: Higher density → higher attenuation

### Half-Value Layer (HVL)

The HVL is the thickness of material that reduces beam intensity by half:

HVL = 0.693 / μ

HVL is used clinically to characterize beam quality and assess shielding requirements.

### Mass Attenuation Coefficient (μ/ρ)

Normalizes for density; useful for comparing materials (units: cm²/g).

---

## Radioactivity and Nuclear Physics

### Radioactive Decay Law

N(t) = N₀ × e^(−λt)

- **N₀**: Initial number of radioactive atoms
- **λ**: Decay constant (probability of decay per unit time)
- **Activity**: A = λN, measured in Becquerels (Bq) or Curies (Ci)
  - 1 Ci = 3.7 × 10¹⁰ Bq

### Half-Life (T₁/₂)

T₁/₂ = ln2 / λ ≈ 0.693 / λ

**Effective half-life** in vivo accounts for both physical decay and biological elimination:

1/T_eff = 1/T_phys + 1/T_biol

---

## Radiation Dosimetry

### Key Quantities

| Quantity | Unit | Definition |
|---|---|---|
| **Exposure** | C/kg (R) | Ionization in air |
| **Absorbed dose** | Gray (Gy = J/kg) | Energy deposited per unit mass |
| **Equivalent dose** | Sievert (Sv) | Absorbed dose × radiation weighting factor (W_R) |
| **Effective dose** | Sievert (Sv) | Equivalent dose × tissue weighting factor (W_T) |

### Radiation Weighting Factors (W_R)

| Radiation type | W_R |
|---|---|
| X-rays, gamma rays, electrons | 1 |
| Protons | 2 |
| Alpha particles | 20 |
| Neutrons | 5–20 (energy dependent) |

### Typical Effective Doses

| Examination | Effective Dose |
|---|---|
| Chest X-ray | ~0.02 mSv |
| Chest CT | ~7 mSv |
| Abdomen CT | ~10 mSv |
| FDG PET/CT | ~14 mSv |
| Annual background | ~3 mSv |

---

## MRI Physics (Overview)

MRI uses **radiofrequency (RF) electromagnetic radiation** in a strong static magnetic field — no ionizing radiation.

- **Larmor frequency**: ω₀ = γB₀  
  (γ = 42.58 MHz/T for ¹H; at 1.5T → 63.87 MHz; at 3T → 127.74 MHz)
- **Relaxation**: T1 (longitudinal recovery), T2 (transverse decay), T2* (with field inhomogeneities)
- **Spatial encoding**: Slice selection, frequency encoding, and phase encoding gradients

> For full detail, see [MRI Physics and Signal Generation](./MRI%20physics%20and%20signal%20generation).

---

## Ultrasound Physics (Overview)

Ultrasound uses **mechanical (acoustic) waves** — no electromagnetic radiation, no ionizing radiation.

- **Speed in soft tissue**: ~1540 m/s
- **Acoustic impedance**: Z = ρc; reflections occur at impedance mismatches
- **Attenuation**: ~0.5 dB/cm/MHz in soft tissue
- **Doppler effect**: Δf = 2f₀v cosθ / c — used for blood flow measurement

> For full detail, see [Ultrasound Physics and Doppler Principles](./Ultrasound%20physics%20and%20Doppler%20principles).

---

## Summary: Physics Comparison Across Modalities

| Modality | Energy Type | Ionizing | Key Physics Principle |
|---|---|---|---|
| X-ray / Fluoroscopy | X-rays (keV) | Yes | Differential attenuation |
| CT | X-rays (keV) | Yes | Radon transform reconstruction |
| Mammography | Low-energy X-rays | Yes | Photoelectric contrast |
| Nuclear Medicine (SPECT) | Gamma rays | Yes | Gamma camera detection |
| PET | 511 keV gamma (annihilation) | Yes | Coincidence detection |
| MRI | Radiofrequency | No | Nuclear magnetic resonance |
| Ultrasound | Sound waves | No | Pulse-echo / Doppler |

Understanding radiologic physics across all these modalities is foundational to optimizing image quality, minimizing patient dose, and ensuring safety in clinical practice.
