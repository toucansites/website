---
id: "block-directives"
slug: "docs/content-management/block-directives"
category: "content-management"
order: 6
################################################################################
title: "Block directives"
description: "A markdown block directive is a feature that allows embedding custom content within a markdown file."
---

# Block directives
---

A markdown block directive is a feature that allows embedding custom content within a markdown file. These directives are defined using a special syntax, utilizing the `@` prefix, and are processed by Toucan to create dynamic or interactive content. They extend markdown’s basic capabilities.

Example:

```md
@Link(url: "https://toucansites.com") { Click Me }
```

This could translate to the following HTML code:

```html
<a href="https://toucansites.com">Click Me</a>
```

Markdown in Toucan can be extended with custom block directives, allowing the integration of custom UI components. These directives are defined in the theme configuration and offer a way to enrich the user interface by embedding custom elements directly into the content.

## Custom directives

Theme developers can create a `blocks` folder within the theme directory. A YAML configuration is sufficient to define a custom block directive.

The following YAML configuration can be used to create a custom `Link` element:

```yaml
name: link
parameters:
  - label: url
    default: ""
  - label: class
    default: ""
  - label: target
    default: "_blank"
removesChildParagraph: true
#requiresParentDirective: myContainer
#output: "<a class="{{class}}" href="{{url}}" target="{{target}}">{{contents}}</a>"
tag: a
attributes:
  - name: href
    value: "{{url}}"
  - name: target
    value: "{{target}}"
  - name: class
    value: "{{class}}"
```

This configuration allows markdown editors to use the `@Link` block directive with the following syntax to display a link:

```md
@Link(url: "http://toucansites.com/") { This is a link }
```

Additional block directive examples can be found in the site’s source code on [GitHub](https://github.com/toucansites/website/tree/main/src/themes/default/blocks).


## Reference guide

@FAQ {
    @Question {
        **`name`** - The name of the block directive
    }
    @Answer {
        Sets the name of the custom block directive.
    }
}

@FAQ {
    @Question {
        `parameters` - The custom parameters for the block directive
    }
    @Answer {
        Defines custom parameters for the block directive.

        - **label** - The parameter label.
        - **default** - The default value if the parameter is not provided.
    }
}

@FAQ {
    @Question {
        `removesChildParagraph` - Removes the top level paragraph element
    }
    @Answer {
        Controls whether the top-level paragraph element is removed when rendering block contents. The default value is `false`.
    }
}

@FAQ {
    @Question {
        `requiresParentDirective` - Require a parent directive.
    }
    @Answer {
        Specifies if the block directive must be a child of another directive. The default value is `nil`.
    }
}

@FAQ {
    @Question {
        **`output`** - Defines a custom output for the block directive.
    }
    @Answer {
        Defines custom output for the block directive using template variables.

        Available variables:
        - **{{contents}}** - The rendered markdown from the block contents.
        - **{{[param_name]}}** - The value of the provided parameter.

        If no output is defined, the **tag** will be used to render the directive.
    }
}

@FAQ {
    @Question {
        **`tag`** - The desired wrapper tag around the markdown contents.
    }
    @Answer {
        Specifies the HTML tag that wraps the markdown content. If no **tag** or **output** is set, the directive won’t render.
    }
}

@FAQ {
    @Question {
        `attributes` - The attributes for the custom HTML tag.
    }
    @Answer {
        Defines attributes for the custom HTML tag.

        - **name** - The name of the HTML attribute.
        - **value** - The value of the attribute, using template variables.
    }
}
