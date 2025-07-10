---
category: "github-pages"
title: "Using a Custom Domain"
description: "Configure GitHub Pages to serve your site from a custom domain by setting up DNS records and enabling HTTPS for secure delivery."
order: 5
---

# Using a Custom Domain

You can configure your GitHub Pages site to be served from a custom domain, such as `www.example.com`, instead of the default GitHub URL.

## Steps

1. Navigate to your repository on GitHub. Go to **Settings** → **Pages**.

2. Under the **Custom domain** section, enter your domain name and click **Save**.  
   ![image-gd](./assets/image-gd.png)

> If you are using **Deploy from a Branch**, GitHub will create a `CNAME` file in the root of the publishing branch when you save a custom domain via the Pages settings.
>
> If you are using **GitHub Actions**, you must ensure that a `CNAME` file is present in the deployed directory (typically `dist/`) at the time of deployment.  
> You may store the `CNAME` file elsewhere (e.g., `assets/CNAME`) and move it during the build process.

---

## DNS Configuration

### For Apex Domains (`example.com`)

Create the following **A records** in your DNS provider’s configuration:

```bash
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### For Subdomains (`www.example.com`)

Create a **CNAME** record pointing to your GitHub Pages URL:

```bash
username.github.io
```

Replace `username` with your actual GitHub username.

---

## Enforce HTTPS

After DNS propagation is complete (which can take anywhere from a few minutes to 24 hours):

- Return to **Settings → Pages** in your GitHub repository.
- Enable the **Enforce HTTPS** checkbox to ensure secure access to your site.
