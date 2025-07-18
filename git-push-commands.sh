#!/bin/bash
# Commands to push your site to GitHub

# Navigate to your project directory
# cd ~/Desktop/Homepage  # You're already here if running this script

# Initialize Git repository
git init

# Add all files to Git
git add .

# Commit your files
git commit -m "Initial website commit"

# Add your GitHub repository as remote
# Replace with your actual GitHub username and repository name
git remote add origin https://github.com/ozanyucedag/ozanyucedag.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main