---
id: computers-in-medical-imaging
title: "Computers in Medical Imaging"
sidebar_label: "Computers in Medical Imaging"
---

# Computers in Medical Imaging

Computers are integral to every aspect of modern medical imaging — from image acquisition and processing to storage, distribution, and display. Understanding basic computer concepts is essential for radiologic technologists working in digital environments.

## Basic Computer Components

### Hardware
| Component | Function |
|---|---|
| CPU (Central Processing Unit) | Executes instructions; performs calculations |
| RAM (Random Access Memory) | Temporary working memory during processing |
| Storage (HDD/SSD) | Permanent data storage |
| GPU (Graphics Processing Unit) | Accelerates image rendering and reconstruction |
| Network interface | Connects to hospital network/PACS |

### Software
- **Operating system**: Manages hardware resources (Windows, Linux)
- **Imaging software**: Acquisition, processing, and display applications
- **DICOM viewer**: Displays and manipulates medical images
- **AI tools**: Computer-aided detection (CAD) and diagnosis

## Digital Data Concepts

### Binary System
- Computers process data as binary digits (**bits**): 0 or 1
- **Byte** = 8 bits
- **Pixel** value stored as binary number

### Image Data Size
| Unit | Size |
|---|---|
| 1 Byte | 8 bits |
| 1 Kilobyte (KB) | 1,024 bytes |
| 1 Megabyte (MB) | 1,024 KB |
| 1 Gigabyte (GB) | 1,024 MB |

A single chest X-ray (DR): ~8–10 MB uncompressed

### Bit Depth (Greyscale Resolution)
- Determines the number of grey shades in the image
- **10-bit**: 1,024 grey levels
- **12-bit**: 4,096 grey levels
- **14-bit**: 16,384 grey levels (standard in modern DR)
- Higher bit depth → more subtle contrast differences visible

## DICOM Standard

**Digital Imaging and Communications in Medicine (DICOM)**:
- Universal standard for medical image storage and transfer
- Each image stored with a **header** containing patient data, acquisition parameters, and image metadata
- Enables interoperability between equipment from different manufacturers

## PACS — Picture Archiving and Communication System

**PACS** replaces physical film with digital storage and distribution:

| Component | Function |
|---|---|
| Acquisition gateway | Receives images from modalities |
| Archive server | Long-term image storage |
| Web server | Distributes images across the network |
| Workstations | Display and reporting |

**Benefits of PACS**:
- Simultaneous access from multiple locations
- No lost or damaged films
- Rapid image retrieval
- Integration with RIS and HIS

## RIS and HIS Integration

- **RIS (Radiology Information System)**: Manages radiology workflow — scheduling, reporting, billing
- **HIS (Hospital Information System)**: Hospital-wide patient record system
- **HL7**: Communication standard linking RIS/HIS with PACS

## Image Compression

Reduces file size for storage and transmission:

| Type | Description | Quality Loss |
|---|---|---|
| Lossless | No data lost; reversible | None |
| Lossy (e.g., JPEG) | Some data discarded | Yes |
| JPEG 2000 | Lossless or lossy | Optional |

**Regulatory note**: Lossy compression ratios for diagnostic images are governed by ACR/AAPM guidelines.

## Artificial Intelligence in Imaging

Modern AI applications include:
- **CAD (Computer-Aided Detection)**: Flags potential abnormalities (nodules, fractures)
- **Automated measurements**: Bone age, cardiac measurements
- **Image reconstruction**: Iterative CT reconstruction, MRI acceleration
- **Triage tools**: Prioritise urgent findings (e.g., pneumothorax, intracranial haemorrhage)
