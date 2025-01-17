### **Problem #28: Arrow Functions and Event Listeners**

---

### **What This Problem Test**:

**Problem #28**:

-   Demonstrating the difference in `this` behavior between regular and arrow functions, especially in the context of DOM events.
-   Applying knowledge of event listeners and function scoping.

---

Write a function called `setupClickLogger` that takes a DOM element as an argument and adds a `click` event listener to it. The event listener should log the `id` of the clicked element using the `this` keyword. Use the following rules:

1. If a **regular function** is used as the event listener, `this` should correctly refer to the clicked element.
2. If an **arrow function** is used, log a message explaining why `this` does not refer to the clicked element.

**Requirements**:

-   Demonstrate the behavior of both regular functions and arrow functions in event listeners.

**Example HTML**:

```html
<button id="btn1">Button 1</button> <button id="btn2">Button 2</button>
```

**Example JavaScript**:

```javascript
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

setupClickLogger(btn1);
setupClickLogger(btn2);

// When Button 1 is clicked, logs: "Clicked element ID: btn1"
// When Button 2 is clicked, logs: "Clicked element ID: btn2"
// If an arrow function is used, logs: "Arrow function used, 'this' does not refer to the element"
```
