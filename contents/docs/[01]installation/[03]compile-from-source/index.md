---
category: "installation"
title: "Compile from source"
description: "Learn how to compile and install Toucan from source on macOS or Linux."
order: 3
---

# Compile from source

Toucan can also be installed by compiling it from [source](https://github.com/toucansites/toucan) on **macOS or Linux**.

## Prerequisites

Before installing Toucan, verify that Swift 6.0 or later is installed on your **macOS or Linux** system. For detailed installation instructions, consult the Swift [installation guide](https://swift.org/install/linux/#platforms) on [swift.org](https://swift.org).

## Quick install

To install Toucan on **macOS or Linux**, run the following commands in your terminal. Make sure that **Swift** and any required developer tools (such as **Xcode** on macOS or **build-essential** on Linux) are installed beforehand.

```swift
# clone the repository & install toucan
git clone https://github.com/toucansites/toucan.git
cd toucan
make install
# verify installation
which toucan
```

Toucan is now installed and ready to use via the `toucan` command.

## Installation Steps

Follow these steps to install Toucan from source on **macOS or Linux**.

### Clone the Toucan Repository

Open Terminal and run the following command to clone the Toucan repository from [GitHub](https://github.com/toucansites/toucan):

```sh
git clone https://github.com/toucansites/toucan.git
```

This command downloads the Toucan repository from GitHub to the local machine.

### Navigate to the Toucan Directory

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

### Install Toucan

Install the compiled Toucan binary to /usr/local/bin:

```sh
install ./.build/release/toucan-cli /usr/local/bin/toucan
```

This step places the Toucan executable in a directory included in the system’s PATH, enabling easy execution from the command line.

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
