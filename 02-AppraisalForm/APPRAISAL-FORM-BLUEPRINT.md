# Appraisal Request Form Blueprint

## Overview
This document outlines the implementation plan for a dedicated appraisal request form that will capture more detailed property information than the general contact form.

## Planned URL
**Production**: https://valta.ca/appraisal-request
**Development**: http://localhost:3002/appraisal-request

## Purpose
Capture detailed property information for formal appraisal requests, reducing back-and-forth communication and enabling faster quote generation.

## Database Design

### New Table: appraisal_requests
```sql
CREATE TABLE appraisal_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Contact Information
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,  -- Required for appraisals
    company TEXT NOT NULL, -- Required for appraisals
    
    -- Property Details
    property_address TEXT NOT NULL,
    city TEXT NOT NULL,
    province TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    property_type TEXT NOT NULL,
    property_subtype TEXT,
    
    -- Property Specifications
    building_size_sqft INTEGER,
    land_size_acres DECIMAL,
    year_built INTEGER,
    number_of_units INTEGER,
    occupancy_rate DECIMAL,
    
    -- Appraisal Details
    appraisal_purpose TEXT NOT NULL,
    report_type TEXT NOT NULL,
    timeline TEXT NOT NULL,
    intended_use TEXT,
    
    -- Financial Information (Optional)
    current_noi DECIMAL,
    asking_price DECIMAL,
    recent_renovations TEXT,
    
    -- Additional Information
    additional_notes TEXT,
    how_heard_about_us TEXT,
    
    -- System Fields
    status TEXT DEFAULT 'submitted',
    priority TEXT DEFAULT 'standard',
    source TEXT DEFAULT 'website-appraisal-form',
    
    -- File References (for future file upload feature)
    attachment_urls TEXT[]
);

-- Indexes for common queries
CREATE INDEX appraisal_requests_created_at_idx ON appraisal_requests(created_at DESC);
CREATE INDEX appraisal_requests_email_idx ON appraisal_requests(email);
CREATE INDEX appraisal_requests_status_idx ON appraisal_requests(status);
CREATE INDEX appraisal_requests_property_type_idx ON appraisal_requests(property_type);
```

## Form Structure

### Section 1: Contact Information
- **Full Name** (required)
- **Company Name** (required)
- **Email** (required)
- **Phone** (required)
- **Preferred Contact Method** (email/phone/either)

### Section 2: Property Location
- **Property Address** (required)
- **City** (required)
- **Province** (dropdown - AB, BC, SK, MB)
- **Postal Code** (required)

### Section 3: Property Details
- **Property Type** (required dropdown)
  - Multifamily Residential
  - Self-Storage Facility
  - Office Building
  - Retail Center
  - Industrial/Warehouse
  - Mixed-Use
  - Land/Development Site
  - Other

- **Property Subtype** (dynamic based on type)
  - For Multifamily: Apartment, Condo, Townhouse, Student Housing
  - For Self-Storage: Climate Controlled, Standard, RV/Boat, Mixed
  - For Office: Class A, Class B, Class C, Medical
  - For Retail: Strip Mall, Shopping Center, Single Tenant, Restaurant
  - For Industrial: Warehouse, Manufacturing, Flex Space, Distribution

### Section 4: Property Specifications
- **Building Size** (sq ft) - Required for buildings
- **Land Size** (acres) - Required for land
- **Year Built** - Optional
- **Number of Units** - For multifamily/self-storage
- **Current Occupancy Rate** (%) - Optional

### Section 5: Appraisal Requirements
- **Purpose of Appraisal** (required dropdown)
  - Financing/Refinancing
  - Purchase/Sale
  - Estate Planning
  - Tax Appeal
  - Insurance
  - Internal Valuation
  - Legal/Litigation
  - Other

- **Report Type** (required dropdown)
  - Full Narrative Report
  - Short Narrative Report
  - Form Report
  - Restricted Report (Letter)

- **Timeline** (required dropdown)
  - Urgent (1-2 weeks) +25% rush fee
  - Standard (2-3 weeks)
  - Flexible (4+ weeks)

### Section 6: Additional Information
- **Current NOI** (optional) - Net Operating Income if known
- **Asking/Purchase Price** (optional)
- **Recent Renovations/Improvements** (optional textarea)
- **Additional Notes** (optional textarea)
- **How did you hear about us?** (optional dropdown)
  - Google Search
  - Referral
  - LinkedIn
  - Previous Client
  - Other

## Implementation Plan

### Phase 1: Backend Setup
```typescript
// 1. Create database table
// Run migration script similar to contact form

// 2. Create edge function: send-appraisal-notification
// Similar structure to contact notification but with more fields
// Subject: "Appraisal Request - [Property Type] - [City]"
// Source: "submitted from valta.ca/appraisal-request"
```

### Phase 2: Frontend Development
```typescript
// Create /app/appraisal-request/page.tsx
// Use multi-step form with progress indicator
// Step 1: Contact Info
// Step 2: Property Location
// Step 3: Property Details
// Step 4: Appraisal Requirements
// Step 5: Review & Submit

// Features:
// - Form validation at each step
// - Save progress to localStorage
// - Dynamic field visibility based on property type
// - Address autocomplete (Google Places API)
// - File upload preparation (future)
```

### Phase 3: Email Template
```html
<!-- Enhanced email template for appraisal requests -->
<!-- Include all property details in organized sections -->
<!-- Highlight timeline if urgent -->
<!-- Include Google Maps link for property address -->
```

## Advanced Features (Future)

### File Upload System
- Property photos
- Rent rolls
- Financial statements
- Previous appraisals
- Building plans

### Integration Features
- CRM auto-creation (HubSpot/Salesforce)
- Calendar booking for initial consultation
- Automated quote generation
- Client portal access creation

### Analytics & Tracking
- Form abandonment tracking
- Conversion rate by source
- Average time to complete
- Most requested property types

## Email Notification Enhancements

### For Urgent Requests
- Send SMS notification in addition to email
- CC additional team members
- Add to urgent queue in CRM

### Smart Routing
- Route based on property type
- Assign to specific appraiser
- Auto-calculate estimated fee range

## Testing Strategy

### Test Scenarios
1. Complete form submission with all fields
2. Minimal required fields only
3. Various property type combinations
4. Address validation
5. Form abandonment and recovery
6. Multi-step navigation
7. Mobile responsiveness
8. Browser compatibility

### Automated Testing Script
```javascript
// test-appraisal-form.js
// Similar to test-form.js but with appraisal-specific fields
// Test different property types
// Verify calculations (if any)
// Check email formatting with complex data
```

## Conversion Optimization

### Best Practices
- Show progress indicator
- Save progress between steps
- Provide field help text
- Show example entries
- Indicate required vs optional clearly
- Provide immediate validation feedback
- Show estimated turnaround time
- Display trust signals (AACI badges)

### A/B Testing Ideas
- Single page vs multi-step
- Field order optimization
- Required vs optional fields
- CTA button text
- Form header messaging

## Implementation Timeline

### Week 1
- [ ] Create database table
- [ ] Set up edge function
- [ ] Create basic form structure

### Week 2
- [ ] Implement form validation
- [ ] Add dynamic field logic
- [ ] Create email template

### Week 3
- [ ] Testing and debugging
- [ ] Mobile optimization
- [ ] Performance optimization

### Week 4
- [ ] User acceptance testing
- [ ] Documentation update
- [ ] Production deployment

## Success Metrics

### Key Performance Indicators
- Form completion rate > 60%
- Average time to complete < 5 minutes
- Error rate < 5%
- Email delivery rate 100%
- Mobile submission rate > 40%

### Quality Metrics
- Data completeness score
- Invalid submission rate
- Support tickets related to form
- Time from submission to first contact

## Notes for Implementation

### IMPORTANT: Keep These Principles
1. **Database First**: Always save before sending email
2. **Source Identification**: Include "valta.ca/appraisal-request"
3. **Clean Email Design**: No colors, no urgency alerts (except actual urgent timeline)
4. **Error Recovery**: Graceful handling with clear messages
5. **Mobile First**: Design for mobile, enhance for desktop

### Learn from Contact Form
- Company field beside phone works well
- Dropdown selections reduce errors
- Optional fields increase completion
- Simple success message is sufficient
- Test script essential for development

## Resource Requirements

### Development
- Frontend development: 24 hours
- Backend setup: 8 hours
- Testing: 8 hours
- Documentation: 4 hours
- **Total: 44 hours**

### External Services
- Google Places API (optional)
- SMS service (optional for urgent)
- File storage (future)

### Maintenance
- Weekly submission review
- Monthly analytics review
- Quarterly optimization