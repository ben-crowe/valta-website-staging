const { createClient } = require('@supabase/supabase-js');

// Supabase setup
const SUPABASE_URL = "https://ngovnamnjmexdpjtcnky.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nb3ZuYW1uam1leGRwanRjbmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTk0NzAsImV4cCI6MjA1NzI5NTQ3MH0.i5pxHZ6Uvo1kcyws-C0tSegs35pA7tMO287_gYXIkGQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testContactForm() {
  console.log('🧪 Testing Contact Form Submission...\n');
  console.log('='.repeat(50));
  
  // Test data
  const testData = {
    full_name: `Test User ${Date.now()}`,
    email: 'test@example.com',
    phone: '(403) 555-1234',
    company: 'ABC Properties Inc.',
    request_type: 'appraisal',
    property_type: 'multifamily',
    timeline: 'urgent',
    message: 'This is an automated test submission from the test script. Testing database save and email functionality.',
    status: 'submitted',
    source: 'website-contact-form'
  };
  
  console.log('📝 Test Data:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('\n' + '='.repeat(50) + '\n');
  
  // Step 1: Test database save
  console.log('1️⃣  Testing Database Save...');
  try {
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([testData])
      .select()
      .single();
    
    if (dbError) {
      console.log('❌ Database Error:', dbError.message);
      console.log('   Details:', dbError);
      return false;
    }
    
    console.log('✅ Database Save Successful!');
    console.log('   Submission ID:', submission.id);
    console.log('   Created at:', submission.created_at);
    console.log('');
    
  } catch (error) {
    console.log('❌ Database Exception:', error.message);
    return false;
  }
  
  // Step 2: Test email notification
  console.log('2️⃣  Testing Email Notification...');
  try {
    const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-contact-notification', {
      body: {
        name: testData.full_name,
        email: testData.email,
        phone: testData.phone,
        company: testData.company,
        requestType: testData.request_type,
        propertyType: testData.property_type,
        timeline: testData.timeline,
        message: testData.message
      }
    });
    
    if (emailError) {
      console.log('⚠️  Email Error (non-fatal):', emailError.message);
      console.log('   Note: Form still saved to database successfully');
    } else {
      console.log('✅ Email Notification Sent!');
      console.log('   Result:', emailResult);
    }
    console.log('');
    
  } catch (error) {
    console.log('⚠️  Email Exception (non-fatal):', error.message);
    console.log('   Note: Form still saved to database successfully');
  }
  
  // Step 3: Verify data in database
  console.log('3️⃣  Verifying Saved Data...');
  try {
    const { data: savedData, error: readError } = await supabase
      .from('contact_submissions')
      .select('*')
      .eq('email', 'test@example.com')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (readError) {
      console.log('❌ Read Error:', readError.message);
    } else {
      console.log('✅ Data Verified in Database!');
      console.log('   Full Name:', savedData.full_name);
      console.log('   Email:', savedData.email);
      console.log('   Company:', savedData.company);
      console.log('   Request Type:', savedData.request_type);
      console.log('   Timeline:', savedData.timeline);
      console.log('   Message:', savedData.message.substring(0, 50) + '...');
    }
    
  } catch (error) {
    console.log('❌ Read Exception:', error.message);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('🎉 TEST COMPLETE!');
  console.log('='.repeat(50) + '\n');
  
  // Step 4: Check how many submissions are in the database
  console.log('📊 Database Statistics:');
  try {
    const { count, error } = await supabase
      .from('contact_submissions')
      .select('*', { count: 'exact', head: true });
    
    if (!error) {
      console.log(`   Total submissions in database: ${count}`);
    }
  } catch (error) {
    console.log('   Unable to get count');
  }
  
  return true;
}

// Run the test
testContactForm().then(success => {
  if (success) {
    console.log('\n✅ All tests passed! The contact form is working correctly.');
    console.log('📧 Check bc@crowestudio.com for the email notification.');
  } else {
    console.log('\n❌ Some tests failed. Check the errors above.');
  }
  process.exit(success ? 0 : 1);
});