# Valta Website - Testing Protocol

**Master Protocol**: `/Users/bencrowe/Development/_Testing-w-Playwright/MASTER-TESTING-PROTOCOL.md`

## Project Settings

- **Production URL**: https://valta.ca
- **Local Dev URL**: http://localhost:3002
- **Backend to Verify**: Supabase (ngovnamnjmexdpjtcnky)
- **Database Tables**:
  - `contact_submissions` - Contact form data
  - `appraisal_requests` - Appraisal form data (planned)
- **Deployment Platform**: Vercel (auto-deploy from main branch)
- **GitHub Repo**: ben-crowe/valta-website-staging

## Key Test Areas

### 1. Contact Form (/contact)
**What to Test:**
- Form renders correctly on desktop and mobile
- All fields validate properly (name, email, phone, company, message)
- Form submits successfully
- Success message displays
- Email notification sent to bc@crowestudio.com
- Data saved to `contact_submissions` table in Supabase

**Expected Behavior:**
- Form clears after submission
- Toast notification shows success
- User sees confirmation message
- Data appears in database within seconds
- Email arrives within 1-2 minutes

**Backend Verification:**
```sql
-- Check latest submission in Supabase
SELECT * FROM contact_submissions
ORDER BY created_at DESC
LIMIT 1;
```

### 2. Appraisal Request Form (/request-appraisal)
**Status**: 🚧 Planning phase - not yet implemented

**When Implemented, Test:**
- Multi-step form navigation
- Property address autocomplete
- File upload functionality
- Estimated turnaround time display
- Database persistence
- Email notifications

### 3. Page Navigation & Responsiveness
**Pages to Test:**
- Homepage (/)
- About (/about)
- Services (/services/*)
- Contact (/contact)
- Request Appraisal (/request-appraisal)

**What to Check:**
- All links work
- No 404 errors
- Mobile menu functions
- Footer navigation works
- Images load properly
- No console errors

### 4. Performance & SEO
**Metrics to Check:**
- Page load time < 3 seconds
- Images lazy load
- No console errors or warnings
- Meta tags present
- Structured data valid

## Common Test Scenarios

### Scenario 1: Contact Form Happy Path
1. Navigate to https://valta.ca/contact
2. Fill all required fields with valid data
3. Submit form
4. Verify success message displays
5. Check email at bc@crowestudio.com
6. Verify data in Supabase

### Scenario 2: Contact Form Validation
1. Navigate to contact form
2. Try submitting with empty required fields
3. Verify validation errors display
4. Try invalid email format
5. Verify email validation works
6. Try invalid phone format
7. Verify phone validation works

### Scenario 3: Mobile Responsiveness
1. Set viewport to mobile (375x667)
2. Navigate all main pages
3. Verify mobile menu works
4. Test contact form on mobile
5. Check image scaling
6. Verify no horizontal scroll

## Test Cycle Naming

Use numbered sessions with descriptive names:
- `01-impl-contact-form.md` - Implementation work
- `01-test-contact-form.md` - Test results for above
- `02-impl-mobile-menu.md` - Next feature
- `02-test-mobile-menu.md` - Test results

Save screenshots as:
- `01-contact-form-success.png`
- `02-mobile-menu-open.png`

## Edge Function Testing

### Contact Form Email Notification
**Function**: `send-contact-notification`
**Location**: `/supabase/functions/send-contact-notification/index.ts`

**Test:**
```bash
# Check function logs in Supabase
# Dashboard > Edge Functions > send-contact-notification > Logs
```

**Expected:**
- Function executes within 2 seconds
- Email sent via Resend API
- No errors in logs
- Returns success status

## Database Verification

### Check Contact Submissions
```sql
-- Latest 10 submissions
SELECT
  name,
  email,
  phone,
  company,
  source_url,
  created_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;
```

### Check for Errors
```sql
-- Look for failed submissions (if error tracking added)
SELECT * FROM contact_submissions
WHERE status = 'error'
ORDER BY created_at DESC;
```

## Deployment Verification

After every deployment:
1. Check Vercel deployment status (should be "Ready")
2. Wait 30 seconds for propagation
3. Test production URL (not preview URL)
4. Verify latest commit SHA matches deployment
5. Check no errors in browser console

## Known Issues & Workarounds

**Issue**: None currently

*(Add issues here as they're discovered)*

---

**Protocol Version**: 1.0
**Last Updated**: October 11, 2025
**Maintained By**: Ben Crowe
