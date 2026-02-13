import { serve } from 'https://deno.land/std@0.220.0/http/server.ts';

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Contact notification function called')
    const { name, email, phone, company, requestType, propertyType, timeline, message } = await req.json()
    
    console.log('Received data:', { name, email, phone, company, requestType, propertyType, timeline, message })
    
    if (!name || !email || !message) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Sending contact form notification for:', name)
    
    // Use Resend API like APR-Dashboard
    const RESEND_API_KEY = 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94';
    
    const emailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Website Form Fill Notification</title>
<style>
  /* Base email styles */
  body { 
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    color: #333; 
    margin: 0; 
    padding: 0;
    background-color: #ffffff;
  }
  
  .email-container { 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
    background-color: #ffffff;
  }
  
  /* Header section */
  .header { 
    background: #f8f8f8; 
    color: #333333; 
    padding: 20px; 
    text-align: center; 
    border: 1px solid #ddd;
    border-bottom: none;
  }
  
  .header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: normal;
  }
  
  /* Content section */
  .content { 
    background: #ffffff; 
    padding: 30px; 
    border: 1px solid #ddd; 
  }
  
  .content p {
    margin: 0 0 15px 0;
  }
  
  /* Form data section */
  .form-data {
    background: #ffffff;
    padding: 20px;
    border-radius: 5px;
    margin: 20px 0;
    border-left: 4px solid #cccccc;
  }
  
  .form-field {
    margin-bottom: 15px;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  
  .form-field:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  
  .field-label {
    font-weight: bold;
    color: #555;
    display: inline-block;
    min-width: 120px;
  }
  
  .field-value {
    color: #333;
  }
  
  /* Footer section */
  .footer { 
    margin-top: 30px; 
    padding-top: 20px;
    border-top: 1px solid #ddd;
    font-size: 12px; 
    color: #666; 
    text-align: center;
  }
  
  .footer p {
    margin: 5px 0;
  }
  
  /* Mobile responsiveness */
  @media only screen and (max-width: 600px) {
    .email-container {
      padding: 10px;
    }
    
    .content {
      padding: 20px;
    }
    
    .field-label {
      min-width: auto;
      display: block;
      margin-bottom: 5px;
    }
  }
</style>
</head>
<body>
  <div class="email-container">
    
    <!-- Header Section -->
    <div class="header">
      <h1>New Website Contact Form</h1>
    </div>
    
    <!-- Main Content -->
    <div class="content">
      
      <p>A new contact form has been submitted from <strong>valta.ca/contact</strong></p>
      <p style="color: #666; font-size: 14px;">Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })} MST</p>
      
      <!-- Form Data -->
      <div class="form-data">
        <div class="form-field">
          <span class="field-label">Name:</span>
          <span class="field-value">${name}</span>
        </div>
        
        <div class="form-field">
          <span class="field-label">Email:</span>
          <span class="field-value"><a href="mailto:${email}" style="color: #333333;">${email}</a></span>
        </div>
        
        ${phone ? `
        <div class="form-field">
          <span class="field-label">Phone:</span>
          <span class="field-value"><a href="tel:${phone}" style="color: #333333;">${phone}</a></span>
        </div>
        ` : ''}
        
        ${company ? `
        <div class="form-field">
          <span class="field-label">Company:</span>
          <span class="field-value">${company}</span>
        </div>
        ` : ''}
        
        ${requestType ? `
        <div class="form-field">
          <span class="field-label">Request Type:</span>
          <span class="field-value">${requestType}</span>
        </div>
        ` : ''}
        
        ${propertyType ? `
        <div class="form-field">
          <span class="field-label">Property Type:</span>
          <span class="field-value">${propertyType}</span>
        </div>
        ` : ''}
        
        ${timeline ? `
        <div class="form-field">
          <span class="field-label">Timeline:</span>
          <span class="field-value">${timeline}</span>
        </div>
        ` : ''}
        
        <div class="form-field">
          <span class="field-label">Message:</span>
          <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
      
    </div>
    
    <!-- Footer Section -->
    <div class="footer">
      <p><strong>Valta Property Valuations Ltd.</strong></p>
      <p>This is an automated notification from the Valta website contact form.</p>
    </div>
    
  </div>
</body>
</html>`;

    // Send via Resend to clientcare@valta.ca
    console.log('Calling Resend API...')
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Valta Website <onboarding@resend.dev>',
        to: ['bc@crowestudio.com'], // Temporarily using Ben's verified email - will need domain verification for clientcare@valta.ca
        subject: `Website Form Fill Notification - ${name}`,
        html: emailHtml,
      }),
    });

    console.log('Resend API response status:', response.status)

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error details:', error)
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await response.json();
    console.log('Contact notification sent successfully:', data.id);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact notification sent successfully',
        recipient: 'bc@crowestudio.com', // Temporarily using Ben's email
        emailId: data.id,
        note: 'Email sent to Ben\'s address - domain verification needed for clientcare@valta.ca'
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
    
  } catch (error) {
    console.error('Error in send-contact-notification function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send contact notification',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})