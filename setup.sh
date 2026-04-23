#!/bin/bash

# Divine Journeys CMS - Auto Setup Script
# This script automates the setup process

echo "🎯 Divine Journeys CMS - Setup"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

echo "✅ Backend dependencies installed"
echo ""
cd ..

# Install frontend dependencies (if needed)
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
    echo "✅ Frontend dependencies installed"
else
    echo "✅ Frontend dependencies already installed"
fi

echo ""
echo "================================"
echo "✅ Setup Complete!"
echo ""
echo "🚀 Next Steps:"
echo ""
echo "1. Start Backend (Terminal 1):"
echo "   cd backend && npm start"
echo ""
echo "2. Start Frontend (Terminal 2):"
echo "   npm run dev"
echo ""
echo "3. Open CMS Admin:"
echo "   http://localhost:3000/cms"
echo ""
echo "4. View Blogs:"
echo "   http://localhost:3000/blog"
echo ""
echo "📖 Full Documentation: See QUICKSTART.md or CMS-SETUP.md"
echo ""
