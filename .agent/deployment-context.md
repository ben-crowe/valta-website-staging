# Valta Website - Deployment Context for Agents

**Last Updated**: October 11, 2025
**Status**: ✅ Verified and Current

---

## 🎯 Quick Reference

### **This Local Directory**
```
/Users/bencrowe/Development/Valta-Website/
```

### **GitHub Repositories**
- **Primary (origin)**: `ben-crowe/valta-website-staging`
- **Mirror (production)**: `ben-crowe/valta-site`
- Both stay synced to same commits

### **Vercel Project**
- **Name**: `valta-live-repo`
- **Project ID**: `prj_7DUiwOm9hNXzOYwwYFSCVvJwigmk`
- **Production URL**: https://valta.ca

### **Deployment Flow**
```
git push origin main → Vercel auto-deploys → https://valta.ca
```

---

## 🚨 Critical: What You MUST Know

### **NEVER Touch These Files**
```
.vercel/project.json     ← Vercel project configuration
.env.local               ← Credentials (never commit!)
```

### **ALWAYS Push to origin/main**
```bash
# Standard deployment
git push origin main

# Optional: Also push to production remote (backup)
git push production main
```

### **ALWAYS Test Production**
- Local: http://localhost:3002 (for development)
- Production: https://valta.ca (for verification)
- **Critical**: Test production after every deploy, not just local!

---

## 📋 Dual-Remote Setup Explained

This project has TWO GitHub remotes configured:

### **Remote: origin** (Primary)
- URL: `ben-crowe/valta-website-staging`
- Purpose: Main development repository
- Auto-deploys: ✅ Yes (via Vercel)
- Push here: ✅ Always

### **Remote: production** (Mirror/Backup)
- URL: `ben-crowe/valta-site`
- Purpose: Production mirror/backup
- Auto-deploys: ⚠️ Unknown (needs verification)
- Push here: ✅ Optional (for redundancy)

**Why two remotes?**
- Redundancy: Backup in case one repo has issues
- History: May have been migration from old repo
- Flexibility: Can deploy from either if needed

---

## 🔄 Standard Deployment Workflow

### **Step-by-Step**

```bash
# 1. Make changes
# 2. Test locally
npm run dev

# 3. Build to verify no errors
npm run build

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to primary remote
git push origin main

# 6. Optional: Push to backup remote
git push production main

# 7. Wait for Vercel (~2-3 minutes)

# 8. Verify on production
# Visit: https://valta.ca
```

### **Using Deployment Script**

```bash
# Quick deploy using script
./scripts/deploy-staging.sh

# Script handles:
# - Commit
# - Push to origin
# - Shows deployment status
```

---

## 📊 Vercel Project Details

### **Configuration**
Located in: `.vercel/project.json`

```json
{
  "projectId": "prj_7DUiwOm9hNXzOYwwYFSCVvJwigmk",
  "orgId": "team_wNn948n6ztMnT8LYqOLcjglm",
  "projectName": "valta-live-repo"
}
```

### **Important Notes**
- ⚠️ **Needs Verification**: Which GitHub repo is Vercel actually watching?
  - Could be: `valta-website-staging` (origin)
  - Could be: `valta-site` (production)
  - Check: Vercel Dashboard → Settings → Git

- ✅ **Project Name**: `valta-live-repo` (not "valta-website-staging" or "valta-site")

- ✅ **Auto-Deploy**: Should be enabled for main branch

---

## 🚧 Historical Context

### **Old Confusion (September 2025)**

There was confusion about deployment target. Old note said:
> "This deploys to valta-frontend-staging-2025 (WRONG!)"

**Update November 2025:** `valta-frontend-staging-2025` is ❌ **OBSOLETE** - Not connected to any repository, do not use.

### **Current Reality (November 2025)**

✅ **Verified**:
- Local directory: `/Users/bencrowe/Development/Valta-Website/`
- Vercel project: `valta-live-repo`
- Production URL: https://valta.ca
- GitHub origin: `valta-website-staging`

✅ **Everything is correct** - confusion was due to:
1. Multiple GitHub repos (dual remote setup)
2. Unclear project naming
3. Outdated documentation

---

## ⚠️ Common Deployment Issues

### **Issue: Pushed but no deployment**
**Check**:
1. Vercel Dashboard shows deployment triggered
2. Build logs show no errors
3. Correct branch (main) was pushed

### **Issue: Deployment succeeds but changes not visible**
**Solution**:
1. Hard refresh browser (Cmd+Shift+R)
2. Wait 30 seconds for CDN propagation
3. Try incognito window
4. Verify correct commit deployed

### **Issue: Build fails on Vercel**
**Check**:
1. Build passes locally: `npm run build`
2. All dependencies installed
3. Environment variables set in Vercel
4. No TypeScript errors

---

## 🎯 Deployment Best Practices

### **Before Every Deploy**
✅ Test locally at localhost:3002
✅ Run `npm run build` to check for errors
✅ Commit with clear, descriptive message
✅ Review what's being deployed (`git diff`)

### **After Every Deploy**
✅ Wait for Vercel "Ready" status (~2-3 minutes)
✅ Test production at https://valta.ca
✅ Verify contact form still works
✅ Check for console errors (F12)
✅ Test on mobile if changed responsive code

### **Daily/Weekly**
✅ Check Vercel Dashboard for any failed deployments
✅ Monitor Supabase for form submissions
✅ Review deployment frequency (don't overload)

---

## 🔐 Security & Access

### **What's Safe to Commit**
✅ Source code (app/, components/, lib/)
✅ Public assets (public/images/)
✅ Configuration files (package.json, tsconfig.json)
✅ Documentation (docs/, PROJECT-NOTES/)

### **NEVER Commit**
❌ `.env.local` (credentials)
❌ `.vercel/` (auto-generated, in .gitignore)
❌ `node_modules/` (dependencies)
❌ `.next/` (build artifacts)
❌ API keys or secrets

### **Environment Variables**
- Stored in: `.env.local` (local) and Vercel Dashboard (production)
- Required:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

---

## 📚 Related Documentation

- **Complete Deployment Guide**: `docs/DEPLOYMENT-VERIFIED.md`
- **Troubleshooting**: `docs/troubleshooting.md`
- **Architecture**: `docs/architecture.md`
- **Domain Configuration**: `docs/domain-switching.md`

---

## ✅ Quick Verification Commands

```bash
# Check which remotes configured
git remote -v

# Check current branch
git branch -vv

# Check what's deployed on origin
git log origin/main -1

# Check Vercel project configuration
cat .vercel/project.json

# Test production URL
curl -I https://valta.ca
```

---

## 🔄 Rollback Instructions

If you need to rollback a deployment:

### **Via Vercel Dashboard (Recommended)**
1. Go to: Vercel Dashboard → valta-live-repo
2. Click: "Deployments" tab
3. Find: Last working deployment
4. Click: "..." → "Promote to Production"

### **Via Git (Nuclear Option)**
```bash
# Find last working commit
git log --oneline

# Revert to that commit
git reset --hard <commit-sha>

# Force push (use with caution!)
git push origin main --force

# Vercel will auto-deploy the old version
```

---

## 📞 When to Ask for Help

Contact Ben if:
- Vercel shows errors you can't understand
- Production site is completely down (>5 minutes)
- You're uncertain about which remote to push to
- You need to change Vercel project settings
- Domain (valta.ca) is not resolving

---

**Deployment Context Version**: 2.0 (Updated & Verified)
**Previous Version**: Contained outdated confusion note
**Next Review**: After Ben confirms Vercel Dashboard settings

---

**Quick Summary for Agents:**
- Local: `/Users/bencrowe/Development/Valta-Website/`
- Push to: `origin main` (ben-crowe/valta-website-staging)
- Vercel project: `valta-live-repo`
- Production: https://valta.ca
- Wait: ~2-3 minutes for deployment
- Test: Production URL after every deploy
