---
category: "templates"
title: "Basics"
description: "Learn the basics of Toucan templates for easy customization and design"
order: 1
---

# Basics
---

Toucan templates are typically located in the `templates` directory in your project.

A template consists of the following components:
- Assets
- Views
- Metadata

Here’s a tree view of the directory structure:

```sh
.
├── contents
└── templates
    └── default
        ├── template.yml
        ├── assets
        └── views
```

The default template, located in the `templates/default` folder, is used when rendering the site. However, this can be modified via the configuration file.

```yml
templates:
  current: 
    path: try-o-template
```

## Assets

Each template can provide static asset files within the `assets` folder. All files inside the `assets` directory will be recursively copied to the root folder of the generated site.

## Views

Toucan uses the Mustache template engine to render HTML from Markdown files and refers them as `views`. They are located in the `views` folder of the template and use the `.mustache` extension.

When referencing a view in your content's front matter: delete the file extension, convert slashes to dots in the file path. Add the pipeline name where you need this view, or use * for all pipelines.

```yaml
views: 
  html: "pages.home"
# References:
# pages/home.mustache
```

If Toucan cannot find a template by reference, it will emit a warning during site generation.

## Metadata

Each template in Toucan includes a `template.yml` file located in the root of the template directory. This file provides essential metadata that describes the template and is used by the Toucan system to ensure compatibility and attribution.