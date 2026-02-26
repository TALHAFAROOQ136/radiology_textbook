# Quickstart Guide: Radiology Text Book - Part I: Foundations of Medical Imaging

## Overview

This guide provides instructions for setting up and contributing to Part I of the Radiology Text Book: Foundations of Medical Imaging. This section includes 5 foundational chapters covering physics, radiation safety, and imaging fundamentals.

## Prerequisites

- Node.js v18 or higher
- Git
- Access to the main Radiology Text Book platform repository
- Text editor or IDE of choice
- Basic knowledge of Markdown for content editing

## Repository Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd radiology-text-book
```

### 2. Install Dependencies

```bash
# Install frontend dependencies (Docusaurus)
cd frontend
npm install

# If there are backend dependencies
cd ../backend
npm install  # or pip install -r requirements.txt depending on backend tech stack
```

## Content Structure

### Part I Location

The Foundations of Medical Imaging content is located in:
```
frontend/docs/part-1-foundations/
├── chapter-01-introduction-to-radiology/
├── chapter-02-physics-of-medical-imaging/
├── chapter-03-radiation-safety/
├── chapter-04-contrast-agents/
└── chapter-05-appropriateness-criteria/
```

## Adding or Editing Content

### 1. Creating a New Chapter Section

To add a new section within an existing chapter:

1. Navigate to the appropriate chapter directory
2. Create a new markdown file following the naming convention
3. Add the content using Docusaurus markdown syntax

Example for a new section in Chapter 2:
```bash
cd frontend/docs/part-1-foundations/chapter-02-physics-of-medical-imaging/
touch x-ray-production-basics.md
```

### 2. Content Format

Each chapter section should follow this structure:

```markdown
---
title: Section Title
sidebar_position: 1
description: Brief description of the section
---

# Section Title

## Learning Objectives

- Objective 1
- Objective 2
- Objective 3

## Content

Your content goes here...

## Key Concepts

- Concept 1
- Concept 2

## Self-Assessment

1. Question 1?
2. Question 2?
```

### 3. Multimedia Integration

To add images or other media:

1. Place images in the appropriate directory under `frontend/static/img/`
2. Reference them using the standard Markdown syntax:
   ```markdown
   ![Alt text](/img/path/to/image.png)
   ```

## Running the Development Server

### 1. Start the Docusaurus Development Server

```bash
cd frontend
npm start
```

The development server will start at `http://localhost:3000` and automatically reload when content changes.

### 2. Verify Content

- Navigate to your Part I content at `http://localhost:3000/docs/part-1-foundations`
- Verify all links, images, and functionality work correctly
- Check that navigation between sections works properly

## Content Guidelines

### Writing Style

- Use clear, concise language appropriate for medical students
- Include relevant medical terminology with appropriate explanations
- Structure content with appropriate headings (H2, H3, etc.)
- Include learning objectives at the beginning of each section
- Add key concepts summaries throughout the content

### Educational Features

#### Assessments
- Include self-assessment questions at the end of each section
- Use multiple-choice, true/false, or short-answer formats
- Provide immediate feedback where possible

#### Multimedia Elements
- Add relevant diagrams and illustrations to support text content
- Use alt text for all images for accessibility
- Include captions where appropriate

#### Cross-References
- Link to related content within Part I when relevant
- Use internal linking for cross-references to other chapters

## Testing

### 1. Content Validation

```bash
# Run Docusaurus build to validate content
cd frontend
npm run build
```

### 2. Accessibility Checks

- Verify all images have appropriate alt text
- Check color contrast ratios meet WCAG 2.1 AA standards
- Ensure content is navigable with keyboard-only controls

### 3. Cross-Browser Testing

- Test content rendering in Chrome, Firefox, Safari, and Edge
- Verify responsive design on mobile and tablet devices
- Check multimedia elements work across browsers

## Building for Production

### 1. Build Static Site

```bash
cd frontend
npm run build
```

### 2. Preview Production Build

```bash
npm run serve
```

This will serve the production build locally for final verification.

## Deployment

### 1. Commit Changes

```bash
git add .
git commit -m "Add/update Part I: Foundations of Medical Imaging content"
git push origin <branch-name>
```

### 2. Pull Request Process

1. Create a pull request to merge your changes
2. Include a description of the content changes
3. Tag reviewers for content accuracy
4. Ensure all checks pass before merging

## Collaboration

### Subject Matter Experts

- Coordinate with radiology professionals for content accuracy
- Have medical content reviewed by qualified experts
- Maintain a review process for all new content additions

### Content Review Process

1. Initial authorship by subject matter experts
2. Technical review for accuracy and clarity
3. Editorial review for consistency and style
4. Accessibility review for compliance

## Troubleshooting

### Common Issues

1. **Broken Links**: Verify all internal links use the correct path structure
2. **Missing Images**: Check that image paths are correct and files exist
3. **Formatting Issues**: Ensure proper Markdown syntax and Docusaurus conventions
4. **Build Failures**: Check for syntax errors in Markdown files

### Development Tips

1. Use the live reload feature during content creation
2. Test content on different screen sizes for responsiveness
3. Verify all multimedia elements load properly
4. Ensure navigation between sections works correctly

## Architecture Overview

Part I of the Radiology Text Book integrates with the broader platform architecture:

```
┌─────────────────────────────────────┐
│  Radiology Text Book Platform       │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐ │
│  │  Part I: Foundations of Medical │ │
│  │  Imaging                       │ │
│  │                                 │ │
│  │  • Chapter 1: Introduction     │ │
│  │  • Chapter 2: Physics          │ │
│  │  • Chapter 3: Radiation Safety │ │
│  │  • Chapter 4: Contrast Agents  │ │
│  │  • Chapter 5: Appropriateness  │ │
│  │    Criteria                    │ │
│  └─────────────────────────────────┘ │
├─────────────────────────────────────┤
│  Other Parts of Textbook            │
└─────────────────────────────────────┘
```

The content is served through Docusaurus as static pages with integration to the platform's user progress tracking and assessment systems.