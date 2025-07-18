---
category: "content-management"
title: "Content Bundles"
description: "Content bundles are used to efficiently manage and structure content"
order: 3
---

# Content Bundles
---

Content or page bundles are used to render every page on your website. The location of each page bundle determines the slug, or URL path, of your page.

A page bundle is essentially a folder containing an `index` file. The file extension can be:

- `.md`
- `.markdown`
- `.yml`
- `.yaml`

When using markdown files, front matter properties can be added at the top of the file. If using a YAML file, it will be parsed as the front matter. It’s also possible to separate the content and front matter by using both `index.yml` for front matter and `index.md` for content.

In this example, you have a folder named `about`. The name of the folder becomes the slug:

```text
about           # about is the slug of your page
├── index.md    # contains the markdown content
└── index.yml   # contains the front matter
```

Inside the about folder, there are two files:

- `index.md`: This file contains the main markdown content for the page, such as text, images, and formatting.
- `index.yml`: This file holds the front matter keys, which are the metadata for the page (like the title, description, or custom key-value pairs).

> You do not need to create a separate YAML file — the front matter can be included directly at the top of your markdown file if you prefer.

By organizing your content this way, you keep the page’s content and its configuration neatly separated, making it easier to manage and update. 


## Slug Management

The slug of the page is determined by the directory name. The `contents` directory is always set as the home page of the website, and the "not found" page is typically placed in a `404` folder.

These paths can be customized using a configuration file, and all other pages will have slugs based on the directory structure. For example, if the structure is `/a/b/c` with an `index.md` file inside `c`, the slug would be `/a/b/c/`.

To exclude a path component from the slug, place an empty `noindex.yml` file in that directory. For instance, if `noindex.yml` is added to the `b` directory, the slug would become `/a/c/`.

### Square Brackets

You can use square brackets with a number in your folder names to have ordered contents. Square brackets will be trimmed, yet your content will keep the desired order.

```text
.
├── [01]installation
│   ├── [01]macos
│   │   └── index.md
│   ├── [02]linux
│   │   └── index.md
│   ├── [03]windows
│   │   └── index.md
│   └── index.md
└── [02]getting-started
    ├── [01]basics
    │   └── index.md
    ├── [02]commands
    │   └── index.md
    ├── [03]config
    │   └── index.md
    └── index.md
```

Anything you put inside square brackets in your folder names will be removed from the slug. For example, `[02]getting-started/[01]basics` will result in the slug `getting-started/basics`. If needed, you can override this by setting a custom slug using the `slug` front matter key.

### Noindex files

Another way to exclude a folder from the slug is to place a `noindex.yml` or `noindex.yaml` file inside that folder.

```text
.
└── 2024
    ├── hello-world
    │   └── index.md
    ├── noindex.yml
    └── sample-post
        ├── index.md
        └── index.yml
```

In this example, the `2024` folder will be completely excluded from the slug.

> Use **[home]** to place your home page contents inside a directory if you want to keep a consistent folder structure for all your pages.

## Iterator bundles 

There is a special type of content bundle called an iterator bundle. Iterator bundles are used to render paginated content, and they are identified using curly braces.

To learn more about how iterators work, please refer to the corresponding [documentation](/docs/rendering/iterators/).

## Asset management

Each page bundle can include its own assets, which can be referenced in markdown files using relative paths, such as `./assets/my-picture.png`.

By default, content assets are stored in the **assets** folder. However, you can change this location by adjusting the content [configuration](/docs/getting-started/configuration/) settings.

---

To dive deeper, start with the [Front Matter](/docs/content-management/front-matter/) section, then explore how to structure [Markdown content](/docs/content-management/markdown/) and extend it using custom [blocks](/docs/content-management/block-directives/).