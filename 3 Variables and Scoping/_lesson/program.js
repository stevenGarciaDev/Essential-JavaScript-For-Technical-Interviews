// let keyword
{
    let blockVar = 'I am block-scoped';
    console.log(blockVar);
}

// var keyword
function example() {
    console.log(myVar);
    var myVar = 'I am function-scoped';
    console.log(myVar);
}
example();

// const keyword
const constantValue = 42;
constantValue = 50;

const arr = [1, 2];
arr.push(3);
console.log(arr);

// Block-scope
{
    let x = 10;
    const y = 20;
}
console.log(x);
console.log(y);

// Function-scope
function secondExample() {
    if (true) {
        var scopedVar = 'I am function-scoped';
    }
    console.log(scopedVar);
}
secondExample();

// Hoisting
console.log(varNum);
console.log(letNum);

var varNum = 5;
let letNum = 5;

console.log(varNum);
console.log(letNum);