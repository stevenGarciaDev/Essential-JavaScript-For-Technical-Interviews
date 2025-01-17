### Problem #33: Delegating Generators with `yield*`

---

### What This Problem Test:

**Problem #33**:

-   Mastery of generator delegation with `yield*`.
-   Combining multiple generators into a single iterable sequence.

---

Create two generator functions, `evenNumbers` and `oddNumbers`, which yield even and odd numbers respectively up to a given limit. Then, create a third generator function called `mixedNumbers` that uses `yield*` to combine the values from both `evenNumbers` and `oddNumbers`.

**Requirements**:

1. `evenNumbers(limit)`: Yields even numbers starting from 0 up to the given limit.
2. `oddNumbers(limit)`: Yields odd numbers starting from 1 up to the given limit.
3. `mixedNumbers(limit)`: Combines the output of `evenNumbers` and `oddNumbers` using `yield*`.

**Example Usage**:

```javascript
function* evenNumbers(limit) {
    for (let i = 0; i <= limit; i += 2) {
        yield i;
    }
}

function* oddNumbers(limit) {
    for (let i = 1; i <= limit; i += 2) {
        yield i;
    }
}

function* mixedNumbers(limit) {
    yield* evenNumbers(limit);
    yield* oddNumbers(limit);
}

const mixed = mixedNumbers(5);

console.log(mixed.next().value); // 0 (even)
console.log(mixed.next().value); // 2 (even)
console.log(mixed.next().value); // 4 (even)
console.log(mixed.next().value); // 1 (odd)
console.log(mixed.next().value); // 3 (odd)
console.log(mixed.next().value); // 5 (odd)
```
