---
category: "getting-started"
title: "Docker"
description: "Learn how to use Toucan CLI with Docker to easily build and deploy static sites on any system"
order: 6
---



# Docker
---

Toucan CLI is fully available via Docker using the [`toucansites/toucan`](https://hub.docker.com/repository/docker/toucansites/toucan/general) image. This method eliminates the need for local installation and ensures a consistent environment across different systems.

Make sure Docker is installed and running on your system and please refer to our Docker guide for more information.

```sh
docker --version
# Docker version 28.3.0, build 38b7060
```

## Init

The `init` command initializes a new Toucan project. It takes an optional argument for the project directory name (defaults to `site` if not specified). It creates the necessary directories and files for your project inside the specified directory.

Execute the following:

```sh
docker run --rm -v $(pwd):/app/site \
  --entrypoint toucan \
  toucansites/toucan:latest \
  init my-site
```

## Generate

The `generate` command compiles your project's content and templates into static site files. This is a required step before serving or deploying your website.

Execute the following:

```sh
docker run --rm -v $(pwd):/app/site \
 --entrypoint toucan \
 toucansites/toucan:latest \
 generate /app/site
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected.

Execute the following:

```sh
docker run --rm -v $(pwd):/app/site \
  --entrypoint toucan \
  toucansites/toucan:latest \
  watch /app/site
```

## Serve

The `serve` command launches a local web server for previewing the generated site.

Execute the following:

```sh
docker run --rm -v $(pwd):/app/site -p 3000:3000 \
  --entrypoint toucan \
  toucansites/toucan:latest \
  serve --hostname "0.0.0.0" --port 3000 ./site/dist
```

After running the above, your site will be accessible at `http://localhost:3000`.
