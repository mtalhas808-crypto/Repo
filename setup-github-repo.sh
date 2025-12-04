#!/bin/bash

# Setup GitHub Repository for Hasan Irfan Perfumes
# Run this script after creating the GitHub repository

echo "🚀 Setting up GitHub repository connection..."
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists."
    read -p "Do you want to update it? (y/n): " update_remote
    if [ "$update_remote" != "y" ]; then
        echo "Exiting. Please remove the existing remote first."
        exit 1
    fi
    git remote remove origin
fi

# Get GitHub username and repo name
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter repository name (default: hasan-irfan-perfumes): " REPO_NAME
REPO_NAME=${REPO_NAME:-hasan-irfan-perfumes}

# Add remote
echo ""
echo "📦 Adding GitHub remote..."
git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Renaming branch from '${CURRENT_BRANCH}' to 'main'..."
    git branch -M main
fi

# Push to GitHub
echo ""
echo "📤 Pushing code to GitHub..."
echo "You may be prompted for your GitHub credentials."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🔗 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
    echo ""
    echo "Next steps:"
    echo "1. Go to Netlify Dashboard"
    echo "2. Site settings → Build & deploy → Link repository"
    echo "3. Connect to GitHub and select: ${REPO_NAME}"
    echo ""
else
    echo ""
    echo "❌ Failed to push. Please check:"
    echo "   - GitHub repository exists"
    echo "   - You're logged in to GitHub"
    echo "   - Repository name is correct"
    echo ""
fi

