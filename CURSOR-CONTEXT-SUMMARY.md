# Context Summary for Cursor Chat

**Copy/paste this entire message into Cursor to load context:**

---

## What We Just Accomplished (Oct 16, 2025)

I'm working on the **Valta Website** project with **APR Dashboard v3** integration. We just implemented email notifications for the appraisal request form.

---

## Email Notification System - COMPLETED ✅

### **What Was Built:**

**Created new Supabase edge function:** `send-appraisal-request`
- Sends email when user submits `/request-appraisal` form
- Uses **Resend API** (no OAuth/SMTP needed)
- API Key: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`
- Currently sends to: `bc@crowestudio.com` (testing)
- Will change to: `clientcare@valta.ca` (production)

**Email includes:**
- All form data (client info, property details)
- Timestamp (MST timezone)
- **"View in APR Dashboard" button** → Links to `https://apr-dashboard-v3.vercel.app/jobs/[jobId]`

**Files modified:**
- Created: `supabase/functions/send-appraisal-request/index.ts`
- Updated: `hooks/useAppraisalFormSubmission.ts` (added email trigger after DB save)

**Deployment:**
- Function deployed to Supabase
- Tested successfully with `curl` command

---

## Complete Workflow (How Everything Fits Together)

### **STEP 1: Website Form → Email Notification** ✅ DONE

```
User fills valta.ca/request-appraisal
  → Saves to job_submissions (gets UUID like abc-123)
  → Email sent to Valta team
  → Email has "View in Dashboard" button
  → Button links to APR Dashboard with job ID
```

### **STEP 2: Team Reviews in Dashboard**

```
Team clicks "View in Dashboard" from email
  → Opens APR Dashboard v3 to that specific job
  → Team reviews/edits fields
  → Prepares for Valcre job creation
```

### **STEP 3: Create Valcre Job (Manual Button)**

```
Appraiser clicks "Create Valcre Job" button
  → Sends to Valcre API
  → Returns Valcre job number (e.g., VAL251014)
  → Saves valcre_job_id in database
  → Job now has TWO IDs:
     - Dashboard ID: abc-123 (internal)
     - Valcre ID: VAL251014 (appraisal job)
```

### **STEP 4: Generate & Send LOE (Manual Button)**

```
Appraiser clicks "Create LOE" button
  → Generates LOE HTML from custom template
  → Sends to DocuSeal API
  → Appraiser previews LOE
  → Sends to client for e-signature
  → Client signs
  → DocuSeal webhook fires (STEP 5)
```

### **STEP 5: Client Signs (Future - Not Built Yet)**

```
Client completes signature
  → DocuSeal webhook triggers
  → Email to team: "Client signed!"
  → Update ClickUp task → "LOE Signed"
```

---

## Critical Information

### **🚨 TWO DIFFERENT JOB IDs:**

1. **Dashboard Job ID** (UUID like `abc-123-def-456`)
   - Generated when form submitted
   - Used in database: `job_submissions.id`
   - Used in dashboard links
   - Internal tracking only

2. **Valcre Job Number** (like `VAL251014`)
   - Generated when "Create Valcre Job" clicked
   - Stored in: `job_submissions.valcre_job_id`
   - Used for actual appraisal work
   - NOT created until Step 3

**THESE ARE SEPARATE - DO NOT CONFUSE THEM**

---

### **🚨 TWO DIFFERENT CLICKUP BOARDS:**

1. **Internal Work Tasks** (Appraiser workflow)
   - Created when: Appraiser clicks "Create ClickUp Task"
   - Tracks: LOE Sent → Signed → Field Work → Report → QC → Delivered
   - Used by: Appraisers for work tracking

2. **Client Progress** (CRM-style pipeline)
   - Created when: Various triggers (form submit, LOE sent, signed, etc.)
   - Tracks: Inquiry → LOE Sent → LOE Signed → Invoice → Paid → Active
   - Used by: Admin/team for client status overview

**THESE ARE SEPARATE BOARDS WITH DIFFERENT PURPOSES**

---

## Shared Infrastructure

**Supabase Instance:** `ngovnamnjmexdpjtcnky.supabase.co`
- Both Valta Website AND APR Dashboard v3 use SAME database
- Same `job_submissions` table
- When form saves → job is immediately visible in dashboard (same DB!)

**Email System:** Resend API
- All 3 forms use same Resend account/key
- Contact form: `send-contact-notification`
- Career form: `send-career-application`
- Appraisal form: `send-appraisal-request` ← NEW

---

## Job Naming Convention (Important)

**Before Valcre job created:**
```
"VAL - 123 Test St, Calgary"
```

**After Valcre job created:**
```
"VAL251014 - 123 Test St, Calgary"
```

**Pattern:** `VAL[number] - [short address]`

This name follows the job everywhere (ClickUp, Dashboard, emails)

---

## Database Tables

### **job_submissions** (Primary table)
- `id` (UUID) - Dashboard ID
- `valcre_job_id` (string) - Valcre number (NULL until Step 3)
- `client_first_name`, `client_last_name`, `client_email`, `client_phone`
- `property_name`, `property_address`, `property_type`
- `intended_use`, `valuation_premises`, `asset_condition`
- `notes` - Maps to form `additionalInfo`
- `status` - Job status

### **contact_submissions**
Contact form data

### **career_applications**
Career form + resume storage

### **loe_submissions**
DocuSeal LOE tracking

---

## What Still Needs to Be Built (Future)

### **Priority 1: DocuSeal Webhook**
- Email when client signs LOE
- Update ClickUp Client Progress task
- Trigger invoice workflow

### **Priority 2: ClickUp Automation**
- Auto-create Client Progress task on form submit
- Add "View in Dashboard" links to tasks
- Auto-update statuses

### **Priority 3: Job Naming**
- Auto-generate: `VAL - [address]`
- Auto-update when Valcre job created: `VAL251014 - [address]`

### **Priority 4: Email Domain**
- Verify `valta.ca` in Resend
- Change all recipients from `bc@crowestudio.com` to `clientcare@valta.ca`

---

## Key Files to Know

### **Valta Website (Current Project)**
```
app/request-appraisal/intake/page.tsx         # Form UI
hooks/useAppraisalFormSubmission.ts           # Form submission logic
lib/supabase.ts                               # Supabase config
supabase/functions/send-appraisal-request/    # Email edge function ← NEW
supabase/functions/send-contact-notification/ # Contact email
supabase/functions/send-career-application/   # Career email
```

### **APR Dashboard v3** (Other project - `/Users/bencrowe/Development/APR-Dashboard-v3/`)
```
src/utils/loe/                                # LOE generation
supabase/functions/send-loe-email-fixed/      # LOE email to client
supabase/functions/create-clickup-task/       # ClickUp integration
```

---

## How to Test

### **Test appraisal request email:**
```bash
curl -X POST \
  'https://ngovnamnjmexdpjtcnky.supabase.co/functions/v1/send-appraisal-request' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ' \
  -H 'Content-Type: application/json' \
  -d '{
    "jobId": "test-123",
    "clientFirstName": "Test",
    "clientLastName": "Client",
    "clientEmail": "test@example.com",
    "clientPhone": "403-555-1234",
    "propertyName": "Test Property",
    "propertyAddress": "123 Test St, Calgary",
    "propertyType": "Multi-Family",
    "intendedUse": "Financing"
  }'
```

**Expected result:** Email sent to `bc@crowestudio.com` with dashboard link

---

## Summary

We successfully implemented email notifications for the Valta Website appraisal request form. When users submit the form, the Valta team now gets an immediate email with all the details and a "View in APR Dashboard" button that takes them directly to that job.

The system is fully functional and tested. Next steps involve DocuSeal webhook integration and ClickUp automation, but those are future tasks.

Full documentation available in: `VALTA-WORKFLOW-DOCUMENTATION.md`

---

**Ready to continue work. What would you like to tackle next?**
