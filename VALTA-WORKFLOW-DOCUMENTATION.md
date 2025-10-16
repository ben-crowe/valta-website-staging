# Valta Website & APR Dashboard Integration Workflow

**Last Updated:** October 16, 2025
**Session:** Email Notification System Implementation

---

## Overview

This document outlines the complete workflow from website form submission through appraisal completion, including email notifications, dashboard integration, Valcre API, DocuSeal e-signatures, and ClickUp task management.

---

## System Architecture

### **Shared Infrastructure**
- **Supabase Instance:** `ngovnamnjmexdpjtcnky.supabase.co`
- **Database:** Both Valta Website and APR Dashboard v3 use same `job_submissions` table
- **Email Service:** Resend API (key: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`)

### **Applications**
1. **Valta Website:** `valta.ca` (Public-facing)
2. **APR Dashboard v3:** `https://apr-dashboard-v3.vercel.app` (Internal team tool)

---

## Complete Workflow (4 Major Steps)

### **STEP 1: Website Form Submission**

**Trigger:** User fills out `valta.ca/request-appraisal`

**What Happens:**
1. Form validates required fields (firstName, lastName, email, phone)
2. Data saves to `job_submissions` table in Supabase
3. Generates internal job ID (UUID, e.g., `abc-123-def-456`)
4. Files uploaded to `job-files` storage bucket (if provided)
5. **Email notification sent to Valta team**

**Email Contains:**
- All form data (client info, property info, additional notes)
- Timestamp (MST timezone)
- **"View in APR Dashboard" button** → Links to `https://apr-dashboard-v3.vercel.app/jobs/[job_id]`

**Email Recipients:**
- Current: `bc@crowestudio.com` (testing)
- Production: `clientcare@valta.ca` (when ready)

**Technical Details:**
- Hook: `hooks/useAppraisalFormSubmission.ts`
- Edge Function: `supabase/functions/send-appraisal-request/index.ts`
- Database Table: `job_submissions`

---

### **STEP 2: Valta Team Reviews in Dashboard**

**Trigger:** Team member clicks "View in APR Dashboard" from email

**What Happens:**
1. Opens APR Dashboard v3 directly to that job
2. Team reviews submitted data
3. Fills in any missing fields
4. Adds internal notes/details
5. Prepares for Valcre job creation

**Important:**
- At this stage, there is NO Valcre job yet
- Job only exists as internal record in `job_submissions` table
- Job has internal ID only (e.g., `abc-123`)

---

### **STEP 3: Create Valcre Job (Manual)**

**Trigger:** Appraiser clicks "Create Valcre Job" button in dashboard

**What Happens:**
1. Dashboard sends data to Valcre API
2. Valcre returns job number (e.g., `VAL251014`)
3. Dashboard saves `valcre_job_id` in `job_submissions` table
4. Job now has TWO IDs:
   - **Internal Dashboard ID:** `abc-123-def-456` (UUID)
   - **Valcre Job Number:** `VAL251014`

**Critical Distinction:**
- `job_submissions.id` = Internal tracking ID (for dashboard/links)
- `job_submissions.valcre_job_id` = Valcre API job number (for appraisal work)
- These are SEPARATE and serve DIFFERENT purposes

**Job Naming Convention:**

Before Valcre Job:
```
"VAL - 123 Test St, Calgary"
```

After Valcre Job:
```
"VAL251014 - 123 Test St, Calgary"
```

Pattern: `VAL[number] - [short address]`

---

### **STEP 4: Generate & Send LOE (Manual)**

**Trigger:** Appraiser clicks "Create LOE" button in dashboard

**What Happens:**
1. Dashboard generates LOE HTML from custom template
2. Sends to DocuSeal API with signature fields
3. DocuSeal creates submission and returns signing link
4. **Appraiser previews LOE** (quality check)
5. **Appraiser sends to client** for e-signature
6. Client receives email with signing link
7. Client signs document
8. **DocuSeal webhook fires** (triggers Step 5)

**Technical Details:**
- LOE Template: Custom HTML with DocuSeal field tags
- Edge Functions: `send-loe-email`, `send-loe-email-fixed`, `send-loe-email-v2`
- Currently uses: `send-loe-email-fixed` (Resend API)
- Signing Link Format: `https://docuseal.com/s/[slug]`

---

### **STEP 5: Client Signs LOE (DocuSeal Webhook) - FUTURE**

**Trigger:** Client completes signature in DocuSeal

**What Happens (To Be Implemented):**
1. DocuSeal webhook triggers
2. **Email notification sent to Valta team:** "Client [Name] signed LOE!"
3. **ClickUp Client Progress task updated** → Status: "LOE Signed"
4. (Optional) Update Internal Work task status

---

## ClickUp Integration

### **Two Separate Task Boards**

#### **Board 1: Internal Work Tasks (Appraiser Workflow)**

**Purpose:** Track appraisal job progress internally

**When Created:** Appraiser clicks "Create ClickUp Task" button (after LOE sent)

**Stages:**
```
LOE Sent → Signed → Field Work → Report Writing → QC → Delivered
```

**Used By:** Appraisers tracking their work

---

#### **Board 2: Client Progress (CRM-Style)**

**Purpose:** Track client through communication/sales pipeline

**When Created:** Various triggers throughout workflow

**Stages:**
```
Inquiry → LOE Sent → LOE Signed → Invoice Sent → Paid → Active → Completed
```

**Triggers (Current & Future):**

| Event | ClickUp Action | Status |
|-------|----------------|--------|
| Website form submitted | Create task → "Inquiry" | 🔴 TODO |
| LOE sent to client | Update → "LOE Sent" | 🔴 TODO |
| Client signs DocuSeal | Update → "LOE Signed" | 🔴 TODO |
| Invoice sent | Update → "Invoice Sent" | 🔴 TODO |
| Payment received | Update → "Paid" | 🔴 TODO |

**Used By:** Valta admin/team for client status overview

---

## Email Notification System

### **Current Email Functions (All Using Resend API)**

#### **1. Contact Form Notifications**
- **Function:** `supabase/functions/send-contact-notification/index.ts`
- **Trigger:** User submits `/contact` form
- **Recipient:** `bc@crowestudio.com` (change to `clientcare@valta.ca`)
- **Status:** ✅ Working

#### **2. Career Application Notifications**
- **Function:** `supabase/functions/send-career-application/index.ts`
- **Trigger:** User submits `/careers` form
- **Recipient:** `bc@crowestudio.com` (change to `admin@valta.ca`)
- **Includes:** Resume attachment
- **Status:** ✅ Working

#### **3. Appraisal Request Notifications** ⭐ NEW
- **Function:** `supabase/functions/send-appraisal-request/index.ts`
- **Trigger:** User submits `/request-appraisal` form
- **Recipient:** `bc@crowestudio.com` (change to `clientcare@valta.ca`)
- **Includes:** "View in APR Dashboard" button
- **Status:** ✅ Working (Just Deployed)

#### **4. LOE Signature Notifications** (APR Dashboard)
- **Functions:** `send-loe-email`, `send-loe-email-fixed`, `send-loe-email-gmail`, `send-loe-email-v2`
- **Active:** `send-loe-email-fixed` (uses Resend)
- **Trigger:** LOE sent to client
- **Recipient:** Client email
- **Status:** ✅ Working

---

### **Email Configuration**

**Resend API Key:** `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`

**From Address:** `Valta Website <onboarding@resend.dev>`
- Using Resend's test domain
- Will change to `clientcare@valta.ca` or `admin@valta.ca` once domain verified

**Current Recipients (Testing):**
- All notifications → `bc@crowestudio.com`

**Production Recipients (To Be Updated):**
- Contact/Appraisal forms → `clientcare@valta.ca`
- Career applications → `admin@valta.ca`

---

## Database Schema

### **Key Tables**

#### **job_submissions**
Primary table for appraisal requests

**Important Fields:**
- `id` (UUID) - Internal dashboard ID
- `valcre_job_id` (string) - Valcre job number (NULL until Step 3)
- `client_first_name`, `client_last_name`, `client_email`, `client_phone`
- `property_name`, `property_address`, `property_type`
- `intended_use`, `valuation_premises`, `asset_condition`
- `notes` (text) - Maps to form's `additionalInfo`
- `status` (string) - Job status tracking
- `created_at` (timestamp)

#### **contact_submissions**
Contact form submissions

#### **career_applications**
Career form submissions (includes resume storage)

#### **loe_submissions**
Letter of Engagement submissions (DocuSeal tracking)

---

## Testing Commands

### **Test Appraisal Request Email:**
```bash
curl -X POST \
  'https://ngovnamnjmexdpjtcnky.supabase.co/functions/v1/send-appraisal-request' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ' \
  -H 'Content-Type: application/json' \
  -d '{
    "jobId": "test-job-123",
    "clientFirstName": "Test",
    "clientLastName": "Client",
    "clientEmail": "test@example.com",
    "clientPhone": "403-555-1234",
    "propertyName": "Test Property",
    "propertyAddress": "123 Test St, Calgary, AB",
    "propertyType": "Multi-Family",
    "intendedUse": "Financing"
  }'
```

### **Deploy Edge Function:**
```bash
npx supabase functions deploy send-appraisal-request
```

---

## Iframe Embedding (Implemented)

### **Single Source of Truth Architecture**

The appraisal request form supports iframe embedding for use in APR Dashboard:

**URL Parameters:**
- `?embedded=true` - Hides header/footer for clean iframe display
- `?test=true` - Adds `[TEST]` prefix to email subject, shows test banner

**Usage Examples:**
```
Normal production: /request-appraisal/intake
Embedded production: /request-appraisal/intake?embedded=true
Embedded testing: /request-appraisal/intake?embedded=true&test=true
```

**Benefits:**
- ✅ Testing form IS the production form
- ✅ No code drift between testing and production
- ✅ Same database, validation, and email system
- ✅ Easy toggle between test/production modes

**Implementation Guide:** See `IFRAME-EMBEDDING-GUIDE.md` for full details

---

## Future Enhancements (TODO)

### **Priority 1: DocuSeal Webhook Integration**
- [ ] Email notification when client signs LOE
- [ ] Update ClickUp Client Progress task → "LOE Signed"
- [ ] Trigger invoice workflow

### **Priority 2: ClickUp Automation**
- [ ] Auto-create Client Progress task on form submission
- [ ] Add "View in Dashboard" link to ClickUp tasks
- [ ] Status updates based on workflow triggers

### **Priority 3: Job Naming Convention**
- [ ] Implement auto-naming: `VAL - [address]`
- [ ] Auto-update when Valcre job created: `VAL251014 - [address]`
- [ ] Apply naming across Dashboard, ClickUp, emails

### **Priority 4: Email Domain Verification**
- [ ] Verify `valta.ca` domain in Resend
- [ ] Update all functions to use `@valta.ca` addresses
- [ ] Test production email delivery

---

## Important Reminders

### **🚨 Critical Distinctions**

1. **Two Different Job IDs:**
   - **Dashboard ID** (`abc-123`) = Internal tracking, used in links
   - **Valcre ID** (`VAL251014`) = Appraisal job number, used in Valcre API
   - **NOT THE SAME THING**

2. **Two Different ClickUp Boards:**
   - **Work Tasks** = Appraiser workflow stages
   - **Client Progress** = CRM/pipeline stages
   - **SEPARATE PURPOSES**

3. **Email Sending:**
   - **ALL use Resend API** (no OAuth, no SMTP needed)
   - **Same API key across all projects**
   - **Simple to update recipients** (one line change)

---

## Key File Locations

### **Valta Website**
- Forms: `app/request-appraisal/intake/page.tsx`
- Form Hook: `hooks/useAppraisalFormSubmission.ts`
- Supabase Config: `lib/supabase.ts`
- Edge Functions: `supabase/functions/`
  - `send-appraisal-request/`
  - `send-contact-notification/`
  - `send-career-application/`

### **APR Dashboard v3**
- Location: `/Users/bencrowe/Development/APR-Dashboard-v3/`
- LOE Functions: `src/utils/loe/`
- Valcre Integration: `src/utils/webhooks/`
- Edge Functions: `supabase/functions/`
  - `send-loe-email-fixed/` (active)
  - `create-clickup-task/`
  - `docuseal-proxy/`

---

## Contact & Support

**Project Owner:** Ben Crowe
**Email:** bc@crowestudio.com
**Session Date:** October 16, 2025

---

_This document is a living reference and should be updated as the workflow evolves._
