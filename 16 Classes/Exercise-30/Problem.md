### **Problem #30: Prototypal Inheritance**

---

### **What This Problem Test**:

**Problem #30**:

-   Familiarity with prototypal inheritance using constructor functions and `Object.create`.
-   Ability to set up and use prototype chains effectively.

---

Using the constructor function approach, implement a simple inheritance system for a `Vehicle` and `Car`.

1. **Vehicle Constructor**:

    - Property:
        - `type` (string, e.g., "Truck", "Bike", etc.)
    - Method:
        - `describe()`: Logs `"This is a [type]."`

2. **Car Constructor** (inherits from `Vehicle`):

    - Additional Property:
        - `brand` (string, e.g., "Toyota", "Ford")
    - Additional Method:
        - `getBrand()`: Logs `"This car is a [brand]."`

3. **Requirements**:
    - Use `Object.create` to set up the prototype chain.
    - Ensure methods are properly inherited.

**Example Usage**:

```javascript
const vehicle = new Vehicle("Truck");
vehicle.describe(); // Logs: "This is a Truck."

const car = new Car("Car", "Toyota");
car.describe(); // Logs: "This is a Car."
car.getBrand(); // Logs: "This car is a Toyota."
```
