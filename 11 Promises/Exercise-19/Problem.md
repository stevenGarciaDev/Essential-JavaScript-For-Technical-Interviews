### **Problem #19: Creating and Chaining Promises**

---

### **What This Problem Test:**

**Problem #19:**

    - Understanding of creating and chaining promises.
    - Handling asynchronous operations sequentially with `.then()`.

---

Write a function called `processNumber` that:

1. Accepts a number as input.
2. Returns a promise that doubles the number after 1 second.
3. Chains another promise that adds 10 to the doubled number after another 1 second.
4. Logs the final result to the console.

**Steps:**

-   Use `new Promise` to create the promises for doubling and adding.
-   Chain the promises using `.then()` to handle the results.

**Example Input:**

```javascript
processNumber(5);
```

**Expected Output:**

```
20
```

**Explanation:**

-   First promise doubles `5` to `10` after 1 second.
-   Second promise adds `10` to `10`, resulting in `20`.

---
