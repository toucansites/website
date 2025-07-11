---
category: "templates"
title: "Basics"
description: "Learn the basics of Toucan templates for easy customization and design."
order: 1
---

# Basics
---

Templates in Toucan define the structure and styling used to render your site. A template typically includes `views`, static `assets`, and a `metadata` file. By default, templates are stored in the `templates` directory of your project.

Here’s an example directory structure:

```sh
.
├── contents
└── templates
    └── default
        ├── template.yml
        ├── assets
        └── views
```

The default template is located at `templates/default` and is used automatically unless overridden in your configuration file.

To use a custom template, update your configuration:

```yml
templates:
  current: 
    path: try-o-template
```

## Assets

The `assets` folder contains static files (e.g. CSS, JavaScript, images) that should be included in the final site.

During rendering, all files within assets are recursively copied to the root of the output directory, preserving their relative paths.

## Views

Toucan uses `Mustache` as its template engine. Views are `.mustache` files stored under the views folder in your template.

Views define how individual content types are rendered using context data generated during the pipeline phase.

When referencing a view in front matter or pipeline configuration:
- Remove the file extension
- Replace slashes with dots
- Scope the view to a specific pipeline or use `*` for all

Example:

```yaml
views: 
  html: "pages.home"
```

This maps to the file:

```sh
views/pages/home.mustache
```

If Toucan cannot resolve a view reference, a warning will be emitted during site generation.

## Metadata

Each template must include a `template.yml` file at its root. This file provides metadata about the template, including:
- Template name and version
- Author information
- Compatibility flags

The metadata file is used by the Toucan system to identify and validate templates at runtime.