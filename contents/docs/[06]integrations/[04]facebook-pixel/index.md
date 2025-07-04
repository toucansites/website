---
category: "integrations"
title: "Facebook Pixel"
description: "Integrate Facebook Pixel into your Toucan site"
order: 4

---

# Facebook Pixel

Integrate Facebook Pixel into your Toucan site allows you to track visitor actions, measure the effectiveness of your ad campaigns, and build custom audiences for remarketing directly from your Toucan site.

---

## Integration Steps

### Create a Pixel in Meta Events Manager

1. Go to **Meta Events Manager**
2. Select your Business account.
3. Click **“Connect Data Sources”** → choose **Web** → select **Meta Pixel**.
4. Name your pixel and enter your site URL.
5. Copy your **Pixel ID**.

### Modify `html.mustache`

Open your site's base layout file: `html.mustache`.

### Insert Facebook Pixel Code in `head`

Add this snippet to the `head` section of your page:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

> Replace `YOUR_PIXEL_ID` with your actual Pixel ID.

---

## Best Practices

- Load Pixel Only in Production

  Avoid skewing analytics with test data. Use conditional rendering:

  ```mustache
  {{#production}}
  <!-- Facebook Pixel Code Here -->
  {{/production}}
  ```

- Track Custom Events (Optional)

  You can track conversions or actions like button clicks:

  ```html
  <button onclick="fbq('track', 'Lead');">Sign Up</button>
  ```

---

## Additional Resources

- [Meta Business Help: Pixel Setup](https://www.facebook.com/business/help/952192354843755)
- [Event Reference](https://developers.facebook.com/docs/meta-pixel/reference/)
