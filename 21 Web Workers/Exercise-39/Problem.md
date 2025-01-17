### Problem #39: Optimize a Long-Running Calculation with a WebWorker

---

### What This Problem Test:

**Problem #39**:

Tests understanding of creating and using a WebWorker for heavy computations, handling message passing, and ensuring a responsive UI.

---

Your task is to modify the following JavaScript code to use a WebWorker for performing a slow calculation. The goal is to ensure that the UI remains responsive while the calculation is performed in the background.

#### Current Code (Blocking the Main Thread):

```javascript
document.getElementById("start").addEventListener("click", () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    console.log(`Sum: ${sum}`);
});

document.getElementById("hello").addEventListener("click", () => {
    console.log("Hello, World!");
});
```

**HTML Setup**:

```html
<button id="start">Start Calculation</button>
<button id="hello">Say Hello</button>
```

**Task**:

1. Move the calculation logic to a WebWorker.
2. Use `postMessage` to send the result back to the main thread.
3. Update the main script to receive and log the result from the worker.
4. Ensure the "Say Hello" button remains responsive during the calculation.
