---
id: "content-types"
slug: "docs/content-management/content-types"
category: "content-management"
order: 2
################################################################################
title: "Content Types"
description: "Custom content types are defined in the types folder as YAML files, with paths or front matter used to identify the type."
---

# Content types
---

Custom content types are defined in the `types` folder as simple YAML files.

A content type can have a specific location where Markdown files under that path are recognized as that type, or the type can be specified in the front matter.

## Basics

A content type may also have a custom template, allowing the system to use the appropriate [Mustache](/docs/themes/mustache-templates/) file when rendering specific content, such as a blog post.

Here's an example:


```yaml
id: page
default: true

properties:
    title:
        type: string
        required: true

    description:
        type: string
        required: true
```

Content types, including pagination and property validation, are still subject to change during beta release cycle.

## Properties, relations, queries

### Blog posts and authors

```yaml
id: author
path:
    - authors

properties:
    name:
        type: string
        required: true

queries:
    posts:
        contentType: post
        filter:
            key: authors
            operator: contains
            value: "{{id}}"
        orderBy:
            - key: publication
              direction: desc
```

```yaml
id: post
paths:
    - posts

properties:
    title:
        type: string
        required: true
    publication:
        type: date
        required: true
    featured:
        type: bool
        required: false
        default: false

relations:
    authors:
        references: author
        type: many
        order:
            key: name
            direction: asc

```

## Properties

## Relations

## Queries
