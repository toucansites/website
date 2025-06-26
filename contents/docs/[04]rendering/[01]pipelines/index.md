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

## Basics

As a starting point, here is a simple example of a pipeline that renders HTML pages (`src/pipelines/html.yml`):

```yaml
id: html

contentTypes:
    include:
        - page

engine:
    id: mustache
    options:
        contentTypes:
            page:
                template: "pages.default"

output:
    path: "{{slug}}"
    file: index
    ext: html
```

Each pipeline is defined in a YAML file and stored in the `src/pipelines` directory.

## Identifier

Every pipeline must have a unique `id` to identify it.

```yaml
id: html
```

## Content Types

The `contentTypes` section specifies which content types should be included or excluded during the rendering process.

```YAML
contentTypes:
    include:
        - rss
    exclude:
        - page
    lastUpdate:
        - post
```

In this example:
- Only the rss content type will be included.
- The standard page content types will be excluded.
- The post content type will be used to determine the lastUpdate time of the site.

## Virtual Content Types

The `defineTypes` boolean flag tells Toucan to create a virtual type with the name of the pipeline. The new type won't have any properties, just an `id`. Virtual types are typically created for single-type pipelines, like `api`, `sitemap` or `rss`.

## Assets

### Asset properties

With `Asset Properties` it is possible to inject your assets into the front matter. 
The `property` field decide which property we inject into. `resolvePath` help to replace `{{baseUrl}}` in your path if needed. `input` specifies the file we use. You can use `*` to refer to all files with the given extension.

#### Actions

There are 4 action types supported. `add` will simply add the new file while keeping other elements, `set` will override existing elements and keep only the new file, `load` will get the contents of a file and store it in the front matter (e.g. an `svg`) and `parse` will decode YAML and attach its contents as it was in your front matter.

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

### Asset Behaviors

In Toucan, asset behaviors define how specific files — such as stylesheets — are processed during the pipeline execution. There are 3 behaviors supported for now:
- `compile-sass` - Helps to support `Syntactically Awesome Stylesheets`.
- `minify-css` - Minifies CSS files.
- `copy` - Simply copies an asset files into the destionation.

```yaml
assets:
    behaviors:
        - id: compile-sass
```


## Engine

The `engine` section defines the [rendering engine](/docs/rendering/engines/) used to generate the final output.

Toucan currently supports two engines out of the box:

- `mustache`
- `json`

Additional engines may be added in the future.

Each engine can have its own set of options.

For example, when using the `mustache` engine, a default template file can be specified for each content type.

```yaml
engine:
    id: mustache
    options:
        contentTypes:
            page:
                template: "pages.default"
```

You can read more about engines [here](/docs/rendering/engines/).

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

In this example, a query named `featured` is defined. This query selects all posts where featured is `true`, sorted by publication date in descending order. The result of this query will be available in Mustache templates using the `{{context.featured}}` variable. This allows all templates in the pipeline to access the featured posts easily during rendering.

You can read more about queries [here](/docs/rendering/queries/).

## Data Types

Toucan allows customization of data types within render pipelines.
Currently, custom date formats can be defined using the `dataTypes` section of the pipeline configuration.

```yaml
dataTypes:
    date:
        dateFormats:
            full:
                format: "yyyy/MM/dd"
```

In this example, a custom date format named full is defined. This allows date properties to be rendered using the specified format. For example, to render a post’s publication date in the full format: `{{publication.formats.full}}`.

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

In this example, an iterator named `post.pagination` is defined.

It paginates the post content type, returning 12 items per page, ordered by publication date in descending order.

To render paginated output, create a folder named `{{post.pagination}}` and add an index file inside it.

During rendering, Toucan will generate one file per page using the iterator context, which contains the items array and the pagination info.

You can read more about iterators [here](/docs/rendering/iterators/).

## Transformers

Transformers allow processing content in a custom way during the rendering process.

A transformer is an external script or program that generates content dynamically.
Transformers can be written in any programming language, as long as they can be executed by the operating system.

Transformers are useful when content is not available locally or needs to be fetched from external sources — for example, pulling articles from a 3rd-party API or service.

```yaml
transformers:
    post:
        run:
            - name: swiftinit
              url: src/transformers
        isMarkdownResult: false
```

In this example:
- The transformer runs a script named swiftinit located in `src/transformers`.
- The `isMarkdownResult: false` line indicates that the result is already in the desired format, there is no need to call the markdown rendering step on it.

You can see multiple working examples of transformers [here](https://github.com/swift-on-server/site).

Read the detailed guide about transformers [here](/docs/rendering/transformers/).
