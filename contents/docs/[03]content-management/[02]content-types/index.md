---
category: "content-management"
title: "Content Types"
description: "Custom content types are defined in the types folder as YAML files, with paths or front matter used to identify the type."
order: 2
---

# Content types
---

A content type acts as a skeleton for your content. A site can have several content types. For example, a blog might use content types for posts, authors, and tags.

You define custom content types in the **types** folder using simple YAML files.

## Basics

Here's an example content type that defines a blog post, we're going to explain the properties relations and queries, later on:

```yaml
id: post
default: false
paths:
    - blog/posts

properties:
    # list of properties

relations:
    # list of relations

queries:
    # list of queries    
```

The YAML file defines a content type with the following structure:

- `id`: A unique identifier for the content type (for example, `post`).
- `default`: Marks this as the default content type if set to true. Only one content type can be set as the default. If you mark a type as default: true, it will be the fallback for any content that doesn’t match other types. This helps Toucan know which structure to use when there’s ambiguity.
- `paths`: The list of file paths, where this type of contents are stored, Toucan will automatically match files in these locations to this content type.
- `properties`: Lists the fields for this content type.
- `relations`: Describes the connections with other content types.
- `queries`: Specifies any additional objects to be queried for this content type.

When you create new content, the content type acts as its backbone. Each content type sets its own properties, relationships, and queries. The path and id help locate and identify each piece of content, making it easier to form relationships and query additional objects for every item.

## Properties

Properties for a content type are declared under the `properties` field within the content type definition. Each property must define a `type`, which corresponds to a `PropertyType`.

In addition to the type, you can optionally:
- Mark the property as `required`.
- Specify a `defaultValue` to be used when the property is not provided.

Every property defined in the content type is automatically validated against the content’s front matter. If a property is marked as `required`, Toucan will emit a warning when the property is missing or contains invalid data.

Properties are also queryable, allowing you to filter or retrieve content items based on their property values.

### Example

```yaml
properties:
    title:
        type: string
        required: true
    description:
        type: string
        required: true
    image:
        type: asset
        required: true
    publication:
        type: date
        config: 
            format: "yyyy-MM-dd HH:mm:ss"
            locale: en-US
            timeZone: EST
        required: true
    featured:
        type: bool
        required: false
        defaultValue: false
```

### System Properties

The following properties are automatically included in every content type in Toucan, regardless of whether you explicitly define them:
- `id`: A unique identifier for the content.
- `slug`: A URL-friendly string used to identify the object.
- `type`: The associated `ContentType` for the content.
- `lastUpdate`: A timestamp indicating when the object was last modified.

These properties are required for the content generation process.

By default, Toucan automatically assigns values to these properties. However, you can override `id`, `slug`, and `type` as needed. Overriding is most commonly used when explicitly specifying a `type` for your content.

```yml
---
type: page
title: "Toucan Examples"
---
```

## Relations

Relations in Toucan are always one-way. They let you link your content types by defining how one type connects to another. This approach helps you organize your data and create clear, meaningful connections between different pieces of content.

For example, a blog post can have one or more authors or tags. You can define a separate author type and a tag type, then create relationships between the post, author, and tag using the relations section like this:

```yaml
relations:
    authors:
        references: author
        type: many
        order:
            key: name
            direction: asc
    tags:
        references: tag
        type: many
        order:
            key: title
            direction: asc
```

The reference key is the identifier for the related content type. The type shows if the association is `one` or `many`. You can also set a custom order for each field by giving a `key` and a `direction`.


## Example content

Here is an example of what a content markdown file for a blog post might look like, based on the properties and relations we described earlier:

```text
---
type: post
title: "Example post title"
description: "Example post description"
publication: "2024-12-15 00:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
# featured: true
---

# This is an example

Just an example blog post.
```

The front matter keys must match the property names defined in the content type. All values should be valid. The "featured" field is optional and will default to false if not set. All other fields are required because they use the "required" property in the example definition. Toucan will parse every piece of content and validate it against your content types. This helps you keep your content consistent and well-structured.


## Queries

Since relations in Toucan are _always_ one-way, you cannot automatically access related objects in both directions. Queries solve this problem by letting you fetch related items from the opposite direction. 

For example, if a post references an author, you can use a query on the author type to get all posts written by that author. This makes it easy to display collections of related content, even when the relationship is only defined in one place.

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
        defaultValue: false

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

You always define your relations using the front matter, but you never reference queries within your content. Queries are not included in the content itself; instead, they provide context variables when rendering your template files. This means that while relations help link content items together, queries allow you to fetch and display related data dynamically in your templates, giving you more flexibility and control over how your content appears on the site.

That’s how content types work in Toucan.

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
        **`asset`** – Asset reference stored as a string value.
    }
    @Answer {
        Represents an asset from the content's assets folder. The value of this property will be resolved to a full path when rendering the contents.

        Example:
        ```yaml
        type: asset
        ```
    }
}

@FAQ {
    @Question {
        **`date`** – A date value with optional configuration.
    }
    @Answer {
        Represents a date with an optional custom configuration. Optionally to define the `format` string, `locale`, and `timeZone` as a config object.
        
        Example:
        ```yaml
        type: date
        config: 
            format: "ymd"
            locale: en-US
            timeZone: EST
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
        of: 
            type: string
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