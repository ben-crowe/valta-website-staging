# Site Hosting & Domain Configuration - valta.ca
**Last Updated:** October 20, 2025

## Current Status

- **Domain**: valta.ca
- **Registrar**: GoDaddy
- **Current Nameservers**: GoDaddy (domaincontrol.com)
- **Hosting Provider**: Vercel
- **Status**: Domain added to Vercel ✅ | Nameservers **NOT YET CHANGED** ⏳

---

## Understanding the Setup

### How It Currently Works (Split Configuration)
```
GoDaddy (Nameservers) ←→ Vercel (Hosting)
  |                           |
  Domain registrar      Website servers
  (DNS resolver)        (serves valta.ca)
```

### How It Should Work (Unified Configuration)
```
Vercel (Nameservers + Hosting)
  |
  Everything in one place
  (DNS + servers)
```

---

## PRIORITY: Change Nameservers to Vercel

### Why This Matters
- **Performance**: Global CDN with 100+ locations
- **Reliability**: 99.99% uptime with automatic failover
- **Management**: Single dashboard instead of split config
- **Speed**: DNS changes are instant (no propagation delays)
- **Cost**: FREE (GoDaddy charges extra)
- **Automation**: API control for future scripting

### STEP-BY-STEP: Move Nameservers from GoDaddy to Vercel

**Step 1: Log into GoDaddy**
- Go to: https://www.godaddy.com/
- Sign in with your GoDaddy account
- Navigate to: **My Products** → **Domains** → **valta.ca**

**Step 2: Access DNS Settings**
- Click **DNS** button
- Look for **Nameservers** section
- Click **Change** (next to current nameservers)

**Step 3: Enter Vercel Nameservers**
- Choose option: **Enter my own nameservers**
- Replace all existing nameservers with:
  ```
  ns1.vercel-dns.com
  ns2.vercel-dns.com
  ```
- Delete any other nameserver entries
- Click **Save** or **Update**

**Step 4: Verify Changes**
- GoDaddy confirmation page should appear
- You'll receive email confirmation
- Changes take 4-48 hours to propagate (usually 2-6 hours)

### ⚠️ IMPORTANT WARNINGS

**Email Will Stop Temporarily**
- Current email routing via GoDaddy will break
- Email won't work for 4-48 hours during propagation
- After nameservers change, MX records MUST be added (see below)

**Cannot Undo Quickly**
- Takes 4-48 hours to propagate
- Plan this change when business email is NOT critical
- Have backup communication method ready

---

## AFTER Nameservers Change: Add MX Records

Once nameservers point to Vercel, you must add MX (Mail Exchange) records in Vercel for email routing.

### Vercel Dashboard Method (Recommended)

1. **Log into Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Select: **ben-crowes-projects** team

2. **Find Domain Settings**
   - Navigate to your project
   - Go to: **Settings** → **Domains**
   - Find: `valta.ca`
   - Click on it to open domain settings

3. **Add MX Records**
   - Look for DNS Records section
   - Click **Add Record**
   - Add these MX records (Google Workspace):
     ```
     Type: MX
     Name: @
     Value: aspmx.l.google.com
     Priority: 1

     Type: MX
     Name: @
     Value: alt1.aspmx.l.google.com
     Priority: 5

     Type: MX
     Name: @
     Value: alt2.aspmx.l.google.com
     Priority: 5

     Type: MX
     Name: @
     Value: alt3.aspmx.l.google.com
     Priority: 10

     Type: MX
     Name: @
     Value: alt4.aspmx.l.google.com
     Priority: 10
     ```

4. **Save Records**
   - All records should show as active
   - Give email 30 minutes to propagate after adding MX records

### CLI Method (Alternative)

```bash
# Add MX records via Vercel CLI
vercel dns add valta.ca @ MX aspmx.l.google.com 1
vercel dns add valta.ca @ MX alt1.aspmx.l.google.com 5
vercel dns add valta.ca @ MX alt2.aspmx.l.google.com 5
vercel dns add valta.ca @ MX alt3.aspmx.l.google.com 10
vercel dns add valta.ca @ MX alt4.aspmx.l.google.com 10
```

---

## ALTERNATIVE: Keep Split Configuration (NOT Recommended)

If nervous about moving nameservers, you can keep GoDaddy nameservers and just add these DNS records in GoDaddy:

**In GoDaddy DNS Settings:**
```
A Record:
  Name: @ (or leave blank)
  Type: A
  Value: 76.76.21.21
  TTL: 1 hour

CNAME Record:
  Name: www
  Type: CNAME
  Value: cname.vercel-dns.com
  TTL: 1 hour
```

**Advantages:**
- No nameserver change needed
- Email keeps working
- Domain stays "simple"

**Disadvantages:**
- Two services managing DNS (complexity)
- Vercel features limited (no auto DNS, no preview domains)
- Still need manual configuration
- Slower DNS propagation
- Less reliable than unified setup

---

## Benefits Summary: Vercel Nameservers

| Feature | GoDaddy Split | Vercel Unified |
|---------|---------------|-----------------|
| **Performance** | Standard | Global CDN (100+ locations) ✅ |
| **Uptime** | 99.9% | 99.99% ✅ |
| **DNS Speed** | 24-48 hrs | Instant ✅ |
| **Dashboard** | Two places | One place ✅ |
| **SSL Certs** | Manual | Automatic ✅ |
| **DDoS Protection** | Extra cost | Built-in ✅ |
| **Cost** | More | FREE ✅ |
| **Setup Complexity** | More | Less ✅ |

---

## Troubleshooting

### Email Not Working After Nameserver Change
- **Problem**: Email goes to spam or bounces
- **Solution**:
  1. Verify MX records are added in Vercel
  2. Check priority numbers are correct (1, 5, 5, 10, 10)
  3. Wait 24-48 hours for full propagation
  4. Test with external email (gmail.com)

### Website Down After Nameserver Change
- **Problem**: Site shows 404 or doesn't load
- **Solution**:
  1. Verify domain is added to Vercel project
  2. Check Vercel dashboard shows green checkmark
  3. Try in private/incognito browser
  4. Clear browser cache: Cmd+Shift+Delete
  5. Wait 1-2 hours for DNS to propagate

### Partial Changes (Some Nameservers Updated, Some Not)
- **Problem**: Domain partially resolves
- **Solution**:
  1. Go back to GoDaddy
  2. Verify BOTH nameservers are exactly:
     - ns1.vercel-dns.com
     - ns2.vercel-dns.com
  3. Remove any other nameserver entries
  4. Wait 4 hours

---

## For Ben (Setup Instructions)

### Quick Setup (Unified - Recommended)
1. ✅ Domain already added to Vercel (DONE)
2. ⏳ **NEXT**: Change GoDaddy nameservers to Vercel
3. ⏳ **AFTER**: Add MX records in Vercel (30 mins later)
4. ✅ Done! Everything works from Vercel

### Timeline
- Change nameservers: 2-5 minutes in GoDaddy
- Propagation time: 2-6 hours (sometimes 4-48 hours)
- Add MX records: 2-5 minutes in Vercel
- Email online: 30 minutes after MX records added
- **Total time to full operation: 3-7 hours**

---

## Related Documentation

- **Domain Switching**: See `domain-switching.md` (switching projects in Vercel)
- **Deployment**: See `deployment.md` (production deployment)
- **Troubleshooting**: See `troubleshooting.md` (general issues)

---

## Contact Information

**If Things Break:**
- Vercel Support: https://vercel.com/support
- Check Status: https://www.vercel-status.com/
- GoDaddy Support: https://www.godaddy.com/help

**Current Setup Owner:** Ben Crowe
**Last Updated:** October 20, 2025
**Domain:** valta.ca
