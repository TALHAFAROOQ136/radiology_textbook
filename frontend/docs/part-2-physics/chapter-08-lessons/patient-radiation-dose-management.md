---
id: patient-radiation-dose-management
title: "Patient Radiation Dose Management"
sidebar_label: "Patient Radiation Dose Management"
---

# Patient Radiation Dose Management

Patient radiation dose management aims to ensure that every patient receives the minimum radiation dose necessary to achieve a diagnostic-quality image. Unlike occupational dose limits, there are no regulatory dose limits for patients — instead, the principles of justification and optimisation govern patient protection.

## Why Patient Dose Management Matters

- Medical radiation is the largest man-made source of population radiation exposure
- CT accounts for ~50% of medical radiation dose despite being ~10% of procedures
- Unnecessary or poorly optimised examinations contribute avoidable dose
- Paediatric patients are particularly vulnerable
- Benefits of accurate diagnosis almost always outweigh radiation risk — but risk must be minimised

---

## Step 1: Justification

Every radiological examination must be clinically justified:

### Referral Guidelines
Evidence-based guidance on appropriate imaging:
- **iRefer** (UK Royal College of Radiologists)
- **ACR Appropriateness Criteria** (USA)
- **ESR iGuide** (Europe)

### Clinical Decision Support (CDS)
- Electronic systems prompt referrers to consult appropriateness criteria
- Mandated in some jurisdictions for CT ordering
- Reduces inappropriate referrals

### Alternatives to Ionising Radiation
When clinically appropriate, consider:
- Ultrasound (no ionising radiation)
- MRI (no ionising radiation)
- Clinical assessment alone
- Watchful waiting

### Avoiding Duplicate Examinations
- Check PACS for recent relevant imaging before ordering
- Communicate with other departments/hospitals
- Patient-held records or shared systems

---

## Step 2: Optimisation of Patient Dose

### Diagnostic Reference Levels (DRLs)
Dose benchmarks established at national/local level:
- Set at ~75th percentile of observed dose distributions
- Not dose limits — trigger investigation if routinely exceeded
- Regular audit against DRLs required

**UK National DRLs (examples)**:
| Examination | Dose Metric | DRL |
|---|---|---|
| Chest PA | ESD | 0.1 mGy |
| Abdomen AP | ESD | 4 mGy |
| Lumbar spine AP | ESD | 6 mGy |
| CT head | CTDIvol | 50 mGy |
| CT chest | CTDIvol | 10 mGy |
| CT abdomen/pelvis | CTDIvol | 15 mGy |

### Conventional Radiography Optimisation
- Use **fixed high kVp** technique (appropriate for digital systems)
- Select minimum mAs consistent with acceptable image quality
- Collimate to area of clinical interest
- Use grids only when scatter is clinically significant
- Monitor **exposure index** (EI/DI) — detect dose creep
- Implement and follow **technique charts**

### CT Dose Optimisation
CT contributes the most to medical radiation burden:

| Strategy | Mechanism | Dose Reduction |
|---|---|---|
| Tube current modulation (TCM) | Adjusts mA to patient anatomy | 20–40% |
| kVp reduction | Lower energy for smaller patients, vascular studies | 30–50% |
| Iterative reconstruction | Reduces noise at lower mAs | 30–60% |
| AI reconstruction | Deep learning noise reduction | Up to 80% |
| Scan length limitation | Restrict to clinical area only | Variable |
| Avoid unnecessary phases | Single vs multi-phase protocols | 50–75% |
| Paediatric protocols | Weight/size-based dose reduction | Variable |

### Fluoroscopy Dose Optimisation
- Use **lowest pulse rate** acceptable for the procedure
- Utilise **last image hold** instead of continuous screening
- Employ **collimation** — restrict beam to area of interest
- Avoid **electronic magnification** unless necessary
- Maximise **SSD** (minimum 30 cm mobile; 38 cm fixed)
- Keep detector close to patient (minimise OID)
- Use **digital subtraction** instead of continuous fluoroscopy where possible

---

## Dose Metrics for Patients

### Entrance Surface Dose (ESD)
- Air kerma at skin surface including backscatter
- Used for: conventional radiography
- Measured with TLD on patient or calculated from technique factors

### Dose Area Product (DAP)
- ESD × beam area (Gy·cm²)
- Proportional to total energy delivered to patient
- Used for: fluoroscopy, interventional radiology, general radiography
- Measured by DAP meter fixed to X-ray tube

### CT Dose Index (CTDIvol)
- Average dose within the scanned volume (mGy)
- Displayed on CT console before and after scan
- Measured in standard phantom (16 cm head, 32 cm body)

### Dose Length Product (DLP)
- CTDIvol × scan length (mGy·cm)
- Proportional to total energy deposited by CT examination
- Used to estimate effective dose: E ≈ DLP × k (conversion factor)

### Mean Glandular Dose (MGD)
- Dose to radiosensitive glandular tissue in breast
- Used specifically for mammography
- Target: &lt;3 mGy per view for standard breast

---

## Special Patient Groups

### Paediatric Patients
- Higher radiosensitivity; longer life expectancy
- **Image Gently** campaign (USA) / **ALARA in Paediatric Imaging**
- Weight-based or age-based protocols essential
- CT dose should be ~50–75% of adult dose for small children
- Consider US or MRI as alternatives

### Pregnant Patients
- Foetal dose from most diagnostic procedures is very low (&lt;1 mGy)
- Well below deterministic thresholds (~100 mGy)
- Small stochastic risk (childhood cancer): ~1 in 17,000 per mGy foetal dose
- If abdominal/pelvic CT essential: proceed — benefit outweighs risk
- Avoid unnecessary abdominal/pelvic X-rays in first trimester
- Always reassure patient — risk is very small

### Patients with Renal Impairment
- Contrast media nephrotoxicity risk
- Use minimum contrast volume; pre-hydrate
- Consider non-contrast CT or alternative modality

---

## Patient Dose Recording and Audit

### Dose Recording
- DAP and fluoroscopy time recorded for every fluoroscopy procedure
- CTDIvol and DLP recorded in DICOM dose structured report
- Skin dose estimation for high-dose interventional procedures

### Dose Audit
- Regular comparison of departmental doses against DRLs
- Identify outliers (high-dose patients or procedures)
- Review technique charts and protocols annually
- Participate in national dose surveys

### Patient Follow-Up After High-Dose Procedures
ICRP recommends follow-up if:
- Peak skin dose may exceed 3 Gy (erythema threshold)
- Inform patient of potential skin reaction
- Clinical review at 10–14 days post-procedure

---

## Communication with Patients

- Explain why examination is recommended and its benefits
- Address concerns about radiation risk honestly
- Provide context: risk from chest X-ray ≈ background radiation for 3 days
- Do not refuse necessary examinations due to radiation fear
- Document patient refusal if they decline a justified examination
