---
id: fundamental-principles-of-radiobiology
title: "Fundamentals of Radiobiology"
sidebar_label: "Fundamentals of Radiobiology"
---

# Fundamental Principles of Radiobiology

Radiobiology is built on a set of core principles that govern how radiation interacts with biological systems. These principles underpin radiation protection, radiotherapy, and diagnostic imaging safety.

## Principle 1: Ionisation is the Primary Event

Ionising radiation deposits energy in tissue by creating ion pairs:
- X-rays and gamma rays eject electrons from atoms (photoelectric, Compton)
- Each ion pair requires ~33 eV of energy
- A single diagnostic X-ray photon (~60 keV) can create ~1,800 ion pairs
- These ion pairs initiate chemical reactions that damage biological molecules

---

## Principle 2: Water Radiolysis — The Indirect Effect

Since the body is ~70% water, most radiation damage occurs via water radiolysis:

**Reaction sequence**:
1. H₂O + radiation → H₂O⁺ + e⁻
2. H₂O⁺ → H· + OH·
3. OH· (hydroxyl radical) attacks DNA and other molecules

**Hydroxyl radical (OH·)**:
- Extremely reactive; half-life ~10⁻⁹ seconds
- Responsible for ~60–70% of radiation-induced DNA damage
- Can be scavenged by radioprotectors (e.g., aminothiols)
- Enhanced by oxygen (oxygen effect)

---

## Principle 3: DNA is the Critical Target

Among all cellular molecules, DNA is the primary radiation target:
- Loss of other molecules is tolerable (can be resynthesised)
- DNA damage is irreplaceable if repair fails
- Double-strand breaks (DSBs) are the most critical lesion
- ~1,000–2,000 SSBs and ~40 DSBs per cell per Gray of X-rays

---

## Principle 4: The Oxygen Effect

Oxygen profoundly modifies radiation sensitivity:

**Oxygen Enhancement Ratio (OER)**:
- OER = dose under hypoxia to produce same effect as dose under normoxia
- For X-rays: OER ≈ 2.5–3.0
- Oxygen "fixes" radiation damage — makes it permanent

**Why oxygen enhances radiation damage**:
- Oxygen reacts with radiation-induced free radicals → peroxyl radicals (more stable, harder to repair)
- Hypoxic cells ~2.5–3× more radioresistant than well-oxygenated cells

**Clinical relevance**:
- Tumour hypoxia is a major cause of radiotherapy resistance
- Hyperbaric oxygen, radiosensitisers used to overcome hypoxia

---

## Principle 5: Linear Energy Transfer (LET)

LET describes how densely radiation deposits energy along its track:

| Radiation | LET | OER | Relative Biological Effectiveness |
|---|---|---|---|
| X-rays / gamma rays | Low (~2 keV/µm) | ~3 | 1 |
| Protons | Intermediate | ~1.5 | ~1–2 |
| Alpha particles | High (~100 keV/µm) | ~1 | ~20 |
| Neutrons | High | ~1.5 | ~10 |

**High-LET radiation**:
- Produces dense ionisation tracks
- More DSBs per track; harder to repair
- Less dependent on oxygen (lower OER)
- Higher biological effectiveness per unit dose

---

## Principle 6: Relative Biological Effectiveness (RBE)

RBE compares the biological effectiveness of a test radiation to reference X-rays:

**RBE = dose of reference radiation / dose of test radiation (same biological effect)**

- X-rays and gamma rays: RBE = 1 (reference)
- Alpha particles: RBE ≈ 20
- Neutrons: RBE ≈ 10

RBE is incorporated into **radiation weighting factors (W_R)** used in dosimetry.

---

## Principle 7: Dose-Response Relationships

### Linear (No-Threshold) Model
- Risk proportional to dose at all levels
- Used for stochastic effects (cancer, hereditary)
- Conservative model for radiation protection

### Threshold Model
- No effect below a threshold dose
- Used for deterministic effects (tissue reactions)

### Linear-Quadratic (LQ) Model
- Used in radiotherapy to model cell survival
- S = e^(−αD − βD²)
- α/β ratio describes tissue response to fractionation

---

## Principle 8: Time, Dose, and Fractionation

Radiobiological response depends on:
- **Total dose**: More damage with higher total dose
- **Dose rate**: Higher dose rate → more damage (less time for repair)
- **Fractionation**: Dividing dose into fractions spares normal tissue (repair between fractions)

**The 4 Rs of Radiobiology** (in fractionated radiotherapy):
| R | Effect |
|---|---|
| Repair | Normal tissue repairs sublethal damage |
| Reassortment | Tumour cells redistribute to sensitive phases |
| Repopulation | Both normal and tumour cells repopulate |
| Reoxygenation | Hypoxic tumour cells become oxygenated |

---

## Principle 9: Stochastic vs Deterministic Effects

| Feature | Stochastic | Deterministic |
|---|---|---|
| Threshold | None | Yes |
| Dose-response | Probabilistic | Severity increases above threshold |
| Examples | Cancer, hereditary effects | Erythema, cataract, sterility |
| Radiation protection | Minimise probability | Keep below threshold |

---

## Principle 10: ALARA

**As Low As Reasonably Achievable** — the operational principle of radiation protection:
- **Justification**: Every exposure must have a net benefit
- **Optimisation**: Doses kept as low as reasonably achievable
- **Dose limits**: Regulatory limits for workers and public

These three principles (justification, optimisation, limitation) form the framework of the ICRP system of radiological protection.
