---
category: "templates"
title: "Toucan templates"
description: "Toucan tempplates offer a streamlined approach, using Mustache, for building, customizing, and designing static sites to meet various needs and styles"
order: 4
---

# Toucan templates
---

## Template Structure

A Toucan template is made up of three main components: `metadata`, `views`, and `assets`. While you can organize your templates however you like, we recommend following this structure for clarity, reusability, and compatibility with Toucan’s built-in features.

This guide introduces the purpose of each part and how they work together to render your static site.

## Metadata

Every Toucan template must include a `template.yml` file at its root. This file describes the template and provides important configuration details. Here’s a minimal example with the required fields:

```yaml
name: "Toucan website"
description: "Official template for the Toucan website."
generatorVersions:
  - "1.0.0-beta.5"
  - "1.0.0-beta.6"
tags:
  - "website"
```

You can learn more in the [metadata section](/docs/templates/metadata).

## Assets

Assets typically live in a directory called assets, and include subfolders for `css` and `js`.

### CSS files

Toucan templates split styles into modular CSS files for maintainability. Here are the most common files and what they do:

@FAQ {
    @Question {
        `variables.css`
    }
    @Answer {
        Defines color tokens, spacing, typography, and theme variables for light/dark mode.
    }
}

@FAQ {
    @Question {
        `theme.css`
    }
    @Answer {
        Template-specific visual styles, including buttons, pagination, callouts, and layout spacing.
    }
}

@FAQ {
    @Question {
        `base.css`
    }
    @Answer {
        Provides foundational styles for typography elements like paragraphs, links, lists, and headings.
    }
}

@FAQ {
    @Question {
        `grid.css`
    }
    @Answer {
        Defines utility classes for responsive grid layouts (e.g. grid-2, grid-321, grid-421).
    }
}

@FAQ {
    @Question {
        `navigation.css`
    }
    @Answer {
        Styles the primary navigation menu, including layout, hover/focus states, and mobile toggle.
    }
}

@FAQ {
    @Question {
        `footer.css`
    }
    @Answer {
        Handles footer layout, link styling, and responsive spacing in the bottom section of the page.
    }
}

@FAQ {
    @Question {
        `modern-normalize.css`
    }
    @Answer {
        Normalizes browser inconsistencies using modern-normalize for consistent baseline styles.
    }
}

@FAQ {
    @Question {
        `modern-base.css`
    }
    @Answer {
        Adds light opinionated improvements like better focus outlines, selection styling, and readability tweaks.
    }
}

Keeping styles modular helps you reason about changes and avoids unexpected side effects across the site.

### JS files

A `js` folder is optional, but commonly used for site-wide interactivity. A good example is the [T-Doc template](https://github.com/toucansites/t-doc-template), where the JS folder contains the logic for toggling navigation or enabling client-side search.

## Views

The views folder contains all the Mustache templates used to render content. These are organized in subfolders like pages, blog, docs, or partials, based on content type.

### Base view

At the core of every template is the `html.mustache` file. It defines the shared HTML structure — like the <head>, metadata, navigation, and footer — and uses a parent/child block pattern for injecting content.

For an explanation of layout inheritance, see the [Views](/docs/templates/views) article.

### Page views

Page templates are grouped in folders by type, mimicking the site’s structure. Common examples:

@FAQ {
    @Question {
        `docs/category/default.mustache`
    }
    @Answer {
        Template for documentation categories
    }
}

@FAQ {
    @Question {
        `blog/post/default.mustache`
    }
    @Answer {
        Template for blog posts.
    }
}

This structure reflects the content hierarchy and makes it easier to locate or override templates.

In your template’s config, these views are mapped using the engine settings:

```yml
engine:
  id: mustache
  options:
    contentTypes:
      page: "pages.default"
      author: "blog.author.default"
      tag: "blog.tag.default"
      post: "blog.post.default"
      category: "docs.category.default"
      guide: "docs.guide.default"
```

This tells Toucan which view to use when rendering each content type.

By convention, views for top-level pages live in the `pages` directory. Here are the standard files:

@FAQ {
    @Question {
        `Default page`
    }
    @Answer {
        `pages/default.mustache` - used for most general pages.
    }
}

@FAQ {
    @Question {
        `Home page`
    }
    @Answer {
        `pages/home.mustache` - custom layout for the landing page.
    }
}

@FAQ {
    @Question {
        `404 page`
    }
    @Answer {
        `pages/404.mustache` - view for handling not found errors.
    }
}

You can customize or add more views depending on your site’s needs.

The `partials` folder contains reusable components that can be included in any view using Mustache’s `{{> name}}` syntax. These help keep your templates modular.

Some common partials include:

@FAQ {
    @Question {
        `navigation.mustache`
    }
    @Answer {
        Contains the main site navigation and mobile menu toggle.
    }
}

@FAQ {
    @Question {
        `footer.mustache`
    }
    @Answer {
        Includes the footer links, GitHub reference, and credits.
    }
}

These partials are automatically included in views like `html.mustache`, so updates here will propagate across all pages.

You can also define your own partials for things like cards, callouts, pagination controls, or buttons — and reuse them across blog posts, documentation, or other content views.

## Other top level views

Some files exist outside the main content tree but are essential for generating common site infrastructure:

@FAQ {
    @Question {
        `redirect.mustache`
    }
    @Answer {
        Creates redirect pages. Useful when restructuring URLs or maintaining old links.
    }
}

@FAQ {
    @Question {
        `rss.mustache`
    }
    @Answer {
        Outputs an RSS 2.0 feed for posts. Enables feed readers and newsletter integrations.
    }
}

@FAQ {
    @Question {
        `sitemap.mustache`
    }
    @Answer {
        Builds a standard XML sitemap for search engine indexing.
    }
}

These files are recommended for any public-facing site, as they improve SEO, feed discovery, and user experience.

---

A consistent template layout helps your site stay maintainable and readable — especially when multiple people work on the same codebase. Following these conventions also makes your templates easier to share, extend, and integrate with the broader Toucan ecosystem.

## HTML structure & metadata

The `html.mustache` file defines the overall page structure and metadata. This view acts as a wrapper, with dynamic content inserted into the `main` block.

### HTML boilerplate

All templates should start with a complete, well-formed HTML5 skeleton that includes language, encoding, and viewport tags:

```html
<!DOCTYPE html>
<html {{#site.language}}lang="{{.}}"{{/site.language}}>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{page.title}}</title>
</head>
<body>
  {{$main}}
    <p>No content.</p>
  {{/main}}
</body>
</html>
```

This layout ensures accessibility, mobile responsiveness, and predictable rendering across browsers.

### SEO & social metadata

Toucan templates support metadata for search engines and social media cards using dynamic context variables like `page.title` and `page.description`:

```html
<meta property="og:title" content="{{page.title}}">
<meta property="og:description" content="{{page.description}}">
<meta property="og:url" content="{{page.permalink}}">
{{#page.image}}<meta property="og:image" content="{{.}}">{{/page.image}}

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{page.title}}">
<meta name="twitter:description" content="{{page.description}}">
{{#page.image}}<meta name="twitter:image" content="{{.}}">{{/page.image}}
```

These tags improve how your content is displayed when shared on social platforms or indexed by search engines.

### Canonical & alternate links

To avoid duplicate content and support localization, include canonical and hreflang links when applicable:

```html
<link rel="canonical" href="{{page.permalink}}">
{{#page.hreflang}}
  <link rel="alternate" hreflang="{{lang}}" href="{{url}}">
{{/page.hreflang}}
```

Navigation between pages can be further enhanced with rel="prev" and rel="next":

```html
{{#page.prev}}<link rel="prev" href="{{permalink}}">{{/page.prev}}
{{#page.next}}<link rel="next" href="{{permalink}}">{{/page.next}}
```

### Theming and web app meta

Toucan templates also support progressive web app (PWA) metadata and light/dark theming through color scheme settings:

```html
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="/manifest.json">
```

This enhances mobile experience and adds support for installable apps and proper browser theming.

## Semantic HTML

Toucan templates make extensive use of semantic HTML elements to improve structure, accessibility, and search engine optimization. These tags help define the role of content in the page and allow assistive technologies to better interpret the layout.

### Common semantic elements

Across views you'll find the following HTML5 elements used consistently:

@FAQ {
    @Question {
        `&lt;header&gt;`
    }
    @Answer {
        Wraps titles, metadata, and context at the top of sections.
    }
}

@FAQ {
    @Question {
        `&lt;main&gt;`
    }
    @Answer {
        Defines the primary content area of the page. This is where content is injected via `{{$main}}`.
    }
}

@FAQ {
    @Question {
        `&lt;footer&gt;`
    }
    @Answer {
        Used both globally (`partials/footer.mustache`) and locally within articles.
    }
}

@FAQ {
    @Question {
        `&lt;article&gt;`
    }
    @Answer {
        Wraps full content entries like blog posts and documentation pages.
    }
}

@FAQ {
    @Question {
        `&lt;section&gt;`
    }
    @Answer {
        Organizes content into logical, accessible chunks (e.g. related articles, post body).
    }
}

@FAQ {
    @Question {
        `&lt;nav&gt;`
    }
    @Answer {
        Found in `partials/navigation.mustache`, marking up the main site navigation.
    }
}

@FAQ {
    @Question {
        `&lt;aside&gt;`
    }
    @Answer {
        Used for sidebars like documentation outlines and tag/category listings.
    }
}

### Why it matters

Using these elements helps with:

- **Accessibility**: Screen readers understand page regions and can navigate them more easily.
- **SEO**: Search engines can extract richer meaning and display better snippets.
- **Maintenance**: Templates are easier to reason about and style when layout semantics are clear.

You don’t need to use every element on every page — but following these patterns helps your templates align with modern web standards.

## Design system & grid utility

Toucan templates ship with a CSS system that makes layout, spacing, and theming consistent across views.

### Grid layout

The `grid.css` file defines several responsive CSS Grid classes:

```css
.grid.grid-2     → 2 columns
.grid.grid-3     → 3 columns
.grid.grid-321   → 3 columns on desktop, 2 on tablet, 1 on mobile
.grid.grid-421   → 4 columns on desktop, 2 on tablet, 1 on mobile
```

They are mobile-first and adapt cleanly using media queries.

### Spacing & typography

Core spacing and visual consistency come from:

@FAQ {
    @Question {
        `base.css`
    }
    @Answer {
        Baseline styles for headings, paragraphs, and links.
    }
}

@FAQ {
    @Question {
        `theme.css`
    }
    @Answer {
        Template-specific visual rules for buttons, pagination, and cards.
    }
}

@FAQ {
    @Question {
        `variables.css`
    }
    @Answer {
        Defines a centralized set of custom properties for colors, spacing, and breakpoints.
    }
}

Using custom properties (CSS variables) allows template authors and site owners to easily override styles without touching the entire CSS stack.

### Theme support

Toucan templates also support dark mode out of the box using the `prefers-color-scheme` media query:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #000;
    --text-color: #ccc;
  }
}
```

The base layout (html.mustache) includes color-specific <meta> tags to enhance native browser theming:

```html
<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)">
```

This approach provides a polished experience across devices without JavaScript toggles or client-side themes.