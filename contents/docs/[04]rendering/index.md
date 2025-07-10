---
type: "category"
title: "Rendering"
description: "Learn how Toucan transforms content into output using a flexible, two-phase rendering pipeline."
order: 4
---

# Rendering
---

Toucan uses a two-phase rendering process to transform content into output files. This section introduces the rendering pipeline and provides guides on configuring and customizing each stage.

Toucan utilizes a two-phase rendering process to transform content into output files. The following guides provide information on how content is rendered using Toucan. Before we dive in, let's understand process.

## Phases 

### Phase 1 — Context Generation

In the first phase, Toucan gathers content and converts it into structured context objects.

A context object acts like a large JSON document, containing all relevant metadata, front matter, and derived values needed for rendering.

### Phase 2 — Rendering Output

In the second phase, Toucan applies a template engine to the context.

Templates, combined with context data, are used to render and save the final output files — such as HTML pages or API responses.

---

The following guides cover core concepts, configuration options, and practical examples for working with Toucan’s rendering system. Learn how to build static websites, generate dynamic APIs, and integrate custom processing logic using pipelines, queries, and transformers.
