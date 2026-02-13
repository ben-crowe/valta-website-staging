# Valta Website Migration Guide

**Purpose:** Transfer valta.ca from Ben's Vercel to Chris's Vercel account
**Last Updated:** December 1, 2025
**Status:** Ready to execute

---

## The Simple Truth

Migration is straightforward:

1. **Chris creates Vercel account** (or uses existing one)
2. **Deploy the site** to Chris's Vercel (import from GitHub)
3. **Point the domain** to Chris's Vercel
4. **Done** - Site live under Chris's ownership

That's it. The other docs in this folder have detailed steps, but the core process is simple.

---

## Quick Migration Path (Recommended)

### Option A: Fresh Deploy (Cleanest)

```
Step 1: Chris signs up at vercel.com
Step 2: Chris imports GitHub repo (Valta-Website)
Step 3: Chris adds domain "valta.ca" in Vercel project settings
Step 4: Update DNS records (see below)
Step 5: Test site loads at valta.ca
```

### Option B: Transfer Existing Project

```
Step 1: In Ben's Vercel: Project Settings → Transfer Project
Step 2: Enter Chris's Vercel email
Step 3: Chris accepts transfer
Step 4: Domain and settings transfer automatically
```

---

## DNS Options

### If Using Vercel Nameservers (Recommended)

In GoDaddy, change nameservers to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Benefits: Vercel manages everything, instant DNS changes, auto SSL.

### If Keeping GoDaddy Nameservers

In GoDaddy DNS, add these records:
```
A Record:     @    → 76.76.21.21
CNAME Record: www  → cname.vercel-dns.com
```

Benefits: No nameserver change, email keeps working.

---

## Email - NOT Part of This Migration

**Email is handled separately by Chris's IT team:**
- IT team managing email directly in GoDaddy
- Migrating from Google Workspace to Microsoft 365
- MX records will be configured by IT team for MS365

**This migration is WEBSITE ONLY** - no email configuration needed.

---

## Checklist

Before migration:
- [ ] Chris has Vercel account
- [ ] Chris has GitHub access to Valta-Website repo (or repo transferred)
- [ ] Note any environment variables in current Vercel project

After migration:
- [ ] Site loads at https://valta.ca
- [ ] Site loads at https://www.valta.ca
- [ ] SSL certificate active (green padlock)
- [ ] Auto-deploy from GitHub works
- [ ] Ben's Vercel project removed/archived

---

## Files in This Folder

| File | Purpose |
|------|---------|
| `README.md` | This file - website migration overview |
| `Email-Migration-IT-Handoff.md` | Email migration for IT team (Google → MS365) |
| `hosting-and-dns.md` | Detailed DNS/nameserver guide |
| `migration-plan.md` | Detailed Vercel transfer steps |
| `-archive-from-apr-dashboard/` | Original source docs (reference) |

---

## Contact

**Current Owner:** Ben Crowe
**New Owner:** Chris
**Domain Registrar:** GoDaddy
**Hosting:** Vercel
