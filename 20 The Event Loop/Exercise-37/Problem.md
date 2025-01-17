### Problem #36: Analyze the Output of Asynchronous Code

---

### What This Problem Test:

**Problem #36**:

-   Understanding of the Event Loop, Task Queue, and Microtask Queue.
-   Ability to analyze and explain the order of execution in asynchronous JavaScript.

---

Given the following JavaScript code, determine the order of the console output and explain why it occurs:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve()
    .then(() => console.log("Microtask 1"))
    .then(() => console.log("Microtask 2"));

console.log("End");
```

**Requirements**:

1. Write the correct output order.
2. Explain why the Event Loop handles the tasks in this order, focusing on the differences between microtasks and tasks.

**Expected Output**:

```
Start
End
Microtask 1
Microtask 2
Timeout 1
```
