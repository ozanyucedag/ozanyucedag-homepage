# Deploying Your Website to GitHub Pages

## Step 1: Initialize Git Repository
Open Terminal and navigate to your project folder:

```bash
cd ~/Desktop/Homepage
```

Initialize a Git repository:

```bash
git init
```

## Step 2: Add Your Files to Git

```bash
git add .
```

Commit your files:

```bash
git commit -m "Initial website commit"
```

## Step 3: Connect to GitHub Repository
Replace YOUR_USERNAME and YOUR_REPO_NAME with your GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

## Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your website will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/

## Optional: Using a Custom Domain
If you have a domain name, you can configure it:

1. In GitHub repository settings, under GitHub Pages, enter your custom domain
2. Create a CNAME file in your repository with your domain name
3. Configure your domain provider's DNS settings to point to GitHub Pages