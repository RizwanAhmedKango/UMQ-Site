# Dr. Umair Mujtaba Qureshi - Refined Sidebar Portfolio

This repository contains the standalone, independent working copy of Dr. Umair Mujtaba Qureshi's academic portfolio website built with the **Refined Sidebar** theme. 

## Features
- Deep-green sidebar navigation containing about, research, publications, teaching, experience, and contact pages.
- Collapsible icon-rail sidebar structure with state persistence (saved to `localStorage`).
- Fully responsive styling with custom CSS.
- Smooth transitions and hover animations.
- Dynamic footer year display.
- Offline and HTTP-ready assets.

## Project Structure
```text
├── assets/
│   └── app.js                     # Shared client-side behaviors (dynamic year, nav active highlights, etc.)
├── contact.html                   # Contact page
├── cv.pdf                         # CV Document
├── experience.html                # Professional experience timeline page
├── index.html                     # Homepage (About page)
├── publications.html              # Selected research publications page
├── QURESHI-Umair-Mujtaba.jpg      # Profile picture (MANUAL COPY REQUIRED)
├── README.md                      # This README document
├── research.html                  # Research projects highlights page
├── sidebar.js                     # Collapsible sidebar functionality
├── style.css                      # Core stylesheets (Fraunces & Figtree fonts imported)
└── teaching.html                  # Teaching subjects and philosophy page
```

---

## IMPORTANT: Setup Instructions

### 1. Copy the Avatar Image File
Due to local development terminal process restrictions, the binary image file `QURESHI-Umair-Mujtaba.jpg` was not copied automatically.
- **Action**: Please copy `QURESHI-Umair-Mujtaba.jpg` from the parent directory/original project root and paste it directly into this directory (`Option8_RefinedSidebar_Standalone`).

### 2. Initializing Git & Hosting on GitHub
To initialize a separate repository and publish this theme to GitHub Pages:

1. Open your terminal in this directory.
2. Initialize git:
   ```bash
   git init
   ```
3. Stage and commit files:
   ```bash
   git add .
   git commit -m "Initial commit of Option 8 Standalone theme"
   ```
4. Create a new repository on GitHub (e.g. `umq-portfolio`).
5. Link and push to your GitHub remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
6. Enable **GitHub Pages** from the repository settings (under the Settings -> Pages tab, set source to deploy from the `main` branch).
