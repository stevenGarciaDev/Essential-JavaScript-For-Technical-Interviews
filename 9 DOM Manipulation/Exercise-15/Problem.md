### **Problem #15: Dynamic Button Actions**

---

### **What These Problems Test:**

**Problem #15:**

-   Understanding of `document.createElement()` and `appendChild()` for adding new elements dynamically.

-   Ability to manipulate styles and content dynamically.

-   Generating random values and updating the DOM in response to user interactions.

---

Write a script that dynamically adds a button to the page. When the button is clicked:

1. Change the background color of the page to a random color.
2. Display the current background color in a new paragraph added below the button.

**Steps:**

1. Use `document.createElement()` to create a button with the text `"Change Background"`.
2. Append the button to the body using `appendChild()`.
3. Add a `click` event listener to the button that:
    - Changes the background color of the page to a random color.
    - Creates a new paragraph element and displays the color in the format: `"Current color: #RRGGBB"`.

**Hints:**

-   Use `Math.random()` to generate random colors.
-   Use `document.body.style.backgroundColor` to change the background.

**Expected Behavior:**

-   Clicking the button changes the background to a random color and displays the color code below the button.

---
