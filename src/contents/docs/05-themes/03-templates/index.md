---
id: "templates"
slug: "docs/themes/templates"
category: "themes"
order: 3
################################################################################
title: "Templates"
description: "This is a basic guide on how to use Mustache for creating static site templates for Toucan"
---

# Templates
---

[Mustache](https://mustache.github.io/mustache.5.html) is a logic-less template system. Toucan uses Mustache templates to render Markdown files and generate the final HTML content.

This is a basic guide on how to use Mustache for creating templates.

## Context variables

Mustache context variables are placeholders within a template that get replaced with actual values when rendering.

For example, given a Mustache template:

```html
<h1>Hello, {{name}}!</h1>
```

And a context object:
```yaml
name: "Tibor"
```

The rendered output would be:

```html
<h1>Hello, Tibor!</h1>
```

Context variables can be dictionaries or hash maps, allowing key-value pairs to be accessed within a Mustache file using dot notation.

## Blocks

A block begins with a dollar and ends with a slash. Mustache has no concept of if-else statements, but it's possible to check for `false` / `nil` values using blocks:

```html
<html{{#site.language}} lang="{{.}}"{{/site.language}}>
```

Given the following context:

```yaml
site:
    language: null
```

The rendered output would be:

```html
<html>
```

The current value in a block can be accessed using `{{.}}`.

## Loops

Here’s a simple example of how to loop through a posts array in Mustache to render the title and excerpt, the snippet also handles an empty case:

```html
{{#posts}}
    <h2>{{title}}</h2>
    <p>{{excerpt}}</p>
{{/posts}}
{{^posts}}
    <p>No posts available.</p>
{{/posts}}
```

The context as an array of dictionaries:

```yaml
posts:
  - title: "First Post"
    excerpt: "This is the first post excerpt."
  - title: "Second Post"
    excerpt: "This is the second post excerpt."
```

The rendered output:

```html
<h2>First Post</h2>
<p>This is the first post excerpt.</p>

<h2>Second Post</h2>
<p>This is the second post excerpt.</p>
```


## Partials

Mustache partial templates are reusable template fragments that can be included within other Mustache templates. Partials are referenced using the `{{> partialName}}` syntax.

A template can include another one, using the partial syntax:
```html
<h1>Hello, World!</h1>
{{> reusableParagraph}}
```

This is the `reusableParagraph.mustache` template file:
```html
<p>This is a reusable paragraph</p>
```

This is the rendered output:
```html
<h1>Hello, World!</h1>
<p>This is a reusable paragraph</p>
```

Partials help modularize and organize code by allowing common elements, such as headers or footers, to be defined once and used across multiple templates.


## Parents

Using a parent template in Mustache promotes consistency and reusability by providing a common structure, allowing blocks within the parent to be overridden by other templates.

Here’s a simple example of using a Mustache parent template to define a `main` block, that can be overridden from a child template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
</head>
<body>
    <header>
        <h1>{{header}}</h1>
    </header>
    <main>
        {{$main}}
            <p>No content.</p>
        {{/main}}
    </main>
    <footer>
        <p>{{footer}}</p>
    </footer>
</body>
</html>
```

The child template for the page:
```
{{<html}}
{{$main}}

<p>{{contents}}</p>

{{/main}}
{{/html}}

```

The context:
```yaml
title: "My Website"
header: "Welcome to My Website"
contents: "This is the main content of the page."
footer: "© 2024 My Website"
```

The rendered output, when using the child template:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <main>
        <p>This is the main content of the page.</p>
    </main>
    <footer>
        <p>© 2024 My Website</p>
    </footer>
</body>
</html>
```

That was a brief introduction to the Mustache template engine. For more detailed information, refer to [the official manuals](https://mustache.github.io/mustache.5.html). To learn about Toucan themes, proceed to the [Toucan themes](/docs/themes/toucan-themes/) section.
