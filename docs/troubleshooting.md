# Valta Website - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Contact Form Issues

#### Issue: Form won't submit
**Symptoms:**
- Form appears to hang
- No success or error message
- Console shows network error

**Solutions:**
1. **Check internet connection**
   ```bash
   ping supabase.co
   ```

2. **Check Supabase status**
   - Visit https://status.supabase.com
   - Check if service is operational

3. **Check browser console**
   - Open DevTools (F12)
   - Look for error messages
   - Common: CORS errors, network timeout

4. **Verify environment variables**
   ```bash
   # Check .env.local exists
   cat .env.local

   # Should contain:
   # NEXT_PUBLIC_SUPABASE_URL=...
   # NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

5. **Test database connection**
   ```bash
   # From project root
   node -e "
   require('dotenv').config({ path: '.env.local' });
   const { createClient } = require('@supabase/supabase-js');
   const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   );
   supabase.from('contact_submissions').select('count').then(console.log);
   "
   ```

#### Issue: Form submits but no email arrives
**Symptoms:**
- Success message displays
- Data appears in database
- No email in inbox or spam

**Solutions:**
1. **Check spam folder first**

2. **Verify Edge Function logs**
   ```bash
   # Go to Supabase Dashboard
   # Navigate to: Edge Functions > send-contact-notification > Logs
   # Look for errors
   ```

3. **Check Resend API status**
   - Visit https://resend.com/status
   - Check API key is valid

4. **Test Edge Function manually**
   ```bash
   npx supabase functions invoke send-contact-notification \
     --data '{"name":"Test","email":"test@example.com","message":"Test"}'
   ```

5. **Verify email recipient**
   - Check `/supabase/functions/send-contact-notification/index.ts`
   - Line ~252: `to: ['bc@crowestudio.com']`
   - Ensure email address is correct

#### Issue: Duplicate form submissions
**Symptoms:**
- Single form submission creates multiple database entries
- Multiple emails sent

**Solutions:**
1. **Check for double-click submission**
   - Verify submit button has loading state
   - Check form validation prevents multiple submissions

2. **Review code for multiple handlers**
   ```tsx
   // Should only have ONE onSubmit handler
   <form onSubmit={handleSubmit(onSubmit)}>
   ```

3. **Check database triggers**
   - Ensure only one trigger exists for email sending
   - Review Supabase Database > Triggers

---

### Deployment Issues

#### Issue: Changes not appearing on production
**Symptoms:**
- Code pushed to GitHub
- Vercel shows "Ready"
- Production site unchanged

**Solutions:**
1. **Hard refresh browser**
   - Mac: Cmd + Shift + R
   - Windows: Ctrl + Shift + R
   - Or use incognito mode

2. **Check deployment matches commit**
   ```bash
   # In Vercel Dashboard
   # Verify deployment SHA matches your latest commit
   git log -1 --oneline
   ```

3. **Check build logs**
   - Vercel Dashboard > Deployments > [latest] > Build Logs
   - Look for errors during build

4. **Verify correct project**
   ```bash
   cat .vercel/project.json
   # Should show: "projectId": "..." for valta-website-staging
   ```

5. **Clear Vercel cache**
   - Vercel Dashboard > Settings > General
   - Click "Clear Build Cache & Redeploy"

#### Issue: Build fails on Vercel
**Symptoms:**
- Deployment status shows "Error"
- Build logs show compilation errors
- TypeScript or ESLint errors

**Solutions:**
1. **Build locally first**
   ```bash
   npm run build
   # Fix any errors before pushing
   ```

2. **Check for missing dependencies**
   ```bash
   npm install
   # Ensure package-lock.json is committed
   ```

3. **Review build logs**
   ```bash
   # In Vercel Dashboard
   # Look for specific error message
   # Common: TypeScript errors, missing env vars
   ```

4. **Verify environment variables**
   - Vercel Dashboard > Settings > Environment Variables
   - Ensure all required vars are set
   - Match variable names exactly (case-sensitive)

---

### Database Issues

#### Issue: Can't connect to Supabase
**Symptoms:**
- Console error: "Failed to fetch"
- Database queries timeout
- Edge functions fail

**Solutions:**
1. **Check Supabase project status**
   - Dashboard should show "Healthy"
   - If "Paused", wake project

2. **Verify API keys**
   ```bash
   # Check .env.local
   # Verify keys match Supabase Dashboard > Settings > API
   ```

3. **Check RLS policies**
   ```sql
   -- If RLS enabled, verify policies allow access
   -- Dashboard > Authentication > Policies
   ```

4. **Test direct connection**
   ```bash
   curl https://[your-project-id].supabase.co/rest/v1/contact_submissions \
     -H "apikey: [your-anon-key]" \
     -H "Authorization: Bearer [your-anon-key]"
   ```

#### Issue: Data not saving to database
**Symptoms:**
- Form submits successfully (UI)
- No error messages
- Data missing in database

**Solutions:**
1. **Check table name spelling**
   ```typescript
   // Common typo
   supabase.from('contact_submission') // WRONG (missing 's')
   supabase.from('contact_submissions') // CORRECT
   ```

2. **Verify required fields**
   ```sql
   -- Check table schema
   -- Dashboard > Table Editor > contact_submissions > Schema
   -- Ensure NOT NULL fields are provided
   ```

3. **Check for silent errors**
   ```typescript
   const { data, error } = await supabase.from('...').insert(...);
   console.log('Error:', error); // Add this!
   ```

4. **Verify RLS policies**
   - If RLS enabled, policies must allow INSERT
   - Dashboard > Authentication > Policies

---

### Image Issues

#### Issue: Images not loading
**Symptoms:**
- Broken image icons
- 404 errors in console
- Slow page load

**Solutions:**
1. **Check file path**
   ```tsx
   // Correct paths
   <Image src="/images/hero.jpg" ... />  // Public folder
   <Image src={require('@/public/images/hero.jpg')} ... />

   // Wrong
   <Image src="images/hero.jpg" ... />  // Missing leading slash
   ```

2. **Verify file exists**
   ```bash
   ls -la public/images/
   # Check file name matches exactly (case-sensitive)
   ```

3. **Check image format**
   - Next.js Image supports: JPG, PNG, WebP, SVG, GIF
   - Verify not using unsupported format

4. **Clear .next cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Performance Issues

#### Issue: Slow page loads
**Symptoms:**
- Pages take >3 seconds to load
- Lighthouse score < 70
- Users report slowness

**Solutions:**
1. **Check image sizes**
   ```bash
   # Images should be optimized
   # Use tools: ImageOptim, TinyPNG, Squoosh
   du -sh public/images/*
   ```

2. **Analyze bundle size**
   ```bash
   npm run build
   # Review output for large bundles
   # Look for opportunities to code split
   ```

3. **Check for client-side heavy operations**
   - Move expensive operations to server components
   - Use React.memo for expensive components

4. **Run Lighthouse audit**
   ```bash
   # In Chrome DevTools
   # Lighthouse > Generate Report
   # Focus on: LCP, FID, CLS
   ```

---

### Local Development Issues

#### Issue: npm run dev fails
**Symptoms:**
- Dev server won't start
- Port already in use
- Module not found errors

**Solutions:**
1. **Check if port 3002 is in use**
   ```bash
   lsof -i :3002
   # Kill process if needed
   kill -9 [PID]
   ```

2. **Clear node_modules**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check Node version**
   ```bash
   node --version
   # Should be 18.x or higher
   # Use nvm to switch if needed
   ```

4. **Verify .env.local exists**
   ```bash
   ls -la .env.local
   # Copy from .env.example if missing
   ```

---

## 📞 When to Escalate

Contact Ben Crowe (bc@crowestudio.com) if:
- Production site is completely down (>5 minutes)
- Data loss suspected
- Security issue discovered
- Multiple systems failing simultaneously
- Issue not covered in this guide

---

## 🔧 Useful Commands

```bash
# Restart everything
killall node
npm run dev

# Check what's running
lsof -i :3002

# Test production build locally
npm run build && npm start

# View Supabase logs
npx supabase functions logs send-contact-notification --follow

# Deploy edge function
npx supabase functions deploy send-contact-notification

# Check git status
git status
git log --oneline -5

# View environment variables (never commit this output!)
cat .env.local

# Test database connection
psql [connection-string-from-supabase]
```

---

**Troubleshooting Guide Version**: 1.0
**Last Updated**: October 11, 2025
**Maintained By**: Ben Crowe
