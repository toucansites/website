---
type: guide
title: "Config"
description: "The configuration file for Toucan can be used to change default locations and naming conventions for your site."
category: getting-started
order: 4
---

# Config
---

This configuration file defines key settings for the entire site. The config file for Toucan is stored in the `config.yml` file, inside the project's root directory. This file is optional, and if it is not present, Toucan will use the default values.


### Default values 

The default values are as follows:

```yaml
themes: 
  folder: "themes"
  use: "default"
  assets:
    folder: "assets"
  templates:
    folder: "templates"  
  overrides:
    folder: "overrides"
  types:
    folder: "types"
contents:
  folder: "contents"
  dateFormat: "yyyy-MM-dd HH:mm:ss"
  assets:
    folder: "assets"
  home:
    id: "home"
    template: "pages.home"
  notFound:
    id: "404"
    template: "pages.404"
  rss:
    output: rss.xml
transformers:
  folder: "transformers"
  pipelines:
#      post:
#        run: 
#          - name: example-pipeline
#        isMarkdownResult: false
```

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

