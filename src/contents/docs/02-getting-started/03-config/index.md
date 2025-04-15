---
id: "config"
slug: "docs/getting-started/config"
category: "getting-started"
order: 2
################################################################################
title: "Config"
description: "The configuration file for Toucan can be used to change default locations and naming conventions for your site."
---

# Config
---

Defines key settings for the entire site. In Toucan, this is the `config.yml` file located in the project’s root directory. It is optional, and if missing, Toucan will use the default values.

### Default values

The default values are as follows:

```yaml
pipelines:
  path: pipelines
contents:
  path: contents
  assets:
    path: assets
themes:
  location:
    path: themes
  current:
    path: default
  assets:
    path: assets
  templates:
    path: templates
  types:
    path: types
  overrides:
    path: overrides
  blocks:
    path: blocks
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

### Pipelines

The location of the render pipelines.

@FAQ {
    @Question {
        **`path`** - The location of the pipelines folder.
    }
    @Answer {
        This value specifies the location of the pipelines folder inside the source folder.
    }
}

### Contents

The location of the contents.

@FAQ {
    @Question {
        **`path`** - The location of the contents folder.
    }
    @Answer {
        This value specifies the location of the pipelines folder inside the source folder.
    }
}
@FAQ {
    @Question {
        **`assets.path`** - The location of the assets within the content bundle.
    }
    @Answer {
        This value specifies the location of the assets inside a content bundle.
    }
}


### Themes section

This section defines the location of the theme related files and other theme related settings, such as the theme to use.

@FAQ {
    @Question {
        **`folder`** - The location of the themes folder.
    }
    @Answer {
        This value specifies the location of the themes folder inside the source folder.
    }
}
@FAQ {
    @Question {
        **`use`** - The theme to use.
    }
    @Answer {
        This value specifies the folder name of the theme, inside the themes folder, to use.
    }
}
@FAQ {
    @Question {
        **`assets.folder`** - The name of the assets folder.
    }
    @Answer {
        This value specifies the folder name of the [assets](/getting-started/assets/) location inside the theme folder.
    }
}
@FAQ {
    @Question {
        **`templates.folder`** - The name of the templates folder.
    }
    @Answer {
        This value specifies the folder name of the [Mustache templates](/getting-started/templates/mustache/) location inside the theme folder.
    }
}
@FAQ {
    @Question {
        **`overrides.folder`** - The name of the template overrides folder.
    }
    @Answer {
        This value specifies the folder name of the Mustache template overrides location inside the theme folder. If you place a file in this folder, it will override the default template for the corresponding file.
    }
}
@FAQ {
    @Question {
        **`types.folder`** - The name of the content types folder.
    }
    @Answer {
        This value specifies the folder name of the content types location inside the theme folder. This folder is used to define custom [content types](/getting-started/contents/content-types/) for the website.
    }
}

### Contents section

This section defines the location of the content related files and other content related settings, such as the date format.

@FAQ {
    @Question {
        **`contents.folder`** - The name of the contents folder.
    }
    @Answer {
        This value specifies the folder name of the contents location inside the source folder.
    }
}
@FAQ {
    @Question {
        **`contents.dateFormat`** - The date format for the website.
    }
    @Answer {
        Determines the format in which dates are displayed on the site.

        **Date format symbols**
        - yyyy: Year (e.g., 2023)
        - MM: Month (e.g., 09 for September)
        - dd: Day (e.g., 28)
        - HH: Hour (e.g., 14 for 2 PM)
        - mm: Minute (e.g., 05)
        - ss: Second (e.g., 37)

        **Example**
        - "yyyy-MM-dd HH:mm:ss"
    }
}
@FAQ {
    @Question {
        **`contents.assets.folder`** - The name of the assets folder.
    }
    @Answer {
        This value specifies the folder name of the assets location inside the contents folder.
    }
}
@FAQ {
    @Question {
        **`contents.home.id`** - The ID of the home page.
    }
    @Answer {
        This value specifies the unique identifier for the home page.
    }
}
@FAQ {
    @Question {
        **`contents.home.template`** - The template for the home page.
    }
    @Answer {
        This value specifies the Mustache template used to render the home page.
    }
}
@FAQ {
    @Question {
        **`contents.notFound.id`** - The ID of the not found page.
    }
    @Answer {
        This value specifies the unique identifier for the 404 (not found) page.
    }
}
@FAQ {
    @Question {
        **`contents.notFound.template`** - The template for the not found page.
    }
    @Answer {
        This value specifies the Mustache template used to render the 404 (not found) page.
    }
}
@FAQ {
    @Question {
        **`contents.rss.output`** - The output file for the RSS feed.
    }
    @Answer {
        This value specifies the filename for the generated RSS feed.
    }
}


### Transformers section

This section defines the location of the [content transformers](/docs/content-management/transformers/) and the pipelines for each content type.


@FAQ {
    @Question {
        **`transformers.location`** - The location of the transformers files.
    }
    @Answer {
        This value specifies the directory where the content [transformer](/docs/content-management/transformers/) scripts are stored.
    }
}
@FAQ {
    @Question {
        **`transformers.pipelines`** - The pipelines for each content type.
    }
    @Answer {
        This value defines the processing pipelines that will be applied to different types of content. The key is the content type identifier, and the value is a dictionary with the pipelines to run and an optional settings to disable the default markdown renderer, if needed.

        **Example**
        ```yaml
        pipelines:
          post:
            run:
              - name: example-pipeline
            isMarkdownResult: false
        ```
    }
}
