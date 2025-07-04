---
category: "integrations"
title: "Google Tag Manager"
description: "Integrate Google Tag Manager into your Toucan site"
order: 3

---

# Google Tag Manager

Integrate Google Tag Manager into your Toucan site to manage tracking scripts, analytics, pixels, and third-party integrations without modifying your codebase after deployment.

---

## Integration Steps

### Create a GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create an account or open an existing one.
3. Create a new **Web container**.
4. Copy your **Container ID**, which looks like:  
   `GTM-XXXXXXX`

### Modify `html.mustache`

Open your site's global template file: `html.mustache`.

### Add the GTM Snippet

Paste this **first script** as high as possible inside the `head` html tag:

```html
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');
</script>
<!-- End Google Tag Manager -->
```

> Replace `GTM-XXXXXXX` with your actual container ID.

---

### Add the `noscript` Fallback Immediately After `body` tag

Insert this **second snippet** right after the opening `body` tag to ensure tracking still works for users with JavaScript disabled:

```html
<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## Best Practices

- Prevent GTM from loading in non-production environments:

  ```mustache
  {{#production}}
    <!-- GTM Script Here -->
  {{/production}}
  ```

  This ensures staging or development traffic does not contaminate production analytics.

---

## Additional Resources

- [Tag Manager Developer Guide](https://developers.google.com/tag-platform/tag-manager)
