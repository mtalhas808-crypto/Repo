#!/bin/bash

# Quick script to connect to GitHub repository "repo"
# Usage: ./connect-to-github.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "❌ Error: GitHub username required"
    echo "Usage: ./connect-to-github.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="repo"

echo "🚀 Connecting to GitHub repository..."
echo "Repository: ${GITHUB_USERNAME}/${REPO_NAME}"
echo ""

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "⚠️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add remote
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
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🔗 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
    echo ""
    echo "Next step: Connect Netlify to this repository"
    echo "1. Go to: https://app.netlify.com/sites/hasan-irfan-perfumes/configuration/deploys"
    echo "2. Click 'Link repository'"
    echo "3. Select GitHub and choose: ${REPO_NAME}"
    echo ""
else
    echo ""
    echo "❌ Failed to push. Possible issues:"
    echo "   - GitHub repository doesn't exist"
    echo "   - Authentication required (use Personal Access Token)"
    echo "   - Repository name is incorrect"
    echo ""
    echo "💡 Tip: If authentication fails, use a Personal Access Token:"
    echo "   1. GitHub → Settings → Developer settings → Personal access tokens"
    echo "   2. Generate new token (classic) with 'repo' permissions"
    echo "   3. Use token as password when prompted"
    echo ""
fi

