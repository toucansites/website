---
type: post
title: "Beta 3 is out"
description: "The third beta release of Toucan is now ready try. New pipelines, queries, iterators and more."
publication: "2025-04-02 14:00:00"
tags:
    - releases
authors:
    - ferenc-viasz-kadi
---
## Updated core

Toucan's core has received a major update to improve scalability and type safety. It was really important for us laying down solid foundation for our future plans.
In addition, plenty of new features have just been released — lets highlight a few we`ve been working on. 🧑‍💻

## Pipelines

In a nutshell, a pipeline tells Toucan what to generate, how and to where. With this, you have way more control over your site generation process. It is easy to define custom queries, introduce new date formats, iterators, or transformers. Different flows can be separated into multiple pipelines, what makes the definitions clear. A good example is the `api` pipeline for this site, which creates a `json` file from posts to enable searching.

```yaml
id: api
queries:
    posts:
        contentType: post
        orderBy:
            - key: publication
              direction: desc
contentTypes:
    include:
        - api
engine:
    id: json
output:
    path: "api"
    file: posts
    ext: json
```

## Queries

Queries give extra flexibility how you access your content in a unified format. You can define them on the content definition itself or on your pipelines. They are strictly for a single content type, but limit, offset, filtering by key and ordering are also available. Narrowing down your content is super easy with them, such as featured posts:

```yaml
featured:
    contentType: post
    filter:
        key: featured
        operator: equals
        value: true
    orderBy:
        - key: publication
          direction: desc
```

## Iterators

Pagination did not fit well in content definitions, so they just got their new place on the pipelines. They become special queries now, which will be executed and resolved when a content with the same name was found as its identifier: `{{iteratorId}}`.

```yaml
iterators:
    post.pagination:
        contentType: post
        limit: 12
        orderBy:
            - key: publication
              direction: desc
```

---

If you are interested in more details check the [Beta 3 migration guide](/beta-3-migration-guide) or the changes of [this release](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.3) on GitHub. Real world examples are also available such as [this site](https://toucansites.com/) or our [Minimal Example](https://github.com/toucansites/minimal-example).

Have fun with Toucan Beta 3 and let us know what you think!
