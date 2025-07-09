---
category: "integrations"
title: "Google Analytics"
description: "Integrate Google Analytics into your Toucan site"
order: 2

---

# Google Analytics

Integrate Google Analytics into your Toucan site to gain insights into user behavior, page performance, and overall engagement.

---

## Integration Steps

To embed Google Analytics, use the official `gtag.js` snippet provided by Google and insert it into your site template.

### Obtain Your Tracking ID

- Sign in to [Google Analytics](https://analytics.google.com/)
- Navigate to:  
  **Admin → Data Streams → Web**
- Copy your **Measurement ID**, which looks like:  
  `G-XXXXXXXXXX`

### Modify `html.mustache`

Open your site's `html.mustache` layout template.

### Insert the Analytics Snippet Inside the `&lt;head&gt;`

Replace `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

This script asynchronously loads the Google Analytics library and initializes tracking for your site.

---

## Best Practices

- For accurate tracking and performance metrics, insert the snippet **at the top of the `&lt;head&gt;`** section.
- Avoid enabling Google Analytics on development or staging environments:

  ```html
  {{#production}}
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-XXXXXXXXXX');
    </script>
  {{/production}}
  ```

  This ensures that only your live site reports analytics data.

---

## Additional Resources

- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Gtag.js Reference Guide](https://developers.google.com/gtagjs)
