# Valta Website - System Architecture

## 🏗️ High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Browser                       │
│                    (https://valta.ca)                       │
└────────────────┬───────────────────────────────────┬────────┘
                 │                                   │
                 │                                   │
         ┌───────▼────────┐                 ┌───────▼────────┐
         │   Next.js App   │                │  Static Assets │
         │  (Vercel Edge)  │                │   (Vercel CDN) │
         └───────┬────────┘                 └────────────────┘
                 │
                 │
         ┌───────▼─────────────────────────────────┐
         │          Supabase Backend               │
         │  ┌──────────────┐  ┌────────────────┐  │
         │  │  PostgreSQL  │  │  Edge Functions│  │
         │  │   Database   │  │   (Email, etc) │  │
         │  └──────────────┘  └────────────────┘  │
         └─────────────────────────────────────────┘
                           │
                           │
                    ┌──────▼──────┐
                    │  Resend API │
                    │   (Email)   │
                    └─────────────┘
```

## 🔧 Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: Sonner (toast)

### Backend
- **Database**: Supabase (PostgreSQL)
- **Serverless**: Supabase Edge Functions (Deno)
- **Email Service**: Resend API
- **Authentication**: Supabase Auth (not yet implemented)

### Infrastructure
- **Hosting**: Vercel
- **CDN**: Vercel Edge Network
- **Domain**: valta.ca (Namecheap DNS)
- **Version Control**: GitHub

## 📂 Project Structure

```
Valta-Website/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact form
│   │   ├── services/             # Service pages
│   │   └── request-appraisal/    # Appraisal form (planned)
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
│
├── components/                   # React components
│   ├── ui/                       # Shadcn/ui components
│   ├── forms/                    # Form components
│   └── layout/                   # Layout components
│
├── lib/                          # Utilities and helpers
│   ├── supabase.ts               # Supabase client
│   └── utils.ts                  # Utility functions
│
├── public/                       # Static assets
│   ├── images/                   # Images
│   └── icons/                    # Icons
│
├── supabase/                     # Supabase configuration
│   └── functions/                # Edge functions
│       └── send-contact-notification/
│
├── .testing/                     # Testing structure
├── .agent/                       # Agent context
├── docs/                         # Technical documentation
├── scripts/                      # Automation scripts
└── PROJECT-NOTES/                # Client documentation
```

## 🔄 Data Flow

### Contact Form Submission Flow

```
1. User fills form on /contact
   ↓
2. Client-side validation (React Hook Form)
   ↓
3. POST to /api/contact endpoint
   ↓
4. Save to contact_submissions table (Supabase)
   ↓
5. Trigger send-contact-notification Edge Function
   ↓
6. Send email via Resend API
   ↓
7. Return success to client
   ↓
8. Show toast notification + clear form
```

**Critical**: Database save happens BEFORE email send. If email fails, data is still preserved.

### Page Navigation Flow

```
1. User clicks link
   ↓
2. Next.js client-side navigation
   ↓
3. Fetch page component (if not cached)
   ↓
4. Render page
   ↓
5. Load images (lazy loaded via Next/Image)
```

## 💾 Database Schema

### Tables

#### contact_submissions
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  source_url TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Indexes:**
- `created_at` (for sorting recent submissions)
- `email` (for searching by contact)
- `status` (for filtering pending/processed)

#### appraisal_requests (Planned)
```sql
CREATE TABLE appraisal_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  -- Contact info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  -- Property details
  address TEXT NOT NULL,
  property_type TEXT NOT NULL,
  -- Additional fields TBD
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔐 Security Considerations

### Current State
- **RLS Policies**: Disabled (development mode)
- **API Keys**: Stored in environment variables
- **CORS**: Configured for valta.ca domain
- **Rate Limiting**: Vercel default limits

### Production TODO
- [ ] Enable RLS policies on all tables
- [ ] Implement rate limiting on forms
- [ ] Add CAPTCHA to prevent spam
- [ ] Set up monitoring/alerting
- [ ] Review and rotate API keys

## 🚀 Deployment Architecture

### Vercel Configuration
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x

### Environment Variables
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]

# Email (in Supabase Edge Function)
RESEND_API_KEY=[resend-key]
```

### Git Workflow
```
main branch
  ↓
Push to GitHub
  ↓
Vercel auto-deploy (~2-3 minutes)
  ↓
Production (https://valta.ca)
```

## 📊 Performance Optimizations

### Current Optimizations
1. **Next.js Image Component**: Automatic image optimization
2. **Server Components**: Reduce client-side JavaScript
3. **Code Splitting**: Automatic by Next.js
4. **Static Generation**: Where possible
5. **CDN Delivery**: Via Vercel Edge Network

### Future Optimizations
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Add image compression pipeline
- [ ] Optimize bundle size further
- [ ] Consider Service Worker for offline support

## 🔍 Monitoring & Observability

### Current Tools
- **Vercel Analytics**: Page views, performance metrics
- **Supabase Logs**: Database queries, edge function executions
- **Browser Console**: Client-side errors

### Future Additions
- [ ] Error tracking (Sentry or similar)
- [ ] Performance monitoring (Core Web Vitals)
- [ ] Uptime monitoring
- [ ] Form submission analytics

## 🎯 Scalability Considerations

### Current Capacity
- **Database**: Supabase free tier (500MB, sufficient for now)
- **Edge Functions**: 500K invocations/month
- **Bandwidth**: Vercel Pro tier (unlimited)

### Scaling Plan
1. **Database**: Upgrade Supabase tier if needed
2. **Edge Functions**: Optimize cold starts
3. **Caching**: Implement Redis if needed
4. **CDN**: Already handled by Vercel

## 🧪 Testing Strategy

### Manual Testing
- Local testing at localhost:3002
- Production testing at valta.ca
- Mobile device testing (375px, 768px, 1024px+)

### Automated Testing (Future)
- [ ] Unit tests (Jest)
- [ ] Integration tests (Playwright)
- [ ] E2E tests (Playwright MCP)
- [ ] Visual regression tests

### Test Environments
- **Local**: http://localhost:3002
- **Production**: https://valta.ca
- **No staging environment** (direct to production)

## 📝 API Endpoints

### Internal API Routes
```
POST /api/contact
  - Submit contact form
  - Body: { name, email, phone, company, message }
  - Returns: { success: boolean, data?: object }

POST /api/appraisal (Planned)
  - Submit appraisal request
  - Body: { ...property details }
  - Returns: { success: boolean, data?: object }
```

### Supabase Edge Functions
```
POST /send-contact-notification
  - Triggered by contact_submissions insert
  - Sends email via Resend
  - Returns: { success: boolean }
```

## 🔧 Development Workflow

### Local Development
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### Supabase Local Development
```bash
# Start Supabase locally
npx supabase start

# Deploy edge functions
npx supabase functions deploy send-contact-notification

# View logs
npx supabase functions logs send-contact-notification
```

## 📚 Integration Points

### Third-Party Services
- **Supabase**: Database, auth, edge functions
- **Resend**: Email delivery
- **Vercel**: Hosting, CDN, analytics
- **GitHub**: Version control, CI/CD

### Future Integrations
- [ ] Google Analytics
- [ ] CRM system (TBD)
- [ ] Payment processing (if needed)
- [ ] Document storage (for appraisal uploads)

---

**Architecture Version**: 1.0
**Last Updated**: October 11, 2025
**Next Review**: When major changes occur or quarterly
