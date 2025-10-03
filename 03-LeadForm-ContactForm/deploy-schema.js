const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Supabase configuration (same as in lib/supabase.ts)
const SUPABASE_URL = "https://ngovnamnjmexdpjtcnky.supabase.co"
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MTcxOTQ3MCwiZXhwIjoyMDU3Mjk1NDcwfQ.xtwgbNvOWq_BPT9FIEHkDT8t6g4ixQfmJmyI-zBNJdI" // Service key for admin operations

// Create Supabase client with service key (bypasses RLS)
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function deploySchema() {
  try {
    console.log('🚀 Deploying contact_submissions table schema...')
    
    // Read the schema file
    const schemaPath = path.join(__dirname, 'email-setup', '1-database-schema.sql')
    const schemaSQL = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('📄 Schema SQL:', schemaSQL.substring(0, 200) + '...')
    
    // Split SQL into individual statements (rough split on semicolons)
    const statements = schemaSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))
    
    console.log(`📝 Found ${statements.length} SQL statements to execute`)
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';' // Add semicolon back
      console.log(`\n⚡ Executing statement ${i + 1}:`)
      console.log(statement.substring(0, 100) + '...')
      
      try {
        const { data, error } = await supabase.rpc('exec_sql', {
          sql: statement
        })
        
        if (error) {
          // Try direct execution instead
          console.log('🔄 RPC failed, trying direct SQL execution...')
          
          // For table creation, use direct table creation
          if (statement.includes('CREATE TABLE')) {
            console.log('📋 Creating contact_submissions table directly...')
            
            // Create table using Supabase client (this won't work for raw SQL but let's check what we can do)
            const tableResult = await supabase
              .from('contact_submissions')
              .select('*')
              .limit(1)
            
            if (tableResult.error && tableResult.error.message.includes('does not exist')) {
              console.log('❌ Table does not exist. Need to create it manually.')
              console.log('💡 You need to run this SQL in Supabase Dashboard > SQL Editor:')
              console.log('\n' + '='.repeat(50))
              console.log(schemaSQL)
              console.log('='.repeat(50) + '\n')
              return false
            } else if (!tableResult.error) {
              console.log('✅ Table already exists!')
            }
          }
          
          console.warn('⚠️ Error executing statement:', error)
          // Continue with next statement
        } else {
          console.log('✅ Statement executed successfully')
          if (data) console.log('📊 Result:', data)
        }
        
      } catch (execError) {
        console.warn('⚠️ Statement execution failed:', execError.message)
      }
    }
    
    // Test if table exists by trying to query it
    console.log('\n🧪 Testing if contact_submissions table exists...')
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('id')
      .limit(1)
    
    if (error) {
      if (error.message.includes('does not exist')) {
        console.log('❌ Table does not exist yet. Manual creation needed.')
        console.log('\n📋 Please run this in Supabase Dashboard > SQL Editor:')
        console.log('\n' + '='.repeat(60))
        console.log(schemaSQL)
        console.log('='.repeat(60) + '\n')
        return false
      } else {
        console.log('❌ Error testing table:', error)
        return false
      }
    } else {
      console.log('✅ Table exists and is accessible!')
      console.log('🎉 Schema deployment successful!')
      return true
    }
    
  } catch (error) {
    console.error('💥 Deployment failed:', error)
    return false
  }
}

// Run the deployment
deploySchema().then(success => {
  if (success) {
    console.log('\n🎊 Database schema deployed successfully!')
    console.log('📧 Contact form is now ready to save submissions to database.')
  } else {
    console.log('\n📋 Manual schema creation required.')
    console.log('💻 Copy the SQL from above and run it in Supabase Dashboard > SQL Editor.')
  }
  
  process.exit(success ? 0 : 1)
}).catch(error => {
  console.error('💥 Deployment script failed:', error)
  process.exit(1)
})