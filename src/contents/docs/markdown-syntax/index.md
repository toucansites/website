---
type: category
title: "Markdown syntax"
description: "Guidance on Markdown syntax."
order: 7
---

# Markdown syntax

---

Toucan uses [Apple’s Swift Markdown library](https://github.com/apple/swift-markdown), which is built on CommonMark. CommonMark has a stricter, more limited feature set, meaning that some Markdown elements may not be supported.

## Supported Features

Since Swift Markdown follows the CommonMark specification, the following elements work as expected:

- Headings (#, ##, ###, etc.)
- Paragraphs (regular text formatting)
- Bold & Italics (**bold**, *italic*)
- Inline Code (`code`) and Code Blocks (  ```)
- Blockquotes (> Quoted text)
- Lists (ordered 1. and unordered - or *)
- Links & Images ([text](url), ![alt](image_url))
- Horizontal Rules (---, ***)

## Unsupported or Limited Features

Some commonly used Markdown features are not included in CommonMark and are not supported by Swift Markdown:

- ❌ Tables (| Column | Column |)
- ❌ Task Lists (- [x] Completed task)
- ❌ Strikethrough (~~text~~)
- ❌ Auto-linking of URLs (<www.example.com> won’t automatically become a link)

For a full reference on supported features, please refer to the [CommonMark](https://commonmark.org/) specification.
