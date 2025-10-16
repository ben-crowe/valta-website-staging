-- Create career_applications table
-- Resume is sent directly via email attachment (not stored in Supabase)
CREATE TABLE IF NOT EXISTS career_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    linkedin TEXT,
    portfolio TEXT,
    how_heard TEXT,
    resume_url TEXT, -- Stores just the filename for reference (actual file sent via email)
    status TEXT DEFAULT 'submitted',
    source TEXT DEFAULT 'website-careers-form'
);

-- Enable RLS
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow insert for all users" ON career_applications
    FOR INSERT TO public
    WITH CHECK (true);

CREATE POLICY "Allow read for authenticated users" ON career_applications
    FOR SELECT TO authenticated
    USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS career_applications_created_at_idx ON career_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS career_applications_email_idx ON career_applications(email);


