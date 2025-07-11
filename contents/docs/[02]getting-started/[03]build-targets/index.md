---
category: "getting-started"
title: "Build targets"
description: "Customize your Toucan site with the config file to modify default locations, naming conventions, and enhance your website effortlessly."
order: 3
---

# Build targets
---

The `toucan.yml` file, which is found in the root directory, is used to specify build targets for your Toucan-based static site project. This file is optional. However, if you want to create multiple versions of your site—such as a development version and a production version—it is recommended to include this file.

## Default target

If the `toucan.yml` file is not present, the generator will automatically use the default target values:


```yaml
targets:
    - name: dev 
      config: ""
      url: "http://localhost:3000"
      input: "."
      output: "dist"
      default: true
```

The `dev` target uses the default configuration file and sets `http://localhost:3000` as the base URL. It treats the current directory as the working directory and also checks this location for the configuration file. 

All generated files are placed in the `dist` folder. This target is marked as the default, so if you run the `toucan generate` command without specifying an explicit target option, it will use the `dev` target automatically.


## Custom targets

Now that we know the default values, let’s create a new target to build our site for production. Here is an example of what a `toucan.yml` file might look like:

```yaml
targets:
    - name: dev
      default: true
    
    - name: live
      output: live
      url: "https://toucansites.com/"
```

Now you can generate the live version of your website by running the following command:

```sh
toucan generate --target live
```

This will put all the generated files into a folder called `live`. 

The output will use `toucansites.com` as the base URL, so when you use `{{baseUrl}}` in your templates, your links will work correctly in production.

These files are ready to be published on GitHub Pages or any other static file hosting service.

## Configuration

You can set up different build target configurations for your project. By default, Toucan uses the `config.yml` file and looks for it in the working directory, which you specify with the target’s input key.

> tip: Toucan is also smart enough to find target-specific configuration files based on the target name. 

For example, if you create files like `config.dev.yml` and `config.live.yml`, you can have different settings for each target, such as localization, file paths, and more.

In the [next section](/docs/getting-started/configuration/), we will explain in detail how configuration works and how you can use it to customize your project.

## Reference

Here are the keys you can use when setting up a build target:

@FAQ {
    @Question {
        **`name`** - The unique name of the target.
    }
    @Answer {
        The name of the target is unique and is also used as a suffix for the configuration file. This helps Toucan find the right configuration file for each target, making it easier to manage different settings for your development, production, or other environments.
    }
}

@FAQ {
    @Question {
        **`config`** - The path to the configuration file.
    }
    @Answer {
        This is the custom path to your configuration file. If you want to keep the configuration file in a different place within the working directory, you can use this option to point to its location. This allows for better organization and flexibility in managing your project's files.
    }
}

@FAQ {
    @Question {
        **`url`** - The base URL of the target. 
    }
    @Answer {
        The base URL is the main web address for your site, written without a trailing slash (for example: "https://example.com"). Toucan uses this value to build complete links and asset file paths throughout your website, so everything works correctly no matter where your site is published.
    }
}

@FAQ {
    @Question {
        **`input`** - The input path for the source files.
    }
    @Answer {
        This is the current working directory. Toucan will use this location to load the configuration file and everything else, based on the paths you set in the config file. All files and folders will be found relative to this input directory.
    }
}

@FAQ {
    @Question {
        **`output`** - The output path for generated files.
    }
    @Answer {
        This is where the generated files will be saved. All the final output from the build process will be placed in this location, ready for you to use or publish.
    }
}

@FAQ {
    @Question {
        **`default`** - A flag indicating if this is the default target.
    }
    @Answer {
        This option marks the target as the default. When you run the generate command without specifying a target, Toucan will use this default target. Only one target can be set as the default.
    }
}
