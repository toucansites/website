---
category: "github-pages"
title: "Using a Custom Domain"
description: "Point your GitHub Pages site to a custom domain and set up HTTPS."
order: 5
---

# Using a Custom Domain

You can use a custom domain (e.g. `www.example.com`) instead of the default GitHub Pages URL.

## Steps

1. Go to your repo → **Settings** → **Pages**
2. Under **Custom domain**, enter your domain and click **Save**
    ![image-gd](./assets/image-gd.png)

> If using Deploy from a Branch, GitHub creates a `CNAME` file automatically.  
> If using GitHub Actions, you must manually include a `CNAME` file in the `dist/` folder before deployment.

---

## DNS Configuration

### Apex Domain (`example.com`)

Create **A records**:

```bash
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Subdomain (`www.example.com`)

Create a **CNAME** record pointing to:

```bash
username.github.io
```

---

## Enforce HTTPS

Once DNS has propagated (may take up to 24 hours):

- Return to **Settings → Pages**
- Enable **Enforce HTTPS**