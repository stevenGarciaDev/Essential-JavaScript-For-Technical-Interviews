### **Problem #21: Fetch and Handle JSON Data**

---

### **What This Problem Test:**

**Problem #21:**

-   Basic understanding of the `fetch` API and its usage for GET requests.
-   Parsing JSON responses and extracting relevant data.
-   Using `async/await` for cleaner asynchronous code.

---

Write a function called `getUserData` that:

1. Fetches user data from the following API endpoint:  
   **`https://jsonplaceholder.typicode.com/users/1`**
2. Parses the response as JSON.
3. Logs the user's name and email to the console.

**Steps**:

-   Use `fetch()` to make a GET request.
-   Use `async/await` for handling the asynchronous operation.
-   Handle any potential errors using a `try/catch` block.

**Expected Output:**

```javascript
Name: Leanne Graham
Email: Sincere@april.biz
```

---
