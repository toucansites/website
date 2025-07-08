---
category: "content-management"
title: "Front Matter"
description: "Front Matter is used to define metadata and settings for content."
order: 4
---

# Front Matter
---

Front matter is a section at the beginning of a markdown file between two `---` lines, where key-value pairs can be defined to influence the rendering process. This provides flexibility for setting metadata or custom properties. Every user-defined front matter property is accessible as a context variable within your page [views](/docs/templates/views/).

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

TODO

some keys are reserved...

### Id

TODO

### Type

TODO

### Slug

TODO

### View

TODO

view: html: myview

### Views

TODO

views: ["*": "pages.context","invalid-pipeline": "invalid-view"]