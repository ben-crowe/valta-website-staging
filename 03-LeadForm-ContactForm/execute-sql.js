const fetch = require('node-fetch');
const fs = require('fs');

async function executeSQLDirectly() {
  try {
    console.log('🚀 Executing SQL directly via Supabase REST API...');
    
    const sql = fs.readFileSync('/Users/bencrowe/Development/Valta-Website/temp-schema.sql', 'utf8');
    console.log('📄 SQL to execute:', sql.substring(0, 200) + '...\n');
    
    // Split into individual statements
    const statements = sql
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`📝 Found ${statements.length} statements to execute\n`);
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      console.log(`⚡ Executing statement ${i + 1}:`);
      console.log(statement.substring(0, 100) + '...\n');
      
      try {
        const response = await fetch('https://ngovnamnjmexdpjtcnky.supabase.co/rest/v1/rpc/exec_sql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ',
          },
          body: JSON.stringify({ sql: statement })
        });
        
        if (!response.ok) {
          console.log('❌ HTTP Error:', response.status, response.statusText);
          const error = await response.text();
          console.log('Error details:', error);
        } else {
          const result = await response.json();
          console.log('✅ Success:', result);
        }
      } catch (error) {
        console.log('❌ Request failed:', error.message);
      }
      
      console.log(''); // Empty line for readability
    }
    
    console.log('🧪 Testing if table was created...');
    
    // Test table creation
    const testResponse = await fetch('https://ngovnamnjmexdpjtcnky.supabase.co/rest/v1/contact_submissions?select=id&limit=1', {
      method: 'GET',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ',
      }
    });
    
    if (testResponse.ok) {
      const data = await testResponse.json();
      console.log('✅ Table exists and is accessible!');
      console.log('🎉 Schema deployment successful!');
      return true;
    } else {
      console.log('❌ Table test failed:', testResponse.status, testResponse.statusText);
      const errorText = await testResponse.text();
      console.log('Error:', errorText);
      
      if (errorText.includes('relation "contact_submissions" does not exist')) {
        console.log('\n💡 The table needs to be created manually.');
        console.log('📋 Please copy this SQL and run it in Supabase Dashboard > SQL Editor:');
        console.log('\n' + '='.repeat(60));
        console.log(sql);
        console.log('='.repeat(60));
      }
      return false;
    }
    
  } catch (error) {
    console.error('💥 Script failed:', error);
    return false;
  }
}

executeSQLDirectly();