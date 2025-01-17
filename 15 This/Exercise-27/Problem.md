### **Problem #27: Object Method Context**

---

### **What This Problem Test**:

**Problem #27**:

-   Understanding how `this` works in object methods.
-   Ensuring proper use of `this` within different contexts.

---

Create an object called `calculator` that has the following properties and methods:

1. A property called `value` initialized to `0`.
2. A method `add(number)` that adds the given `number` to `value` and returns the new value.
3. A method `subtract(number)` that subtracts the given `number` from `value` and returns the new value.
4. A method `reset()` that sets `value` back to `0`.
5. A method `logThis()` that logs the value of `this` to demonstrate the context when the method is called.

**Requirements**:

-   Ensure `this` correctly refers to the `calculator` object when using its methods.

**Example Usage**:

```javascript
calculator.add(10); // Returns 10
calculator.subtract(5); // Returns 5
calculator.logThis(); // Logs the calculator object
calculator.reset(); // Sets value back to 0
```

---
