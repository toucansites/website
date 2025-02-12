---
type: guide
title: "Markdown"
description: "Understand the basics of Markdown and front matter for simple and effective formatting"
category: content-management
order: 2
---

# Markdown
---

Toucan processes markdown files to render HTML content. These markdown files can include front matter to define additional properties that control how the content is rendered.

## Front Matter

Front matter is a section at the beginning of a markdown file, where key-value pairs can be defined to influence the rendering process. This provides flexibility for setting metadata or custom properties.

Example:

```md
---
title: "My Page"
description: "This is my page"
custom: "This is a custom front matter value"
---

## My page

This is my page
```

Every user-defined front matter property is accessible as a [context variable](/docs/themes/mustache-templates/) within your page template.


## Content

Content is written using markdown syntax. For more details, check the [Markdown syntax](/docs/markdown-syntax/) section.

## Block Directives

Markdown in Toucan can be extended with [custom block directives](/docs/themes/block-directives/), allowing the integration of custom UI components. These directives are defined in the theme configuration and offer a way to enrich the user interface by embedding custom elements directly into the content.

Example:

```md
@Button(label: "Click Me") { This is a button }
```

By leveraging front matter and block directives, Toucan enables enhanced control and flexibility in generating dynamic HTML content.