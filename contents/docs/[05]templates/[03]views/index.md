---
category: "templates"
title: "Views"
description: "Basic guide on how to use Mustache for creating static site templates for Toucan"
order: 3
---

# Views
---

[Mustache](https://mustache.github.io/mustache.5.html) is a logic-less template system. Toucan uses Mustache templates to render Markdown files and generate the final HTML content and refers them as `views`.

This is a basic guide on how to use Mustache for creating views.

## Context variables

Mustache context variables are placeholders within a template that get replaced with actual values when rendering.

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

Context variables can be dictionaries or hash maps, allowing key-value pairs to be accessed within a Mustache file using dot notation.

## Blocks

A block begins with a # (hash) and ends with a / (slash). Mustache has no concept of if-else statements, but it's possible to check for `false` / `nil` values using blocks:

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

Partials are reusable pieces of markup that can be inserted into other Mustache files. You include them using the {{> partialName}} syntax.

For example:

```html
<h1>Hello, World!</h1>
{{> reusableParagraph}}
```

The file named reusableParagraph.mustache might look like this:

```html
<p>This is a reusable paragraph</p>
```

The final output after rendering would be:

```html
<h1>Hello, World!</h1>
<p>This is a reusable paragraph</p>
```

Partials help keep your codebase organized and maintainable by allowing commonly used sections—like headers, footers, or paragraphs—to be defined once and reused wherever needed.

## Parents

Using a **parent** in Mustache helps you create a shared layout that can be reused across different pages. It defines a common structure, while allowing parts of it to be replaced by a **child**. This is useful for keeping your layout consistent and avoiding repetition.

Here’s an example of a parent that defines a main section that can be customized:
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

And here’s the child that uses this structure and provides its own content for the main section:

```
{{<html}}
{{$main}}

<p>{{contents}}</p>

{{/main}}
{{/html}}
```

The context passed in looks like this:

```yaml
title: "My Website"
header: "Welcome to My Website"
contents: "This is the main content of the page."
footer: "© 2024 My Website"
```

After rendering, the final output is:

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

This feature makes it easy to define a page layout once in the parent and fill in the unique parts from the child wherever needed.

---

That was a brief introduction to the Mustache template engine. For more detailed information, refer to [the official manuals](https://mustache.github.io/mustache.5.html). To learn about Toucan templates, proceed to the [Toucan templates](/docs/templates/toucan-templates/) section.
