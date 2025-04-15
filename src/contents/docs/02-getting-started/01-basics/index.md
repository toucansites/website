---
id: "basics"
slug: "docs/getting-started/basics"
category: "getting-started"
order: 1
################################################################################
title: "Basics"
description: "Learn the basics and fundamentals to get started easily"
---

# Basics
---

Toucan is a modern static site generator, written in Swift, that converts Markdown files into HTML files using a theme.

## Prerequisites

Before you start this guide you must install the Toucan binary by following the provided [installation](/docs/installation/) guide.

You should also be comfortable using the command line.

## Minimal example

To begin using Toucan, we're going to use a minimal example project as a starting point.

In order to create a new site, you can run the toucan init command, this will bootstrap a new website:

```sh
toucan init
```

This will download a minimal started theme and initialize a basic website inside a newly created site directory to get started with.

> Tip: You can use `toucan init my-site` to create a custom folder instead of `site`.

The newly created site directory will contain the source materials for your website, (src directory) like the contents, pipelines, themes, content type definitions etc. In order to make the final website, we have to render the source, this means generating the final html files using the source markdown files and the render pipeline.

In order to generate the final contents, run the generate command:

```sh
# move to the site directory
cd site
# generate the final website
toucan generate
#2025-04-15T18:03:52+0200 info toucan : baseUrl=nil input=./src output=./docs [toucan_generate] Site generated successfully.
```

The final website contents will be under a newly created docs folder, you can host these files on a file server, or using a static website hosting provider, like GitHub Pages, but if you want to do that, you have to make sure that you use the correct [base url](/docs/getting-started/commands/), which is essentially your domain name. Right now the docs folder contains a local development version of the generated website, which can be previewed by running the following command:

```sh
toucan serve
```

Now if you navigate to http://localhost:3000 you should see a basic website. Congratulations you just created your very first static website with Toucan.

## Source materials

The src directory contains the source materials for the website. This directory will contain all content, and theme files. This guide provides a quick setup using a minimal starter theme. Let's examine the directory structure real quick:

```sh
.
├── config.yml
├── contents
│   ├── assets
│   │   ├── CNAME
│   │   ├── css
│   │   │   └── style.css
│   │   └── images
│   │       └── logo.png
│   ├── 404
│   │   └── index.md
│   ├── about
│   │   └── index.md
│   ├── home
│   │   └── index.md
│   ├── sitemap.xml
│   │  └── index.yml
│   └── site.yml
├── pipelines
└── themes
```

The `config.yml` file contains Toucan related configurations, you can read more about it in the next guide.

The contents folder is where you put the Markdown files and public assets, like javascript, css or images. The home/index.md file is essentially your home page, the about/index.md file represents an about page, likewise the 404/index.html corresponds the not found page.

The sitemap.xml file represents a basic sitemap for the website.

The site.yml is where you can configure your site related properties, such as the name, description, base url (domain name) and navigation structure. You can put other variables here if you want to provide more things for the template files as context variables. See template guides.

Try to change something in the contents directory, and make sure you re-generate the site. Oh by the wait, we have a built-in watch command which can check file changes in the source directory and automatically regenerate everything:

```sh
toucan watch
```

Now if you refresh the browser window (make sure browser cache is disabled and the `toucan serve` command is also running in a terminal window) you should instantly see the changes when you edit something in the source directory.

To learn more about how Toucan works, continue with our guides or check out the open-source reference projects. More documentation and tutorials will be available soon. For any questions, feel free to contact us.
