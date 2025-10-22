# 🚀 Deploy Joyfill Docs to GitHub Pages - Quick Guide

## Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
cd /Users/vishnudutt/Docs/joyfill-docs
./setup-github.sh
```

Then follow the on-screen instructions!

---

## Option 2: Manual Setup

### Step 1: Update Your GitHub Username (1 minute)

Open `docusaurus.config.ts` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in 3 places:

```typescript
url: 'https://YOUR_GITHUB_USERNAME.github.io',    // Line 19
organizationName: 'YOUR_GITHUB_USERNAME',          // Line 25
```

### Step 2: Create GitHub Repository (2 minutes)

1. Go to: **https://github.com/new**
2. Repository name: **`joyfill-docs`**
3. Description: "Joyfill SDK Documentation"
4. Select: **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 3: Push Your Code (1 minute)

```bash
cd /Users/vishnudutt/Docs/joyfill-docs

# Commit config changes
git add docusaurus.config.ts
git commit -m "chore: configure for GitHub Pages deployment"

# Add remote and push
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/joyfill-docs.git
git push -u origin main
```

### Step 4: Enable GitHub Pages (1 minute)

1. Go to your repository: `https://github.com/YOUR_GITHUB_USERNAME/joyfill-docs`
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
5. Done! No need to select a branch.

### Step 5: Wait for Deployment (2-3 minutes)

1. Go to **"Actions"** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for green checkmark ✅
4. Your site is live!

---

## 🎉 Your Site Will Be Live At:

```
https://YOUR_GITHUB_USERNAME.github.io/joyfill-docs/
```

---

## ⚡ Future Updates

After initial setup, just push to main branch:

```bash
git add .
git commit -m "docs: update content"
git push
```

The site will automatically redeploy! ✨

---

## 🐛 Troubleshooting

### Build Failing?
- Check the Actions tab for errors
- Test locally: `npm run build`
- Ensure all files are committed

### 404 Error?
- Verify `baseUrl: '/joyfill-docs/'` in config
- Check GitHub Pages is enabled (Settings → Pages)
- Wait 2-3 minutes after first deployment

### Need Help?
- See full guide: `DEPLOYMENT.md`
- Check Actions logs in GitHub

---

## 📋 Checklist

- [ ] Update YOUR_GITHUB_USERNAME in docusaurus.config.ts
- [ ] Create public repository on GitHub
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages (Source: GitHub Actions)
- [ ] Wait for deployment to complete
- [ ] Visit your live site!

---

**Total Time: ~7 minutes** ⏱️

**Ready?** Let's go! 🚀

