---
category: "rendering"
title: "Pipelines"
"description": "Learn how to define and configure render pipelines in Toucan to transform content into HTML, JSON, and other output formats."
order: 1
---

# Pipelines
---

Toucan uses render pipelines to transform source content into final output formats such as HTML or JSON. Pipelines provide a highly customizable framework for defining how content should be processed, enabling static site generation, API creation, and other content workflows.


Each pipeline is defined in a YAML file and located in the `pipelines` directory.

A typical site uses the following pipelines:
- **html.yml** - Renders the main content of the site.
- **api.yml** - Outputs JSON for APIs, often used in search.
- **404.yml** - Renders the `Not Found` page.
- **sitemap.yml** - Generates the `sitemap.xml` file.
- **rss.yml** - Generates an RSS 2.0 feed.
- **redirect.yml** - Renders pages with the `redirect` content type.

## Field Reference

Each pipeline may define the following fields:

@FAQ {
    @Question {
        [id](#identifier)
    }
    @Answer {
        Unique identifier for the pipeline.
    }
}

@FAQ {
    @Question {
        [contentTypes](#content-types)
    }
    @Answer {
        Defines rules for selecting and filtering content types used in a pipeline.
    }
}

@FAQ {
    @Question {
        [definesType](#virtual-content-types)
    }
    @Answer {
        If `true`, Toucan creates a virtual content type with the name of the pipeline.
    }
}

@FAQ {
    @Question {
        [dataTypes](#data-types)
    }
    @Answer {
        Allows customization of different data types, such as `Date`.
    }
}

@FAQ {
    @Question {
        [engine](#engine)
    }
    @Answer {
        Defines the [rendering engine](/docs/rendering/engines/) used to generate the final output.
    }
}

@FAQ {
    @Question {
        [queries](#queries)
    }
    @Answer {
        Allows additional customizable context rendering.
    }
}

@FAQ {
    @Question {
        [iterators](#iterators)
    }
    @Answer {
        Keyed queries which can help to prepare paginated data.
    }
}

@FAQ {
    @Question {
        [assets](#assets)
    }
    @Answer {
        `Asset Property` and `Asset Behavior` options to define how asset are processed during pipeline execution. 
    }
}

@FAQ {
    @Question {
        [transformers](#transformers)
    }
    @Answer {
        Allows processing content in a custom way during the rendering process.
    }
}

@FAQ {
    @Question {
        [output](#output)
    }
    @Answer {
        Defines how the final output files are created.
    }
}

## Identifier

Every pipeline must include a unique `id`:

```yaml
id: html
```

Pipelines are processed in alphabetical order based on this `id`. Keep identifiers short and descriptive, as you may need to reference them in views or configuration files.

## Content Types

The contentTypes section determines which types of content are included in the pipeline output.

### `include`

Specifies which content types to process. If omitted, all types are included by default (unless excluded explicitly):

```yml
contentTypes:
  include:
    - rss
```

### `exclude`

Excludes specific content types from the pipeline. These override the `include` list:

```yml
contentTypes:
  exclude:
    - page
```

### `lastUpdate`

Identifies which content types are tracked for “last updated” timestamps, used in feeds and sitemaps:

```yml
contentTypes:
  lastUpdate:
    - post
```

If not specified, all content type will be used.

### `filterRules`

A mapping of content type keys to filtering conditions. Each key represents a content type (e.g., `"post"`, `"author"`), and its value defines a condition that must be met for the content to be included in the pipeline. This enables fine-grained control over which specific content items are used in the pipeline.

```yml
contentTypes:
  filterRules:
    post:
      and:
        - key: draft
          operator: equals
          value: false
        - key: publication
          operator: lessThanOrEquals
          value: "{{date.now}}"
        - key: expiration
          operator: greaterThanOrEquals
          value: "{{date.now}}"
```

See the [Queries](/docs/rendering/queries) guide for more on filter conditions.

## Virtual Content Types

Use `definesType: true` to define a **virtual content type** named after the pipeline itself. This is useful for pipelines that generate output not tied to existing content types (e.g., rss, sitemap, or api):

```yml
definesType: true
```

## Data Types

The dataTypes section allows customization of how `date` values are parsed and formatted.

### Input

Toucan parses date objects from content files using a localized format. By default, it expects the **ISO 8601** format `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`, with the locale set to `en-US` and the time zone set to `GMT`.

To support alternative formats, locales, or time zones, you can override these defaults using the `input` field under `dataTypes.date` in your pipeline configuration. This allows you to align date parsing with your content’s regional or formatting requirements.

```yml
dataTypes:
  date:
    input:
      locale: "hu-HU"
      timeZone: "Europe/Budapest"
      format: "yyyy-MM-dd"
```

@FAQ {
    @Question {
        `locale`
    }
    @Answer {
        Identifier that follow ICU (International Components for Unicode) conventions (like `hu-HU` or `fr_FR`).
    }
}

@FAQ {
    @Question {
        `timeZone`
    }
    @Answer {
        The name of the desired time zone (like `Europe/Budapest`, or `UTC`).
    }
}

@FAQ {
    @Question {
        `format`
    }
    @Answer {
        The pattern used to parse date strings. This should follow the Unicode date format conventions (e.g. `yyyy-MM-dd`, `dd/MM/yyyy`).
    }
}

### Output

The `output` section controls how dates are localized during content rendering. You can configure the `locale` and `timeZone` here — using the same structure as described under the input section.

There is no need to define a format, as Toucan automatically generates multiple localized representations for each date object. These include commonly used formats such as `short`, `medium`, `long`, and `full`, all of which are accessible in the content context.

```yml
dataTypes:
  date:
    output:
      locale: "hu-HU"
      timeZone: "Europe/Budapest"
```

### Formats

During rendering, each date object is transformed into a `DateContext`, which includes a comprehensive set of format variants — both system-defined and custom-defined — for use in your templates.

You can define additional named formats under the `formats` key in your pipeline configuration. These will be merged with the system-provided date formats and made available in the content context.

```yaml
dataTypes:
  date:
    formats:
      full: 
        format: "yyyy/MM/dd"
        locale: "hu-HU"
        timeZone: "Europe/Budapest"
      year: 
        format: "y"
```

Custom formats can be accessed in your views using dot notation, appended to the property name: `{{&lt;property&gt;.formats.&lt;format-name&gt;}}`.
For example, using `{{publication.formats.full}}` will render the publication date using the format `yyyy/MM/dd` with the `hu-HU` locale and the `Europe/Budapest` time zone.

This approach provides flexibility in how date values are presented across your site.

In addition to custom formats, Toucan also provides several built-in representations out of the box. These include:

- Localized formats under the `.date` and `.time` keys:
  - {{<property>.date.short}}
	- {{<property>.date.medium}}
	- {{<property>.date.full}}
	- {{<property>.date.long}}
	- {{<property>.time.short}}
  - {{<property>.time.medium}}
  - {{<property>.time.full}}
  - {{<property>.time.long}}

- Raw formats:
	- {{<property>.timestamp}} – Unix timestamp
	- {{<property>.iso8601}} – **ISO 8601** string

These format variants allow for rich and consistent date rendering across HTML, RSS feeds, JSON APIs, and more.

## Engine

The engine section specifies which [rendering engine](/docs/rendering/engines/) Toucan should use to produce the final output files.

Toucan currently supports the following engines:
	•	`mustache` — for rendering text-based output (typically HTML) using Mustache templates.
	•	`json` — for generating raw JSON output, often used in API responses or search.

Each engine type can be configured with its own set of options, depending on the output format and content requirements.

To learn more about how each engine works and how to configure them, see the [engines](/docs/rendering/engines/) documentation.

## Queries

Render pipelines can define queries to provide additional context for Mustache templates during rendering.

Queries allow content to be fetched and made available across all templates within the pipeline.
This enables building dynamic and feature-rich HTML pages.

```yaml
queries:
  featured:
    contentType: post
    scope: detail
    filter:
      key: featured
      operator: equals
      value: true
    orderBy:
      - key: publication
        direction: desc
```

You can read more about queries [here](/docs/rendering/queries/).

## Iterators

Toucan has built-in support for pagination through iterators.

Iterators allow content to be paginated and rendered into multiple output files automatically.
This is useful for building archive pages, lists, or any repeated layout over paginated data:

```yaml
iterators:
  post.pagination:
    contentType: post
    scope: detail
    limit: 12
    orderBy:
      - key: publication
        direction: desc
```
You can read more about iterators [here](/docs/rendering/iterators/).

## Assets

Define your asset properties and asset behaviors under the `assets` key of your pipeline. 

### Asset properties

The `assets.properties` section allows you to inject asset references into the front matter during pipeline execution.

```yaml
assets:
  properties:
    - action: add
      property: css
      resolvePath: true
      input:
        name: "style"
        ext: "css"
```
- `property` – Specifies the front matter property into which the asset will be injected (e.g., css or js).
- `resolvePath` – If true, Toucan will resolve the asset path and replace `{{baseUrl}}` accordingly.
- `input` – Defines the file to use. You can use wildcards (*) to match multiple files by extension or name.
- `action` – Determines how the asset should be applied to the front matter. Toucan supports four action types:

@FAQ {
    @Question {
        `add`
    }
    @Answer {
        Simply add the new file while keeping other elements existing under the key.
    }
}

@FAQ {
    @Question {
        `set`
    }
    @Answer {
        Overrides existing elements and keeps only the new file.
    }
}

@FAQ {
    @Question {
        `load`
    }
    @Answer {
        Gets the contents of a file and store it in the front matter (e.g. an `svg`)
    }
}

@FAQ {
    @Question {
        `parse`
    }
    @Answer {
        Decodes a YAML file and attaches its contents as it was in your front matter.
    }
}

### Asset Behaviors

In Toucan, asset behaviors define how specific files — such as stylesheets — are handled during the rendering process. These behaviors can transform, optimize, or simply transfer asset files to the output directory.

Toucan currently supports the following behavior types:

- `compile-sass` - Compiles `Syntactically Awesome Stylesheets` files.
- `minify-css` - Reduces the size of CSS files by removing whitespace, comments, and redundant code.
- `copy` - Copies the original asset file directly to the output destination without modification.

Behaviors are configured under the `assets.behaviors` key in your pipeline file. If no additional input filters are defined, the behavior is applied to all matching asset files by default.

```yaml
assets:
  behaviors:
    - id: copy
```

You can target specific files for processing by defining an input block using the `path`, `name`, and `ext` fields. This lets you limit the scope of a behavior to certain assets. You can also configure an `output` block to control the resulting file’s name and extension.

```yaml
assets:
  behaviors:
    - id: compile-sass
      input:
        path: "sass/"
        name: "theme"
        ext: "sass"
      output:
        name: "theme.compiled"
        ext: "css"

## Transformers

Transformers allow you to dynamically generate or modify content during the rendering process using external scripts.

A transformer is an external program or script — written in any language executable by the operating system — that is run as part of a pipeline. This is particularly useful when content must be fetched or computed at build time, such as retrieving articles from a third-party API, generating content from a headless CMS, or performing custom data transformations.

```yaml
transformers:
  post:
    run:
      - name: swiftinit
        url: transformers
    isMarkdownResult: false
```

In this example:
- The run block defines what script to execute.
- The `swiftinit` script is located in the `transformers` directory.
- The `isMarkdownResult: false` flag tells Toucan that the script’s output is already in its final format (HTML), and should not be processed by the Markdown renderer.

> If `isMarkdownResult` were true (or omitted), Toucan would treat the transformer output as raw Markdown and process it accordingly.

For a complete walkthrough refer to the [Transformers](/docs/rendering/transformers/) guide.

## Output

The `output` section defines how and where the final rendered files are written to disk. It controls the output directory structure, filenames, and file extensions for each rendered page.

This section consists of three keys:

- `path` — the output folder relative to the site root
- `file` — the output file name (without extension)
- `ext` — the file extension (e.g. html, json)

All of these values can use template variables, such as `{{slug}}`, to dynamically generate folder structures and filenames during rendering. Any front matter key from the content can be referenced as a template variable in the output configuration.

```yaml
output:
  path: "{{slug}}"
  file: index
  ext: html
```

The following template variables are also supported to support paginated outputs:

- `{{iterator.current}}` - current page number in pagination
- `{{iterator.total}}` - total number of pages
- `{{iterator.limit}}` - items per page

## Examples

@FAQ {
    @Question {
        Simple 404 pipeline
    }
    @Answer {
        This pipeline is responsible for rendering the site’s 404.html page. It includes only the `not-found` content type — typically a single content bundle like `contents/404/index.md` — and uses the `pages.404` view for rendering.

        ```yml
        id: not-found

        contentTypes: 
          include:
            - "not-found"

        engine: 
          id: mustache
          options:
            contentTypes: 
              not-found:
                view: "pages.404"

        output:
          path: ""
          file: 404
          ext: html
        ```

        This configuration generates a single output file: `404.html` in the root of the site.
    }
}

@FAQ {
    @Question {
        API pipeline to list all posts in a JSON file.
    }
    @Answer {
        This pipeline is configured to output a JSON file containing all post entries, sorted by publication date. It defines its own virtual content type via `definesType: true`, so no manual type declaration is required elsewhere.

        ```yml
        id: api
        definesType: true

        queries: 
          posts:
            contentType: post
            scope: detail
            orderBy:
              - key: publication
                direction: desc

        contentTypes:
          include:
            - api

        engine: 
          id: json
          options:
            keyPath: "context.posts"

        output:
          path: "api"
          file: posts
          ext: json
        ```

        The output is a `posts.json` file placed in the `api` directory. It contains an array of `post` entries, sorted by the publication date in descending order, extracted from the `context.posts` keyPath.
    }
}

@FAQ {
    @Question {
        Redirect pipeline for rendering per-content pages
    }
    @Answer {
        This pipeline renders all content items with the `redirect` type using the `redirect` view.

        ```yml
        id: redirect
          contentTypes: 
            include:
              - redirect

        engine: 
          id: mustache
          options:
            contentTypes: 
            redirect:
              view: "redirect"

        output:
          path: "{{slug}}"
          file: index
          ext: html
        ```

        Each `redirect` content item is rendered to an `index.html` file placed under a `path` derived from its `slug`, creating a clean per-entry directory structure.
    }
}