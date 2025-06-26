---
type: "category"
title: "Rendering"
description: ""
order: 4
---

# Rendering
---

Toucan utilizes a two-phase rendering process to generate output files from content. The following guides provide information on how content is rendered using Toucan. Before we dive in, let's understand our two-phase rendering process:


### Phase 1 — Context Generation

In the first phase, Toucan collects all content and generates context objects from them.

A context object is a structured representation of content data, similar to a large JSON file, containing all necessary information required for rendering.

### Phase 2 — Rendering Output

In the second phase, Toucan applies a template engine to the context.

Templates, combined with context data, are used to render and save the final output files.

---

The following guides explain the core concepts, configuration options, and examples for building static sites or APIs using Toucan's render pipelines, query system and many more tools.
