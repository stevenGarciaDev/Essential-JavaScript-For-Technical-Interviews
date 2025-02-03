// Problem: Demonstrate the effect of hoisting on var, let, and const in JavaScript.
// Instructions:
// 1. Declare a variable using `var` and log it to the console *before and after* assigning it a value.
// 2. Declare variables using `let` and `const` and attempt to log them to the console *before* their declarations.
// 3. Use try...catch blocks to handle any ReferenceError exceptions that occur.

// Define the hoistingExample function
function hoistingExample() {
    // Step 1: Try logging a `var` variable before its assignment
    // Hint: `var` variables are hoisted but initialized with `undefined` by default.
    try {
        console.log(`myVar before assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }

    // Declare and assign the `var` variable
    var myVar = 1;

    // Step 2: Log the `var` variable after assignment
    try {
        console.log(`myVar after assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }

    // Step 3: Try logging a `let` variable before its declaration
    // Hint: `let` variables are hoisted but remain in a "temporal dead zone" until initialized.
    try {
        console.log(`myLet before assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }

    // Declare and assign the `let` variable
    let myLet = 2;

    // Step 4: Log the `let` variable after assignment
    try {
        console.log(`myLet after assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }

    // Step 5: Try logging a `const` variable before its declaration
    // Hint: `const` behaves similarly to `let` but must also be assigned a value at declaration.
    try {
        console.log(`myConst before assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }

    // Declare and assign the `const` variable
    const myConst = 3;

    // Step 6: Log the `const` variable after assignment
    try {
        console.log(`myConst after assignment:`); // TODO: Add the variable here
    } catch (error) {
        console.log('Error: ' + error);
    }
}

// Call the function to test
hoistingExample();
