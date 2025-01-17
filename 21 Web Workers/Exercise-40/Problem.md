### Problem #40: Use a WebWorker to Filter Large Data Efficiently

---

### What This Problem Test:

**Problem #40**: Expands on the use of WebWorkers by applying them to real-world data processing tasks, focusing on efficient handling of large datasets.

---

You are given a large array of numbers, and you need to filter out all the even numbers using a WebWorker. The filtering process should not block the main thread.

#### Current Code (Blocking the Main Thread):

```javascript
const data = Array.from({ length: 1e7 }, () => Math.floor(Math.random() * 100));

document.getElementById("filter").addEventListener("click", () => {
    const evenNumbers = data.filter((num) => num % 2 === 0);
    console.log(`Filtered ${evenNumbers.length} even numbers`);
});

document.getElementById("hello").addEventListener("click", () => {
    console.log("Hello, World!");
});
```

**HTML Setup**:

```html
<button id="filter">Filter Even Numbers</button>
<button id="hello">Say Hello</button>
```

**Task**:

1. Move the filtering logic to a WebWorker.
2. Use `postMessage` to send the filtered result back to the main thread.
3. Update the main script to receive and log the result from the worker.
4. Ensure the "Say Hello" button remains responsive during the filtering process.
