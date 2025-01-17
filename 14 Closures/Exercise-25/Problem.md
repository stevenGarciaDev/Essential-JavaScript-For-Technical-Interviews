### **Problem #25: Counter Factory**

---

### **What This Problem Test:**

**Problem #25**:

-   Understanding closures for encapsulating private variables.
-   Ability to create and manage methods within a closure.

---

Create a function called `createCounter` that generates a counter object. The counter object should have the following methods:

1. **`increment()`**: Increases the counter by 1.
2. **`decrement()`**: Decreases the counter by 1.
3. **`reset()`**: Resets the counter to 0.
4. **`getValue()`**: Returns the current value of the counter.

The counter value should be private and only accessible via the object's methods.

**Example Usage:**

```javascript
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2
counter.decrement();
console.log(counter.getValue()); // 1
counter.reset();
console.log(counter.getValue()); // 0
```

---
