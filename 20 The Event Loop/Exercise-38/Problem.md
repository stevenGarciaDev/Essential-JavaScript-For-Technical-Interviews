### Problem #37: Implement Chunking for Large Dataset Processing

---

### What This Problem Test:

**Problem #37**:

-   Practical application of chunking to manage long-running tasks.
-   Ensuring responsiveness while handling large datasets.

---

Write a function called `processLargeDataset` that takes an array of numbers and processes them in chunks of 100 items at a time. The function should log each number to the console. Use `setTimeout()` to ensure that the UI remains responsive during processing.

```javascript
function processLargeDataset(data) {
    // Implement the chunking logic here
}

// Example usage:
const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
processLargeDataset(largeArray);
```

**Requirements**:

1. Process the dataset in chunks of 100 numbers.
2. Allow the Event Loop to process other tasks between chunks.
3. Ensure that all numbers in the dataset are logged in the correct order.

**Expected Behavior**:

-   The numbers 1 to 1000 are logged in chunks of 100, with a small delay between each chunk.
-   The UI should remain responsive during processing.
