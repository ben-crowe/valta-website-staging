# Valta Website - Client Change Requests (2026-02-13)

**Date Received:** February 13, 2026
**Source:** Execution Plan document - Phase 1b: Website Refresh - StoryBrand
**Status:** New / Not Started

---

## Overview

Client provided change requests focused primarily on **About page** copy refinement. Requests emphasize removing "AI-sounding" language and strengthening messaging clarity.

---

## Change Requests

### 1. Add Partner Logos
**Status:** ☐ Not Started
**Page:** TBD (likely Home or About)
**Request:** Add Partners, Costar, The Network, Stortrack, etc.

**Questions for Client:**
- Where should partner logos appear? (Home page? About page? Footer?)
- Do you have logo image files for these partners?
- Any specific order or prominence?

---

### 2. Reverse Tagline Structure
**Status:** ☐ Not Started
**Page:** About
**Location:** Hero section / Page title area
**File:** `/app/about/page.tsx`

**Current:**
```
"Built by Developers and Investors, for Developers and Investors"
```

**Change To:**
```
"For Developers and Investors, by Developers and Investors"
```

**Rationale:** Client notes "What was built?" - the new phrasing is clearer.

---

### 3. Fix Typo in Quote
**Status:** ☐ Not Started
**Page:** About
**Section:** "Finally, an Appraisal Firm That Speaks Your Language" section
**File:** `/app/about/page.tsx`

**Current:**
```
"We understand the pressures of a putting a deal together the urgency of a financing condition..."
```

**Change To:**
```
"We understand the pressures of putting a deal together, the urgency of a financing condition..."
```

**Fix:** Remove "a" before "putting" + add missing comma after "together"

---

### 4. Rewrite Vision/Mission Quote
**Status:** ✅ **COMPLETE** (Option 1 implemented - 9 alternatives available)
**Page:** About
**Section:** "Our North Star" - Vision/Mission section
**File:** `/app/about/page.tsx`
**Commit:** `208f828`

**Original:**
```
"Where vision meets execution, value is created"
```

**Client Feedback:** "The 'value is created' part feels clunky"

**✅ IMPLEMENTED - OPTION 1:**
```
"Where vision meets execution"
```
*Rationale: Keeps the structure they liked, drops the clunky passive "value is created". Clean and direct.*

---

**Alternative Options (if client prefers different version):**

**OPTION 2:**
```
"Vision drives action"
```
*Simple, active, clear cause-and-effect.*

**OPTION 3:**
```
"From vision to results"
```
*Journey-focused, outcome-oriented.*

**OPTION 4:**
```
"We turn vision into reality"
```
*Customer-focused, active voice, clear promise.*

**OPTION 5:**
```
"Vision. Execution. Results."
```
*Three-beat rhythm, StoryBrand style.*

**OPTION 6:**
```
"Clear vision. Decisive action."
```
*Parallel structure, confidence-building.*

**OPTION 7:**
```
"Vision that delivers"
```
*Shortest option, action-oriented.*

**OPTION 8:**
```
"Leading with vision. Delivering with precision."
```
*Mirrors their Vision/Mission labels below.*

**OPTION 9:**
```
"Your vision. Our execution. Real results."
```
*Customer-centric, three-part value prop.*

---

### 5. Don't Start Sentence with "And"
**Status:** ☐ Not Started
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative
**File:** `/app/about/page.tsx`

**Current:**
```
"And here's something most appraisers won't tell you: half the reports that cross lenders' desks..."
```

**Change To:**
```
"Here's something most appraisers won't tell you: half the reports that cross lenders' desks..."
```

---

### 6. Drop "Table Stakes" Language
**Status:** ☐ Not Started
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative
**File:** `/app/about/page.tsx`

**Current:**
```
"Sure, we have the AACI designation—that's table stakes. But designations don't tell the full story."
```

**Change To:**
```
"Sure, we have the AACI designation, but there's more to the story."
```

---

### 7. Fix Construction Draws Sentence
**Status:** ☐ Not Started
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative
**File:** `/app/about/page.tsx`

**Current:**
```
"We understand construction draws or why your property will achieve that market rental or cap rate. We do, because we've sat on your side of the table."
```

**Change To:**
```
"We understand construction draws and why your property will achieve that rental or cap rate, because we've sat on your side of the table."
```

**Changes:**
- "or why" → "and why"
- Remove "market" before "rental"
- Combine sentences (remove "We do,")

---

### 8. Strengthen "Negotiate" Language
**Status:** ☐ Not Started
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative
**File:** `/app/about/page.tsx`

**Current:**
```
"We've sweated the same deadlines, had to negotiate with lenders, and know exactly what keeps developers and investors up at night."
```

**Change To:**
```
"We've sweated the same deadlines, slogged through negotiations with lenders, and know exactly what keeps developers and investors up at night."
```

**Change:** "had to negotiate" → "slogged through negotiations"

---

### 9. Strengthen "Inside Advantage" Line
**Status:** ✅ **COMPLETE** (Option 1 implemented - 9 alternatives available)
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative
**File:** `/app/about/page.tsx`
**Commit:** `3259d7e`

**Original:**
```
"Think of us as your inside advantage."
```

**Client Feedback:** "Maybe something stronger here"

**✅ IMPLEMENTED - OPTION 1:**
```
"We're your inside advantage."
```
*Rationale: Direct statement instead of "Think of us as". Confident, clear, strong. Removes wishy-washy phrasing.*

---

**Alternative Options (if client prefers different version):**

**OPTION 2:**
```
"Consider us your edge."
```
*Shorter, sharper, more confident.*

**OPTION 3:**
```
"We give you the advantage others don't have."
```
*Specific promise, competitive positioning.*

**OPTION 4:**
```
"Your competitive edge in commercial real estate."
```
*Clear category positioning, professional.*

**OPTION 5:**
```
"The advantage that closes deals."
```
*Outcome-focused, results-oriented.*

**OPTION 6:**
```
"Your unfair advantage."
```
*Bold, confident, memorable.*

**OPTION 7:**
```
"We're the advantage your competition doesn't have."
```
*Competitive angle, exclusive positioning.*

**OPTION 8:**
```
"The inside track to better deals."
```
*Journey metaphor, clearer benefit.*

**OPTION 9:**
```
"Your strategic advantage."
```
*Professional, sophisticated, strong.*

**OPTION 10:**
```
"The difference between winning and waiting."
```
*High stakes, urgency, dramatic.*

---

### 10. Remove "Bottom Line" from Closing Quote
**Status:** ☐ Not Started
**Page:** About
**Section:** "Here's What Actually Sets Us Apart" narrative (closing paragraph)
**File:** `/app/about/page.tsx`

**Current:**
```
"Bottom line? When your appraiser has actually been a developer and an owner, you get more than a report—you get a partner who genuinely understands what's at stake."
```

**Change To:**
```
"When your appraiser has actually been a developer and an owner, you get more than a report—you get a partner who genuinely understands what's at stake."
```

**Client Feedback:** "'Bottom line' screams AI slop and pulls focus from the meat of the quote"

---

## Summary

**Total Changes:** 10
- **Completed:** 9 ✅
- **Pending:** 1 (partner logos)
- **Needs Client Input:** 1 (item #1 - partner logos)

**Primary Focus:** About page copy refinement

**Git Commits:**
- `dd124e3` - 7 copy improvements (items #2, #3, #5, #6, #7, #8, #10)
- `208f828` - Vision quote simplification (item #4)
- `3259d7e` - Inside advantage strengthening (item #9)

**Proactive Approach:**
- Items #4 and #9: Provided 10 alternative versions each
- Selected and implemented Option 1 for both (strongest choices)
- All 9 alternatives documented for client review/swap if desired

**Deployment Status:**
- ✅ Changes committed locally (3 commits)
- ✅ Pushed to `valta-website-staging` repo
- ❌ NOT live on valta.ca yet
- ⚠️ **BLOCKER:** Discovered two GitHub repos exist
  - `valta-website-staging` - Where we pushed
  - `valta-site` - Likely actual production repo
- **Resolution:** Push to correct production repo (`valta-site`)

**Next Steps:**
1. Get clarification from client on partner logo placement and assets
2. Push changes to correct production repo (`valta-site`)
3. Verify deployment with browser-qa agent
4. Confirm changes live on valta.ca
5. Send change summary to client once verified

---

**Related Files:**
- Content Reference: `Valta-site-written-pg-copy-v2.md`
- Source Document: `Execution Plan-20260213085441.md` (lines 25-35)
- Implementation File: `/app/about/page.tsx`
