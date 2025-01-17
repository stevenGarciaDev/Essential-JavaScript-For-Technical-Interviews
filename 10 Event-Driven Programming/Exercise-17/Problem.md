### **Problem #17: Customizing Event Listeners**

---

### **What This Problem Test:**

**Problem #17:**

-   Understanding of the `once` option in event listeners.
-   Dynamically managing element behavior (e.g., disabling a button after interaction).
-   Writing clean and concise event listener logic.

---

Write a script that does the following:

1. Adds a `click` event listener to a button with the ID `"actionButton"`.
2. The event listener should:
    - Log `"Button clicked"` to the console.
    - Disable the button after it is clicked for the first time.
    - Ensure the event listener is triggered only once.
3. Use the **`once`** option in the event listener's options object to automatically remove the listener after it is triggered.

**HTML Example:**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Event Listener Example</title>
    </head>
    <body>
        <button id="actionButton">Click Me</button>
        <script src="script.js"></script>
    </body>
</html>
```

**Expected Behavior:**

-   Clicking the button logs `"Button clicked"` to the console.
-   The button is disabled after the first click and cannot be clicked again.

---
