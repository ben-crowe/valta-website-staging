# Valta Property Valuations 

Professional commercial real estate appraisal services across Western Canada.

## 📋 About

Built by developers, for developers. We understand both sides of every transaction because we've been there ourselves.

### Services
- **Multifamily Properties** - Investment-focused appraisals with income approach emphasis
- **Self-Storage Facilities** - Operations-focused valuations with business understanding
- **Commercial Properties** - Comprehensive corporate approach for office, retail, and industrial

### Key Features
- 2-3 week delivery guarantee (vs industry standard 4-6 weeks)
- AACI certified professionals
- Lender-ready reports upon delivery
- Serving Western Canada from Calgary base

---

## 🚀 Quick Start

### First-Time Setup
```bash
# Run setup script
./scripts/setup.sh

# Or manually:
npm install
cp .env.example .env.local  # Add your API keys
npm run dev
```

### Development Commands
```bash
# Start development server (localhost:3002)
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint

# Deploy to staging
./scripts/deploy-staging.sh
```

---

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend API via Supabase Edge Functions
  - Contact form: `send-contact-notification`
  - Appraisal form: `send-appraisal-request`
- **Deployment**: Vercel (auto-deploy from main branch)
- **Testing**: Two-agent protocol with Playwright MCP

---

## 📁 Project Structure

```
Valta-Website/
├── .testing/              ← Testing structure (two-agent protocol)
│   ├── QUICKSTART.md      ← Quick testing reference
│   ├── test-protocol.md   ← Project-specific tests
│   ├── sessions/          ← Test cycle results
│   └── screenshots/       ← Visual evidence
│
├── .agent/                ← Agent-specific context
│   ├── context.md         ← Project context for agents
│   ├── personas.md        ← Project-specific personas
│   ├── memory.md          ← Lessons learned
│   ├── deployment-context.md  ← Deployment quirks
│   ├── patterns.json      ← Code patterns
│   └── status.json        ← Project status
│
├── docs/                  ← Technical documentation
│   ├── architecture.md    ← System design
│   ├── troubleshooting.md ← Common issues & fixes
│   ├── deployment.md      ← Deployment procedures
│   ├── domain-switching.md ← DNS configuration
│   ├── archive/           ← Historical change notes
│   └── content/           ← Content audits & reports
│
├── scripts/               ← Automation scripts
│   ├── setup.sh           ← First-time setup
│   ├── deploy-staging.sh  ← Deploy to staging
│   └── ...other scripts
│
├── PROJECT-NOTES/         ← Client documentation
│   ├── README.md          ← Start here!
│   ├── CLIENT-PREFERENCES.md
│   ├── DESIGN-DECISIONS.md
│   ├── CHANGE-REQUESTS.md
│   └── COMPLETED-WORK.md
│
├── 00-Archive/            ← Old testing & templates
├── 02-AppraisalForm/      ← Appraisal form planning
├── 03-LeadForm-ContactForm/  ← Contact form docs
├── 04-Image-Graphics/     ← Image management
│
├── app/                   ← Next.js App Router
├── components/            ← React components
├── lib/                   ← Utilities
├── public/                ← Static assets
└── supabase/              ← Backend functions
```

---

## 🎯 Key Features

### ✅ Contact Form (Live)
- URL: `/contact`
- Database: Supabase `contact_submissions` table
- Email: bc@crowestudio.com (temporary)
- Documentation: `03-LeadForm-ContactForm/`

### ✅ Appraisal Request Form (Live)
- URL: `/request-appraisal/intake`
- Database: Supabase `job_submissions` table
- Email: Resend API via Edge Function (bc@crowestudio.com)
- Integration: APR Dashboard v3 for job management
- Test Mode: Add `?test=true` for [TEST] prefix emails
- Status: Production (email debugging in progress)

---

## 📚 Documentation

### For New Developers
1. **Start Here**: `docs/architecture.md` - System overview
2. **Setup**: Run `./scripts/setup.sh`
3. **Context**: Read `.agent/context.md` for project context
4. **Testing**: See `.testing/QUICKSTART.md`

### For Agents
1. **Context**: `.agent/context.md` - Project details
2. **Personas**: `.agent/personas.md` - Project-specific configs
3. **Memory**: `.agent/memory.md` - Lessons learned
4. **Testing**: `.testing/test-protocol.md` - Test procedures

### For Clients
1. **Overview**: `PROJECT-NOTES/README.md`
2. **Preferences**: `PROJECT-NOTES/CLIENT-PREFERENCES.md`
3. **Design**: `PROJECT-NOTES/DESIGN-DECISIONS.md`
4. **Changes**: `PROJECT-NOTES/CHANGE-REQUESTS.md`

---

## 🧪 Testing

This project uses the **two-agent testing protocol**:

**Implementation Agent:**
- Makes changes
- Deploys to production
- Waits for test results

**Testing Agent:**
- Tests production (https://valta.ca)
- Uses Playwright MCP tools
- Reports structured results

**Quick Test:**
```bash
# Test contact form locally
cd .testing/manual-tests
node test-dropdown.js
```

**Full Protocol:**
- Master: `/Users/bencrowe/Development/_Testing-w-Playwright/MASTER-TESTING-PROTOCOL.md`
- Project-specific: `.testing/test-protocol.md`

---

## 🚀 Deployment

### Automatic Deployment
```bash
# Push to main branch
git add .
git commit -m "Your changes"
git push

# Vercel auto-deploys (~2-3 minutes)
# Check: https://vercel.com/dashboard
```

### Manual Deployment
```bash
# Deploy to staging
./scripts/deploy-staging.sh

# Deploy edge functions
npx supabase functions deploy send-contact-notification
npx supabase functions deploy send-appraisal-request
```

**Production URL:** https://valta.ca

---

## 🔐 Environment Variables

Required in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://ngovnamnjmexdpjtcnky.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
```

Get keys from: [Supabase Dashboard](https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/settings/api)

---

## 🚨 Troubleshooting

See `docs/troubleshooting.md` for:
- Contact form issues
- Deployment problems
- Database connection errors
- Performance issues
- Local development issues

**Quick Fixes:**
```bash
# Restart dev server
npm run dev

# Clear cache
rm -rf .next
npm run dev

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Contact & Support

### Company Information
- **Website**: https://valta.ca
- **Email**: clientcare@valta.ca
- **Phone**: (587) 801-5151
- **Location**: #300-4838 Richard Road SW, Calgary, AB T3E 6L1

### Development Support
- **Developer**: Ben Crowe
- **Email**: bc@crowestudio.com
- **Issues**: Check `docs/troubleshooting.md` first

### Key Resources
- **Supabase Dashboard**: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub**: ben-crowe/valta-website-staging

---

## 📖 Additional Resources

### Template & Standards
This project follows the master template:
`/Users/bencrowe/Development/_Project-Template-Master/`

### Testing Protocol
Two-agent testing workflow:
`/Users/bencrowe/Development/_Testing-w-Playwright/MASTER-TESTING-PROTOCOL.md`

### Memory System
Project memories stored in:
- `.agent/memory.md` (project-specific)
- `/Users/bencrowe/Documents/Vault/Dev.Proj/Core-Dev-Environment/03-Memory-Database/GOLDEN_MEMORIES.md` (global)

---

## 🎯 Project Status

**Current Phase:** Active production website with ongoing enhancements

**Recent Updates (October 2025):**
- ✅ Implemented appraisal request form with email notifications (Oct 17)
- ✅ Added APR Dashboard integration for job management (Oct 17)
- ✅ Fixed dashboard deep linking (React Router routing) (Oct 17)
- ✅ Refactored project structure using master template
- ✅ Added `.testing/` structure for two-agent workflow
- ✅ Created `.agent/` context for agents
- ✅ Organized documentation into `docs/`
- ✅ Consolidated scripts into `scripts/`

**See Also:**
- `PROJECT-NOTES/COMPLETED-WORK.md` - Detailed change log
- `.agent/status.json` - Current project status
- `.agent/memory.md` - Lessons learned

---

© 2024-2025 Valta Property Valuations. All rights reserved.
