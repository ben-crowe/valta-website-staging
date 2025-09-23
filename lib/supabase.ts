import { createClient } from '@supabase/supabase-js';

// Same Supabase instance as APR Dashboard
const SUPABASE_URL = "https://ngovnamnjmexdpjtcnky.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Types for form submission
export interface FormData {
  clientFirstName: string;
  clientLastName: string;
  clientTitle: string;
  clientOrganization: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  propertyName: string;
  propertyAddress: string;
  propertyType: string;
  intendedUse: string;
  valuationPremises: string;
  assetCondition: string;
  additionalInfo: string;
  files?: File[];
}

export interface JobSubmission {
  id?: string;
  client_first_name: string;
  client_last_name: string;
  client_email: string;
  client_phone: string;
  client_title: string;
  client_organization: string;
  client_address: string;
  property_name: string;
  property_address: string;
  property_type: string | null;
  intended_use: string | null;
  // valuation_premises field doesn't exist in database - included in notes instead
  asset_condition: string | null;
  notes: string;
  status: string;
  created_at?: string;
}