#!/bin/bash

# Script to deploy the careers form Supabase setup
# Run this from the Valta-Website directory

echo "🚀 Deploying Careers Form Setup to Supabase..."
echo ""

# Check if supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Error: Supabase CLI not found"
    echo "Install it with: brew install supabase/tap/supabase"
    exit 1
fi

echo "Step 1: Running database migration..."
supabase db push

echo ""
echo "Step 2: Deploying edge function..."
supabase functions deploy send-career-application

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Verify the career_applications table exists in Supabase dashboard"
echo "2. Verify the career-applications storage bucket exists"
echo "3. Update email recipient from bc@crowestudio.com to admin@valta.ca"
echo "   - Update in: supabase/functions/send-career-application/index.ts (line 238)"
echo "   - Run: supabase functions deploy send-career-application"
echo ""
echo "🔐 Email Domain Setup (to use admin@valta.ca):"
echo "1. Go to Resend dashboard: https://resend.com/domains"
echo "2. Add domain: valta.ca"
echo "3. Add the DNS records Resend provides"
echo "4. Once verified, update both edge functions to use admin@valta.ca"
echo ""


