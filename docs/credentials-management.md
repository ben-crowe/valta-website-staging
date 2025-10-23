# Credentials Management Strategy - Valta Website

**Status:** 🚨 **CRITICAL ACTION REQUIRED** - Multiple credentials hardcoded in source code

## Executive Summary

**2 Critical Security Issues Found (October 20, 2025):**

1. **Resend API Key** - Hardcoded in 3 edge functions
   - Risk: Email abuse, cost risk
   - Files: All 3 Supabase edge functions
   - Action: Rotate key, update to environment variables

2. **Supabase Service Role Key** - Hardcoded in deployment script
   - Risk: 🔴 **EXTREME** - Full admin database access
   - File: `/03-LeadForm-ContactForm/deploy-schema.js`
   - Action: Rotate immediately, remove file

**Impact:**
- Both keys are in public GitHub repository
- Anyone can access them in commit history
- Service role key = complete database control
- Immediate rotation required

**Time to Fix:** 20-30 minutes following steps below

---

## All Project Credentials (Complete Audit)

### 1. **Supabase** (Database & Backend)
- **Type**: Database connection + Backend functions
- **Keys**:
  - `NEXT_PUBLIC_SUPABASE_URL` (public)
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (public - anon, limited permissions)
  - `SUPABASE_SERVICE_ROLE_KEY` (SECRET - admin access)
- **Current Location**: `.env.local` ✅
- **Also Used In**:
  - `/lib/supabase.ts` (hardcoded URL + public anon key - OK, these are public)
  - Edge functions access via environment variables ✅
- **Status**: ✅ Properly managed

### 2. **Resend** (Email Sending)
- **Type**: Email API service
- **Keys**:
  - `RESEND_API_KEY` (SECRET - can send emails at your expense)
- **Current Location**: 🚨 **HARDCODED in 3 edge functions**
  - `/supabase/functions/send-appraisal-request/index.ts` (Line 62)
  - `/supabase/functions/send-contact-notification/index.ts` (Line 33)
  - `/supabase/functions/send-career-application/index.ts` (Line 33)
- **Exposed Key**: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`
- **Exposed Where**:
  - GitHub repository (public)
  - 4+ commits in git history
  - Anyone can see and use it
- **Status**: 🚨 **CRITICAL - NEEDS IMMEDIATE ACTION**

### 3. **Vercel** (Deployment & Hosting)
- **Type**: CI/CD & Hosting platform
- **Keys**:
  - Deployment token (used by CLI)
  - Project settings
- **Current Location**: Vercel dashboard (secure) ✅
- **Local Access**: Via `npx vercel` CLI authentication ✅
- **Status**: ✅ Properly managed (Vercel stores tokens securely)

### 4. **ClickUp** (Project Management)
- **Type**: Task/project management
- **Keys**: API tokens (if used)
- **Current Location**: **UNKNOWN - need to check**
- **Status**: ⚠️ **NEEDS AUDIT** - where are these stored?

### 5. **Valcre** (Appraisal Valuation API)
- **Type**: Third-party API integration
- **Keys**: API credentials
- **Current Location**: **UNKNOWN - need to check**
- **Status**: ⚠️ **NEEDS AUDIT** - where are these stored?

### 6. **Gmail / Google Workspace** (Email)
- **Type**: Email service
- **Keys**: OAuth tokens / Service account (not found in hardcoded sources)
- **Current Location**: Not currently using - using Resend instead
- **Status**: ✅ Not implemented yet (future: setup via MX records)

### 7. **Supabase Service Role Key** (ADMIN DATABASE ACCESS)
- **Type**: Database admin credentials (full database access)
- **Keys**:
  - `SUPABASE_SERVICE_ROLE_KEY` (SECRET - ADMIN DATABASE ACCESS)
- **Current Location**: 🚨 **HARDCODED in `/03-LeadForm-ContactForm/deploy-schema.js`**
- **Exposed Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...xtwgbNvOWq_BPT9FIEHkDT8t6g4ixQfmJmyI-zBNJdI`
- **Risk Level**: 🔴 **EXTREME - ADMIN ACCESS TO ENTIRE DATABASE**
  - Can read all data (including sensitive user info)
  - Can modify all tables
  - Can delete data
  - Can bypass Row Level Security (RLS)
- **Status**: 🚨 **CRITICAL - ROTATE KEY IMMEDIATELY**

---

## Recommended Credentials Management Strategy

### For `LOCAL` Development (Your Computer)

**File**: `.env.local` (Never commits to GitHub)
```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=https://ngovnamnjmexdpjtcnky.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[public key]
SUPABASE_SERVICE_ROLE_KEY=[SECRET KEY]

# Email
RESEND_API_KEY=[SECRET KEY]

# ClickUp (if needed)
CLICKUP_API_TOKEN=[SECRET KEY]

# Valcre (if needed)
VALCRE_API_KEY=[SECRET KEY]
```

**Rules**:
- ✅ File exists locally on your computer
- ✅ You keep a backup copy (password manager, secure note)
- ✅ Never upload to GitHub (add `.env.local` to `.gitignore`)
- ✅ Can use any time in local development
- ✅ Backup: Store complex keys in 1Password or similar

### For `PRODUCTION` (Vercel/Supabase)

**Location**: Vercel Environment Variables (in Vercel Dashboard)
```
Settings → Environment Variables
├── RESEND_API_KEY=[SECRET]
├── SUPABASE_SERVICE_ROLE_KEY=[SECRET]
├── CLICKUP_API_TOKEN=[SECRET]
└── VALCRE_API_KEY=[SECRET]
```

**Rules**:
- ✅ Never in source code
- ✅ Never commit to GitHub
- ✅ Only accessible in Vercel dashboard
- ✅ Auto-injected at build/deploy time
- ✅ Can rotate without code changes
- ✅ Access controlled by Vercel team permissions

### For `SUPABASE EDGE FUNCTIONS` (Email)

**Location**: Supabase Project Secrets
```
Supabase Dashboard → Project Settings → Secrets
├── RESEND_API_KEY=[SECRET]
```

**Access in Functions**:
```typescript
// DO THIS (secure - environment variable):
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

// DON'T DO THIS (exposed in source code):
const RESEND_API_KEY = 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94'
```

---

## IMMEDIATE ACTION REQUIRED: Fix Hardcoded Credentials

### Critical Security Issues Found

#### Issue #1: Resend API Key (Email Sending)
- **Hardcoded in 3 files**:
  - `/supabase/functions/send-appraisal-request/index.ts` (Line 62)
  - `/supabase/functions/send-contact-notification/index.ts` (Line 33)
  - `/supabase/functions/send-career-application/index.ts` (Line 33)
- **Exposed Key**: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`
- **Risk**: Anyone can send emails using your Resend account (cost risk, spam risk)
- **Exposure**: Public GitHub repository, visible in 4+ commits

#### Issue #2: Supabase Service Role Key (Database Admin)
- **Hardcoded in**: `/03-LeadForm-ContactForm/deploy-schema.js`
- **Exposed Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...xtwgbNvOWq_BPT9FIEHkDT8t6g4ixQfmJmyI-zBNJdI`
- **Risk**: 🔴 **EXTREME - Full admin access to database**
  - Read all data (client info, submissions, contacts)
  - Modify/delete any table
  - Bypass all security rules
  - Create/drop tables
- **Exposure**: Public GitHub repository

### Solution Overview

Fix both issues using these steps:
1. Rotate Supabase Service Role Key (DATABASE - MOST CRITICAL)
2. Rotate Resend API Key (EMAIL)
3. Update all code to use environment variables
4. Redeploy all functions
5. Verify production

---

## Fix #1: Supabase Service Role Key (DO THIS FIRST)

### Step 1: Generate New Service Role Key

⚠️ **WARNING**: This will invalidate the old key everywhere it's used. Make sure you update `.env.local` immediately after.

1. Go to: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/settings/api
2. Under **Project API keys** section
3. Find **service_role** key (secret)
4. Click **Reset API key** (or generate new one if available)
5. Copy the new key immediately
6. Save to password manager

### Step 2: Update Local Environment

Update your `.env.local` file:
```bash
# Replace old service key with new one
SUPABASE_SERVICE_ROLE_KEY=[new-key-from-step-1]
```

### Step 3: Remove from Source Code

Delete or move to archive:
```bash
# This file contains the hardcoded key - remove it
rm /Users/bencrowe/Development/Valta-Website/03-LeadForm-ContactForm/deploy-schema.js

# Or move to archive if needed for reference (git won't track it)
mv 03-LeadForm-ContactForm/deploy-schema.js 00-Archive/
```

### Step 4: Verify No Other References

Search for any other instances:
```bash
cd /Users/bencrowe/Development/Valta-Website
grep -r "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" --include="*.js" --include="*.ts" | grep -v node_modules
```

If found, replace with `process.env.SUPABASE_SERVICE_ROLE_KEY`

---

## Fix #2: Resend API Key

**Step 1: Revoke Current Key (IMMEDIATELY)**
1. Go to: https://resend.com/api-keys
2. Find the key: `re_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94`
3. Click **Delete** or **Revoke**
4. This stops anyone from using the old key

**Step 2: Create New Key**
1. In Resend Dashboard → API Keys
2. Click **Create API Key**
3. Give it a name: "Valta Website Production"
4. Copy the new key (starts with `re_`)
5. Store it safely

**Step 3: Add to Supabase Secrets**
1. Go to: https://supabase.com/dashboard
2. Select project: `ngovnamnjmexdpjtcnky`
3. Go to: **Settings** → **Secrets**
4. Click **New secret**
5. Name: `RESEND_API_KEY`
6. Value: (paste your new Resend key)
7. Click **Add secret**

**Step 4: Update ALL Function Code**

Update these 3 files:

**File 1:** `/supabase/functions/send-appraisal-request/index.ts` (Line 62)
**File 2:** `/supabase/functions/send-contact-notification/index.ts` (Line 33)
**File 3:** `/supabase/functions/send-career-application/index.ts` (Line 33)

Replace this:
```typescript
// OLD (DANGEROUS - EXPOSED):
const RESEND_API_KEY = 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94';
```

With this:
```typescript
// NEW (SECURE - ENVIRONMENT VARIABLE):
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
```

Then redeploy ALL functions:
```bash
npx supabase functions deploy send-appraisal-request
npx supabase functions deploy send-contact-notification
npx supabase functions deploy send-career-application
```

**Step 5: Verify in Production**
1. Test the appraisal form on: https://valta.ca/request-appraisal
2. Submit test request
3. Verify email sends successfully
4. Check Resend dashboard for the email

---

## Credentials Checklist

| Service | Location | Status | Action |
|---------|----------|--------|--------|
| **Supabase URL** | Source code (public) | ✅ OK | None - public |
| **Supabase Anon Key** | Source code (public) | ✅ OK | None - public |
| **Supabase Service Key** | `.env.local` | ✅ OK | Keep secret |
| **Resend API Key** | 🚨 **HARDCODED in 3 edge functions** | ❌ CRITICAL | Rotate key + update code |
| **Supabase Service Key** | 🚨 **HARDCODED in deploy-schema.js** | ❌ EXTREME RISK | Rotate key + remove file |
| **Vercel Deploy Token** | Vercel dashboard | ✅ OK | Keep in Vercel |
| **ClickUp API** | **UNKNOWN** | ⚠️ CHECK | Audit where it's stored |
| **Valcre API** | **UNKNOWN** | ⚠️ CHECK | Audit where it's stored |
| **Gmail/Google** | Not yet implemented | ✅ OK | Will setup via MX records |

---

## Security Best Practices Going Forward

### DO ✅
- Store secrets in `.env.local` (never commit)
- Use Supabase Secrets for edge functions
- Use Vercel Environment Variables for production
- Rotate keys periodically (every 6 months)
- Use strong, randomly-generated keys
- Store backups in password manager (1Password, LastPass)
- Review `.gitignore` includes `.env.local`

### DON'T ❌
- Hardcode secrets in source files
- Commit `.env.local` to GitHub
- Share API keys in Slack/email
- Use same key across dev/production/staging
- Leave old/unused keys active
- Commit keys in comments

### GitHub Safety
Verify `.gitignore` contains:
```bash
.env.local
.env.*.local
secrets/
```

---

## Recovery Steps (If Key Compromised)

**If Resend key leaked** (or any credential):
1. Immediately revoke the key in the service dashboard
2. Generate a new key
3. Update in Supabase/Vercel
4. Redeploy
5. Monitor for suspicious activity
6. Update documentation

**Time to recovery**: 5-10 minutes with this process

---

## Next Audit

**Schedule**: Monthly
- Check for hardcoded keys in: `grep -r "re_\|sk_\|pk_"` (recursive search)
- Review recent commits for accidental commits
- Verify all production keys are in environment variables
- Test that functions work with environment-based secrets

---

## Related Documentation

- **Email Setup**: See `hosting-and-dns.md` (MX records for Gmail)
- **Deployment**: See `deployment.md` (production process)
- **Supabase Secrets**: https://supabase.com/docs/guides/functions/secrets

---

**Last Updated**: October 20, 2025
**Last Audit**: October 20, 2025
**Owner**: Ben Crowe
**Priority**: CRITICAL (Resend key fix)
