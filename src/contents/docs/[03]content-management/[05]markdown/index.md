---
id: "markdown"
category: "content-management"
order: 5
################################################################################
title: "Markdown"
description: "Understand the basics of Markdown and front matter for simple and effective formatting"
---

# Markdown
---

Toucan processes markdown files to render HTML content. These markdown files can include [front matter](/docs/content-management/front-matter/) to define additional properties that control how the content is rendered.

Markdown is a lightweight markup language used to format plain text. Here’s how to use its essential syntax.


## Headings

Use **#** for headings. The number of **#** symbols determines the level:

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

## Bold and Italics

```markdown
Bold: **text** or __text__
Italic: *text* or _text_
Bold and Italic: ***text*** or ___text___
```

This is **bold**.
This is _italic_.
This is ***bold and italic***.

## Blockquotes

Use **>** to create blockquotes:

```markdown
> This is a blockquote.
```

> This is a blockquote.

## Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

```markdown
***
---
___
```


## Lists

### Unordered Lists

Use '-' or '*' to create unordered lists:

```markdown
- Item 1
- Item 2
  - Subitem 2.1
```

- Item 1
- Item 2
  - Subitem 2.1

### Ordered Lists

Use numbers followed by a period to create an ordered list:

```markdown
1. Item 1
2. Item 2
   1. Subitem 2.1
```

1. Item 1
2. Item 2
   1. Subitem 2.1

### Nesting

You can nest ordered and unordered lists together:

```markdown
1. Ordered item
   - Subitem 1
```

1. Ordered item
   - Subitem 1

## Links

Use square brackets **[ ]** for the link text and parentheses **( )** for the URL:

### Simple link

```markdown
[Link Text](https://example.com)
```

[google.com](https://google.com)

### Mail link

```markdown
[Send me an email](mailto:example@example.com)
```

[Send me an email](mailto:example@example.com)

## Images

### Basic Images

Similar to links, but with an exclamation mark **!** at the beginning:

```markdown
![Alt Text](https://example.com/image.jpg)
```

![image](https://img.freepik.com/free-photo/transparent-colourful-autumn-leaves_23-2148239694.jpg)

### Images with Titles

Add a title in quotes for extra context:

```markdown
![Alt Text](https://example.com/image.jpg "Optional Title")
```

![image](https://img.freepik.com/free-photo/transparent-colourful-autumn-leaves_23-2148239694.jpg "with title")

## Code Blocks

### Inline Code

Wrap code in backticks:

```markdown
`inline code`
```

### Code Blocks

Use triple backticks for multi-line code:

```markdown
&#96;&#96;&#96;swift
func example() {
    print("Hello, World!")
}
&#96;&#96;&#96;
```
