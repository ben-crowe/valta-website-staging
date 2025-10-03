# Valta Website - Project Notes & Context

## 🎯 Purpose
This folder contains all project-specific notes, preferences, and learnings that need to persist across development sessions. Always check this folder when starting work on the Valta website.

## 📋 Quick Context
- **Client**: Valta Property Valuations Ltd.
- **Website**: https://valta.ca
- **Development**: Next.js, TypeScript, Tailwind CSS, Supabase
- **Current Phase**: Content updates and lead capture system implementation

## 🗂️ Folder Structure
```
PROJECT-NOTES/
├── README.md                    # This file - start here
├── CLIENT-PREFERENCES.md        # Ben's specific preferences and requirements
├── DESIGN-DECISIONS.md         # UI/UX decisions and standards
├── CHANGE-REQUESTS.md          # Ongoing change requests and status
├── MASTER-CONTENT.md           # Approved copy and content
├── IMAGE-GUIDELINES.md         # Image specs and requirements
├── COMPLETED-WORK.md           # Log of all completed changes
└── assets/                     # Images, logos, documents
    ├── logos/
    ├── images/
    └── documents/
```

## 🚀 How to Use This for Session Continuity

### Starting a New Session
```markdown
1. Read PROJECT-NOTES/README.md (this file)
2. Check CHANGE-REQUESTS.md for pending work
3. Review CLIENT-PREFERENCES.md for Ben's style
4. Check COMPLETED-WORK.md to avoid redoing work
```

### During Development
- Reference DESIGN-DECISIONS.md for UI consistency
- Use MASTER-CONTENT.md for approved copy
- Follow IMAGE-GUIDELINES.md for media handling

### Ending a Session
- Update COMPLETED-WORK.md with what was done
- Add any new preferences to CLIENT-PREFERENCES.md
- Update CHANGE-REQUESTS.md status

## 📝 Key Information for Quick Reference

### Current Email Setup
- **Contact Form**: Working and live at /contact
- **Emails to**: bc@crowestudio.com (temporary)
- **Documentation**: /LeadForm-ContactForm/ folder

### Recent Work (September 2025)
- ✅ Updated all content to match master document
- ✅ Implemented contact form with email notifications
- ✅ Added company field to contact form
- ✅ Removed colors and urgency from email templates
- ✅ Created comprehensive documentation

### Important URLs
- **Production**: https://valta.ca
- **Local Dev**: http://localhost:3002
- **Supabase**: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky
- **GitHub**: [Repository URL if available]

## 💡 Communication Guidelines

### For Ben to Communicate Changes
1. **Add images to**: PROJECT-NOTES/assets/images/
2. **Add copy changes to**: PROJECT-NOTES/CHANGE-REQUESTS.md
3. **Document preferences in**: PROJECT-NOTES/CLIENT-PREFERENCES.md

### Example Change Request Format
```markdown
## [Date] - [Type of Change]
**Page**: /contact
**Current**: [what it is now]
**Requested**: [what it should be]
**Priority**: High/Medium/Low
**Status**: Pending/In Progress/Complete
**Notes**: [any specific requirements]
```

## 🔄 Session Handoff Template

When ending a session, update this section:

### Last Session: September 25, 2025
**Completed**:
- Contact form implementation with database and email
- Added company field beside phone number
- Removed email template colors and "Next Steps"
- Created full documentation in /LeadForm-ContactForm/

**Pending**:
- Domain verification for clientcare@valta.ca
- Appraisal request form (blueprint ready)
- Enable RLS policies for production

**Notes for Next Session**:
- Email templates are intentionally plain (no colors)
- Company field must stay beside phone field
- Always show source URL in emails (valta.ca/contact)
- Database-first approach is critical

## 🎨 Quick Design Reference
- **Primary Blue**: #1e40af (but not in emails!)
- **Logo Position**: Top left corner, link to home
- **Form Layout**: Two-column where appropriate
- **Email Style**: Neutral grays only, no colors
- **Image Format**: WebP with lazy loading
- **Mobile First**: Always responsive

## 📞 Key Contacts
- **Phone**: (587) 801-5151
- **Email (temp)**: bc@crowestudio.com
- **Email (future)**: clientcare@valta.ca
- **Company**: Valta Property Valuations Ltd.

---
**Remember**: Always check this folder when starting work on the Valta website!