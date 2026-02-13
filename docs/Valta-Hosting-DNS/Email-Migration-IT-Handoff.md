# Valta.ca Email Migration & IT Handoff

**Domain:** valta.ca
**Migration:** Google Workspace → Microsoft 365
**Last Updated:** December 1, 2025
**Status:** Ready for IT team execution

---

## Overview

**Current State:**
- Email: Google Workspace (admin@valta.ca, chris@valta.ca)
- DNS Management: Vercel (nameservers point to Vercel)
- Website Hosting: Vercel (stays here - DO NOT MOVE)
- Domain Registrar: GoDaddy

**Migration Goals:**
1. Move DNS management from Vercel → GoDaddy
2. Migrate email from Google Workspace → Microsoft 365
3. Centralize email and DNS management in GoDaddy for IT team

**End State:**
- Email: Microsoft 365 (managed via GoDaddy DNS)
- DNS: GoDaddy (IT team has full control)
- Website: Vercel (unchanged - hosting stays for performance)

---

## Architecture

```
                 GoDaddy
   Domain Registration (valta.ca)
   DNS Management (Nameservers)
   MX Records → Microsoft 365
   A/CNAME Records → Vercel (website)

                   |
                   v
       |                       |

 Microsoft 365          Vercel
                    (Website Host)

  Email Server       valta.ca site

```

**Key Separation:**
- IT Team manages: Email + DNS (in GoDaddy)
- Dev Team manages: Website hosting (in Vercel)

---

## Current Credentials

### Google Workspace (Current - To Be Migrated)
- **Email:** admin@valta.ca
- **Password:** Emailcircle1estates!
- **App Password (SMTP):** spusouthiyfmesdj
- **SMTP Server:** smtp.gmail.com (ports 587/465)
- **Accounts:** admin@valta.ca, chris@valta.ca

### Resend API (Email Sending Service)
- **API Key:** re_T2VGRdd3_CqZuH9XCBrjxJuNPyQwykHJp
- **Note:** Provider-agnostic - works with Google or Microsoft, no changes needed after migration

### GoDaddy
- **Domain:** valta.ca
- **Access:** Chris has account credentials
- **IT Person:** Will manage DNS/email here

---

## IT Handoff Instructions

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

Change nameservers from Vercel to GoDaddy defaults:
```
ns67.domaincontrol.com
ns68.domaincontrol.com
```
(Or whatever GoDaddy default nameservers are shown)

**Propagation:** Allow for DNS propagation after change

---

## Phase 2: Microsoft 365 Setup

Complete after nameserver propagation.

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

After propagation, test inbound/outbound email via outlook.office.com

---

## Phase 4: Email Migration (Optional)

Use Microsoft 365 Admin Center migration tool:
- Setup → Data migration → Google Workspace

Or manual export/import via Outlook.

Can migrate:
- Emails
- Contacts
- Calendars

---

## DNS Final State Reference

### Website (DO NOT MODIFY)
```
A: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### Email (After Microsoft Migration)
```
MX: @ → valta-ca.mail.protection.outlook.com | Priority: 0
TXT: SPF, DKIM, DMARC (per Microsoft instructions)
```

---

## Critical Warnings

### DO NOT CHANGE:
- Website A/CNAME records (points to Vercel)
- Anything Vercel-related

### Website stays on Vercel for:
- Global CDN performance (100+ locations)
- Git deployment automation (push = deploy)
- Development workflow integration
- Auto-SSL, preview deployments
- Free tier benefits

### GoDaddy hosting would break:
- Development workflow
- Automatic deployments
- Performance optimization

---

## Rollback Plan

**If website goes down:**
1. Verify A and CNAME records in GoDaddy DNS
2. Should point to: 76.76.21.21 and cname.vercel-dns.com
3. Wait for DNS propagation

**If email not working:**
1. Check MX records are correct
2. Verify Microsoft 365 domain is verified
3. Can temporarily point MX back to Google if needed

**If need to revert nameservers to Vercel:**
1. Change GoDaddy nameservers back to:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
2. Wait for propagation

---

## IT Person Checklist

### Before Migration
- [ ] Have GoDaddy login credentials
- [ ] Review this documentation
- [ ] Confirm Microsoft 365 account/subscription ready

### Phase 1 - DNS Setup
- [ ] Pre-add website A record in GoDaddy
- [ ] Pre-add website CNAME record in GoDaddy
- [ ] Pre-add Google MX records in GoDaddy (temporary)
- [ ] Change nameservers from Vercel to GoDaddy
- [ ] Wait for propagation
- [ ] Verify website loads at valta.ca

### Phase 2 - Microsoft Setup
- [ ] Create Microsoft 365 Business account
- [ ] Add valta.ca domain to Microsoft
- [ ] Add TXT verification record to GoDaddy
- [ ] Wait for Microsoft verification
- [ ] Create admin@valta.ca mailbox
- [ ] Create chris@valta.ca mailbox
- [ ] Assign licenses

### Phase 3 - Email Cutover
- [ ] Remove Google MX records from GoDaddy
- [ ] Add Microsoft MX record
- [ ] Add SPF/DKIM/DMARC records
- [ ] Test inbound email (send from external)
- [ ] Test outbound email (send to external)

### Phase 4 - Cleanup
- [ ] Migrate email data from Google (optional)
- [ ] Cancel Google Workspace subscription
- [ ] Document final configuration

### Verification
- [ ] Website loads at https://valta.ca
- [ ] Website loads at https://www.valta.ca
- [ ] SSL certificate active (green padlock)
- [ ] Email sending works
- [ ] Email receiving works

---

## Contact

**Website Issues:** Ben Crowe
**Email/DNS Issues:** IT Team (via GoDaddy)
**Domain Registrar:** GoDaddy
**Website Hosting:** Vercel

---

## Document History

- **December 1, 2025:** Consolidated from APR-Dashboard-v3 docs, moved to Valta-Website
- **November 28, 2025:** Original IT handoff and migration docs created
- **October 2025:** Original nameserver migration (GoDaddy → Vercel)

---

## Related Files

| File | Purpose |
|------|---------|
| `README.md` | Website migration overview (Vercel account transfer) |
| `hosting-and-dns.md` | Detailed DNS/nameserver technical guide |
| `migration-plan.md` | Vercel project transfer steps |
| `Email-Migration-IT-Handoff.md` | This file - email migration for IT team |
