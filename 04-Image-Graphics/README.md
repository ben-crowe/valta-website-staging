# Image & Graphics Management

This folder contains all image-related documentation, scripts, and assets for the Valta website.

## Contents

### Documentation
- **IMAGE-MANAGEMENT.md** - Main image management guidelines and inventory

### Screenshot Tools
- **capture-main-multifamily.js** - Captures main and multifamily page screenshots
- **capture-multifamily.js** - Captures multifamily service page
- **capture-news-page.js** - Captures news page screenshots
- **capture-screenshot.js** - General screenshot capture utility
- **capture-service-pages.js** - Captures all service page screenshots

### Form Screenshots
- **Lead Form team notification email.png** - Email template preview
- **popup thank you'.png** - Success message popup screenshot

## Image Locations in Project

### Public Images (`/public/images/`)
- Main website images (hero images, service images, etc.)
- Valta logos in various formats
- Chris Chornohos headshot
- Commercial property images in `/commercial/`
- Service-specific images in `/services/`

### Public Icons (`/public/icons/`)
- SVG icons in `/assets/`
- Icon documentation files

### Image Specifications

#### Hero Images
- **Recommended Size**: 1920x800px
- **Format**: JPG for photos, WebP for better compression
- **Quality**: 85-90% compression

#### Service Images
- **Recommended Size**: 800x600px minimum
- **Format**: JPG or WebP
- **Quality**: 85% compression

#### Logo Files
- **Formats Available**: PNG (various sizes)
- **Primary**: Valta-logo.png
- **Icon**: valta-icon.png

## Usage Notes
- All images should be optimized before adding to the project
- Use Next.js Image component for automatic optimization
- Prefer WebP format when possible for better performance
- Keep original high-res versions for future use

---
*Last Updated: September 26, 2025*