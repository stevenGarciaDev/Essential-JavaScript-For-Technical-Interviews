function hoistingExample() {
    try {
        console.log(`myVar before assignment: ${myVar}`); // undefined
    } catch (error) {
        console.log('Error: ' + error);
    }

    var myVar = 1;

    try {
        console.log(`myVar after assignment: ${myVar}`); // 1
    } catch (error) {
        console.log('Error: ' + error);
    }

    try {
        console.log(`myLet before assignment: ${myLet}`); // ReferenceError: myLet is not defined
    } catch (error) {
        console.log('Error: ' + error);
    }

    let myLet = 2;

    try {
        console.log(`myLet after assignment: ${myLet}`); 
    } catch (error) {
        console.log('Error: ' + error);
    }

    try {
        console.log(`myConst after assignment: ${myConst}`); // ReferenceError: myConst is not defined
    } catch (error) {
        console.log('Error: ' + error);
    }
   
    const myConst = 3;

    try {
        console.log(`myConst after assignment: ${myConst}`);
    } catch (error) {
        console.log('Error: ' + error);
    }
}

hoistingExample();