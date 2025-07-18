---
category: "content-management"
title: "Site settings"
description: "The site file for Toucan handles settings for your static site and is stored in a YAML file"
order: 1
---

# Site settings
---

The site settings file sets global context variables for your website.

This file is optional, and you can choose its location in the configuration file. By default, it should be placed in the project’s root directory. The file must be named `site.yml`, but you can use the `.yaml` extension if you prefer.

A sample site settings file might look like this:

```yaml
name: "Minimal example"
description: "This is just a minimal website example."
navigation:
    - label: "Home"
      url: "/"
    - label: "About"
      url: "/about/"
```

Feel free to add anything to the site settings file. Some good candidates for global site settings include SEO, localization, and branding options.

Here are some ideas you might consider adding to your site settings file:
- `language`: This value can be applied to the HTML element as a lang attribute.
- `noindex`: A boolean to control whether the entire site should be excluded from search engine indexing.
- `hreflang`: Specify the default language or a list of supported languages for localization.
- `logo`: Path or URL to your site’s logo (or any other asset).
- `author`: Default author name for site-wide use.
- `copyright`: Copyright notice or owner.
- `social_links`: List of social media profiles (e.g., Twitter, GitHub).
- `analytics_id`: Google Analytics or other tracking IDs.
 
These settings help centralize control over your site’s behavior, appearance, and metadata.

All variables defined here will be available in your template files under the site key. For example, you can use `{{site.name}}` to show the site name.

For more information, see the [Mustache view](/docs/templates/views/) guides.
