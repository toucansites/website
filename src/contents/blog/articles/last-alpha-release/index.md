---
type: post
title: "Last alpha release"
description: "Toucan 1.0.0-alpha.3 is now released, this article will help you to understand the changes and to migrate your site from alpha 2."
publication: "2024-10-15 00:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
featured: true
---

The alpha testing phase for Toucan is now finished with the release of the final alpha version, [1.0.0-alpha.3](https://github.com/toucansites/toucan/releases). We are preparing to begin the beta release cycle shortly.

## Migration guide & docs

Toucan 1.0.0-alpha.3 introduces several changes. The [documentation](/docs/) has been updated to reflect these updates. Here’s a step-by-step guide on how to update your existing website to reflect the changes.

### Content changes

- Move the `src/types` folder into `themes/default/` directory.

- Rename the `src/content` folder to `src/contents`.

- Move the `index.md` file to `home/index.md`.

- Create a new `index.yml` file in the `contents` directory.

- Move out the site section from your `config.yml` file to this newly created 
site `index.yml` file, e.g.:

```yml
baseUrl: "https://mywebsite.com/"
language: "en-US"
title: "My website"
description: "This is my personal website."
dateFormat: "yyyy.MM.dd."
navigation:
    - label: "Home"
      url: "/"
    - label: "About"
      url: "/docs/"
```

### Config changes

If you were using the **content transformer** feature, move the content-type transformer configuration into the `config.yml` file:

```yml
transformers:
    pipelines:
        # run the following scripts for post the type
        post: 
          run: 
            - name: swiftinit
          # indicates that the result is already HTML
          isMarkdownResult: false # default: true
```

Otherwise if you had no special configuration, feel free to completely remove the config file, to use the defaults.

### Theme changes

- Move the `index.mustache` file to `pages/home.mustache`.

- Move the `404.mustache` file to `pages/404.mustache`.

- Move the `pages/single/page.mustache` file to `pages/default.mustache`.

- Update / remove the `template:` front matter key in your home and not found page.

- Rename the `blocks` folder to `partials`, this is the recommended name now.

- Search for `{{> blocks` and replace with `{{> partials` in the template files.

Follow the same logic for for all your custom types, e.g.:
- `blog.index` -> `blog.home`
- `blog.authors.index` -> `blog.authors`
- `blog.single.tag` -> `blog.tag.default`
- `blog.blocks` -> `partials.blog` 
- `{{> blog.blocks` -> `{{> partials.blog`

That’s all you need to do to support the latest alpha release. Feel free to explore the sample repositories, all of which are up-to-date with the recent changes:

- [The.Swift.Dev](https://github.com/theswiftdev/blog)
- [toucansites.com](https://github.com/toucansites/website)
- [Minimal example](https://github.com/toucansites/minimal-example)
- [Swift on Server](https://github.com/swift-on-server/site/)

We hope you enjoy using Toucan, and your feedback is greatly appreciated. 🙏







