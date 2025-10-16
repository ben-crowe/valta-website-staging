# Careers Page Implementation Plan

## Overview
Create a new "Careers" page with job listings and application form for recruiting Appraisal Assistants and AACI Candidates.

---

## 1. Navigation Updates

### Header Menu Addition
- **Location**: Add "Careers" menu item in site header
- **Position**: Between "News/Blog" and "Contact"
- **Route**: `/careers`
- **Files to Update**:
  - `/components/site-header.tsx` - Desktop navigation
  - `/components/site-header.tsx` - Mobile navigation (Sheet menu)

### Footer Menu Addition
- **Location**: Add "Careers" link in footer
- **Section**: Quick Links column
- **Files to Update**:
  - `/components/site-footer.tsx`

---

## 2. Page Structure

### Hero Section
- **Hero Image**: `Career Posting.jpg` (already uploaded)
- **Path**: `/public/images/01-updated-images/Career Posting.jpg`
- **Headline**: "Careers" or "Join Our Team"
- **Subheadline**: "Join a team built by developers and investors, for developers and investors. We move fast, solve hard problems, and value real‑world judgment."

### Open Roles Section
- **Section Title**: "Open Roles"
- **Job Listings**:
  1. **Appraisal Assistant Job - Calgary, AB**
     - Brief description (can be placeholder or expanded)
     - Responsibilities/requirements (optional)
  2. **AACI Candidate Job - Calgary, AB**
     - Brief description (can be placeholder or expanded)
     - Responsibilities/requirements (optional)

### Application Form Section
- **Section Title**: "Apply"
- **Intro Text**: "Use the form below to submit your resume."
- **Form Fields**:
  - First Name * (required)
  - Last Name * (required)
  - Email * (required)
  - Phone (optional)
  - LinkedIn URL (optional)
  - Portfolio URL (optional)
  - Resume Upload * (required) - File upload field
  - "How did you hear about us?" (dropdown or text field)
  - Submit button

---

## 3. Technical Implementation

### New Files to Create
- `/app/careers/page.tsx` - Main careers page component

### Form Handling Options
1. **Option A**: Use existing Supabase edge function pattern (like contact form)
2. **Option B**: Create new edge function specifically for career applications
3. **Option C**: Simple client-side form with email submission

**Recommended**: Option B - Create dedicated career application handler that:
- Stores applications in Supabase database
- Sends notification email to HR/admin
- Handles file upload for resume (store in Supabase Storage)

### Database Schema (if using Supabase)
```sql
CREATE TABLE career_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  linkedin_url TEXT,
  portfolio_url TEXT,
  resume_url TEXT NOT NULL,
  how_heard TEXT,
  position_applied TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 4. Design Considerations

### Layout Style
- Match existing site design patterns
- Use similar hero section style as other pages
- Card-based job listings
- Clean, professional form design
- Responsive mobile layout

### Visual Elements
- Hero image with overlay for text readability
- Job cards with hover effects
- Form validation feedback
- Success/error messages for submission
- Loading states during file upload

---

## 5. Content Requirements

### Job Descriptions (Need from Client)
- Detailed job descriptions for each role
- Responsibilities and requirements
- Qualifications
- Benefits/perks (optional)
- Salary range (optional)

### Form Submission Behavior
- Success message after submission
- Email confirmation to applicant
- File size limits for resume upload (suggest 5MB max)
- Accepted file formats (PDF, DOC, DOCX)

---

## 6. Implementation Steps

1. **Navigation Updates** (Quick - 15 min)
   - Add menu items to header and footer
   
2. **Page Creation** (30-45 min)
   - Create `/app/careers/page.tsx`
   - Build hero section with image
   - Create job listings section
   - Build application form UI
   
3. **Form Functionality** (45-60 min)
   - Set up file upload handling
   - Create form validation
   - Implement submission logic
   - Add success/error states
   
4. **Backend Setup** (30-45 min if needed)
   - Create Supabase table (if storing applications)
   - Set up file storage bucket
   - Create edge function for form handling
   - Configure email notifications

5. **Testing** (20-30 min)
   - Test form submission
   - Test file upload
   - Test email notifications
   - Test responsive design
   - Test validation

---

## 7. Questions for Client

1. **Job Descriptions**: Do you have detailed job descriptions, or should we use placeholder content for now?
2. **Application Storage**: Where should applications be stored? (Supabase database, email only, or third-party ATS?)
3. **File Storage**: Should resumes be stored in Supabase Storage or sent as email attachments?
4. **Notification Email**: What email should receive application notifications?
5. **Additional Positions**: Will there be more positions added in the future? Should we build for scalability?

---

## 8. Estimated Completion

- **Navigation Updates**: 15 minutes
- **Basic Page Structure**: 30 minutes
- **Form UI**: 30 minutes
- **Form Functionality**: 45 minutes (simple email) or 90 minutes (full Supabase integration)
- **Testing & Polish**: 30 minutes

**Total**: 2-3 hours depending on backend complexity

---

**Ready to proceed with implementation once client confirms:**
- Job description content (or use placeholders)
- Backend storage preference
- Notification email address


