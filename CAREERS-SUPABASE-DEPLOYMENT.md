# Careers Form - Supabase Deployment Instructions

## Overview
Deploy the careers form backend infrastructure to Supabase. This includes database tables, storage buckets, and edge functions.

## Current Status
- ✅ Migration file created: `supabase/migrations/20251014_create_career_applications.sql`
- ✅ Edge function created: `supabase/functions/send-career-application/index.ts`
- ⏳ Needs deployment to Supabase

## Tasks to Complete

### 1. Run Database Migration
**File:** `supabase/migrations/20251014_create_career_applications.sql`

This will create:
- `career_applications` table with all necessary fields
- Row Level Security policies (allows public inserts, authenticated reads)
- Database indexes for performance
- `career-applications` storage bucket for resume uploads
- Storage policies for public upload/read

**Command:**
```bash
cd /Users/bencrowe/Development/Valta-Website
supabase db push
```

**Verify:**
- Check Supabase dashboard → Tables → `career_applications` exists
- Check Supabase dashboard → Storage → `career-applications` bucket exists

---

### 2. Deploy Edge Function
**File:** `supabase/functions/send-career-application/index.ts`

This sends email notifications when someone submits a career application.

**Command:**
```bash
cd /Users/bencrowe/Development/Valta-Website
supabase functions deploy send-career-application
```

**Verify:**
- Check Supabase dashboard → Edge Functions → `send-career-application` is deployed
- Test by submitting a career application on the website

---

### 3. Update Email Recipients (CRITICAL)

**Problem:** Both contact and careers forms currently send emails to `bc@crowestudio.com`

**Solution:** Update to `admin@valta.ca`

#### Files to Update:

**A) Contact Form Email:**
```
File: supabase/functions/send-contact-notification/index.ts
Line: 238
Change: to: ['bc@crowestudio.com']
To:     to: ['admin@valta.ca']
```

**B) Careers Form Email:**
```
File: supabase/functions/send-career-application/index.ts
Line: 238
Change: to: ['bc@crowestudio.com']
To:     to: ['admin@valta.ca']
```

After updating both files, redeploy:
```bash
supabase functions deploy send-contact-notification
supabase functions deploy send-career-application
```

---

### 4. Set Up Email Domain in Resend (REQUIRED)

**Why:** Resend requires domain verification to send emails to non-verified addresses.

**Steps:**
1. Go to: https://resend.com/domains
2. Click "Add Domain"
3. Enter: `valta.ca`
4. Resend will provide DNS records (SPF, DKIM, etc.)
5. Add these DNS records to the valta.ca domain (in domain registrar)
6. Wait for verification (usually 5-15 minutes)
7. Once verified, emails will be sent from `noreply@valta.ca` to `admin@valta.ca`

**Current Limitation:**
- Emails work with `bc@crowestudio.com` because it's already verified in Resend
- Once domain is verified, switch to `admin@valta.ca`

---

## Testing

### Test Career Form Submission:
1. Go to: https://valta.ca/careers (or localhost:3000/careers)
2. Fill out the application form
3. Upload a test resume
4. Submit

**Expected Results:**
- ✅ Form shows "Application Submitted!" success modal
- ✅ Application saved to `career_applications` table in Supabase
- ✅ Resume uploaded to `career-applications` storage bucket
- ✅ Email notification sent to admin@valta.ca (or bc@crowestudio.com if not updated yet)

**Check Supabase Dashboard:**
- Table Editor → `career_applications` → Should see new row
- Storage → `career-applications` → Should see uploaded resume file

---

## Database Schema Reference

```sql
career_applications table:
- id (UUID, primary key)
- created_at (timestamp)
- first_name (text, required)
- last_name (text, required)
- email (text, required)
- phone (text, optional)
- linkedin (text, optional)
- portfolio (text, optional)
- how_heard (text, optional)
- resume_url (text, stored link to resume file)
- status (text, default: 'submitted')
- source (text, default: 'website-careers-form')
```

---

## Troubleshooting

### If migration fails:
- Check if table already exists: `SELECT * FROM career_applications LIMIT 1;`
- If exists, migration is safe to re-run (uses `IF NOT EXISTS`)

### If edge function deployment fails:
- Check Supabase CLI is logged in: `supabase login`
- Check project is linked: `supabase link --project-ref <project-id>`

### If emails aren't sending:
- Check edge function logs in Supabase dashboard
- Verify Resend API key is correct: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`
- Check if domain is verified in Resend

### If resume upload fails:
- Check storage bucket exists and is public
- Check RLS policies allow public uploads
- Check file size limits (default: 50MB)

---

## Summary for Claude Code Agent

Execute in this order:
1. `cd /Users/bencrowe/Development/Valta-Website`
2. `supabase db push` (creates table and storage)
3. `supabase functions deploy send-career-application` (deploys email function)
4. Update both email edge functions to use `admin@valta.ca` instead of `bc@crowestudio.com`
5. Redeploy both functions
6. Set up valta.ca domain in Resend dashboard
7. Test the form submission

**Priority:** Steps 1-3 can be done immediately. Step 4-6 requires Resend domain verification.


