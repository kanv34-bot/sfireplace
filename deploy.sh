#!/bin/bash
# ============================================
# 壁炉宗师 (Fireplace Master) — Deploy Script
# ============================================
# Run: bash deploy.sh
# ============================================

set -e

echo "🔥 Fireplace Master - Deploy Setup"
echo "================================"
echo ""

# Step 1: GitHub Setup
echo "📦 Step 1: GitHub Repository"
echo "-----------------------------"
echo ""
echo "Option A - Create new repo via gh CLI:"
echo "  gh auth login"
echo "  gh repo create sfireplace --public --source=. --push"
echo ""
echo "Option B - Create manually:"
echo "  1. Go to https://github.com/new"
echo "  2. Repo name: sfireplace"
echo "  3. Create repo (public)"
echo "  4. Run:"
echo "     git remote add origin https://github.com/YOUR_USERNAME/sfireplace.git"
echo "     git push -u origin main"
echo ""

# Step 2: Vercel Setup
echo "🚀 Step 2: Vercel Deployment"
echo "-----------------------------"
echo ""
echo "Option A - Use Vercel CLI:"
echo "  npm i -g vercel"
echo "  vercel login"
echo "  vercel --prod"
echo ""
echo "Option B - Use Vercel Dashboard (easier):"
echo "  1. Go to https://vercel.com/new"
echo "  2. Import GitHub repo: sfireplace"
echo "  3. Framework preset: Astro"
echo "  4. Root directory: ./ (default)"
echo "  5. Click Deploy"
echo ""

# Step 3: Domain Setup
echo "🌐 Step 3: Custom Domain"
echo "------------------------"
echo ""
echo "  In Vercel Dashboard -> Project -> Domains:"
echo "    Add sfireplace.com"
echo ""
echo "  Then update DNS at your domain provider:"
echo "    Point sfireplace.com to Vercel nameservers"
echo "    Or add CNAME record pointing to cname.vercel-dns.com"
echo ""

# Step 4: Decap CMS Setup
echo "📝 Step 4: Decap CMS (Content Manager)"
echo "--------------------------------------"
echo ""
echo "  1. In Vercel Dashboard, enable 'Git Gateway'"
echo "  2. Or use Netlify Identity for auth"
echo "  3. Access CMS at: https://sfireplace.com/admin/"
echo ""

echo "✅ Done! Push to GitHub and Vercel will auto-deploy."
echo ""
echo "Local dev server: npm run dev"
echo "Build for prod:   npm run build"
