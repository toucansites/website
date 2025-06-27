---
category: "installation"
title: "macOS"
description: "Learn how to install Toucan on macOS with simple steps. Follow this guide to set up and start using Toucan easily"
order: 1

---

# macOS
---

Toucan can be installed using the following methods:

- [Homebrew](https://brew.sh/) - recommended
- [Mint](https://github.com/yonaskolb/Mint)
- **Prebuilt Binary** (available from 1.0.0.beta.4)
- **PKG Installer** (available from version 1.0.0.beta.4)
- **Compile from source** for custom or development builds

## Recommended: Install via Homebrew

Homebrew is the preferred method for macOS environments. With Homebrew installed, Toucan can be installed using the [official tap](https://github.com/toucansites/homebrew-toucan):

```sh
brew tap toucansites/toucan
brew install toucan
```

Or install directly without tapping:

```sh
brew install toucansites/toucan/toucan
```

To verify:

```sh
toucan --help
```

---

## Install with Mint

To use Toucan with Mint, install it as a SwiftPM-compatible CLI tool:

```sh
mint install toucansites/toucan
```

Or run it without global install:

```sh
mint run toucansites/toucan
```

---

## Prebuilt Binary from GitHub Releases

Toucan is also available for direct download from [GitHub Releases](https://github.com/toucansites/toucan/releases), which includes prebuilt universal binaries for macOS.

### Available Artifact from 1.0.0.beta.4

- `toucan-macos-1.0.0.beta.4.zip or a newer version`

This archive contains the full CLI suite:

- `toucan`
- `toucan-init`
- `toucan-generate`
- `toucan-serve`
- `toucan-watch`

---

## Install with PKG Installer

Starting with version `1.0.0.beta.4`, Toucan is distributed as a macOS `.pkg` installer. Download the `.pkg` file from the [GitHub Releases page](https://github.com/toucansites/toucan/releases) and install it via Finder or the terminal.

### Manual install (via Finder)

1. Download `toucan-macos-1.0.0.beta.4.pkg` or a newer version
2. Double-click the file to run the macOS Installer
3. Follow the installation prompts

### Terminal install

```sh
sudo installer -pkg toucan-1.0.0-beta.4.pkg -target /
```

The installer will place the `toucan` CLI tools into `/usr/local/bin`.

Once installed, verify:

```sh
toucan --help
```

---

## Compile from source

For instructions on compiling from source, see [Compile from source](/docs/installation/compile-from-source/).
