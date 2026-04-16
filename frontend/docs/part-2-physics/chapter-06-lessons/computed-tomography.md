---
id: computed-tomography
title: "Computed Tomography"
sidebar_label: "Computed Tomography"
---

# Computed Tomography (CT)

---

## What is CT?

Imagine you have an orange. If you take a regular X-ray of it, you get a flat shadow — you can see the outside but nothing inside. Now imagine slicing the orange into hundreds of thin circular slices — you can see **every layer** in detail. That is exactly what a CT scan does to the human body.

**Computed Tomography (CT)** — also called a **CAT scan** (Computed Axial Tomography) — is a medical imaging technique that:
- Uses **X-rays** (just like a plain radiograph)
- Takes images from **hundreds of different angles** around the body
- Uses a **computer** to reconstruct those angles into **cross-sectional slice images**
- Produces images with much more detail than a plain X-ray

### Why CT Instead of X-ray?

| Plain X-ray | CT Scan |
|---|---|
| 2D flat image | 3D cross-sectional images |
| Structures overlap | No overlap — each layer is separate |
| Poor soft tissue detail | Excellent soft tissue detail |
| Low radiation | Higher radiation |
| Fast and cheap | Slower and more expensive |

---

## History of CT

### The Discovery
- **1895** — Wilhelm Röntgen discovers X-rays
- **1917** — Johann Radon describes the mathematical principle of image reconstruction from projections (Radon Transform) — the mathematical backbone of CT
- **1963** — Allan Cormack develops the mathematical framework for CT reconstruction
- **1971** — Sir Godfrey Hounsfield builds the **first clinical CT scanner** at Atkinson Morley Hospital, London
  - First scan: a patient with a suspected brain tumor
  - Scan time: **9 days** per image!
- **1979** — Hounsfield and Cormack share the **Nobel Prize in Physiology or Medicine**
- **1989** — Introduction of **helical (spiral) CT** — continuous rotation with table movement
- **1992** — **Multi-detector CT (MDCT)** introduced — multiple rows of detectors
- **2000s** — 64-slice, 128-slice, 256-slice, 320-slice scanners developed
- **2010s** — **Dual-energy CT**, **spectral CT**, and **AI-based reconstruction** emerge
- **Present** — Photon-counting CT, AI-driven protocols, sub-millisievert imaging

---

## Physics — How CT Actually Works

### Step 1: X-ray Generation
- An X-ray tube inside the gantry produces a **fan-shaped or cone-shaped X-ray beam**
- The beam passes through the patient from one side
- Detectors on the **opposite side** measure how much radiation passed through

### Step 2: Attenuation
As X-rays pass through the body, different tissues **absorb (attenuate) different amounts** of radiation:
- **Bone** absorbs a lot → fewer X-rays reach detector → appears bright (white)
- **Air/Lung** absorbs very little → many X-rays reach detector → appears dark (black)
- **Soft tissue** absorbs an intermediate amount → appears grey

### Step 3: Multiple Projections
The X-ray tube and detector array rotate **360° around the patient**
- At every fraction of a degree, a measurement (projection) is recorded
- A single rotation produces **thousands of individual measurements**
- These measurements are called **raw data** or **sinogram data**

### Step 4: Image Reconstruction
The computer takes all the raw projection data and uses **mathematical algorithms** (Filtered Back Projection or Iterative Reconstruction) to calculate:
- What tissue is at each point in the body?
- What is its density (Hounsfield Unit)?

This produces a **matrix of pixels** — typically 512 × 512 — each assigned a CT number (HU)

### Step 5: Display
The reconstructed image is displayed on a monitor as a greyscale image. The radiologist adjusts **window level and width** to highlight different tissue types.

---

## Hounsfield Units (HU) — The CT Number Scale

Every pixel in a CT image is assigned a **Hounsfield Unit (HU)** — a numerical value representing the density of that tissue relative to water.

### The Scale

| Tissue | HU Range | Appearance |
|---|---|---|
| Air | −1000 | Black |
| Lung | −700 to −600 | Very dark grey |
| Fat | −100 to −50 | Dark grey |
| Water / CSF | 0 | Medium grey |
| Soft tissue (muscle) | +20 to +80 | Grey |
| Blood (fresh/acute) | +50 to +80 | Slightly bright |
| Blood (clotted) | +60 to +90 | Bright grey |
| Iodine contrast | +100 to +400 | Bright |
| Bone (cancellous) | +100 to +400 | Bright |
| Bone (cortical) | +400 to +1000 | Very bright |
| Metal (implants) | &gt; +1000 | White / causes artifact |

### Why HU Matters Clinically

- **Acute intracranial hemorrhage** → HU 50–80 (hyperdense vs brain ~30–40 HU)
- **Liver mass** → if HU &lt; 20 it suggests a cyst; if HU &gt; 40 it suggests a solid lesion
- **Pulmonary embolism** → filling defect in contrast-enhanced vessel
- **Fatty liver (steatosis)** → liver HU &lt; 40 (or &lt; spleen HU)
- **Renal calculus** → HU &gt; 200 confirms calcium stone; HU &lt; 200 suggests uric acid stone

---

## CT System Components (Hardware)

### Gantry
The large donut-shaped machine the patient passes through.

- **Bore diameter**: typically 70–80 cm; up to 90 cm in bariatric scanners
- **Gantry tilt**: ±30° — useful for head and spine imaging (avoids dental artifact, aligns with orbital plane)
- Houses: X-ray tube, collimators, detectors, high-voltage generator, slip rings, cooling systems

### X-ray Tube
The source of X-ray radiation in CT.

- Designed for **high heat load** — continuous rotation generates enormous heat
- **kVp (kilovoltage peak)**: 80–140 kVp — controls beam energy and penetration
  - Low kVp (80–100): better iodine contrast, lower patient dose (for small/thin patients)
  - High kVp (120–140): better penetration in large/obese patients
- **mA (milliampere)**: 100–800 mA — controls tube current (quantity of X-rays)
  - More mA = more photons = less image noise = higher dose
- **Focal spot size**: small focal spot = sharper images; large focal spot = higher heat capacity
- **Anode heat capacity**: measured in Heat Units (HU) or MJ — critical for multi-phase studies

### Collimators
Control the shape and width of the X-ray beam.

- **Pre-patient collimator (bow-tie filter)**: shapes beam to match patient contour, reduces dose to periphery
- **Post-patient collimator**: limits scatter reaching detectors; improves image quality

### Detector Array
Converts X-ray energy to electrical signals.

**Types:**
- **Solid-state detectors** (modern standard): scintillator crystal + photodiode
  - Scintillator converts X-rays to light → photodiode converts light to electrical signal
  - Materials: Gadolinium oxysulphide (GdOS), Cadmium Tungstate (CdWO₄), Lutetium silicate

**Detector configuration:**

| Scanner Type | Detector Rows | Slice Coverage |
|---|---|---|
| Single-detector CT | 1 | 1 slice per rotation |
| 4-slice MDCT | 4 | 4 slices per rotation |
| 16-slice MDCT | 16 | 16 slices per rotation |
| 64-slice MDCT | 64 | 40 mm per rotation |
| 128/256-slice | 128–256 | 80–160 mm per rotation |
| 320-slice | 320 | 160 mm per rotation (whole organ) |

### Slip Rings
- Allow **continuous 360° gantry rotation** without tangling cables
- Transfer **electrical power** and **data signals** between rotating and stationary parts
- Essential for helical/spiral CT — without slip rings, only axial (step-and-shoot) CT is possible

### Data Acquisition System (DAS)
- Receives raw electrical signals from detectors
- Converts analogue signal to digital (ADC)
- Sends data to reconstruction computer at extremely high speed (gigabytes per second)

### Reconstruction Computer
- Performs mathematical reconstruction (FBP or iterative algorithms)
- Modern systems use dedicated **GPU clusters** for real-time reconstruction
- Typical reconstruction: 512 × 512 matrix, up to 1024 × 1024 for high-resolution

### Patient Table (Couch)
- Motorised, moves patient through gantry bore
- Weight limit: typically 200–250 kg (450 lb); bariatric tables up to 300 kg
- Precise movement (accuracy ±0.25 mm) critical for helical CT table speed

---

## CT Acquisition Modes

### Axial (Sequential / Step-and-Shoot) CT
- Table is **stationary** during each rotation
- After rotation → table moves by one increment → next rotation
- **Advantages**: highest image quality, accurate dose measurement
- **Uses**: Head CT, HRCT lung, CT-guided biopsy

### Helical (Spiral) CT
- Table moves **continuously** while gantry rotates continuously
- The X-ray beam traces a **helix (spiral)** through the patient
- Introduced in 1989 — revolutionised CT

**Key parameter: Pitch**

**Pitch = Table movement per rotation (mm) ÷ Beam collimation (mm)**

| Pitch Value | Effect |
|---|---|
| &lt; 1 (e.g., 0.5) | Overlapping data; higher dose; better image quality |
| = 1 | No gap, no overlap (standard) |
| &gt; 1 (e.g., 1.5) | Gaps in data; lower dose; faster coverage; slightly reduced quality |

**Advantages of Helical CT:**
- Much faster — entire chest in one breath-hold
- Retrospective reconstruction at any slice position
- Essential for CT angiography
- Reduces motion artifact

### Multi-Detector CT (MDCT)
- Multiple detector rows acquire data simultaneously
- Combined with helical acquisition: **multi-detector helical CT**
- Benefits: faster coverage, thinner slices, isotropic voxels (equal in all planes)

**Isotropic voxels** — a critical concept:
- If slice thickness = pixel size in x and y = ~0.6 mm → isotropic
- Isotropic data allows **perfect multiplanar reconstructions** in any plane without loss of quality

### Cine CT (Dynamic CT)
- Repeated images at same table position over time
- Used for: perfusion CT, dynamic contrast studies, CT fluoroscopy (guidance)

---

## Image Reconstruction Algorithms

### Filtered Back Projection (FBP)
The original reconstruction method:
1. Back-project all projection measurements across the image matrix
2. Apply a **mathematical filter (kernel)** to sharpen edges and remove blur
3. Fast and computationally simple
4. **Limitation**: noise increases significantly at low dose → "quantum mottle" appearance

**Kernels (Filters):**

| Kernel Type | Effect | Clinical Use |
|---|---|---|
| Smooth/Soft | Reduces noise; blurs edges | Soft tissue, liver, brain |
| Standard | Balanced | General purpose |
| Sharp/Bone | Enhances edges; increases noise | Bone, sinuses, HRCT lung |
| Lung | High edge enhancement | Pulmonary parenchyma |

### Iterative Reconstruction (IR)
A smarter mathematical approach:
1. Start with an initial image estimate
2. **Forward project** — simulate what the raw data should look like
3. **Compare** simulated data to actual measured data
4. **Correct** the image estimate based on the difference
5. Repeat (iterate) until the error is minimised

**Benefits:**
- Significantly **reduces image noise** — allows 30–60% dose reduction
- Improves image quality at low mA settings
- Reduces streak artifacts

**Vendor-specific names:**

| Vendor | IR Product Name |
|---|---|
| GE Healthcare | ASIR, ASIR-V, TrueFidelity (DL) |
| Siemens Healthineers | SAFIRE, ADMIRE |
| Philips | iDose, IMR |
| Canon | AIDR 3D, AiCE (DL) |

### Deep Learning / AI Reconstruction
- Neural networks trained on paired low-dose/high-dose CT images
- Learns to **predict** the high-quality image from a noisy low-dose input
- Allows up to **80–90% dose reduction** in some protocols
- Preserves sharpness better than standard IR
- Currently FDA-approved products: GE TrueFidelity, Canon AiCE, Siemens ADMIRE AI

---

## CT Image Display and Post-Processing

### Windowing (Window Level and Window Width)

A CT image contains a wide range of HU values (−1000 to +3000). The human eye can only distinguish ~30 shades of grey. **Windowing** selects the HU range to display.

- **Window Level (WL)** = centre of the displayed HU range (set to HU of tissue of interest)
- **Window Width (WW)** = range of HU values displayed (narrow = more contrast; wide = less contrast)

**Standard Windows:**

| Window Preset | WL | WW | Used For |
|---|---|---|---|
| Brain | +35 | 80 | Intracranial pathology |
| Subdural | +75 | 200 | Subdural hematoma |
| Stroke | +40 | 40 | Early ischemia (very narrow) |
| Soft tissue (abdomen) | +40 | 400 | Abdominal organs |
| Liver | +60 | 160 | Liver lesions |
| Mediastinum | +50 | 350 | Chest soft tissues |
| Lung | −600 | 1500 | Pulmonary parenchyma |
| Bone | +400 | 2000 | Skeletal structures |
| Spine | +300 | 2500 | Vertebrae |

> **Tip**: Narrow window = high contrast (small HU range). Wide window = low contrast (large HU range).

### Multiplanar Reconstruction (MPR)
- Reformats axial dataset into **coronal**, **sagittal**, or **oblique** planes
- Requires isotropic voxels for distortion-free reconstruction
- Essential for: spine pathology, aortic aneurysm, facial fractures

### Maximum Intensity Projection (MIP)
- Projects the **highest HU value** encountered along each viewing ray
- Excellent for vascular imaging — contrast-enhanced vessels appear bright
- Used in: CT angiography, renal artery assessment, coronary artery calcium scoring

### Minimum Intensity Projection (MinIP)
- Projects the **lowest HU value** along each viewing ray
- Used for: airway imaging (virtual bronchoscopy), emphysema mapping

### Volume Rendering (VR)
- Assigns opacity and colour to each HU value
- Produces photorealistic 3D surface images
- Used for: surgical planning, patient communication, vascular anatomy, orthopaedic pre-op

### Curved Planar Reformation (CPR)
- Straightens curved structures along their length
- Essential for: coronary artery assessment, aorta, renal arteries

### Virtual Endoscopy
- Simulates looking inside tubular structures (colon, airway, vessels)
- Virtual colonoscopy (CT colonography) — alternative to conventional colonoscopy

---

## CT Contrast Agents

### Iodinated Contrast Media (IV Contrast)
- Most common CT contrast agent
- Iodine strongly attenuates X-rays → vessels and vascular lesions appear bright
- Administered intravenously (IV)

**Types:**

| Type | Example | Properties |
|---|---|---|
| Ionic (high osmolality) | Diatrizoate (Gastrografin) | Older; higher adverse reaction rate |
| Non-ionic (low osmolality) | Iohexol, Iopamidol, Iomeprol | Modern standard; fewer reactions |
| Iso-osmolar | Iodixanol | Lowest reaction risk; expensive |

**Phases of Enhancement (timing matters!):**

| Phase | Time After Injection | What It Shows |
|---|---|---|
| Non-contrast | Before injection | Baseline; calcification; blood |
| Arterial | 20–35 sec | Arteries, hypervascular tumours (HCC, RCC) |
| Portal venous | 60–80 sec | Liver parenchyma, portal vein, bowel wall |
| Delayed | 3–10 min | Fibrosis, collecting system (urogram) |
| Nephrographic | 100–120 sec | Renal cortex and medulla equally enhanced |

### Oral Contrast
- Dilute iodine or barium solution swallowed before scan
- Opacifies bowel lumen — helps distinguish bowel from other structures
- Positive oral contrast: HU &gt; 100 (appears white)
- Neutral oral contrast: water or methylcellulose (HU ~0) — better for mucosal detail

### Rectal Contrast
- Used for pelvic/rectal pathology
- Opacifies the rectum and sigmoid colon

### Contrast Complications

**Risk factors for adverse reactions:**
- Prior contrast reaction (most important risk factor)
- Asthma or significant allergy history
- Renal impairment (risk of contrast-induced nephropathy — CIN)
- Metformin (must be withheld 48 hours post-contrast if eGFR &lt;60)
- Thyroid disease (iodine load)

**Adverse reaction classification:**

| Category | Examples | Management |
|---|---|---|
| Mild | Nausea, hives, itching | Monitor; antihistamine if needed |
| Moderate | Bronchospasm, urticaria, tachycardia | Active treatment; IV antihistamine, bronchodilator |
| Severe (anaphylactoid) | Anaphylaxis, hypotension, cardiac arrest | IM adrenaline 0.5 mg (1:1000), resuscitation |

**Contrast-Induced Nephropathy (CIN):**
- Rise in creatinine ≥25% or ≥44 µmol/L within 48–72 hours after contrast
- Risk increases with: pre-existing CKD (eGFR &lt;60), diabetes, dehydration, NSAIDs
- Prevention: IV hydration (0.9% NaCl pre and post), N-acetylcysteine (evidence weak), use lowest contrast volume, avoid nephrotoxic drugs

---

## Radiation Dose in CT

### Why CT Dose Matters
CT accounts for only **~10% of all radiological examinations** but contributes **~70% of total medical radiation dose** to the population. Understanding dose is essential for justification and optimisation.

### Dose Descriptors

| Metric | Definition | Unit |
|---|---|---|
| CTDI (CT Dose Index) | Average dose across phantom in a single rotation | mGy |
| CTDIvol | Volume CTDI — accounts for pitch | mGy |
| DLP (Dose Length Product) | CTDIvol × scan length | mGy·cm |
| Effective Dose (E) | DLP × conversion factor (k) — estimates whole-body risk | mSv |

**Conversion factors (k) to estimate effective dose:**

| Body Region | k Factor (mSv / mGy·cm) |
|---|---|
| Head | 0.0021 |
| Chest | 0.014 |
| Abdomen | 0.015 |
| Pelvis | 0.015 |

### Typical Effective Doses

| Examination | Effective Dose | Equivalent Background Radiation |
|---|---|---|
| Chest X-ray | 0.1 mSv | 10 days |
| CT Head | 2 mSv | 8 months |
| CT Chest | 7 mSv | 2.4 years |
| CT Abdomen and Pelvis | 10 mSv | 3.4 years |
| CT Pulmonary Angiography | 4 mSv | 16 months |
| CT Coronary Angiography | 2–16 mSv | 8 months – 5.5 years |
| PET-CT (whole body) | 14–25 mSv | ~5–8 years |

### Dose Reduction Strategies (ALARA Principle)

**ALARA = As Low As Reasonably Achievable**

| Strategy | How It Works |
|---|---|
| **Tube current modulation (TCM)** | Automatically adjusts mA based on patient size and body region |
| **kVp optimisation** | Lower kVp for small patients; reduces dose while maintaining contrast |
| **Iterative/AI reconstruction** | Allows 30–80% mAs reduction without loss of diagnostic quality |
| **Scan length limitation** | Only scan the clinically relevant area |
| **Avoid unnecessary phases** | Minimise multi-phase protocols; use single phase where possible |
| **Automatic exposure control (AEC)** | Adjusts dose per rotation based on patient attenuation |
| **Bismuth shielding** | For lens, thyroid, breast (controversial — may affect AEC) |
| **Paediatric protocols** | Weight-based parameters; size-specific dose estimates (SSDE) |

### Stochastic vs Deterministic Effects of CT Radiation

| Effect | Type | Threshold | Example |
|---|---|---|---|
| Cancer risk | Stochastic | No threshold | Small increased risk with each CT |
| Cataract | Deterministic | ~500 mGy to lens | Rare with modern CT |
| Skin injury | Deterministic | &gt;2000 mGy per session | Only with fluoroscopy/CT fluoroscopy |

---

## Clinical Applications of CT

### Neuroimaging (Head and Spine)

**Non-contrast CT head — First-line for:**
- Acute stroke (to exclude hemorrhage before thrombolysis)
- Head trauma (intracranial hemorrhage, skull fractures)
- Raised intracranial pressure (hydrocephalus, midline shift)
- Acute sinusitis, mastoiditis

**Contrast CT head — for:**
- Brain tumors, metastases, meningitis, abscess

**CT Angiography (CTA) head and neck:**
- Intracranial aneurysm, AVM
- Carotid artery stenosis
- Acute stroke vessel occlusion (CTA + CT perfusion — stroke protocol)

**CT Spine:**
- Fractures (superior to MRI for acute bone detail)
- Spinal canal compromise
- Pre-operative planning
- Disc calcification, osteophytes

### Thoracic CT

**High-Resolution CT (HRCT) Chest:**
- Thin slices (0.625–1.25 mm), sharp kernel
- Interstitial lung disease (ILD): UIP, NSIP, sarcoidosis
- Bronchiectasis, emphysema
- Not for masses or vascular pathology

**Standard CT Chest:**
- Lung cancer staging, mediastinal masses
- Pleural effusion, pleural disease
- Lymph node assessment

**CT Pulmonary Angiography (CTPA):**
- Gold standard for pulmonary embolism
- Arterial phase (bolus tracking at pulmonary trunk ~100 HU threshold)
- Also assesses RV size (prognostic — RV:LV ratio &gt; 0.9 = high risk PE)

### Abdominal and Pelvic CT

**Triple-phase liver CT:**
- Non-contrast + Arterial + Portal venous
- Hepatocellular carcinoma (HCC): arterial enhancement + venous washout
- Liver metastases, cholangiocarcinoma, haemangioma

**CT Urography (CTU):**
- Non-contrast + Nephrographic + Delayed (urogram) phases
- Renal stones, urothelial tumours, hydronephrosis

**CT Colonography (Virtual Colonoscopy):**
- Bowel preparation + air insufflation
- Detection of colorectal polyps and cancer
- Screening alternative to colonoscopy

**Acute Abdomen CT:**
- Appendicitis, bowel obstruction, perforation (free air)
- Acute pancreatitis (Balthazar score for severity)
- Diverticulitis, mesenteric ischaemia

### Vascular CT (CT Angiography)

| Application | Timing | Clinical Use |
|---|---|---|
| CT Aortography | Arterial (~25–30s) | Aortic aneurysm, dissection (Type A vs B) |
| CTPA | Pulmonary arterial (~15s) | Pulmonary embolism |
| Renal CTA | Arterial | Renal artery stenosis, fibromuscular dysplasia |
| Peripheral CTA | Arterial + delayed | Peripheral arterial disease |
| Portal venography | Portal venous (65s) | Portal vein thrombosis, TIPS assessment |

### Trauma CT

**CT Trauma Protocol — "Pan-scan":**
- CT head, neck, chest, abdomen, pelvis in one acquisition
- Standard of care for major trauma
- Detects: intracranial injury, pneumothorax, haemothorax, solid organ laceration, pelvic fractures, aortic injury

---

## Special CT Techniques

### Dual-Energy CT (DECT) / Spectral CT
Two X-ray beams at **different kVp** simultaneously (or very rapidly alternating):

**Clinical applications:**

| Application | How DECT Helps |
|---|---|
| Iodine mapping | Separates iodine from tissue; creates virtual non-contrast images |
| Uric acid gout | Differentiates uric acid crystals from calcium (colour-coded) |
| Bone removal | Removes bone from CTA without manual editing |
| Lung ventilation-perfusion | Iodine maps as perfusion surrogate |
| Kidney stones | Differentiates uric acid from calcium stones |
| Metal artifact reduction | Virtual monoenergetic images at high keV |

### Cardiac CT

**CT Calcium Scoring (CTCS):**
- Non-contrast, prospective ECG-gated
- Measures coronary artery calcification
- **Agatston Score**:
  - 0 = no calcification (very low risk)
  - 1–100 = mild
  - 101–400 = moderate
  - &gt; 400 = severe (high risk of cardiac events)
- Used for cardiovascular risk stratification

**CT Coronary Angiography (CTCA):**
- IV contrast + beta-blocker (HR &lt; 65 bpm) + nitroglycerin (vasodilation)
- Retrospective or prospective ECG gating
- Assesses: stenosis degree, plaque type (calcified vs non-calcified), anomalous coronary arteries
- **High negative predictive value** — excellent for excluding significant CAD

### CT Perfusion

Repeated CT images at the same level after contrast injection to map:
- **Cerebral Blood Flow (CBF)**
- **Cerebral Blood Volume (CBV)**
- **Mean Transit Time (MTT)**
- **Time to Peak (TTP)**

**Acute Stroke CT Perfusion:**
- **Ischemic core**: CBF reduced, CBV reduced → irreversible damage
- **Penumbra**: CBF reduced, CBV maintained → salvageable with reperfusion
- Core-Penumbra mismatch → patient benefits from thrombectomy

### CT-Guided Interventions

- **CT-guided biopsy**: real-time CT guidance for percutaneous biopsy of lung, liver, bone, retroperitoneal masses
- **CT-guided drainage**: abscess, pleural effusion
- **Radiofrequency ablation (RFA)**: CT-guided thermal ablation of tumours (liver, kidney, lung)
- **Vertebroplasty / Kyphoplasty**: cement injection into fractured vertebra under CT guidance

### Photon-Counting CT (PC-CT)
The **newest generation** of CT technology:
- Traditional detectors: integrate total X-ray energy → one signal
- Photon-counting detectors: count **individual photons** and measure their energy
- Benefits:
  - Intrinsically multi-energy (spectral information from every scan)
  - Smaller detector elements → higher spatial resolution
  - Reduced electronic noise → lower dose
  - Material decomposition without dual-energy acquisition

---

## CT Artifacts — Recognition and Causes

| Artifact | Appearance | Cause | Solution |
|---|---|---|---|
| **Beam hardening** | Dark band between dense objects; "cupping" | Low-energy photons absorbed first; beam becomes harder | Bow-tie filter, calibration, dual-energy, change kVp |
| **Streak artifact** | Bright/dark streaks radiating from dense objects | High-density (metal, bone, contrast) | Metal artifact reduction (MAR), DECT high-keV |
| **Ring artifact** | Concentric rings centred on scan isocentre | Faulty detector element | Detector calibration |
| **Motion artifact** | Blurring, ghosting, "double-edge" | Patient movement during scan | Faster scan, sedation, coaching; cardiac gating |
| **Partial volume averaging** | Blurring of sharp edges between tissues | Thick slices averaging two tissues in one voxel | Use thinner slices |
| **Quantum mottle (noise)** | Grainy, salt-and-pepper appearance | Insufficient photons (low mAs) | Increase mAs or use iterative reconstruction |
| **Staircase artifact** | Staircase appearance on MPR | Thick slice thickness with large pitch | Thin slices, lower pitch, isotropic acquisition |
| **Helical (windmill) artifact** | Rotating stripe pattern | Helical interpolation; rapid density change | Reduce pitch, retrospective reconstruction |

---

## CT Protocols — Designing a CT Examination

A **CT protocol** defines all acquisition parameters for a specific clinical indication.

### Key Protocol Parameters

| Parameter | What It Controls |
|---|---|
| kVp | Beam energy (penetration, contrast) |
| mAs (effective) | Dose and noise |
| Rotation time | Speed; cardiac motion; gantry heat |
| Collimation | Detector row configuration |
| Pitch | Table speed vs rotation |
| FOV | Field of view |
| Slice thickness | Axial resolution |
| Reconstruction kernel | Sharpness vs noise balance |
| Contrast timing/phase | What anatomy/pathology to highlight |

### Example: Acute Pulmonary Embolism Protocol

| Parameter | Value |
|---|---|
| Region | Chest (carina to diaphragm) |
| Phase | Arterial — bolus tracking at pulmonary trunk (threshold 100 HU) |
| kVp | 100 (reduces dose; good iodine enhancement) |
| mAs | Auto (TCM active) |
| Rotation time | 0.33 s |
| Pitch | 1.2 |
| Collimation | 64 × 0.625 mm |
| Reconstruction thickness | 1.25 mm axial + MPR coronal/sagittal |
| Contrast volume | 60–80 mL at 4–5 mL/s + 40 mL saline flush |
| Window | Mediastinal (WL +50, WW 350) + Lung (WL −600, WW 1500) |

---

## CT vs Other Imaging Modalities

| Feature | CT | MRI | Ultrasound | PET-CT |
|---|---|---|---|---|
| Radiation | Yes (ionising) | No | No | Yes (higher) |
| Soft tissue contrast | Good | Excellent | Moderate | Good |
| Bone detail | Excellent | Moderate | Poor | Moderate |
| Speed | Fast (seconds) | Slow (20–60 min) | Real-time | Slow (30–60 min) |
| Claustrophobia | Low risk | High risk | None | Low risk |
| Metal implants | Generally OK | Often contraindicated | OK | Generally OK |
| Cost | Moderate | High | Low | Very high |
| Portability | No | No | Yes | No |
| Best use | Acute trauma, bone, vascular, screening | CNS, MSK, soft tissue tumours, spine | Abdomen, pelvis, thyroid, vessels | Oncology staging, neurology |

---

## Advantages and Limitations of CT

### Advantages
- Rapid acquisition — entire body in under 30 seconds
- Excellent bone and vascular detail
- Widely available 24/7 in most hospitals
- No contraindication from metallic implants (usually)
- Multi-planar reconstructions from a single acquisition
- Quantitative measurements (HU, volume, perfusion)
- Guided interventional procedures

### Limitations
- **Ionising radiation** — not suitable for repeated surveillance in young patients without strong indication
- **Contrast risks** — nephrotoxicity, allergy, extravasation
- **Lower soft tissue contrast** than MRI (especially brain, spine, muscle, ligaments)
- **Not suitable for pregnancy** (first trimester especially) without strong clinical justification
- **High radiation in children** — greater lifetime risk due to longer life expectancy
- **Limited cardiac motion** without ECG gating
- **Artefacts from metal** (hip prostheses, dental implants, spinal hardware)

---

## Summary: CT at a Glance

| Topic | Key Point |
|---|---|
| Principle | Rotating X-ray beam → hundreds of projections → computer reconstruction |
| HU scale | Air = −1000, Water = 0, Bone = +400 to +1000 |
| Detector rows | 64–320 rows in modern scanners |
| Pitch | Table movement ÷ beam collimation |
| Reconstruction | FBP (fast), Iterative (lower dose), AI (lowest dose) |
| Windowing | WL = centre tissue density; WW = contrast range |
| Dose | CT chest ~7 mSv; head ~2 mSv; abdomen/pelvis ~10 mSv |
| Contrast phases | Non-contrast → Arterial (25s) → Portal venous (65s) → Delayed (3–10 min) |
| Dose reduction | TCM, low kVp, iterative/AI reconstruction, minimise phases |
| Special techniques | DECT, Cardiac CT, CT Perfusion, CT Angiography, Photon-counting CT |
| Common artifacts | Beam hardening, streak (metal), ring, motion, partial volume |

---

> **Clinical Pearl**: In any emergency setting, CT is the most valuable imaging tool — it is fast, available, and provides a whole-body assessment that no other modality can match in the acute setting. Mastering CT interpretation is essential for every medical professional working in modern healthcare.
