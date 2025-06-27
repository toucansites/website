---
category: "getting-started"
title: "Directory structure"
description: "Customize your Toucan site with the config file to modify default locations, naming conventions, and enhance your website effortlessly."
order: 2
---

# Directory structure
---

Defines the primary configuration for the entire site. In Toucan, these settings are specified in the `config.yml` file located in the project’s root directory. This file is optional; if it is not present, Toucan will automatically fall back to the default configuration values.

## Default Configuration

The default configuration values are as follows:

```yaml
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
themes:
    location:
        path: themes
    current:
        path: default
    assets:
        path: assets
    templates:
        path: templates
    overrides:
        path: overrides
dateFormats:
    input:
        format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
    output: {}
contentConfigurations:
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

## Pipelines

The location of the render pipelines.

@FAQ {
    @Question {
        **`pipelines.path`** - The location of the pipelines folder.
    }
    @Answer {
        This value specifies the location of the pipelines folder inside the source folder.
    }
}

## Contents

The location of the contents.

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
@FAQ {
    @Question {
        **`types.path`** - The name of the content types folder.
    }
    @Answer {
        This value specifies the folder name of the content types location inside the source folder. This folder is used to define custom [content types](/docs/content-management/content-types/) for the website.
    }
}
@FAQ {
    @Question {
        **`blocks.path`** - The name of the blocks folder.
    }
    @Answer {
        This value specifies the folder name of the blocks location inside the source folder.
    }
}

## Themes section

This section defines the location of the theme-related files and other theme-related settings, such as the theme to use.

@FAQ {
    @Question {
        **`themes.location.path`** - The location of the themes folder.
    }
    @Answer {
        This value specifies the location of the themes folder inside the source folder.
    }
}
@FAQ {
    @Question {
        **`themes.current.path`** - The theme to use.
    }
    @Answer {
        This value specifies the folder name of the theme, inside the themes folder, to use.
    }
}
@FAQ {
    @Question {
        **`themes.assets.path`** - The name of the assets folder.
    }
    @Answer {
        This value specifies the folder name of the [assets](/getting-started/assets/) location inside the theme folder.
    }
}
@FAQ {
    @Question {
        **`themes.templates.path`** - The name of the templates folder.
    }
    @Answer {
        This value specifies the folder name of the [Mustache templates](/getting-started/templates/mustache/) location inside the theme folder.
    }
}
@FAQ {
    @Question {
        **`themes.overrides.path`** - The name of the template overrides folder.
    }
    @Answer {
        This value specifies the folder name of the Mustache template overrides location inside the theme folder. If you place a file in this folder, it will override the default template for the corresponding file.
    }
}

## Date Formats

This section defines the input and output date formats for the website.

@FAQ {
    @Question {
        **`dateFormats.input.format`** - The input date format.
    }
    @Answer {
        This value specifies the format in which dates are expected to be provided in the content files.

        **Example**
        - `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`
    }
}
@FAQ {
    @Question {
        **`dateFormats.output`** - The output date format.
    }
    @Answer {
        This value specifies the format in which dates are displayed on the site. If left empty, the default format will be used.
    }
}

## Content Configurations

This section defines additional configurations for content processing.

@FAQ {
    @Question {
        **`contentConfigurations.wordsPerMinute`** - The average words per minute for reading time calculations.
    }
    @Answer {
        This value specifies the number of words per minute used to estimate reading time for content.
    }
}
@FAQ {
    @Question {
        **`contentConfigurations.outlineLevels`** - The heading levels included in the content outline.
    }
    @Answer {
        This value specifies the heading levels (e.g., H2, H3) that are included in the content outline.
    }
}
@FAQ {
    @Question {
        **`contentConfigurations.paragraphStyles`** - The styles applied to paragraphs.
    }
    @Answer {
        This value specifies the mapping of paragraph styles to their corresponding keywords (e.g., note, warn, tip).
    }
}
