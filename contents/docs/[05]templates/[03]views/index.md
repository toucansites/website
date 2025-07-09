---
category: "templates"
title: "Views"
description: "Basic guide on how to use Mustache for creating static site templates for Toucan"
order: 3
---

# Views
---

Toucan uses the [Mustache](https://mustache.github.io/mustache.5.html) template engine to render Markdown content into static HTML. In Toucan, these templates are referred to as **views**.

This guide introduces the basic building blocks of Mustache and how to use them to create reusable, logic-less templates for your site.

## Context variables

Mustache templates use **placeholders** — known as context variables — to inject values from the content context into the HTML output.

For example, given a Mustache template:

```html
<h1>Hello, {{name}}!</h1>
```

And a context object:

```yaml
name: "Toucan"
```

The rendered output would be:

```html
<h1>Hello, Toucan!</h1>
```

Context variables support nested objects and can be accessed using dot notation, making it easy to structure and reference complex data.

## Blocks

Blocks are used to conditionally render content or repeat elements. They begin with # (hash) and end with / (slash). Mustache doesn’t include logic like if-else, but falsy values (such as null or false) can be handled with inverted blocks.

```html
<html{{#site.language}} lang="{{.}}"{{/site.language}}>
```

Given this context:

```yaml
site:
    language: null
```

The rendered output would be:

```html
<html>
```

The special variable {{.}} refers to the current value within the block.

## Loops

Mustache handles looping with blocks as well. If the block variable is an array, Mustache will iterate over it. You can also include an inverted block (^) to handle empty results.

Example:

```html
{{#posts}}
    <h2>{{title}}</h2>
    <p>{{excerpt}}</p>
{{/posts}}
{{^posts}}
    <p>No posts available.</p>
{{/posts}}
```

Context:

```yaml
posts:
  - title: "First Post"
    excerpt: "This is the first post excerpt."
  - title: "Second Post"
    excerpt: "This is the second post excerpt."
```

Output:

```html
<h2>First Post</h2>
<p>This is the first post excerpt.</p>

<h2>Second Post</h2>
<p>This is the second post excerpt.</p>
```

## Partials

Partials allow you to include and reuse snippets of markup across multiple templates. This helps keep your templates clean and organized.

You include them using the {{> partialName}} syntax.

```html
<h1>Hello, World!</h1>
{{> reusableParagraph}}
```

If `reusableParagraph.mustache` contains:

```html
<p>This is a reusable paragraph</p>
```

Then the rendered output will be:

```html
<h1>Hello, World!</h1>
<p>This is a reusable paragraph</p>
```

Partials are ideal for repeating elements like headers, footers, or reusable components.

## Parents

Using a **parent** in Mustache helps you define a shared layout that can be reused across multiple views. This allows you to keep your templates consistent, modular, and easier to maintain. A parent typically defines the outer HTML structure—such as the `head`, header, footer, and layout blocks—while child templates can override specific sections as needed.

**child** templates can override named blocks by providing content with the same block name. This allows them to replace sections defined in the parent template.

Here’s an example of a parent template that defines the overall structure of a page, including a `main` block that can be replaced by a `child` view:

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

In this example, the {{$main}}...{{/main}} block provides a placeholder that can be filled in by a `child` template. If no content is supplied, the fallback `No content.` will be rendered instead.

The corresponding `child` template can extend the parent and provide custom content for the `main` block:

```
{{<html}}
{{$main}}

<p>{{contents}}</p>

{{/main}}
{{/html}}
```

This tells Mustache to use the **html parent** template and inject the child content into the named main block.

To render the above templates correctly, a context object like this might be passed in:

```yaml
title: "My Website"
header: "Welcome to My Website"
contents: "This is the main content of the page."
footer: "© 2024 My Website"
```

After rendering, the final HTML would be:

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

This feature is especially useful for defining base layouts — such as for blog posts, documentation pages, or landing pages — and customizing the content area while preserving a consistent structure across your site. By using parents and blocks, you can reduce duplication and keep your templates clean and modular.

---

This guide introduced the core features of the Mustache template engine and how it is used in Toucan to define views. Mustache’s logic-less approach ensures templates remain clean, readable, and easy to maintain.

To dive deeper into Mustache syntax and capabilities, visit the [official Mustache documentation](https://mustache.github.io/mustache.5.html) or continue with the [Toucan templates](/docs/templates/toucan-templates/) guide.