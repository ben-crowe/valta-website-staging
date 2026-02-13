const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function addCompanyField() {
  console.log('🔧 Adding company field to contact_submissions table...\n');
  
  const SUPABASE_URL = 'https://ngovnamnjmexdpjtcnky.supabase.co';
  const ACCESS_TOKEN = 'sbp_3f05698a35727ca9b51e8d6e18f07533d12a9314';
  
  const sql = 'ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS company TEXT;';
  
  try {
    const response = await fetch('https://api.supabase.com/v1/projects/ngovnamnjmexdpjtcnky/database/query', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: sql })
    });
    
    if (response.ok) {
      console.log('✅ Company field added to database successfully!');
      return true;
    } else {
      const error = await response.text();
      console.log('❌ Failed to add field:', error);
      return false;
    }
  } catch (error) {
    console.error('💥 Error adding field:', error);
    return false;
  }
}

addCompanyField().then(success => {
  if (success) {
    console.log('\n📝 Now update the form to include the company field...');
  }
  process.exit(success ? 0 : 1);
});