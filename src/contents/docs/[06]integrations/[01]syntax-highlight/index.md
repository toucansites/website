---
id: "syntax-highlight"
category: "integrations"
order: 1
################################################################################
title: "Syntax highlight"
description: "Syntax highlighting for better code readability and organization"
---

# Syntax highlight
---

This section explains how to enable syntax highlighting for your website.

## highlight.js

To integrate highlight.js into a Toucan site, follow these simple steps:

1. Open your `html.mustache` template file.
2. Add the following snippet inside the `<head>` section:

```html
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)">
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
    media="(prefers-color-scheme: dark)"
>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
```

This snippet will automatically apply syntax highlighting to all `&lt;pre&gt;` HTML tags on your website.

For more information, about the available themes and options visit [highlight.js](https://highlightjs.org/).
