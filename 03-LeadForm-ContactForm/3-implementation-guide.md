# Email Notification Implementation Guide

## Overview
Complete setup guide for Valta website contact form with database storage and team email notifications.

## Files Created

### 1. Database Schema
**File**: `1-database-schema.sql`
- Creates `contact_submissions` table in Supabase
- Includes RLS (Row Level Security) policies
- Allows public inserts, authenticated reads
- Includes indexes for performance

### 2. Supabase Edge Function
**File**: `supabase/functions/send-contact-notification/index.ts`
- Handles team email notifications
- Uses Resend API (like APR-Dashboard)
- Professional HTML email template
- Includes urgency detection (urgent requests highlighted)

### 3. Updated Contact Form
**File**: `2-contact-form-updated.tsx`
- Replaces current contact form
- Saves to database FIRST (data protection)
- Sends team notification (non-blocking)
- Shows success even if email fails

## Implementation Steps

### Step 1: Run Database Schema
1. Open Supabase dashboard
2. Go to SQL Editor
3. Run the contents of `1-database-schema.sql`
4. Verify table created successfully

### Step 2: Deploy Edge Function (Already Done)
✅ Edge function already exists at `supabase/functions/send-contact-notification/index.ts`
✅ Uses existing Resend API key
✅ Currently sends to bc@crowestudio.com (temporary)

### Step 3: Replace Contact Form
1. Replace `/app/contact/page.tsx` with contents from `2-contact-form-updated.tsx`
2. Test form submission
3. Verify data saves to database
4. Check email notifications work

### Step 4: Domain Verification (Future)
Currently emails go to bc@crowestudio.com because:
- Need to verify valta.ca domain with Resend
- Once verified, change line 252 to `['clientcare@valta.ca']`

## Technical Details

### Database Structure
```sql
contact_submissions (
  id UUID PRIMARY KEY,
  created_at TIMESTAMP,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  request_type TEXT,
  property_type TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'submitted',
  source TEXT DEFAULT 'website-contact-form'
)
```

### Email Flow
1. **Form Submit** → Save to database (primary goal)
2. **Database Success** → Call edge function (secondary)
3. **Edge Function** → Send team notification via Resend
4. **Show Success** → Thank user (regardless of email status)

### Error Handling
- **Database fails**: Show error, ask user to call
- **Email fails**: Still show success (data is saved)
- **Both fail**: Show error with phone number

### Security Features
- RLS policies prevent data leaks
- Form validation on client and server
- Error messages don't expose internals
- No sensitive data in edge function logs

## Email Template Features
- Professional HTML design
- Mobile responsive
- Urgency detection (red banner for urgent requests)
- Clickable email/phone links
- Clear form data display
- MST timestamp (Calgary timezone)
- Company branding

## Benefits Over Current System
1. **No Lost Data**: Everything saves to database
2. **Team Notifications**: Automatic email alerts
3. **Reliability**: Works even if email service fails
4. **Tracking**: Can see all submissions in Supabase
5. **Professional**: Clean HTML email template

## Testing Checklist
- [ ] Database schema runs without errors
- [ ] Form saves data to contact_submissions table
- [ ] Email notifications sent to bc@crowestudio.com
- [ ] Success message shows after submission
- [ ] Error handling works properly
- [ ] Form validation prevents bad data
- [ ] Email template displays correctly

## Future Enhancements
1. **Domain Setup**: Verify valta.ca with Resend → use clientcare@valta.ca
2. **Admin Dashboard**: View submissions in web interface
3. **Auto-Reply**: Optional client confirmation emails
4. **CRM Integration**: Connect to customer management system

## Support
- **Database Issues**: Check Supabase dashboard → SQL Editor
- **Email Issues**: Check Supabase → Edge Functions → Logs
- **Form Issues**: Check browser console for errors
- **General**: Contact Ben at bc@crowestudio.com

## Cost Notes
- **Supabase**: Free tier sufficient for contact forms
- **Resend**: Free tier (3,000 emails/month) sufficient for contact notifications
- **Hosting**: Already covered by Vercel deployment

This setup provides enterprise-level reliability for contact form submissions with professional team notifications.