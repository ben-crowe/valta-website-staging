# How to Rename Project Directory Without Losing Claude Sessions

**Use Case**: Rename `Valta-Website` to `01-Valta-Website` (or any name) while keeping Claude Code session history.

---

## 🎯 Quick Solution

**Step 1: Close Claude Code in this project**

**Step 2: Rename the project directory**
```bash
cd /Users/bencrowe/Development
mv Valta-Website 01-Valta-Website
```

**Step 3: Rename the Claude session directory**
```bash
cd ~/.claude/projects
mv -Users-bencrowe-Development-Valta-Website \
   -Users-bencrowe-Development-01-Valta-Website
```

**Step 4: Open Claude Code in the new directory**
```bash
cd /Users/bencrowe/Development/01-Valta-Website
code .
```

**Done!** Your sessions are preserved.

---

## 📋 Detailed Step-by-Step

### **Step 1: Verify Current Claude Session Location**

```bash
# Check if session data exists
ls ~/.claude/projects/-Users-bencrowe-Development-Valta-Website
```

**Should show files like:**
- `conversation_*.json`
- `metadata.json`
- Other session files

---

### **Step 2: Close All Claude Code Windows**

**Important:** Make sure Claude Code is completely closed for this project.

```bash
# Check if any VS Code/Claude windows open
ps aux | grep -i "visual studio code" | grep -i valta
```

---

### **Step 3: Rename the Project Directory**

```bash
# Navigate to parent directory
cd /Users/bencrowe/Development

# Rename the directory
# Examples:
mv Valta-Website 01-Valta-Website           # Add prefix
mv Valta-Website Valta-Live-Website         # Change name
mv Valta-Website 02-Valta-Production-Site   # Complete rename
```

---

### **Step 4: Rename the Claude Session Directory**

**Important:** The directory name must match the new path exactly, with slashes converted to hyphens.

```bash
# Navigate to Claude projects directory
cd ~/.claude/projects

# List current Valta directories
ls -la | grep -i valta

# Rename to match new project path
# OLD: -Users-bencrowe-Development-Valta-Website
# NEW: -Users-bencrowe-Development-01-Valta-Website

mv -Users-bencrowe-Development-Valta-Website \
   -Users-bencrowe-Development-01-Valta-Website
```

**Verify:**
```bash
ls -la ~/.claude/projects/-Users-bencrowe-Development-01-Valta-Website
```

---

### **Step 5: Open Project in New Location**

```bash
# Navigate to renamed directory
cd /Users/bencrowe/Development/01-Valta-Website

# Open with VS Code/Claude Code
code .

# Or open with your editor of choice
```

**Claude Code should now find your session history!**

---

## ✅ Verification Checklist

After renaming, verify:

- [ ] Can open project in Claude Code
- [ ] Session history is visible (check session list)
- [ ] Can access previous conversations
- [ ] Git remotes still work: `git remote -v`
- [ ] Vercel config still valid: `cat .vercel/project.json`
- [ ] Environment variables present: `cat .env.local`

---

## 🚨 Common Issues

### **Issue: Sessions Don't Appear**

**Cause:** Claude session directory name doesn't match new project path

**Solution:**
```bash
# Check exact path
pwd
# Should show: /Users/bencrowe/Development/01-Valta-Website

# Check Claude session directory matches
ls ~/.claude/projects/ | grep "01-Valta-Website"
# Should show: -Users-bencrowe-Development-01-Valta-Website
```

**If it doesn't match, rename again:**
```bash
cd ~/.claude/projects
# Use exact name with hyphens matching your path
mv [old-name] -Users-bencrowe-Development-01-Valta-Website
```

---

### **Issue: Git Stops Working**

**Cause:** Git uses absolute paths internally but should handle renames

**Solution:**
```bash
cd /Users/bencrowe/Development/01-Valta-Website

# Verify git still works
git status

# If issues, reset remotes
git remote -v
# Should still show: origin https://github.com/ben-crowe/valta-website-staging.git
```

**Git should work fine - it tracks by repository, not directory name.**

---

### **Issue: Vercel Deployment Breaks**

**Cause:** Vercel's local config shouldn't care about directory name

**Solution:**
```bash
# Check Vercel config
cat .vercel/project.json

# Should still show same projectId
# If needed, re-link
npx vercel link
```

**Note:** Vercel watches GitHub repo, not local directory name, so deployments won't break.

---

## 🎯 Example: Common Rename Patterns

### **Pattern 1: Add Numbered Prefix**
```bash
# Rename
mv Valta-Website 01-Valta-Website

# Rename Claude sessions
mv -Users-bencrowe-Development-Valta-Website \
   -Users-bencrowe-Development-01-Valta-Website
```

### **Pattern 2: Change Name Completely**
```bash
# Rename
mv Valta-Website Valta-Production-Site

# Rename Claude sessions
mv -Users-bencrowe-Development-Valta-Website \
   -Users-bencrowe-Development-Valta-Production-Site
```

### **Pattern 3: Move to Different Directory**
```bash
# Move and rename
mv /Users/bencrowe/Development/Valta-Website \
   /Users/bencrowe/Projects/01-Valta-Live

# Rename Claude sessions
mv -Users-bencrowe-Development-Valta-Website \
   -Users-bencrowe-Projects-01-Valta-Live
```

---

## 💡 Pro Tips

### **Tip 1: Keep Session History Organized**

If you have multiple old session directories, archive them:
```bash
cd ~/.claude/projects

# Create archive folder
mkdir -p _archive

# Move old sessions
mv -Users-bencrowe-Development-04-Valta-Website _archive/
```

### **Tip 2: Use Symlinks (Alternative Method)**

Instead of renaming, create a symlink:
```bash
cd /Users/bencrowe/Development

# Create symlink with new name pointing to original
ln -s Valta-Website 01-Valta-Website

# Now you can access via either name
cd 01-Valta-Website  # Works!
```

**Pros:**
- Keep original sessions automatically
- Both names work

**Cons:**
- Two names pointing to same thing (confusing?)
- Git might get confused

**Recommendation:** Actual rename is cleaner.

---

### **Tip 3: Backup Before Renaming**

```bash
# Backup Claude sessions
cp -r ~/.claude/projects/-Users-bencrowe-Development-Valta-Website \
      ~/Desktop/valta-claude-sessions-backup

# Now safe to rename
```

---

## 📝 Quick Reference Card

**Format for Claude session directory name:**
```
Path:  /Users/bencrowe/Development/01-Valta-Website
Name:  -Users-bencrowe-Development-01-Valta-Website
       ^
       Replace all / with -
```

**Commands:**
```bash
# 1. Rename project
mv /Users/bencrowe/Development/OLD-NAME \
   /Users/bencrowe/Development/NEW-NAME

# 2. Rename Claude sessions (must match!)
cd ~/.claude/projects
mv -Users-bencrowe-Development-OLD-NAME \
   -Users-bencrowe-Development-NEW-NAME

# 3. Open project
cd /Users/bencrowe/Development/NEW-NAME
code .
```

---

## 🎯 Want Me to Do It For You?

**Just tell me:**
1. What you want to rename it to (e.g., `01-Valta-Website`)
2. I'll rename both the directory and Claude sessions
3. You just need to close Claude Code first, then reopen in new location

---

**Document Status**: ✅ Complete
**Last Updated**: October 11, 2025
**Tested**: Yes - This method preserves session continuity

---

© 2025 Valta Property Valuations - Claude Code Session Continuity Guide
