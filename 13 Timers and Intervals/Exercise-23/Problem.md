### **Problem #23: Auto-Updating Clock**

---

### **What These Problems Test:**

**Problem #23:**

-   Understanding of `setInterval` and `clearInterval`.
-   Using the `Date` object for real-time updates.
-   DOM manipulation to display dynamic data.

---

Write a function called `startClock` that:

1. Uses `setInterval` to update the current time every second.
2. Displays the time in a `div` with the ID `"clock"` in the format `HH:MM:SS`.
3. Stops updating when a button with the ID `"stopClock"` is clicked.

**HTML Example:**

```html
<div id="clock">00:00:00</div>
<button id="stopClock">Stop Clock</button>
```

**Steps:**

-   Use the `Date` object to get the current hours, minutes, and seconds.
-   Format the time as a string using `toString().padStart(2, "0")` for double digits.
-   Update the text content of the clock.
-   Use `clearInterval` to stop the updates when the stop button is clicked.

**Example Output:**

-   Initially displays `00:00:00` and updates every second (e.g., `12:34:56`, `12:34:57`...).
-   Stops updating when the stop button is clicked.

---
