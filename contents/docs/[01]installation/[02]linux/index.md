---
category: "installation"
title: "Linux"
description: "Learn how to install Toucan on Linux with simple steps. Follow this guide to set up and start using Toucan easily"
order: 2

---

# Linux

Toucan can be installed on Linux using one of the following methods:

- Native `.deb` or `.rpm` package - recommended
- [Homebrew](https://brew.sh/)
- **Compile from source** for custom or development builds

---

## Recommended: Install with Native Linux Packages

From version `1.0.0.beta.4`, Toucan provides native packages for popular Linux distributions. Download them from the [GitHub Releases](https://github.com/toucansites/toucan/releases) page.

### Debian / Ubuntu (.deb)

```sh
wget https://github.com/toucansites/toucan/releases/download/1.0.0.beta.4/toucan-linux-amd64-1.0.0.beta.4.deb
sudo dpkg -i toucan-linux-amd64-1.0.0.beta.4.deb
```

### RHEL / Fedora / openSUSE (.rpm)

```sh
wget https://github.com/toucansites/toucan/releases/download/1.0.0.beta.4/toucan-linux-x86_64-1.0.0.beta.4.rpm
sudo rpm -i toucan-linux-x86_64-1.0.0.beta.4.rpm
```

After installation:

```sh
toucan --help
```

---

## Install with Homebrew (Linuxbrew)

If you have Homebrew installed, you can install Toucan using the [official tap](https://github.com/toucansites/homebrew-toucan):

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

## Compile from source

For instructions on compiling from source, see [Compile from source](/docs/installation/compile-from-source/).
