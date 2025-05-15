---
category: "themes"
title: "Toucan themes"
description: "Toucan themes offer a streamlined approach, using Mustache, for building, customizing, and designing static sites to meet various needs and styles"
order: 4
---

# Toucan templates
---

The templates are being standardized in preparation for the 1.0.0 release. This document outlines the structure of the template files used during the beta release cycle.

## Top-level templates

There are a few top level templates that most of the themes will include inside the `themes/default/templates` folder:

```sh
html.mustache
redirect.mustache
rss.mustache
sitemap.mustache
```

The HTML template file renders most of the website’s HTML content and serves as the main entry point for every HTML page.

The redirect template is used when Toucan needs to redirect one URL to another, utilizing a simple JavaScript-based solution.

The RSS template generates the `rss.xml` file for the site.

The sitemap template generates the `sitemap.xml` file for the website.

## Page templates

The HTML template features a `main` block, that can be overwritten from other templates, every page uses a template file and creates a custom main section to render its contents.

Here are some standard page template locations:

- Deafult - `pages/default.mustache`.
- Home page - `pages/home.mustache`.
- Not found page - `pages/404.mustache`.


## Partial templates

- Navigation - `partials/navigation.mustache`
- Header - `partials/header.mustache`
- Footer - `partials/footer.mustache`
- Icons - `partials/icons.mustache`

Both partial and page templates may vary per theme; it is common practice to organize them into folders based on [content types](/docs/content-management/content-types/).
