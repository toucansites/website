---
type: post
title: "Toucan is now ready for alpha testing"
description: "Here’s how you can try out Toucan, our brand-new static site generator, developed entirely in Swift."
publication: "2024-09-30 00:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
featured: false
---

## What is Toucan?

Toucan is a brand-new static site generator, developed entirely in Swift. The [first alpha](https://github.com/toucansites/toucan/releases/tag/1.0.0-alpha.1) version is now available on the project’s GitHub page.

## How to install Toucan?

To install Toucan, you can compile it from source. Ensure that Swift and Xcode are installed on your Mac. While it is possible to install Toucan on Linux, using macOS is highly recommended during the alpha release.

```sh
git clone https://github.com/toucansites/toucan.git
# install the toucan binary
make install

# alternatively, if you encounter permission errors:
sudo make install

# verify the installation
which toucan
```

## How does the Toucan command work?

Every Toucan project operates within the current directory, so when building and running the project using Xcode, you will need to set up a custom working directory.

You can generate a new website using the `generate` subcommand, which accepts two arguments: the input directory (default is `src`) and the output directory (default is `docs`). Optionally, you can override the base URL if you need to generate the site for local development.

For example, if you have a site folder with the `src` inside, you can run the following command to generate the HTML files into a docs folder:

```sh
cd my-site
toucan generate ./src ./docs --base-url "http://localhost:3000/"
```

It is also possible to quickly start a local file/web server by running the `toucan serve` command. This will launch a Hummingbird server, using the `docs` directory and port `3000` as defaults, but you can override these settings. For example:

```sh
toucan serve ./docs --port 3000
```

Now, if you open your browser, you should be able to preview the website by entering [http://localhost:3000](http://localhost:3000).

During development, it’s useful to rebuild the site automatically when changes occur in the source directory. For this purpose, we’ve implemented a `watch` command, but currently, it only works on macOS. You can try watching a directory; the command is very similar to the generate subcommand:

```sh
toucan watch ./src ./docs --base-url 'http://localhost:3000/' 
```

That’s all about the toucan command. Now, let’s focus on building a simple website.

## Getting started with Toucan-based websites

The first thing you need is a source folder where you can store all the themes, assets, and content for your website.

Feel free to grab one of our themes to get started. We also have a minimal starter project available under the [toucansites](https://github.com/toucansites) GitHub organization.

Make sure to place the theme in the `themes/default` folder. Alternatively, you can set the `theme.use` value in the site's configuration YAML to use a custom folder.

Now, you need a proper configuration for your site. Don’t worry, it can be as simple as this example:

```yaml
site:
    baseUrl: "http://localhost:3000/"
    title: "Minimal example"
    description: "This is a minimal Toucan example"
```

Next, create a content folder and add some Markdown documents.

The `index.md` will serve as the homepage for your website. Feel free to modify this file as needed.

```markdown
---
title: "Home title"
description: "Home description"
---

Welcome to the home page.
```

The section between the `---` characters is called the front matter, where you can customize the properties of your page.

The homepage and 404 page are a bit different. The homepage has no slug, and the 404 page will always be named `404.html` when the final content is generated.

Every page will use a slug based on the folder structure you create. For example, if you need a subpage called `about`, simply create a folder named about and place an `index.md` file inside it.

If you want to omit a folder from the hierarchy, just add a `noindex.yml` file to that directory. For example, consider the following structure:

```sh
.
├── 404
│   └── index.md
├── assets
├── blog
│   ├── authors
│   │   └── alan-turing
│   │       └── index.md
│   ├── index.md
│   ├── posts
│   │   └── 2024
│   │       ├── noindex.yml
│   │       └── turings-legacy-in-modern-computing
│   │           └── index.md
│   └── tags
│       └── technology
│           └── index.md
├── index.md
└── my-page
    └── index.md
```

The following pages will be available:

- `/`
- `404`
- `blog`
- `blog/authors/alan-turing`
- `blog/posts/turings-legacy-in-modern-computing`
- `blog/tags/technology`
- `my-page`

Notice the `noindex.yml`file in the 2024 folder, which is omitted from the slug.

Now that you understand the basics, feel free to create your own structure and experiment with Toucan. You can find working examples by checking the source code of [this](https://github.com/toucansites/website) website or the [theswiftdev.com](https://github.com/theswiftdev/blog) site, both available on GitHub.

That’s all you need to know to get started with Toucan. 😊
