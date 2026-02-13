# Contact Form Implementation Guide

## Form Location
**URL**: https://valta.ca/contact (production) | http://localhost:3002/contact (development)
**File**: `/app/contact/page.tsx`

## Current Implementation Status
✅ **COMPLETE AND WORKING**
- Database storage working
- Email notifications sending
- All fields implemented
- Testing verified

## Form Fields Structure

### Row 1 (Two columns)
- **Your Name** (required) - Text input
- **Email Address** (required) - Email input

### Row 2 (Two columns)
- **Phone Number** (optional) - Tel input
- **Company Name** (optional) - Text input

### Row 3 (Two columns)
- **Request Type** (optional) - Dropdown
  - Appraisal Request
  - General Inquiry
  - Consultation
  - Existing Client Support
  - Other
- **Property Type** (optional) - Dropdown
  - Multifamily
  - Self-Storage
  - Commercial
  - Industrial
  - Land
  - Other

### Row 4 (Full width)
- **Timeline** (optional) - Dropdown
  - Urgent (1-2 weeks)
  - Standard (2-3 weeks)
  - Flexible (4+ weeks)

### Row 5 (Full width)
- **Message** (required) - Textarea

## Data Flow

### 1. User Submits Form
```typescript
// Form submission handler in /app/contact/page.tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  // Save to database first (priority)
  const { data: submission, error: dbError } = await supabase
    .from('contact_submissions')
    .insert([formData])
    
  // Then send email notification (non-blocking)
  await supabase.functions.invoke('send-contact-notification', {
    body: formData
  })
}
```

### 2. Database Save
- Table: `contact_submissions`
- All fields saved including optional ones (as null if empty)
- Auto-generated: id, created_at
- Default values: status='submitted', source='website-contact-form'

### 3. Email Notification
- Function: `send-contact-notification`
- Recipient: bc@crowestudio.com (temporary)
- Subject: "Website Form Fill Notification - [Name]"
- Shows source: "submitted from valta.ca/contact"
- Includes timestamp in MST

## Success/Error Handling

### Success State
- Green success card shows
- "Thank You!" message
- Form resets
- Option to send another message

### Error State
- Red error alert shows
- Error message displayed
- Fallback phone number provided: (587) 801-5151
- Form data preserved for retry

## Email Template Features

### What's Included
- Clean, neutral gray design (no colors)
- Source URL at top (valta.ca/contact)
- Submission timestamp
- All form fields
- Company name footer

### What's NOT Included
- No emoji icons in header
- No red/blue colors
- No "URGENT" alerts
- No "Next Steps" section
- No patronizing instructions

## Testing the Form

### Manual Test
1. Go to http://localhost:3002/contact
2. Fill out form with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: (403) 555-1234
   - Company: Test Company Inc.
   - Request Type: Appraisal Request
   - Property Type: Multifamily
   - Timeline: Standard (2-3 weeks)
   - Message: Testing the contact form submission
3. Click "Send Message"
4. Verify success message appears
5. Check bc@crowestudio.com for email

### Automated Test
```bash
# Run the test script
node test-form.js
```

Output shows:
- Database save confirmation
- Email send confirmation
- Data verification
- Total submissions count

## Common Issues & Solutions

### Issue: Form shows "Submission Error"
**Solution**: Database table might not exist. Run:
```bash
node add-company-field.js
```

### Issue: Email not received
**Solution**: Check edge function logs:
1. Go to Supabase Dashboard
2. Navigate to Functions
3. Click on send-contact-notification
4. View logs for errors

### Issue: Form not submitting
**Solution**: Check browser console for errors. Common issues:
- Supabase connection failed
- Required fields empty
- Network timeout

## Code Locations

### Frontend Files
```
/app/contact/page.tsx          # Main contact form page
/components/ui/button.tsx      # Button component
/components/ui/input.tsx       # Input component
/components/ui/textarea.tsx    # Textarea component
/components/ui/select.tsx      # Select dropdown component
/lib/supabase.ts              # Supabase client configuration
```

### Backend Files
```
/supabase/functions/send-contact-notification/index.ts  # Email function
/supabase/migrations/20250925_create_contact_submissions.sql  # Database schema
```

### Testing Files
```
/test-form.js              # Automated test script
/add-company-field.js      # Database update script
```

## Maintenance Tasks

### Daily
- Check for new submissions in database
- Monitor email delivery success

### Weekly
- Review submission quality
- Check for spam/test submissions
- Export data for CRM if needed

### Monthly
- Clean up test submissions
- Review form conversion rates
- Check for UI/UX improvements

## Future Enhancements

### Planned Improvements
1. Add file upload capability for property documents
2. Implement CAPTCHA for spam prevention
3. Add form analytics tracking
4. Create admin dashboard for submissions
5. Add auto-responder email to submitter
6. Implement progressive form disclosure
7. Add real-time validation feedback

### DO NOT Change
- Database-first approach (always save before email)
- Clean email template (no colors/urgency)
- Source URL in emails (important for multi-form sites)
- Company field beside phone (layout decision)

## Production Deployment Checklist

- [ ] Verify database table exists in production
- [ ] Deploy edge function to production
- [ ] Update email recipient to clientcare@valta.ca (after domain verification)
- [ ] Enable RLS with proper policies
- [ ] Add rate limiting
- [ ] Implement server-side validation
- [ ] Set up monitoring and alerts
- [ ] Test form submission end-to-end
- [ ] Verify email delivery
- [ ] Document any production-specific settings