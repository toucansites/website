---
category: "rendering"
title: "Transformers"
description: "Transformers are used to process content and generate the final output."
order: 6
---

# Transformers
---

Transformers are used to process content and generate the final output without relying on the markdown files.

They are defined as part of a pipeline and are executed in sequence, following the order in which they appear in the [pipeline configuration](/docs/rendering/pipelines/). A transformer can be written in any language that can run on your system (e.g., Bash, Swift, Python).

> Each pipeline can have its own set of transformers.

```yaml
transformers:
  post:
    run:
      - name: swiftinit
        path: transformers
    isMarkdownResult: false
```

Given the above configuration in the pipeline config, Toucan will execute the `swiftinit` script for each content item of type `post`. The transformer script must be an *executable file*, located in the `transformers` directory.

> View the original [swiftinit transformer script](https://github.com/swift-on-server/site/blob/main/transformers/swiftinit) on GitHub.

## Script Arguments

Each transformer is executed with the following arguments:

@FAQ {
    @Question {
        `--file`
    }
    @Answer {
        The path to the file being processed.
    }
}

@FAQ {
    @Question {
        `--id`
    }
    @Answer {
        The globally unique identifier of the content item.
    }
}

@FAQ {
    @Question {
        `--slug`
    }
    @Answer {
        The content [slug](/docs/content-management/content-bundles#slug-management).
    }
}

The `--file` argument points to the markdown file of the content item. Script authors should use this file as the input source when producing the final output.

## Output

The `isMarkdownResult` flag controls how Toucan interprets the transformer’s output:
- If set to true: the script must output valid Markdown, which Toucan will convert to HTML.
- If set to false: the script is expected to produce HTML directly, and Toucan will use it as-is.

## Example

The following is a basic Bash transformer that replaces all occurrences of the word "hello" with "hi" in the content file:

```bash
#!/bin/bash

POSITIONAL_ARGS=()

while [[ $# -gt 0 ]]; do
  case $1 in
    --file)
      TOUCAN_FILE="$2"
      shift
      shift
      ;;
    --id)
      SWIFTINIT_ID="$2"
      shift
      shift
      ;;
    --slug)
      TOUCAN_SLUG="$2"
      shift
      shift
      ;;
    -*|--*)
      echo "Unknown option $1"
      exit 1
      ;;
    *)
      POSITIONAL_ARGS+=("$1")
      shift
      ;;
  esac
done

cat "${TOUCAN_FILE}"|sed "s/hello/hi/g" >> "${TOUCAN_FILE}"
```

## Learn from real examples

You can explore the source code of [swiftonserver.com](https://github.com/swift-on-server/site) to see how transformers are used in a real-world project.