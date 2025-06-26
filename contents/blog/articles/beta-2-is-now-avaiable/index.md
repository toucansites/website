---
type: post
title: "Beta 2 is now available"
description: "The second beta release of Toucan is now available. This release includes many improvements and some new features."
publication: "2024-12-15 00:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
featured: false
---

Here's a list of the most important changes in [this](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.2) release:


- Utilize a temporary directory for site generation.

- The Base URL now consistently eliminates any trailing slashes.
- Resolved an issue with asset resolution that was related to base URLs.

- Introduced support for default values of content type properties (currently limited to String values, with plans for type safety in a future release).

```yml
properties:
    featured:
      type: bool
      required: true
      defaultValue: "false"
```


- It is now possible to create basic API endpoints for content types by including the `api` property along with the desired JSON output file name in the content type definition. This allows for straightforward searching and filtering of content using frontend JavaScript.

```yml
api: posts
```

- Add config option to support custom RSS xml file name.

```yml
contents:
  rss:
    output: feed.xml
```

- Introduce basic SEO checks using the `--seo-checks` flag. This feature will identify common SEO issues, including the length of the title and description, as well as the presence of canonical URLs. Furthermore, it will evaluate H1 and meta tags if a keyword is specified in the front matter.

```yml
keyword: "static site generator"
```

See the [release notes](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.2) for more details.







