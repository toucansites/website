---
type: guide
category: rendering
order: 5
title: "Engines"
description: ""
---

# Engines
---

Toucan currently supports two template engines:

- `json` — renders raw JSON output
- `mustache` — renders text output using Mustache templates

Template engines are configured within the render pipeline.


### API Output Example

To render content as an API response, a pipeline can be configured like this:

```yaml
id: api

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

output:
  path: "api"
  file: posts
  ext: json
```

This example:
- Queries all posts
- Includes only content with `contentType: api`
- Uses the `json` engine to render output
- Generates a file at `api/posts.json`

> Note: Scopes and API pipelines are still experimental.

Once stabilized, detailed guides will be provided for building custom API endpoints with Toucan.
