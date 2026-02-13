# Valta Website Form Fields Documentation

**IMPORTANT**: This form must always match Section 1 of the APR Dashboard. The APR Dashboard is the source of truth. If any changes are made to Section 1 in the APR Dashboard, this form must be updated accordingly.

---

## Form Field Structure

### **Section 1: Client Information**

1. **First Name** *(REQUIRED)*
   - Text input field
   - Critical field for client identification

2. **Last Name** *(REQUIRED)*
   - Text input field
   - Critical field for client identification

3. **Title**
   - Text input field
   - Examples: CEO, Property Manager, Owner, Director

4. **Organization**
   - Text input field
   - Company or organization name

5. **Address**
   - Text input field
   - Client's business address

6. **Phone** *(REQUIRED)*
   - Formatted phone input field
   - Auto-formats as: (XXX) XXX-XXXX
   - Critical field for client contact

7. **Email** *(REQUIRED)*
   - Email input field with validation
   - Critical field for client contact

---

### **Section 2: Property & Job Information**

8. **Property Name**
   - Text input field
   - Name or identifier of the property

9. **Property Address**
   - Text input field
   - Full address of the property to be appraised

10. **Property Type**
    - Dropdown selection:
      - Multifamily
      - Office
      - Retail
      - Industrial
      - Mixed Use
      - Hospitality
      - Healthcare
      - Self Storage
      - Land
      - Special Purpose

11. **Intended Use**
    - Dropdown selection:
      - Financing/Refinancing
      - Acquisition
      - Disposition
      - Insurance
      - Litigation
      - Estate Planning
      - Consulting
      - Portfolio Review
      - Internal Valuation

12. **Asset Current Condition**
    - Dropdown selection:
      - Excellent
      - Very Good
      - Good
      - Fair
      - Poor

13. **Additional Information**
    - Text area (multi-line)
    - For any additional details or special instructions

---

### **Section 3: Documents Upload**

14. **File Upload**
    - Optional file upload
    - Accepts multiple files
    - Supported formats: PDF, Word, Excel, Images
    - Suggested documents:
      - Full Property Details or Prior Appraisal
      - Proforma
      - Unit Mix (MF/SS) or Rent Roll (Retail/Office/Industrial)
      - Operating Expenses (1-3 Years Historical and Budget)
      - Drawings DP or BP (New Developments only)

---

## Critical Information Policy

**Only 4 fields are marked as REQUIRED** to ensure we can always contact the client:
- First Name
- Last Name
- Email
- Phone

All other fields are optional to provide a better user experience and not create unnecessary barriers to submission. The appraisers can follow up for any missing information using the provided contact details.

---

## Maintenance Notes

- **Source of Truth**: APR Dashboard Section 1
- **Updates**: Any changes to the APR Dashboard Section 1 must be reflected in this form
- **Phone Formatting**: Phone numbers are auto-formatted for better readability
- **Validation**: Email validation ensures proper format
- **Database Mapping**: Form fields map to `job_submissions` table in Supabase

---

*Last Updated: December 2024*
*Form Version: 1.0 - Aligned with APR Dashboard*