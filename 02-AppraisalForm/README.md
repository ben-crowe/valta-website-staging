# Appraisal Request Form

## Status
⚠️ **IN PLANNING PHASE** - Not yet implemented

## Overview
This folder contains documentation and planning for the dedicated appraisal request form that will capture detailed property information for formal appraisal requests.

## Documentation
- `APPRAISAL-FORM-BLUEPRINT.md` - Complete implementation plan with database schema, form fields, and development timeline

## Existing Code
There's already some initial work started in:
- `/app/request-appraisal/page.tsx` - Basic form structure (needs review and completion)
- `/app/request-appraisal/intake/page.tsx` - Intake variation
- `/hooks/useAppraisalFormSubmission.ts` - Form submission hook

## Planned Features
- Multi-step form with progress indicator
- Property address with autocomplete
- Detailed property specifications
- File upload capability (future)
- Estimated turnaround time display
- Smart routing based on property type

## Database Design
Will use separate table: `appraisal_requests` with fields for:
- Full property details
- Building specifications  
- Financial information
- Appraisal purpose
- Timeline requirements

## Implementation Timeline
Estimated: 44 hours of development
- Week 1: Database and backend
- Week 2: Form UI and validation
- Week 3: Testing and optimization
- Week 4: Production deployment

## Next Steps
1. Review existing code in /app/request-appraisal/
2. Finalize database schema
3. Build backend edge function
4. Complete form implementation
5. Test thoroughly before launch

---
**Note**: This is separate from the contact form. Contact form is complete and working in `/LeadForm-ContactForm/`