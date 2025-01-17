### Problem #32: Create a Generator for a Fibonacci Sequence

---

### What This Problem Test:

**Problem #32**:

-   Understanding of basic generator syntax.
-   Ability to use `yield` to produce values dynamically in a sequence.

---

Write a generator function called `fibonacciGenerator` that generates the Fibonacci sequence indefinitely. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.

**Requirements**:

-   Use a generator function with the `yield` keyword.
-   Allow the generator to produce as many Fibonacci numbers as needed by calling `next()` repeatedly.

**Example Usage**:

```javascript
const fibonacci = fibonacciGenerator();

console.log(fibonacci.next().value); // 0
console.log(fibonacci.next().value); // 1
console.log(fibonacci.next().value); // 1
console.log(fibonacci.next().value); // 2
console.log(fibonacci.next().value); // 3
console.log(fibonacci.next().value); // 5
```
