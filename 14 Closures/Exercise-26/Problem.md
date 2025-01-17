### **Problem #26: Delayed Logger**

---

### **What This Problem Test:**

**Problem #26**:

-   Correct handling of closures in loops with asynchronous operations.
-   Ability to ensure each timeout remembers its corresponding value and delay.

---

Write a function called `delayedLogger` that takes an array of strings as input and logs each string to the console with a delay. The first string should be logged after 1 second, the second after 2 seconds, and so on.

Use closures to ensure each timeout function remembers the correct delay and string.

**Example Input:**

```javascript
delayedLogger(["Hello", "World", "JavaScript"]);
```

**Expected Output:**

-   After 1 second: Logs `"Hello"`.
-   After 2 seconds: Logs `"World"`.
-   After 3 seconds: Logs `"JavaScript"`.
