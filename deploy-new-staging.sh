#!/bin/bash
# Deploy to Vercel as NEW project with specific name
export PATH="/usr/local/bin:$PATH"
cd "/Users/bencrowe/Documents/Vault/Dev.Proj/Projects-Active/Valta-Company/Valta-Website/Valta-Stage-Site" || exit 1
echo "Current directory: $(pwd)"
echo "Deploying to Vercel with name: valta-frontend-staging-2025"
echo "This will create a completely new project, not linked to existing deployments"

# Ensure we're not linked to existing project by removing .vercel directory if it exists
if [ -d ".vercel" ]; then
    echo "Removing existing .vercel directory to ensure fresh deployment"
    rm -rf .vercel
fi

# Deploy with specified name to create new project
vercel --prod --name valta-frontend-staging-2025 --yes

echo "Deployment completed. Check output above for the full deployment URL."