---
category: "deployment"
title: "deed.page"
description: "Toucan-based websites can be published to deed.page with a single HTTP request, without an account or a Git repository. Follow these steps to publish your site."
order: 2
---

# deed.page

[deed.page](https://deed.page) publishes a folder of static files with one HTTP request. You don't need an account, a Git repository or an extra CLI tool, only `tar` and `curl`. Your site gets a permanent HTTPS address on a subdomain, for example `https://my-toucan-site.deed.page/`.


## Adding a Deployment Target

Toucan writes absolute URLs into the generated pages, so add a target to your `toucan.yml` file whose `url` matches the address of your site. The address is built from a slug of your choice (lowercase letters, numbers and hyphens):

```bash
targets:
    - name: dev
      default: true

    - name: "deed-page"
      output: "./deed-page-output"
      url: "https://my-toucan-site.deed.page/"
```

Generate the site using this target:

```bash
toucan generate --target deed-page
```


## Publishing the Site

Pack the contents of the output directory, not the directory itself, so the `index.html` file ends up at the root of the site:

```bash
tar -C deed-page-output -czf site.tar.gz .
```

Upload the archive, using the same slug as in the target URL:

```bash
curl -sT site.tar.gz "https://deed.page/v1/sites?slug=my-toucan-site" -o response.json
jq -r .url response.json
```

The response also contains an owner `token`. It is shown only once and every later update of the site needs it, so save it to a private file and remove the response:

```bash
(umask 077 && mkdir -p ~/.config/deed-page && jq -r .token response.json > ~/.config/deed-page/token)
rm response.json
```

> note: If the slug is already taken by someone else, the request fails with a `409` error. Pick another slug and update the `url` of your target before generating the site again.


## Updating the Site

Generate the site again, then upload the new archive to the same slug with your token:

```bash
toucan generate --target deed-page
tar -C deed-page-output -czf site.tar.gz .
curl -T site.tar.gz "https://deed.page/v1/sites?slug=my-toucan-site" \
    -H "Authorization: Bearer $(cat ~/.config/deed-page/token)"
```

The new version replaces the previous one as soon as the request completes.

> note: On the free plan a site can be up to 25 MB, a single upload is limited to 4 MB, and pages show a small "Published with deed.page" badge. Custom domains, larger sites and the upload method for bigger archives are described in the [deed.page documentation](https://deed.page/docs).
