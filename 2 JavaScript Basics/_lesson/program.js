// Example of the functional programming paradigm
const add = (a, b) => a + b;
console.log( add(2, 2) );

const applyFunction = (func, x, y) => func(x, y);
console.log( applyFunction(add, 2, 3) );

// Example of the object programming paradigm
const car = {
    brand: 'Audi',
    start() {
        console.log('Start car');
    }
};
car.start();

// Example of the imperative programming paradigm
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Example of the declarative programming paradigm
[1, 2, 3].forEach((num) => console.log(num));

// Example of Math.floor()
console.log( Math.floor(4.7) );
console.log( Math.floor(-4.7) );

// Example of Math.random()
console.log(Math.random());
// Generate a random integer between 0 and 9
console.log( Math.floor(Math.random() * 10));

// Example of Math.pow()
console.log(Math.pow(2, 3));
console.log(2 ** 3);

// Example of Number()
console.log( Number("123") );
console.log( Number("123abc") );
console.log( Number(true) );

// Example of parseInt()
console.log( parseInt("123") );
console.log( parseInt("123abc") );
console.log( parseInt("abc123") );

// Example of parseFloat()
console.log( parseFloat("123.45") );
console.log( parseFloat("123.45abc") );
console.log( parseFloat("abc123.45") );

// Example of working with objects
const person = { name: 'Steven', favoriteLanguage: 'JavaScript' };
const personStr = JSON.stringify(person);
console.log(JSON.parse(personStr));

// Example of Map
const map = new Map();

// Add key-value pairs
map.set("name", "Steven");
map.set(7, "Favorite number");
map.set(true, "Yes");

// Access values
console.log( map.get("name") );
console.log( map.get(7) );
console.log( map.get(true) );

// Check if a key exists
console.log( map.has("name") );

// Delete a key-value pair
map.delete(7);
console.log( map.has(7) );

// Iterate through Map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Get the size of the Map
console.log( map.size );

// Example of Set
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // Duplicate, will be ignored
set.add('Hello');
set.add(true);

// Check if a value exists
console.log( set.has(1) );
console.log( set.has(3) );

// Delete a value
set.delete(2);
console.log( set.has(2) );

for (const value of set) {
    console.log(value);
}

try {
    throw new Error('An error occurred');
} catch (error) {
    console.error(error.message);
}

// console.log - General output
console.log('Hello World');
console.log("The value of x is:", 42);

let newUser = { name: 'Steven', favoriteLanguage: 'JavaScript' };
console.log('newUser', newUser);

// console.table()
let students = [
    { name: 'John', grade: "A" },
    { name: 'Jane', grade: "A-" },
    { name: 'Sam', grade: "B" },
];
console.table(students);

// console.count()
function greet(name) {
    console.count("Greet function called");
    console.log(`Hello, ${name}`);
}

greet("Steven");
greet("Bob");
greet("Steven");

// console.time() and console.timeEnd() - measures execution time
console.time("Loop Timer");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += 1
}

console.timeEnd("Loop Timer");

