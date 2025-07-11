---
category: "content-management"
title: "Site settings"
description: "The site file for Toucan handles settings for your static site and is stored in a YAML file"
order: 1
---

# Site settings
---

The site settings file sets global context variables for your website.

This file is optional, and you can choose its location in the configuration file. However, the file should be named `site.yml` (or `.yaml` extension if you prefer).

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

Feel free to add anything to the site settings file. 

All variables will be available in your template files under the site key. e.g. `{{site.name}}`.

See the [Mustache view](/docs/templates/views/) guides for more info.
