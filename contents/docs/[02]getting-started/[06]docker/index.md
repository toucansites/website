---
category: "getting-started"
title: "Docker"
description: "Learn how to use Toucan CLI with Docker to easily build and deploy static sites on any system"
order: 6
---

# Docker
---

Toucan is available via Docker using the official [`toucansites/toucan`](https://hub.docker.com/repository/docker/toucansites/toucan/general) image. 

This approach removes the need to install anything locally and provides a consistent environment on any system.

Before running the following commands, please make sure [Docker is installed](https://docs.docker.com/engine/install/) and running on your computer:

```sh
docker --version
# Docker version 28.3.0, build 38b7060
```

## Init

The `init` command initializes a new Toucan project. It takes an optional argument for the project directory name (defaults to `site` if not specified). It creates the necessary directories and files for your project inside the specified directory:

```sh
docker run --rm -v $(pwd):/app/site \
  --entrypoint toucan \
  toucansites/toucan:latest \
  init my-site
```

## Generate

The `generate` command compiles your project's content and templates into static site files. This is a required step before serving or deploying your website:

```sh
docker run --rm -v $(pwd):/app/site \
 --entrypoint toucan \
 toucansites/toucan:latest \
 generate /app/site
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected:

```sh
docker run --rm -v $(pwd):/app/site \
  --entrypoint toucan \
  toucansites/toucan:latest \
  watch /app/site
```

## Serve

The `serve` command launches a local web server for previewing the generated site:

```sh
docker run --rm -v $(pwd):/app/site -p 3000:3000 \
  --entrypoint toucan \
  toucansites/toucan:latest \
  serve --hostname "0.0.0.0" --port 3000 ./site/dist
```

Once you run the command above, you will be able to access your site at [http://localhost:3000](http://localhost:3000/).
