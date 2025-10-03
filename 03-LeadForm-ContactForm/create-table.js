const { createClient } = require('@supabase/supabase-js');

// Using the same URL and anon key from your lib/supabase.ts
const SUPABASE_URL = "https://ngovnamnjmexdpjtcnky.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testAndCreate() {
  console.log('🔍 Testing if table exists...');
  
  // Test if table exists
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('id')
    .limit(1);
  
  if (error) {
    console.log('❌ Table does not exist:', error.message);
    console.log('\n📋 The table needs to be created manually in Supabase.');
    console.log('I cannot create tables with the anon key for security reasons.');
    console.log('\nPlease go to: https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/sql/new');
    console.log('And run the SQL below:\n');
    
    const sql = `-- Contact Submissions Table for Valta Website
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

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow insert for all users" ON contact_submissions
    FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Allow read for authenticated users" ON contact_submissions
    FOR SELECT TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);`;
    
    console.log('='.repeat(60));
    console.log(sql);
    console.log('='.repeat(60));
    
    // Open the Supabase SQL editor directly
    const { exec } = require('child_process');
    exec('open https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/sql/new', (err) => {
      if (!err) {
        console.log('\n✅ Opened Supabase SQL Editor in your browser!');
        console.log('📋 Just paste the SQL above and click "RUN"');
      }
    });
    
  } else {
    console.log('✅ Table already exists!');
  }
}

testAndCreate();