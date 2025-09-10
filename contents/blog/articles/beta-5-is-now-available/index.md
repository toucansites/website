---
type: post
title: "Beta 5 is now available"
description: "The fifth beta release of Toucan is now available. This release includes many improvements and some new features."
publication: "2025-07-03 10:00:00"
tags: 
    - releases
authors:
    - tibor-bodecs
---

Toucan [1.0.0-beta.5](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.5) is a big update with many improvements and new features. Here are the most important changes in this release:

- **Multi-architecture Docker support**: The Dockerfile now works for both arm64 and amd64 platforms, making it easier to run Toucan in different environments. We have also published the latest version on [DockerHub](https://hub.docker.com/r/toucansites/toucan/tags).
- **Major library overhaul**: The core libraries have been completely reworked for better performance and reliability.
- **New Toucan libraries**: This update introduces the `ToucanSource` and `ToucanSerialization` libraries, plus a new shared `ToucanCore` library.
- **Improved testing**: Tests and mocks have been improved to help us catch bugs and ensure stability.
- **Dependency upgrades**: All package dependencies have been updated.
- **New date formatter**: There are new mechanics for formatting input and output dates, with better support for time zones and localization.
- **Better error reporting**: Errors are now reported more clearly, and build errors are preferred over log messages.
- **Target support**: Create separate build targets, making it much easier to generate different versions of your site.
- **Naming changes**: The ⁠docs⁠ directory is now called ⁠dist⁠, and we refer ⁠theme⁠s as templates & mustache files as views⁠.
- **Improvements and bug fixes**: Other under the hood improvements and bug fixes have also been made to make Toucan more stable and reliable.

This release brings Toucan closer to a stable 1.0 version, with a focus on flexibility, stability, and ease of use. For more information see the full [release notes](https://github.com/toucansites/toucan/releases/tag/1.0.0-beta.5).

Try the latest beta and let us know what you think. If you want to upgrade your current site, check out our [beta 5 migration guide](/beta-5-migration-guide/). If you enjoy using Toucan, please give us a star on GitHub!






