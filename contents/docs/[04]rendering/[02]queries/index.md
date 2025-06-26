---
category: "rendering"
title: "Queries"
description: ""
order: 2
---

# Queries
---

Queries are used to retrieve contents from the "virtual Toucan database". They can be used to filter, sort, and aggregate data. Toucan provides a powerful query language that allows you to write complex queries with ease.

## Query Syntax

Queries in Toucan are written using a simple and intuitive syntax. Here's an example of a basic query:

```yaml
featured:
    contentType: post
    limit: 10
    offset: 0
    scope: detail
    filter:
        key: featured
        operator: equals
        value: true
    orderBy:
        - key: publication
          direction: desc
```

This query selects the featured posts, and returns them in an array named `featured`. The `contentType` key is used to specify the type of content to be retrieved, in this case we're retrieving `posts`. The `scope` key is used to specify the scope of the query, in this case we're retrieving detailed information about the posts. The filter is used to filter the posts based on the `featured` front matter key. The `orderBy` key is used to specify the order in which the posts should be returned. In this case, we're ordering the posts by their `publication` date in descending order. It is also possible to set the `limit` and the `offset` of the query.

Toucan query language syntax guide:

@FAQ {
    @Question {
        `contentType`
    }
    @Answer {
        The `contentType` key defines the type of content being queried in other words the identifier of the content definition.
        It determines which collection of content items should be used for the query.
    }
}

@FAQ {
    @Question {
        `limit`
    }
    @Answer {
        The limit key controls how many items should be returned at most.
        This is useful for pagination or showing a fixed number of results.
        Example: limit: `10` means only `10` results will be returned.
        Default value: `nil`, all items will be returned.
    }
}

@FAQ {
    @Question {
        `offset`
    }
    @Answer {
        The `offset` key skips a given number of results before returning items.
        Often used with `limit` for pagination.
        Examples:
        - `offset: 0` starts from the beginning
        - `offset: 10` skips the first 10 results
        Default value: `nil`, starts from the beginning.
    }
}

@FAQ {
    @Question {
        `scope`
    }
    @Answer {
        The `scope` key controls the level of detail in the query results.
        The `scope: detail` means full content and all associated metadata will be included.
        Other scopes may return only basic or summary-level data.
        Please note that scopes are currently a work in progress and may be subject to change.
    }
}

@FAQ {
    @Question {
        `filter`
    }
    @Answer {
        The `filter` key defines a condition to include only specific items.
        A condition always contains a `key`, an `operator`, and a `value`.
        Multiple conditions can be combined using `and` or `or` statements.
        This is used to match content based on front matter or other properties.
    }
}

@FAQ {
    @Question {
        `orderBy`
    }
    @Answer {
        The `orderBy` key defines how to sort the results.
        It accepts a list of sorting rules, each with a `key` and `direction`.
        Direction can be `asc` (ascending) or `desc` (descending).
    }
}

## Filtering

The Toucan query language comes with filters that allow you to filter data based on specific criteria.

Filters can be simple fields, or complex conditions using the `and` and `or` statements. Each filter condition consists of a key, an operator, and a value. The key usually refers to the front matter key, the operator represents a criteria, and the value is a generic value to match against.


Supported filter operators:

@FAQ {
    @Question {
      `equals`
    }
    @Answer {
        Compares two values for exact match.

        Supported types:
        - Bool
        - Int
        - Double
        - String

        Example:
        ```yaml
        contentType: author
        filter:
          field:
            key: name
            operator: equals
            value: "Author #6"
        ```
    }
}
@FAQ {
    @Question {
     `notEquals`
    }
    @Answer {
        Compares two values and returns true if they are not equal.

        Supported types:
   	    - Bool
   	    - Int
   	    - Double
   	    - String

        Example:
        ```yaml
        contentType: author
        filter:
        field:
            key: name
            operator: notEquals
            value: "Author #1"
        ```
    }
}
@FAQ {
    @Question {
        `lessThan`
    }
    @Answer {
        Checks if left value is strictly less than the right value.

        Supported types:
        - Int
        - Double

        Example:
        ```yaml
        contentType: category
        filter:
        field:
            key: order
            operator: lessThan
            value: 3
        ```
    }
}
@FAQ {
    @Question {
        `lessThanOrEquals`
    }
    @Answer {
        Checks if left value is less than or equal to the right value.

        Supported types:
        - Int
        - Double

        Example:
        ```yaml
        contentType: category
        filter:
        field:
            key: order
            operator: lessThanOrEquals
            value: 3
        ```
    }
}
@FAQ {
    @Question {
        `greaterThan`
    }
    @Answer {
        Checks if left value is strictly greater than the right value.

        Supported types:
    	- Int
    	- Double

        Example:
        ```yaml
        contentType: category
        filter:
          field:
            key: order
            operator: greaterThan
            value: 8
        ```
    }
}
@FAQ {
    @Question {
        `greaterThanOrEquals`
    }
    @Answer {
        Checks if left value is greater than or equal to the right value.

        Supported types:
    	- Int
    	- Double

        Example:
        ```yaml
        contentType: category
        filter:
        field:
            key: order
            operator: greaterThanOrEquals
            value: 8
        ```
    }
}
@FAQ {
    @Question {
        `like`
    }
    @Answer {
        Checks if left string contains the right pattern as substring.

        Supported types:
    	- String

        Example:
        ```yaml
        contentType: author
        filter:
          field:
            key: name
            operator: like
            value: "Author #1"
        ```
    }
}
@FAQ {
    @Question {
        `caseInsensitiveLike`
    }
    @Answer {
        Performs a case-insensitive check if left string contains the right pattern.

        Supported types:
    	- String

        Example:
        ```yaml
        contentType: author
        filter:
          field:
            key: name
            operator: caseInsensitiveLike
            value: "author #1"
        ```
    }
}
@FAQ {
    @Question {
        `in`
    }
    @Answer {
        Checks if left value exists inside the right array.

        Supported types:
    	- Array of Int
    	- Array of Double
    	- Array of String

        Example:
        ```yaml
        contentType: author
        filter:
          field:
            key: name
            operator: in
            value:
              - "Author #6"
              - "Author #4"
        ```
    }
}
@FAQ {
    @Question {
        `contains`
    }
    @Answer {
        Checks if the array (left value) contains the right value.

        Supported types:
    	- Int
    	- Double
    	- String

        Example:
        ```yaml
        contentType: post
        filter:
          field:
            key: authors
            operator: contains
            value: "author-1"
        ```
    }
}

@FAQ {
    @Question {
        `matching`
    }
    @Answer {
        Checks if the left array and right array have at least one overlapping value.

        Supported types:
    	- Array of Int
    	- Array of Double
    	- Array of String

        Example:
        ```yaml
        contentType: post
        filter:
          field:
            key: tags
            operator: matching
            value:
              - "tag-1"
              - "tag-2"
        ```
    }
}


Supported logical operators:

@FAQ {
    @Question {
      `and`
    }
    @Answer {
        The `and` operator is a logical operator used to combine multiple conditions.
        All conditions under `and` must be true for the item to match.
        Each condition is defined using a `key`, an `operator`, and a `value`.
        This is useful when filtering content by multiple requirements simultaneously.

        Example:
        ```yaml
        filter:
            and:
                - key: category
                  operator: equals
                  value: "{{category}}"
                - key: order
                  operator: lessThan
                  value: "{{order}}"
        ```
    }
}
@FAQ {
    @Question {
      `or`
    }
    @Answer {
        The `or` operator is a logical operator used to combine multiple conditions.
        At least one condition under `or` must be true for the item to match.
        Each condition is defined using a `key`, an `operator`, and a `value`.
        This is useful when filtering content that can match any of the given conditions.

        Example:
        ```yaml
        filter:
            or:
                - key: category
                  operator: equals
                  value: "{{category}}"
                - key: order
                  operator: lessThan
                  value: "{{order}}"
        ```
    }
}

Here's another query that demonstrates the use of the `lessThan` operator using a complex filter condition:

```yaml
prev:
    contentType: guide
    limit: 1
    filter:
        and:
            - key: category
              operator: equals
              value: "{{category}}"
            - key: order
              operator: lessThan
              value: "{{order}}"
    orderBy:
        - key: order
          direction: desc
```

In this example above, we've used placeholder values for the `category` and `order` keys. These values are going to be replaced with actual values coming from the current context when executing the query. This way the query will return the previous guide in the same category with a lower order value.

Of course you can use multiple logical operators:

```yaml
complexQueryExample:
    contentType: post
    limit: 10
    offset: 1
    filter:
        and:
            - key: category
              operator: equals
              value: "my-category"
            - or:
                - key: tags
                  operator: contains
                  value: "my-tag"
                - key: authors
                  operator: contains
                  value: "my-author"
    orderBy:
        - key: order
          direction: desc
        - key: title
          direction: asc
```

This example shows a more complex query using multiple logical operators.

- The `and` operator ensures that the `category` is exactly `"my-category"`.
- The nested `or` operator allows matching items that either:
  - contain `"my-tag"` in their `tags`, or
  - contain `"my-author"` in their `authors`.

Results are sorted first by `order` in descending order, then by `title` in ascending order.
The query returns 10 items (`limit: 10`), skipping the first result (`offset: 1`).
