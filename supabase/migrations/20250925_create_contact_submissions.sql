-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    request_type TEXT,
    property_type TEXT,
    timeline TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'submitted',
    source TEXT DEFAULT 'website-contact-form'
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow insert for all users" ON contact_submissions
    FOR INSERT TO public
    WITH CHECK (true);

CREATE POLICY "Allow read for authenticated users" ON contact_submissions
    FOR SELECT TO authenticated
    USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);