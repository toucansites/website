---
category: "getting-started"
title: "Directory structure"
description: "Customize your Toucan site with the config file to modify default locations, naming conventions, and enhance your website effortlessly."
order: 2
---

# Directory structure
---

The `src` directory serves as the foundation of your website, housing all the essential source materials required to build your static site. This includes content files, themes, and configuration files. Below is an overview of the directory structure:

```sh
.
└── src
    ├── assets
    ├── blocks
    ├── config.yml
    ├── contents
    │   ├── 404
    │   │   └── index.md
    │   ├── assets
    │   ├── index.md
    │   ├── about
    │   │   └── index.yml
    │   └── sitemap.xml
    │       └── index.yml
    ├── pipelines
    ├── site.yml
    ├── themes
    └── types
```

- The `config.yml` file contains Toucan-specific configurations. You can learn more about it in the next guide.
- The `contents` folder is where you store Markdown files and public assets, such as JavaScript, CSS, or images. For example:
    - `index.md` serves as your home page toghether with the `assets` folder.
    - `about/index.md` represents an about page.
    - `404/index.md` corresponds to the "not found" page.
- The `sitemap.xml` directory, with its `index.yml` file, provides a basic sitemap for your website.
- The `site.yml` file allows you to configure site-related properties, such as the name, description, base URL (domain name), and navigation structure. You can also define additional variables here to pass context to your template files. Refer to the template guides for more details.

To see changes reflected on your website, modify files in the `contents` directory and regenerate the site. Toucan offers a built-in `watch` command to streamline this process. It monitors file changes in the source directory and automatically regenerates the site:

```sh
toucan watch
```

With the `toucan serve` command running in a terminal, refresh your browser (ensure the cache is disabled) to instantly view updates made to the source directory.

For more insights into how Toucan works, explore our guides or review open-source reference projects. Additional documentation and tutorials will be available soon. If you have any questions, feel free to reach out to us.
