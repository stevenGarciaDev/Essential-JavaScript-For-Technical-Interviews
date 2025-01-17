### **Problem #16: Highlight List Items**

---

### **What This Problem Test:**

**Problem #16:**

-   Proficiency in selecting multiple elements (`querySelectorAll`). - Using loops to manipulate a collection of elements.
-   Adding CSS classes dynamically to update styles.

---

Write a function called `highlightItems` that highlights all list items in a `<ul>` element when a button is clicked. Specifically:

1. Create a button dynamically with the text `"Highlight Items"`.
2. Attach the button to the page using `document.querySelector()` to select an existing container element.
3. Add a `click` event listener to the button that:
    - Iterates over all `<li>` elements inside the `<ul>`.
    - Adds the CSS class `"highlight"` to each `<li>`.

**HTML Example:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Highlight List</title>
        <style>
            .highlight {
                background-color: yellow;
            }
        </style>
    </head>
    <body>
        <div id="container">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        <script src="script.js"></script>
    </body>
</html>
```

**Expected Behavior:**

-   When the button is clicked, all `<li>` elements in the `<ul>` are highlighted with a yellow background.

---
