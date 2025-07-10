---
category: "getting-started"
title: "Build targets"
description: "Customize your Toucan site with the config file to modify default locations, naming conventions, and enhance your website effortlessly."
order: 3
---

# Build targets
---

Defines the build targets for the entire site. In Toucan, these settings are specified in the `toucan.yml` file located in the project’s root directory. This file is optional; if it is not present, Toucan will automatically fall back to the default target values.

## Default target

The default target values are:

```yaml
targets:
    - name: dev 
      config: ""
      url: "http://localhost:3000"
      input: "."
      output: "dist"
      default: true
```

## Custom targets

The default configuration values are as follows:

```yaml
targets:
    - name: dev 
      default: true
    
    - name: live
      output: /tmp/output
      url: "https://toucansites.com/"
```

## Configuration

TODO: config loading using suffix.

## Targets

The build target.

@FAQ {
    @Question {
        **`name`** - The unique name of the target.
    }
    @Answer {
        TODO
    }
}

@FAQ {
    @Question {
        **`config`** - The path to the configuration file.
    }
    @Answer {
        TODO
    }
}

@FAQ {
    @Question {
        **`url`** - The base URL of the site or project without a trailing slash (e.g., `"https://example.com"`).
    }
    @Answer {
        TODO
    }
}

@FAQ {
    @Question {
        **`input`** - The input path for the source files.
    }
    @Answer {
        TODO
    }
}

@FAQ {
    @Question {
        **`output`** - The output path for generated files.
    }
    @Answer {
        TODO
    }
}

@FAQ {
    @Question {
        **`default`** - A flag indicating if this is the default target.
    }
    @Answer {
        TODO
    }
}
