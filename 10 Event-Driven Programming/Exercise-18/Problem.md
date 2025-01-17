### **Problem #18: Event Delegation for Dynamic Elements**

---

### **What This Problem Test:**

**Problem #18:**

-   Application of **event delegation** for efficient event management.
-   Handling dynamically created elements using parent listeners.
-   Modifying styles and logging information based on event targets.

---

Write a script that uses **event delegation** to handle `click` events on dynamically created buttons inside a `<div>` container with the ID `"buttonContainer"`. Specifically:

1. Add a `click` event listener to the container.
2. When a button inside the container is clicked:
    - Log the button's text content to the console.
    - Change its background color to green.
3. Dynamically add three buttons to the container with the text `"Button 1"`, `"Button 2"`, and `"Button 3"`.

**HTML Example:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Event Delegation Example</title>
    </head>
    <body>
        <div id="buttonContainer"></div>
        <script src="script.js"></script>
    </body>
</html>
```

**Expected Behavior:**

-   Clicking any dynamically created button logs its text content to the console and changes its background color to green.
-   The container's event listener handles all button clicks, even for buttons added after the event listener was created.

---
