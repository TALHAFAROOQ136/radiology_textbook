---
id: chapter-03-radiation-safety
title: "Chapter 3: Radiation Safety and Protection"
sidebar_label: "Ch 3: Radiation Safety"
---

# Chapter 3: Radiation Safety and Protection

## Learning Objectives

By the end of this chapter, students should be able to:
- Explain the biological effects of ionizing radiation on human tissue
- Apply the ALARA principle in clinical imaging decisions
- Calculate and interpret radiation dose measurements
- Identify special considerations for vulnerable populations
- Describe radiation protection measures for healthcare workers
- Explain radiation safety protocols in nuclear medicine
- Counsel patients effectively about radiation risks and benefits
- Respond appropriately to radiation accidents and emergencies

---

## 3.1 Biological Effects of Ionizing Radiation

### Mechanisms of Radiation Injury

Ionizing radiation causes biological damage through two primary mechanisms:

**Direct Effects:**
- Radiation directly strikes critical molecules (primarily DNA)
- Causes single-strand and double-strand breaks in DNA
- Most significant for high-LET radiation (alpha particles, neutrons)

**Indirect Effects (dominant mechanism in diagnostic radiology):**
- Radiation ionizes water molecules (70-80% of cellular content)
- Produces highly reactive free radicals (OH•)
- Free radicals then damage DNA, proteins, and cell membranes
- Responsible for ~70% of X-ray–induced damage

### Types of Radiation Effects

| Effect Type | Characteristics | Threshold |
|-------------|----------------|-----------|
| **Deterministic** | Severity increases with dose; predictable | Yes (threshold dose required) |
| **Stochastic** | Probability increases with dose; no safe threshold | No |

**Deterministic (Tissue Reaction) Effects:**
- Occur when radiation kills enough cells to impair organ function
- Examples: skin erythema, cataracts, hair loss, bone marrow suppression
- Threshold doses: skin erythema ~2 Gy; cataracts ~0.5 Gy (chronic exposure)
- Not relevant at diagnostic imaging doses

**Stochastic Effects:**
- Cancer induction and heritable genetic effects
- No threshold — any dose carries some (very small) risk
- Basis of radiation protection principles
- Risk is proportional to dose (Linear No-Threshold model)

### DNA Damage and Repair

The human body has efficient DNA repair mechanisms:
- Single-strand breaks: repaired within hours using complementary strand as template
- Double-strand breaks: more difficult to repair; may lead to mutations
- Misrepair can result in chromosomal aberrations and potential malignant transformation

### Radiosensitivity of Tissues

**Most Radiosensitive:**
- Bone marrow and blood-forming cells
- Gonads (testes more sensitive than ovaries)
- Lymphoid tissue
- Intestinal crypt cells
- Lens of the eye

**Intermediate Sensitivity:**
- Liver, kidney, thyroid, growing cartilage

**Least Radiosensitive:**
- Muscle, nerve, bone (mature)

> **Clinical Pearl:** The "Law of Bergonié and Tribondeau" states that cells are most radiosensitive when they are rapidly dividing, undifferentiated, and have a long mitotic future. This explains why fetuses, children, and gonads require special protection.

---

## 3.2 ALARA Principle

### Definition and Rationale

**ALARA** = **A**s **L**ow **A**s **R**easonably **A**chievable

The ALARA principle recognizes that:
1. There is no absolutely "safe" dose of radiation (stochastic effects)
2. The benefits of diagnostic imaging almost always outweigh the risks
3. Unnecessary radiation exposure should be avoided

### Three Fundamental Principles of Radiation Protection

#### 1. Justification
- Every exposure must have a net benefit
- The benefit must outweigh the risk
- Clinical question must be answerable by the chosen imaging modality
- Alternative non-ionizing modalities (ultrasound, MRI) should be considered when appropriate

#### 2. Optimization (ALARA)
- Use the lowest dose that provides diagnostic image quality
- Adjust technique to patient size (children vs. adults)
- Collimate the beam to the area of interest
- Use shielding appropriately

#### 3. Dose Limitation
- Occupational dose limits for radiation workers
- Dose constraints for members of the public
- Note: No dose limits apply to patients (justified by clinical need)

### Practical ALARA Measures

**Technical factors:**
- Increase kVp, reduce mAs (higher energy, fewer photons)
- Use automatic exposure control (AEC)
- Digital radiography requires less radiation than film-screen
- Fluoroscopy: use pulsed rather than continuous fluoroscopy

**Geometry:**
- Collimate to the region of interest
- Increase source-to-skin distance
- Reduce magnification in fluoroscopy

**Shielding:**
- Gonadal shielding when gonads are near the primary beam
- Note: ACR 2019 update recommends against routine gonadal shielding in many cases as it can obscure anatomy and reduce image quality

---

## 3.3 Radiation Dose Measurements and Units

### Key Quantities

| Quantity | Definition | SI Unit | Old Unit |
|----------|-----------|---------|----------|
| **Absorbed Dose (D)** | Energy deposited per unit mass | Gray (Gy) = J/kg | rad (1 Gy = 100 rad) |
| **Equivalent Dose (H)** | Absorbed dose × radiation weighting factor | Sievert (Sv) | rem (1 Sv = 100 rem) |
| **Effective Dose (E)** | Sum of weighted equivalent doses to all organs | Sievert (Sv) | rem |
| **Activity** | Rate of radioactive decay | Becquerel (Bq) | Curie (Ci) |

### Radiation Weighting Factors (wR)

| Radiation Type | wR |
|---------------|-----|
| X-rays, gamma rays | 1 |
| Beta particles | 1 |
| Protons | 2 |
| Alpha particles | 20 |
| Neutrons | 5–20 (energy dependent) |

For diagnostic X-rays: Absorbed dose = Equivalent dose (since wR = 1)

### Effective Dose — Tissue Weighting Factors

Effective dose accounts for the different radiosensitivity of organs:

| Tissue | Tissue Weighting Factor (wT) |
|--------|------------------------------|
| Gonads | 0.08 |
| Bone marrow | 0.12 |
| Colon | 0.12 |
| Lung | 0.12 |
| Stomach | 0.12 |
| Breast | 0.12 |
| Thyroid | 0.04 |
| Skin | 0.01 |

### Typical Effective Doses in Diagnostic Imaging

| Examination | Effective Dose (mSv) | Equivalent Background Radiation |
|-------------|---------------------|-------------------------------|
| Chest X-ray (PA) | 0.02 | ~2.4 days |
| Mammogram | 0.4 | ~7 weeks |
| CT Head | 2 | ~8 months |
| CT Chest | 7 | ~2.3 years |
| CT Abdomen/Pelvis | 10 | ~3.3 years |
| PET-CT | 25 | ~8.3 years |
| Annual background (US) | ~3.1 | — |

### Dose Descriptors in CT

**CT Dose Index (CTDI):**
- Measured in Gy or mGy
- Represents average dose in a standardized phantom
- CTDIvol — volume CTDI accounting for pitch

**Dose-Length Product (DLP):**
- CTDI × scan length
- Unit: mGy·cm
- Allows comparison of doses for different protocol lengths

**Size-Specific Dose Estimate (SSDE):**
- Accounts for patient size
- More accurate dose estimate than CTDIvol alone

---

## 3.4 Pregnancy Considerations in Imaging

### Risk Assessment

**Fetal radiosensitivity varies by gestational age:**

| Period | Risk | Notes |
|--------|------|-------|
| Pre-implantation (0–2 weeks) | "All or nothing" | Spontaneous abortion or no effect |
| Organogenesis (2–8 weeks) | Malformations | Most sensitive period for teratogenesis |
| Fetal period (8–40 weeks) | Growth restriction, CNS effects | Lower risk than organogenesis |

**Dose thresholds for deterministic fetal effects:**
- CNS effects (IQ reduction): >0.1 Gy (100 mGy) during critical period
- Microcephaly: >0.2 Gy
- Childhood cancer risk: stochastic, increased with any dose

### Practical Guidelines

**Fetal doses from common procedures:**
- Chest X-ray: &lt;0.01 mGy (negligible)
- Abdominal X-ray: 1–3 mGy
- CT Pelvis: 25–50 mGy
- CT Abdomen: 8–25 mGy

**The "10-day rule" (historical):** Schedule elective pelvic radiography in first 10 days of menstrual cycle — now largely abandoned in favor of case-by-case assessment.

**ACR recommendations:**
- Fetal doses &lt;50 mGy: no increased risk of fetal anomalies; do not terminate pregnancy on radiation grounds
- Doses 50–150 mGy: counsel patient; risk still very low
- Doses >150 mGy: potential risk exists; individual assessment required

**Clinical approach:**
1. Always ask about pregnancy status before pelvic/abdominal imaging
2. Use non-ionizing modalities (ultrasound, MRI) when possible
3. If ionizing radiation is necessary, proceed — do not withhold imaging that will affect clinical management
4. Shield uterus when it is not in primary beam
5. Consult medical physicist for dose estimation when concerned

### Nuclear Medicine in Pregnancy

- Radioiodine (I-131) is **contraindicated** in pregnancy (fetal thyroid uptake after 12 weeks)
- Technetium-99m studies: low fetal dose; usually acceptable with benefit-risk assessment
- Breastfeeding: typically interrupted for 24 hours after most Tc-99m studies

---

## 3.5 Radiation Protection for Healthcare Workers

### Occupational Dose Limits (ICRP recommendations)

| Category | Annual Effective Dose Limit |
|----------|----------------------------|
| Radiation workers (whole body) | 20 mSv/year (averaged over 5 years, max 50 mSv in any year) |
| Pregnant radiation workers (abdomen) | 1 mSv for the remainder of pregnancy |
| Members of the public | 1 mSv/year |
| Lens of eye (workers) | 20 mSv/year |
| Skin (workers) | 500 mSv/year |

### Monitoring Radiation Dose

**Dosimeters:**
- **Film badge:** Historical; measures cumulative dose
- **Thermoluminescent dosimeter (TLD):** More accurate; can be re-read
- **Optically stimulated luminescence (OSL):** Modern standard; high sensitivity
- **Electronic personal dosimeter (EPD):** Real-time digital readout; useful in fluoroscopy

**Placement:**
- Primary dosimeter: at collar level (outside lead apron)
- Secondary dosimeter: under lead apron at waist level
- Effective dose calculated from collar and waist readings

### Protective Equipment

**Lead aprons:**
- Typical attenuation: 0.25–0.5 mm Pb equivalent
- Reduce dose to covered organs by 90–95%
- Required during fluoroscopy procedures

**Thyroid shields:**
- Protect thyroid gland (high sensitivity to radiation-induced cancer)
- Especially important during fluoroscopy

**Lead glasses:**
- Protect lens of eye (cataract risk)
- Essential for interventional radiologists who perform prolonged fluoroscopy

**Protective gloves:**
- For hands that may be near primary beam

### The Three Principles of Worker Protection

**1. Time:** Minimize time spent near radiation sources
- Dose = Dose rate × Time
- Complete procedures efficiently

**2. Distance:**
- Inverse square law: Dose ∝ 1/d²
- Doubling distance reduces dose by 75%
- Stand as far as possible from radiation source during fluoroscopy

**3. Shielding:**
- Lead barriers, lead aprons, mobile lead screens
- Particularly important during fluoroscopy

### Special Considerations for Interventional Procedures

Interventional radiology involves the highest occupational doses:
- Fluoroscopy time can be 30–90 minutes per procedure
- Annual effective dose for interventional radiologists: 1–5 mSv (well monitored)
- Primary beam scatter: most exposure comes from patient scatter
- Eye and hand doses may approach limits without proper protection

---

## 3.6 Regulatory Guidelines and Safety Protocols

### Regulatory Bodies

**International Commission on Radiological Protection (ICRP):**
- Sets international recommendations on radiation protection principles
- ICRP Publication 103 (2007): current framework

**National Council on Radiation Protection and Measurements (NCRP):**
- US advisory body
- Issues recommendations on radiation protection in the United States

**Nuclear Regulatory Commission (NRC):**
- US regulatory agency for radioactive materials (NM, radiation therapy)
- Does not regulate diagnostic X-ray equipment (FDA jurisdiction)

**State Radiation Control Programs:**
- Regulate diagnostic X-ray equipment at state level
- License facilities and inspect equipment

### Image Gently and Image Wisely Campaigns

**Image Gently:** Pediatric radiation protection initiative
- Reduce dose for children
- Tailor examinations to the child's size
- Focus on "child-sized" not "adult-sized" doses

**Image Wisely:** Adult radiation protection initiative
- Reduce unnecessary CT scanning
- Optimize protocols
- Communicate radiation amounts to patients and colleagues

### Facility Safety Requirements

**Quality Assurance (QA) programs:**
- Regular equipment performance testing
- Calibration of dose output
- Patient dose monitoring

**Diagnostic Reference Levels (DRLs):**
- Population-based dose guidance levels
- Not individual dose limits
- Help identify facilities/protocols that are outliers (too high or too low)

**Radiation Safety Committee:**
- Required in hospitals using radioactive materials
- Includes physicians, physicists, radiation safety officer

---

## 3.7 Radiation Safety in Nuclear Medicine

### Unique Challenges in Nuclear Medicine

Nuclear medicine differs from conventional radiology in that the **radioactive source is inside the patient** (internal emitter), creating distinct radiation safety concerns:

- Radiation exposure continues for hours to days after administration
- Patients themselves become temporary radiation sources
- Different radionuclides have different physical and biological half-lives
- Staff, family members, and the public require protection

### Common Radionuclides and Their Properties

| Radionuclide | Half-life | Primary Use | Emission Type |
|---|---|---|---|
| **Technetium-99m (Tc-99m)** | 6 hours | Bone, lung, cardiac scans | Gamma (140 keV) |
| **Fluorine-18 (F-18)** | 110 minutes | PET-CT (FDG) | Positron → 511 keV |
| **Iodine-131 (I-131)** | 8 days | Thyroid cancer treatment | Beta + Gamma |
| **Iodine-123 (I-123)** | 13 hours | Thyroid imaging | Gamma |
| **Gallium-68 (Ga-68)** | 68 minutes | PSMA PET, neuroendocrine | Positron |
| **Lutetium-177 (Lu-177)** | 6.6 days | PRRT therapy | Beta + Gamma |

### Radiation Safety for Nuclear Medicine Staff

**Key exposure sources:**
- Injection and preparation of radiopharmaceuticals
- Patient handling during imaging
- Hot lab work (dose calibration, preparation)

**Protective measures:**
- **Syringe shields:** Lead-lined syringes reduce hand dose by >90% for gamma emitters
- **Vial shields:** L-shaped lead or tungsten shields during preparation
- **Tongs and remote handling tools:** Maintain distance during preparation
- **PET isotopes (F-18):** Higher energy (511 keV) — lead provides less shielding; time and distance more important

**Dose rates near patients:**

| Administered Activity | Dose Rate at 1 m |
|---|---|
| Tc-99m bone scan (~740 MBq) | ~20 µSv/hr |
| F-18 FDG PET (~370 MBq) | ~60 µSv/hr |
| I-131 therapy dose (3.7 GBq) | ~400 µSv/hr |

### Radiation Protection for Patients' Families

**General guidance after diagnostic studies (Tc-99m, F-18):**
- Maintain 1–2 m distance from close contacts for 6–12 hours
- Avoid prolonged contact with young children and pregnant women
- Flush toilet twice; wash hands thoroughly after urination (urinary excretion)

**After I-131 therapy:**
- Avoid close contact with others for 3–7 days (dose-dependent)
- Sleep separately from partner and children
- Avoid public transport and crowded places for first 2–3 days
- Special instructions for international travel (radiation portal detectors)

### Radioactive Waste Management in Nuclear Medicine

**Short-lived waste (T½ &lt; 65 days):**
- Stored in shielded containers ("decay in storage")
- Released as ordinary waste after 10 half-lives (activity &lt;1 µCi)
- Monitored with survey meters before disposal

**Long-lived waste:**
- Must be disposed of through licensed radioactive waste contractors
- Proper labeling and documentation required

**Contamination incidents:**
- Survey all work surfaces and equipment regularly
- Decontaminate with soap and water (most radiopharmaceuticals are water-soluble)
- Report to Radiation Safety Officer (RSO)

> **Clinical Pearl:** The most important concept in nuclear medicine safety is **"hot lab hygiene"** — keeping radioactive materials contained within designated areas and monitoring frequently for contamination prevents the vast majority of unintended exposures.

---

## 3.8 Patient Communication About Radiation Risk

### Why Communication Matters

Patients increasingly ask about radiation risks before consenting to imaging. Effective communication:
- Builds trust and reduces anxiety
- Supports informed consent
- Prevents refusal of clinically necessary procedures
- Corrects common misconceptions (e.g., "CT causes cancer")

### Common Patient Concerns and Evidence-Based Responses

**"Is CT dangerous? Will I get cancer?"**

> *Appropriate response:* "CT uses X-rays, which carry a very small risk. A CT of the abdomen delivers roughly the same radiation you receive naturally from the environment over 3 years. The risk of cancer from this exam is estimated to be less than 1 in 2,000 — much smaller than the risk of missing the diagnosis we're investigating."

**"I'm worried because I've had many X-rays/CTs in the past."**

> *Appropriate response:* "We track radiation doses, and your previous exams are part of the picture. Radiation effects from diagnostic imaging are cumulative but still extremely low. The benefit of accurate diagnosis far outweighs this small risk, and we always aim to use the lowest dose that gives us a clear image."

**"Can't you use an MRI or ultrasound instead?"**

> *Appropriate response:* "That's a great question. For [this specific clinical problem], [CT/X-ray] gives us information that MRI/ultrasound cannot provide as reliably, such as [bone detail / speed in emergencies / vascular anatomy]. We choose imaging based on what will best answer the clinical question."

### Effective Communication Techniques

**Use relatable comparisons:**

| Examination | Lay Comparison |
|---|---|
| Chest X-ray | 2–3 hours of natural background radiation |
| CT Abdomen | Living in Denver (high altitude) for 1 year |
| Mammogram | 7-week vacation in a high-background area |
| PET-CT | Background radiation over 8 years |

**The "3 Questions" framework for patient conversations:**
1. **What is the imaging for?** — Explain the clinical benefit clearly
2. **What is the risk?** — Give a realistic, contextualized risk estimate
3. **What are the alternatives?** — Acknowledge alternatives and why they may be less suitable

**Avoid:**
- Excessive technical language ("milliSieverts," "effective dose")
- Dismissiveness ("it's nothing, don't worry")
- Overpromising ("absolutely zero risk")

### Documenting Radiation Communication

For high-dose procedures (CT, fluoroscopy, nuclear medicine):
- Record that radiation discussion occurred in clinical notes
- For fluoroscopic procedures >60 minutes or skin dose >3 Gy: document and follow up for potential skin injury
- Provide written information sheets when available

### Special Communication Situations

**Pediatric patients:**
- Address parents' concerns specifically — children are more radiosensitive
- Emphasize size-adjusted protocols and dose reduction measures
- Discuss alternatives (ultrasound first for abdominal pain in children)

**Patients who refuse medically necessary imaging:**
- Explore underlying fears (cancer phobia, previous bad experience)
- Involve senior clinician if refusal may harm the patient
- Document the discussion and patient's autonomous decision

**Patients requesting unnecessary imaging:**
- Validate concerns while explaining why imaging may not be indicated
- Use clinical decision support guidelines (e.g., ACR Appropriateness Criteria)
- "Doing more imaging" is not always better medicine

---

## 3.9 Radiation Accidents and Emergency Protocols

### Classification of Radiation Incidents

**Level 1 — Minor Incidents (Local response):**
- Small surface contamination in a controlled area
- Dropped sealed source that remains intact
- Minor procedural errors with no significant dose received

**Level 2 — Significant Incidents (Department response):**
- Larger contamination events
- Patient receiving wrong radiopharmaceutical dose (>50% error)
- Unintended exposure of non-radiation worker above annual limit

**Level 3 — Major Emergencies (Hospital/National response):**
- Lost or stolen radioactive source
- Radiation therapy wrong-site treatment causing significant harm
- Radiological dispersal device ("dirty bomb")
- Nuclear reactor accident with external release

### Immediate Response to Radiation Incidents

**RACE protocol for contamination incidents:**

1. **Remove** — Remove the person from the contaminated area
2. **Alert** — Alert the Radiation Safety Officer immediately
3. **Contain** — Contain the contamination (close doors, restrict access)
4. **Evaluate** — Survey individuals for contamination and dose estimation

**First aid priority:**
> **Medical treatment always comes before radiation decontamination.** A bleeding, unconscious, or otherwise critically ill patient must receive immediate medical care regardless of contamination status. Radiation contamination rarely poses an immediate life threat; conventional injuries do.

### Personal Contamination Management

**External contamination (skin/clothing):**
1. Remove and bag clothing (reduces contamination by ~80%)
2. Wash skin with soap and water (gentle, avoid abrasion)
3. Survey with Geiger counter after washing
4. Repeat until activity is at background or within acceptable limits
5. Do NOT scrub — broken skin increases internal absorption

**Internal contamination (ingestion/inhalation/wound):**
- Immediately report to RSO and occupational health
- Bioassay (urine/fecal monitoring) to estimate intake
- Thyroid uptake measurement for radioiodine incidents
- Specific antidotes may be indicated:
  - Potassium iodide (KI): blocks thyroid uptake after radioiodine exposure
  - Prussian blue: enhances Cs-137 and Tl excretion
  - DTPA: chelates transuranic elements (Pu, Am)

### Whole-Body Radiation Exposure (Acute Radiation Syndrome)

Acute Radiation Syndrome (ARS) occurs after whole-body doses >1 Gy over a short period — not relevant to diagnostic imaging but important for emergency preparedness.

**Clinical phases of ARS:**

| Phase | Timing | Features |
|---|---|---|
| **Prodromal** | Minutes to hours | Nausea, vomiting, fatigue, diarrhea |
| **Latent** | Days to weeks | Apparent improvement |
| **Manifest illness** | Weeks | Bone marrow suppression, infection, hemorrhage |
| **Recovery or death** | Weeks to months | Depends on dose |

**Dose-response thresholds:**

| Dose (whole body) | Expected Outcome |
|---|---|
| &lt;0.1 Gy | No clinically detectable effects |
| 0.1–1 Gy | Mild lymphocyte depression, no symptoms |
| 1–2 Gy | Mild ARS; most survive without treatment |
| 2–6 Gy | Bone marrow syndrome; survival depends on treatment |
| 6–10 Gy | Severe bone marrow failure; intensive support required |
| >10 Gy | Gastrointestinal and neurovascular syndrome; usually fatal |

### Nuclear/Radiological Emergency Preparedness

**Hospital responsibilities:**
- Maintain radiation emergency plan (updated annually)
- Train emergency department staff to recognize and manage contaminated casualties
- Stock radiation emergency supplies (survey meters, decontamination kits, KI tablets)
- Designate decontamination area (typically outside emergency department)

**Triage at the scene of a radiological emergency:**
1. Treat life-threatening injuries first (conventional trauma triage applies)
2. Move victims away from source
3. Establish contamination control zone
4. Document estimated dose from exposure history (time, distance, shielding)
5. Transport to hospital with advance notification

**Communicating with the public during radiological emergencies:**
- Authoritative, calm messaging prevents panic
- "Shelter in place" vs. evacuation: depends on incident type and dose projections
- Avoid speculative information; refer to official sources (CDC, EPA, NRC)

> **Key Principle:** Radiation accidents in healthcare settings are rare but preparedness is mandatory. Every radiology and nuclear medicine department must have written emergency procedures, conduct regular drills, and ensure all staff know how to contact the Radiation Safety Officer at any time.

---

## Key Points Summary

1. **Ionizing radiation causes biological damage** primarily through indirect effects (free radical formation) and directly by damaging DNA

2. **Two types of effects:** Deterministic (threshold-dependent, severity increases with dose) and Stochastic (no threshold, probability increases with dose)

3. **ALARA principle** encompasses three pillars: Justification, Optimization, and Dose Limitation

4. **Effective dose (Sievert)** accounts for both the type of radiation and the sensitivity of the tissues irradiated

5. **Fetal doses below 50 mGy** do not warrant pregnancy termination; most diagnostic imaging produces doses far below this threshold

6. **Occupational exposure** is minimized through time, distance, and shielding; annual limit is 20 mSv for radiation workers

7. **Dosimeters must be worn** at all times in radiation areas to monitor cumulative exposure

8. **Nuclear medicine patients** become temporary radiation sources; specific precautions depend on the radionuclide and administered activity

9. **Patient communication** should contextualize radiation risk using relatable comparisons and always emphasize the benefit of accurate diagnosis

10. **Medical treatment always precedes decontamination** — conventional injuries are more immediately life-threatening than radiation contamination

11. **Acute Radiation Syndrome** requires whole-body doses >1 Gy; not relevant to diagnostic imaging but important for emergency preparedness

---

## Review Questions

1. A patient who is 8 weeks pregnant requires a CT abdomen/pelvis for suspected appendicitis. The estimated fetal dose is approximately 35 mGy. What is the most appropriate counseling to provide?

2. Calculate the effective dose for a chest X-ray (absorbed dose to lung 0.2 mGy). What is the equivalent background radiation exposure?

3. During a fluoroscopic procedure, a radiation worker moves from 1 meter to 2 meters from the X-ray tube. By what factor does their dose rate change?

4. Which tissues are most radiosensitive, and why?

5. What are the three deterministic factors that determine radiosensitivity according to the Law of Bergonié and Tribondeau?

6. A patient received F-18 FDG for a PET-CT scan (370 MBq administered). What radiation precautions should you advise for their family members at home?

7. A patient is anxious about having a CT chest and says "I heard CT causes cancer, I don't want one." How would you counsel this patient using the ALARA framework and risk communication principles?

8. During a nuclear medicine procedure, a spill of Tc-99m occurs on a technologist's hands. Outline the immediate steps you would take.

9. What is Acute Radiation Syndrome and at what approximate whole-body dose does it begin to manifest clinically?

10. A hospital receives multiple casualties from a suspected radiological incident. A victim has a severe leg fracture and is also contaminated. What is the correct priority of care?

---

*Next Chapter: Contrast Agents in Radiology →*
