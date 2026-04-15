---
id: cellular-radiobiology
title: "Cellular Radiobiology"
sidebar_label: "Cellular Radiobiology"
---

# Cellular Radiobiology

Cellular radiobiology examines how ionising radiation affects individual cells — their survival, reproduction, and function. This knowledge is fundamental to understanding tissue responses and forms the scientific basis of radiotherapy.

## Cell Death from Radiation

Radiation can kill cells through several mechanisms:

### Mitotic (Reproductive) Death
- Cell receives lethal damage but does not die immediately
- Cell attempts to divide at mitosis → fails to complete division
- Death occurs at mitosis (may survive 1–2 divisions first)
- Most common mode of radiation-induced cell death
- Relevant to rapidly dividing cells (tumour cells, bone marrow, gut epithelium)

### Apoptosis (Programmed Cell Death)
- Active, energy-dependent process of cell self-destruction
- Occurs rapidly (hours) without attempting division
- Characteristic morphology: chromatin condensation, membrane blebbing, apoptotic bodies
- Most prominent in: lymphocytes, spermatogonia, thymocytes
- Triggered by p53 activation when DNA damage is irreparable

### Necrosis
- Passive, uncontrolled cell death from massive damage
- Cell swelling, membrane rupture, inflammation
- Occurs at very high doses
- Not the primary mode at diagnostic/therapeutic doses

### Interphase Death
- Cell dies without attempting division
- Seen in highly radiosensitive cells (lymphocytes) even at low doses
- Due to rapid apoptosis response

---

## Cell Survival Curves

Graphical representation of the fraction of cells surviving after various radiation doses.

### Plotting Convention
- X-axis: Radiation dose (Gy)
- Y-axis: Surviving fraction (logarithmic scale)

### Single-Hit, Single-Target Model (Exponential)
For high-LET radiation and simple organisms:
- **S = e^(−D/D₀)**
- Straight line on semi-log plot
- D₀ = mean lethal dose (dose reducing survival to 37%)

### Multi-Hit, Single-Target Model
For mammalian cells with X-rays:
- **Shoulder** at low doses: sublethal damage accumulates before lethal hit
- **Exponential** at higher doses
- Characterised by: D₀, Dq (quasi-threshold dose), n (extrapolation number)

### Linear-Quadratic (LQ) Model
Most widely used model in radiotherapy:

**S = e^(−αD − βD²)**

- **α component**: Single-hit killing (linear with dose)
- **β component**: Two-hit killing (quadratic with dose)
- **α/β ratio**: Dose at which α and β components are equal

**α/β ratio clinical significance**:
| Tissue Type | α/β Ratio | Response |
|---|---|---|
| Acutely responding (tumour, gut) | ~10 Gy | Sensitive to dose per fraction |
| Late-responding (CNS, kidney) | ~3 Gy | Sensitive to total dose; spared by small fractions |
| Prostate cancer | ~1.5–3 Gy | Low α/β — benefits from hypofractionation |

---

## The Cell Cycle and Radiosensitivity

### Cell Cycle Phases
| Phase | Activity | Radiosensitivity |
|---|---|---|
| G1 | Growth, RNA/protein synthesis | Variable (early G1 resistant; late G1 sensitive) |
| S | DNA synthesis | Most resistant (especially mid-S) |
| G2 | Preparation for mitosis | Sensitive |
| M | Mitosis (cell division) | Most sensitive |

### Cell Cycle Checkpoints
Radiation activates checkpoints to halt cell cycle and allow repair:
- **G1/S checkpoint**: p53-mediated; prevents replication of damaged DNA
- **S-phase checkpoint**: Slows replication
- **G2/M checkpoint**: Prevents mitosis of cells with unrepaired DSBs

Checkpoint failure → cells enter mitosis with unrepaired damage → mitotic catastrophe → cell death or chromosomal instability.

---

## Sublethal and Potentially Lethal Damage

### Sublethal Damage (SLD)
- Damage that alone is not lethal but can combine with additional SLD to cause death
- Repaired within hours (half-time ~1 hour)
- Basis of **fractionation effect**: splitting dose allows SLD repair between fractions

**SLD Repair (SLDR)**:
- Demonstrated by split-dose experiments
- Surviving fraction increases as time between two doses increases
- Repair complete within ~6–24 hours

### Potentially Lethal Damage (PLD)
- Damage that would be lethal under normal post-irradiation conditions
- Can be repaired if cells are held in suboptimal growth conditions after irradiation
- More relevant in post-mitotic or plateau-phase cells
- **PLDR** relevant in solid tumour radiobiology

---

## Dose-Rate Effect

The biological effect of radiation depends on how quickly the dose is delivered:

| Dose Rate | Effect |
|---|---|
| High dose rate | More cell killing (less time for repair) |
| Low dose rate | Less cell killing per unit dose (repair occurs during exposure) |
| Ultra-low dose rate | May allow full repair → minimal effect |

**Practical application**:
- Brachytherapy (internal radiotherapy) exploits dose-rate effect
- High-dose-rate (HDR) vs low-dose-rate (LDR) brachytherapy — different biological effects

---

## Radiation and the Cell Membrane

### Membrane Effects
- Radiation can damage lipid bilayer via peroxidation
- Membrane damage activates ceramide pathway → apoptosis
- Particularly relevant for radiation of large volumes

### Ceramide Pathway
- Membrane sphingomyelin cleaved by sphingomyelinase → ceramide
- Ceramide acts as second messenger activating apoptosis
- Important in endothelial cell radiation response

---

## Bystander Effect

Irradiated cells signal damage to neighbouring unirradiated cells:
- Mediated by: gap junctions, exosomes, cytokines (TGF-β, IL-8), reactive oxygen species
- Unirradiated bystander cells show: DNA damage (γ-H2AX foci), mutations, apoptosis
- Complicates risk estimation at low doses
- May contribute to abscopal effect in radiotherapy

---

## Summary: Key Cellular Radiobiology Parameters

| Parameter | Definition | Typical Value |
|---|---|---|
| D₀ | Dose reducing survival to 37% | ~1–2 Gy (mammalian cells) |
| α/β ratio | LQ model parameter | ~10 Gy (acute); ~3 Gy (late) |
| Dq | Quasi-threshold dose (shoulder) | ~1–2 Gy |
| Half-time of repair | Time for 50% SLD repair | ~0.5–2 hours |
