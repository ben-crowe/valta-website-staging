# Design Decisions & Standards

## Logo Guidelines
- **Position**: Top left corner, always
- **Link**: Always links to homepage
- **Email Template**: Can add to header later (not implemented yet)
- **File Location**: /public/valta-logo.svg (when added)

## Color Palette
### Website Colors
- **Primary Blue**: #1e40af (used sparingly)
- **Slate Gray**: Various shades for text
- **White**: #ffffff for backgrounds
- **Light Gray**: #f8f8f8 for sections

### Email Template Colors
- **NO COLORS** - Ben's specific requirement
- Use only neutral grays (#333333, #666666, #cccccc)
- No blue links (use #333333)
- No red alerts
- No colored headers

## Typography
- **Font Family**: System fonts (Arial, sans-serif in emails)
- **Headers**: Bold, clear hierarchy
- **Body Text**: Readable size, good line height
- **Email Font**: Arial for consistency

## Form Layouts
### Contact Form Structure
```
Row 1: [Name] [Email]           - Two columns
Row 2: [Phone] [Company]        - Two columns (MUST stay this way)
Row 3: [Request Type] [Property Type] - Two columns
Row 4: [Timeline]               - Full width
Row 5: [Message]                - Full width
```

### Design Rationale
- Company beside phone: Better visual balance
- Two columns: Reduces form height
- Dropdowns: Reduces errors vs text input

## Image Standards
### Hero Images
- **Current**: Woman in dark jacket (contact page)
- **Style**: Professional, commercial real estate focused
- **Overlay**: Dark gradient for text readability
- **Format**: WebP when possible, fallback to JPG

### Image Sizes
- **Hero Images**: 1920x800 minimum
- **Card Images**: 400x300
- **Optimization**: Lazy loading enabled
- **Quality**: Balance between quality and load time

## Button Styles
- **Primary**: Blue background (#1e40af), white text
- **Secondary**: White background, blue border
- **Hover**: Darker shade or shadow effect
- **Email Buttons**: Not used (keep emails simple)

## Email Template Design
### Current Design (September 2025)
- **Header**: Light gray (#f8f8f8) with "New Website Contact Form"
- **Body**: White background
- **Form Data**: Left border (#cccccc), clean layout
- **Footer**: Simple company name
- **NO**: Colors, emojis, urgency alerts, "Next Steps"

### Email Content Structure
1. Source URL (valta.ca/contact)
2. Timestamp
3. Form fields in clean layout
4. Company footer

## Responsive Design
- **Mobile First**: Design for mobile, enhance for desktop
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Form Behavior**: Stack to single column on mobile

## Component Standards
### Cards
- White background
- Subtle shadow
- Rounded corners (rounded-xl)
- Hover effects for interactive cards

### Sections
- Clear spacing between sections
- Alternating backgrounds (white/light gray)
- Consistent padding

## Navigation
- **Desktop**: Horizontal menu with dropdowns
- **Mobile**: Hamburger menu
- **Active State**: Blue color for current page
- **Logo**: Always present, links to home

## Success/Error Messages
### Success
- Green background (#10b981)
- Checkmark icon
- Clear success message
- Option to continue

### Error
- Red border/background
- Error icon
- Specific error message
- Fallback action (phone number)

## Future Considerations
- **Appraisal Form**: Multi-step with progress indicator
- **File Uploads**: Drag-and-drop interface
- **Client Portal**: Separate design system
- **Dashboard**: Admin interface for submissions

## Don'ts (Learned from Experience)
1. **Don't** use colors in email templates
2. **Don't** add "Next Steps" to emails
3. **Don't** make company field full width
4. **Don't** use urgency alerts
5. **Don't** overcomplicate simple forms

## Accessibility
- WCAG 2.1 AA compliance target
- Proper heading hierarchy
- Form labels and descriptions
- Keyboard navigation support
- Screen reader friendly

---
**Last Updated**: September 25, 2025
**Note**: These are living standards that may evolve with client feedback