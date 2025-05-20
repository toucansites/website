---
type: post
title: "Beta 4 migration guide"
description: "Migration guide for Toucan Beta 4"
publication: "2025-05-20 10:00:00"
tags:
- releases
authors:
- gabor-lengyel
featured: true
draft: true

---

Here's a list of the most important changes in [this](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.4) release:

## Optional Type File Removal via Pipelines

Toucan now allows pipelines to define their own types. This means you can **remove separate type files** like `api.yml`, `rss.yml`, or or `sitemap.yml` **if**:

- You add `definesType: true` to the corresponding pipeline
- You **move the `queries:` block** from the type file into the pipeline

```yaml
definesType: true
queries:
  - from: ...
```

> You can continue using separate type files — they are **not deprecated**. This is an optional simplification that reduces the number of files by allowing fewer type files.

---

## File and Directory Restructuring

To align with the updated conventions in Beta 4, migrate files as follows:

| **From** | **To** |
|------|----|
| `src/themes/default/types/` | `src/types/` |
| `src/themes/default/blocks/` | `src/blocks/` |
| `src/contents/assets/` | `src/assets/` |
| `src/contents/site.yml` | `src/site.yml` |

---

## Home Content Migration

In Beta 4, the `home/` directory is no longer special. To migrate:

- **Move all content** from:

   ```yaml
   src/contents/home/
   ```

   to:

   ```yaml
   src/contents/
   ```

- **Delete** the `slug: ""` field from the home page frontmatter.

- In the corresponding type file `src/types/page.yml`, add (if missing):

   ```yaml
   default: true
   ```

   This declares the `page` type as the default, which Toucan will use for the homepage.

---

## Required Asset Configuration in Pipelines

Asset handling must be explicitly defined in your pipelines if your project uses stylesheets, scripts, or images. The following are **standard configuration examples** that should be included as needed.

### Sample for HTML Pipeline

```yaml
assets:
  behaviors:
    - id: copy
  properties:
    - action: add
      property: css
      resolvePath: true
      input:
        name: "style"
        ext: "css"
    - action: add
      property: js
      resolvePath: true
      input:
        name: "main"
        ext: "js"
    - action: set
      property: image
      resolvePath: true
      input:
        name: "cover"
        ext: "jpg"
```

### Sample for API Pipeline (if images are used)

```yaml
assets:
  properties:
    - action: set
      property: image
      resolvePath: true
      input:
        name: "cover"
        ext: "*"
```

> These configurations are **examples only**. Use or adapt them as needed based on your pipeline’s behavior.

---

## Transformer Update

The `url` transformer has been renamed to `path`. Update your pipeline files accordingly:

```yaml
transformers:
    post:
        run: 
            - name: swiftinit
              path: src/transformers
              arguments: {}
        isMarkdownResult: false
```
