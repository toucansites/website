---
type: guide
title: "Site index"
description: "Site index"
category: getting-started
order: 3
---

# Site index
---

This site index defines key settings for the website. The site index for Toucan is stored in the `index.yml` file, inside the `src/contents` directory, though the `.yaml` extension can also be used.


An example site index file looks like this:

```yaml
baseUrl: "https://mywebsite.com/"
language: "en-US" 
title: "My website" 
dateFormat: "yyyy.MM.dd."
navigation:
    - label: "Home"
      url: "/"
    - label: "About"
      url: "/docs/"
```

The following keys are available to use:

@FAQ {
    @Question { 
        **`baseUrl`*** - The base URL of the website.
    }
    @Answer { 
        Specifies the base URL of the website, in this case, "https://mywebsite.com/".
    }
}

@FAQ {
    @Question { 
        **`title`*** - The title of the website.
    }
    @Answer { 
        Sets the title of the website, e.g. "My website".
    }
}

@FAQ {
    @Question { 
        **`dateFormat`** - Sets the date format for the website.
    }
    @Answer { 
        Determines the format in which dates are displayed on the site, using the "yyyy.MM.dd." format.
    }
}
@FAQ {
    @Question { 
        **`language`** - The language of the website.
    }
    @Answer { 
        Defines the language of the website, set to "en-US" (English, US).
    }
}
@FAQ {
    @Question { 
        **`navigation`** - Sets the main navigation for the website.
    }
    @Answer { 
        Defines the menu items for site navigation. In this case:
        - "Home" is linked to the root URL ("/").
        - "About" is linked to the "/docs/" page.
    }
}