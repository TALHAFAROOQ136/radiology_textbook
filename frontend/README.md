# Radiology Textbook Platform - Frontend

This is the frontend of the Radiology Textbook Platform, built with Docusaurus to deliver educational content in an accessible, well-organized format.

## Features

- **Educational Content Platform**: Structured presentation of radiology textbook content
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Content Organization**: Hierarchical structure following medical education standards
- **Search Functionality**: Built-in search across all textbook content
- **Progress Tracking**: Visual indicators for learning progress
- **Accessibility**: WCAG 2.1 AA compliant interface
- **Performance Optimized**: Fast loading and smooth navigation

## Tech Stack

- **Framework**: Docusaurus v3 (based on React and Node.js)
- **Language**: TypeScript/JavaScript
- **Styling**: CSS Modules, custom styles
- **Documentation**: Markdown with MDX support
- **Deployment**: Static site generation for hosting on GitHub Pages or similar platforms

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

## Project Structure

```
frontend/
├── docs/                    # Textbook content organized by parts and chapters
│   ├── part-1-foundations/  # Part 1: Foundations of Radiology
│   ├── part-2-positioning/  # Part 2: Positioning and Technique
│   ├── part-3-chest/        # Part 3: Chest Radiology
│   ├── part-4-abdomen/      # Part 4: Abdomen and GI Radiology
│   ├── part-5-msk/          # Part 5: Musculoskeletal Radiology
│   ├── part-6-neuro/        # Part 6: Neuroradiology
│   └── part-7-specialized/  # Part 7: Specialized Radiology
├── src/
│   ├── components/          # Reusable React components
│   │   ├── auth/            # Authentication UI components
│   │   ├── content/         # Content display and navigation components
│   │   ├── layout/          # Layout components (header, footer, sidebar)
│   │   └── ui/              # Generic UI components
│   ├── pages/               # Standalone pages
│   ├── css/                 # Global CSS styles
│   └── utils/               # Utility functions
├── static/                  # Static assets (images, icons)
├── docusaurus.config.js     # Docusaurus configuration
├── sidebars.js              # Navigation sidebar configuration
└── package.json             # Dependencies and scripts
```

## Available Scripts

- `npm start` - Start development server with hot reloading
- `npm run build` - Build static files for production
- `npm run serve` - Serve built files locally for testing
- `npm run swizzle` - Override Docusaurus theme components
- `npm run deploy` - Deploy to GitHub Pages
- `npm run clear` - Clear Docusaurus cache

## Configuration

### Site Metadata
Update `docusaurus.config.js` to customize site metadata:
- Site title and tagline
- Navigation links
- Footer information
- Social media links

### Content Organization
Organize content in the `docs/` directory following the textbook structure:
- Each part has its own subdirectory
- Chapters are individual markdown files
- Use proper frontmatter for metadata

### Navigation
Customize navigation in `sidebars.js`:
- Define sidebar categories and items
- Organize content hierarchy
- Set up automatic or manual sidebars

## Content Creation

### Adding New Chapters
1. Create a new markdown file in the appropriate part directory
2. Add frontmatter with title, sidebar label, and description
3. Update `sidebars.js` to include the new content in navigation
4. Use proper heading hierarchy for accessibility

### Frontmatter Example
```markdown
---
title: "Chapter 1: Introduction to Radiology"
sidebar_label: "Chapter 1: Introduction"
description: "Introduction to the fundamentals of radiology for medical students"
---
```

### Markdown Guidelines
- Use proper heading hierarchy (h1, h2, h3, etc.)
- Include alt text for all images
- Use descriptive link text
- Follow accessibility best practices

## Styling

Custom styles can be added in `src/css/custom.css`:
- Override Docusaurus default styles
- Add custom components and layouts
- Ensure responsive design
- Maintain accessibility standards

## Deployment

The site is built as static files that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Deployment
1. Update `docusaurus.config.js` with proper `organizationName` and `projectName`
2. Run `npm run deploy`

## Development Best Practices

### Content Writing
- Write for the target audience (medical students)
- Use clear, concise language
- Include learning objectives at the start of each chapter
- Provide summaries and key terms at the end of each chapter
- Include relevant images and diagrams

### Component Development
- Follow React best practices
- Use TypeScript for type safety
- Ensure components are reusable
- Test components across different screen sizes

### Performance
- Optimize images and assets
- Use code splitting where appropriate
- Minimize bundle sizes
- Implement lazy loading for content

## Accessibility

This site follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Troubleshooting

### Common Issues
- **Content not showing**: Check sidebar configuration in `sidebars.js`
- **Images not loading**: Ensure images are in the `static/` directory
- **Styles not applying**: Check if custom CSS is properly imported
- **Build errors**: Verify all dependencies are installed

### Development Tips
- Use hot reloading during development
- Check browser console for errors
- Verify frontmatter syntax in markdown files
- Ensure all links are properly formatted

## License

MIT