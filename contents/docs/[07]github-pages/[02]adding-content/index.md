---
category: "github-pages"
title: "Adding Content to Your Repository"
description: "Generate your static site using Toucan and commit the appropriate files to your GitHub repository based on the chosen deployment method."
order: 2
---

# Adding Content to Your Repository

Once your repository is set up, commit the necessary files based on your deployment strategy. If you are using the **Deploy from a Branch** method, you must generate the static site content with Toucan before pushing.

## 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
```

## 2. Commit and Push Content

Follow the appropriate workflow for your deployment method:

### If Using GitHub Actions (Recommended)

- Do **not** commit the `dist/` folder. The GitHub Actions workflow will generate it during deployment.
- Verify that `.github/workflows/deploy.yml` exists in the repository.
- Commit the source files and the workflow configuration:

```bash
git add .
git commit -m "Add site source and deployment workflow"
git push origin main
```

### If Using Deploy from a Branch

- Generate the site locally using Toucan:

```bash
toucan generate
```

- This command outputs the site files into the `dist/` directory.
- Ensure the `dist/` folder is not excluded by `.gitignore`. If it is listed (e.g., /dist), remove or comment out that line before committing.
- Commit the contents of the `dist/` folder to your repository:

```bash
git add .
git commit -m "Add generated site content"
git push origin main
```
