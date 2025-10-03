-- Contact Submissions Table for Valta Website
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Contact Information
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    
    -- Request Details
    request_type TEXT,
    property_type TEXT,
    timeline TEXT,
    message TEXT NOT NULL,
    
    -- Metadata
    status TEXT DEFAULT 'submitted',
    source TEXT DEFAULT 'website-contact-form'
);

-- Add RLS (Row Level Security) - allows read/write from authenticated users
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow inserts (for form submissions)
CREATE POLICY "Allow insert for all users" ON contact_submissions
    FOR INSERT TO public
    WITH CHECK (true);

-- Policy to allow reads for authenticated users (for admin dashboard)
CREATE POLICY "Allow read for authenticated users" ON contact_submissions
    FOR SELECT TO authenticated
    USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);