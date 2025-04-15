---
id: "iterators"
slug: "docs/rendering/iterators"
category: "rendering"
order: 4
################################################################################
title: "Iterators"
description: ""
---

# Iterators
---

Iterators are special queries for supporting pagination. During rendering, they are preprocessed before other content bundles and transformed into new, separate content bundles — one for each page. To make an iterator work, you need to define it with a unique identifier and create a content bundle that references this identifier.

## Definition

You can define an iterator in a pipeline under the `iterators` key. Each iterator must have a unique identifier and an associated query.

```yml
iterators:
    <iterator_key>: <query>
```

Here’s a real example from this site:

```yml
iterators:
    post.pagination:
        contentType: post
        scope: detail
        limit: 12
        orderBy:
            - key: publication
              direction: desc
```

> This page focuses on iterators. If you’re unfamiliar with queries, check out the [Queries](/docs/rendering/queries/) page first.

## Iterator bundle

After defining your iterator, you just have to tell *Toucan* how to render each page. This is done by creating a content bundle. The bundle should have a special name—the iterator identifier enclosed in double braces: `{{iterator_id}}` (e.g., {{post.pagination}} in the earlier example).

You will most likely create a content bundle of type page with a separate template. Define your slug; the `{{iterator_id}}` will be replaced with the current page number. You can also refer to `{{number}}` and `{{total}}` to display additional information in the title, for example.

```yml
---
type: page
home: articles/page
slug: articles/page/{{post.pagination}}
title: "Latest news, page {{number}} of {{total}}"
description: "Stay updated with the latest news and updates. Page {{number}} of {{total}}."
template: blog.posts
---

# Articles

Browse all articles.

```
> The Markdown content defined in the bundle will be rendered on each generated page.

## Results

After generating the site, check the output folder to see the pages.

```text
articles
└── page
    ├── 1
    │   └── index.html
    └── 2
        └── index.html
```

## Troubleshooting

It’s common for someone to create content bundles without defining their type.

```md
---
title: "..."
description: "..."
...
---
```
Since there may be many posts, it’s more convenient to define their path once in the `src/themes/types/post.yml` file.

```yaml
id: post
paths:
    - blog/posts
```

Iterator bundles often created in this context, so you need to specify their type explicitly. If you don’t, *Toucan* will infer the type from the path, which can lead to the wrong type and template being used.
