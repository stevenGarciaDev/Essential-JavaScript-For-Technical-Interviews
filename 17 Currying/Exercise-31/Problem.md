### Problem #30: Implement a Generic Curry Function

---

### What This Problem Test:

**Problem #30**:

-   Understanding of currying and closures.
-   Ability to write a generic `curry` function that works for any multi-parameter function.

---

Create a generic `curry` function that transforms any given multi-parameter function into its curried form. Test your implementation with two different functions:

1. **sum(a, b, c)**: Returns the sum of three numbers.
2. **multiply(a, b, c)**: Returns the product of three numbers.

**Requirements**:

-   Implement the `curry` function such that it accepts a function as an argument and returns its curried version.
-   Ensure that the curried function takes one argument at a time.

**Example Usage**:

```javascript
function sum(a, b, c) {
    return a + b + c;
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // Outputs: 6

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // Outputs: 24
```
