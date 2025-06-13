#!/bin/bash

# OBJECTIVE 4011GS to gh-pages deployment script
# Usage: ./deploy-to-gh-pages.sh [commit-message]

set -e  # Exit on any error

echo "🚀 Starting deployment from OBJECTIVE 4011GS to gh-pages..."

# Check if we're in the right directory
if [ ! -d "OBJECTIVE 4011GS" ] || [ ! -d "gh-pages-local" ]; then
    echo "❌ Error: Must run from OBJECTIVE WORKSPACE root directory"
    exit 1
fi

# Get commit message
COMMIT_MSG=${1:-"Deploy updates from OBJECTIVE 4011GS"}

echo "📂 Syncing files from OBJECTIVE 4011GS to gh-pages-local..."

# Sync the main files (excluding .git and other meta files)
rsync -av --delete \
    --exclude='.git*' \
    --exclude='node_modules' \
    --exclude='.DS_Store' \
    --exclude='*.tmp' \
    "OBJECTIVE 4011GS/" "gh-pages-local/"

echo "📝 Committing changes to gh-pages-local..."

# Change to gh-pages directory and commit
cd "gh-pages-local"

# Add all changes
git add -A

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to deploy"
    exit 0
fi

# Commit the changes
git commit -m "$COMMIT_MSG"

echo "📤 Pushing to remote gh-pages..."

# Push to remote
git push origin gh-pages

echo "✅ Deployment complete! Changes should be live at:"
echo "   https://arossti.github.io/OBJECTIVE/"

# Return to original directory
cd ..

echo "🎉 Deployment successful!" 