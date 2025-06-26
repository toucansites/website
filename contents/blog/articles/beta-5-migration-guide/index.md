---
type: post
title: "Beta 5 migration guide"
description: "This guide explains the most important changes in Toucan Beta 5 and helps you update your project."
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

Toucan now allows you to create separate build targets, making it much easier to generate different versions of your site. You can define these custom targets in the `toucan.yml` file located in your site’s root directory.:

```yaml
targets:
    - name: dev 
      default: true
    
    - name: live
      url: "https://toucansites.com/"
```

The `input` and output `directory` arguments, along with the `baseUrl` option, have been removed from the `watch`⁠ and `⁠generate`⁠ commands. Now, you should use the target option and define your settings in the new target file. Then, run the generate command with the `target` option to build your site for the chosen target:

```sh
toucan generate . --target live
```

The only required argument is the working directory, which defaults to your current directory. The `target` option tells Toucan which build target to use. If you want to set custom input and output directories, define them in your target file, alongside your target-based configuration:

```yaml
targets:
    - name: "live"
      config: "./config-live.yml"
      url: "https://toucansites.com"
      input: "./src"
      output: "./dist"
      default: false
```

Each target has a unique name and can include a default flag to mark it as the default for your project. You can also set other options, such as custom configuration files, input and output directories, and base URLs for each target.

> note: Configuration files will be automatically detected based on your target name (e.g. `config-live.yml`). If there is no config file with the target name as a suffix, Toucan will use the default config file named: `config⁠.yml`.

## Site yaml updates

In the past, the `site.yml`⁠ file was used to set the locale, timezone, and baseUrl. Now, with the introduction of targets, these settings have been moved out of `site.yml⁠` and are managed in the target and configuration files instead. Feel free to remove these keys from your `site.yml` file:

```yaml
# baseUrl: "https://toucansites.com/"
# locale: "en-US"
name: "Toucan"
description: "The Markdown-based static site generator written in Swift"
language: "en-US" # still available in the templates
```

The locale and timezone settings are now set in the configuration file under the data type settings. The base URL should be set in the target file.

## Date format updates

We have improved date management in both the pipeline and the configuration settings. The way you set up custom date formats has also changed.

Here is an example of the new input date format structure in a configuration file:

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

We’ve adopted a similar structure for build pipelines, allowing you to define output date formats in a uniform way:

```yaml
dataTypes:
    date:
        formats:
            year: 
                format: "y"

```

ISO8601 is now a standard format and is built directly into the core date context object.

When using date types in your templates, you can now simply use the `.iso8601` key on the date itself:

```html
Built-in iso8601 date format:
{{page.publication.iso8601}}

Custom year format:
{{page.publication.formats.year}}
```

All other custom formats are still available under the `formats`⁠ property, just as before.

## Template updates

We’ve made some straightforward but important improvements to the template system.

### Themes vs templates 

After much discussion, we have decided to refer to themes as templates and to call template files (mustache files) views from now on.

We spent a lot of time on this decision and believe it is the right approach. To match these changes, we have also updated our directory structure as follows:

- `src/themes/default/assets/` is now `src/templates/default/assets`
- `src/themes/default/templates/` is now `src/templates/default/views` 

Please remember to update your custom template keys in the pipeline file, specifically in the engine section:

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

If you previously set a custom view template in your content, you should now use the following format:

```yaml
type: page
# previously: template: docs.home 
views:
    html: docs.home
title: "Documentation"
description: "Access the complete user documentation for the Toucan Static Site Generator. Learn how to create and manage static websites efficiently."
```

The `⁠views`⁠ property now supports multiple pipelines. In this example, we only specify the template for the `html` pipeline.

### Template metadata support

Templates are now required to include basic metadata for Toucan. This change helps ensure your templates remain compatible with future versions of the Toucan SSG. 

Here is an example of a `⁠template.yml`⁠ file, which should be placed in your template’s root folder:

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

We strongly encourage you to provide all these fields and include a demo URL for your template. We are excited to showcase your templates, so please feel free to submit them to us if you have one.


### Context changes

We’ve removed the site prefix from baseUrl and generator info, so you can now use them directly as `{{baseUrl}}` and `{{generation.formats.year}}`.


## Block parameter default values

We have updated the default value key for block parameters to match the property naming. From now on, always use `⁠defaultValue`⁠ as the key, for example:

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

We hope this change will create a more consistent and user-friendly experience for developers.

## New property type: asset

We are also adding a new property type called `⁠asset`⁠. These properties will automatically resolve the file path for use in your templates. Here is how you can define an image asset:

```yaml
# post type definition
properties:
    image:
        type: asset
        required: true
```

In your content file, you can set the asset value like this:

```yaml
image: ./assets/cover.jpg
```

Now, in the template, this will give you the full path to the asset:

```
<img src="{{page.image}}">
```

We hope these changes will benefit Toucan in the long run. We are excited to build new websites and APIs with our static site generator, and we look forward to sharing more updates with you.

If you have any issues with the migration, please let us know. We are here to help. Start a new [discussion on GitHub](https://github.com/toucansites/toucan/discussions) if you have any questions.

