---
id: computers-in-medical-imaging
title: "Computers in Medical Imaging"
sidebar_label: "Computers in Medical Imaging"
---

# Computers in Medical Imaging

<div className="book-objectives">

**Learning Objectives**

By the end of this chapter, the student should be able to:

1. Describe the fundamental components of a computer system and relate each to its role in medical imaging
2. Explain the binary number system, bit depth, and how digital images are represented as matrices of pixel values
3. Calculate image file sizes from matrix size, bit depth, and number of frames
4. Describe the DICOM standard — its structure, purpose, and the role of the DICOM header
5. Explain the architecture of a PACS system — acquisition gateway, archive server, web server, and workstations
6. Distinguish between lossless and lossy image compression and state the regulatory constraints on each
7. Describe the RIS, HIS, and the HL7/IHE integration framework
8. Explain how digital image processing operations (windowing, filtering, edge enhancement) manipulate pixel values
9. Describe the principles and clinical applications of artificial intelligence and computer-aided detection in radiology
10. Explain cybersecurity risks specific to medical imaging systems and outline measures to mitigate them

</div>

---

## 1. Historical Context

The introduction of digital computers into medical imaging was one of the most transformative developments in the history of radiology. The first computerised images in medicine were CT scans produced by Hounsfield and Cormack in 1972 — a feat that earned them the Nobel Prize in Physiology or Medicine in 1979. CT was, from its inception, a wholly digital technology: the image existed only as a matrix of numbers computed from detector readings, never as a direct exposure of film.

Digital radiography (DR), digital fluoroscopy, digital mammography, MRI, nuclear medicine, and ultrasound all produce images as numerical data. Modern radiology departments are entirely filmless — images are acquired, stored, transmitted, displayed, and archived digitally. Understanding the principles of computer science that underpin this infrastructure is no longer optional for the radiographer; it is a clinical and regulatory requirement.

---

## 2. Fundamental Computer Architecture

### 2.1 The Von Neumann Architecture

All modern computers are based on the **Von Neumann architecture** (1945), which defines four fundamental components:
1. **CPU** — executes instructions
2. **Memory (RAM)** — holds data and instructions currently in use
3. **Storage** — holds data persistently when power is off
4. **Input/Output (I/O)** — interfaces with users and external systems

In medical imaging systems, each component has a specific role:

| Component | General Function | Role in Medical Imaging |
|---|---|---|
| **CPU** (Central Processing Unit) | Executes programme instructions; arithmetic and logic | Image reconstruction (CT backprojection), DICOM parsing, workflow management |
| **GPU** (Graphics Processing Unit) | Massively parallel floating-point computation | 3D volume rendering, iterative CT reconstruction, AI inference |
| **RAM** (Random Access Memory) | Fast, volatile working memory | Holds active images during display and processing; typical workstation: 32–128 GB |
| **HDD** (Hard Disk Drive) | Magnetic spinning-disk storage | Long-term PACS archive (high-capacity, cost-effective) |
| **SSD** (Solid-State Drive) | Flash memory storage | Fast cache for recently accessed studies; RAID arrays in primary PACS storage |
| **NIC** (Network Interface Card) | Network communication | Transfers DICOM images across hospital network; Gigabit or 10 Gigabit Ethernet |
| **Display card** | Drives monitors | Medical-grade DICOM-calibrated displays require dedicated display controllers |

### 2.2 Operating Systems in Medical Imaging

Medical imaging equipment typically runs on:
- **Windows**: Most radiology workstations, PACS clients, and some modality consoles
- **Linux**: PACS servers, archive systems, and many modality acquisition computers (stability, cost, security)
- **Real-time operating systems (RTOS)**: Embedded within modality hardware (MRI scanners, CT gantries) where precise timing is essential

<div className="book-important">

**Software Patching and Security**: Medical imaging computers running Windows require regular OS and security patches — but patches must be validated by the equipment manufacturer before deployment, as they may affect modality software stability. This creates a tension between cybersecurity (apply patches promptly) and device validation (test first). Unpatched systems are a major source of vulnerability in healthcare IT.

</div>

---

## 3. Digital Data Representation

### 3.1 The Binary Number System

Computers store and process all information as **binary** (base-2) numbers using only two states: 0 and 1. These are called **bits** (binary digits).

Physical implementation:
- Electronic circuits: 0 = low voltage (~0 V); 1 = high voltage (~5 V or ~3.3 V)
- Magnetic storage: 0 and 1 represent opposite magnetic polarisations
- Optical storage: 0 = pit, 1 = land (CD/DVD)

**Powers of 2** — key values for medical imaging:

| Bits (n) | Values representable (2ⁿ) | Application |
|---|---|---|
| 8 bits (1 byte) | 256 levels | Basic image transfer unit |
| 10 bits | 1,024 levels | Early CR systems |
| 12 bits | 4,096 levels | Standard DR, CT, MRI |
| 14 bits | 16,384 levels | Modern DR, mammography DR |
| 16 bits | 65,536 levels | PET/CT, nuclear medicine; some MRI |

### 3.2 Data Units

| Unit | Equivalence | Approximate Size |
|---|---|---|
| 1 bit (b) | — | Smallest unit of information |
| 1 byte (B) | 8 bits | One ASCII character |
| 1 kilobyte (KB) | 1,024 bytes | Short text document |
| 1 megabyte (MB) | 1,024 KB | 1 uncompressed radiograph |
| 1 gigabyte (GB) | 1,024 MB | 100–125 uncompressed radiographs |
| 1 terabyte (TB) | 1,024 GB | ~125,000 uncompressed radiographs |
| 1 petabyte (PB) | 1,024 TB | Large hospital PACS archive |

### 3.3 The Digital Image: Pixels and Matrices

<div className="book-definition">

**Pixel** (picture element): The smallest discrete unit of a digital image. Each pixel has a position defined by its row and column coordinates within the image matrix, and a value (grey level or colour value) stored as a binary number.

</div>

A digital image is represented as a **matrix** (rectangular array) of pixels:

```
Image matrix = rows × columns pixels
Each pixel = N bits of data
```

**Image file size** (uncompressed):

File size (bytes) = (rows × columns × bit depth) / 8

**Worked examples**:

*Example 1*: Standard DR chest radiograph — 2,500 × 3,000 pixels, 14-bit:
- File size = (2,500 × 3,000 × 14) / 8 = 13,125,000 bytes ≈ **12.5 MB**

*Example 2*: CT examination — 512 × 512 matrix, 12-bit, 300 slices:
- File size = (512 × 512 × 12 × 300) / 8 = 117,964,800 bytes ≈ **112.5 MB**

*Example 3*: Mammography DR — 4,000 × 5,000 pixels, 14-bit, bilateral (4 images):
- Per image = (4,000 × 5,000 × 14) / 8 = 35,000,000 bytes = 33.4 MB
- Total = 33.4 × 4 = **133 MB**

### 3.4 Bit Depth and Greyscale Resolution

**Bit depth** determines the number of discrete grey levels the image can represent. This is distinct from spatial resolution (matrix size):

| Bit Depth | Grey Levels | Distinguishable OD Steps | Primary Use |
|---|---|---|---|
| 8-bit | 256 | ~0.015 OD per step | Hardcopy printing, web display |
| 10-bit | 1,024 | ~0.004 OD per step | Older CR systems |
| 12-bit | 4,096 | ~0.001 OD per step | CT, MRI, standard DR |
| 14-bit | 16,384 | ~0.00025 OD per step | DR, mammography DR |

<div className="book-keypoint">

The human eye can distinguish approximately 30–60 simultaneous grey levels on a display, even though the image may contain 4,096–16,384 grey levels. This is why **windowing** (selecting a subset of grey levels to map to the display range) is essential — to reveal the relevant grey levels for a given anatomical region within the monitor's displayable range.

</div>

---

## 4. Digital Image Processing

### 4.1 Definition and Purpose

Digital image processing refers to computer operations that modify the numerical values of pixels to enhance the diagnostic utility of the image. Unlike screen-film, digital systems permit post-acquisition manipulation — the same raw image data can be processed in multiple ways for different diagnostic purposes.

### 4.2 Windowing (Window Width and Level)

**Window Level (WL / Centre)**: The pixel value mapped to the middle grey of the display. Equivalent to setting the "brightness."

**Window Width (WW)**: The range of pixel values mapped across the full grey scale of the display. Equivalent to setting the "contrast."

Pixels below (WL − WW/2) display as black; pixels above (WL + WW/2) display as white; values within the window are linearly mapped to grey.

**Clinical windowing presets**:

| Tissue / Application | Window Centre (WL) | Window Width (WW) |
|---|---|---|
| Soft tissue (CT) | 40–60 HU | 300–400 HU |
| Lung (CT) | −600 to −700 HU | 1,400–1,600 HU |
| Bone (CT) | 400–700 HU | 1,500–2,500 HU |
| Brain (CT) | 35–40 HU | 70–100 HU |
| Subdural haematoma (CT) | 75–80 HU | 150–200 HU |
| Liver (CT) | 60–80 HU | 150–200 HU |
| DR chest | System-specific | System-specific |

### 4.3 Spatial Filtering

Spatial filtering applies a mathematical kernel (convolution matrix) to each pixel and its neighbours, producing a new pixel value:

**Smoothing (low-pass) filters**:
- Average the values of surrounding pixels
- Reduce high-frequency noise (quantum mottle, electronic noise)
- Trade-off: reduces both noise and fine detail (sharpness)
- Example kernel: uniform 3×3 averaging (each of 9 pixels weighted equally)

**Sharpening (high-pass / edge-enhancement) filters**:
- Amplify high-frequency components (sharp edges and boundaries)
- Increase apparent sharpness of bone edges, vessel walls
- Trade-off: amplifies noise as well as edges
- Example: unsharp masking — subtract a blurred version from the original

**Unsharp Masking** (most common DR post-processing technique):
1. Create a blurred (low-pass filtered) copy of the image
2. Subtract the blurred copy from the original
3. The difference image contains only high-frequency (edge) information
4. Multiply by enhancement factor and add back to original
5. Result: edges appear sharper; low-frequency background unchanged

### 4.4 Histogram Equalisation and LUT Processing

**Histogram** of a digital image: A plot of the number of pixels at each grey level. The histogram shape reflects the exposure and anatomy:
- Correctly exposed DR image: histogram well within the detector's dynamic range
- Underexposed: histogram shifted toward lower pixel values
- Overexposed: histogram shifted toward higher pixel values

**Look-Up Table (LUT)**: A mapping table that converts input pixel values (from the detector) to output display values. LUTs implement windowing, gamma correction, and other non-linear tone-mapping operations without altering the stored pixel data.

<div className="book-pearl">

**For-Processing vs. For-Presentation Images in DICOM**: DICOM distinguishes between "for-processing" images (raw detector values, no LUT applied — used for computer analysis and AI) and "for-presentation" images (LUT applied, ready for display). Radiographers should be aware that CAD systems and AI algorithms typically operate on for-processing data, not the post-processed display image.

</div>

---

## 5. The DICOM Standard

### 5.1 History and Purpose

<div className="book-definition">

**DICOM** (Digital Imaging and Communications in Medicine): An international standard (NEMA PS 3 / ISO 12052) defining the format for storing, transmitting, and displaying medical imaging data. Developed jointly by the ACR (American College of Radiology) and NEMA (National Electrical Manufacturers Association) from the mid-1980s; first version released 1985 (ACR-NEMA 1.0); current version: DICOM 2023.

</div>

Before DICOM, each manufacturer used proprietary formats — images from one vendor's CT scanner could not be viewed on another vendor's workstation. DICOM solved this interoperability problem, enabling the filmless hospital.

### 5.2 DICOM File Structure

Each DICOM file consists of two parts:

**1. DICOM Header (Metadata)**:
A structured set of **data elements** (attributes), each identified by a unique **tag** in the format (Group number, Element number):

| Tag | Attribute | Example Value |
|---|---|---|
| (0010,0010) | Patient Name | SMITH^JOHN |
| (0010,0020) | Patient ID | NHS1234567 |
| (0010,0030) | Date of Birth | 19750315 |
| (0008,0020) | Study Date | 20260417 |
| (0008,0060) | Modality | CR, DX, CT, MR, PT |
| (0008,103E) | Series Description | PA CHEST |
| (0018,0060) | kVp | 120 |
| (0018,1151) | X-Ray Tube Current (mA) | 250 |
| (0028,0010) | Rows | 2048 |
| (0028,0011) | Columns | 2048 |
| (0028,0100) | Bits Allocated | 16 |
| (0028,0101) | Bits Stored | 14 |
| (0028,1050) | Window Center | 40 |
| (0028,1051) | Window Width | 400 |

**2. DICOM Pixel Data**:
The actual image pixel values, stored as a binary array following the header.

### 5.3 DICOM Services (Service Object Pairs — SOPs)

DICOM defines not just file formats but also **services** — how systems communicate:

| Service | Function | Example |
|---|---|---|
| **C-STORE** | Send/receive images | Modality sends image to PACS |
| **C-FIND** | Query for studies/series | Workstation queries PACS for patient studies |
| **C-MOVE** | Retrieve images | Workstation requests images from PACS archive |
| **C-GET** | Pull images (newer) | Similar to C-MOVE but connection-oriented |
| **C-ECHO** | Verify connectivity | Test that PACS connection is working |
| **MPPS** (Modality Performed Procedure Step) | Report procedure completion to RIS | Modality reports exam done |
| **Structured Reporting (SR)** | Store CAD/AI results | AI detection stored as DICOM SR |
| **Presentation State** | Store display settings | Save window/level, annotations |

### 5.4 DICOM UID (Unique Identifiers)

Every study, series, and image in DICOM is assigned a globally unique identifier (UID). UIDs are long numerical strings (e.g., 1.2.840.10008.5.1.4.1.1.1.1) that uniquely identify:
- The institution
- The equipment
- The study
- The series
- The specific image instance

This prevents any two images anywhere in the world from having the same identifier — critical for archive integrity.

---

## 6. PACS — Picture Archiving and Communication System

### 6.1 Definition and Purpose

<div className="book-definition">

**PACS** (Picture Archiving and Communication System): An integrated system of hardware and software that acquires, stores, manages, distributes, and displays medical images. PACS replaces physical film, providing digital access to images from anywhere on the hospital network simultaneously.

</div>

### 6.2 PACS Architecture

A full PACS consists of several interconnected components:

```
[Modalities] → [Acquisition Gateway] → [Primary Storage] → [Archive]
                      ↓
              [DICOM Router / Broker]
                      ↓
        [Reporting Workstations] [Web Viewers] [Remote Access]
                      ↑
              [RIS Integration / Worklist]
```

**PACS Components in Detail**:

| Component | Function | Technical Details |
|---|---|---|
| **Acquisition gateway** | Receives DICOM images from modalities; performs QC | DICOM C-STORE SCP; may compress images |
| **Primary (short-term) storage** | Stores recent studies for fast access | RAID SSD/HDD array; typically 3–6 months online |
| **Archive (long-term storage)** | Permanent storage of all studies | Tape library, cloud storage, or deep archive HDDs; years to decades |
| **DICOM router/broker** | Directs images to correct destination based on rules | Routes by modality, body part, referring physician |
| **Reporting workstation** | Radiologist reporting; diagnostic display | DICOM-calibrated display (min 2 MP for general; 5 MP for mammography) |
| **Web viewer** | Clinician access from any browser | Zero-footprint HTML5/WebGL viewer; no local installation needed |
| **Worklist server** | Provides scheduled patient lists to modalities | DICOM MWL (Modality Worklist) service; eliminates manual data entry |

### 6.3 PACS Storage Tiers

Most PACS systems use a tiered storage architecture based on access frequency:

| Tier | Medium | Access Time | Typical Retention |
|---|---|---|---|
| **Tier 1 (cache)** | SSD RAID | &lt;1 second | Last 24–48 hours |
| **Tier 2 (primary)** | HDD RAID | 1–10 seconds | Last 3–12 months |
| **Tier 3 (near-line)** | High-capacity HDD | 10–60 seconds | 1–5 years |
| **Tier 4 (archive)** | Tape or cloud | Minutes to hours | 5–30+ years (legal requirement) |

### 6.4 PACS Advantages

| Advantage | Explanation |
|---|---|
| **Simultaneous access** | Multiple clinicians can view the same study from different locations simultaneously |
| **No film loss** | Digital archive; no lost, damaged, or misfiled films |
| **Prior comparison** | Prior studies instantly available alongside current study |
| **Remote reporting** | Teleradiology: reporting from home, different hospital, different country |
| **Integrated workflow** | Linked to RIS for automatic worklist management |
| **Space saving** | No physical film library; no film jackets |
| **Disaster recovery** | Geographically redundant backup sites |
| **Research and audit** | Easy extraction of image datasets for research |

### 6.5 PACS Limitations and Risks

| Risk | Mitigation |
|---|---|
| System downtime | Redundant servers; uninterruptible power supply; disaster recovery plan |
| Data loss | RAID redundancy; offsite backup; integrity checks |
| Cybersecurity | See Section 10 |
| Display calibration failure | Regular DICOM display QC (daily luminance check, monthly calibration) |
| Network congestion | Dedicated PACS VLAN; sufficient bandwidth |
| Migration challenges | DICOM conformance statements; careful planning for system upgrades |

---

## 7. RIS, HIS, and Healthcare IT Integration

### 7.1 Radiology Information System (RIS)

<div className="book-definition">

**RIS** (Radiology Information System): Software that manages the administrative and clinical workflow of a radiology department — patient scheduling, examination ordering, reporting, result distribution, dose recording, and billing.

</div>

Key RIS functions:

| Function | Detail |
|---|---|
| **Examination scheduling** | Books appointments; manages modality capacity |
| **Patient demographic management** | Stores patient details; links to HIS |
| **DICOM Worklist provision** | Sends examination details to modalities (eliminates re-keying) |
| **Reporting** | Voice recognition dictation; structured reporting templates |
| **Report distribution** | Sends finalized reports to referrers via HL7, email, or portal |
| **Dose recording** | Stores DLP (CT), DAP (fluoroscopy), ESD (radiography) — regulatory requirement |
| **Audit and statistics** | Examination volumes, report turnaround times, dose audits |

### 7.2 Hospital Information System (HIS)

The **HIS** (also called **EPR** — Electronic Patient Record, or **EMR** — Electronic Medical Record) is the hospital-wide patient record system containing:
- Patient demographics and registration
- Medical history and problem lists
- Medication records
- Laboratory results
- Discharge summaries
- All clinical orders (including radiology requests)

### 7.3 Integration Standards

**HL7 (Health Level 7)**:
- Message-based standard for exchanging clinical and administrative data between healthcare IT systems
- HL7 v2.x: Most widely deployed; text-based messages
- HL7 FHIR (Fast Healthcare Interoperability Resources): Modern, REST-based API standard
- Used for: order messages (HIS → RIS), report messages (RIS → HIS), patient demographic updates

**IHE (Integrating the Healthcare Enterprise)**:
- Framework of integration profiles that define how HL7 and DICOM standards should be implemented together to solve specific workflow problems
- Key profiles for radiology:
  - **SWF** (Scheduled Workflow): Order → worklist → acquisition → image storage → report
  - **PIR** (Patient Information Reconciliation): Corrects patient identity errors
  - **XDS-I** (Cross-Enterprise Document Sharing for Imaging): Inter-institutional image sharing
  - **RAD-69** (Retrieve Imaging Document Set): Fetches images from external institutions

**IHE Connectathon**: Annual international testing event where vendors verify that their systems implement IHE profiles correctly and interoperate with other vendors.

---

## 8. Image Compression

### 8.1 Why Compression Is Needed

Uncompressed medical images are very large:
- A 300-slice CT study: ~100–150 MB
- A 4-view mammography study (DR): ~150–200 MB
- A typical hospital PACS acquires 50–200 TB of new image data per year

Compression reduces storage requirements and network transmission times.

### 8.2 Lossless Compression

<div className="book-definition">

**Lossless Compression**: A compression method that allows the original data to be perfectly reconstructed from the compressed data. No pixel information is lost. The image after decompression is bit-for-bit identical to the original.

</div>

**Methods used in medical imaging**:
- **JPEG-LS**: Lossless version of JPEG; most common for radiographs; typical compression ratio 2:1 to 3:1
- **JPEG 2000 (lossless mode)**: Wavelet-based; 2:1 to 4:1 ratio
- **RLE** (Run-Length Encoding): Simple scheme encoding runs of identical values; limited compression for medical images

**Regulatory status**: Lossless compression is universally accepted for all diagnostic imaging applications.

### 8.3 Lossy Compression

<div className="book-definition">

**Lossy Compression**: A compression method that discards some image data to achieve greater size reduction. The decompressed image is not identical to the original — pixel values differ. The difference is designed to be imperceptible (or minimally perceptible) to the human observer.

</div>

**Methods used in medical imaging**:
- **JPEG (baseline)**: Discrete Cosine Transform; visible artefacts at high compression ratios (blocking artefacts)
- **JPEG 2000 (lossy mode)**: Wavelet-based; smoother degradation; preferred over baseline JPEG
- **Compression ratios**: 10:1 to 20:1 routinely used for some applications

**Regulatory constraints on lossy compression**:

| Application | Maximum Permitted Lossy Ratio | Notes |
|---|---|---|
| General radiography | 10:1 to 15:1 | ACR/AAPM guidelines |
| CT | 10:1 to 20:1 | Per slice independently |
| MRI | 10:1 to 20:1 | — |
| Mammography | Controversial; some bodies: lossless only for primary diagnosis | High-resolution; subtle findings |
| Nuclear medicine / PET | 10:1 | — |
| Archival primary data | Lossless recommended | Legal and medicolegal reasons |

<div className="book-important">

**Medicolegal Consideration**: The legal position in the UK (and most jurisdictions) is that lossy compression of primary diagnostic images must be validated for the specific application and compression ratio used. The Royal College of Radiologists (RCR) has published guidance stating that the radiologist reporting the examination must be able to confirm that image quality is not compromised by compression. Any lossy compression policy should be agreed by the radiology clinical lead and documented in the department's image quality assurance framework.

</div>

---

## 9. Displays and Workstations

### 9.1 Display Technology

Medical imaging workstations use **high-luminance, high-resolution LCD monitors**. Standard LCD consumer monitors are not acceptable for primary diagnosis due to insufficient luminance, non-calibrated response, and poor greyscale uniformity.

**Display requirements (AAPM TG-270 / JESRA X-0093)**:

| Parameter | General Radiography | Mammography |
|---|---|---|
| **Resolution** | 2 MP (1600×1200) minimum | 5 MP (2048×2560) minimum |
| **Maximum luminance** | 250–500 cd/m² | 500–600 cd/m² |
| **Luminance ratio (max/min)** | 250:1 minimum | 250:1 minimum |
| **Ambient light** | &lt;10 lux in reporting room | &lt;10 lux |
| **Calibration standard** | DICOM GSDF | DICOM GSDF |
| **QC frequency** | Daily visual check; monthly calibration | Daily visual check; monthly calibration |

### 9.2 DICOM Greyscale Standard Display Function (GSDF)

The **DICOM GSDF** defines how pixel values should be mapped to display luminance to produce a perceptually uniform response — equal pixel value steps produce perceptually equal grey level differences across the entire luminance range.

Without GSDF calibration:
- The non-linear response of LCD displays makes some grey levels appear compressed and others stretched
- Subtle density differences in important diagnostic regions may be invisible

GSDF calibration is performed by measuring the display's actual luminance response and adjusting the LUT in the display controller to match the theoretical DICOM GSDF curve.

---

## 10. Artificial Intelligence in Medical Imaging

### 10.1 Overview

Artificial intelligence (AI) in medical imaging refers to computer algorithms that perform tasks traditionally requiring human intelligence — pattern recognition, classification, measurement, and decision support. The dominant AI approach in current clinical practice is **deep learning** using **convolutional neural networks (CNNs)**.

<div className="book-definition">

**Convolutional Neural Network (CNN)**: A type of deep neural network designed for processing grid-structured data (images). CNNs learn spatial hierarchies of features — edges → textures → shapes → objects — through multiple convolutional layers applied to the pixel data. Training requires large labelled datasets and significant computational power (GPUs).

</div>

### 10.2 Clinical Applications

**Computer-Aided Detection (CAD)**:
- Original CAD systems (1990s–2000s): Rule-based algorithms for specific detection tasks (mammographic microcalcifications, lung nodules on CT)
- Modern AI CAD (2015–present): Deep learning; substantially improved sensitivity and specificity

| Application | Modality | Performance (approximate) |
|---|---|---|
| Lung nodule detection | CT | Sensitivity 90–95% (comparable to radiologist) |
| Pulmonary embolism detection | CT pulmonary angiography | Sensitivity 85–90% |
| Intracranial haemorrhage triage | CT head | AUC 0.94–0.99 |
| Pneumothorax detection | Chest DR | Sensitivity 85–92% |
| Bone age estimation | Hand radiograph | Mean error &lt;6 months vs radiologist |
| Diabetic retinopathy | Fundus photography | Sensitivity/specificity &gt;90% |
| Breast cancer detection | Mammography | Non-inferior to radiologist in some trials |

**AI for Image Reconstruction**:
- **Iterative reconstruction** (CT): Reduces noise at lower dose; model-based algorithms (MBIR)
- **Deep learning reconstruction** (CT, MRI): Neural networks trained to reconstruct high-quality images from sparse or noisy data; enables 50–80% dose reduction in CT; accelerates MRI acquisition by factor 2–4×

**AI for Workflow Triage**:
- Prioritises worklist by urgency
- Flags critical findings (haemorrhage, pneumothorax, aortic dissection) for immediate radiologist attention
- Reduces time-to-treatment for time-critical conditions

### 10.3 Limitations and Risks of AI

| Limitation | Clinical Implication |
|---|---|
| **Training data bias** | AI trained on one population may underperform on another (different demographics, scanner type) |
| **Out-of-distribution failure** | AI may fail silently on unusual presentations not in training data |
| **Black box problem** | Difficult to understand why AI made a specific decision |
| **Regulatory approval** | MHRA (UK), FDA (USA) regulation required before clinical deployment |
| **Medicolegal responsibility** | The reporting radiologist (not the AI) remains legally responsible for the report |
| **Negative learning** | Clinicians may over-trust AI outputs and miss findings not flagged |

### 10.4 Regulatory Framework for AI in Medical Imaging

In the UK, AI medical devices are regulated by the **MHRA** (Medicines and Healthcare products Regulatory Agency) as Medical Devices under UK MDR 2002 (updated post-Brexit). Classification:
- Most diagnostic AI tools: Class IIa or IIb medical devices
- Must demonstrate clinical safety and efficacy before deployment
- Post-market surveillance required (ongoing monitoring of real-world performance)

---

## 11. Cybersecurity in Medical Imaging

### 11.1 Threat Landscape

Medical imaging systems are high-value targets for cyberattack because:
- They hold sensitive patient data (GDPR/DPA 2018 obligations)
- They are connected to hospital networks with sometimes-poor segmentation
- Many run legacy operating systems (Windows XP, Windows 7) that no longer receive security patches
- The consequences of downtime are severe (patient safety implications)

**Common attack vectors**:

| Attack Type | Description | Imaging-Specific Example |
|---|---|---|
| **Ransomware** | Encrypts files; demands payment for decryption key | Encrypts PACS archive; department goes offline |
| **Phishing** | Deceptive emails trick users into revealing credentials | Access to RIS or PACS admin account |
| **Unpatched vulnerabilities** | Known software flaws exploited before patching | EternalBlue exploit (MS17-010) used in WannaCry (2017) |
| **Insider threat** | Malicious or negligent staff action | Unauthorised access to patient images |
| **Medical device compromise** | Attack via DICOM port or modality network connection | Modality used as entry point to hospital network |

### 11.2 Protective Measures

| Measure | Implementation |
|---|---|
| **Network segmentation** | Dedicated VLAN for medical devices; firewall rules restricting DICOM traffic |
| **Regular patching** | Manufacturer-validated patches applied promptly |
| **Access controls** | Role-based access; strong password policy; multi-factor authentication (MFA) |
| **Encryption** | TLS for DICOM TLS; encrypted storage for sensitive data |
| **Backup and recovery** | Air-gapped backups tested regularly; defined recovery time objectives |
| **Staff training** | Phishing awareness; clear reporting procedures |
| **Incident response plan** | Defined playbook for system compromise |

<div className="book-important">

**WannaCry 2017 — Lessons for Radiology**: The WannaCry ransomware attack on 12 May 2017 affected 80 of 236 NHS trusts in England, forcing cancellation of ~19,000 appointments and operations. Imaging departments were severely affected. The vulnerability exploited (EternalBlue) had a published patch available since March 2017 — 2 months before the attack. This incident highlighted the critical importance of timely patching and robust backup strategies in medical imaging infrastructure.

</div>

---

## 12. Data Governance and Legal Framework

### 12.1 UK Legislation

| Legislation | Requirement for Medical Imaging |
|---|---|
| **Data Protection Act 2018 / UK GDPR** | Patient image data is special category health data; explicit consent, secure storage, breach notification within 72 hours |
| **NHS Records Management Code of Practice** | Minimum retention periods: adult radiographs 8 years; paediatric: until age 25 or 8 years (whichever is longer) |
| **Caldicott Principles (7th principle 2013)** | Duty to share information for patient benefit balanced against duty to protect |
| **CQC Fundamental Standards** | IT systems must support safe and effective care |

### 12.2 Image Retention Requirements

| Patient Category | Minimum Retention Period (UK) |
|---|---|
| Adult | 8 years from last entry |
| Child | Until age 25, or 8 years from last entry (whichever is longer) |
| Mental health patient | 20 years from last entry |
| Deceased patient | 8 years from date of death |
| Litigation involvement | Until legal proceedings are complete |

---

<div className="book-summary">

## Chapter Summary

Computers are the foundation of all modern medical imaging. Every digital modality produces images as numerical pixel matrices; understanding the underlying data structures is fundamental for the radiographer.

**Digital images** are matrices of pixels, each storing a grey level as an N-bit binary number. Bit depth (typically 12–14 bit for DR) determines the number of grey levels. File size = (rows × columns × bit depth) / 8 bytes. A 14-bit DR chest at 2,500 × 3,000 pixels is approximately 12.5 MB uncompressed.

**DICOM** is the universal standard that enables interoperability between imaging equipment. Each DICOM file contains a header (structured metadata tags identifying patient, study, acquisition parameters) followed by pixel data. DICOM services (C-STORE, C-FIND, C-MOVE) define how systems communicate. Every study, series, and image has a globally unique UID.

**PACS** provides digital acquisition, storage, retrieval, and display of images. Its tiered storage architecture (SSD cache → HDD primary → tape/cloud archive) balances access speed against cost. PACS is integrated with the RIS (managing radiology workflow, scheduling, reporting, dose recording) and HIS via HL7 messaging and IHE integration profiles.

**Image processing**: Windowing (WL/WW) selects the display grey range from the full bit depth. Spatial filtering (smoothing reduces noise; edge enhancement increases apparent sharpness) manipulates pixel values via convolution kernels.

**Compression**: Lossless (JPEG-LS, JPEG2000 lossless, 2:1–4:1) preserves every pixel value — universally accepted. Lossy (JPEG2000 lossy, 10:1–20:1) discards data — regulated; mammography often requires lossless for primary diagnosis.

**Display**: Diagnostic monitors must be DICOM GSDF-calibrated (minimum 2 MP for general; 5 MP for mammography; &gt;250 cd/m² luminance; &lt;10 lux ambient light). Regular QC is mandatory.

**AI**: Deep learning CNNs enable CAD for nodule detection, haemorrhage triage, fracture identification, and image reconstruction. AI requires MHRA/FDA regulatory approval before clinical use; medicolegal responsibility remains with the radiologist.

**Cybersecurity**: Medical imaging systems face real threats (ransomware, phishing, unpatched vulnerabilities). WannaCry 2017 demonstrated the consequences. Protective measures include network segmentation, patching, access controls, encryption, air-gapped backups, and staff training.

</div>
