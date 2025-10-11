#!/bin/bash

# Valta Website - First-Time Setup Script
# Run this script after cloning the repository

set -e  # Exit on error

echo "🚀 Valta Website - First-Time Setup"
echo "===================================="
echo ""

# Check Node.js version
echo "📋 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18 or higher required"
    echo "   Current version: $(node -v)"
    echo "   Install from: https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js $(node -v) detected"
echo ""

# Check npm
echo "📋 Checking npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm not found"
    exit 1
fi
echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Check for .env.local
echo "📋 Checking environment variables..."
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local not found"
    echo ""
    echo "Create .env.local with the following variables:"
    echo ""
    echo "NEXT_PUBLIC_SUPABASE_URL=https://[your-project].supabase.co"
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]"
    echo "SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]"
    echo ""
    echo "Get these values from:"
    echo "https://supabase.com/dashboard/project/ngovnamnjmexdpjtcnky/settings/api"
    echo ""
    read -p "Do you want to create .env.local now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Creating .env.local..."
        cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://ngovnamnjmexdpjtcnky.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
EOF
        echo "✅ .env.local created"
        echo "⚠️  Remember to add your actual API keys!"
    else
        echo "⚠️  You'll need to create .env.local manually before running the app"
    fi
else
    echo "✅ .env.local found"
fi
echo ""

# Build the project
echo "🔨 Building project..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    echo "   Check for TypeScript or ESLint errors"
    exit 1
fi
echo ""

# Setup complete
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Verify .env.local has correct API keys"
echo "2. Start dev server: npm run dev"
echo "3. Open http://localhost:3002"
echo "4. Read docs/architecture.md for system overview"
echo ""
echo "Useful commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run lint    - Run linter"
echo ""
echo "For help, see docs/troubleshooting.md"
