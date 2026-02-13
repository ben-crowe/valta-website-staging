# Lead Forms & Contact System - Quick Start Guide

## 📋 What This System Does
The Valta website has a lead capture system that:
1. Saves every form submission to a database (never loses data)
2. Sends email notifications to the team
3. Shows the source (which form/page was used)

## 🚀 Current Status
✅ **Contact Form is LIVE and WORKING**
- URL: https://valta.ca/contact
- Emails going to: bc@crowestudio.com (temporary)
- Future recipient: clientcare@valta.ca (needs domain verification)

## 📧 Daily Management

### Check for New Submissions
1. **Email**: Check bc@crowestudio.com for notifications
2. **Database**: View all submissions at:
   - https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/editor
   - Table: `contact_submissions`

### Test the Form
```bash
# Quick test to verify everything works
node test-form.js
```

## 🔧 Common Tasks

### Change Email Recipient
1. Open `/supabase/functions/send-contact-notification/index.ts`
2. Find line 252: `to: ['bc@crowestudio.com']`
3. Change to new email address
4. Deploy: `npx supabase functions deploy send-contact-notification`

### View Form Submissions in Database
1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky)
2. Click "Table Editor" 
3. Select `contact_submissions` table
4. All submissions are there (even if email fails)

### Export Submissions
1. Go to Supabase Dashboard > Table Editor
2. Select `contact_submissions`
3. Click "Export" button
4. Choose CSV format
5. Import to CRM or spreadsheet

## 📂 Documentation Files

**Start Here:**
- `README.md` - You're reading it! Quick reference guide

**Deep Dives:**
- `LEAD-CAPTURE-SYSTEM.md` - Complete system overview
- `CONTACT-FORM-IMPLEMENTATION.md` - Contact form specifics  
- `APPRAISAL-FORM-BLUEPRINT.md` - Plan for appraisal form (not built yet)

**Technical Files:**
- `1-database-schema.sql` - Database structure
- `2-contact-form-updated.tsx` - Backup of form code
- `3-implementation-guide.md` - Original setup notes

## 🚨 If Something Breaks

### Form Won't Submit
- **Immediate Fix**: Tell users to call (587) 801-5151
- **Check**: Browser console for errors (F12 > Console)
- **Verify**: Internet connection and try again

### Emails Not Arriving  
- **Remember**: Data is still saved in database!
- **Check**: Spam folder first
- **Verify**: Edge function logs in Supabase Dashboard
- **Test**: Run `node test-form.js`

### Need to See All Submissions
- Database has everything: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky
- Even if emails fail, data is safe

## 📱 Key Contacts & Access

### Services We Use
- **Database**: Supabase (ngovnamnjmexdpjtcnky)
- **Email Service**: Resend API
- **Hosting**: Vercel (auto-deploys from GitHub)

### Important URLs
- **Live Form**: https://valta.ca/contact
- **Test Locally**: http://localhost:3002/contact
- **Database**: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky
- **Email Function Logs**: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/functions

### Test Script
```bash
# Run this anytime to test the system
cd /Users/bencrowe/Development/Valta-Website
node test-form.js
```

## ✅ Quick Health Check

Run these commands to verify system health:

```bash
# 1. Test form submission and email
node test-form.js

# 2. Check if dev server is running
curl http://localhost:3002/contact

# 3. Deploy edge function (if you made changes)
npx supabase functions deploy send-contact-notification
```

## 🎯 Future Plans

**Coming Soon:**
- Domain verification to use clientcare@valta.ca
- Dedicated appraisal request form
- File upload capability
- Auto-responder emails

**Maybe Later:**
- Partner inquiry form
- Career application form
- Newsletter signup

## 🤝 Handoff Notes

**For Your Assistant:**
1. The system saves everything to the database first (data is never lost)
2. Email notifications are secondary (nice to have but not critical)
3. Each form shows where it came from (valta.ca/contact)
4. Test with `node test-form.js` whenever you're unsure
5. The database is the source of truth - check there if emails aren't arriving

**What You DON'T Need to Worry About:**
- The system is stable and tested
- Data loss is prevented by design
- Forms are mobile-friendly
- Everything auto-deploys from GitHub

**What to Monitor:**
- Check for submissions daily
- Export for CRM weekly
- Clean test submissions monthly

## 💡 Pro Tips

1. **Always test after changes**: Run `node test-form.js`
2. **Database first**: If emails fail, data is still saved
3. **Source matters**: Each form says where it came from
4. **Keep it simple**: No colors, no urgency alerts in emails
5. **Company field**: Always beside phone number (design decision)

---

**Need Help?** 
- Check the detailed docs in this folder
- Test with the script first
- Database has all the data even if something seems broken

**Last Updated**: September 25, 2025
**System Status**: ✅ Fully Operational
**Current Email**: bc@crowestudio.com