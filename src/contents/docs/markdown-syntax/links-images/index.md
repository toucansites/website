---
type: guide
title: Links, Images, and Tables
description: This guide will walk you through how to use links, images, and tables in Markdown
category: markdown-syntax
order: 2
---

# Links, Images, and Tables

Markdown makes it easy to add links, images, and tables to your documents using simple syntax.

---

## Links

Use square brackets `[ ]` for the link text and parentheses `( )` for the URL:

```
[Link Text](https://example.com)
```

[google.com](https://google.com)

## Images

### 1. Basic Images

Similar to links, but with an exclamation mark `!` at the beginning:

```
![Alt Text](https://example.com/image.jpg)
```

![image](https://img.freepik.com/free-photo/transparent-colourful-autumn-leaves_23-2148239694.jpg)

### 2. Images with Titles

Add a title in quotes for extra context:

```
![Alt Text](https://example.com/image.jpg "Optional Title")
```

![image](https://img.freepik.com/free-photo/transparent-colourful-autumn-leaves_23-2148239694.jpg "with title")

## Code Blocks

### 1. Inline Code

Wrap code in backticks:

```
`inline code`
```

### 2. Code Blocks

Use triple backticks for multi-line code:

```
function example() {
  console.log("Hello, Markdown!");
}
```