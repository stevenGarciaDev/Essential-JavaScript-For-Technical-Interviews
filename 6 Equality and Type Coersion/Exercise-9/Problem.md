### **Problem #10: Handling Special Cases**

---

### **What This Problem Test:**

**Problem #9:**  
 Tests understanding of the differences between `==` and `===` and how type coercion affects loose equality.

---

### **Problem #9: Comparing Values**

Write a function called `compareValues` that takes two arguments and returns:

1. `"Loose Equality: true"` or `"Loose Equality: false"` depending on whether the values are equal using `==`.
2. `"Strict Equality: true"` or `"Strict Equality: false"` depending on whether the values are equal using `===`.

**Example Input:**

```javascript
compareValues(5, "5");
compareValues(null, undefined);
compareValues(0, false);
```

**Expected Output:**

```javascript
Loose Equality: true, Strict Equality: false
Loose Equality: true, Strict Equality: false
Loose Equality: true, Strict Equality: false
```

---
