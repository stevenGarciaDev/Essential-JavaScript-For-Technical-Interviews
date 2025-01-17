### Problem #35: Use Dynamic Imports for Conditional Module Loading

---

### What This Problem Test:

**Problem #35**:

-   Ability to implement and use dynamic imports.
-   Understanding of conditional module loading to optimize performance and reduce unnecessary code execution.

---

Write a program that conditionally imports a module based on user input.

1. **`mathHelper.js`**:

    - Export a function called `calculateArea` that calculates the area of a rectangle:
        ```javascript
        export function calculateArea(length, width) {
            return length * width;
        }
        ```

2. **`main.js`**:
    - Prompt the user to decide if they want to calculate the area of a rectangle.
    - If the user confirms, dynamically import `mathHelper.js` and call `calculateArea` with hardcoded values (e.g., `length = 5`, `width = 10`).
    - Log the result to the console.

**Requirements**:

-   Use `await import()` for dynamic module loading.
-   Show the result only if the user agrees to perform the calculation.

**Example Usage**:

When the user confirms, the program logs:

```
The area of the rectangle is: 50
```

If the user declines, no import or calculation occurs.
