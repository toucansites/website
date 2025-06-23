---
type: post
title: "Beta 5 migration guide"
description: "Migration guide for Toucan Beta 5"
publication: "2025-07-02 10:00:00"
tags:
    - releases
    - migration-guide
authors:
    - tibor-bodecs
featured: true

---

Here's a list of the most important changes in [this](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.5) release:

## Target support

Toucan now allows developers to create build targets. This simplifies the process of generating multiple variants of the same site by leveraging targets. you can specify custom targets via the `toucan.yml` file in your site's root directory:

```yaml
targets:
    - name: dev 
      default: true
    
    - name: live
      url: "https://toucansites.com/"
```

The input, output directory arguments and the baseUrl option was removed both from the `watch` and `generate` commands. Now you can specify a target option instead:

```sh
toucan generate . --target live
```

The only argument is always the working directory, defaults to the current working directory and the target option represents which target to build. If you wish to use custom input & output sources, use your target definition file:

```yaml
targets:
    - name: "live"
      config: "./config.live.yml"
      url: "https://toucansites.com"
      input: "./src"
      output: "./dist"
      default: false
```

Targets can specify their own configruation files, custom input & output directories and the base url. We've more or less moved all the command arguments to the target file. This feature will allows us to build for different environments.

## Site yaml updates

Previously the site.yml file was the place to specify a locale & timezone and the baseUrl, but now we have targets, so these keys are moved away:

```yaml
# baseUrl: "https://toucansites.com/"
# locale: "en-US"
name: "Toucan"
description: "The Markdown-based static site generator written in Swift"
language: "en-US" # still available in the templates
```

The locale & timezone settings are move to the configuration file. The base URL is now specified in the target file.

## Date format updates

Both for the pipelines & configuration, we've enhanced date management, also changed how you can configure custom date formats.

Here's an example config file with the new input date format structure:

```yaml
dataTypes:
    date:
        input:
            format: "yyyy-MM-dd HH:mm:ss"
#            locale: "en-US"
#            timeZone: "GMT"
#        output:
#            locale: "en-US"
#            timeZone: "GMT"
#        formats:
#            year: 
#                format: "y"
#                locale: "en-US"
#                timeZone: "GMT"
```

We've introduced a similar structure for build pipelines to specify output date formats:

```yaml
dataTypes:
    date:
        formats:
            year: 
                format: "y"

```

ISO8601 is now a standard format, built in to the core date context object

```html
Built-in iso8601 date format:
{{page.publication.iso8601}}

Custom year format:
{{page.publication.formats.year}}
```

All the other custom formats are available on the `formats` property just like before.

## Template updates

We've got some simple, but solid updates for the template system.

### Themes vs templates 

We've got an internal debate for quite a long time now, and we've made the conclusion that we are going to refer themes as templates and templates (mustache files) as views from now on. 

We've spent countless hours on this and we believe that this is going to be the correct approach, to reflect these changes, we've also updated our directory structure as follows:

- `src/themes/default/assets/` is now `src/templates/default/assets`
- `src/themes/default/templates/` is now `src/templates/default/views` 

Please note that custom template keys should also be updated in the pipeline file in the engine section:

```yaml
engine: 
    id: mustache
    options:
        contentTypes: 
            page:
                # previously: template
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
                view: docs.guide.default
```

Additionally if you had a custom view template set in your content, now you should use this format:

```yaml
type: page
# previously: template: docs.home 
views:
    html: docs.home
title: "Documentation"
description: "Access the complete user documentation for the Toucan Static Site Generator. Learn how to create and manage static websites efficiently."
```

The `views` property can now support multiple pipelines, so in this case we only specify the template for the `html` pipeline. 

### Template metadata support

We now require templates to specify basic metadata information for Toucan. This is a step forward to ensure long-term template compatibility with all the future Toucan SSG versions. This is how a sample `template.yml` file looks like, you should place this file inside your template's root folder:

```yaml
# templates/default/template.yml
name: "Toucan website"
description: "Official template for the Toucan website."
url: "https://github.com/toucansites/website"
version: "1.0.0-beta.5"
generatorVersions:
    - "1.0.0-beta.5"

demo:
    url: "https://toucansites.com/"

authors:
    - name: "Binary Birds Kft."
      url: "https://binarybirds.com/"

license:
    name: "MIT license"
    url: "https://github.com/toucansites/website?tab=MIT-1-ov-file#readme"

tags:
    - "toucan"
    - "website"
```

We highly encourage you to fill out these fields and provide a demo url for your template. Also we're looking forward to showcase your templates, so please don't hesitate to submit them to us. 


### Context changes

We've dropped the site prefix for baseUrl and generator info, so from now on you can simply use them as `{{baseUrl}}` and `{{generation.formats.year}}`.


## Block parameter default values

We've updated block parameter the default value key, to match properties. From now on, please use `defaultValue` as the key everywhere, e.g.:

```yaml
name: column
parameters:
  - label: class
    # previously it was called default
    defaultValue: "" 
requiresParentDirective: grid

tag: div
attributes:
  - name: class
    value: "column {{class}}"
```

We hope that this change will lead to a more unified developer experience.

## New property type: asset

We're also introducing a brand new property type called `asset`, these properties will automatically resolve the file path when providing context for the templates, here's how to define an image asset:

```yaml
# post type definition
properties:
    image:
        type: asset
        required: true
```

Now inside the template, this will contain the full path of the asset.

```
<img src="{{post.image}}">
```

We really hope that these changes will benefit Toucan on the long term, we're eager to build some cool websites & APIs using our static site generator, can't wait to share more goodies with you. 

If you have issues with the migration please let us know, we're here to help you. Start a new discussion on GitHub if you have questions.

