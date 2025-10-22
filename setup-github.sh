#!/bin/bash

# GitHub Pages Setup Script for Joyfill Docs
# This script helps you deploy to GitHub Pages

echo "🚀 Joyfill Docs - GitHub Pages Setup"
echo "===================================="
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "📝 Updating configuration files..."

# Update docusaurus.config.ts
sed -i '' "s/YOUR_GITHUB_USERNAME/$GITHUB_USERNAME/g" docusaurus.config.ts

echo "✅ Configuration updated"
echo ""
echo "📦 Next steps:"
echo ""
echo "1. Create a new GitHub repository:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: joyfill-docs"
echo "   - Make it PUBLIC (required for free GitHub Pages)"
echo "   - Don't initialize with README"
echo ""
echo "2. After creating the repository, run these commands:"
echo ""
echo "   git add docusaurus.config.ts"
echo "   git commit -m 'chore: configure GitHub Pages for deployment'"
echo "   git remote add origin https://github.com/$GITHUB_USERNAME/joyfill-docs.git"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to repository Settings → Pages"
echo "   - Source: Select 'GitHub Actions'"
echo ""
echo "4. Your site will be live at:"
echo "   https://$GITHUB_USERNAME.github.io/joyfill-docs/"
echo ""
echo "✨ Setup complete! Follow the steps above to deploy."

