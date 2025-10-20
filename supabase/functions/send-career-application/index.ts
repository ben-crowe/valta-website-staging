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
    console.log('Career application notification function called')
    const { firstName, lastName, email, phone, linkedin, portfolio, howHeard, resumeBase64, resumeFilename } = await req.json()

    console.log('Received data:', { firstName, lastName, email, phone, linkedin, portfolio, howHeard, hasResume: !!resumeBase64 })

    if (!firstName || !lastName || !email) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields: firstName, lastName, and email' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Sending career application notification for:', `${firstName} ${lastName}`)
    
    // Use Resend API
    const RESEND_API_KEY = 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94';
    
    const emailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Career Application</title>
<style>
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
  
  .content { 
    background: #ffffff; 
    padding: 30px; 
    border: 1px solid #ddd; 
  }
  
  .content p {
    margin: 0 0 15px 0;
  }
  
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
    
    <div class="header">
      <h1>New Career Application</h1>
    </div>
    
    <div class="content">
      
      <p>A new career application has been submitted from <strong>valta.ca/careers</strong></p>
      <p style="color: #666; font-size: 14px;">Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })} MST</p>
      
      <div class="form-data">
        <div class="form-field">
          <span class="field-label">Name:</span>
          <span class="field-value">${firstName} ${lastName}</span>
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
        
        ${linkedin ? `
        <div class="form-field">
          <span class="field-label">LinkedIn:</span>
          <span class="field-value"><a href="${linkedin}" style="color: #333333;" target="_blank">${linkedin}</a></span>
        </div>
        ` : ''}
        
        ${portfolio ? `
        <div class="form-field">
          <span class="field-label">Portfolio:</span>
          <span class="field-value"><a href="${portfolio}" style="color: #333333;" target="_blank">${portfolio}</a></span>
        </div>
        ` : ''}
        
        ${howHeard ? `
        <div class="form-field">
          <span class="field-label">How They Heard:</span>
          <span class="field-value">${howHeard}</span>
        </div>
        ` : ''}
        
        ${resumeFilename ? `
        <div class="form-field">
          <span class="field-label">Resume:</span>
          <span class="field-value">${resumeFilename} (attached)</span>
        </div>
        ` : ''}
      </div>
      
    </div>
    
    <div class="footer">
      <p><strong>Valta Property Valuations Ltd.</strong></p>
      <p>This is an automated notification from the Valta website careers page.</p>
    </div>
    
  </div>
</body>
</html>`;

    // Prepare email payload
    const emailPayload: any = {
      from: 'Valta Careers <noreply@valta.ca>',
      to: ['bc@crowestudio.com'],
      subject: `Career Application - ${firstName} ${lastName}`,
      html: emailHtml,
    }

    // Attach resume if provided
    if (resumeBase64 && resumeFilename) {
      emailPayload.attachments = [
        {
          filename: resumeFilename,
          content: resumeBase64
        }
      ]
      console.log('Resume attachment added:', resumeFilename)
    }

    // Send via Resend
    console.log('Calling Resend API...')
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    console.log('Resend API response status:', response.status)

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error details:', error)
      throw new Error(`Resend API error: ${error}`);
    }

    const data = await response.json();
    console.log('Career application notification sent successfully:', data.id);
    
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Career application notification sent successfully',
        from: 'noreply@valta.ca',
        recipient: 'bc@crowestudio.com',
        emailId: data.id,
        hasAttachment: !!resumeBase64
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
    
  } catch (error) {
    console.error('Error in send-career-application function:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send career application notification',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

