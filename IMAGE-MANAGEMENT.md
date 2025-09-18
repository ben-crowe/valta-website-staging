# Valta Website Image Management Guide

## Quick Reference - Hero Images

All hero images use Unsplash URLs with these parameters:
- Width: 1920px
- Height: 800px  
- Aspect Ratio: 2.4:1 (wide landscape)
- Format: `?w=1920&h=800&fit=crop&crop=entropy`

## Current Hero Images

| Page | Image URL | Description |
|------|-----------|-------------|
| **Home** | Uses HeroSection component | Calgary skyline carousel |
| **Services Main** | `photo-1560518883-ce09059eeffa` | Professional properties collage |
| **Multifamily** | `photo-1545324418-cc1a3fa10c00` | Modern apartment building |
| **Self-Storage** | `photo-1565610222536-ef125c59da2e` | Storage facility with units |
| **Commercial** | `photo-1486406146926-c627a92ad1ab` | Modern office building |
| **Contact** | `photo-1573164574511-73c773193279` | Professional woman at desk |
| **News** | `photo-1449034446853-66c86144b0ad` | Calgary commercial district |
| **Request Appraisal** | Carousel with multiple images | Office/workspace images |

## How to Change Hero Images

### Step 1: Find the Page File
All page files are in `/app/[page-name]/page.tsx`

### Step 2: Locate the Hero Section
Look for this pattern:
```jsx
<section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/[PHOTO-ID]?w=1920&h=800&fit=crop&crop=entropy"
```

### Step 3: Replace the Photo ID
1. Go to unsplash.com
2. Find your desired image
3. Copy the photo ID from the URL (e.g., `photo-1560518883-ce09059eeffa`)
4. Replace the [PHOTO-ID] in the src URL

### Step 4: Important Settings
Always include these:
- `fill` prop for responsive sizing
- `priority` for above-fold images
- `className="object-cover"` for proper scaling
- Dark overlay div for text readability

## Hero Section Template

```jsx
{/* Hero Section with Background Image */}
<section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/[PHOTO-ID]?w=1920&h=800&fit=crop&crop=entropy"
      fill
      alt="Description of image"
      className="object-cover"
      priority
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
  </div>
  
  {/* Content */}
  <div className="relative z-10 container px-4 md:px-6">
    <!-- Your content here -->
  </div>
</section>
```

## Height Settings

### Current Standard (Reduced Height)
- Small: `py-12` = 48px top/bottom padding
- Medium: `md:py-16` = 64px top/bottom padding  
- Large: `lg:py-20` = 80px top/bottom padding
- Total height: Content height + padding

### Old Settings (Too Tall - Don't Use)
- `h-[70vh]` = 70% of viewport height
- `h-[80vh]` = 80% of viewport height
- `h-[90vh]` = 90% of viewport height

## Troubleshooting

### Image Not Showing?
1. Check Next.js config allows Unsplash:
   ```js
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'images.unsplash.com',
       },
     ],
   }
   ```

2. Ensure the hero section has minimum height:
   - Add `min-h-[400px]` to the section if needed
   - Make sure there's content inside to give it height

3. Check z-index layering:
   - Image container: `z-0`
   - Content: `z-10`

### Image Too Dark/Light?
Adjust the overlay gradient:
- Darker: `from-black/90 via-black/70 to-transparent`
- Lighter: `from-black/50 via-black/30 to-transparent`

## Common Unsplash Photo IDs

### Office/Commercial
- Modern office: `photo-1486406146926-c627a92ad1ab`
- Glass building: `photo-1560518883-ce09059eeffa`
- Office interior: `photo-1497366754035-f200581a8d4d`

### Residential/Multifamily  
- Apartment building: `photo-1545324418-cc1a3fa10c00`
- Modern condos: `photo-1567684014761-b65e2e59b9eb`

### Storage Facilities
- Storage units: `photo-1565610222536-ef125c59da2e`
- Warehouse: `photo-1586528116311-ad8dd3c8310d`

## Notes
- Always commit changes before deploying
- Deploy with: `vercel --prod`
- Changes take 1-2 minutes to appear on staging site