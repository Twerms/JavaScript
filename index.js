// First JavaScript code
console.log("Hello World");

let name = 'Francis'; 
console.log(name);
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

let firstName = 'Francis', lastName = 'Belocura';

let interestRate = 0.3; 
interestRate = 1;
console.log(interestRate);
// Only use const instead of let if variable will not be reassigned

// Primitive Types
let name2 = 'Francis'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstNumber = undefined;
let selectedColor = null;

//Reference Types
let person = {
    name: 'Francis',
    age: '19'
}; // Object Literal
// Dot Notation
person.name = 'Frank';
// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';
console.log(person);

let selectedColors = ['red', 'blue']; // Array Literal
selectedColors[2] = 'green'; // Objects in an array are dynamic
console.log(selectedColors[0]);
console.log(selectedColors.length)

function greet(name, lastName) { // Function Literal
    console.log('Hello' + name + ' ' + lastName); 
}
greet('John'); 
greet('Mary', 'Steinfeld'); 

function square(number) {
    return number * number;
}
let number = square(2)
console.log(number)

