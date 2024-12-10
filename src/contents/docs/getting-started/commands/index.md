---
type: guide
title: "Commands"
description: "Toucan CLI commands for static site generation, hosting, and deployment"
category: getting-started
order: 2
---

# Commands
---

Toucan includes three built-in subcommands to generate static sites: _generate_, _watch_, and _serve_. 

## Generate

The `generate` command builds static files from the source folder. The static site will be available in a destination directory, which can be customized. Additionally, the site's base URL can be overridden, which is useful for local development.

```sh
toucan generate ./src ./docs --base-url http://localhost:3000/
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected.

> Please note that the `watch` command is only available on macOS during the beta release.​

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
