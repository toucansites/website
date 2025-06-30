---
category: "getting-started"
title: "Docker Commands"
description: "Toucan CLI commands via Docker for static site generation, hosting, and deployment"
order: 3
---

# Docker Commands
---

Toucan CLI is fully available via Docker using the [`toucansites/toucan`](https://hub.docker.com/repository/docker/toucansites/toucan/general) image. This method eliminates the need for local installation and ensures a consistent environment across different systems.

## Init TODO

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

Run the following:

```sh
docker run --rm -v $(pwd):/app/site -p 3000:3000 \
  --entrypoint toucan \
  toucansites/toucan:latest \
  serve --hostname "0.0.0.0" --port 3000 ./site/dist
```

After running the above, your site will be accessible at `http://localhost:3000`.
