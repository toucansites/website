---
category: "getting-started"
title: "Commands"
description: "Toucan CLI commands for static site generation, hosting, and deployment"
order: 2
---

# Commands
---

Toucan includes the following built-in subcommands to generate static sites: _init_, _generate_, _watch_, and _serve_.

## Init

The `init` command initializes a new Toucan project. It takes an optional argument for the project directory name (defaults to `site` if not specified). It creates the necessary directories and files for your project inside the specified directory.

```sh
toucan init my-site
# 2024-12-15T12:15:32+0100 info toucan : [toucan_cli] Preparing source files.
# 2024-12-15T12:15:34+0100 info toucan : [toucan_cli] Preparing theme files.
#2024-12-15T12:15:34+0100 info toucan : [toucan_cli] 'my-site' was prepared successfully.
cd my-site
```

## Generate

The `generate` command builds static files from the source folder. The static site will be available in a destination directory, which can be customized. Additionally, the site's base URL can be overridden, which is useful for local development.

```sh
toucan generate ./src ./docs --base-url http://localhost:3000/
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected.

```sh
toucan watch ./src ./docs --base-url http://localhost:3000/
```

## Serve

The serve command starts a web server to serve a specified directory. It allows serving a folder with an optional port number. By default, your site will be accessible at `http://localhost:3000/` if run as follows:

```sh
toucan serve ./docs -h localhost -p 3000
toucan serve ./docs --host localhost --port 3000
```

You can specify a hostname and port parameter to bind your web server to a given address. This allows you to preview your website at http://localhost:3000/.
