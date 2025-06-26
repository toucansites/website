---
category: "installation"
title: "Linux"
description: "Learn how to install Toucan on Linux with simple steps. Follow this guide to set up and start using Toucan easily"
order: 2

---

# Linux
---

You can install Toucan on Linux using one of the following methods:

- [Homebrew](https://brew.sh/)
- Native `.deb` or `.rpm` package (from GitHub Releases)
- Compile from source (for development or customization)

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

## Install with Native Linux Packages

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

## Compile from Source

You can also install Toucan by compiling it from [source](https://github.com/toucansites/toucan).

### Prerequisites

Before installing Toucan, ensure Swift 6.0 or a later version is installed on your Linux distribution. Refer to the Swift [installation guide](https://swift.org/install/linux/#platforms) on [swift.org](https://swift.org) for detailed instructions on installing Swift.


### Quick install

Here’s a quick snippet to install Toucan on Linux. Run the following commands, ensuring that Swift 5.10 or later is installed on your machine beforehand.

```swift
# clone the repository & install toucan
git clone https://github.com/toucansites/toucan.git
cd toucan
make install

# The installation process now internally calls sudo to copy the necessary Toucan binaries to the /usr/local/bin folder.

#If you encounter permission issues during installation, it’s possible that the install-toucan.sh script is not marked as executable. Fix this by running:
./scripts/run-chmod.sh

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
