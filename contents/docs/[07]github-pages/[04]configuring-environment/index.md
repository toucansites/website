---
category: "github-pages"
title: "Configuring GitHub Pages Environment"
description: "Set up the github-pages environment required for tag-based GitHub Actions deployments."
order: 4
---

# Configuring GitHub Pages Environment

If your deployment workflow uses **tag-based or branch-based triggers**, GitHub requires a dedicated environment named `github-pages`.

## Setup Steps

1. Go to your GitHub repo → **Settings** → **Environments**.
2. Click **New environment**, and name it `github-pages`:
   ![image-add](./assets/image-add.png)

3. In the environment view:
   - Under **Deployment branches and tags**, click the dropdown
   - Select **Selected branches and tags**
    ![image-drop](./assets/image-drop.png)

   - Click **Add deployment branch or tag rule**
   - Set `Ref type` to `Tag`
   - Enter a name pattern:
     - `*` (all tags)
     ![image-pat](./assets/image-pat.png)
     - or `*/*` (for namespaced tags like `release/v1.0.0`)
     - Optionally add both

4. Click **Add rule**

## Example Workflow

```yaml
on:
  push:
    tags:
      - 'v*'

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/checkout@v4
      - name: Deploy site
        run: echo "Deploying..."
```

## Important

If this environment isn’t configured, deployments will fail with:

> "Tag "1.0.0-beta.2" is not allowed to deploy to github-pages due to environment protection rules."
