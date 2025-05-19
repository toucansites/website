---
category: "content-management"
title: "Content Bundles"
description: "Content bundles are used to efficiently manage and structure content"
order: 3
---

# Content Bundles
---

Content bundles are used to render every page on the website. A page bundle is essentially a folder containing an `index` file. The file extension can be:

- `.md`
- `.markdown`
- `.yml`
- `.yaml`

When using markdown files, front matter properties can be added at the top of the file. If using a YAML file, it will be parsed as the front matter.

It’s also possible to separate the content and front matter by using both `index.yml` for front matter and `index.md` for content.

## Slug Management

The slug of the page is determined by the directory name. The `home` directory is always set as the home page of the website, and the "not found" page is typically placed in a `404` folder.

These paths can be customized using a configuration file, and all other pages will have slugs based on the directory structure. For example, if the structure is `/a/b/c` with an`index.md` file inside `c`, the slug would be `/a/b/c/`.

To exclude a path component from the slug, place an empty `noindex.yml` file in that directory. For instance, if `noindex.yml` is added to the `b` directory, the slug would become `/a/c/`.

## Asset Management

Each page bundle can include its own assets, which can be referenced in markdown files using relative paths, such as `./assets/my-picture.png`.

If a `style.css` file is placed in the assets folder, it will automatically be loaded and applied to the page. Similarly, placing a `main.js` file in the assets folder will automatically load and execute the JavaScript on the page.

## Markdown

The [next section](/docs/content-management/markdown/) covers how to utilize markdown files, front matter, and custom block directives to enhance and enrich your content effectively.
