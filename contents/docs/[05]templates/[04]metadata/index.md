---
category: "templates"
title: "Metadata"
description: "Toucan expects a `template.yml` file in each template which provides essential metadata."
order: 4
---

# Metadata

Every template in Toucan includes a `template.yml` file located at the root of the template directory. This file defines essential metadata that describes the template and is used by Toucan to ensure compatibility and provide attribution.

## Example

Below is a sample `template.yml` file:

```yml
name: "Try-O template"
description: "The first template for the Toucan static site generator."
version: "1.0.0-beta.2"
generatorVersions:
  - "1.0.0-beta.5"

authors:
  - name: "Binary Birds Kft."
    url: "https://binarybirds.com/"

license:
  name: "MIT license"
  url: "https://github.com/toucansites/minimal-template?tab=MIT-1-ov-file"

tags:
  - "binarybirds"
  - "try-o"
  - "template"
```

## Validation

Toucan validates the metadata at template load time. If the template.yml file is missing, malformed, or lacks required fields, the template will be rejected and excluded from the rendering process.

## Field Reference

@FAQ {
    @Question {
        `name`
    }
    @Answer {
        The unique name of the template. Should be clear and descriptive for identification.
    }
}

@FAQ {
    @Question {
        `description`
    }
    @Answer {
        A short explanation of the template’s purpose, features, or distinguishing characteristics.
    }
}

@FAQ {
    @Question {
        `version`
    }
    @Answer {
        The version of the template, following [Semantic Versioning](https://semver.org/).
    }
}

@FAQ {
    @Question {
        `generatorVersions`
    }
    @Answer {
        A list of Toucan generator versions the template is compatible with. Toucan uses this to ensure compatibility during rendering.
    }
}

@FAQ {
    @Question {
        `authors`
    }
    @Answer {
        One or more authors or organizations responsible for the template. Each entry includes a `name` and an optional `url` pointing to a profile or website.
    }
}

@FAQ {
    @Question {
        `license`
    }
    @Answer {
        The `name` of the license under which the template is released. You may also provide a `url` pointing to the license text or repository.
    }
}

@FAQ {
    @Question {
        `tags`
    }
    @Answer {
        A list of tags that categorize the template — for example, by type, framework, or intended use case. Used for classifying and discovering templates.
    }
}

@FAQ {
    @Question {
        `url` *(Optional)*
    }
    @Answer {
        A direct link to the template’s homepage or repository.
    }
}

@FAQ {
    @Question {
        `demo` *(Optional)*
    }
    @Answer {
        A URL pointing to a live demo of the template in use.
    }
}
