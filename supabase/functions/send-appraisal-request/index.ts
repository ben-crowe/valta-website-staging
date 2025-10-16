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
    console.log('Appraisal request notification function called')
    const {
      jobId,
      isTestMode,
      clientFirstName,
      clientLastName,
      clientEmail,
      clientPhone,
      clientTitle,
      clientOrganization,
      clientAddress,
      propertyName,
      propertyAddress,
      propertyType,
      intendedUse,
      valuationPremises,
      assetCondition,
      additionalInfo,
      propertyContactFirstName,
      propertyContactLastName,
      propertyContactEmail,
      propertyContactPhone,
      sameAsClientContact
    } = await req.json()

    console.log('Received data:', {
      clientFirstName,
      clientLastName,
      clientEmail,
      clientPhone,
      propertyName,
      propertyAddress
    })

    if (!clientFirstName || !clientLastName || !clientEmail) {
      console.log('Missing required fields')
      return new Response(
        JSON.stringify({ error: 'Missing required fields: clientFirstName, clientLastName, and clientEmail' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Sending appraisal request notification for:', `${clientFirstName} ${clientLastName}`)

    // Use Resend API
    const RESEND_API_KEY = 're_8B4Po2eL_84kFfQeEHAf4z4GFTLaqTv94';

    const emailHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New Appraisal Request</title>
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

  .section-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: 20px 0 10px 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #ddd;
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
    min-width: 150px;
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
      <h1>New Appraisal Request</h1>
    </div>

    <div class="content">

      <p>A new appraisal request has been submitted from <strong>valta.ca/request-appraisal</strong></p>
      <p style="color: #666; font-size: 14px;">Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })} MST</p>

      ${jobId ? `
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://apr-dashboard-v3.vercel.app/jobs/${jobId}"
           style="display: inline-block; padding: 12px 30px; background: #1a73e8; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
          View in APR Dashboard
        </a>
      </div>
      ` : ''}

      <div class="section-title">Client Information</div>
      <div class="form-data">
        <div class="form-field">
          <span class="field-label">Name:</span>
          <span class="field-value">${clientFirstName} ${clientLastName}</span>
        </div>

        <div class="form-field">
          <span class="field-label">Email:</span>
          <span class="field-value"><a href="mailto:${clientEmail}" style="color: #333333;">${clientEmail}</a></span>
        </div>

        ${clientPhone ? `
        <div class="form-field">
          <span class="field-label">Phone:</span>
          <span class="field-value"><a href="tel:${clientPhone}" style="color: #333333;">${clientPhone}</a></span>
        </div>
        ` : ''}

        ${clientTitle ? `
        <div class="form-field">
          <span class="field-label">Title:</span>
          <span class="field-value">${clientTitle}</span>
        </div>
        ` : ''}

        ${clientOrganization ? `
        <div class="form-field">
          <span class="field-label">Organization:</span>
          <span class="field-value">${clientOrganization}</span>
        </div>
        ` : ''}

        ${clientAddress ? `
        <div class="form-field">
          <span class="field-label">Address:</span>
          <span class="field-value">${clientAddress}</span>
        </div>
        ` : ''}
      </div>

      <div class="section-title">Property Information</div>
      <div class="form-data">
        ${propertyName ? `
        <div class="form-field">
          <span class="field-label">Property Name:</span>
          <span class="field-value">${propertyName}</span>
        </div>
        ` : ''}

        ${propertyAddress ? `
        <div class="form-field">
          <span class="field-label">Property Address:</span>
          <span class="field-value">${propertyAddress}</span>
        </div>
        ` : ''}

        ${propertyType ? `
        <div class="form-field">
          <span class="field-label">Property Type:</span>
          <span class="field-value">${propertyType}</span>
        </div>
        ` : ''}

        ${intendedUse ? `
        <div class="form-field">
          <span class="field-label">Intended Use:</span>
          <span class="field-value">${intendedUse}</span>
        </div>
        ` : ''}

        ${valuationPremises ? `
        <div class="form-field">
          <span class="field-label">Valuation Premises:</span>
          <span class="field-value">${valuationPremises}</span>
        </div>
        ` : ''}

        ${assetCondition ? `
        <div class="form-field">
          <span class="field-label">Asset Condition:</span>
          <span class="field-value">${assetCondition}</span>
        </div>
        ` : ''}
      </div>

      ${!sameAsClientContact && (propertyContactFirstName || propertyContactEmail) ? `
      <div class="section-title">Property Contact</div>
      <div class="form-data">
        ${propertyContactFirstName || propertyContactLastName ? `
        <div class="form-field">
          <span class="field-label">Name:</span>
          <span class="field-value">${propertyContactFirstName || ''} ${propertyContactLastName || ''}</span>
        </div>
        ` : ''}

        ${propertyContactEmail ? `
        <div class="form-field">
          <span class="field-label">Email:</span>
          <span class="field-value"><a href="mailto:${propertyContactEmail}" style="color: #333333;">${propertyContactEmail}</a></span>
        </div>
        ` : ''}

        ${propertyContactPhone ? `
        <div class="form-field">
          <span class="field-label">Phone:</span>
          <span class="field-value"><a href="tel:${propertyContactPhone}" style="color: #333333;">${propertyContactPhone}</a></span>
        </div>
        ` : ''}
      </div>
      ` : ''}

      ${additionalInfo ? `
      <div class="section-title">Additional Information</div>
      <div class="form-data">
        <div class="form-field">
          <div class="field-value" style="white-space: pre-wrap;">${additionalInfo}</div>
        </div>
      </div>
      ` : ''}

    </div>

    <div class="footer">
      <p><strong>Valta Property Valuations Ltd.</strong></p>
      <p>This is an automated notification from the Valta website appraisal request form.</p>
    </div>

  </div>
</body>
</html>`;

    // Determine email recipient based on test mode
    const recipient = isTestMode ? 'bc@crowestudio.com' : 'bc@crowestudio.com'; // Both go to Ben for now until domain verified
    const subjectPrefix = isTestMode ? '[TEST] ' : '';

    // Send via Resend
    console.log('Calling Resend API...')
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Valta Website <onboarding@resend.dev>',
        to: [recipient],
        subject: `${subjectPrefix}Appraisal Request - ${clientFirstName} ${clientLastName}`,
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
    console.log('Appraisal request notification sent successfully:', data.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Appraisal request notification sent successfully',
        recipient: recipient,
        isTestMode: isTestMode || false,
        emailId: data.id
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-appraisal-request function:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to send appraisal request notification',
        details: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
