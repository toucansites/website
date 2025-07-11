---
category: "getting-started"
title: "Configuration"
description: "Customize your Toucan site with the config file to modify default" 
order: 4
---

# Configuration
---

The configuration file sets the main options for the current target. It controls site settings, data types, language and region options, rendering parameters, and where everything is stored — like pipelines, content, types, and more — when Toucan builds your site.

## Default values

This file is optional. If you do not have a config file, Toucan will use its built-in default values. The default configuration values are listed below:

```yaml
site:
    assets:
        path: "assets"
    settings:
        path: ""
pipelines:
    path: pipelines
contents:
    path: contents
    assets:
        path: assets
types:
    path: types
blocks:
    path: blocks
templates:
    location:
        path: templates
    current:
        path: default
    assets:
        path: assets
    views:
        path: views
    overrides:
        path: overrides
dataTypes:
    date:
        input:
            format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
            locale: en-US
            timeZone: GMT
        output: 
            locale: en-US
            timeZone: GMT
        formats: 
            # none by default
renderer:
    wordsPerMinute: 238
    outlineLevels:
    - 2
    - 3
    paragraphStyles:
        note:
        - note
        warn:
        - warn
        - warning
        tip:
        - tip
        important:
        - important
        error:
        - error
        - caution
```

Don’t worry — most of the time, you only need to change the data types section. So, a custom config file can be as simple as this:

```yml
dataTypes:
    date:
        input:
            format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
            locale: hu-HU
            timeZone: CET
        output: 
            locale: hu-HU
            timeZone: CET
        formats:
            year:
                format: y
                locale: hu-HU
                timeZone: CET
```

By setting both the input and output locale and time zone, you can easily add proper internationalization to your multi-language Toucan website. You can also create custom date formats by adding new objects to the formats section. This gives you flexibility to display dates the way you want for different languages and regions. 

If you want to learn more about working with content and localization, you can continue with the content management guides or check out our open-source example projects. These resources will help you understand how to manage your website’s content and support multiple languages easily.


## Reference 

Below is a breakdown of each key in the configuration file, organized by section for easy reference:

### Site

The location of the site related settings file and global assets.

@FAQ {
    @Question {
        **`site.assets.path`** - The location of the global site assets.
    }
    @Answer {
        The contents directory will be copied, including all its sub-folders and files, into the final output folder. 
    }
}


@FAQ {
    @Question {
        **`site.settings.path`** - The location of the site settings.
    }
    @Answer {
        The `site.yml` file will be loaded from this location. You can use it to set global site options for your templates, such as the site name, description, or navigation menu.
    }
}

### Data Types

This section defines the input and output data types for the website.

@FAQ {
    @Question {
        **`dataTypes.date.input.format`** - The input date format.
    }
    @Answer {
        This value specifies the format in which dates are expected to be provided in the content files.

        **Example**
        - `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`
    }
}
@FAQ {
    @Question {
        **`dataTypes.date.input.locale`** - The input locale.
    }
    @Answer {
        This value sets the locale used for default date inputs. It helps Toucan know which language and region to use when reading date information in your content files.
    }
}
@FAQ {
    @Question {
        **`dataTypes.date.input.timeZone`** - The input time zone.
    }
    @Answer {
        This value sets the time zone for the default date inputs. It tells Toucan which time zone to use when reading date and time information from your content files.
    }
}

@FAQ {
    @Question {
        **`dataTypes.date.output.locale`** - The output locale.
    }
    @Answer {
        This value sets the locale for the standard output date formats. It tells Toucan which language and region to use when showing dates on your website.
    }
}

@FAQ {
    @Question {
        **`dataTypes.date.output.timeZone`** - The output time zone.
    }
    @Answer {
        This value sets the time zone for the standard output date formats. It tells Toucan which time zone to use when displaying dates on your website.
    }
}

@FAQ {
    @Question {
        **`dataTypes.date.formats`** - Custom date output formats.
    }
    @Answer {
        This value lets you set custom output formats for dates by using a key and a value that includes the format, locale, and time zone. By doing this, you can add extra date formats in addition to the standard date format available in each template file. This makes it easy to display dates in different ways, depending on your needs.
    }
}


### Pipelines

This section covers pipeline settings, such as where to find the render pipelines.

@FAQ {
    @Question {
        **`pipelines.path`** - The location of the pipelines folder.
    }
    @Answer {
        This value specifies the location of the pipelines folder inside the input folder.
    }
}

### Contents

Content-related configuration, such as the location and the name of the content assets folders.

@FAQ {
    @Question {
        **`contents.path`** - The location of the contents folder.
    }
    @Answer {
        This value specifies the location of the contents folder inside the source folder.
    }
}
@FAQ {
    @Question {
        **`contents.assets.path`** - The location of the assets within the content bundle.
    }
    @Answer {
        This value specifies the location of the assets inside a content bundle.
    }
}

### Types

This section covers settings related to content type definitions. 

@FAQ {
    @Question {
        **`types.path`** - The name of the content types folder.
    }
    @Answer {
        This value specifies the folder name of the content types location inside the source folder. This folder is used to define custom [content types](/docs/content-management/content-types/) for the website.
    }
}

### Blocks

This section is for settings related to custom content blocks.

@FAQ {
    @Question {
        **`blocks.path`** - The name of the blocks folder.
    }
    @Answer {
        This value specifies the folder name of the blocks location inside the input folder (working directory).
    }
}

### Templates

This section defines the template-related settings.

@FAQ {
    @Question {
        **`templates.location.path`** - The location of the templates folder.
    }
    @Answer {
        This value specifies the location of the templates folder inside the input folder.
    }
}
@FAQ {
    @Question {
        **`templates.current.path`** - The template to use.
    }
    @Answer {
        This value specifies the folder name of the template, inside the templates folder, to use.
    }
}
@FAQ {
    @Question {
        **`templates.assets.path`** - The name of the assets folder.
    }
    @Answer {
        This value specifies the folder name of the [assets](/docs/templates/assets/) location inside the templates folder.
    }
}
@FAQ {
    @Question {
        **`templates.views.path`** - The name of the templates folder.
    }
    @Answer {
        This value specifies the folder name of the [Mustache templates](/docs/templates/views/) (aka. views) location inside the templates folder.
    }
}
@FAQ {
    @Question {
        **`templates.overrides.path`** - The name of the template overrides folder.
    }
    @Answer {
        This value specifies the folder name of the Mustache template overrides location inside the templates folder. If you place a file in this folder, it will override the default template for the corresponding file.
    }
}

### Renderer

This section defines additional configurations for rendering.

@FAQ {
    @Question {
        **`renderer.wordsPerMinute`** - The average words per minute for reading time calculations.
    }
    @Answer {
        This value specifies the number of words per minute used to estimate reading time for content.
    }
}
@FAQ {
    @Question {
        **`renderer.outlineLevels`** - The heading levels included in the content outline.
    }
    @Answer {
        This value specifies the heading levels (e.g., H2, H3) that are included in the content outline.
    }
}
@FAQ {
    @Question {
        **`renderer.paragraphStyles`** - The styles applied to paragraphs.
    }
    @Answer {
        This value specifies the mapping of paragraph styles to their corresponding keywords (e.g., note, warn, tip).
    }
}
