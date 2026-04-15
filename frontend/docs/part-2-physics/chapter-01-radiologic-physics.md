---
id: chapter-01-radiologic-physics
title: "Chapter 1: Radiologic Physics"
sidebar_label: "Chapter 1: Radiologic Physics"
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
| Gamma rays | &lt; 0.001 nm | &gt; 100 keV | Nuclear medicine (PET, SPECT) |

**Key equation**: E = hf = hc/λ  
where h = 6.626 × 10⁻³⁴ J·s (Planck's constant), f = frequency, c = speed of light, λ = wavelength.

---

## Interactions of X-rays with Matter

When X-rays pass through tissue, five fundamental interactions occur:

### 1. Coherent (Rayleigh) Scattering
- **Energy range**: Low energy (&lt; 30 keV)
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
- **Energy threshold**: &gt; 1.022 MeV
- **Process**: Photon converts to an electron–positron pair near a nucleus
- **Relevance**: Not significant in diagnostic X-ray imaging; important in PET (511 keV annihilation photons)

### 5. Photodisintegration
- **Energy threshold**: &gt; 7 MeV
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

### Half-Value Layer (HVL)

HVL = 0.693 / μ

HVL is used clinically to characterize beam quality and assess shielding requirements.

---

## Radiation Dosimetry

| Quantity | Unit | Definition |
|---|---|---|
| **Absorbed dose** | Gray (Gy = J/kg) | Energy deposited per unit mass |
| **Equivalent dose** | Sievert (Sv) | Absorbed dose × radiation weighting factor |
| **Effective dose** | Sievert (Sv) | Equivalent dose × tissue weighting factor |

### Typical Effective Doses

| Examination | Effective Dose |
|---|---|
| Chest X-ray | ~0.02 mSv |
| Chest CT | ~7 mSv |
| Abdomen CT | ~10 mSv |
| Annual background | ~3 mSv |

---

## Summary: Physics Across Modalities

| Modality | Energy Type | Ionizing | Key Principle |
|---|---|---|---|
| X-ray / Fluoroscopy | X-rays (keV) | Yes | Differential attenuation |
| CT | X-rays (keV) | Yes | Radon transform reconstruction |
| Nuclear Medicine (SPECT) | Gamma rays | Yes | Gamma camera detection |
| PET | 511 keV gamma | Yes | Coincidence detection |
| MRI | Radiofrequency | No | Nuclear magnetic resonance |
| Ultrasound | Sound waves | No | Pulse-echo / Doppler |
