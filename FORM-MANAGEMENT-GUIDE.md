# Valta Website Form Management Guide

## Overview
This document outlines the appraisal intake form system on the Valta website and its integration with the APR Dashboard backend. The form allows clients to submit commercial property appraisal requests that flow directly into the same Supabase database used by the APR Dashboard for management and tracking.

## System Architecture

### Components
```
┌─────────────────────────┐     ┌─────────────────────────┐
│   Valta Website         │     │   APR Dashboard         │
│   (Public-facing)       │     │   (Internal management) │
│                         │     │                         │
│   /request-appraisal    │     │   /dashboard            │
│   /request-appraisal/   │     │   /clients              │
│     intake              │     │   /jobs                 │
└───────────┬─────────────┘     └───────────┬─────────────┘
            │                                │
            └────────────┬───────────────────┘
                         │
                         ▼
            ┌────────────────────────┐
            │   Supabase Backend     │
            │                        │
            │   Tables:              │
            │   - job_submissions    │
            │   - client_profiles    │
            │   - job_files          │
            │                        │
            │   Storage:             │
            │   - job-files bucket   │
            └────────────────────────┘
```

## Database Connection

### Supabase Configuration
- **Location**: `/lib/supabase.ts`
- **Instance URL**: `https://ngovnamnjmexdpjtcnky.supabase.co`
- **Public Key**: Stored in code (safe for public-facing forms without auth)
- **Shared Database**: Same Supabase instance as APR Dashboard

### Key Tables

#### job_submissions
Primary table for all appraisal requests:
- `client_first_name` - Client's first name
- `client_last_name` - Client's last name
- `client_email` - Contact email
- `client_phone` - Contact phone
- `client_title` - Professional title (optional)
- `client_organization` - Company name (optional)
- `client_address` - Organization address (optional)
- `property_name` - Name/identifier of property
- `property_address` - Physical location (optional)
- `property_type` - Type of property (multifamily, self-storage, retail, etc.)
- `intended_use` - Purpose of appraisal (financing, internal, etc.)
- `valuation_premises` - Valuation approach (optional)
- `asset_condition` - New development or existing property (optional)
- `notes` - Additional information from client
- `status` - Submission status (defaults to "submitted")
- `created_at` - Timestamp (auto-generated)

#### client_profiles
Automatically created via database trigger when new client email detected:
- Created from first submission
- Links all submissions from same email
- No manual management needed

#### job_files
Stores references to uploaded documents:
- `job_id` - Links to job_submissions
- `file_name` - Original filename
- `file_path` - Storage path in format: `{job_id}/{filename}`
- `file_type` - MIME type
- `file_size` - File size in bytes

## Form Implementation

### File Structure
```
/app/request-appraisal/
├── page.tsx                 # Entry point with two-path selection
│                           # - Existing clients path
│                           # - New clients path
│                           # Both paths now route to same intake form
│
└── intake/
    └── page.tsx            # Main intake form
                           # Collects all property details
                           # Handles Supabase submission

/hooks/
└── useAppraisalFormSubmission.ts  # Form submission logic
                                   # Validation
                                   # Supabase integration
                                   # File upload handling

/lib/
└── supabase.ts            # Supabase client configuration
                          # Type definitions
                          # Shared with APR Dashboard
```

### Key Features

#### Two-Path Entry (Professional UX)
- **Existing Clients**: Shows login-like interface (currently decorative)
- **New Clients**: Shows quick registration form (currently decorative)
- **Both paths lead to same intake form** - No actual authentication yet
- Maintains professional appearance while keeping implementation simple

#### Form Validation
- Required fields enforced client-side
- Email format validation
- Phone number validation
- Error messages displayed inline
- Prevents submission until valid

#### File Upload Support
- Drag-and-drop interface
- Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
- Max 10MB per file
- Multiple files allowed
- Files uploaded to Supabase storage bucket

## Management Workflow

### 1. Client Submission Flow
```
Client lands on /request-appraisal
    ↓
Chooses path (new or existing)
    ↓
Fills out intake form
    ↓
Uploads documents (optional)
    ↓
Submits form
    ↓
Data saved to job_submissions table
    ↓
Files uploaded to storage
    ↓
Client profile auto-created (if new)
    ↓
Confirmation shown to client
```

### 2. APR Dashboard Management
Once submitted, appraisals appear in APR Dashboard at:
- `/Users/bencrowe/Development/APR-Dashboard`
- Accessible at dashboard URL (check APR Dashboard deployment)
- View all submissions
- Track status
- Manage client relationships
- Download submitted files

### 3. No Current Features (Planned for Future)
- Client authentication/login
- Client portal for status tracking
- Email notifications
- Portal access credentials

## Testing & Verification

### Test Supabase Connection
```javascript
// Quick test script to verify connection
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ngovnamnjmexdpjtcnky.supabase.co";
const SUPABASE_KEY = "[public key from lib/supabase.ts]";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Test query
const { data, error } = await supabase
  .from('job_submissions')
  .select('*')
  .limit(1);

console.log('Connection test:', error ? 'Failed' : 'Success');
```

### Verify Form Submission
1. Submit test form on website
2. Check APR Dashboard for new submission
3. Verify all fields populated correctly
4. Check file uploads if included

## Deployment

### Automatic Deployment
- Main branch auto-deploys to Vercel
- No environment variables needed (public keys in code)
- Changes typically live within 2-3 minutes

### Manual Deployment Check
```bash
# Check recent deployments
npx vercel ls --yes

# View deployment logs
npx vercel logs [deployment-url]
```

## Common Issues & Solutions

### Issue: Form submission fails
**Solution**: 
- Check Supabase connection in browser console
- Verify table permissions (should allow anonymous inserts)
- Check network tab for error details

### Issue: Files don't upload
**Solution**:
- Verify storage bucket exists (`job-files`)
- Check file size (max 10MB)
- Ensure file type is supported

### Issue: Client profile not created
**Solution**:
- Database trigger handles this automatically
- Check if email already exists in client_profiles
- Verify trigger is enabled in Supabase dashboard

## Future Enhancements (Planned)

### Phase 2: Client Portal (1-2 weeks post-launch)
- Add authentication system
- Create client dashboard for status tracking
- Enable document downloads
- Send portal credentials after first submission

### Phase 3: Enhanced Features
- Email notifications at each milestone
- Direct messaging with appraiser
- Payment integration
- Historical appraisal access

## Technical Notes

### Why No Authentication Yet?
- Phase 1 focuses on simple, working submission
- Clients don't submit frequently enough to need saved info
- Reduces complexity and potential issues at launch
- Portal will be added based on actual client feedback

### Security Considerations
- Public Supabase key is safe (designed for public use)
- Row Level Security (RLS) prevents data access
- Only INSERT permission on job_submissions table
- No sensitive data exposed

### Database Triggers
The following trigger auto-creates client profiles:
```sql
-- Runs automatically on job_submissions insert
-- Creates client_profile if email doesn't exist
-- Links all submissions to same profile
```

## Contact & Support

### Development Team
- **Valta Website**: This repository
- **APR Dashboard**: `/Users/bencrowe/Development/APR-Dashboard`
- **Database**: Supabase dashboard (login required)

### Key Files to Review
1. `/app/request-appraisal/intake/page.tsx` - Main form component
2. `/hooks/useAppraisalFormSubmission.ts` - Submission logic
3. `/lib/supabase.ts` - Database configuration
4. `/app/request-appraisal/page.tsx` - Entry point with client paths

### Testing Checklist
- [ ] Form displays correctly
- [ ] Validation works for required fields
- [ ] Submission saves to database
- [ ] Files upload successfully (optional)
- [ ] Confirmation message appears
- [ ] Data appears in APR Dashboard
- [ ] Client profile auto-created

---

*Last updated: January 2025*
*Form system version: 1.0 (Initial launch - no auth)*