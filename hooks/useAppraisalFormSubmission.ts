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
      // Prepare submission data
      const submissionData: Omit<JobSubmission, 'id' | 'created_at'> = {
        client_first_name: formData.clientFirstName,
        client_last_name: formData.clientLastName,
        client_email: formData.clientEmail,
        client_phone: formData.clientPhone,
        client_title: formData.clientTitle || '',
        client_organization: formData.clientOrganization || '',
        client_address: formData.clientAddress || '',
        property_name: formData.propertyName,
        property_address: formData.propertyAddress || '',
        property_type: formData.propertyType || null,
        intended_use: formData.intendedUse || null,
        valuation_premises: formData.valuationPremises || null,
        asset_condition: formData.assetCondition || null,
        notes: formData.additionalInfo || '',
        status: "submitted",
      };

      // Submit to Supabase
      const { data: jobData, error: saveError } = await supabase
        .from('job_submissions')
        .insert(submissionData)
        .select('*')
        .single();

      if (saveError) {
        console.error('Submission error:', saveError);
        throw new Error(saveError.message);
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
        error: error instanceof Error ? error.message : "An error occurred during submission" 
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