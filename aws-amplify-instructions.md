# Deploying to AWS Amplify

AWS Amplify provides a simple way to deploy and host static websites with features like CI/CD, custom domains, and HTTPS.

## Steps to Deploy:

1. Create an AWS account if you don't have one
2. Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home)
3. Click "Get Started" under "Amplify Hosting"
4. Choose your Git provider (GitHub, BitBucket, GitLab, or AWS CodeCommit)
5. Authorize AWS Amplify to access your repositories
6. Select your repository and branch
7. Configure build settings (for a simple HTML site, you can leave defaults)
8. Review and click "Save and deploy"

## Custom Domain on AWS Amplify:

1. In the Amplify Console, go to your app
2. Click on "Domain Management"
3. Click "Add domain"
4. Enter your domain name and click "Configure domain"
5. Follow the instructions to update your DNS settings

## Note:
AWS Amplify has a free tier, but usage beyond the free tier will incur costs. Check the [AWS Amplify pricing](https://aws.amazon.com/amplify/pricing/) for details.