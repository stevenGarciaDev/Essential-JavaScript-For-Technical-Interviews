### **Problem #13: Using `DOMContentLoaded` for DOM Manipulation**

---

### **What This Problem Test:**

**Problem #13:**

-   Understanding of `DOMContentLoaded` and attaching event listeners only after the DOM is fully parsed.

-   Basic DOM manipulation using JavaScript.

---

Write a script that waits for the DOM to load fully before attaching an event listener to a button. When the button is clicked, the text of a paragraph element with the ID `"output"` should change to `"Button Clicked!"`.

**Steps:**

1. Add an event listener for the `DOMContentLoaded` event.
2. Inside the listener, find the button using `querySelector`.
3. Attach a `click` event listener to the button that updates the paragraph text.

**HTML Example:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test Page</title>
        <script src="script.js"></script>
    </head>
    <body>
        <button id="myButton">Click Me</button>
        <p id="output">Initial Text</p>
    </body>
</html>
```

**Expected Behavior:**

-   Initially, the paragraph displays `"Initial Text"`.
-   After clicking the button, the paragraph displays `"Button Clicked!"`.

---
