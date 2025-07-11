---
category: "getting-started"
title: "Quickstart"
description: "Learn the basics and fundamentals to get started easily"
order: 1
---

# Quickstart
---

Toucan is a modern static site generator, written in Swift, that converts Markdown files into HTML files using a template.

## Prerequisites

It is highly recommended that you are comfortable using the command line, as many steps in this guide require running commands in a terminal. If you are new to the command line, consider reviewing a basic tutorial to help you learn how to navigate directories and execute commands.

> note: If you are unsure how to install [Homebrew](https://brew.sh/) or [Docker](https://www.docker.com/), please see our complete [installation guide](/docs/installation/) for step-by-step instructions.

You can either install the command line utility or use the [official Docker image](https://hub.docker.com/r/toucansites/toucan) to generate a static website with Toucan. To install Toucan, run the following commands, depending on your environment:

```sh
# macOS
brew install toucansites/toucan/toucan

# Linux (deb)
wget https://github.com/toucansites/toucan/releases/download/1.0.0.beta.5/toucan-linux-amd64-1.0.0.beta.5.deb
sudo dpkg -i toucan-linux-amd64-1.0.0.beta.5.deb

# Linux (rpm)
wget https://github.com/toucansites/toucan/releases/download/1.0.0.beta.5/toucan-linux-x86_64-1.0.0.beta.5.rpm
sudo rpm -i toucan-linux-x86_64-1.0.0.beta.5.rpm

# verify installation
toucan --version
```

If you don't want to install Toucan on your computer, you can use our Docker images to create your static site instead. In that case, check our [Docker guide](/docs/getting-started/docker/) for the commands you need.


## Minimal example

To get started with Toucan, let's make a simple example site. Run the command below to set up your new site:

```sh
toucan init
```

This command downloads a basic starter template and creates a new `site` folder, giving you everything you need to get started.

> tip: Use `toucan init my-site` to create a custom folder named `my-site` instead of the default `site`.

The new `site` folder will have all the files you need for your website. Your content, pipelines, themes, and content type definitions are all stored in this main folder.

To turn these source files into your finished website, you need to run a few more commands. The next step is to convert your Markdown files and other assets into final HTML files using the render pipeline.

To generate your website, use the following command:

```sh
# navigate to the site directory
cd site

# generate the final website
toucan generate
```

The generated website files will be located in a newly created `dist` folder. 

> note: You can host these files on a file server or with a static website provider like GitHub Pages. If you decide to publish your site, make sure you built it with the right [target](/docs/getting-started/build-targets/) for your hosting service.

Right now, the `dist` folder has a local version of your website for development. To see it in your browser, run this command:

```sh
toucan serve
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to view your new website. You should see a simple static site created by Toucan. Congratulations! You have successfully built your first static website using Toucan.

In the [next guide](/docs/getting-started/directory-structure/), we will take a closer look at the contents of the site folder and show you how to make basic changes to your website.

