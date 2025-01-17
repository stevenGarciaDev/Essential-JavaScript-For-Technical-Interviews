### **Problem #24: Smooth Scroll to Top**

---

### **What This Problem Test:**

**Problem #24:**

-   Using `requestAnimationFrame` for smooth animations.
-   Calculating and managing incremental updates over time.

---

Write a function called `smoothScrollToTop` that:

1. Uses `requestAnimationFrame` to create a smooth scrolling animation.
2. Scrolls the page to the top of the document over 1 second.

**Steps:**

-   Get the current scroll position using `window.scrollY`.
-   Calculate the distance to scroll in each frame based on the time elapsed.
-   Use `requestAnimationFrame` to update the scroll position in small increments.
-   Stop the animation once the page is scrolled to the top.

**Example Input:**

```javascript
smoothScrollToTop();
```

**Expected Behavior:**

-   Smoothly scrolls the page from the current scroll position to the top within 1 second.

---
