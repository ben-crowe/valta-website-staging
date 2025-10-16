import { useState } from "react";
import { supabase, type FormData, type JobSubmission } from "@/lib/supabase";

interface ValidationErrors {
  [key: string]: string | undefined;
}

const validateForm = (formData: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Required fields
  if (!formData.clientFirstName?.trim()) errors.clientFirstName = "First name is required";
  if (!formData.clientLastName?.trim()) errors.clientLastName = "Last name is required";
  if (!formData.clientEmail?.trim()) {
    errors.clientEmail = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
    errors.clientEmail = "Please enter a valid email address";
  }
  if (!formData.clientPhone?.trim()) {
    errors.clientPhone = "Phone number is required";
  } else if (!/^[\d\s()-]+$/.test(formData.clientPhone) || formData.clientPhone.replace(/\D/g, '').length < 10) {
    errors.clientPhone = "Please enter a valid phone number";
  }
  if (!formData.propertyAddress?.trim()) {
    errors.propertyAddress = "Property address is required";
  }

  return errors;
};

export const useAppraisalFormSubmission = (isTestMode: boolean = false) => {
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
        valuation_premises: formData.valuationPremises || null,
        asset_condition: formData.assetCondition || null,
        notes: formData.additionalInfo || '',
        same_as_client_contact: formData.sameAsClientContact || false,
        property_contact_first_name: formData.propertyContactFirstName || null,
        property_contact_last_name: formData.propertyContactLastName || null,
        property_contact_email: formData.propertyContactEmail || null,
        property_contact_phone: formData.propertyContactPhone || null,
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
          // Sanitize filename: replace spaces with underscores, remove special characters
          const sanitizedFilename = file.name
            .replace(/\s+/g, '_')  // Replace spaces with underscores
            .replace(/[^a-zA-Z0-9._-]/g, '');  // Remove special characters except . _ -

          const filePath = `${jobData.id}/${sanitizedFilename}`;

          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from('job-files')
            .upload(filePath, file);

          if (uploadError) {
            console.error('File upload error:', uploadError);
            // Continue with other files even if one fails
            continue;
          }

          // Record file reference in database (use original name for display)
          await supabase.from('job_files').insert({
            job_id: jobData.id,
            file_name: file.name,  // Keep original name for display
            file_path: filePath,   // Use sanitized path for storage
            file_type: file.type,
            file_size: file.size,
          });
        }
      }

      // Send email notification to team
      try {
        const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-appraisal-request', {
          body: {
            jobId: jobData.id, // Add the job ID for dashboard link
            isTestMode: isTestMode, // Add test mode flag to control email recipient
            clientFirstName: formData.clientFirstName,
            clientLastName: formData.clientLastName,
            clientEmail: formData.clientEmail,
            clientPhone: formData.clientPhone,
            clientTitle: formData.clientTitle,
            clientOrganization: formData.clientOrganization,
            clientAddress: formData.clientAddress,
            propertyName: formData.propertyName,
            propertyAddress: formData.propertyAddress,
            propertyType: formData.propertyType,
            intendedUse: formData.intendedUse,
            valuationPremises: formData.valuationPremises,
            assetCondition: formData.assetCondition,
            additionalInfo: formData.additionalInfo,
            propertyContactFirstName: formData.propertyContactFirstName,
            propertyContactLastName: formData.propertyContactLastName,
            propertyContactEmail: formData.propertyContactEmail,
            propertyContactPhone: formData.propertyContactPhone,
            sameAsClientContact: formData.sameAsClientContact
          }
        });

        if (emailError) {
          console.warn('Email notification failed (but appraisal request was saved):', emailError);
        } else {
          console.log('Email notification sent:', emailResult);
        }

      } catch (emailError) {
        console.warn('Email notification error (but appraisal request was saved):', emailError);
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