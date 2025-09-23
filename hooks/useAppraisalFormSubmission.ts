import { useState } from "react";
import { supabase, type FormData, type JobSubmission } from "@/lib/supabase";

interface ValidationErrors {
  [key: string]: string | undefined;
}

const validateForm = (formData: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Required fields validation
  if (!formData.clientFirstName?.trim()) errors.clientFirstName = "First name is required";
  if (!formData.clientLastName?.trim()) errors.clientLastName = "Last name is required";
  if (!formData.clientEmail?.trim()) {
    errors.clientEmail = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
    errors.clientEmail = "Please enter a valid email address";
  }
  if (!formData.clientPhone?.trim()) errors.clientPhone = "Phone number is required";
  if (!formData.propertyName?.trim()) errors.propertyName = "Property name is required";
  if (!formData.propertyType) errors.propertyType = "Property type is required";

  return errors;
};

export const useAppraisalFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const submitForm = async (formData: FormData): Promise<{ success: boolean; error?: string }> => {
    // Clear previous errors
    setErrors({});
    
    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return { success: false, error: "Please correct the errors in the form" };
    }

    setIsSubmitting(true);

    try {
      // Prepare submission data with resilient fallback approach
      // Core strategy: As long as we have an email, we can follow up
      const submissionData: Omit<JobSubmission, 'id' | 'created_at'> = {
        client_first_name: formData.clientFirstName || 'Not provided',
        client_last_name: formData.clientLastName || 'Not provided',
        client_email: formData.clientEmail, // This is validated, so it will always exist
        client_phone: formData.clientPhone || 'Not provided',
        client_title: formData.clientTitle || '',
        client_organization: formData.clientOrganization || '',
        client_address: formData.clientAddress || '',
        property_name: formData.propertyName || 'Not provided',
        property_address: formData.propertyAddress || '',
        property_type: formData.propertyType || null,
        intended_use: formData.intendedUse || null,
        // valuation_premises field doesn't exist in database - add to notes instead
        // This is the correct approach according to APR Dashboard field mapping
        asset_condition: formData.assetCondition || null,
        notes: formData.valuationPremises ? `Valuation Premises: ${formData.valuationPremises}\n\n${formData.additionalInfo || ''}` : (formData.additionalInfo || ''),
        status: "submitted",
      };

      // First attempt: Try to submit with all data
      let { data: jobData, error: saveError } = await supabase
        .from('job_submissions')
        .insert(submissionData)
        .select('*')
        .single();

      // If there's a database error, try a minimal submission with just critical fields
      if (saveError && formData.clientEmail) {
        console.error('Full submission error:', saveError);
        console.log('Attempting minimal submission with just critical fields...');
        
        // Minimal submission: Just the absolutely essential fields
        const minimalSubmission = {
          client_first_name: formData.clientFirstName || 'Contact',
          client_last_name: formData.clientLastName || 'Request',
          client_email: formData.clientEmail,
          client_phone: formData.clientPhone || '(587) 801-5151',
          client_title: '',
          client_organization: formData.clientOrganization || '',
          client_address: '',
          property_name: formData.propertyName || 'Property Inquiry',
          property_address: formData.propertyAddress || 'Address to be provided',
          property_type: null,
          intended_use: null,
          asset_condition: null,
          notes: `IMPORTANT: Form submission encountered issues. Please follow up with client.
          
Original form data:
- Name: ${formData.clientFirstName} ${formData.clientLastName}
- Phone: ${formData.clientPhone}
- Property: ${formData.propertyName}
- Property Type: ${formData.propertyType}
- Intended Use: ${formData.intendedUse}
- Valuation Premises: ${formData.valuationPremises}
- Asset Condition: ${formData.assetCondition}
- Additional Info: ${formData.additionalInfo}`,
          status: "submitted",
        };

        // Try minimal submission
        const minimalResult = await supabase
          .from('job_submissions')
          .insert(minimalSubmission)
          .select('*')
          .single();
          
        jobData = minimalResult.data;
        saveError = minimalResult.error;
      }

      if (saveError) {
        console.error('All submission attempts failed:', saveError);
        // Never show database errors to users
        setErrors({ submit: 'There was an issue submitting your request. Please try again or contact us at (587) 801-5151.' });
        setIsSubmitting(false);
        return { success: false, error: 'Submission failed. Please contact us for assistance.' };
      }

      if (!jobData) {
        throw new Error('No data returned from submission');
      }

      // Handle file uploads if any
      if (formData.files && formData.files.length > 0) {
        for (const file of formData.files) {
          const filePath = `${jobData.id}/${file.name}`;
          
          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from('job-files')
            .upload(filePath, file);

          if (uploadError) {
            console.error('File upload error:', uploadError);
            // Continue with other files even if one fails
            continue;
          }

          // Record file reference in database
          await supabase.from('job_files').insert({
            job_id: jobData.id,
            file_name: file.name,
            file_path: filePath,
            file_type: file.type,
            file_size: file.size,
          });
        }
      }

      setSubmissionId(jobData.id);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      return { success: true };

    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
      return { 
        success: false, 
        error: "We're sorry, there was an issue submitting your request. Please try again or contact us at (587) 801-5151." 
      };
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmissionId(null);
    setErrors({});
  };

  return {
    submitForm,
    resetForm,
    isSubmitting,
    isSubmitted,
    submissionId,
    errors,
    setErrors,
  };
};