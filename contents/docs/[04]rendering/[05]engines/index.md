---
category: "rendering"
title: "Engines"
description: ""
order: 5
---

# Engines
---

Toucan currently supports two template engines:

- `mustache` — renders text output using Mustache templates
- `json` — renders raw JSON output

Template engines are configured within the render pipeline.

## Mustache

Mustache is the most commonly used engine in Toucan's rendering system. To implement this engine in your project, specify the id mustache in your pipeline configuration under the engine key.

```yml
engine: 
  id: mustache
```

### Options

Currently, Toucan supports a single option for this engine: contentTypes. This map binds content types to template views, allowing Toucan to determine the default view during rendering when you haven't specified a custom `view` or generic `views` in your [front matter](/docs/content-management/front-matter). Define a content type as a key and specify the corresponding view under the view key.

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

> In this example, the `page` content type will be rendered using the `pages.default` view from the template.

## JSON

The `json` engine is used to generate raw JSON output, primarily consumed by APIs. These files typically serve as a "database" and are dynamically filtered using JS scripts to implement search functionality.

```yml
engine: 
  id: json
```

### Options

The `keyPath` option defines which data will be extracted during the rendering process. The extracted data will be presented as top-level objects in the output JSON. This option is particularly useful when you need to:

- Generate a clean array without system metadata
- Filter specific data from the result set
- Restructure the output for API consumption

```yml
engine: 
  id: json
  options:
    keyPath: "context.posts"
```

When implementing the configuration shown above, the resulting JSON will be structured as follows:

```json
[
	{ ... },
	{ ... },
	...
]
```

---

The `keyPaths` option works the same way, but with multiple keys. In this 

```yml
engine: 
  id: json
  options:
    keyPaths:
      "context.posts": "items",
      "generator": "info"
```

This configuration produces a JSON object with the specified top-level keys as defined in the keyPaths option:

```json
{
	"items": [ ... ],
	"info": { ... }
}
```

### API Output Example

The following example demonstrates how to configure a pipeline for rendering content as an API response:

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

- Defines a virtual content type called `api` with `definesType`, eliminating the need for manual type definition
- Executes a query to retrieve all posts
- Applies filtering to include only content with `contentType: api`
- Implements the `json` engine to generate output as an array, extracting data from the "context.posts" keyPath
- Outputs the result to `api/posts.json`