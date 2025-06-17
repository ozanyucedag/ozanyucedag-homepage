# Deploying to Netlify

Netlify offers a simple way to deploy static websites with a generous free tier.

## Option 1: Drag and Drop Deployment

1. Go to [Netlify](https://app.netlify.com/)
2. Sign up or log in (you can use your GitHub account)
3. From the Netlify dashboard, simply drag and drop your entire Homepage folder
4. Your site will be deployed instantly with a random URL like `random-name-123456.netlify.app`
5. You can change this to a custom subdomain for free in the site settings

## Option 2: Connect to Git Repository

For continuous deployment (recommended):

1. Push your code to GitHub first (follow the GitHub instructions)
2. Go to [Netlify](https://app.netlify.com/)
3. Click "New site from Git"
4. Choose GitHub as your provider
5. Select your repository
6. Configure build settings (for a simple HTML site, you can leave defaults)
7. Click "Deploy site"

## Custom Domain on Netlify

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS settings