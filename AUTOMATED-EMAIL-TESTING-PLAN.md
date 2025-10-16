# Automated Email Testing - Full E2E Workflow Plan

## The Problem

**Current manual testing workflow is tedious AF:**
1. Fill out form manually (30+ fields) OR use Playwright with approval clicking
2. Submit form
3. Switch to email client
4. Wait for email to arrive
5. Open email
6. Verify content manually
7. Click "View in Dashboard" link
8. Verify dashboard loads correctly
9. Repeat for every code change

**This sucks because:**
- Takes 5-10 minutes per test
- Human error (missing details, not checking everything)
- Breaks flow when coding
- Can't run in CI/CD pipeline
- VS Code Claude requires approval for every Playwright action

## The Solution: Fully Automated Email Testing

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   Test Orchestrator (N8N)                    │
│  - Trigger: GitHub webhook on push                           │
│  - Coordinate all test steps                                 │
│  - Report results to Slack/Email                             │
└─────────────────────────────────────────────────────────────┘
                              ▼
        ┌────────────────────────────────────────┐
        │     Playwright (Headless Browser)      │
        │  - Fill form with test data            │
        │  - Submit form                          │
        │  - Extract submission ID from response  │
        └────────────────────────────────────────┘
                              ▼
        ┌────────────────────────────────────────┐
        │      Email Testing Service (API)       │
        │  - Mailtrap / Mailosaur / MailHog      │
        │  - Catch test emails                    │
        │  - Provide API to read inbox           │
        │  - Extract links and content           │
        └────────────────────────────────────────┘
                              ▼
        ┌────────────────────────────────────────┐
        │       Verification & Assertions        │
        │  - Email received within 30 seconds?   │
        │  - Subject line correct?                │
        │  - Dashboard link present?              │
        │  - All form data in email body?         │
        │  - Click dashboard link, verify loads   │
        └────────────────────────────────────────┘
```

## Option 1: Email Testing Services (Recommended)

### **Mailtrap (Best for staging/testing)**

**What it is:**
- Test email service that catches emails sent from staging
- Provides API to read inbox programmatically
- No emails actually sent to real addresses

**How it works:**
```typescript
// Configure Resend to use Mailtrap SMTP in test mode
const SMTP_CONFIG = process.env.NODE_ENV === 'test'
  ? {
      host: 'smtp.mailtrap.io',
      port: 2525,
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  : {
      // Production Resend API
    }
```

**API Access:**
```bash
# Get latest email from inbox
curl -H "Api-Token: YOUR_TOKEN" \
  https://mailtrap.io/api/v1/inboxes/INBOX_ID/messages

# Response includes:
{
  "id": 123,
  "subject": "Appraisal Request - Test Playwright",
  "html_body": "<full email HTML>",
  "text_body": "text version",
  "to_email": "bc@crowestudio.com",
  "from_email": "onboarding@resend.dev",
  "attachments": []
}
```

**Extract dashboard link:**
```typescript
const extractDashboardLink = (html: string) => {
  const match = html.match(/https:\/\/apr-dashboard-v3\.vercel\.app\/jobs\/([a-z0-9-]+)/)
  return match ? match[0] : null
}
```

**Pricing:**
- Free tier: 500 emails/month
- Paid: $10/month for 10K emails

### **Mailosaur (Best for production email testing)**

**What it is:**
- Real email addresses that forward to test inbox
- Can test actual Gmail/Outlook delivery
- API-first design

**How it works:**
```typescript
// Send email to: anything@YOUR_SERVER.mailosaur.net
// Mailosaur catches it and provides API access

const mailosaur = new MailosaurClient(process.env.MAILOSAUR_API_KEY)

// Wait for email (polls until arrives or timeout)
const email = await mailosaur.messages.get(
  'YOUR_SERVER_ID',
  {
    sentTo: 'test@YOUR_SERVER.mailosaur.net'
  },
  {
    timeout: 30000 // 30 seconds
  }
)

console.log('Subject:', email.subject)
console.log('Body:', email.html.body)
console.log('Links:', email.html.links) // Auto-extracted!
```

**Pricing:**
- $20/month for 1,000 emails
- Includes API access and link extraction

### **MailHog (Best for local development)**

**What it is:**
- Self-hosted SMTP server
- Runs locally in Docker
- Free, open source

**Setup:**
```yaml
# docker-compose.yml
version: '3'
services:
  mailhog:
    image: mailhog/mailhog
    ports:
      - "1025:1025"  # SMTP
      - "8025:8025"  # Web UI
```

**Access:**
```bash
# Web UI: http://localhost:8025
# API: http://localhost:8025/api/v2/messages
```

**In code:**
```typescript
// Point Resend to MailHog in development
if (process.env.NODE_ENV === 'development') {
  const nodemailer = require('nodemailer')
  const transport = nodemailer.createTransport({
    host: 'localhost',
    port: 1025
  })
  // Use transport instead of Resend
}
```

## Option 2: OAuth Email Access (Gmail API)

### **Access real Gmail via API**

**Setup (one-time):**
```bash
# Enable Gmail API in Google Cloud Console
# Create OAuth 2.0 credentials
# Get refresh token
```

**Read emails programmatically:**
```typescript
import { google } from 'googleapis'

const gmail = google.gmail({
  version: 'v1',
  auth: oAuth2Client
})

// Search for recent emails
const res = await gmail.users.messages.list({
  userId: 'me',
  q: 'subject:"Appraisal Request" newer_than:1m'
})

// Get specific message
const message = await gmail.users.messages.get({
  userId: 'me',
  id: res.data.messages[0].id,
  format: 'full'
})

// Extract HTML body
const body = message.data.payload.parts
  .find(part => part.mimeType === 'text/html')
  .body.data

const html = Buffer.from(body, 'base64').toString('utf-8')
```

**Pros:**
- Tests real Gmail delivery
- No additional service needed
- See actual spam filtering behavior

**Cons:**
- OAuth setup complexity
- Rate limits
- Requires Google Cloud project

## Option 3: N8N Workflow Automation (Ben's Current Setup)

**You already have N8N with email OAuth setup!** This could be the easiest path.

### **N8N Email Testing Workflow**

```
┌──────────────────────────────────────────────────────┐
│  1. Webhook Trigger (from Playwright/CI)             │
│     - Receives: { formData, testId }                 │
└──────────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────────┐
│  2. HTTP Request: Submit Form                        │
│     POST valta.ca/api/submit-appraisal               │
│     - Returns: { jobId, success }                    │
└──────────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────────┐
│  3. Gmail Node: Wait for Email                       │
│     - Poll Gmail every 5 seconds                     │
│     - Filter: subject contains "Appraisal Request"   │
│     - Timeout: 30 seconds                            │
└──────────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────────┐
│  4. Extract & Validate                               │
│     - Parse email HTML                               │
│     - Extract dashboard link                         │
│     - Verify all form fields present                 │
│     - Check subject line format                      │
└──────────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────────┐
│  5. HTTP Request: Test Dashboard Link                │
│     GET apr-dashboard-v3.vercel.app/jobs/{jobId}     │
│     - Verify 200 status                              │
│     - Verify job data matches                        │
└──────────────────────────────────────────────────────┘
                        ▼
┌──────────────────────────────────────────────────────┐
│  6. Report Results                                   │
│     - Slack notification (pass/fail)                 │
│     - Store in database (test history)               │
│     - Return webhook response                        │
└──────────────────────────────────────────────────────┘
```

**Trigger from Playwright:**
```typescript
// In your test file
test('Email notification system', async ({ page }) => {
  // Fill and submit form
  await page.goto('https://valta.ca/request-appraisal/intake')
  // ... fill form ...
  await page.click('button[type="submit"]')

  // Trigger N8N workflow to verify email
  const response = await fetch('https://n8n.yourdomain.com/webhook/test-email', {
    method: 'POST',
    body: JSON.stringify({
      testId: 'playwright-' + Date.now(),
      expectedSubject: 'Appraisal Request - Test Playwright',
      expectedEmail: 'bc@crowestudio.com'
    })
  })

  const result = await response.json()
  expect(result.emailReceived).toBe(true)
  expect(result.dashboardLinkWorks).toBe(true)
})
```

## Option 4: Playwright + Email API (Hybrid)

**Best of both worlds - terminal Claude can run this!**

### **Full automated test script:**

```typescript
// tests/email-notification.spec.ts
import { test, expect } from '@playwright/test'
import MailosaurClient from 'mailosaur'

const mailosaur = new MailosaurClient(process.env.MAILOSAUR_API_KEY)
const serverId = process.env.MAILOSAUR_SERVER_ID

test('Appraisal form sends email notification', async ({ page }) => {
  // 1. Fill and submit form
  console.log('Filling out appraisal form...')
  await page.goto('https://valta.ca/request-appraisal/intake')

  await page.fill('[name="clientFirstName"]', 'Test')
  await page.fill('[name="clientLastName"]', 'Automation')
  await page.fill('[name="clientEmail"]', `test@${serverId}.mailosaur.net`)
  await page.fill('[name="clientPhone"]', '587-555-1234')
  await page.fill('[name="propertyName"]', 'Test Property')
  await page.fill('[name="propertyAddress"]', '123 Test St')
  await page.selectOption('[name="propertyType"]', 'multifamily')

  await page.click('button[type="submit"]')

  // 2. Wait for success message
  await expect(page.locator('text=successfully submitted')).toBeVisible()

  // 3. Wait for email (Mailosaur polls automatically)
  console.log('Waiting for email notification...')
  const email = await mailosaur.messages.get(
    serverId,
    {
      sentTo: `test@${serverId}.mailosaur.net`
    },
    {
      timeout: 30000 // 30 seconds
    }
  )

  // 4. Verify email content
  console.log('Verifying email content...')
  expect(email.subject).toContain('Appraisal Request')
  expect(email.subject).toContain('Test Automation')

  expect(email.html.body).toContain('Test Property')
  expect(email.html.body).toContain('123 Test St')
  expect(email.html.body).toContain('587-555-1234')

  // 5. Extract and test dashboard link
  const dashboardLink = email.html.links.find(
    link => link.href.includes('apr-dashboard-v3.vercel.app/jobs/')
  )
  expect(dashboardLink).toBeDefined()

  console.log('Testing dashboard link:', dashboardLink.href)
  await page.goto(dashboardLink.href)

  // 6. Verify dashboard shows the job
  await expect(page.locator('text=Test Property')).toBeVisible()
  await expect(page.locator('text=Test Automation')).toBeVisible()

  console.log('✅ All tests passed!')
})
```

**Run from terminal:**
```bash
# No approval clicking needed!
npx playwright test tests/email-notification.spec.ts --headed
```

## Recommended Implementation

### **Phase 1: Quick Win (1 hour)**
Use **Mailtrap** for staging email testing:

1. Sign up for Mailtrap free account
2. Add SMTP credentials to `.env.local`
3. Update edge function to use Mailtrap in test mode:

```typescript
// supabase/functions/send-appraisal-request/index.ts

const getEmailConfig = () => {
  if (Deno.env.get('NODE_ENV') === 'test') {
    return {
      provider: 'smtp',
      host: 'smtp.mailtrap.io',
      port: 2525,
      user: Deno.env.get('MAILTRAP_USER'),
      pass: Deno.env.get('MAILTRAP_PASS')
    }
  }

  return {
    provider: 'resend',
    apiKey: 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94'
  }
}
```

4. Create simple Playwright test with Mailtrap API
5. Run in terminal without approvals

### **Phase 2: N8N Integration (2 hours)**
Build N8N workflow for CI/CD:

1. Create N8N workflow (see template above)
2. Add webhook trigger
3. Configure Gmail node with your OAuth
4. Add Slack notifications for test results
5. Trigger from GitHub Actions on PR

### **Phase 3: Full Automation (4 hours)**
Production-grade testing:

1. Switch to Mailosaur for realistic email testing
2. Add to GitHub Actions CI/CD
3. Test across multiple scenarios:
   - Normal submission
   - Test mode submission
   - Embedded mode submission
   - Error handling
4. Generate test reports
5. Auto-comment on PRs with results

## Cost Comparison

| Solution | Cost | Setup Time | Maintenance |
|----------|------|------------|-------------|
| **Mailtrap** | Free-$10/mo | 30 min | Low |
| **Mailosaur** | $20/mo | 1 hour | Low |
| **MailHog** | Free | 15 min | Medium |
| **Gmail API** | Free | 2 hours | Medium |
| **N8N (existing)** | $0 (already have) | 2 hours | Low |

## Ben's Best Path Forward

**Given your setup:**

1. **Immediate (today):** Use Mailtrap for quick testing
   - Free tier is plenty
   - 30 minutes to set up
   - Playwright tests run in terminal without approvals

2. **This week:** Build N8N workflow
   - You already have N8N with Gmail OAuth
   - Reuse existing authentication
   - Trigger from Playwright or GitHub
   - Slack notifications for results

3. **Next sprint:** Add to CI/CD
   - Run on every PR
   - Auto-comment with test results
   - Block merges if email tests fail

## Files to Create

```
tests/
  email-notification.spec.ts         # Playwright test
  helpers/
    mailtrap.ts                       # Mailtrap API helper
    email-assertions.ts               # Reusable assertions

.github/
  workflows/
    email-tests.yml                   # CI/CD workflow

.env.test
  MAILTRAP_USER=xxx
  MAILTRAP_PASS=xxx
  MAILOSAUR_API_KEY=xxx
  MAILOSAUR_SERVER_ID=xxx

n8n-workflows/
  email-testing-workflow.json         # Export of N8N workflow
```

## Next Steps

**Don't implement yet** - but when ready:

1. **Choose email testing service** (recommend Mailtrap to start)
2. **Create `.env.test` file** with credentials
3. **Update edge function** to support test mode SMTP
4. **Write Playwright test** with email verification
5. **Run from terminal** (no more approval clicking!)
6. **Add to CI/CD** for automated testing on every push

---

**The payoff:**
- ⚡ 30 seconds per test instead of 5-10 minutes
- 🤖 Run 100% automated in CI/CD
- ✅ Catch email issues before production
- 🚀 Terminal Claude can run without approvals
- 📊 Test reports and history tracking

**Tedious shit eliminated!**

---

**Created:** October 16, 2025
**Session:** Email notification testing automation planning
**Status:** Planning only - not implemented
