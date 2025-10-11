# Domain Switch Instructions - valta.ca

## Current Status
- **Live Domain**: valta.ca
- **Currently Points To**: valta-live-repo project (deployed Sept 18)
- **Switch To**: valta-frontend-staging-2025 project (new site with forms)

## Pre-Switch Checklist
✅ Staging site is live: https://valta-frontend-staging-2025.vercel.app
✅ Form submission connected to Supabase backend
✅ Latest changes deployed (navigation updates, form integration)
✅ Site responds with 200 OK status

## Step-by-Step Domain Switch Process

### Method 1: Via Vercel Dashboard (RECOMMENDED)

1. **Log into Vercel Dashboard**
   - Go to: https://vercel.com/dashboard
   - Select team: ben-crowes-projects

2. **Remove Domain from Old Project**
   - Navigate to: valta-live-repo project
   - Go to: Settings → Domains
   - Find `valta.ca`
   - Click the three dots menu → Remove
   - Confirm removal (domain will be unlinked but not deleted)

3. **Add Domain to New Project**
   - Navigate to: valta-frontend-staging-2025 project
   - Go to: Settings → Domains
   - Click "Add Domain"
   - Enter: `valta.ca`
   - Click "Add"
   
4. **DNS Configuration (if needed)**
   - Vercel will show if DNS changes are needed
   - Usually no changes needed if already on Vercel
   - If prompted, update DNS records as shown

5. **Verify SSL Certificate**
   - Vercel automatically provisions SSL
   - Wait 1-2 minutes for SSL to activate
   - Check for green padlock on https://valta.ca

### Method 2: Via Vercel CLI (Alternative)

```bash
# First, remove domain from old project
npx vercel domains rm valta.ca --yes

# Then add to new project (make sure you're in the Valta-Website directory)
cd /Users/bencrowe/Development/Valta-Website
npx vercel domains add valta.ca --yes
```

## Post-Switch Verification

1. **Check Live Site**
   - Visit: https://valta.ca
   - Verify it shows the new design with updated forms
   - Check navigation dropdown works
   - Test form submission page loads

2. **Test Critical Features**
   - [ ] Homepage loads correctly
   - [ ] Navigation menu dropdown works
   - [ ] Request Appraisal form accessible
   - [ ] Contact information is correct (587-801-5151)
   - [ ] All service pages load

3. **Monitor for Issues**
   - Check browser console for errors
   - Verify SSL certificate is active
   - Ensure no mixed content warnings

## Rollback Plan (If Needed)

If any issues occur, you can quickly switch back:

1. Remove domain from valta-frontend-staging-2025
2. Re-add domain to valta-live-repo project
3. Domain will point back to old site within 1-2 minutes

## Important Notes

- **DNS Propagation**: Changes are usually instant on Vercel
- **SSL Certificate**: Automatically handled by Vercel
- **Downtime**: Zero downtime expected with this method
- **Both Projects Remain**: Old project stays intact, just not connected to domain

## Support Contacts

- Vercel Support: support@vercel.com
- Vercel Status: https://www.vercel-status.com/

## Final Confirmation

Before switching, confirm:
- Client is ready for the new site to go live
- You have access to Vercel dashboard
- You're prepared to monitor the site after switch

---

**Last Updated**: January 2025
**New Site URL**: https://valta-frontend-staging-2025.vercel.app
**Old Site URL**: https://valta-live-repo.vercel.app