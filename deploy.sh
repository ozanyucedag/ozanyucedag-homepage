#!/bin/bash
# Simple script to deploy your website to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (default: 'Update website'): " commit_message
commit_message=${commit_message:-"Update website"}
git commit -m "$commit_message"

# Check if remote origin exists
if ! git remote | grep -q "origin"; then
    echo "🔗 Setting up remote repository..."
    read -p "Enter your GitHub username: " username
    read -p "Enter your repository name: " repo_name
    
    git remote add origin "https://github.com/$username/$repo_name.git"
fi

# Push to GitHub
echo "☁️ Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Deployment complete!"
echo ""
echo "🌐 Now go to your repository settings on GitHub to enable GitHub Pages:"
echo "1. Go to https://github.com/ozanyucedag/ozanyucedag-homepage/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'main' branch and '/ (root)' folder"
echo "4. Click 'Save'"
echo ""
echo "Your website will be available at: https://ozanyucedag.github.io/ozanyucedag-homepage/"
echo ""
echo "Note: It may take a few minutes for your site to be published."