### **Problem 4: Hoisting in Practice**

---

### **What This Problems Test:**

**Problem 4:** Tests the learner’s knowledge of hoisting and their ability to anticipate and handle errors related to variable initialization.

---

Create a function called `hoistingExample` that demonstrates the effect of hoisting on `var`, `let`, and `const`. Specifically:

1. Declare a variable with `var` and log it to the console before and after assigning it a value.
2. Declare variables with `let` and `const` and attempt to log them to the console before their declaration.
3. Handle any `ReferenceError` exceptions that occur using a `try...catch` block.

**Expected Output:**

```javascript
varVar before assignment: undefined
varVar after assignment: "I am var"
Error: Cannot access 'letVar' before initialization
Error: Cannot access 'constVar' before initialization
```

---
