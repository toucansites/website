---
type: guide
title: macOS
description: Toucan Installation Guide for macOS
category: installation
order: 1
---

# macOS
---

During the alpha release, Toucan can be installed on macOS by compiling from source. Support for [Brew](https://brew.sh/) and [Mint](https://github.com/yonaskolb/Mint) package managers is coming soon.

## Quick install

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

## Compile from source

It is possible to install Toucan by compiling it from [source](https://github.com/toucansites/toucan).

### Prerequisites

Before installing Toucan, ensure Swift 5.10 or a later version is installed on your Linux distribution. Refer to the Swift [installation guide](https://swift.org/install/linux/#platforms) on [swift.org](https://swift.org) for detailed instructions on installing Swift.

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

## Verification

To verify that Toucan is installed correctly, run the following command:

```sh
which toucan
```

This should output the path to the toucan executable, confirming that the installation was successful.

```sh
# tib@~: which toucan
/usr/local/bin/toucan
```
