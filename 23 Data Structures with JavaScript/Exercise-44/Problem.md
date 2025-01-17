### Problem #44: Implement a Stack Data Structure

---

### What This Problem Test:

**Problem #44**:

-   Familiarity with implementing a data structure from scratch.
-   Understanding and application of the **LIFO** principle.
-   Use of array operations to simulate stack behavior.

---

Create a `Stack` class in JavaScript with the following methods:

1. `push(value)`: Adds a value to the top of the stack.
2. `pop()`: Removes and returns the value from the top of the stack.
3. `peek()`: Returns the value at the top of the stack without removing it.
4. `isEmpty()`: Returns `true` if the stack is empty, otherwise `false`.
5. `size()`: Returns the number of elements in the stack.

**Requirements**:

-   Internally use an array to manage the stack data.
-   Ensure the stack follows the **Last-In, First-Out (LIFO)** principle.

**Example**:

```javascript
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop()); // Output: 20
console.log(stack.size()); // Output: 1
console.log(stack.isEmpty()); // Output: false
stack.pop();
console.log(stack.isEmpty()); // Output: true
```
