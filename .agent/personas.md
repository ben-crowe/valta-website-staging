# Valta Website - Project-Specific Personas

This file contains project-specific persona configurations and preferences for agents working on the Valta website.

## 🎯 General Guidelines for All Personas

### Communication Style
- Professional but approachable
- Clear and concise
- No unnecessary technical jargon with client
- Ben prefers directness over lengthy explanations

### Code Style
- TypeScript strict mode
- Functional components with hooks (React)
- Tailwind CSS for styling (no custom CSS unless necessary)
- Component-based architecture
- Clear, descriptive variable names

### Testing Approach
- Test on production (https://valta.ca), not localhost
- Database-first verification (check Supabase, not just UI)
- Mobile responsive testing is critical
- Screenshot failures for evidence

## 🔧 Backend Work in This Project

**Always Use:**
- Supabase for database (PostgreSQL)
- Supabase Edge Functions for serverless operations
- Row Level Security (RLS) policies when going to production
- Database-first approach (save data before sending email)

**Never Use:**
- Custom API routes (use Supabase Edge Functions)
- External email services (use Resend via Supabase)
- Custom authentication (Supabase Auth when needed)

**Email Notifications:**
- Plain text preferred (HTML is acceptable but no colors)
- No urgency language ("URGENT", "ACT NOW", etc.)
- Always include source URL
- Send to bc@crowestudio.com (temporary)
- Future: clientcare@valta.ca

## 🎨 Frontend Work in This Project

**Framework & Libraries:**
- Next.js 14 App Router (not Pages Router)
- TypeScript (strict mode)
- Tailwind CSS for all styling
- Shadcn/ui for components
- Lucide React for icons

**Design System:**
- Primary color: Blue (#1e40af)
- Mobile-first responsive design
- Two-column forms where appropriate
- Logo position: Top left, links to home
- Footer: No logo, shortened address

**Component Patterns:**
- Use Shadcn/ui components when available
- Custom components in `/components/` directory
- Server components by default
- Client components only when needed (use 'use client')

**Forms:**
- Company field beside phone field (specific design decision)
- Toast notifications for all user actions
- Clear validation messages
- Success states with confirmation

## 📊 Data & Database Work

**Schema Conventions:**
- Snake_case for column names
- `created_at` and `updated_at` timestamps on all tables
- UUID for primary keys
- Foreign key relationships clearly defined

**Current Tables:**
- `contact_submissions` - Contact form data (active)
- `appraisal_requests` - Appraisal form data (planned)

**Query Patterns:**
- Use Supabase client (already configured)
- Handle errors gracefully
- Never expose internal errors to users
- Log errors for debugging

## 🚀 Deployment Work

**Platform:**
- Vercel (auto-deploy from main branch)
- GitHub repo: ben-crowe/valta-website-staging
- Production URL: https://valta.ca

**Process:**
1. Make changes locally
2. Test at localhost:3002
3. Commit to main branch
4. Push to GitHub
5. Vercel auto-deploys (~2-3 minutes)
6. ALWAYS verify on production URL

**Critical:**
- NEVER touch `.vercel/project.json`
- NEVER commit `.env.local`
- ALWAYS wait for deployment before testing
- ALWAYS test production, not localhost

## 🔍 Testing & Quality Assurance

**Testing Workflow:**
- Follow `.testing/test-protocol.md`
- Use two-agent testing workflow
- Save sessions to `.testing/sessions/`
- Screenshots to `.testing/screenshots/`

**What to Test:**
1. Form submissions (UI + Database + Email)
2. Mobile responsiveness (375px, 768px, 1024px+)
3. Page navigation (all links work)
4. Performance (page load times)
5. Console errors (should be zero)

**Backend Verification:**
- Check Supabase tables directly
- Review Edge Function logs
- Verify email delivery
- Test error handling

## 📝 Documentation Work

**Where to Document:**
- Client-facing: `PROJECT-NOTES/`
- Technical: `docs/`
- Agent context: `.agent/` (this folder)
- Feature-specific: Numbered folders (02-AppraisalForm/, etc.)

**Documentation Style:**
- Clear headings and structure
- Examples where helpful
- Links to related docs
- Keep it updated (no stale docs)

## 🎯 Persona-Specific Guidelines

### Implementation Agent
- Make changes
- Deploy to production
- Create deployment status document
- Wait for testing agent results
- Fix issues systematically

### Testing Agent
- Test production only
- Use Playwright MCP tools
- Check backend state (Supabase)
- Take screenshots of failures
- Write structured JSON results
- Give specific fix recommendations

### Backend Architect
- Supabase-first approach
- Design for scalability
- Consider RLS policies from start
- Database-first (never lose data)
- Edge Functions for serverless

### Frontend Developer
- Mobile-first responsive
- Shadcn/ui components preferred
- Tailwind CSS only
- Accessibility matters
- Performance optimization

## 🚨 Project-Specific Warnings

**DO NOT:**
- Break the working contact form
- Change email template to add colors
- Move company field away from phone field
- Test only on localhost
- Commit sensitive data
- Touch deployment configs

**DO:**
- Check PROJECT-NOTES/ before changes
- Test on production URL
- Verify in Supabase database
- Follow existing patterns
- Document significant changes
- Ask if uncertain about design decisions

## 💡 Ben's Preferences

- **Clarity**: Over cleverness
- **Simple**: Over complex
- **Working**: Over perfect
- **Direct**: Over diplomatic
- **Evidence**: Over assumptions

**Communication:**
- "This is done" > "I believe this should work"
- Show proof (screenshots, logs)
- Admit when uncertain
- Ask before major changes

**Organization:**
- Keep numbered folders (00-, 02-, 03-, 04-)
- Maintain PROJECT-NOTES/ structure
- Don't create files unless necessary
- Prefer editing over creating

---

**Personas Version**: 1.0
**Last Updated**: October 11, 2025
**Maintained By**: Ben Crowe
