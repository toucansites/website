---
id: "front-matter"
slug: "docs/content-management/front-matter"
category: "content-management"
order: 4
################################################################################
title: "Front Matter"
description: "Front Matter is used to define metadata and settings for content."
---

# Front Matter
---

Front matter is a section at the beginning of a markdown file, where key-value pairs can be defined to influence the rendering process. This provides flexibility for setting metadata or custom properties.

## Example

```yaml
---
title: "My Page"
description: "This is my page"
custom: "This is a custom front matter value"
---

## My page

This is my page
```

Every user-defined front matter property is accessible as a [context variable](/docs/themes/mustache-templates/) within your page template.
