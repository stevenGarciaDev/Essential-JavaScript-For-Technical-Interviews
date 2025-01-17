### **Problem #22: Form Submission with Fetch**

---

### **What This Problem Test:**

**Problem #22:**

-   Working with HTML forms and preventing default submission behavior.
-   Using `FormData` to collect form inputs dynamically.
-   Making a POST request and handling server responses.

---

Write a script that dynamically handles a form submission. The script should:

1. Select a form element with the ID `"userForm"`.
2. On form submission:
    - Prevent the default browser behavior.
    - Collect the form data using the `FormData` object.
    - Send the form data to this mock endpoint:  
      **`https://jsonplaceholder.typicode.com/posts`**  
      using the `POST` method.
    - Log the response from the server to the console.

**HTML Example:**

```html
<form id="userForm">
    <label for="username">Username</label>
    <input id="username" name="username" type="text" required />
    <button type="submit">Submit</button>
</form>
```

**Expected Behavior:**

-   When the form is submitted, the data is sent to the server.
-   The server response is logged to the console.

---
