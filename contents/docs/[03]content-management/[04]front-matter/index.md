---
category: "content-management"
title: "Front Matter"
description: "Front matter defines metadata and content settings in markdown files."
order: 4
---

# Front Matter
---

Front matter is a section at the top of a markdown file enclosed between two `---` lines. It contains key-value pairs that define metadata and configuration for how the content should be processed and rendered.

All front matter fields are automatically exposed as context variables and can be accessed in your [views](/docs/templates/views/).

```yaml
---
title: "My Page"
description: "This is my page"
custom: "This is a custom front matter value"
---

## My page

This is my page
```

## Reserved keys

Some front matter keys are reserved for internal use during content processing. It’s acceptable to override them when used intentionally and with a clear understanding of their purpose, but avoid repurposing these keys for unrelated use — they have specific behavior in the rendering pipeline.

### Id

A globally unique identifier for the content item. Toucan typically infers this from the file path, but you can override it manually — useful in advanced cases such as when working with [transformers](/docs/rendering/transformers).

```yml
---
id: "my-custom-id"
---
```

### Type

Specifies the [content type](/docs/content-management/content-types) of the item. Defining a type allows Toucan to validate properties and relations.

```yml
---
type: "author"
---
```

### Slug

Defines the canonical URL path (slug) for the content. By default, the slug is derived from the project structure, but you can override it with this field. See [slug management](/docs/content-management/content-bundles#slug-management) for more details.

```yml
---
slug: "new/slug/to/use"
---
```

### Views

Maps rendering pipelines to specific [views](/docs/templates/views) using key-value pairs. This is a convenient way to override view selection defined in your [mustache engine](/docs/rendering/engines#mustache) configuration.

```yml
views: 
  <pipeline-id>: "<view-keyPath>"
```

You can also use a wildcard (*) to apply a view to all pipelines:

```yml
views:
  "*": "pages.context"
```