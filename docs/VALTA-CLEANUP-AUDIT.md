# Valta Projects - Cleanup Audit

**Created**: October 11, 2025
**Purpose**: Identify and clean up duplicate/unused Valta projects
**Scope**: Valta website projects ONLY (excludes APR Dashboard)

---

## 🎯 Goal

**One clean deployment path:**
- One GitHub repository
- One Vercel project
- One production URL (valta.ca)
- No confusion, no duplicates

---

## 📋 What We Know (From This Local Directory)

### **Current Git Remotes**
```bash
origin:     https://github.com/ben-crowe/valta-website-staging
production: https://github.com/ben-crowe/valta-site
```

### **Current Vercel Project**
```
Project Name: valta-live-repo
Project ID:   prj_7DUiwOm9hNXzOYwwYFSCVvJwigmk
```

### **Local Directories Found**
```
/Users/bencrowe/Development/Valta-Website        ← ACTIVE (this one)
/Users/bencrowe/Development/04-Valta-Website    ← OLD? (needs check)
```

---

## 🔍 Step 1: Audit Vercel Projects

**Ben, please run these commands:**

### **List All Vercel Projects**
```bash
# Login to Vercel CLI (if not already)
npx vercel login

# List all projects
npx vercel list

# Or with more detail
npx vercel projects list
```

**Look for projects with "valta" in the name:**
- valta-live-repo
- valta-website-staging
- valta-frontend-staging-2025
- valta-site
- valta-*anything*

**For each Valta project found, note:**
1. Project name
2. Production domain (if any)
3. Last deployment date
4. Which GitHub repo it's connected to

---

### **Get Details on Specific Project**
```bash
# If you find suspicious projects, get details:
npx vercel inspect <project-name>

# Or check in Vercel Dashboard:
# https://vercel.com/dashboard
# Filter by "valta"
```

---

## 🔍 Step 2: Audit GitHub Repositories

**Ben, please run these commands:**

### **List All Your Repos**
```bash
# Using GitHub CLI (if installed)
gh repo list ben-crowe --limit 100 | grep -i valta

# Or visit GitHub directly:
# https://github.com/ben-crowe?tab=repositories
# Search for "valta"
```

**Look for repos with "valta" in the name:**
- ben-crowe/valta-website-staging
- ben-crowe/valta-site
- ben-crowe/valta-frontend-staging-2025
- ben-crowe/valta-*anything*

**For each Valta repo found, note:**
1. Repository name
2. Last commit date
3. Is it connected to Vercel?
4. Any other dependencies?

---

### **Check Repo Connections**
```bash
# For each repo, check if it has Vercel deployments:
# Go to: https://github.com/ben-crowe/<repo-name>/settings/installations

# Or check webhooks:
# https://github.com/ben-crowe/<repo-name>/settings/hooks
```

---

## 🔍 Step 3: Check Local Directories

**Already found:**

### **Directory 1: /Users/bencrowe/Development/Valta-Website**
```bash
Status: ✅ ACTIVE - This is the current working directory
Connected to: valta-website-staging (origin)
Purpose: Production Valta website
Action: KEEP
```

### **Directory 2: /Users/bencrowe/Development/04-Valta-Website**
```bash
Status: ⚠️ UNKNOWN - Needs investigation
Connected to: ??? (need to check)
Purpose: ??? (old version?)
Action: ??? (investigate first)
```

**Let's check the old directory:**

```bash
# Check if it's a git repo
cd /Users/bencrowe/Development/04-Valta-Website
git remote -v

# Check last commit
git log -1 --oneline

# Check if it has .vercel config
cat .vercel/project.json

# Compare to current directory
# Are they the same project or different?
```

---

## 📊 Known Projects Matrix

### **GitHub Repositories (Confirmed)**

| Repository Name | Status | Connected to Vercel? | Last Activity | Action |
|----------------|---------|---------------------|---------------|---------|
| valta-website-staging | ✅ Active | Yes (valta-live-repo) | Current | **KEEP** |
| valta-site | ⚠️ Unknown | Unknown | Unknown | **INVESTIGATE** |
| valta-frontend-staging-2025 | ❓ Maybe exists? | Unknown | Unknown | **INVESTIGATE** |

### **Vercel Projects (Confirmed)**

| Project Name | Status | Connected to Repo | Production Domain | Action |
|-------------|---------|-------------------|-------------------|---------|
| valta-live-repo | ✅ Active | valta-website-staging | valta.ca | **KEEP** |
| Others? | ❓ Unknown | Unknown | Unknown | **INVESTIGATE** |

### **Local Directories (Confirmed)**

| Directory | Status | Git Remote | Purpose | Action |
|-----------|---------|-----------|---------|---------|
| Valta-Website | ✅ Active | valta-website-staging | Production | **KEEP** |
| 04-Valta-Website | ⚠️ Unknown | Unknown | Unknown | **INVESTIGATE** |

---

## 🎯 Recommended Cleanup Strategy

### **Phase 1: Investigation (Ben Does This)**

1. **Run Vercel audit commands** (see Step 1)
   - List all Valta projects
   - Note which are active/inactive
   - Check production domains

2. **Run GitHub audit commands** (see Step 2)
   - List all Valta repos
   - Check last activity dates
   - Check Vercel connections

3. **Check old local directory** (see Step 3)
   - What is 04-Valta-Website?
   - Is it still needed?

4. **Fill in the matrix above** with findings

---

### **Phase 2: Decision Making (Ben + Agent)**

For each discovered project/repo, decide:

#### **KEEP Criteria:**
- ✅ Connected to production (valta.ca)
- ✅ Has recent activity
- ✅ Serves a clear purpose
- ✅ No duplicate exists

#### **DELETE Criteria:**
- ❌ No recent activity (>3 months old)
- ❌ Not connected to anything
- ❌ Duplicate of active project
- ❌ Was a test/staging that's no longer needed

#### **ARCHIVE Criteria:**
- 📦 Has historical value but not active
- 📦 Might need reference later
- 📦 Safe to remove from active use

---

### **Phase 3: Cleanup Execution**

**For GitHub Repositories:**

```bash
# Option 1: Delete permanently
# Go to: https://github.com/ben-crowe/<repo-name>/settings
# Scroll to "Danger Zone"
# Click "Delete this repository"

# Option 2: Archive (keeps it but read-only)
# Go to: https://github.com/ben-crowe/<repo-name>/settings
# Click "Archive this repository"
```

**For Vercel Projects:**

```bash
# Option 1: Delete via CLI
npx vercel remove <project-name>

# Option 2: Delete via Dashboard
# https://vercel.com/dashboard
# Select project → Settings → Advanced → Delete Project

# WARNING: Make sure no production domains attached!
```

**For Local Directories:**

```bash
# Option 1: Delete completely
rm -rf /Users/bencrowe/Development/04-Valta-Website

# Option 2: Move to archive folder
mkdir -p /Users/bencrowe/Development/_Archive
mv /Users/bencrowe/Development/04-Valta-Website /Users/bencrowe/Development/_Archive/

# Option 3: Rename to indicate it's old
mv /Users/bencrowe/Development/04-Valta-Website /Users/bencrowe/Development/04-Valta-Website-OLD-DELETE-ME
```

**For Git Remotes (in active directory):**

```bash
# If we decide the "production" remote isn't needed:
cd /Users/bencrowe/Development/Valta-Website
git remote remove production

# Verify
git remote -v
# Should only show 'origin' now
```

---

## 🚨 Safety Checklist

**Before deleting ANYTHING:**

- [ ] Verify it's NOT connected to valta.ca production
- [ ] Check for any unique code/content not elsewhere
- [ ] Confirm with Ben it's safe to delete
- [ ] Export/backup anything valuable
- [ ] Document why it's being deleted

**Never delete:**
- ❌ Anything with valta.ca production domain
- ❌ Anything with recent activity
- ❌ Anything with unique content
- ❌ Anything Ben hasn't approved

---

## 📝 Investigation Template

**For each discovered project, fill out:**

```markdown
### Project: [Name]

**Type**: GitHub Repo / Vercel Project / Local Directory

**Details:**
- Last activity: [Date]
- Connected to: [Other services]
- Production domain: [URL or None]
- Purpose: [What it does]

**Status:**
- [ ] Active and needed
- [ ] Duplicate (can delete)
- [ ] Historical (can archive)
- [ ] Unknown (needs investigation)

**Recommendation:**
- KEEP / DELETE / ARCHIVE / INVESTIGATE MORE

**Reasoning:**
[Why this recommendation?]
```

---

## 🎯 Expected Outcomes

### **Ideal End State:**

**GitHub:**
```
✅ KEEP: ben-crowe/valta-live-website (renamed from valta-website-staging)
❌ DELETE/ARCHIVE: All other valta-* repos
```

**Vercel:**
```
✅ KEEP: Valta-Live-Website (renamed from valta-live-repo)
❌ DELETE: All other valta-* projects
```

**Local:**
```
✅ KEEP: /Users/bencrowe/Development/Valta-Website
❌ DELETE/ARCHIVE: /Users/bencrowe/Development/04-Valta-Website
```

**Git Remotes:**
```
✅ KEEP: origin → valta-live-website
❌ REMOVE: production remote (if not needed)
```

---

## 📋 Audit Results (To Be Filled By Ben)

### **Vercel Projects Found:**

```
1. valta-live-repo
   - Status: Active
   - Domain: valta.ca
   - Repo: valta-website-staging
   - Action: KEEP

2. [Add others here as found]
```

### **GitHub Repos Found:**

```
1. valta-website-staging
   - Status: Active
   - Connected: valta-live-repo (Vercel)
   - Last commit: Recent
   - Action: KEEP

2. valta-site
   - Status: ???
   - Connected: ???
   - Last commit: ???
   - Action: ???

3. [Add others here as found]
```

### **Local Directories Found:**

```
1. Valta-Website
   - Status: Active
   - Remote: valta-website-staging
   - Action: KEEP

2. 04-Valta-Website
   - Status: ???
   - Remote: ???
   - Action: ???
```

---

## 🚀 Quick Commands Reference

### **Vercel Commands**
```bash
# List all projects
npx vercel list

# Get project details
npx vercel inspect <project-name>

# Delete project
npx vercel remove <project-name>
```

### **GitHub Commands**
```bash
# List repos (if gh CLI installed)
gh repo list ben-crowe | grep -i valta

# Archive repo (via web only)
# Delete repo (via web only)
```

### **Local Commands**
```bash
# Find Valta directories
find ~/Development -maxdepth 1 -iname "*valta*"

# Check git remote in directory
cd <directory>
git remote -v

# Check last commit
git log -1 --oneline
```

---

## 💡 Notes

**Remember:**
- APR Dashboard projects: DO NOT TOUCH (out of scope)
- When in doubt: ASK BEFORE DELETING
- Archive is safer than delete
- Can always unarchive later if needed

**Priority:**
1. Identify all Valta projects (Vercel + GitHub + Local)
2. Determine which is production (keep that!)
3. Mark all others for delete/archive
4. Execute cleanup carefully

---

## 📞 Next Steps

**For Ben:**
1. Run the Vercel audit commands (Step 1)
2. Run the GitHub audit commands (Step 2)
3. Fill in the "Audit Results" section above
4. Review findings with agent
5. Approve cleanup plan
6. Execute cleanup

**For Agent (after Ben's audit):**
1. Review Ben's findings
2. Make recommendations for each project
3. Create detailed cleanup plan
4. Execute approved deletions
5. Update documentation
6. Verify clean state

---

**Audit Status**: 🟡 Waiting for Ben's Investigation
**Last Updated**: October 11, 2025
**Next Action**: Ben runs audit commands and fills in results

---

© 2025 Valta Property Valuations - Cleanup Audit Documentation
