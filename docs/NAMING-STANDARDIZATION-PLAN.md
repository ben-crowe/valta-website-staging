# Valta Website - Naming Standardization Plan

**Created**: October 11, 2025
**Status**: 📋 Planning - Not Yet Implemented
**Priority**: High (reduces confusion for all parties)

---

## 🎯 The Problem

**Current naming is inconsistent and confusing:**

```
Vercel Project:     "valta-live-repo"
GitHub (origin):    "valta-website-staging"
GitHub (production): "valta-site"
Production URL:     valta.ca
```

**Nobody knows what anything means!**
- Is "staging" actually staging or production?
- What's "live-repo" vs "valta-site"?
- Why do we have three different names?

---

## ✅ The Solution

**Standardize everything to:**

```
Proposed Name: "Valta-Live-Website"
```

**Applied consistently:**
```
Vercel Project:     Valta-Live-Website
GitHub (origin):    valta-live-website
GitHub (production): valta-live-website-backup (or remove if not needed)
Production URL:     valta.ca (unchanged)
```

---

## 📋 What Needs to Change

### **1. Vercel Project Name**
```
Current: valta-live-repo
Target:  Valta-Live-Website (or valta-live-website)
```

### **2. GitHub Repository (origin)**
```
Current: ben-crowe/valta-website-staging
Target:  ben-crowe/valta-live-website
```

### **3. GitHub Repository (production mirror)**
```
Current: ben-crowe/valta-site
Options:
  A) Rename to: ben-crowe/valta-live-website-backup
  B) Remove entirely (if not needed)
  C) Keep as-is but document clearly
```

### **4. Local Git Remotes**
```
Current:
  origin → valta-website-staging
  production → valta-site

After rename:
  origin → valta-live-website
  production → valta-live-website-backup (or remove)
```

---

## 🔧 How Difficult Is This?

### **GitHub Repository Rename: ⭐⭐☆☆☆ (Easy)**

**Difficulty**: Easy - GitHub supports renaming
**Time**: 5 minutes
**Risk**: Low

**What happens:**
- ✅ GitHub automatically redirects old URLs to new name
- ✅ Old bookmarks continue working
- ✅ Existing clones need remote URL update
- ✅ GitHub Pages/Webhooks automatically update
- ⚠️ Vercel connection may need re-linking (verify)

**Steps:**
1. Go to GitHub repo → Settings
2. Rename repository to new name
3. Update local remote URLs

**Breaks:**
- ❌ Nothing immediately (GitHub redirects)
- ⚠️ Should update local git remotes
- ⚠️ Any hardcoded URLs elsewhere

---

### **Vercel Project Rename: ⭐⭐⭐☆☆ (Medium)**

**Difficulty**: Medium - Vercel supports renaming but verify connections
**Time**: 10 minutes + verification
**Risk**: Medium (test thoroughly)

**What happens:**
- ✅ Project name changes in dashboard
- ✅ Deployment URLs might change (preview URLs)
- ✅ Production domain (valta.ca) unaffected
- ⚠️ GitHub webhook may need verification
- ⚠️ Environment variables preserved (should be)

**Steps:**
1. Go to Vercel Dashboard → Project Settings
2. Change project name
3. Verify GitHub connection still works
4. Test deployment

**Breaks:**
- ✅ Production domain: NO (valta.ca unaffected)
- ⚠️ Preview URLs: YES (new format)
- ⚠️ API integrations: Maybe (if using project name)
- ⚠️ `.vercel/project.json`: YES (will update)

---

### **Local Git Remotes Update: ⭐☆☆☆☆ (Very Easy)**

**Difficulty**: Very easy - Simple git command
**Time**: 2 minutes
**Risk**: None

**Steps:**
```bash
# Update origin remote
git remote set-url origin https://github.com/ben-crowe/valta-live-website.git

# Update production remote (if keeping)
git remote set-url production https://github.com/ben-crowe/valta-live-website-backup.git

# Verify
git remote -v
```

---

## 📝 Recommended Approach

### **Option A: Conservative (Safest)**

**Order of operations:**
1. **Rename GitHub repo first** (origin: valta-website-staging → valta-live-website)
   - GitHub auto-redirects, minimal risk
   - Update local git remote URLs
2. **Verify Vercel still deploys correctly**
   - Wait for next auto-deploy
   - Confirm connection works
3. **Then rename Vercel project** (valta-live-repo → Valta-Live-Website)
   - Less critical, can be done separately
4. **Decide on production remote** (valta-site)
   - Rename to valta-live-website-backup, OR
   - Remove if not needed

**Timeline**: Can be done in one session (~30 minutes)

---

### **Option B: Aggressive (Fastest)**

**All at once:**
1. Rename both GitHub repos simultaneously
2. Rename Vercel project
3. Update local remotes
4. Deploy and verify

**Timeline**: ~20 minutes but higher risk

---

### **Option C: Minimal (Keep Production Remote As-Is)**

**Just standardize the main stuff:**
1. Rename origin: valta-website-staging → valta-live-website
2. Rename Vercel: valta-live-repo → Valta-Live-Website
3. Keep production remote (valta-site) but document it clearly

**Why**: If the production remote serves a specific purpose, don't mess with it

---

## ⚠️ Risks & Mitigation

### **Risk 1: Vercel Connection Breaks**
**Likelihood**: Low (GitHub redirects should handle it)
**Impact**: High (no auto-deployments)
**Mitigation**:
- Do during low-traffic time
- Have Vercel Dashboard open to manually reconnect if needed
- Test with a commit immediately after rename

### **Risk 2: Local Development Confusion**
**Likelihood**: Medium (other developers or agents need to update)
**Impact**: Low (easy fix)
**Mitigation**:
- Document the change clearly
- Update all documentation with new names
- Add note to README about remote URL update

### **Risk 3: External Services Pointing to Old Repo**
**Likelihood**: Low (GitHub redirects)
**Impact**: Low to Medium (depends on service)
**Mitigation**:
- Check for any external integrations
- Update any hardcoded URLs
- GitHub redirects buy time to update

### **Risk 4: Vercel `.vercel/project.json` Gets Confused**
**Likelihood**: Low
**Impact**: Medium (would need to re-link)
**Mitigation**:
- Backup `.vercel/project.json` before rename
- If breaks, use `vercel link` to reconnect
- Keep old config for reference

---

## 📋 Pre-Rename Checklist

Before starting the rename:

- [ ] Ensure no deployments in progress
- [ ] Backup current configurations
  - [ ] Copy `.vercel/project.json`
  - [ ] Note current git remote URLs
  - [ ] Screenshot Vercel project settings
- [ ] Verify current setup is working
  - [ ] Test deployment works
  - [ ] Verify production site loads (valta.ca)
  - [ ] Check environment variables in Vercel
- [ ] Notify any other developers/agents
- [ ] Do during low-traffic time
- [ ] Have rollback plan ready

---

## 📝 Step-by-Step Rename Guide

### **Phase 1: Rename GitHub Repository (Origin)**

**Time**: 5 minutes

1. **Backup current configuration**
   ```bash
   # Note current remotes
   git remote -v > ~/Desktop/valta-git-remotes-backup.txt

   # Note current Vercel config
   cat .vercel/project.json > ~/Desktop/valta-vercel-backup.json
   ```

2. **Go to GitHub**
   - Navigate to: https://github.com/ben-crowe/valta-website-staging
   - Click: Settings
   - Scroll to: "Repository name"
   - Change to: `valta-live-website`
   - Click: Rename
   - ✅ GitHub will show: "Redirects are in place"

3. **Update local git remote**
   ```bash
   cd /Users/bencrowe/Development/Valta-Website

   # Update remote URL
   git remote set-url origin https://github.com/ben-crowe/valta-live-website.git

   # Verify
   git remote -v
   # Should show: origin https://github.com/ben-crowe/valta-live-website.git

   # Test connection
   git fetch origin
   ```

4. **Test deployment**
   ```bash
   # Make a small change (add comment to README)
   echo "# Testing rename" >> README.md
   git add README.md
   git commit -m "Test: Verify deployment after GitHub repo rename"
   git push origin main

   # Wait 2-3 minutes
   # Check Vercel Dashboard for deployment
   # Verify https://valta.ca loads
   ```

**✅ Success criteria:**
- Push works without errors
- Vercel shows new deployment
- Production site works (valta.ca)

---

### **Phase 2: Rename Vercel Project**

**Time**: 10 minutes

**Prerequisites**: Phase 1 completed successfully

1. **Go to Vercel Dashboard**
   - Navigate to: https://vercel.com/dashboard
   - Find: `valta-live-repo` project
   - Click: Settings

2. **Rename project**
   - Find: "Project Name" setting
   - Change to: `Valta-Live-Website` (or `valta-live-website`)
   - Save

3. **Verify GitHub connection**
   - Still in Settings
   - Go to: Git → Connected Git Repository
   - Should show: `ben-crowe/valta-live-website`
   - If not, reconnect:
     - Disconnect old connection
     - Reconnect to new repo name
     - Select `main` branch

4. **Verify environment variables preserved**
   - Go to: Settings → Environment Variables
   - Confirm all vars present:
     - NEXT_PUBLIC_SUPABASE_URL
     - NEXT_PUBLIC_SUPABASE_ANON_KEY
     - SUPABASE_SERVICE_ROLE_KEY

5. **Test deployment again**
   ```bash
   # Make another small change
   echo "# Testing Vercel rename" >> README.md
   git add README.md
   git commit -m "Test: Verify deployment after Vercel project rename"
   git push origin main

   # Check deployment in Vercel
   # Verify valta.ca works
   ```

6. **Verify local Vercel config updated**
   ```bash
   cat .vercel/project.json
   # Should show new projectName: "Valta-Live-Website" or "valta-live-website"
   ```

**✅ Success criteria:**
- Vercel project renamed
- GitHub connection intact
- Environment variables preserved
- Deployment works
- Production site works (valta.ca)

---

### **Phase 3: Handle Production Remote (Optional)**

**Options:**

#### **Option A: Rename It**
```bash
# Rename GitHub repo (same as Phase 1)
# Then update local remote
git remote set-url production https://github.com/ben-crowe/valta-live-website-backup.git
```

#### **Option B: Remove It**
```bash
# If not needed, remove it
git remote remove production

# Verify
git remote -v
# Should only show 'origin' now
```

#### **Option C: Keep As-Is but Document**
```bash
# Do nothing, just document in deployment docs
# "production remote (valta-site) is legacy backup"
```

**Recommendation**: Discuss with Ben which option makes sense

---

### **Phase 4: Update All Documentation**

**Files to update:**

1. **README.md**
   - Update project name references
   - Update GitHub repo URLs
   - Update Vercel project name

2. **docs/DEPLOYMENT-VERIFIED.md**
   - Update all repo names
   - Update Vercel project name
   - Add note about rename date

3. **.agent/deployment-context.md**
   - Update GitHub remote URLs
   - Update Vercel project name
   - Remove old naming confusion notes

4. **.agent/context.md**
   - Update GitHub references
   - Update Vercel references

5. **PROJECT-NOTES/README.md**
   - Update GitHub URL if mentioned

**Search and replace:**
```bash
# Find all references to old names
grep -r "valta-website-staging" . --exclude-dir=node_modules --exclude-dir=.next
grep -r "valta-live-repo" . --exclude-dir=node_modules --exclude-dir=.next
grep -r "valta-site" . --exclude-dir=node_modules --exclude-dir=.next
```

---

## 📊 Post-Rename Verification

After all phases complete:

- [ ] **Git remotes updated**
  ```bash
  git remote -v
  # Should show new repo names
  ```

- [ ] **Vercel project renamed**
  ```bash
  # Check Vercel Dashboard
  # Should show: Valta-Live-Website
  ```

- [ ] **Deployment works**
  ```bash
  # Push a test commit
  # Verify auto-deploy triggers
  # Check production: https://valta.ca
  ```

- [ ] **Environment variables intact**
  ```bash
  # Check Vercel Dashboard → Settings → Environment Variables
  # All should be present
  ```

- [ ] **Documentation updated**
  ```bash
  # All files reference new names
  # No references to old names (except historical notes)
  ```

- [ ] **Contact form works**
  ```bash
  # Test form submission
  # Verify email arrives
  # Check Supabase database
  ```

---

## 🔄 Rollback Plan

If something breaks:

### **Rollback GitHub Rename**
```bash
# Go to GitHub → Settings → Rename back
# Or use old URL (redirect still works)
```

### **Rollback Vercel Rename**
```bash
# Go to Vercel → Settings → Rename back
# Or reconnect to old repo name
```

### **Rollback Local Remotes**
```bash
# Use backup file
cat ~/Desktop/valta-git-remotes-backup.txt
# Manually set-url back to old values
```

---

## 💡 Additional Considerations

### **Should We Keep Two GitHub Remotes?**

**Current setup**: origin + production (two repos)

**Questions:**
1. Why do we have two repos?
   - Backup/redundancy?
   - Historical reasons?
   - Serving different purposes?

2. Are they both needed?
   - If yes: Rename both to match
   - If no: Remove one, simplify

**Recommendation**: Discuss with Ben:
- If both needed → Rename both
- If only origin needed → Remove production remote
- If unsure → Keep both but rename clearly

---

## 📝 Documentation Standards After Rename

**Always use the full name consistently:**

```
✅ GOOD:
- GitHub: ben-crowe/valta-live-website
- Vercel: Valta-Live-Website
- Production: https://valta.ca

❌ BAD:
- "staging repo"
- "the live one"
- "valta site"
```

**In conversation:**
- "the Valta Live Website repo"
- "the Valta Live Website Vercel project"
- "production" (only when referring to valta.ca)

---

## ✅ Summary

**Is it difficult?**: No, but requires care
**How long?**: 30-45 minutes total
**Risk level**: Low to Medium (with proper testing)
**Worth it?**: **YES** - clarity is valuable

**Recommended order:**
1. Rename GitHub repo (origin)
2. Update local git remote
3. Test deployment
4. Rename Vercel project
5. Test deployment again
6. Decide on production remote
7. Update all documentation
8. Verify everything works

**Benefits:**
- ✅ No more confusion
- ✅ Clear naming across platforms
- ✅ Easier onboarding
- ✅ Professional consistency

---

## 🎯 Next Steps

**For Ben:**
1. Review this plan
2. Decide on:
   - Exact name: "Valta-Live-Website" or "valta-live-website"?
   - Keep or remove production remote?
   - Timing: When to do the rename?
3. Approve the plan
4. We execute together

**For Agent:**
1. Wait for Ben's approval
2. Follow the step-by-step guide
3. Test thoroughly at each phase
4. Update all documentation
5. Verify everything works

---

**Document Status**: 📋 Planning Phase
**Next Action**: Ben's review and approval
**Estimated Time**: 30-45 minutes when approved
**Risk Assessment**: Low (with proper testing)

---

© 2025 Valta Property Valuations - Naming Standardization Plan
