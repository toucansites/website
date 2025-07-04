---
category: "github-pages"
title: "Deploying with GitHub Pages"
description: "Configure GitHub Pages to serve your site using either a GitHub Actions workflow or direct branch publishing, and verify the published site URL."
order: 3
---

# Deploying with GitHub Pages

After pushing your content to GitHub, configure GitHub Pages to publish your website using one of the supported deployment methods.

## Navigate to Pages settings

Navigate to your repository on GitHub. In the top menu, go to **Settings** → **Pages** under the **Code and automation** section.

## Select a Deployment Source

Choose how you want GitHub Pages to deploy your site:

- **GitHub Actions (Recommended)**  
  Use this option to enable a flexible, automated deployment pipeline via `.github/workflows/deploy.yml`.  
  ![image-gh](./assets/image-gh.png)

  > If your repository does not include the `deploy.yml` file, you can find an example at:  
  > [toucansites/github-workflows](https://github.com/toucansites/github-workflows)

- **Deploy from a Branch**  
  Select a specific branch (e.g., `main`) and optionally a folder (e.g., `/dist`) to publish static content directly.  
  ![image-fb](./assets/image-fb.png)

## Confirm the Site URL

After selecting a source, GitHub will generate and display a public URL for your site, typically in the format:

```bash
https://your-username.github.io/your-repository/
```

Use this link to verify your deployment and access your live site.

> If you are using a GitHub Actions workflow triggered by tags, refer to the [GitHub Pages Environment guide](/docs/github-pages/configuring-environment) to ensure the environment is properly authorized.
