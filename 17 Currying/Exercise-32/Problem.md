### Problem #31: Create a Partially Applied Function Using Currying

---

### What This Problem Test:

**Problem #31**:

-   Practical application of currying to achieve partial application.
-   Ability to use curried functions to simplify repetitive tasks.

---

Using a curried version of the `calculatePrice` function, create a partially applied function for applying discounts to products.

1. **Original Function**:  
   The `calculatePrice(basePrice, taxRate, discount)` function calculates the final price of a product.

    - `basePrice`: Initial price of the product.
    - `taxRate`: Tax rate as a percentage (e.g., 0.1 for 10%).
    - `discount`: Discount amount to be subtracted.

2. **Curried Function**:  
   Transform the function into a curried version so that you can partially apply a fixed tax rate and reuse the resulting function to calculate prices with different discounts.

**Requirements**:

-   Implement the curried version of `calculatePrice`.
-   Create a partially applied function for a tax rate of 10% (0.1).

**Example Usage**:

```javascript
function calculatePrice(basePrice, taxRate, discount) {
    return basePrice + basePrice * taxRate - discount;
}

const curriedCalculatePrice = curry(calculatePrice);

// Create a partially applied function with a tax rate of 10%
const calculateWithTax = curriedCalculatePrice(0.1);

console.log(calculateWithTax(100)(5)); // Outputs: 105 (100 + 10 - 5)
console.log(calculateWithTax(200)(20)); // Outputs: 200 (200 + 20 - 20)
```
