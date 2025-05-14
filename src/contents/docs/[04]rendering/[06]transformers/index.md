---
id: "transformers"
category: "rendering"
order: 6
################################################################################
title: "Transformers"
description: "Transformers are used to process content and generate the final output"
---

# Transformers
---

Transformers are used to process content and generate the final output without the need of using the markdown files.

To process content in a specific manner, you can create a transformer script. These transformers are executed sequentially, following the order in which they are defined in the pipeline configuration file. They can be written in any programming language, as long as it can be executed by the operating system.

To use a transformer, you need to define the pipeline in the [configuration](/docs/rendering/pipelines/) file. Each pipeline can have its own set of transformers.

```yaml
transformers:
    post:
        run:
            - name: swiftinit
              url: src/transformers
        isMarkdownResult: false
```

Given the above configuration in the pipeline config, Toucan will execute the `swiftinit` script for each `post` content type. The transformer script should be located in the `transformers` folder and should be named `swiftinit` and it should be an executable file. Here's the original [swiftinit transformer script](https://github.com/swift-on-server/site/blob/main/src/transformers/swiftinit).

Each transformer script is executed with the following arguments:

- `--file`: The path to the file to be processed.
- `--id`: The id of the content.
- `--slug`: The slug of the content.

The file argument is the path to the processed markdown file for the content type. Script authors should use this file URL to generate the final output.

Here's an example of a transformer script, written in bash, that processes the arguments and simply outputs the markdown file by replacing the word "hello" with "hi":

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

If the `isMarkdownResult` property is set to `true`, the transformer script should output the final result as a markdown file and Toucan will process it and convert it to HTML. If you want to output HTML directly, you can set the `isMarkdownResult` property to `false`.

Feel free to take a look at the source code of the [swiftonserver.com](https://github.com/swift-on-server/site) website to see a more complex, real-life transformer example.
