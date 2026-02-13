# Change Requests - Valta Website

## Standard Operating Procedure (SOP)

### Workflow Overview

This is the proven workflow for implementing and verifying website changes. Follow this process to ensure all edits are properly deployed and confirmed live.

---

## 📋 Implementation Workflow

### 1. **Receive Change Request**
- Client provides marked-up document (Google Doc, Word, etc.)
- Create a dated checklist file: `YY-MM-DD-Edit-Review.md`
- Extract ALL changes into organized checklist by page

**Template:**
```markdown
## [PAGE NAME] (URL)

### [Section Name]:
- ☐ Change #X: "old text" → "new text"
```

---

### 2. **Implement Changes (Marcel + Terminal)**

**CRITICAL: Check Shared Components First**
- ✅ `components/site-header.tsx` - Navigation menu (appears on ALL pages)
- ✅ `components/site-footer.tsx` - Footer links (appears on ALL pages)
- ✅ Page-specific content files (app/**/page.tsx)

**Common Gotcha:**
> Changes to shared components affect EVERY page. If you update page content but miss the header/footer, the old text will still appear site-wide.

**Implementation Steps:**
1. Use `Grep` to find all instances of text to change
2. Use `Read` to view files
3. Use `Edit` to make precise changes
4. Run lint/typecheck before committing

---

### 3. **Deploy via Vercel CLI (PREFERRED METHOD)**

**Why CLI > Webhook:**
- ✅ Real-time confirmation of deployment success
- ✅ Bypasses webhook queue delays
- ✅ Exit code 0 = guaranteed live
- ✅ Faster (2-3 minutes vs 5+ minutes)

**Deployment Commands:**
```bash
git add -A
git commit -m "fix: Description of changes"
git push origin main
npx vercel deploy --prod
```

**Wait for:**
- "Building..." → "Completing" → Exit code: 0
- This confirms deployment succeeded

---

### 4. **Verification via Playwright (MOST RELIABLE)**

**Why Playwright > Claude Desktop Web Scraping:**
- ✅ Fresh browser session (no cache)
- ✅ Real DOM inspection (not web scraping)
- ✅ Can click elements and test interactions
- ✅ Can take screenshots for evidence
- ✅ Programmatic verification (no human error)

**Verification Steps:**

```bash
# Navigate to page
mcp__playwright__browser_navigate({ url: "https://valta.ca" })

# Take snapshot (shows all text/elements)
mcp__playwright__browser_snapshot()

# Click dropdown to verify menu
mcp__playwright__browser_click({ element: "Services button", ref: "eXX" })

# Take screenshot for evidence
mcp__playwright__browser_take_screenshot({ filename: "verification.png" })
```

**What to Check:**
- ✅ Main page content (check 3-5 key changes per page)
- ✅ Navigation dropdown menu text
- ✅ Footer links text
- ✅ Footer company details section

**Pro Tip:** Take screenshots of BEFORE and AFTER for client evidence.

---

### 5. **Client Review & Handoff**

**Create Final Checklist:**
- All items marked ☑ ✅
- Deployment info (date, commit hash)
- Status: "✅ LIVE at https://valta.ca"

**For Client Cache Issues:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Test in incognito/private window
- Clear browser cache for valta.ca

---

## ⚠️ Common Issues & Solutions

### Issue: "Changes marked complete but not live"

**Root Cause:** Shared components (header/footer) weren't updated

**Solution:**
1. Search both page files AND component files:
   ```bash
   Grep({ pattern: "old text", output_mode: "files_with_matches" })
   ```
2. Check these files:
   - `components/site-header.tsx`
   - `components/site-footer.tsx`
   - All `app/**/page.tsx` files

### Issue: "Deployment succeeded but changes don't show"

**Root Cause:** Browser cache

**Solution:**
- Hard refresh (Ctrl+Shift+R)
- Verify in incognito window
- Use Playwright (guaranteed fresh browser)

### Issue: "Vercel webhook slow or stuck"

**Root Cause:** Webhook queue delays

**Solution:**
- Use Vercel CLI: `npx vercel deploy --prod`
- Bypasses webhook entirely
- Get real-time confirmation

---

## 📁 File Organization

```
Change Requests/
├── README.md (this file - SOP)
├── YY-MM-DD-Edit-Review.md (dated checklists)
├── YY-MM-DD-Session.md (implementation notes)
└── Master Site Copy-YY-MM-DD.md (client source docs)
```

---

## 🎯 Verification Checklist Template

Use this for every change request:

```markdown
# Website Change Request - Verification Checklist

**Date of Request:** [DATE]
**Date Completed:** [DATE]
**Site URL:** https://valta.ca
**Master Doc:** [LINK]

---

## Changes by Page

### HOME PAGE (https://valta.ca/)
- ☐ Change #1: Description
- ☐ Change #2: Description

### [NEXT PAGE]
- ☐ Change #X: Description

---

## Deployment Information

**Deployed:** [DATE]
**Method:** Vercel CLI (`npx vercel deploy --prod`)
**GitHub Commit:** [HASH]
**Status:** ✅ LIVE at https://valta.ca

---

## Verification Method

- ✅ Playwright browser testing (fresh session, no cache)
- ✅ Screenshots captured for evidence
- ✅ Client confirmed via hard refresh

---

## Notes

[Any issues encountered, lessons learned, etc.]
```

---

## 📸 Evidence Collection

**For every change request, collect:**

1. **Screenshots:**
   - Dropdown menus (if changed)
   - Footer sections (if changed)
   - Key page content changes

2. **Deployment Evidence:**
   - Git commit hash
   - Vercel CLI exit code (0 = success)
   - Playwright verification snapshots

3. **Client Confirmation:**
   - Date verified
   - Method (hard refresh, incognito, etc.)

---

## Example: October 2025 Change Request

Below is the completed checklist from our October 15-20, 2025 change request workflow.

---

# Website Change Request - FINAL VERIFICATION CHECKLIST

## Task Information

**Master Doc:** https://docs.google.com/document/d/1i2xXxX913CGUTP2wugsPOn6mW7MaGRKRHpQdpc8o/edit?tab=t.0

**Date of Request:** October 15, 2025
**Date Completed:** October 23, 2025 (Additional fixes)
**Site URL:** https://valta.ca

---

## Changes by Page & Section

### HOME PAGE (https://valta.ca/)

**Our Appraisal Services Section:**
- ☑ 1. Third bullet - "Commercial Property" → "Commercial Properties" ✅
- ☑ 2. Third bullet sub-text - "retail spaces" → "retail buildings" ✅

**Why Choose Valta Section:**
- ☑ 3. Add image: Apartment New Development Calgary.jpg ✅

**What Makes Valta Different? Section:**
- ☑ 4. First paragraph - "interest rate increase" → "rate lock deadline" ✅
- ☑ 5. Second paragraph - "designated" → "certified" ✅

---

### ABOUT PAGE (https://valta.ca/about/)

**Finally, an Appraisal Firm Section:**
- ☑ 6. Third bullet - "interest rate increase pressures" → "rate lock pressures" ✅

**Here's What Actually Sets Us Apart Section:**
- ☑ 7. First paragraph - "CMHC fees are about to increase" → "Rate lock expires" ✅
- ☑ 8. Third paragraph - "fought the same battles" → "had to negotiate" ✅
- ☑ 9. End of section - Add or replace image with Apartment Lobby.jpg ✅

---

### SERVICES PAGE (https://valta.ca/services/)

**Page Header:**
- ☑ 10. Change dropdown texts (navigation/menu) ✅

**Self-Storage Section:**
- ☑ 11. Section heading - "Self-Storage Valuations" → "Self-Storage Appraisals" ✅
- ☑ 12. Button text - "Learn More About Self-Storage Valuations" → "Learn More About Self-Storage Appraisals" ✅

**Commercial Property Section:**
- ☑ 13. Section heading - "Commercial Property Appraisals" → "Commercial Appraisals" ✅
- ☑ 14. Button text - "Learn More About Commercial Property" → "Learn More About Commercial Appraisals" ✅

---

### MULTIFAMILY PAGE (https://valta.ca/services/multifamily/)

**Top of Page:**
- ☑ 15. Delete "View Sample Report" button/link ✅

**Valta's Deep Multifamily Market Knowledge Section:**
- ☑ 16. Second bullet - "project feasibility" → "land values and rental rates" ✅

---

### SELF-STORAGE PAGE (https://valta.ca/services/self-storage/)

**Page Header:**
- ☑ 17. Main heading - "Self-Storage Facility Appraisals" → "Self Storage Appraisals" ✅

**Ready to unlock section (bottom):**
- ☑ 18. Add period at end of sentence "square footage" - ensure "footage" stays on same line ✅
- ☑ 19. Phone number (587) 801-5151 - increase font size ✅

---

### COMMERCIAL PAGE (https://valta.ca/services/commercial/)

**Page Header:**
- ☑ 20. Main heading - "Commercial Property Appraisals" → "Commercial Appraisals" ✅

**Ready to discuss section (bottom):**
- ☑ 21. Move word "financing." up to fit on previous line ✅
- ☑ 22. Delete "Download Commercial Market Report" link/button ✅

---

### CAREERS PAGE (https://valta.ca/careers/)

**Entire Page:**
- ☑ 23. Replace all page content with new copy and application form ✅

---

### CONTACT PAGE (https://valta.ca/contact/)

**Company Details Section:**
- ☑ 24. Keep "Valta Property Valuations Ltd." - Remove bullets: "AACI Designated Professionals" and "Serving Western Canada" ✅

---

## Shared Components Fixed (Oct 23, 2025)

**Issue Found:** Footer and navigation components weren't updated in Oct 20 deployment

**Files Fixed:**
- ✅ `components/site-footer.tsx` (commit 83fd3db)
  - Changed "Self-Storage Valuations" → "Self-Storage Appraisals"
  - Removed "AACI Designated Professionals" and "Serving Western Canada"

- ✅ `components/site-header.tsx` (commit 122012c)
  - Changed navigation dropdown: "Self-Storage Valuations" → "Self-Storage Appraisals"
  - Changed navigation dropdown: "Commercial Property" → "Commercial Appraisals"
  - Fixed both desktop and mobile menus

---

## Deployment Information

**Initial Deployment:**
- Date: October 20, 2025
- Method: Vercel CLI (`vercel deploy --prod`)
- Commit: 8f96415
- Status: Page content ✅, Shared components ❌

**Final Deployment (Shared Components Fixed):**
- Date: October 23, 2025
- Method: Vercel CLI (`npx vercel deploy --prod`)
- Commits: 83fd3db (footer), 122012c (navigation)
- Status: ✅ ALL CHANGES LIVE at https://valta.ca

---

## Verification Method

- ✅ Playwright browser testing (no cache, fresh session)
- ✅ Screenshots captured for evidence
- ✅ Client confirmed via hard refresh + incognito window

---

## Lessons Learned

1. **Always check shared components** (header/footer) - they affect every page
2. **Playwright verification is more reliable** than web scraping or visual inspection
3. **Vercel CLI deployment** provides instant confirmation (exit code 0)
4. **Browser cache** can make changes appear not deployed - always hard refresh or use incognito
5. **Take screenshots** for client evidence and future reference

---

*Last Updated: October 23, 2025*
