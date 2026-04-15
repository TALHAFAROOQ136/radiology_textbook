---
id: electricity-magnetism-and-electromagnetism
title: "Electricity, Magnetism, and Electromagnetism"
sidebar_label: "Electricity, Magnetism, and Electromagnetism"
---

# Electricity, Magnetism, and Electromagnetism

The principles of electricity, magnetism, and electromagnetism are central to the operation of X-ray tubes, MRI scanners, and other imaging equipment.

## Electricity

### Electric Charge
- Two types: **positive** (+) and **negative** (−)
- Like charges repel; opposite charges attract
- Unit: **Coulomb (C)**
- Electron charge: −1.6 × 10⁻¹⁹ C

### Electric Current
- Flow of electric charge (electrons) through a conductor
- Unit: **Ampere (A)** = 1 Coulomb per second
- In X-ray tubes: **milliamperes (mA)** control the number of electrons (and thus X-ray quantity)

### Voltage (Potential Difference)
- Energy per unit charge driving current flow
- Unit: **Volt (V)**
- In X-ray tubes: **kilovoltage peak (kVp)** determines electron energy (and thus X-ray quality/penetration)

### Ohm's Law
**V = I × R**
- V = voltage (volts)
- I = current (amperes)
- R = resistance (ohms, Ω)

### Power
**P = V × I** (watts)

In X-ray equipment: Power = kV × mA (kilowatts)

## Types of Current

| Type | Description | Use in Radiology |
|---|---|---|
| **DC** (Direct Current) | Flows in one direction | X-ray tube operation |
| **AC** (Alternating Current) | Direction reverses periodically | Power supply to equipment |

Transformers in X-ray generators convert AC mains supply to the high DC voltage needed for X-ray production.

## Magnetism

### Magnetic Fields
- Created by moving electric charges (current) or permanent magnets
- Described by field lines from north to south pole
- Unit of field strength: **Tesla (T)** or Gauss (1 T = 10,000 G)

### Magnetic Field Strengths in MRI

| System | Field Strength |
|---|---|
| Earth's magnetic field | ~0.00005 T (0.5 G) |
| Low-field open MRI | 0.2–0.5 T |
| Standard clinical MRI | 1.5 T |
| High-field clinical MRI | 3.0 T |
| Research MRI | 7.0 T+ |

### Ferromagnetic, Paramagnetic, Diamagnetic Materials

| Type | Behavior in Magnetic Field | Examples |
|---|---|---|
| Ferromagnetic | Strongly attracted | Iron, nickel, cobalt — MRI hazard |
| Paramagnetic | Weakly attracted | Gadolinium (MRI contrast) |
| Diamagnetic | Weakly repelled | Water, most tissue |

## Electromagnetism

### Electromagnetic Induction (Faraday's Law)
A changing magnetic field induces an electric current in a conductor:
- Basis of **transformers** (step-up/step-down voltage)
- Basis of **MRI gradient coils** (spatial encoding)

### Transformers
Used in X-ray generators to:
- **Step up** voltage (low → high kV for X-ray production)
- **Step down** voltage (for filament heating circuit)
- **Isolate** circuits for safety

**Transformer equation**: V₁/V₂ = N₁/N₂
(V = voltage, N = number of turns in coil)

### Larmor Precession (MRI)

In MRI, hydrogen nuclei (protons) precess around the static magnetic field B₀ at the **Larmor frequency**:

**ω₀ = γ × B₀**

- γ (gyromagnetic ratio for ¹H) = 42.58 MHz/T
- At 1.5 T: ω₀ ≈ 63.87 MHz
- At 3.0 T: ω₀ ≈ 127.74 MHz

RF pulses at this frequency cause resonance — the basis of MRI signal generation.

## Summary: Electrical Parameters in X-ray Imaging

| Parameter | Unit | Controls |
|---|---|---|
| kVp | kilovolt peak | Beam energy (quality), contrast |
| mA | milliampere | Electron flow (quantity), dose rate |
| mAs | milliampere-second | Total exposure, image density |
| Exposure time | seconds | Motion blur risk |
