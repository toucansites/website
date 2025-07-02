---
category: "github-pages"
title: "Deploying with GitHub Pages"
description: "Enable GitHub Pages using GitHub Actions or direct branch publishing."
order: 3
---

# Deploying with GitHub Pages

Once your content is pushed to GitHub, follow these steps:

## Navigate to Pages settings

Go to your repo → **Settings** → **Pages** (under **Code and automation**).

## Select a source

Choose your deployment method:

- **✅ GitHub Actions** — uses `.github/workflows/deploy.yml`
    ![image-gh](./assets/image-gh.png)

- **Deploy from a Branch** — choose branch and folder (`/dist`)
    ![image-fb](./assets/image-fb.png)

## Get your site URL

GitHub will generate a URL such as:

```bash
https://your-username.github.io/your-repository/
```

For GitHub Actions with tag-based triggers, see the [GitHub Pages Environment guide](/docs/github-pages/configuring-environment).
