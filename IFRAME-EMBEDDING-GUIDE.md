# Iframe Embedding Guide - Appraisal Request Form

## Overview

The Valta Website appraisal request form can now be embedded in the APR Dashboard as an iframe, creating a **single source of truth** for testing. This eliminates the need to maintain two separate forms.

## URL Parameters

### `?embedded=true`
- **Purpose**: Hides header/footer sections for clean iframe display
- **Effect**:
  - Removes welcome section
  - Removes "What Happens Next" section
  - Removes confirmation/trust section
  - Reduces padding for compact display
- **Keeps**: The actual form fields and submission logic

### `?test=true`
- **Purpose**: Marks test submissions with `[TEST]` prefix in email subject
- **Effect**:
  - Adds yellow banner at top: "🧪 TEST MODE"
  - Email subject becomes: `[TEST] Appraisal Request - John Smith`
  - Currently both test and production go to `bc@crowestudio.com`
  - After domain verification, can route differently

## Usage Examples

### Normal Production Form
```
https://valta.ca/request-appraisal/intake
```
Shows full page with header, footer, all sections.

### Embedded in Dashboard (Production)
```
https://valta.ca/request-appraisal/intake?embedded=true
```
Form only, no chrome. Submissions are real, no test prefix.

### Embedded in Dashboard (Testing)
```
https://valta.ca/request-appraisal/intake?embedded=true&test=true
```
Form only with test banner. Email gets `[TEST]` prefix.

## Implementation in APR Dashboard

**Replace the existing SubmissionForm component with:**

```tsx
// In APR Dashboard: src/components/SubmissionForm.tsx or wherever testing form lives

export default function AppraisalTestingForm() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://valta.ca/request-appraisal/intake?embedded=true&test=true"
        className="w-full h-full border-0"
        title="Appraisal Request Form"
      />
    </div>
  )
}
```

**Or with toggle for test mode:**

```tsx
import { useState } from 'react'

export default function AppraisalTestingForm() {
  const [isTestMode, setIsTestMode] = useState(true)

  const formUrl = `https://valta.ca/request-appraisal/intake?embedded=true${isTestMode ? '&test=true' : ''}`

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Toggle control */}
      <div className="p-4 bg-gray-100 border-b flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isTestMode}
            onChange={(e) => setIsTestMode(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm font-medium">
            Test Mode {isTestMode && '(emails marked with [TEST])'}
          </span>
        </label>
      </div>

      {/* Embedded form */}
      <div className="flex-1">
        <iframe
          src={formUrl}
          className="w-full h-full border-0"
          title="Appraisal Request Form"
        />
      </div>
    </div>
  )
}
```

## Benefits

✅ **Single Source of Truth**: Testing form IS the production form
✅ **No Code Drift**: Any changes to production form immediately appear in testing
✅ **Same Database**: Submissions go to same `job_submissions` table
✅ **Same Validation**: Identical validation rules (including required property address)
✅ **Same Email System**: Uses same edge function with test mode flag
✅ **Easy Testing**: Toggle test mode on/off without changing form code

## Database Behavior

**All submissions (test and production) save to:**
- Database: `job_submissions` table in Supabase
- Email: Sent via `send-appraisal-request` edge function
- Files: Uploaded to `job-files` storage bucket
- Reference: `job_files` table tracks file metadata

**Test mode only affects:**
- Email subject line (adds `[TEST]` prefix)
- Yellow banner visibility on form
- Future: Could route to different recipient when domain verified

## Email Recipients (Current State)

**Both test and production currently send to:**
- `bc@crowestudio.com`

**After valta.ca domain verification in Resend:**
- Production: `clientcare@valta.ca`
- Test: `bc@crowestudio.com` OR custom test email

**To update recipients:** Edit `supabase/functions/send-appraisal-request/index.ts` line 335:

```typescript
// Current (testing with Ben's email):
const recipient = isTestMode ? 'bc@crowestudio.com' : 'bc@crowestudio.com';

// After domain verification:
const recipient = isTestMode ? 'bc@crowestudio.com' : 'clientcare@valta.ca';
```

## Iframe Considerations

### Height Management
The form has variable height based on content. Options:

**1. Full viewport height (recommended):**
```tsx
<iframe src="..." className="w-full h-screen border-0" />
```

**2. Fixed height:**
```tsx
<iframe src="..." className="w-full h-[800px] border-0" />
```

**3. Scrollable container:**
```tsx
<div className="w-full h-[600px] overflow-auto">
  <iframe src="..." className="w-full min-h-full border-0" />
</div>
```

### Cross-Origin Considerations

Since both sites share same Supabase instance:
- ✅ Form submissions work normally
- ✅ File uploads work normally
- ✅ Email notifications work normally
- ⚠️ Can't detect form submission from parent (cross-origin)
- ⚠️ Can't auto-refresh dashboard on submit (different origins)

**Workaround for dashboard refresh:**
Use Supabase Realtime to listen for new `job_submissions` instead of postMessage.

## Testing Checklist

Before deployment, test these scenarios:

### Normal Mode (`?embedded=true`)
- [ ] Form displays without header/footer
- [ ] All fields are present and functional
- [ ] Validation works (especially property address required)
- [ ] File uploads work
- [ ] Submission saves to database
- [ ] Email sent WITHOUT `[TEST]` prefix
- [ ] Dashboard link in email works

### Test Mode (`?embedded=true&test=true`)
- [ ] Yellow test banner appears
- [ ] Form still works normally
- [ ] Email sent WITH `[TEST]` prefix
- [ ] Everything else same as normal mode

### Dashboard Integration
- [ ] Iframe loads without errors
- [ ] Form is fully visible (no cut-off)
- [ ] Form is scrollable if needed
- [ ] Toggle switches between modes
- [ ] Submissions appear in dashboard job list

## Migration Path

**Current State:**
- APR Dashboard has separate SubmissionForm component
- Valta Website has appraisal request form
- Both save to same database but different codebases

**After Implementation:**
1. Replace APR Dashboard testing form with iframe
2. Test all functionality works
3. Remove old SubmissionForm component
4. Update any references to testing form

**Benefits Realized:**
- One less form to maintain
- Testing always uses production code
- No validation drift between forms
- Simpler codebase

## Support

For issues or questions:
- **Documentation**: `VALTA-WORKFLOW-DOCUMENTATION.md`
- **Email System**: `CURSOR-CONTEXT-SUMMARY.md`
- **Ben**: bc@crowestudio.com

---

**Created:** October 16, 2025
**Session:** Email notification system implementation + iframe embedding
