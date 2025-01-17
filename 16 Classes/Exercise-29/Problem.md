### **Problem #29: Class and Inheritance**

---

### **What This Problem Test**:

**Problem #29**:

-   Understanding of ES6 classes, inheritance, and the `super` keyword.
-   Ability to structure code for reusable and maintainable design.

---

Create a `Person` class and a `Student` class that extends it.

1. **Person Class**:

    - Properties:
        - `name` (string)
        - `age` (number)
    - Method:
        - `introduce()`: Logs `"Hi, I am [name] and I am [age] years old."`

2. **Student Class** (inherits from `Person`):
    - Additional Property:
        - `grade` (string, e.g., "A", "B", etc.)
    - Additional Method:
        - `getGrade()`: Logs `"My grade is [grade]."`

**Requirements**:

-   Use the `super` keyword to call the `Person` constructor from the `Student` class.
-   Ensure both classes work as expected when creating instances.

**Example Usage**:

```javascript
const person = new Person("Alice", 30);
person.introduce(); // Logs: "Hi, I am Alice and I am 30 years old."

const student = new Student("Bob", 20, "A");
student.introduce(); // Logs: "Hi, I am Bob and I am 20 years old."
student.getGrade(); // Logs: "My grade is A."
```
