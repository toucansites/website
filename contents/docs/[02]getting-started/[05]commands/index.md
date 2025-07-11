---
category: "getting-started"
title: "Commands"
description: "Toucan CLI commands for static site generation, hosting, and deployment"
order: 5
---

# Commands
---

Toucan includes the following built-in subcommands to generate static sites: _init_, _generate_, _watch_, and _serve_.

## Init

The `init` command initializes a new Toucan project. It takes an optional argument for the project directory name (defaults to `site` if not specified). It creates the necessary directories and files for your project inside the specified directory.

```sh
toucan init my-site
```

## Generate

The `generate` command creates static files for your website using the build target you specify. If you want to learn more about how to set up and use build targets, please read our detailed guide on [target settings](/docs/getting-started/build-targets/).

```sh
toucan generate --target dev
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected.

```sh
toucan watch --target dev
```

## Serve

The `serve` command starts a local web server to host a specified directory. It allows serving a folder with an optional port number. By default, your site will be accessible at `http://localhost:3000/` if run as follows:

```sh
toucan serve ./dist -h localhost -p 3000
```

You can specify a hostname and port parameter to bind your web server to a given address. This allows you to preview your website at [http://localhost:3000/](http://localhost:3000/).

You can also run Toucan commands using Docker. For more information on how to do this, please refer to the [next guide](/docs/getting-started/docker/).
