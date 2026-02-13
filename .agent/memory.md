# Valta Website - Project Memories

This file captures lessons learned, working patterns, and important decisions specific to this project.

## 🧠 Lessons Learned

### September 2025: Contact Form Implementation

**Lesson**: Database-first approach prevents data loss
- **Context**: Implemented contact form with email notifications
- **Discovery**: Email delivery can fail (spam filters, API issues, DNS)
- **Solution**: Always save to database first, then send email
- **Result**: Zero data loss even when email service has issues

**Lesson**: Plain email templates build trust
- **Context**: Client requested removal of colors and urgency language
- **Discovery**: Professional services prefer neutral, calm communications
- **Solution**: Plain text or minimal HTML, neutral grays only
- **Result**: Client happy, more professional appearance

**Lesson**: Form field placement matters
- **Context**: Client wanted company field beside phone field
- **Discovery**: Not a technical requirement - aesthetic preference
- **Solution**: Two-column layout on desktop, single column mobile
- **Result**: Design decision documented for future reference

### September 2025: Content Updates

**Lesson**: Master document is source of truth
- **Context**: Content discrepancies between pages
- **Discovery**: Multiple content sources led to inconsistencies
- **Solution**: Single master document for all content
- **Result**: Comprehensive content audit and alignment

**Lesson**: Numbered folders work well
- **Context**: Started using 00-Archive, 02-AppraisalForm, etc.
- **Discovery**: Easy to navigate, clear organization
- **Solution**: Continue numbered folder pattern
- **Result**: Better project organization

### September 2025: Deployment Configuration

**Lesson**: Vercel project mismatch caused confusion
- **Context**: Local directory deploying to wrong Vercel project
- **Discovery**: .vercel/project.json determines deployment target
- **Solution**: Verified correct project configuration
- **Result**: Documented in CRITICAL-PROJECT-NOTE.md (now .agent/deployment-context.md)

## ✅ Working Patterns

### Email Notification Pattern
```typescript
// 1. Save to database first
const { data, error } = await supabase
  .from('contact_submissions')
  .insert(formData);

// 2. Then send email (if DB save succeeded)
if (!error) {
  await sendEmailNotification(data);
}

// 3. Return success even if email fails
return { success: true, data };
```

**Why**: Database is primary, email is secondary notification.

### Form Success Pattern
```typescript
// 1. Show toast notification immediately
toast.success('Message sent!');

// 2. Clear form
form.reset();

// 3. Optional: Redirect or show confirmation
router.push('/thank-you');
```

**Why**: Instant user feedback while backend processes.

### Testing Pattern
```bash
# 1. Local testing
npm run dev
# Test at localhost:3002

# 2. Deploy
git add . && git commit -m "..." && git push

# 3. Wait for Vercel
# Check dashboard for "Ready" status

# 4. Test production
# Open https://valta.ca
# Use Playwright MCP or manual testing

# 5. Verify backend
# Check Supabase tables directly
```

**Why**: Catches issues that only appear in production.

## 🚨 Critical Decisions

### Decision: Database-First Approach
- **Date**: September 2025
- **Decision**: Always save to database before sending email
- **Rationale**: Email delivery can fail, database is reliable
- **Impact**: Zero data loss from contact form submissions

### Decision: Plain Email Templates
- **Date**: September 2025
- **Decision**: No colors, no urgency language in emails
- **Rationale**: Professional services need calm, trustworthy communication
- **Impact**: Client satisfaction, better brand alignment

### Decision: Keep Numbered Folders
- **Date**: September 2025
- **Decision**: Continue using 00-, 02-, 03-, 04- prefix pattern
- **Rationale**: Easy navigation, clear organization
- **Impact**: Better project structure than standard conventions

### Decision: PROJECT-NOTES/ for Client Docs
- **Date**: September 2025
- **Decision**: Keep PROJECT-NOTES/ separate from docs/
- **Rationale**: Client-facing vs technical documentation
- **Impact**: Clear separation of concerns

### Decision: Separate Testing Structure
- **Date**: October 2025
- **Decision**: Add .testing/ folder with two-agent protocol
- **Rationale**: Systematic testing approach across projects
- **Impact**: Better test organization and evidence collection

## 🔧 Technical Discoveries

### Supabase Edge Functions
- **Discovery**: Edge functions have 30-second timeout
- **Impact**: Email sending must be fast, handle timeouts gracefully
- **Solution**: Use async/await with try-catch for email operations

### Next.js Image Component
- **Discovery**: Automatic optimization reduces page load significantly
- **Impact**: Use Next/Image for all images, not raw img tags
- **Solution**: Convert all images to use Next.js Image component

### Vercel Auto-Deploy
- **Discovery**: Main branch auto-deploys (~2-3 minutes)
- **Impact**: No manual deployment needed, but must wait for completion
- **Solution**: Check Vercel dashboard before testing production

### Mobile Viewport Testing
- **Discovery**: Many issues only appear on mobile
- **Impact**: Desktop testing alone is insufficient
- **Solution**: Always test 375px (mobile), 768px (tablet), 1024px+ (desktop)

## 📝 Code Patterns That Work

### Form Component Pattern
```tsx
'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ContactForm() {
  const form = useForm();

  const onSubmit = async (data) => {
    try {
      // Save to database
      const result = await submitToDatabase(data);

      // Show success
      toast.success('Message sent!');
      form.reset();
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  return <form onSubmit={form.handleSubmit(onSubmit)}>...</form>;
}
```

### Supabase Query Pattern
```typescript
const { data, error } = await supabase
  .from('table_name')
  .insert(payload)
  .select()
  .single();

if (error) {
  console.error('Database error:', error);
  throw new Error('Failed to save');
}

return data;
```

### Edge Function Pattern
```typescript
// /supabase/functions/function-name/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  try {
    const body = await req.json();

    // Do work here
    const result = await doSomething(body);

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});
```

## 🎯 Future Considerations

### Appraisal Form Implementation
- Learn from contact form success
- Use same database-first pattern
- Keep email templates plain
- Consider multi-step form for better UX

### Email Domain Verification
- Switch from bc@crowestudio.com to clientcare@valta.ca
- Will require DNS verification
- Test thoroughly before switching
- Keep fallback in place

### RLS Policies for Production
- Currently disabled for development ease
- Need to implement before public launch
- Test policies thoroughly
- Document policy rules

### Performance Optimization
- Image optimization is working well
- Consider CDN for faster delivery
- Monitor Lighthouse scores
- Keep bundle sizes small

## 📚 Reference Materials

### Useful Documentation
- Next.js 14 App Router docs
- Supabase JavaScript client docs
- Tailwind CSS docs
- Shadcn/ui component examples

### External Resources
- Vercel deployment dashboard
- Supabase project dashboard
- GitHub repository
- Resend API documentation

---

**Memory Version**: 1.0
**Last Updated**: October 11, 2025
**Next Review**: After each major feature implementation
