---
category: "installation"
title: "macOS"
description: "Learn how to install Toucan on macOS with simple steps. Follow this guide to set up and start using Toucan easily"
order: 1

---

# macOS
---

You can install Toucan on macOS using one of the following methods:

- [Homebrew](https://brew.sh/)
- [Mint](https://github.com/yonaskolb/Mint)
- Prebuilt Binary from GitHub Releases (available from 1.0.0.beta.4)
- Downloadable `.pkg` installer from GitHub Releases (available from version 1.0.0.beta.4)
- Compile from source (for development or custom builds)

## Install with Homebrew

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

## Install with Mint

If you prefer Mint, you can install Toucan as a SwiftPM-compatible CLI tool:

```sh
mint install toucansites/toucan
```

Or run it without global install:

```sh
mint run toucansites/toucan
```

---

## Prebuilt Binary from GitHub Releases

You can also download Toucan directly from [GitHub Releases](https://github.com/toucansites/toucan/releases). This includes a prebuilt universal binaries for macOS.

### Available Artifact from 1.0.0.beta.4

- `toucan-macos-1.0.0.beta.4.zip`

This archive contains the full CLI suite:

- `toucan`
- `toucan-init`
- `toucan-generate`
- `toucan-serve`
- `toucan-watch`

---

## Install with PKG Installer

From version `1.0.0.beta.4`, Toucan is also available as a macOS `.pkg` installer.

You can download the `.pkg` file from the [GitHub Releases page](https://github.com/toucansites/toucan/releases), then install it using Finder or from the terminal:

### Manual install (via Finder)

1. Download `toucan-macos-1.0.0.beta.4.pkg`
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

## Compile from Source

It is possible to install Toucan by compiling it from [source](https://github.com/toucansites/toucan).

### Prerequisites

Before installing Toucan, ensure Swift 6.0 or a later version is installed on your Linux distribution. Refer to the Swift [installation guide](https://swift.org/install/linux/#platforms) on [swift.org](https://swift.org) for detailed instructions on installing Swift.

### Quick install

Here’s a quick snippet to install Toucan on macOS. Simply run the following commands. Please note that both Swift and Xcode must be installed on your machine before executing the commands.

```swift
# clone the repository & install toucan
git clone https://github.com/toucansites/toucan.git
cd toucan
make install
# verify installation
which toucan
```

That’s it, the `toucan` command should now be ready to use.

### Installation Steps

Follow these steps to install Toucan.

#### Clone the Toucan Repository

Open your terminal and run the following command to clone the Toucan repository from [GitHub](https://github.com/toucansites/toucan):

```sh
git clone https://github.com/toucansites/toucan.git
```

This command will download the Toucan repository from GitHub to your local machine.

#### Navigate to the Toucan Directory

Change to the Toucan directory by running:

```sh
cd toucan
```

This will set your current directory to the Toucan project directory.

#### Build Toucan

Compile Toucan in release mode by executing:

```sh
swift build -c release
```

This command will build the Toucan project, creating the necessary executable files.

#### Install Toucan

Install the compiled Toucan binary to /usr/local/bin:

```sh
install ./.build/release/toucan-cli /usr/local/bin/toucan
```

This step places the Toucan executable in a directory included in your system’s PATH, making it easy to run.

### Verification

To verify that Toucan is installed correctly, run the following command:

```sh
which toucan
```

This should output the path to the toucan executable, confirming that the installation was successful.

```sh
# tib@~: which toucan
/usr/local/bin/toucan
```
