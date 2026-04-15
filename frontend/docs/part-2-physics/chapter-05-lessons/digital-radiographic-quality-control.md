---
id: digital-radiographic-quality-control
title: "Digital Radiographic Quality Control"
sidebar_label: "Digital Radiographic Quality Control"
---

# Digital Radiographic Quality Control

Quality Control (QC) for digital radiographic systems ensures that CR and DR equipment consistently produces diagnostic-quality images at appropriate patient dose levels. Digital QC programmes differ from screen-film QC but are equally essential.

## QC Programme Overview

A digital radiographic QC programme includes:
1. Detector performance testing (CR and DR)
2. Monitor/display QC
3. Exposure index monitoring
4. Reject/repeat analysis
5. PACS and network performance
6. X-ray generator and tube testing

---

## Exposure Index Monitoring

The most important ongoing QC activity in digital radiography:

### Purpose
- Confirms patients are receiving appropriate radiation dose
- Detects dose creep (gradual unjustified dose increase)
- Identifies underexposure (noisy, non-diagnostic images)

### IEC Standard (IEC 62494-1)
| Parameter | Definition |
|---|---|
| Target EI | Recommended detector dose for a given examination |
| Exposure Index (EI) | Actual detector dose indicator |
| Deviation Index (DI) | Log-based measure of deviation from target |

**DI interpretation**:
- DI = 0: Ideal exposure
- DI = +1: ~26% above target
- DI = −1: ~20% below target
- |DI| &gt; 1: Review technique
- |DI| &gt; 3: Investigate immediately

### Monitoring Process
- Record EI/DI for every examination
- Review trends monthly
- Set departmental action levels (e.g., |DI| &gt; 2 triggers review)

---

## CR-Specific QC Tests

### Imaging Plate QC

| Test | Frequency | Method |
|---|---|---|
| Artifact evaluation | Daily | Expose phantom; inspect for lines, spots, ghosting |
| Plate erasure check | Weekly | Expose plate to high dose; erase; check for residual image |
| Plate cleaning | Monthly | Clean with approved solution; inspect surface |
| Plate sensitivity uniformity | Annually | Expose all plates equally; compare EI values |

### CR Reader QC
- Laser power and uniformity check
- Transport mechanism inspection
- Erasure light intensity verification
- Spatial resolution verification (bar pattern phantom)

---

## DR-Specific QC Tests

### Daily Tests
- **Artifact evaluation**: Acquire flat-field image; inspect for dead pixels, lines, non-uniformity
- **Visual inspection**: Check detector surface, cables, housing
- **EI/DI review**: Check first clinical images of the day

### Weekly Tests
- **Ghosting/lag test**: Expose half the detector to high dose; immediately take low-dose image of whole detector; check for residual image on exposed half
- **Flat-field uniformity**: Acquire uniform exposure; check for sensitivity variations

### Monthly Tests
- **Spatial resolution**: Expose bar pattern or MTF phantom; measure lp/mm
- **Low-contrast detectability**: Expose contrast-detail phantom; record lowest visible contrast
- **EI accuracy**: Compare EI with ionisation chamber measurement

### Quarterly / Annual Tests
- **Full detector calibration** (gain and offset correction)
- **Dead pixel mapping**: Update correction map
- **DQE measurement**: Comprehensive detector efficiency test (medical physicist)
- **Noise power spectrum**: Characterise noise properties

---

## Display Monitor QC

Based on AAPM TG-18 guidelines:

### Daily (Visual Check)
- Clean monitor surface
- Check for obvious dead pixels, discolouration
- Verify DICOM GSDF pattern displays correctly

### Monthly
| Test | Tool | Acceptance Criterion |
|---|---|---|
| Maximum luminance | Photometer | &gt;350 cd/m² (diagnostic); &gt;600 cd/m² (mammo) |
| Minimum luminance | Photometer | Manufacturer specification |
| Luminance ratio | Calculated | &gt;250:1 |
| Uniformity | Photometer (5 points) | &lt;30% variation |

### Quarterly
- DICOM GSDF calibration verification
- Spatial resolution check (TG-18 QC pattern)
- Greyscale response (TG-18 CT or LN patterns)

### Annual
- Full DICOM GSDF recalibration
- Veiling glare measurement
- Chromaticity (for colour monitors)

---

## PACS and Network QC

| Test | Frequency | Purpose |
|---|---|---|
| Image transfer speed | Monthly | Ensure timely image availability |
| Archive integrity | Monthly | Verify images stored correctly |
| Backup verification | Weekly | Confirm backup systems functioning |
| Compression ratio audit | Annually | Ensure lossy compression within guidelines |

---

## X-ray Generator and Tube QC

Performed by medical physicist, typically annually:

| Test | Purpose |
|---|---|
| kVp accuracy | Correct beam energy |
| mAs linearity | Consistent output with varying mAs |
| Timer accuracy | Correct exposure duration |
| HVL measurement | Beam quality and filtration adequacy |
| AEC performance | Consistent detector dose with varying patient size |
| Focal spot size | Spatial resolution capability |
| Beam alignment and collimation | Field size accuracy |
| Radiation output reproducibility | Consistent dose per mAs |

---

## Reject/Repeat Analysis

### Digital-Specific Considerations
- Fewer repeats than screen-film (wider latitude)
- Must monitor EI to detect hidden overexposure
- Repeat analysis should include EI trend data

### Process
1. Collect rejected images over defined period
2. Categorise: positioning, exposure (EI deviation), artifacts, equipment failure, patient factors
3. Calculate repeat rate: target &lt;5%
4. Report findings to radiographers and management
5. Implement corrective action

---

## QC Documentation

All QC results must be:
- Recorded in a QC logbook or electronic system
- Reviewed by a designated QC lead (radiographer or physicist)
- Retained for a minimum period (typically 5 years)
- Available for regulatory inspection

---

## QC Testing Frequency Summary

| Test | CR | DR | Frequency |
|---|---|---|---|
| Artifact evaluation | Yes | Yes | Daily |
| EI monitoring | Yes | Yes | Daily |
| Ghosting/lag | Yes | Yes | Weekly |
| Flat-field uniformity | — | Yes | Weekly |
| Plate cleaning/inspection | Yes | — | Monthly |
| Spatial resolution | Yes | Yes | Monthly |
| Monitor luminance | Yes | Yes | Monthly |
| Full detector calibration | Yes | Yes | Quarterly/Annual |
| Physicist survey | Yes | Yes | Annually |
