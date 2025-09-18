#!/bin/bash
# Deploy to Vercel Stage Viewer
export PATH="/usr/local/bin:$PATH"
cd "/Users/bencrowe/Documents/Vault/Dev.Proj/Projects-Active/Valta-Company/Valta-Website/Valta-Stage-Site" || exit 1
pwd
vercel --yes