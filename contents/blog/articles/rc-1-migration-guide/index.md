---
type: post
title: "Release Candidate 1 migration guide"
description: "Migration guide for Toucan SSG - Release Candidate 1 from Toucan 1.0.0-beta.5 and 1.0.0-beta.6."
publication: "2025-09-24 10:00:00"
tags:
    - migration-guides
authors:
    - tibor-bodecs
---

Here’s a list of the most important changes in [this](https://github.com/toucansites/toucan/releases/tag/1.0.0-rc.1) release, mostly focused on bug fixes and general improvements:

- Fix ordered list start index
- Fix angle bracket issues
- FileManagerKit updates & fixes
- Git commit hash info for the version command
- Init command only uses the demo repo
- Add repository option to specify source repo
- Refactor logger initialization to use the subsystem method
- Add detailed error message for missing content type
- Add unknown key validation to Config decoding and system properties
- Refactor context and scope keys to enums
- Fix unwrapping optional array elements
- Add ability to customize the installation directory
- Template versioning
- Update deploy scripts
- Fix inline HTML escaping issue


## Template versioning

In the `template.yml` file, template developers can now specify a `generatorVersion`. During validation, this version is compared to the Toucan version to ensure compatibility.

If you used Toucan `1.0.0-beta.5` or `1.0.0-beta.6` for your site, you probably had multiple generator versions listed in your `template.yml`:

```yml
generatorVersions:
    - "1.0.0-beta.5"
    - "1.0.0-beta.6"
```


Most Toucan beta releases introduced breaking changes. If you followed the long beta cycle, you likely noticed this. However, beta.5 and beta.6 were compatible. That’s when we realized our template versioning system needed a redesign once Toucan stabilized. Previously, you had to explicitly list every compatible version. With RC.1, this approach changes.

We removed support for the `generatorVersions` array and introduced a single object containing both the version and a type field that specifies the comparison method. This is placed under the `generatorVersion` key.

After Toucan 1.0.0 ships, semantic versioning support will become more important. New patches should not break all existing templates. Instead, users should be able to decide how to handle updates:

```yml
generatorVersion:
    value: "1.0.0-rc.1"
    type: "upNextMajor"
```

This lets template authors declare which version their template supports while also choosing how updates are handled.

The value field must be a valid semantic version, consistent with our implementation. The parsing is handled by the existing library, so no extra changes are needed.

The type field is an enum with three options:
- `upNextMajor` — default
- `upNextMinor`
- `exact`

`upNextMajor` accepts updates until the next major release. This is the default if no type is specified. Example: with version 1.0.0 and upNextMajor, all updates up to (but not including) 2.0.0 are accepted.

`upNextMinor` allows only minor updates. Example: with version 1.0.0, all updates up to (but not including) 1.1.0 are accepted.

`exact` only validates if the specified version matches the Toucan generator version exactly.


## Better error reporting and logging

Toucan now enforces strict key validation when decoding configuration files. A new `Decoder+Validate` extension ensures that only recognized keys are allowed, preventing unexpected or mistyped values from silently passing through. Core types like `Config`, `DataTypes`, and `Date` now use this stricter validation.

For users coming from the beta, this means you’ll see clearer error messages and log output when something is wrong in your templates or configuration. Instead of vague decoding failures, `ToucanDecoderError` now reports exactly which key caused the issue, making it much easier to track down problems and fix them quickly.


We hope you enjoy using the very first release candidate of our static site generator.

