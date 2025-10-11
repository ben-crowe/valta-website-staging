# Valta Website - Testing Quick Start

## 🎯 Quick Reference

**Production URL**: https://valta.ca
**Local Dev**: http://localhost:3002
**Backend**: Supabase (ngovnamnjmexdpjtcnky)
**Deployment**: Vercel (auto-deploy from main branch)

## 🚀 Quick Test Commands

```bash
# Start local dev server
npm run dev

# Test contact form
node .testing/manual-tests/test-dropdown.js

# Verify no breadcrumbs
node .testing/manual-tests/verify-no-breadcrumbs.js

# Deploy to staging
./scripts/deploy-staging.sh
```

## 🧪 Two-Agent Testing Workflow

This project uses the two-agent testing protocol from:
`/Users/bencrowe/Development/_Testing-w-Playwright/MASTER-TESTING-PROTOCOL.md`

**Agent 1 (Implementation):**
- Makes changes
- Deploys to production
- Waits for test results

**Agent 2 (Testing):**
- Tests production (NEVER localhost!)
- Uses Playwright MCP tools
- Reports structured results

## 📋 Key Test Areas

1. **Contact Form** (/contact)
   - Form submission
   - Email notifications to bc@crowestudio.com
   - Database persistence in Supabase
   - Success message display

2. **Appraisal Form** (/request-appraisal)
   - Status: Planning phase - not yet implemented

3. **Page Navigation**
   - All service pages load
   - Footer navigation works
   - Mobile responsive menu

4. **Performance**
   - Image lazy loading
   - Fast page loads
   - No console errors

## 🔧 Manual Testing Tools

Located in `.testing/manual-tests/`:
- `test-dropdown.html` - Dropdown component testing
- `test-dropdown.js` - Dropdown functionality tests
- `verify-no-breadcrumbs.js` - Breadcrumb verification

## 📸 Screenshot Organization

Save testing screenshots to `.testing/screenshots/` with naming:
- `[session-number]-[feature]-[status].png`
- Example: `01-contact-form-success.png`

## 🚨 Critical Testing Rules

1. **ALWAYS test production** (https://valta.ca)
2. **NEVER test localhost** (deployment may differ)
3. **Wait for Vercel deployment** (~2-3 minutes after push)
4. **Check backend state** (Supabase tables, not just UI)
5. **Take screenshots of failures**

## 📚 Full Protocol

For complete testing protocol, see:
- Master protocol: `/Users/bencrowe/Development/_Testing-w-Playwright/MASTER-TESTING-PROTOCOL.md`
- Project-specific: `.testing/test-protocol.md`

---

**Last Updated**: October 11, 2025
