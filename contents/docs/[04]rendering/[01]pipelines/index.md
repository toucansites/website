---
category: "rendering"
title: "Pipelines"
description: ""
order: 1
---

# Pipelines
---

Toucan uses render pipelines to generate the final output from source materials.
Render pipelines are responsible for transforming content into the desired output format.

Pipelines are highly customizable, providing full control over the rendering process.
Toucan can generate static websites or APIs by using different render pipelines.

Each pipeline is defined in a YAML file and stored in the `pipelines` directory.

A typical site uses the following pipelines:
- **html.yml** - Renders the main content of the site.
- **api.yml** - Generates a JSON file to support search.
- **404.yml** - Renders the `Not Found` page.
- **sitemap.yml** - Creates the `sitemap.xml` file.
- **rss.yml** - Creates the `rss.xml` file.
- **redirect.yml** - Renders pages with the `redirect` content type.

## Field Reference

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
        Defines the [rendering engine](https://www.notion.so/docs/rendering/engines/) used to generate the final output.
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
        `Asset Property` and `Asset Behaviour` options to define how asset are processed during pipeline execution. 
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

Every pipeline must have a unique `id` to identify it. We suggest to choose short and descriptive identifiers because in some cases you have to refer to them. 

```yaml
id: html
```

> `Pipelines` are processed in alphabetical order based on the `id` field.

## Content Types

The content types sections allows you to specify which content types will be used to generate the output of the pipeline.

### `include`

A list of content types to explicitly include during pipeline execution. If empty, all content types are included unless excluded.

```yml
contentTypes:
  include:
    - rss
```

### `exclude`

A list of content types to explicitly exclude during pipeline execution. These override entries in `include` and are always filtered out.

```yml
contentTypes:
  exclude:
    - page
```

### `lastUpdate`

List of content types that should be tracked for last update timestamps used in your sitemap and rss files. If not specified, all content type will be used.

```yml
contentTypes:
  lastUpdate:
    - post
```

### `filterRules`

A mapping of content type keys to filtering conditions. Each key represents a content type (e.g., `"post"`, `"author"`), and its value defines a condition that must be met for the content to be included in the pipeline. This enables fine-grained control over which specific content items are used in the pipeline.

```yml
contentTypes:
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

If you want to learn more about query conditions, check the [Queries](/docs/rendering/queries) section.

## Virtual Content Types

The `definesType` boolean flag tells Toucan to create a virtual type with the name of the pipeline. The new type won't have any properties, just an `id`. Virtual types are typically created for single-type pipelines, like `api`, `sitemap` or `rss`.

## Data Types

Toucan allows customization of data types within render pipelines.
Currently, only custom date formats can be defined using the `date` key under the `dataTypes` section of the pipeline. Dates 

### Input

Toucan uses a localized date format to parse date objects from your content files. By default it will use the format `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'` with `en-US` locale and `GMT` time zone. You can specify custom values at the `input` key if you want to provide data in a different format/locale/time zone.

```yml
dataTypes:
  date:
    input:
      locale: "hu-HU"
      timeZone: "Europe/Budapest"
      format: "asdf"
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

`output` defines date localization for your content rendering. Use `locale` and `timeZone` like described in the `input` section. In your content context multiple date formats will be available for each date object, so no need to specify the `format` key here.

```yml
dataTypes:
  date:
    output:
      locale: "hu-HU"
      timeZone: "Europe/Budapest"
```

### Formats

Under the `formats` key, you can define named custom date configurations. These will be added to the system provided date configurations. During the rendering process each date object will be converted into `DateContext`s, which contains all formats - system provided and user defined - prepared to use in your final content.

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

You can reference these formats in your views with dot syntax after the property name: `{{&lt;property&gt;.formats.&lt;format-name&gt;}}`. In this case the `full` format of the `publication` property will be available with the `{{publication.formats.full}}` reference and will be rendered with the `yyyy/MM/dd` format with the `hu-HU` locale in the `Europe/Budapest` time zone.

This gives you felxibilty on how you can represent Date objects, however many built in date format are available out of the box. You can access `short`, `medium`, `full` and `long` styles under the `date` and `time` keys of the `DateContext` objects (`{{&lt;property&gt;.date.medium}}`, `{{&lt;property&gt;.time.short}}`). A `timestamp` and an `ISO8601` formatted date is also available (`{{&lt;property&gt;.timestamp}}`, `{{&lt;property&gt;.iso8601}}`).

## Engine

The `engine` section defines the [rendering engine](https://www.notion.so/docs/rendering/engines/) used to generate the final output.

Toucan currently supports two engines:

- `mustache`
- `json`

Each engine can have its own set of options.
You can read more about engines [here](https://www.notion.so/docs/rendering/engines/).

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

You can read more about queries [here](https://www.notion.so/docs/rendering/queries/).

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
You can read more about iterators [here](https://www.notion.so/docs/rendering/iterators/).

## Assets

Define your asset properties and asset behaviours under the `assets` key of your pipeline. 

### Asset properties

With `Asset Properties` it is possible to inject your assets into the front matter.

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

The `property` field decide which property we inject into.
`resolvePath` helps to replace `{{baseUrl}}` in your path if needed.
`input` specifies the file we use. You can use `*` to refer to all files with the given extension.
`action` defines what happens with your asset and front matter. There are 4 action types supported.

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

TODO

In Toucan, asset behaviors define how specific files — such as stylesheets — are processed during the pipeline execution. There are 3 behaviors supported available:

- `compile-sass` - Helps to support `Syntactically Awesome Stylesheets`.
- `minify-css` - Minifies CSS files.
- `copy` - Simply copies an asset files into the destionation.

```yaml
assets:
    behaviors:
        - id: compile-sass
        input???
        output???
```

## Transformers

Transformers allow processing content in a custom way during the rendering process.

A transformer is an external script or program that generates content dynamically.
Transformers can be written in any programming language, as long as they can be executed by the operating system.

They are useful when content is not available locally, needs to be fetched from external sources — for example, pulling articles from a 3rd-party API or service.

```yaml
transformers:
  post:
    run:
      - name: swiftinit
        url: transformers
    isMarkdownResult: false
```

The example above runs a script named `swiftinit` located in `transformers` directory. The `isMarkdownResult: false` line indicates that the result is already in the desired format, there is no need to call the markdown rendering step on it.

Read the detailed guide about transformers [here](https://www.notion.so/docs/rendering/transformers/).

## Output

The `output` section defines how the final output files are created.
It consists of:

- `path` — the folder structure for the output
- `file` — the filename
- `ext` — the file extension

All of these values can use template variables, such as `{{slug}}`, to dynamically generate folder structures and filenames during rendering. Any front matter key from the content can be referenced as a template variable in the output configuration.

```yaml
output:
    path: "{{slug}}"
    file: index
    ext: html

```

The following template variables are also supported to make paginated outputs possible:

- `{{iterator.current}}`
- `{{iterator.total}}`
- `{{iterator.limit}}`

## Examples

@FAQ {
    @Question {
        A simple 404 pipeline
    }
    @Answer {
        Includes only the `not-found` content type. Commonly you only create a single content with that type (`contents/404/index.md`) which will be rendered with the `pages.404` view.

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

        The result is a single `404.html` file.
    }
}

@FAQ {
    @Question {
        API pipeline to list all posts in a JSON file.
    }
    @Answer {
        This pipeline defines its own virtual type, manual creation is unnecessary. As additional context it runs a query to list all posts using the `mustache` engine and a keyPath to receive a simplified result.

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

        The result is a `posts.json` file in the `api` directory containing an array of post items sorted by publication in descending order extracted from the `context.posts` keyPath.
    }
}

@FAQ {
    @Question {
        API pipeline to list all posts in a JSON file.
    }
    @Answer {
        Renders only the `redirect` contents with the `redirect` view. This pipeline defines its own virtual type, manual creation is unnecessary. As additional context it runs a query to list all posts using the `mustache` engine and a keyPath to receive a simplified result.

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

        The result is an `index.html` file under the directory structure based on the slug for each `redirect` content.
    }
}