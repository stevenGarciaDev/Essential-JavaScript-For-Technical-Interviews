### **Problem #8: Using Symbols and Iterating Over Objects**

---

### **What This Problem Test:**

**Problem #8:** Tests comprehension of `Symbol` usage, its non-enumerable nature, and iterating over objects effectively.

---

Write a function called `useSymbols` that does the following:

1. Create a `Symbol` called `uniqueId` and use it as a key in an object called `product` with the value `12345`.
2. Add additional properties to the `product` object:
    - `name`: `"Laptop"`
    - `price`: `1500`
3. Use `Object.entries()` to log all **enumerable properties** of the object (the `Symbol` key-value pair should not appear).
4. Access the `Symbol` property directly to log its value.

**Expected Output:**

```javascript
// Log from Object.entries():
"name: Laptop";
"price: 1500";
// Log of the Symbol property:
"Symbol(uniqueId): 12345";
```

---
