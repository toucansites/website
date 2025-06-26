---
type: post
title: "Beta 4 is available"
description: "Better control over your assets and content. Improved API support."
publication: "2025-05-19 10:00:00"
tags:
    - releases
authors:
    - ferenc-viasz-kadi
featured: true
draft: true
---

## Asset Properties

Asset Properties are a new way to inject your assets into the front matter. With different action types, you can choose to simply add or override file keys, load contents and store them directly in your front matter (e.g. an `svg`) or even parse other YAML files and attach its contents.

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

## Asset Behaviors

In Toucan, asset behaviors define how specific files — such as stylesheets — are processed during the pipeline execution. These behaviors can transform assets, like minifying CSS files.
```yaml
assets:
    behaviors:
        - id: minify-css
```

## API support

`Beta 4` also brings better API support. With the `keyPath` and `keyPaths` engine options Toucan allows pipelines to extract a single or multiple values from the result context. This make it possible to shape what's included in the final JSON.

```yaml
id: api
engine: 
    id: json
    options:
        keyPath: "context.posts"
```

New output arguments have been added to support paginated APIs.

```yml
id: api
output:
    path: "api"
    file: "{{iterator.current}}"
    ext: json
```

Some type definitions are typically exist to be able to run a specific pipeline by including a single, empty type. Now we can spare them. When `definesType` is `true` in a pipeline, a virtual type with the same name will be automatically attached. 

```yml
id: api
definesType: \(definesType ? "true" : "false")
```

---

Check the [Beta 4 migration guide](/beta-3-migration-guide) for more details or the changes of [this release](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.4) on GitHub. Also give us a ⭐️ if you like Toucan. 

Try the latest beta and let us know what you think!
