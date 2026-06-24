# GitHub Deployment Guide

This guide will walk you through the process of publishing your standalone **Refined Sidebar** portfolio website to GitHub and hosting it live on the internet for free using **GitHub Pages**.

---

## Prerequisites
Before you start, make sure you have:
1. A [GitHub Account](https://github.com/join).
2. [Git installed](https://git-scm.com/downloads) on your computer.

---

## Step-by-Step Instructions

### Step 1: Open Terminal in the Standalone Folder
1. Open your terminal or command prompt (PowerShell or Git Bash is recommended on Windows).
2. Navigate to your standalone folder:
   ```bash
   cd "D:\MSI-Computer\Projects\UMQ Site\UMQ-Site\Option8_RefinedSidebar_Standalone"
   ```

### Step 2: Initialize Git & Commit Files
Initialize a local Git repository, add your files, and create your first commit:
```bash
# 1. Initialize Git
git init

# 2. Add all files to staging area
git add .

# 3. Commit files
git commit -m "Initial commit of Dr. Umair Mujtaba Qureshi Standalone Portfolio"
```

### Step 3: Create a New GitHub Repository
1. Go to [github.com](https://github.com) and log in.
2. Click the **"New"** button on the left sidebar, or click the **`+`** icon in the top-right corner and select **"New repository"**.
3. Fill in the repository details:
   - **Repository name**: e.g., `umair-muqu-portfolio`
   - **Description**: (Optional) e.g., "Academic portfolio website for Dr. Umair Mujtaba Qureshi"
   - **Public/Private**: Select **Public** (required to use GitHub Pages for free).
   - **Initialize repository with**: Leave all options *unchecked* (do not add a README, `.gitignore`, or license, as we already have these locally).
4. Click **Create repository**.

### Step 4: Link Your Local Folder to GitHub & Push
GitHub will show a list of commands under the heading *"...or push an existing repository from the command line"*. Copy and run those commands in your terminal:
```bash
# 1. Rename your default branch to main (if not already)
git branch -M main

# 2. Add your GitHub repository as the remote origin
# (Replace USERNAME and REPO-NAME with your GitHub username and the repository name you just created)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 3. Push your files to GitHub
git push -u origin main
```

---

## Step 5: Enable GitHub Pages (Free Web Hosting)
Once your files are successfully uploaded to GitHub, follow these steps to turn on hosting:

1. In your web browser, navigate to your new GitHub repository page.
2. Click on the **Settings** tab (gear icon at the top of the repository page).
3. In the left navigation menu, click on **Pages** (under the "Code and automation" section).
4. Under the **Build and deployment** section:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Click the dropdown (currently says `None`) and select **`main`**.
   - Leave the folder dropdown as `/ (root)`.
5. Click **Save**.

---

## Step 6: Access Your Live Website!
1. After clicking save, wait 1 to 2 minutes for GitHub to build and deploy your site.
2. Refresh the **Pages** settings page.
3. You will see a box at the top saying: **"Your site is live at..."** followed by a link.
4. Click the link to open your live portfolio on the internet! 

Your site address will look like:
`https://<your-username>.github.io/<your-repository-name>/`

---

## How to Make Updates in the Future
Whenever you edit pages (e.g. updating publications or courses) and want to push the changes live:
```bash
# 1. Stage the modified files
git add .

# 2. Commit the changes
git commit -m "Update publication lists for 2026"

# 3. Push to GitHub (Pages will automatically update)
git push origin main
```
