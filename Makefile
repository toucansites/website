SHELL=/bin/bash

# brew install optipng jpegoptim

png:
	find ./src/* -type f -name '*.png' -exec optipng -o7 {} \;

jpg:
	find ./src/* -type f -name '*.jpg' | xargs jpegoptim --all-progressive '*.jpg'
