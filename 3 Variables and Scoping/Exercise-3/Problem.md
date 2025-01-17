### **Problem 3: Scoping and Hoisting**

---

### **What This Problems Test:**

**Problem 3:** Tests the learner’s understanding of scoping rules and how `var`, `let`, and `const` behave differently in block and global scopes.

---

Write a function called `testScopes` that demonstrates the behavior of `var`, `let`, and `const` in different scopes. The function should:

1. Declare variables using `var`, `let`, and `const` inside a block.
2. Attempt to access those variables both inside and outside the block to demonstrate their scope.
3. Log the results to the console to show which variables are accessible and which cause errors.

**Expected Output:**

```javascript
Inside block: varVar = "I am var"; letVar = "I am let"; constVar = "I am const";
Outside block: varVar = "I am var"; letVar and constVar cause ReferenceError.
```

---
