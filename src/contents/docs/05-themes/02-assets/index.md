---
id: "assets"
slug: "docs/themes/assets"
category: "themes"
order: 2
################################################################################
title: "Theme assets"
description: "Theme assets are static files that are copied recursively to the root folder of the generated site"
---

# Assets
---

Theme assets are static files that are copied recursively to the root folder of the generated site.

Subfolders can be freely created inside the assets directory, and the entire structure will be preserved.

For example, a theme can include additional images, JavaScript, or CSS files using the following structure:

```sh
.
└── assets
    ├── css
    │   └── theme.css
    ├── javascript
    │   └── theme.js
    └── images
        ├── foo.jpg
        ├── bar.jpg
        └── baz.png
```

The site can reference these assets, both from Markdown and Mustache files, as if they are located at the root level.

```sh
/css/theme.css
/javascript/theme.js
/images/foo.jpg
/images/bar.jpg
/images/baz.png
```

If the site has a global asset with the same name as a theme asset, it will override the theme asset. This allows for easy customization when needed.
