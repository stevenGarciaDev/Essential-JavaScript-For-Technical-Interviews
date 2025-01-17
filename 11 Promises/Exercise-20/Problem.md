### **Problem #20: Using `Promise.all` to Fetch Multiple Results**

---

### **What This Problem Test:**

**Problem #20:**

-   Using `Promise.all` to manage multiple asynchronous operations.
-   Handling the results of multiple promises together.
-   Using the `fetch` API and error handling in promises.

---

Write a function called `fetchData` that:

1. Accepts an array of URLs.
2. Creates a promise for each URL using `fetch`.
3. Uses `Promise.all` to wait for all the promises to resolve.
4. Logs the response statuses to the console.

**Steps:**

-   Use `Promise.all` to handle the array of promises created by `fetch`.
-   Handle errors if any promise is rejected.

**Example Input:**

```javascript
fetchData([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
]);
```

**Expected Output:**

```
Response statuses: [200, 200]
```

**Hint:**

-   Use the `status` property of the response objects to log the statuses.
-   Use `catch` to handle network errors.

---
