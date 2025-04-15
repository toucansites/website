---
type: guide
title: "Content Types"
description: "Custom content types are defined in the types folder as YAML files, with paths or front matter used to identify the type."
category: "content-management"
order: 1
---

# Content types
---

Custom content types are defined in the `types` folder as simple YAML files.

A content type can have a specific location where Markdown files under that path are recognized as that type, or the type can be specified in the front matter.

A content type may also have a custom template, allowing the system to use the appropriate [Mustache](/docs/themes/mustache-templates/) file when rendering specific content, such as a blog post.

Here's an example:

```yaml
id: post
rss: true
template: blog.post.default

pagination:
    bundle: blog/posts/pagination
    limit: 9
    sort: publication
    order: desc

properties:
    featured:
        type: bool

context:
    site:
        posts:
            sort: publication
            order: desc
            limit: 12

        featured:
            sort: publication
            order: desc
            limit: 12
            filter:
                field: featured
                method: equals
                value: true

```

Content types, including pagination and property validation, are still subject to change during beta release cycle.

Additional documentation will be provided once this feature is stabilized.
