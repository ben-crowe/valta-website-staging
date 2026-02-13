# Valta Lead Capture System Documentation

## Overview
The Valta website implements a robust lead capture system that saves all form submissions to a database first (ensuring no data loss) and then sends email notifications to the team.

## System Architecture

### Components
1. **Database**: Supabase PostgreSQL (contact_submissions table)
2. **Email Service**: Resend API via Supabase Edge Functions
3. **Frontend Forms**: Next.js/React with TypeScript
4. **Current Recipient**: bc@crowestudio.com (temporary until valta.ca domain verified)

## Implemented Forms

### 1. Contact Form (/contact)
- **Purpose**: General inquiries and initial client contact
- **Database Table**: `contact_submissions`
- **Email Function**: `send-contact-notification`
- **Fields**:
  - Full Name (required)
  - Email (required)
  - Phone Number (optional)
  - Company Name (optional)
  - Request Type (dropdown: appraisal, general, consultation, existing-client, other)
  - Property Type (dropdown: multifamily, self-storage, commercial, industrial, land, other)
  - Timeline (dropdown: urgent 1-2 weeks, standard 2-3 weeks, flexible 4+ weeks)
  - Message (required)

### Email Notification Format
- **Subject**: "Website Form Fill Notification - [Name]"
- **Source Identifier**: Shows "submitted from valta.ca/contact" at top
- **Timestamp**: Submission time in MST timezone
- **Template**: Clean, neutral design without colors or urgency alerts
- **No "Next Steps"**: Removed patronizing instructions

## Database Schema

```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    request_type TEXT,
    property_type TEXT,
    timeline TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'submitted',
    source TEXT DEFAULT 'website-contact-form'
);
```

## Implementation Files

### Frontend
- `/app/contact/page.tsx` - Contact form page component

### Backend
- `/supabase/functions/send-contact-notification/index.ts` - Email notification edge function
- `/lib/supabase.ts` - Supabase client configuration

### Testing
- `/test-form.js` - Automated testing script for form submissions

## Environment Configuration

### Supabase Project
- **URL**: https://ngovnamnjmexdpjtcnky.supabase.co
- **Project Ref**: ngovnamnjmexdpjtcnky
- **Anon Key**: Stored in lib/supabase.ts

### Resend API
- **API Key**: Stored in edge function (re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94)
- **From Address**: onboarding@resend.dev (temporary)
- **To Address**: bc@crowestudio.com (temporary)

## Testing

### Manual Testing
1. Visit http://localhost:3002/contact
2. Fill out all form fields
3. Submit form
4. Check for success message
5. Verify email received at bc@crowestudio.com

### Automated Testing
```bash
node test-form.js
```
This script:
- Creates test submission with timestamp
- Saves to database
- Triggers email notification
- Verifies data integrity
- Reports total submissions count

## Deployment

### Database Deployment
The database table is deployed via Supabase Management API using access token.

### Edge Function Deployment
```bash
npx supabase functions deploy send-contact-notification
```

### Frontend Deployment
Handled via Vercel automatic deployment from GitHub.

## Future Forms (Planned)

### 2. Appraisal Request Form (/appraisal-request)
**Purpose**: Detailed property appraisal requests with more specific information

**Planned Additional Fields**:
- Property Address (required)
- Property Size (sq ft)
- Year Built
- Current Use
- Intended Use
- Appraisal Purpose (financing, purchase, sale, tax appeal, other)
- Attachments (property photos, documents)

**Implementation Notes**:
- Will use same database pattern (new table: `appraisal_requests`)
- Will use same email notification system (new function: `send-appraisal-notification`)
- Source identifier: "valta.ca/appraisal-request"

### 3. Other Potential Forms
- Partner Inquiry Form (/partners)
- Career Application Form (/careers)
- Newsletter Signup (/newsletter)

Each form will:
- Save to its own database table
- Have its own edge function
- Include specific source URL in email
- Follow same clean email template design

## Maintenance

### Daily Checks
- Monitor Supabase dashboard for submission counts
- Check edge function logs for errors

### Weekly Tasks
- Review form submissions in database
- Check for any failed email notifications
- Monitor Resend API usage

### Monthly Tasks
- Export submissions for CRM import
- Review and clean test submissions
- Check for form optimization opportunities

## Troubleshooting

### Form Not Submitting
1. Check browser console for errors
2. Verify Supabase connection in Network tab
3. Check if RLS is blocking inserts (currently disabled)

### Emails Not Sending
1. Check edge function logs in Supabase dashboard
2. Verify Resend API key is valid
3. Check recipient email address

### Database Issues
1. Verify table exists with correct schema
2. Check RLS policies (currently disabled)
3. Verify anon key has insert permissions

## Security Considerations

- **RLS Currently Disabled**: Re-enable with proper policies for production
- **API Keys**: Move to environment variables for production
- **Form Validation**: Currently client-side only, add server-side validation
- **Rate Limiting**: Implement to prevent spam submissions
- **CAPTCHA**: Consider adding for bot prevention

## Next Steps

1. **Domain Verification**: Verify valta.ca with Resend to use clientcare@valta.ca
2. **Enable RLS**: Create proper Row Level Security policies
3. **Add Server Validation**: Implement server-side form validation
4. **Setup Monitoring**: Add error tracking and alerting
5. **Implement Appraisal Form**: Build dedicated appraisal request form

## Contact

For questions about this system:
- Check Supabase Dashboard: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky
- Review edge function logs for debugging
- Test with test-form.js script for verification