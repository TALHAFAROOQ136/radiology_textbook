---
id: designing-for-radiation-protection
title: "Radiation Protection Design"
sidebar_label: "Radiation Protection Design"
---

# Designing for Radiation Protection

The design of radiological facilities — including X-ray rooms, CT suites, fluoroscopy rooms, and nuclear medicine departments — must incorporate adequate radiation shielding to protect workers, patients, and the public. Good design prevents excessive occupational and public exposures at minimal cost.

## Principles of Facility Design

### Plan Early
- Shielding requirements must be considered at the architectural design stage
- Retrofitting shielding is expensive and disruptive
- Radiation Protection Adviser (RPA) must be involved from the outset

### Define Areas
| Area | Definition | Requirements |
|---|---|---|
| Controlled area | Where doses may exceed 6 mSv/year | Restricted access; dosimetry for workers |
| Supervised area | Where doses may exceed 1 mSv/year | Monitored; appropriate instructions |
| Uncontrolled area | Public areas; dose &lt;1 mSv/year | No special requirements |

---

## Sources of Radiation in X-ray Rooms

### Primary Radiation
- Useful beam directed at patient
- Highest intensity; most penetrating
- Direction determined by beam orientation
- Hits: floor (table work), walls in beam direction

### Scatter Radiation
- X-rays scattered from patient in all directions
- Lower intensity than primary (~0.1% at 90°)
- Main source of dose to staff in room

### Leakage Radiation
- X-rays escaping through tube housing in non-beam directions
- Regulatory limit: &lt;1 mGy/hour at 1 metre
- Contributes to secondary barrier requirements

---

## Shielding Materials

| Material | Properties | Use |
|---|---|---|
| Lead (Pb) | High Z, dense, flexible | Aprons, gloves, barriers, lining walls |
| Concrete | Structural and shielding | Walls, floors, ceilings |
| Barium plaster | Applied to existing walls | Upgrade existing shielding |
| Lead glass | Transparent shielding | Observation windows |
| Lead acrylic | Lightweight, clear | Portable shields, screens |
| Steel | Structural; moderate shielding | Door frames, linacs |

### Lead Equivalence
All shielding materials compared to lead thickness:
- 1 mm Pb equivalent absorbs same fraction as 1 mm of lead
- 15 cm concrete ≈ 1.5–2 mm Pb at diagnostic energies

---

## Shielding Design Methodology

### Step 1: Determine Design Goal
- Target dose rate in adjacent areas
- Typically: &lt;0.02 mSv/week (1 mSv/year) for public areas
- &lt;0.1 mSv/week (5 mSv/year) for controlled areas

### Step 2: Calculate Workload (W)
- Total mA·min per week for the X-ray unit
- Based on expected patient throughput and technique

### Step 3: Apply Use Factor (U)
- Fraction of time primary beam directed at each barrier
- Floor: U = 1 (beam always points down for table work)
- Side walls: U = 0.25 (beam directed there 25% of time)
- Ceiling: U = 0–0.25 (depending on beam orientations used)

### Step 4: Apply Occupancy Factor (T)
- Fraction of time an area adjacent to the barrier is occupied
- Office next door: T = 1
- Corridor: T = 0.05–0.2
- Exterior wall (outside): T = 0.05

### Step 5: Calculate Required Shielding
Using transmission factor B:

**B = (P × d²) / (W × U × T)**

Where P = design goal, d = distance from source to point of interest

Required lead thickness calculated from attenuation data for the kVp used.

---

## Primary vs Secondary Barriers

### Primary Barrier
- Intercepts the **useful beam**
- Must withstand full primary beam intensity
- Required thickness: typically 1.5–3 mm Pb (diagnostic X-ray)
- Must extend full width of beam travel + 30 cm margin

### Secondary Barrier
- Intercepts **scatter and leakage** only
- Lower intensity than primary → thinner shielding required
- Walls not in primary beam path are secondary barriers
- Typically 0.5–1.5 mm Pb for diagnostic work

---

## Room-Specific Design Considerations

### General Radiography Room
- Control booth: secondary barrier; glass window with Pb equivalent
- Bucky wall: primary barrier
- Floor: primary barrier (beam directed downward for table work)
- Door: secondary barrier; lead-lined with interlocks

### CT Suite
- Higher workload and scattered radiation than conventional X-ray
- 360° tube rotation → scatter in all directions
- Typically requires 1.5–3 mm Pb for walls
- Control room separated from scanner room

### Fluoroscopy / Interventional Room
- Very high workload (prolonged procedures)
- Significant scatter from patient
- Ceiling shielding may be needed if occupied area above
- Operator protection: ceiling-suspended shield, lead curtain on table

### Mammography Room
- Low energy X-rays (25–35 kVp)
- Rapid attenuation — thinner shielding than general radiography
- Often 0.5–1 mm Pb sufficient
- May not require dedicated control booth in some designs

### Nuclear Medicine
- Unsealed radioactive sources — contamination risk as well as external dose
- Hot lab: thick walls (Tc-99m: 3–6 mm Pb)
- Patient waiting areas: separated from public
- Ventilation: negative pressure in radiopharmacy

---

## Door and Interlock Design

### Maze (Labyrinth) Design
- Angled entrance corridor without a door
- Scatter radiation attenuated by multiple reflections
- Eliminates need for heavy lead-lined door
- Used for: linear accelerators, CT rooms

### Door Interlocks
- Electrical interlock prevents X-ray exposure when door is open
- Audible and visual warnings before and during exposure
- Emergency cut-off accessible from inside the room

---

## Post-Installation Survey

After construction, before clinical use:
- Radiation survey at all barrier surfaces
- Verify dose rates meet design goals
- Measurements at occupied positions in adjacent areas
- Documented by RPA; records retained for life of facility
