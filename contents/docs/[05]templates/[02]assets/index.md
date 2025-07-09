---
category: "templates"
title: "Assets"
description: "Template assets are static files that are copied recursively to the root folder of the generated site"
order: 2
---

# Assets
---

Template assets are static files—such as CSS, JavaScript, images, or fonts — that are bundled with your template and copied to the output directory during site generation.

All files located in the assets directory are recursively copied to the root of the generated site. The internal folder structure is preserved exactly as defined in the template.

## Example

A typical asset structure might look like this:

```sh
.
└── assets
    ├── css
    │   └── theme.css
    ├── javascript
    │   └── theme.js
    └── images
        ├── foo.jpg
        ├── bar.jpg
        └── baz.png
```

In the final build, these files will be available at:

```sh
/css/theme.css
/javascript/theme.js
/images/foo.jpg
/images/bar.jpg
/images/baz.png
```

> Assets can be referenced from both Markdown content and Mustache templates using these root-relative paths.

## Overriding Assets

If a site-level asset shares the same path and filename as a template asset, the site-level version will take precedence. This allows developers to override default template assets without modifying the template itself — making customization straightforward.