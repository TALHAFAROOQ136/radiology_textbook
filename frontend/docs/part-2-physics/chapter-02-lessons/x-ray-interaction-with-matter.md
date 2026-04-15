---
id: x-ray-interaction-with-matter
title: "X-ray Interaction with Matter"
sidebar_label: "X-ray Interaction with Matter"
---

# X-ray Interaction with Matter

When X-rays pass through matter, they interact with atoms through several mechanisms. These interactions determine how much radiation is absorbed, scattered, or transmitted — which is the basis of all X-ray image formation.

## Five Interactions of X-rays with Matter

### 1. Coherent (Rayleigh/Classical) Scattering

**Energy range**: Low energy (&lt;30 keV)

**Process**:
- Incident photon excites an atom as a whole
- Atom re-emits a photon of the **same energy** in a slightly different direction
- No energy is transferred to the atom

**Imaging significance**:
- Minor contribution to scatter in diagnostic imaging
- No ionisation; no dose deposited
- Not clinically significant at typical diagnostic energies

---

### 2. Photoelectric Effect

**Energy range**: Dominant at 20–70 keV (diagnostic range)

**Process**:
1. Incident photon is completely absorbed by an inner-shell (K or L) electron
2. Electron is ejected as a **photoelectron**
3. Outer-shell electron fills the vacancy → characteristic X-ray emitted
4. Photon energy must exceed the shell binding energy

**Probability**: Proportional to **Z³ / E³**
- Strongly favoured by high atomic number and low photon energy

**Imaging significance**:
- Primary basis of **radiographic contrast** (bone vs. soft tissue)
- Entire photon energy deposited → **highest patient dose** contribution
- Basis for contrast media effectiveness (iodine Z=53, barium Z=56)

---

### 3. Compton Scattering (Incoherent Scattering)

**Energy range**: Dominant at 40–150 keV (main interaction in diagnostic imaging)

**Process**:
1. Incident photon interacts with an outer-shell (free) electron
2. Photon transfers part of its energy to the electron (**recoil electron**)
3. Photon continues in a new direction with **reduced energy**

**Probability**: Proportional to **electron density** (nearly equal for all soft tissues)

**Imaging significance**:
- Primary source of **scatter radiation** — degrades image contrast
- Reduced by collimation, grids, and compression
- Partial energy deposition contributes to patient dose
- Does **not** contribute to diagnostic image information

**Compton scatter angle and energy**: Scattered photon energy decreases as scatter angle increases (180° backscatter → maximum energy loss)

---

### 4. Pair Production

**Energy threshold**: &gt;1.022 MeV

**Process**:
1. High-energy photon interacts with the nuclear electric field
2. Photon is converted into an **electron-positron pair**
3. Positron annihilates with nearby electron → two 511 keV photons emitted at 180°

**Imaging significance**:
- Not relevant in diagnostic X-ray imaging (energies too low)
- Important in **PET scanning**: positron emission produces 511 keV annihilation photons detected in coincidence

---

### 5. Photodisintegration

**Energy threshold**: &gt;7 MeV

**Process**:
- Very high-energy photon absorbed by nucleus
- Nucleus ejects a neutron or other nuclear fragment

**Imaging significance**:
- Only occurs in high-energy radiotherapy (linear accelerators)
- Not relevant in diagnostic radiology

---

## Summary Table

| Interaction | Energy Range | Result | Imaging Relevance |
|---|---|---|---|
| Coherent scatter | &lt;30 keV | Photon redirected, no energy loss | Minimal |
| Photoelectric effect | 20–70 keV | Photon absorbed, electron ejected | Primary contrast mechanism |
| Compton scatter | 40–150 keV | Photon scattered, energy reduced | Main source of scatter/noise |
| Pair production | &gt;1.022 MeV | Electron-positron pair | PET only |
| Photodisintegration | &gt;7 MeV | Nuclear fragmentation | Radiotherapy only |

## Attenuation

The combined effect of all interactions reduces beam intensity — this is **attenuation**:

**I = I₀ × e^(−μx)**

- **μ** = linear attenuation coefficient (depends on Z, density, energy)
- Higher Z and density → more attenuation → appears white on X-ray
- Lower Z and density → less attenuation → appears dark on X-ray

### Attenuation by tissue type:

| Tissue | Dominant Interaction | Appearance |
|---|---|---|
| Air / Lung | Compton (minimal) | Black |
| Fat | Compton | Dark grey |
| Soft tissue | Compton | Grey |
| Bone | Photoelectric + Compton | White |
| Iodine/Barium contrast | Photoelectric | Bright white |
