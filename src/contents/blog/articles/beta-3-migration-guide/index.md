---
type: post
title: "Beta 3 migration guide"
description: "Migration guide for Toucan Beta 3: covering changes to content structure, theme changes and rendering features."
publication: "2025-04-15 14:00:00"
tags: 
- releases
authors:
- ferenc-viasz-kadi
featured: true
draft: true

---

Here's a list of the most important changes in [this](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.3) release:

## Changes in contents

- the file **src/contents/index.yml** is renamed to **src/contents/site.yml**, other changes in the file:
  - **language** renamed to **locale**
  - **dateFormat** removed
  - example yml file:

  ```yml
  baseUrl: "https://mysite.com"
  locale: "en-US"
  title: "My site title"
  ```

- add **type: not-found** to the frontmatter of the file **src/contents/404/index.md**:
  
  ```markdown
  ---
  title: 404
  description: Page not found
  type: not-found
  ---
  ```

- add **slug: ""** to the frontmatter of the file **src/contents/home/index.md**:

  ```markdown
  ---
  slug: ""
  title: Home title
  description: Home description
  template: "pages.home"
  ---
  ```

- if the **rss** feature is used then create a file **src/contents/rss.xml/index.yml** and add the following content:

  ```yml
  type: rss
  ```

- if the **sitemap** feature is used then create a file **src/contents/sitemap.xml/index.yml** and add the following content:

  ```yml
  type: sitemap
  ```

- if the **pagination** feature is used for a type, then these changes need to be completed:
  - rename directory name from **pagination** to **{{type.pagination}}**
  - in the md file change **type** from **pagination** to **page**
  - example md file for **post** type:

    ```markdown
    ---
    type: page
    slug: posts/page/{{post.pagination}}
    title: Posts
    description: Browse all posts.  
    template: blog.posts
    ---
    ```

- remove the **redirects** metadata field from any frontmatter, if used for the **redirect** feature, create a separate file in the **src/contents** folder, example:
  - create a file **src/contents/homeRedirect/index.yml**, with content:

    ```yml
    type: redirect
    to: home
    ```

    With this, if a user enters the URL **https://mysite.com/homeRedirect** in a browser, they will be redirected to **https://mysite.com/**.

## Changes in theme

- if any **block directive** is used, rename **params** to **parameters** in all block directive YAML files

- replace **{{& page.contents}}** with **{{& page.contents.html}}** in all mustache files, for example the **default.mustache** file:

  ```mustache
  {{<html}}
  {{$main}}

  {{& page.contents.html}}

  {{/main}}
  {{/html}}

  ```

- replace **site.context** with **context** in all mustache files, for example:

  ```mustache
  <section class="group">
    <h4>Featured posts</h4>
    {{#empty(context.featured)}}
    Empty.
    {{/empty(context.featured)}}
    {{^empty(context.featured)}}
    <div class="grid grid-221">
    {{#context.featured}}
        {{> partials.blog.post}}
    {{/context.featured}}
    </div>
    {{/empty(context.featured)}}
  </section>
  ```

- replace **{{#site.language}}** with **{{#site.locale}}** in all mustache files, for example in the **html.mustache** file:

  ```mustache
  <!DOCTYPE html>
    <html {{#site.locale}}lang="{{.}}"{{/site.locale}}>
    <head>
    ...
  ```

- replace **{{#imageUrl}}** with **{{image}}** in all mustache files, where the **img** HTML tag is used, example:

  ```mustache
  <a href="{{permalink}}">
    {{#image}}<img class="small rounded" src="{{image}}" alt="{{title}}">{{/image}}
    <span class="name">{{title}}</span>
  </a>
  ```

- add **{{site.baseUrl}}** for every link as a prefix in all mustache files, for example:
  - css: `<link rel="stylesheet" href="{{site.baseUrl}}/css/modern-normalize.css">`
  - image link:

      ```html
        <img
          src="{{site.baseUrl}}/images/logos/logo.png"
          alt="Logo of {{site.title}}"
          title="{{site.title}}"
        >
      ```

  - icon: `<link rel="shortcut icon" href="{{site.baseUrl}}/images/icons/icon-320.png" type="image/png">`
  
- if **pagination** feature is used for a type, then these changes need to be completed:
  - replace **{{#pagination.data.{type}}}** with **{{#iterator.items}}** in all mustache files
  - replace **{{/pagination.links.{type}}}** with **{{/iterator.links}}** in all mustache files
  Now [iterators](/docs/rendering/iterators/). are used to handle pagination.

- if **navigation** feature is used, then replace **{{#navigation}}** with **{{#site.navigation}}**, example:

  ```mustache
  <div class="menu-items">
    {{#site.navigation}}
      <a href="{{url}}"{{#class}} class="{{.}}"{{/class}}>{{label}}</a>
    {{/site.navigation}}
  </div>
  ```

- **toc** renamed to **outline**:
  - rename **toc.mustache** file to **outline.mustache**
  - replace **{{#page.toc}}** with **{{#page.contents.outline}}** in the **outline.mustache** mustache file

- if the **rss** feature is used then the **rss.mustache** file is changed, example template:

  ```mustache
  <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>{{site.name}}</title>
    <description>{{site.description}}</description>
    <link>{{site.baseUrl}}</link>
    <language>{{site.locale}}</language>
    <lastBuildDate>{{site.generation.formats.rss}}</lastBuildDate>
    <pubDate>{{site.lastUpdate.formats.rss}}</pubDate>
    <ttl>250</ttl>
    <atom:link href="{{site.baseUrl}}/rss.xml" rel="self" type="application/rss+xml"/>

    {{#context.posts}}
    <item>
      <guid isPermaLink="true">{{permalink}}</guid>
      <title><![CDATA[ {{title}} ]]></title>
      <description><![CDATA[ {{description}} ]]></description>
      <link>{{permalink}}</link>
      <pubDate>{{publication.formats.rss}}</pubDate>
    </item>
    {{/context.posts}}

  </channel>
  </rss>
  ```

- if the **sitemap** feature is used then the **sitemap.mustache** file is changed, example template:

  ```mustache
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>

    {{#context.pages}}
        <loc>{{permalink}}</loc>
        <lastmod>{{lastUpdate.formats.sitemap}}</lastmod>
    {{/context.pages}}

    {{#context.posts}}
        <loc>{{permalink}}</loc>
        <lastmod>{{lastUpdate.formats.sitemap}}</lastmod>
    {{/context.posts}}

    </url>
  </urlset>
  ```

- if the **redirect** feature is used then the **redirect.mustache** file is changed, example template:

  ```mustache
  <!DOCTYPE html>
  <html {{#site.locale}}lang="{{.}}"{{/site.locale}}>
    <meta charset="utf-8">
    <title>Redirecting&hellip;</title>
    <link rel="canonical" href="{{site.baseUrl}}/{{page.to}}">
    <script>location="{{site.baseUrl}}/{{page.to}}"</script>
    <meta http-equiv="refresh" content="0; url={{site.baseUrl}}/{{page.to}}">
    <meta name="robots" content="noindex">
    <h1>Redirecting&hellip;</h1>
    <a href="{{site.baseUrl}}/{{page.to}}">Click here if you are not redirected.</a>
  </html>
  ```

- **type** changes:
  - add new types: **not-found**, **redirect**, **rss** and **sitemap**
  - **location** is changed to **paths**
  - remove **context** from all yml files
  - remove **template** from all yml files
  - remove **rss: true** from all yml files
  - remove **pagination** from all yml files
  - [querie](/docs/rendering/queries/) changes:
    - added [scopes](/docs/rendering/scopes/)
    - order changed to orderBy

## Pipelines

Pipelines are added to generate the final output from source materials, more info [here](/docs/rendering/pipelines/).

## Useful links

Check out the official [documentation](/docs/) for more details and examples on how:

- [iterators](/docs/rendering/iterators/)
- [pipelines](/docs/rendering/pipelines/)
- [queries](/docs/rendering/queries/)
- [scopes](/docs/rendering/scopes/)
- [transformers](/docs/rendering/transformers/)

work.
