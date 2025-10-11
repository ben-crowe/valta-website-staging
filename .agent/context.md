# Valta Website - Project Context for Agents

## 🎯 What This Project Does

Marketing website for **Valta Property Valuations Ltd.**, a professional property appraisal company based in Calgary, Alberta.

**Primary Goals:**
1. Showcase appraisal services (residential, commercial, multifamily)
2. Capture leads through contact form
3. Provide detailed property appraisal request intake (planned)
4. Build trust through professional presentation

## 🔧 Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend API via Supabase Edge Functions
- **Deployment**: Vercel (auto-deploy from main branch)
- **Version Control**: GitHub (ben-crowe/valta-website-staging)

## 🚨 Critical Things to Know

### **Never Touch These:**
- `.vercel/project.json` - Deployment configuration (working perfectly)
- `.env.local` - Contains live credentials (never commit)
- Supabase edge functions - Contact form email is working (don't break it!)
- PROJECT-NOTES/ folder structure - Client prefers this organization

### **Always Test Production:**
- Production URL: https://valta.ca
- NEVER test localhost for final verification
- Vercel deploys automatically from main branch (~2-3 minutes)
- Check Vercel dashboard before declaring "deployed"

### **Organizational Pattern:**
- Numbered folders (00-Archive, 02-AppraisalForm, 03-LeadForm, 04-Images)
- PROJECT-NOTES/ for client-facing documentation
- docs/ for technical documentation
- .agent/ for agent-specific context (this folder)

## 📧 Contact Form Status

**✅ WORKING - DO NOT BREAK THIS**

- URL: /contact
- Backend: `/supabase/functions/send-contact-notification/`
- Database: `contact_submissions` table in Supabase
- Email: Sends to bc@crowestudio.com (temporary, will be clientcare@valta.ca)
- Fields: name, email, phone, company, message, source_url

**Key Details:**
- Database-first approach (never lose data, even if email fails)
- Email template is intentionally plain (no colors, no urgency)
- Company field must stay beside phone field (design decision)
- Source URL always included in notifications

## 🚧 Appraisal Form Status

**⚠️ PLANNING PHASE - NOT IMPLEMENTED**

- Blueprint exists: `/02-AppraisalForm/APPRAISAL-FORM-BLUEPRINT.md`
- Basic code started but needs completion
- Multi-step form with property details
- Separate database table: `appraisal_requests`
- Estimated 44 hours of development

## 📱 Key Information

### Company Details
- **Name**: Valta Property Valuations Ltd.
- **Phone**: (587) 801-5151
- **Email (current)**: bc@crowestudio.com
- **Email (planned)**: clientcare@valta.ca
- **Website**: https://valta.ca

### Service Areas
- Residential appraisals
- Commercial valuations
- Multifamily properties
- Expert witness services
- Retrospective valuations

### Supabase Project
- **Project ID**: ngovnamnjmexdpjtcnky
- **Region**: US West
- **Tables**: contact_submissions, appraisal_requests (planned)

## 🎨 Design Patterns

### Colors
- **Primary Blue**: #1e40af
- **Neutral Grays**: Various shades
- **Email Templates**: NO COLORS (intentional - client preference)

### Layout
- Mobile-first responsive design
- Two-column forms where appropriate
- Logo: Top left corner, links to home
- Footer: Contact info, address (shortened), no logo

### Images
- Format: WebP preferred, JPG fallback
- Lazy loading: Yes, using Next.js Image component
- Location: `/public/images/`
- Management: See `/04-Image-Graphics/IMAGE-MANAGEMENT.md`

## 🔄 Development Workflow

### Making Changes
1. Make changes locally
2. Test locally at http://localhost:3002
3. Commit to main branch
4. Push to GitHub
5. Vercel auto-deploys (~2-3 minutes)
6. Test production at https://valta.ca
7. Verify in Supabase (if backend changes)

### Testing Protocol
- Use `.testing/test-protocol.md` for project-specific tests
- Follow two-agent workflow from master protocol
- Save test sessions to `.testing/sessions/`
- Screenshots to `.testing/screenshots/`

## 📚 Documentation Locations

### For Clients / Business Context
- `PROJECT-NOTES/` - All client preferences and design decisions
- `PROJECT-NOTES/CLIENT-PREFERENCES.md` - How Ben likes things done
- `PROJECT-NOTES/DESIGN-DECISIONS.md` - UI/UX standards
- `PROJECT-NOTES/CHANGE-REQUESTS.md` - Ongoing change requests

### For Development / Technical
- `docs/` - Technical documentation
- `docs/deployment.md` - Deployment procedures
- `docs/domain-switching.md` - DNS and domain configuration
- `.agent/` - Agent-specific context (this folder)

### For Features
- `03-LeadForm-ContactForm/` - Complete contact form documentation
- `02-AppraisalForm/` - Appraisal form planning docs
- `04-Image-Graphics/` - Image management and tools

### For Testing
- `.testing/QUICKSTART.md` - Quick testing reference
- `.testing/test-protocol.md` - Detailed test procedures
- `.testing/sessions/` - Test cycle results

## 🎯 Current Project Phase

**Status**: Active production website with ongoing enhancements

**Recently Completed (September 2025):**
- ✅ Contact form with email notifications
- ✅ Content updates to match master document
- ✅ Footer redesign (removed logo, shortened address)
- ✅ Mobile responsive improvements
- ✅ Image optimization

**In Progress:**
- Appraisal form planning and design

**Upcoming:**
- Appraisal form implementation
- Domain verification for clientcare@valta.ca email
- Additional service page enhancements

## 🔐 Security Notes

- RLS (Row Level Security) policies in Supabase: Currently disabled for development
- Environment variables in `.env.local`: NEVER commit these
- API keys: Stored in Supabase secrets and Vercel environment variables
- Form submissions: Saved first, then email sent (prevents data loss)

## 💡 Agent Tips

1. **Before any work**: Check `PROJECT-NOTES/CHANGE-REQUESTS.md` for current priorities
2. **Deployment context**: Read `.agent/deployment-context.md` for deployment quirks
3. **Design consistency**: Follow patterns in `PROJECT-NOTES/DESIGN-DECISIONS.md`
4. **Testing**: Use `.testing/test-protocol.md` for verification steps
5. **Email templates**: Keep plain (no colors, no urgency language)
6. **Database first**: Always save to DB before sending email

## 📞 Support Contacts

- **Primary Contact**: Ben Crowe (bc@crowestudio.com)
- **Client**: Valta Property Valuations
- **Emergency Contact**: (587) 801-5151

---

**Context Version**: 1.0
**Last Updated**: October 11, 2025
**Next Review**: As needed when major changes occur
