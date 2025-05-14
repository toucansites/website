---
id: "basics"
category: "themes"
order: 1
################################################################################
title: "Basics"
description: "Learn the basics of Toucan themes for easy customization and design"
---

# Basics
---

Toucan themes are typically located in the `src/themes` directory.

A theme consists of the following components:
- Assets
- Mustache templates

Here’s a tree view of the directory structure:

```sh
.
├── contents
└── themes
    └── default
        ├── assets
        └── templates
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
