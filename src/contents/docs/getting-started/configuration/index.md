---
type: guide
title: Configuration
description: Configuration
category: getting-started
order: 3
---

# Configuration
---

The site configuration for Toucan is stored in a config.yaml file, though the .yml extension can also be used.


An example configuration file:

```yaml
site:
    baseUrl: "https://mywebsite.com/"
    language: "en-US" 
    title: "My website" 
    dateFormat: "yyyy.MM.dd."
    navigation:
        - label: "Home"
          url: "/"
        - label: "About"
          url: "/docs/"

content:
    dateFormat: "yyyy-MM-dd" 

themes:
    use: "minimal" 
```

This configuration defines key settings for the website:

- `site`: This section contains general site settings.
  
- `baseUrl`: Specifies the base URL of the website, in this case, "https://mywebsite.com/".
- `language`: Defines the language of the website, set to "en-US" (English, US).
- `title`: Sets the title of the website, "My website".
- `dateFormat`: Determines the format in which dates are displayed on the site, using the "yyyy.MM.dd." format.
- `navigation`: Defines the menu items for site navigation. In this case:

- "Home" is linked to the root URL ("/").
- "About" is linked to the "/docs/" page.

- `content`: This section contains settings related to the website's content.
  
- `dateFormat`: Sets the date format used for content, in this case "yyyy-MM-dd".

- `themes`: Specifies the theme settings for the website.

- `use`: Indicates that the "minimal" theme is being used to render the website.