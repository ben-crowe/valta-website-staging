# Valta.ca Email Migration - IT Handoff

**Domain:** valta.ca
**Migration:** Google Workspace → Microsoft 365
**Date:** November 28, 2025

---

## Overview

**Current State:**
- Email: Google Workspace (admin@valta.ca, chris@valta.ca)
- DNS Management: Vercel (nameservers point to Vercel)
- Website Hosting: Vercel (stays here)

**Migration Goals:**
1. Move DNS management from Vercel → GoDaddy
2. Migrate email from Google Workspace → Microsoft 365
3. Centralize email and DNS management in GoDaddy for IT team

**Result:**
- Email: Microsoft 365 (managed in GoDaddy DNS)
- DNS: GoDaddy (IT team has full control)
- Website: Vercel (unchanged - hosting stays for performance)

**Access Required:**
- GoDaddy account for valta.ca domain

**Access NOT Required:**
- Vercel (website hosting platform)
- GitHub (code repository)

---

## Phase 1: Configure DNS in GoDaddy

Pre-add all DNS records before changing nameservers to prevent downtime.

### Website Records (Vercel Hosting)

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 hour

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 hour
```

### Email Records (Google - Temporary)

```
Type: MX | Name: @ | Value: aspmx.l.google.com | Priority: 1
Type: MX | Name: @ | Value: alt1.aspmx.l.google.com | Priority: 5
Type: MX | Name: @ | Value: alt2.aspmx.l.google.com | Priority: 5
Type: MX | Name: @ | Value: alt3.aspmx.l.google.com | Priority: 10
Type: MX | Name: @ | Value: alt4.aspmx.l.google.com | Priority: 10
```

### Change Nameservers

Change nameservers from Vercel to GoDaddy defaults (ns**.domaincontrol.com).

**Propagation:** 4-48 hours (typically 6-12 hours)

---

## Phase 2: Microsoft 365 Setup

Complete after nameserver propagation (6-24 hours).

1. **Create Microsoft 365 account** (Business Basic or Business Standard)
2. **Add domain:** valta.ca in Admin Center (admin.microsoft.com)
3. **Verify domain:** Add TXT record provided by Microsoft to GoDaddy DNS
4. **Create mailboxes:**
   - admin@valta.ca
   - chris@valta.ca
5. **Assign licenses** to users

---

## Phase 3: Cutover to Microsoft

Complete only after domain verification and mailbox creation.

### Update MX Records in GoDaddy

1. **Remove** all 5 Google MX records
2. **Add Microsoft MX record:**
   ```
   Type: MX
   Name: @
   Value: valta-ca.mail.protection.outlook.com
   Priority: 0
   ```
3. **Add SPF/DKIM/DMARC** records as provided by Microsoft

### Test Email

Wait 30-60 minutes, then test inbound/outbound email via outlook.office.com

---

## Phase 4: Email Migration (Optional)

Use Microsoft 365 Admin Center migration tool (Setup → Data migration → Google Workspace) or manual export/import via Outlook.

---

## DNS Final State Reference

### Website (DO NOT MODIFY)
```
A: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### Email
```
MX: @ → valta-ca.mail.protection.outlook.com | Priority: 0
TXT: SPF, DKIM, DMARC (per Microsoft instructions)
```

---

## Critical Notes

**DO NOT CHANGE:**
- Website A/CNAME records (points to Vercel)
- Anything Vercel-related

**Website stays on Vercel for:**
- Global CDN performance
- Git deployment automation
- Development workflow integration

---

**Contact:** Ben (website issues only)
**Timeline:** 2-4 days total
**Version:** 1.0 | November 28, 2025
