---
category: "rendering"
title: "Engines"
description: "Configure template engines in Toucan pipelines to render HTML or JSON output."
order: 5
---

# Engines
---

Toucan supports two rendering engines for generating output:
- `mustache` — Renders text-based output using Mustache [views](/docs/templates/views).
- `json` — Produces structured JSON output, typically used for APIs.

Engines are defined in each render pipeline using the `engine` key.

## Mustache

The `mustache` engine is Toucan’s primary rendering engine for generating HTML or text-based content.

To configure it, set the engine `id` in your pipeline:

```yml
engine: 
  id: mustache
```

### Options

The Mustache engine supports a single `contentTypes` option. This maps content types to views, which Toucan uses as a fallback if no `view` or `views` override is defined in the content’s [front matter](/docs/content-management/front-matter).

```yml
engine: 
  id: mustache
  options:
    contentTypes: 
      page:
        view: "pages.default"
      author:
        view: "blog.author.default"
      ...
```

> In this example, `page` content is rendered using the `pages.default` view, and `author` content uses `blog.author.default`.

## JSON

The `json` engine generates raw JSON output. It’s commonly used for API responses or static data files that power search, filtering, or indexing.

```yml
engine: 
  id: json
```

### Options

*KeyPath*

Use `keyPath` to extract a single object or array from the rendering context. This is useful for trimming metadata and isolating relevant data structures.

```yml
engine: 
  id: json
  options:
    keyPath: "context.posts"
```

This configuration outputs a JSON array in a post query:

```json
[
	{ ... },
	{ ... },
	...
]
```

*KeyPaths*

To extract multiple context values, use `keyPaths`. This allows you to map specific paths to custom top-level keys in the output.

```yml
engine: 
  id: json
  options:
    keyPaths:
      "context.posts": "items",
      "generator": "info"
```

This produces a structured JSON object:

```json
{
	"items": [ ... ],
	"info": { ... }
}
```

### API Output Example

The following example defines a pipeline that renders an array of posts as a JSON API endpoint:

```yaml
id: api
definesType: true

queries:
  posts:
    contentType: post
    scope: detail
    orderBy:
      - key: publication
        direction: desc

contentTypes:
  include:
    - api

engine:
  id: json
  options:
    keyPath: "context.posts"

output:
  path: "api"
  file: posts
  ext: json
```

The pipeline configuration above accomplishes the following:

- Defines a virtual `api` content type (definesType: true)
- Queries all `post` content, sorted by publication
- Filters pipeline execution to only include content of type `api`
- Extracts `context.posts` as the top-level JSON array
- Writes the output to `api/posts.json`