# Valta Website - Deployment Guide

**Last Updated**: October 11, 2025
**Status**: ✅ Verified and Working

---

## 🚀 Quick Deploy (Use This)

```bash
git add .
git commit -m "Your change description"
git push origin main
```

**Wait 2-3 minutes, then check:** https://valta.ca

**That's it.**

---

## 📋 What's Connected

```
Local Directory:    /Users/bencrowe/Development/Valta-Website/
GitHub Repository:  ben-crowe/valta-website-staging
Vercel Project:     valta-live-repo
Production URL:     https://valta.ca
```

---

## ✅ Verified Configuration

**GitHub Remote:**
```bash
origin → https://github.com/ben-crowe/valta-website-staging.git
```
*Note: "production" remote was removed (October 11, 2025) - it was unused and causing confusion.*

**Vercel Connection:**
- Project Name: `valta-live-repo`
- Project ID: `prj_7DUiwOm9hNXzOYwwYFSCVvJwigmk`
- Watches: `ben-crowe/valta-website-staging` (origin)
- Branch: `main`
- Auto-deploy: ✅ Enabled

**Production Domain:**
- https://valta.ca

---

## 🔄 Deployment Workflow

### **Standard Deployment**

```bash
# 1. Make your changes

# 2. Test locally (optional)
npm run dev
# Visit: http://localhost:3002

# 3. Build to check for errors (optional)
npm run build

# 4. Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# 5. Vercel auto-deploys (~2-3 minutes)

# 6. Verify production
# Visit: https://valta.ca
```

### **Check Deployment Status**

**Option 1: Vercel Dashboard**
- Visit: https://vercel.com/dashboard
- Find: `valta-live-repo`
- Check: Latest deployment status (should show "Ready")

**Option 2: Command Line**
```bash
# Check what's on GitHub
git log origin/main -1 --oneline

# Should match your latest local commit
git log -1 --oneline
```

---

## 🚨 If Something Goes Wrong

### **Issue: Push Failed**
```bash
# Pull latest changes first
git pull origin main

# Then try pushing again
git push origin main
```

### **Issue: Build Failed on Vercel**
1. Check Vercel Dashboard → Deployments → Build Logs
2. Look for error messages
3. Fix errors locally
4. Build locally to verify: `npm run build`
5. Push fix: `git push origin main`

### **Issue: Changes Not Visible**
1. Hard refresh browser: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)
2. Try incognito/private window
3. Wait 30 seconds for CDN propagation
4. Check Vercel Dashboard - verify deployment is "Ready"

### **Issue: Site Is Down**
1. Check Vercel Dashboard for errors
2. Check https://status.vercel.com
3. Check recent commits: `git log -3 --oneline`
4. Rollback if needed (see below)

---

## 🔄 Rollback to Previous Version

**Via Vercel Dashboard (Easiest):**
1. Go to: https://vercel.com/dashboard
2. Find: `valta-live-repo`
3. Click: "Deployments" tab
4. Find: Last working deployment
5. Click: "..." → "Promote to Production"

**Via Git (If Needed):**
```bash
# Find the good commit
git log --oneline

# Revert to it
git reset --hard <commit-sha>

# Force push (use with caution!)
git push origin main --force
```

---

## ⚙️ Environment Variables

**Required in Vercel:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

**To check/update:**
1. Vercel Dashboard → valta-live-repo
2. Settings → Environment Variables

**Local:**
- Stored in `.env.local` (never commit this file!)

---

## 📊 Deployment History

### October 11, 2025 - Configuration Verified
- ✅ Confirmed Vercel watches `valta-website-staging`
- ✅ Removed unused "production" remote
- ✅ Verified auto-deploy working
- ✅ Created comprehensive deployment docs

### September 2025 - Project Setup
- ✅ Contact form implementation
- ✅ Supabase integration
- ✅ Production deployment to valta.ca

---

## 🔐 Security Notes

**Never Commit:**
- `.env.local` (contains secrets)
- `node_modules/` (dependencies)
- `.next/` (build artifacts)
- `.vercel/` (Vercel config)

**Safe to Commit:**
- Source code (`app/`, `components/`, `lib/`)
- Public assets (`public/`)
- Configuration files (`package.json`, `tsconfig.json`)
- Documentation (`docs/`, `PROJECT-NOTES/`)

---

## 📞 Need Help?

**Check these first:**
- Full deployment guide: `docs/DEPLOYMENT-VERIFIED.md`
- Troubleshooting: `docs/troubleshooting.md`
- Agent context: `.agent/deployment-context.md`

**Still stuck?**
- Email: bc@crowestudio.com
- Check Vercel status: https://status.vercel.com
- Review build logs in Vercel Dashboard

---

## ✅ Pre-Deployment Checklist

Before every deploy:
- [ ] Changes tested locally (if needed)
- [ ] No console errors in browser
- [ ] Build passes: `npm run build`
- [ ] Commit message is clear
- [ ] Know what changed (review `git diff`)

After every deploy:
- [ ] Vercel shows "Ready" status
- [ ] Production site loads: https://valta.ca
- [ ] Critical features work (especially contact form)
- [ ] No console errors in production

---

## 🎯 Quick Commands Reference

```bash
# Deploy
git push origin main

# Check status
git status
git log -3 --oneline

# Test locally
npm run dev

# Build check
npm run build

# View remote
git remote -v
```

---

**Remember:** Push to `origin main` (not "production" - that was removed!)

**Production URL:** https://valta.ca
**Vercel Dashboard:** https://vercel.com/dashboard
**GitHub Repo:** https://github.com/ben-crowe/valta-website-staging

---

© 2025 Valta Property Valuations - Deployment Guide
