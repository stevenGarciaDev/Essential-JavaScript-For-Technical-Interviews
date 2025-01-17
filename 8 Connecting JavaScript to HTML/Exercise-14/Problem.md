### **Problem #14: Experimenting with `defer` and `async`**

---

### **What This Problem Test:**

**Problem #14:**

-   Correct use of `defer` and `async` attributes to optimize script loading.

-   Ability to differentiate between scripts that interact with the DOM and those that run independently.

---

You are tasked with optimizing the script loading for a web page that includes the following:

-   A JavaScript file (`script.js`) that manipulates the DOM (e.g., updates a header text).
-   Another JavaScript file (`analytics.js`) that logs analytics data and does not depend on the DOM.

**Steps:**

1. Write the appropriate `<script>` tags in the correct order to optimize page load performance:
    - Use `defer` for `script.js`.
    - Use `async` for `analytics.js`.
2. Ensure `script.js` changes the text of an `<h1>` element with the ID `"title"` to `"Welcome to My Page!"`.

**HTML Template:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Optimized Scripts</title>
        <!-- Add the correct <script> tags here -->
    </head>
    <body>
        <h1 id="title">Loading...</h1>
    </body>
</html>
```

**Expected Behavior:**

-   The `<h1>` element should display `"Welcome to My Page!"` after the DOM has loaded.
-   `analytics.js` should load independently without affecting the page’s rendering.
