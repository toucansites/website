---
category: "getting-started"
title: "Project structure"
description: "Customize your Toucan site with the config file to modify default locations, naming conventions, and enhance your website effortlessly."
order: 2
---

# Project structure
---

A static website built with Toucan has several important parts, including assets, blocks, contents, pipelines, content types, and templates. Each of these components is stored in its own folder, making it easy to keep your project organized and manage your website’s structure.

The main directory is the core of your website. It contains all the important files and folders you need to build your static site. Here’s how the minimal starter project is set up:

```sh
.
├── LICENSE
├── Makefile
├── README.md
├── assets
│   ├── CNAME
│   ├── css
│   │   └── style.css
│   └── images
│       └── logo.png
├── config.yml
├── contents
│   ├── 404
│   │   └── index.md
│   ├── [home]
│   │   └── index.md
│   ├── about
│   │   └── index.md
│   └── sitemap.xml
│       └── index.yml
├── pipelines
│   ├── 404.yml
│   ├── html.yml
│   ├── redirect.yml
│   └── sitemap.yml
├── site.yml
├── templates
│   └── default
├── toucan.yml
└── types
    ├── not-found.yml
    ├── page.yml
    └── redirect.yml
```

You can think of this structure as the blueprint for your site. Each folder and file has its own purpose, which helps keep everything organized. This makes it easy to update or expand your project in the future. Here is a brief explanation of what each item does:

- `LICENSE`, `Makefile`, `README.md`: Standard project files for licensing, build automation, and documentation.

- `assets/`: Contains site-wide (globally available) static files like images, CSS, and other resources. For example, you’ll find your site’s logo in `images/` and styles in `css/`.

- `config.yml`: This file is the main configuration for your project’s default target. You can use it to choose where the main components are stored and set options for different languages or regions. 

- `contents/`: This is where your site’s content lives. Each folder (like `about/` or `404/`) holds Markdown files for different pages. For example, `about/index.md` is your About page, and `404/index.md` is your custom error page.

- `pipelines/`: Defines how your content is processed and transformed into HTML. Each `.yml` file here represents a different pipeline, such as for standard pages, redirects, or sitemaps.

- `site.yml`: Lets you set global site properties — name, description, navigation, and custom context variables for templates. 

- `templates/`: This folder contains your Mustache templates. The `default` folder is usually where your main layout is stored. Toucan lets you use different build targets and templates, so you can easily create various versions or styles for your website.

- `toucan.yml`: This file contains the global settings for your project’s build targets and environments. For example, you can use it to set up a development version and a production version of your website. 

- `types/`: Defines content types for your site, like pages, redirects, or custom types you might add.

To see your changes appear on the website, update the files in the `contents` directory and then regenerate the site. Let's update a few things in the `[home]/index.md` file:

```text
---
title: "Hello, World!"
description: "Welcome to the home page."
views:
    html: pages.home
---

# Hello, World!

Welcome to the home page.
```


Toucan has a built-in `watch` command that makes the generation process a bit easier. It keeps an eye on changes in the source directory and automatically rebuilds your site whenever you make edits:

```sh
toucan watch
```

With the `toucan serve` command running in a terminal, refresh your browser window (ensure the cache is disabled) to instantly view updates made to the source directory.

Feel free to experiment and create your own content using plain Markdown. In the [next guide](/docs/getting-started/build-targets/), we will look at how build targets work and show you how to make a production-ready version of your website.
