---
id: "content-types"
category: "content-management"
order: 2
################################################################################
title: "Content Types"
description: "Custom content types are defined in the types folder as YAML files, with paths or front matter used to identify the type."
---

# Content types
---

A [content type](/docs/content-management/content-types/) serves as a template for your content. A site can ship multiple content types. For instance, a blog site might need content types for posts, authors, and tags.

Custom content types are defined in the `types` folder as simple YAML files.

Each content type defines its own properties, relations and queries.

## Basics, and properties

Here's an example content type:

```yaml
id: page
default: true

properties:
    title:
        type: string
        required: true

    description:
        type: string
        required: true
```

This YAML defines a content type with the following structure:
- `id`: Identifier for the content type (`page`).
- `default`: Marks this as the default content type, if `true`.
- `properties`: Defines the fields for this content type:
    - `title`: A required string field.
    - `description`: Another required string field.

When creating new content, the content type serves as a backbone. Each property defined here will be validated against the content’s front matter. If a property is marked as required, Toucan will warn you if it’s missing. Properties can also be used to query your content.

## Relations and Queries

Toucan allows content types to form relations with each other. In some cases, it may be useful to fetch related data when rendering a page. For example, displaying all posts written by a specific author on an author detail page. This can be done using queries.

```yaml
id: author
path:
    - authors

properties:
    name:
        type: string
        required: true

queries:
    posts:
        contentType: post
        filter:
            key: authors
            operator: contains
            value: "{{id}}"
        orderBy:
            - key: publication
              direction: desc
```

In the example above:
- The `path` defines where author content is located.
- The `queries` section sets up a posts query that:
    - Pulls content of type post
    - Filters posts that include the current author’s ID in their `authors` field
    - Sorts results by the `publication` date in descending order

This query runs automatically when rendering a single author page. The result is accessible in templates via the `{{posts}}` variable.

To make the query work, the post type must define a matching relation:

```yaml
id: post
paths:
    - posts

properties:
    title:
        type: string
        required: true
    publication:
        type: date
        required: true
    featured:
        type: bool
        required: false
        default: false

relations:
    authors:
        references: author
        type: many
        order:
            key: name
            direction: asc
```

In the snippet above:
- `relations` defines connections between content types
- `authors` is the name of the relation field for this content type
- `references`: author specifies the target content type this relation points to
- `type`: many means a post can be linked to multiple authors
- `order` controls how the related author entries are sorted in templates

Relation fields appear in front matter as string references. In templates, they resolve to full objects.
For example, `{{authors}}` will contain author objects sorted by name.

That’s how content types and relations work in Toucan.

## Reference



### Properties

#### Property types

The following property types are available:

@FAQ {
    @Question {
        **`bool`** – A boolean value.
    }
    @Answer {
        Represents a `true` or `false` value.
    }
}

@FAQ {
    @Question {
        **`int`** – An integer number.
    }
    @Answer {
        Represents whole numbers such as `1`, `0`, or `-5`.
    }
}

@FAQ {
    @Question {
        **`double`** – A floating-point number.
    }
    @Answer {
        Represents decimal numbers like `3.14` or `-0.75`.
    }
}

@FAQ {
    @Question {
        **`string`** – A string value.
    }
    @Answer {
        Represents a sequence of characters, such as `"Hello"` or `"123"`.
    }
}

@FAQ {
    @Question {
        **`date`** – A date value with optional formatting.
    }
    @Answer {
        Represents a date. Optionally to define the `format` string, `locale`, and `timeZone`.
        Example:
        ```yaml
        type: date
        format: "dd/MM/yyyy"
        locale: "en-US"
        timeZone: "PST"
        ```
    }
}

@FAQ {
    @Question {
        **`array`** – A list of typed values.
    }
    @Answer {
        Represents an array. The `of` parameter defines the type of its elements.
        Example:
        ```yaml
        type: array
        of: string
        ```
    }
}

### Relations

#### Relation types

The following relation types are available:

@FAQ {
    @Question {
        **`one`** – A one-to relation type.
    }
    @Answer {
        Represents a one-ended relation.

        e.g. a guide can have one category

        ```yml
        category: "getting-started"
        ```
    }
}
@FAQ {
    @Question {
        **`many`** – A many-to relation type.
    }
    @Answer {
        Represents a many relation.

        e.g. a post can have multiple authors.

        ```yml
        authors:
            - "john-doe"
            - "jane-doe"
        ```
    }
}

#### Direction

The following directions values are available:

@FAQ {
    @Question {
        **`asc`** – Ascending
    }
    @Answer {
        Sorts values in ascending order, from lowest to highest.
        For example, `A → Z` or `1 → 9`.
    }
}

@FAQ {
    @Question {
        **`desc`** – Descending
    }
    @Answer {
        Sorts values in descending order, from highest to lowest.
        For example, `Z → A` or `9 → 1`.
    }
}



### Queries

See the [queries](/docs/rendering/queries/) guide for more information.
