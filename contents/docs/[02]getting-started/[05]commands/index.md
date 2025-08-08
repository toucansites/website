---
category: "getting-started"
title: "Commands"
description: "Toucan CLI commands for static site generation, hosting, and deployment"
order: 5
---

# Commands
---

Toucan includes the following built-in subcommands to generate static sites: _init_, _generate_, _watch_, and _serve_.

## Init

The `init` command initializes a new Toucan project. It takes an optional argument for the project directory name (defaults to `site` if not specified). It creates the necessary directories and files for your project inside the specified directory.

```sh
toucan init my-site
```

## Generate

The `generate` command creates static files for your website using the build target you specify. If you want to learn more about how to set up and use build targets, please read our detailed guide on [target settings](/docs/getting-started/build-targets/).

```sh
toucan generate --target dev
```

## Watch

The `watch` command monitors a source directory for changes and automatically rebuilds the distribution files, regenerating the site whenever changes are detected.

```sh
toucan watch --target dev
```

## Serve

The `serve` command starts a local web server to host a specified directory. It allows serving a folder with an optional port number. By default, your site will be accessible at `http://localhost:3000/` if run as follows:

```sh
toucan serve ./dist -h localhost -p 3000
```

You can specify a hostname and port parameter to bind your web server to a given address. This allows you to preview your website at [http://localhost:3000/](http://localhost:3000/).

You can also run Toucan commands using Docker. For more information on how to do this, please refer to the [next guide](/docs/getting-started/docker/).

## Logging

Toucan provides comprehensive logging to facilitate troubleshooting and system monitoring. The following standard log levels are supported:

- trace
- debug
- info
- notice
- warning
- error
- critical

By default, the log level is set to `info`. You can modify this behavior by specifying the desired log level via environment variables:

```sh
TOUCAN_LOG_LEVEL=debug toucan generate .
```

This command sets the global log level to `debug` for all Toucan operations.

### Subsystem Log Levels

Toucan allows you to configure log levels for individual subsystems. Subsystems represent distinct components within the application. To set a log level for a specific subsystem, append the subsystem name to the `TOUCAN` prefix in the environment variable:

```sh
TOUCAN_RAW_CONTENT_RENDERER_LOG_LEVEL=trace toucan generate .
```

This enables fine-grained logging for the targeted subsystem. Multiple subsystem-specific log levels can be defined simultaneously.

> Subsystem log levels override the global log level.

Available subsystems:

@FAQ {
    @Question {
        **toucan** -- TOUCAN_LOG_LEVEL
    }
    @Answer {
        Provides the root logger for all Toucan-related logging activities, enabling unified and consistent logging across the entire system.
    }
}

@FAQ {
    @Question {
        **toucan-build-target-source-renderer** -- TOUCAN_BUILD_TARGET_SOURCE_RENDERER_LOG_LEVEL
    }
    @Answer {
        Responsible for rendering the entire site bundle based on the `BuildTargetSource` configuration.

    }
}

@FAQ {
    @Question {
        **toucan-content-renderer** -- TOUCAN_CONTENT_RENDERER_LOG_LEVEL
    }
    @Answer {
        A comprehensive content processing engine that renders `Markdown` content to `HTML`, applies transformations, computes reading time, and generates an outline structure.
    }
}

@FAQ {
    @Question {
        **toucan-content-resolver** -- TOUCAN_CONTENT_RESOLVER_LOG_LEVEL
    }
    @Answer {
        Responsible for converting raw content into structured content objects, validating properties and relations based on content type schemas. It also applies filtering, asset resolution, and iterator logic to prepare content for further processing in the pipeline.
    }
}

@FAQ {
    @Question {
        **toucan-context-bundle-to-html-renderer** -- TOUCAN_CONTEXT_BUNDLE_TO_HTML_RENDERER_LOG_LEVEL
    }
    @Answer {
        Selects the correct template for each content bundle and generates `HTML` output, handling errors and logging issues when rendering fails.
    }
}

@FAQ {
    @Question {
        **toucan-context-bundle-to-json-renderer** -- TOUCAN_CONTEXT_BUNDLE_TO_JSON_RENDERER_LOG_LEVEL
    }
    @Answer {
        Serializes structured content bundles into `JSON`, using configurable key paths to determine which parts of the data to include.
    }
}

@FAQ {
    @Question {
        **toucan-date-formatter** -- TOUCAN_DATE_FORMATTER_LOG_LEVEL
    }
    @Answer {
        Provides a unified interface for formatting date values into multiple string representations, including standard date/time styles, ISO 8601, and custom user-defined formats.
    }
}
		
@FAQ {
    @Question {
        **toucan-generate** -- TOUCAN_GENERATE_LOG_LEVEL
    }
    @Answer {
        Subsystem for the `toucan generate` command.
    }
}		

@FAQ {
    @Question {
        **toucan-html-visitor** -- TOUCAN_HTML_VISITOR_LOG_LEVEL
    }
    @Answer {
        Traverses `Markdown` content and generates corresponding `HTML` output, supporting standard `Markdown` elements, tables, images, links, and custom block directives.
    }
}	
		
@FAQ {
    @Question {
        **toucan-init** -- TOUCAN_INIT_LOG_LEVEL
    }
    @Answer {
        Subsystem for the `toucan init` command.
    }
}

@FAQ {
    @Question {
        **toucan-input-date-formatter** -- TOUCAN_INPUT_DATE_FORMATTER_LOG_LEVEL
    }
    @Answer {
        Provides a unified interface for parsing and formatting dates according to project-specific configuration.
    }
}

@FAQ {
    @Question {
        **toucan-markdown-parser** -- TOUCAN_MARKDOWN_PARSER_LOG_LEVEL
    }
    @Answer {
        A parser for `Markdown` content that extracts front matter metadata and body content.
    }
}
	
@FAQ {
    @Question {
        **toucan-markdown-to-html-renderer** -- TOUCAN_MARKDOWN_TO_HTML_RENDERER_LOG_LEVEL
    }
    @Answer {
        A renderer that converts Markdown text to `HTML`, with support for custom block directives and paragraph styling.
    }
}

@FAQ {
    @Question {
        **toucan-mustache-renderer** -- TOUCAN_MUSTACHE_RENDERER_LOG_LEVEL
    }
    @Answer {
        Renders `Mustache` templates using a predefined template library and a dynamic context object.
    }
}
		
@FAQ {
    @Question {
        **toucan-object-loader** -- TOUCAN_OBJECT_LOADER_LOG_LEVEL
    }
    @Answer {
        A utility to load and decode objects from files using a specified set of encoders and decoders.
    }
}

@FAQ {
    @Question {
        **toucan-outline-parser** -- TOUCAN_OUTLINE_PARSER_LOG_LEVEL
    }
    @Answer {
        A parser that extracts heading elements (`<h1>` to `<h6>`) from `HTML` and converts them into a structured outline.
    }
}

@FAQ {
    @Question {
        **toucan-raw-content-loader** -- TOUCAN_RAW_CONTENT_LOADER_LOG_LEVEL
    }
    @Answer {
        A utility structure responsible for loading and parsing raw content files
    }
}

@FAQ {
    @Question {
        **toucan-reading-time-calculator** -- TOUCAN_READING_TIME_CALCULATOR_LOG_LEVEL
    }
    @Answer {
        A utility to estimate the reading time of a given string of text based on words per minute.
    }
}

@FAQ {
    @Question {
        **toucan-serve** -- TOUCAN_SERVE_LOG_LEVEL
    }
    @Answer {
        Subsystem for the `toucan serve` command.
    }
}
		
@FAQ {
    @Question {
        **toucan-source-loader** -- TOUCAN_SOURCE_LOADER_LOG_LEVEL
    }
    @Answer {
        Loads and processes various parts of a build target's source bundle.
    }
}

@FAQ {
    @Question {
        **toucan-template-loader** -- TOUCAN_TEMPLATE_LOADER_LOG_LEVEL
    }
    @Answer {
        A loader responsible for building a [template](/docs/templates) by collecting assets and templates from various locations.
    }
}
		
@FAQ {
    @Question {
        **toucan-transformer-executor** -- TOUCAN_TRANSFORMER_EXECUTOR_LOG_LEVEL
    }
    @Answer {
        Executes a sequence of shell-based [transformation commands](/docs/rendering/transformers) defined in [pipelines](/docs/rendering/pipelines), allowing content to be programmatically modified.
    }
}

@FAQ {
    @Question {
        **toucan-watch** -- TOUCAN_WATCH_LOG_LEVEL
    }
    @Answer {
        Subsystem for the `toucan watch` command.
    }
}