---
type: guide
title: List, Links and Images
description: This guide will walk you through how to use lists, links and images in Markdown
category: markdown-syntax
order: 2
---

# List, Links and Images

Markdown makes it easy to add lists, links and images to your documents using simple syntax.

---

## Lists

### 1. Unordered Lists

Use '-' or '*' to create unordered lists:

```
- Item 1
- Item 2
  - Subitem 2.1
```

- Item 1
- Item 2
  - Subitem 2.1

### 2. Ordered Lists

Use numbers followed by a period to create an ordered list:

```
1. Item 1
2. Item 2
   1. Subitem 2.1
```

1. Item 1
2. Item 2
   1. Subitem 2.1

### 3. Nesting

You can nest ordered and unordered lists together:

```
1. Ordered item
   - Subitem 1
```

1. Ordered item
   - Subitem 1

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