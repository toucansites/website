---
category: "templates"
title: "Metadata"
description: "Toucan expects a `template.yml` file in each template which provides essential metadata."
order: 4
---

# Metadata

Each template in Toucan includes a `template.yml` file located in the root of the template directory. This file provides essential metadata that describes the template and is used by the Toucan system to ensure compatibility and attribution.

Below is an example `template.yml` file and a breakdown of each field:

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

### Field Reference

@FAQ {
    @Question {
        `name`
    }
    @Answer {
        The name of the template. Should be unique and descriptive.
    }
}

@FAQ {
    @Question {
        `description`
    }
    @Answer {
        A short summary of what the template is for or what makes it unique.
    }
}

@FAQ {
    @Question {
        `version`
    }
    @Answer {
        The current version of the template using [Semantic Versioning](https://semver.org/).
    }
}

@FAQ {
    @Question {
        `generatorVersions`
    }
    @Answer {
        A list of Toucan generator versions this template supports or is compatible with.
    }
}

@FAQ {
    @Question {
        `authors`
    }
    @Answer {
        One or more authors or organizations who created the template. Each entry includes the `name` field which refers to the name of the author or organization and the `url` field to their profile or website.
    }
}

@FAQ {
    @Question {
        `license`
    }
    @Answer {
        Information about the template’s license. Includes the on the license and an optional URL where one can learn more about it.
    }
}

@FAQ {
    @Question {
        `tags`
    }
    @Answer {
        A list of tags used for classifying and discovering templates (e.g. type, technology, features).
    }
}

@FAQ {
    @Question {
        `url` *(Optional)*
    }
    @Answer {
        A direct URL for the repository or homepage for the template.
    }
}

@FAQ {
    @Question {
        `demo` *(Optional)*
    }
    @Answer {
         A live preview URL for the template.
    }
}

Toucan will validate the metadata during template loading. Missing file or required fields will result in template rejection.