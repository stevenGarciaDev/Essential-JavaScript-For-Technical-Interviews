### **Problem #12: Optional Chaining and Nullish Coalescing**

---

### **What This Problem Test:**

**Problem #12:**  
 Tests ability to use optional chaining and nullish coalescing to handle potentially undefined properties safely and effectively.

---

Write a function called `getUserDetails` that accepts a user object with the following structure:

```javascript
{
    name: string,
    address?: {
        city: string,
        street?: string
    }
}
```

The function should:

1. Use **optional chaining** to safely access the `city` and `street` properties of the `address` object.
2. Use **nullish coalescing (`??`)** to provide a default value of `"Unknown Street"` if the `street` property is `null` or `undefined`.
3. Return a string in the following format:
    - `"User lives in [city], [street]"`.

**Example Input:**

```javascript
getUserDetails({ name: "Alice", address: { city: "Wonderland" } });
```

**Expected Output:**

```javascript
"User lives in Wonderland, Unknown Street";
```

**Example Input:**

```javascript
getUserDetails({
    name: "Bob",
    address: { city: "Metropolis", street: "Main St" },
});
```

**Expected Output:**

```javascript
"User lives in Metropolis, Main St";
```
