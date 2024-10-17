---
type: guide
title: Basics
description: "The basics about Toucan themes."
category: themes
order: 1
---

# Basics
---

Toucan themes are typically located in the `src/themes` directory.

A theme consists of the following three components:
- Assets
- Mustache templates
- Content types

Here’s a tree view of the directory structure:

```sh
.
├── contents
└── themes
    └── default
        ├── assets
        ├── templates
        └── types
```

The default theme, located in the `src/themes/default` folder, is used when rendering the site. However, this can be modified via the configuration file.

## Assets

Each theme can provide static asset files within the `assets` folder. All files inside the `assets` directory will be recursively copied to the root folder of the generated site.

## Templates

Toucan uses the Mustache template engine to render HTML from Markdown files. These templates are located in the `templates` folder and use the `.mustache` extension.

To reference a template file in the front matter of your content, remove the file extension and replace slashes with dots in the file path:

```yaml
template: "pages.home" 
# References:
# pages/home.mustache
```

If Toucan cannot find a template by reference, it will emit a warning during site generation.

## Content Types

A [content type](/docs/themes/content-types) serves as a template for your content. A theme can provide multiple content types. For instance, a blog site might need content types for posts, authors, and tags.














