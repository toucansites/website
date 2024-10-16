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


### Example 

An example site index file looks like this:

```yaml
baseUrl: "https://mywebsite.com/"
language: "en-US"
title: "My website"
description: "This is my personal website."
dateFormat: "yyyy.MM.dd."
navigation:
    - label: "Home"
      url: "/"
    - label: "About"
      url: "/docs/"
```

The following properties are available to use:

### Required keys
@FAQ {
    @Question { 
        **`baseUrl`** - The base URL of the website.
    }
    @Answer { 
        Specifies the base URL of the website, e.g. "https://mywebsite.com/".
    }
}

@FAQ {
    @Question { 
        **`title`** - The title of the website.
    }
    @Answer { 
        Sets the title of the website, e.g. "My website".
    }
}


### Optional keys
@FAQ {
    @Question { 
        **`description`** - The description of the website.
    }
    @Answer { 
        The description of the website, used for the RSS feed.
    }
}

@FAQ {
    @Question { 
        **`dateFormat`** - Sets the date format for the website.
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
        - "yyyy.MM.dd."
    }
}
@FAQ {
    @Question { 
        **`language`** - The language of the website.
    }
    @Answer { 
        Defines the language of the website, e.g. "en-US" (English, US).

        See ISO [language codes](https://www.w3schools.com/tags/ref_language_codes.asp) & [country codes](https://www.w3schools.com/tags/ref_country_codes.asp) for more info.
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
