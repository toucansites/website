---
category: "content-management"
title: "Site settings"
description: "The site file for Toucan handles settings for your static site and is stored in a YAML file"
order: 1
---

# Site settings
---

The site settings file defines global settings and properties for the website.

In Toucan, it is always located at `src/site.yml` (or `.yaml` if preferred).

## Example

A sample site settings file might look like this:

```yaml
# required
baseUrl: "http://localhost:3000/"
# optional
locale: "en-US"
# user-defined
name: "Minimal example"
navigation:
    - label: "Home"
      url: "/"
    - label: "About"
      url: "/about/"
```

There are three key types in the settings file: required, optional, and user-defined.
The list below explains each type based on the sample file.

## Required keys

These keys must be defined for the website to work properly.

@FAQ {
    @Question {
        **`baseUrl`** - The base URL of the website.
    }
    @Answer {
        Specifies the base URL of the website, e.g. `https://mywebsite.com/`.
    }
}

## Optional keys

These keys are not required but useful.

@FAQ {
    @Question {
        **`locale`** - The locale of the website.
    }
    @Answer {
        Defines the locale of the website, e.g. `en-US` (English, US).

        See ISO [language codes](https://www.w3schools.com/tags/ref_language_codes.asp) & [country codes](https://www.w3schools.com/tags/ref_country_codes.asp) for more info.
    }
}

## User defined keys

Additional properties for your theme. Here are some examples:

@FAQ {
    @Question {
        **`name`** - The name of the website.
    }
    @Answer {
        Sets the name of the website, e.g. "My website".
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

Feel free to add anything to the site settings file. All variables will be available in your theme files under the site key. e.g. `{{site.name}}` See the theme guides for more info.
