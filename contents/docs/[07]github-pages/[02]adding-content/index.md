---
category: "github-pages"
title: "Adding Content to Your Repository"
description: "Learn how to generate and push Toucan site content to your GitHub repository."
order: 2
---

# Adding Content to Your Repository

After setting up your repository, follow these steps to add your site content:

## 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

## 2. Generate the site

Run the Toucan generator:

```bash
toucan generate
```

This creates the static site in the `dist/` folder.

## 3. Commit & push based on deployment method

### If using GitHub Actions (Recommended)

- **Do NOT push `dist/`** — the workflow builds it.
- Ensure `.github/workflows/deploy.yml` exists.
- Push source files and workflow:

```bash
git add .
git commit -m "Add site source and deployment workflow"
git push origin main
```

### If using Deploy from a Branch

- **Push the `dist/` folder** directly:

```bash
git add .
git commit -m "Add generated site content"
git push origin main
```
