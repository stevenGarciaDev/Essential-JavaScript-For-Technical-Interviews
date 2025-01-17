### **Problem #10: Handling Special Cases**

---

### **What This Problem Test:**

**Problem #10:**  
 Tests handling of special cases like object comparison, `NaN` behavior, and `null` vs. `undefined`.

---

Create a function called `specialCases` that performs the following:

1. Compare two objects with identical properties using `==` and `===` and log the results.
2. Check if `NaN` is equal to itself using both `==` and `===`.
3. Compare `null` and `undefined` using both `==` and `===`.

**Expected Output:**

```javascript
// Comparing objects
Objects are loosely equal: false
Objects are strictly equal: false

// Comparing NaN
NaN loose equality: false
NaN strict equality: false

// Comparing null and undefined
null == undefined: true
null === undefined: false
```

---
