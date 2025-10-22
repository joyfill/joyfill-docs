# Deployment Guide - GitHub Pages

This guide will help you deploy the Joyfill documentation to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 20+ installed

## Step 1: Update Configuration

Before deploying, update `docusaurus.config.ts` with your GitHub details:

```typescript
// Replace YOUR_GITHUB_USERNAME with your actual GitHub username
url: 'https://YOUR_GITHUB_USERNAME.github.io',
baseUrl: '/joyfill-docs/',
organizationName: 'YOUR_GITHUB_USERNAME',
projectName: 'joyfill-docs',
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `joyfill-docs`
3. Description: "Joyfill SDK Documentation"
4. Make it Public (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Push Code to GitHub

```bash
cd /Users/vishnudutt/Docs/joyfill-docs

# Add the remote repository
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/joyfill-docs.git

# Push the code
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically deploy on the next push

## Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live!

## Accessing Your Site

Your documentation will be available at:
```
https://YOUR_GITHUB_USERNAME.github.io/joyfill-docs/
```

## Automatic Deployments

After initial setup, the site will automatically deploy whenever you push to the `main` branch.

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
# Build the site
npm run build

# Deploy using Docusaurus CLI
GIT_USER=YOUR_GITHUB_USERNAME npm run deploy
```

This will build and push to the `gh-pages` branch.

## Troubleshooting

### Build Fails

1. Check the Actions tab for error logs
2. Ensure all dependencies are in package.json
3. Test build locally: `npm run build`

### 404 Page Not Found

1. Verify `baseUrl` matches your repository name
2. Ensure GitHub Pages is enabled in Settings
3. Check that the deployment succeeded in Actions

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `static/` folder with your domain
2. Update `url` in `docusaurus.config.ts`
3. Configure DNS settings with your domain provider

## Environment Variables

For GitHub Actions, no additional environment variables are needed. The workflow uses built-in GitHub tokens.

## Security

The repository is public to use GitHub Pages for free. If you need private repositories, consider:
- GitHub Pro/Team/Enterprise
- Alternative hosting (Vercel, Netlify, AWS)

## Next Steps

After deployment:
- [ ] Update configuration with actual GitHub username
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify deployment in Actions tab
- [ ] Access your live documentation

## Support

For issues:
- GitHub Actions logs: Repository → Actions tab
- Docusaurus docs: https://docusaurus.io/docs/deployment
- GitHub Pages docs: https://docs.github.com/pages

---

**Ready to deploy?** Follow the steps above to get your documentation live! 🚀

