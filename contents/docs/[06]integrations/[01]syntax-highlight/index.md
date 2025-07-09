---
category: "integrations"
title: "Syntax highlight"
description: "Syntax highlighting for better code readability and organization"
order: 1

---

# Syntax highlight

Integrate syntax highlighting into your Toucan site to enhance code readability and improve the developer experience.

---

## Integration with Highlight.js

To enable syntax highlighting, integrate [Highlight.js](https://highlightjs.org/) directly into your template.

1. Modify `html.mustache`
  Open the `html.mustache` file—this is your base layout template for all pages.

2. Insert **Highlight.js Resources** in the `<head>`
  Add the following snippet inside the `<head>` section:

  ```html
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)">
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
  media="(prefers-color-scheme: dark)">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
  <script>hljs.highlightAll();</script>
  ```

This configuration ensures:

- Automatic theme switching based on the user's system preference (light or dark).
- Immediate syntax highlighting of all `pre` and `code` blocks on page load.

---

## Required HTML Structure

To ensure proper rendering, structure code blocks as follows:

```html
<pre><code class="language-javascript">
const greet = () => console.log("Hello, world!");
</code></pre>
```

> **Note**: Always include the `language-<lang>` class to inform Highlight.js of the code language. This ensures accurate syntax rendering.

---

## Theme Customization

To apply a different visual theme, replace the stylesheet URLs with one from the official list.
Browse available styles here: [CDN Highlight.js Themes](https://cdnjs.com/libraries/highlight.js/11.9.0)

**Popular Alternatives**:

- `atom-one-dark.min.css`
- `monokai-sublime.min.css`
- `vs2015.min.css`

---

## Performance Optimization (Optional)

To avoid unnecessary script loading on pages without code blocks, implement conditional loading:

```html
<script>
  if (document.querySelector('pre code')) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
    script.onload = () => hljs.highlightAll();
    document.head.appendChild(script);
  }
</script>
```

This approach reduces initial page load time, which is especially beneficial for large content sites.

---

## Additional Resources

- **Themes, plugins, and advanced configuration**: [highlightjs.org](https://highlightjs.org/)
- **GitHub repository**: [github.com/highlightjs](https://github.com/highlightjs/highlight.js)
