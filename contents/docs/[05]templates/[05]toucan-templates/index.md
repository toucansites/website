---
category: "templates"
title: "Toucan templates"
description: "Toucan tempplates offer a streamlined approach, using Mustache, for building, customizing, and designing static sites to meet various needs and styles."
order: 4
---

# Toucan templates
---

## Template Structure

Toucan templates provide a structured, flexible system for building static websites using the Mustache templating engine. 

Each template is composed of three core parts:
- Metadata (template.yml)
- Assets (CSS, JS, images, etc.)
- Views (Mustache templates)

```sh
my-template/
├── template.yml    # metadata
├── views/          # layout and page templates
└── assets/         # static files (css, js, images)
```

While Toucan allows freedom in how you organize your templates, we recommend following a consistent layout to achieve clarity, reusability and take full advantage of built-in features.

This guide covers the recommended structure, purpose of each component, and best practices for building and customizing templates in Toucan.

## Metadata

Every template must include a template.yml file located at its root. This file defines essential metadata that describes the template and ensures compatibility with Toucan’s generator version. It also provides attribution details and tags for classification.

Here’s a minimal example:

```yaml
name: "Toucan website"
description: "Official template for the Toucan website."
generatorVersions:
  - "1.0.0-beta.5"
  - "1.0.0-beta.6"
tags:
  - "website"
```

> For a complete breakdown of supported fields and usage, refer to the [Metadata](/docs/templates/metadata) documentation.

## Assets

Static assets such as CSS, JavaScript and images live inside the assets directory. The entire directory is recursively copied to the output root during site generation, preserving the structure.

### CSS files

CSS files are organized into functional modules for better maintainability and reusability. Toucan templates often include the following standard stylesheets:

@FAQ {
    @Question {
        `variables.css`
    }
    @Answer {
        Defines color tokens, typography, spacing units, and theme variables (e.g., light/dark mode support).
    }
}

@FAQ {
    @Question {
        `theme.css`
    }
    @Answer {
        Contains theme-specific styling including UI elements like buttons, cards, callouts, and page spacing.
    }
}

@FAQ {
    @Question {
        `base.css`
    }
    @Answer {
        Sets up foundational styles for text elements like headings, lists, links, and paragraphs.
    }
}

@FAQ {
    @Question {
        `grid.css`
    }
    @Answer {
        Provides utility classes for building responsive layouts (e.g. grid-2, grid-321, grid-421).
    }
}

@FAQ {
    @Question {
        `navigation.css`
    }
    @Answer {
        Handles layout and behavior of the site’s navigation bar, including mobile toggling and focus states.
    }
}

@FAQ {
    @Question {
        `footer.css`
    }
    @Answer {
        Styles the footer section, including spacing, layout, and link appearance.
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
        Adds a few light, opinionated improvements like focus outlines, selection highlights, and general readability/accessibility tweaks.
    }
}

Splitting styles into logical modules makes templates easier to customize and debug.

### JS files

Templates may include a js directory for JavaScript functionality such as mobile navigation toggles or search. While optional, it’s common in interactive templates.

For reference, see the [T-Doc template](https://github.com/toucansites/t-doc-template), which includes JS modules for site navigation and client-side searching.

## Views

The views folder contains all Mustache templates used to render content. These are organized by purpose or content type — typically into subdirectories like `pages/`, `blog/`, `docs/`, and `partials/`.

### Base view

The root layout of most Toucan templates is defined in `views/html.mustache`. This acts as the wrapper for all other views and includes the site’s shared structure—such as the `head`, `navigation`, and `footer`. It also defines Mustache blocks (e.g. {{$main}}) that child views can override.

> For more on how inheritance and block injection works, see the [Views](/docs/templates/views) article.

### Page views

Page templates are grouped in folders by type, mimicking the site’s structure. Common examples:

@FAQ {
    @Question {
        `docs/category/default.mustache`
    }
    @Answer {
        Renders documentation category pages.
    }
}

@FAQ {
    @Question {
        `blog/post/default.mustache`
    }
    @Answer {
        Renders blog post pages.
    }
}

This structure reflects the content hierarchy and makes it easier to locate or override views.
In your pipeline configuration, these views are mapped using the engine settings:

```yml
engine:
  id: mustache
  options:
    contentTypes:
      page: 
        view: "pages.default"
      author: 
        view: "blog.author.default"
      tag: 
        view: "blog.tag.default"
      post: 
        view: "blog.post.default"
      category: 
        view: "docs.category.default"
      guide: 
        view: "docs.guide.default"
```

This tells Toucan which view to use when rendering each content type.

By convention, views for top-level pages live in the `pages` directory. Here are the standard files:

@FAQ {
    @Question {
        `Default page`
    }
    @Answer {
        `pages/default.mustache` — generic page layout used for most standard content.
    }
}

@FAQ {
    @Question {
        `Home page`
    }
    @Answer {
         `pages/home.mustache` — specialized layout for the site’s landing page.
    }
}

@FAQ {
    @Question {
        `404 page`
    }
    @Answer {
        `pages/404.mustache` — used for rendering error pages when content isn’t found.
    }
}

You can customize or add more views depending on your site’s needs.

### Partials

The `partials` folder contains reusable components that can be included in any view using Mustache’s `{{> name}}` syntax. These help keep your templates modular.

Common examples include:

@FAQ {
    @Question {
        `navigation.mustache`
    }
    @Answer {
        Defines the main navigation bar and mobile menu. Included in most top-level layouts.
    }
}

@FAQ {
    @Question {
        `footer.mustache`
    }
    @Answer {
        Renders the footer section, including links, social icons, and licensing info.
    }
}

These partials are included in views like `html.mustache`, so updates here will propagate across all pages.

You can also define your own partials for things like cards, callouts, pagination controls, or buttons — and reuse them across blog posts, documentation, or other content views.

## Utility views

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

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #000;
    --text-color: #ccc;
  }
}
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