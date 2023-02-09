// Checked Property
document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox")
    const visaButton = document.getElementById("visaButton")
    const mastercardButton = document.getElementById("mastercardButton")
    const paypalButton = document.getElementById("paypalButton")

    if(myCheckBox.checked){
        console.log("You are subscribed")
        if(visaButton.checked){
            console.log("You are paying with Visa!")
        }
        else if(mastercardButton.checked){
            console.log("You are paying with Mastercard!")
        }
        else if(paypalButton.checked){
            console.log("You are paying with PayPal!")
        }
        else {
            console.log("You need to select a payment type!")
        }
    }
    else{
        console.log("You are not subscribed")
    }
} 

// AND OR Logical Operators
let temp = 15; 
let sunny = false;
if(temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}
if(!sunny){
    console.log("It is cold outside.")
}
else{
    console.log("It is hot outside.")
}
// && for AND, || for OR, ! for NOT

// Do While
let userName; 
do{
    userName = window.prompt("Enter your name");
}while(userName == "")
console.log("Hello ", userName)
// Does something, checks condition, repeats if condition is true

// BREAK vs. CONTINUE
// Break = breaks out of the loop
// continue = ignores the curret iteration of the loop

// RETURN
// Returns a value back to the place where you invoked a function

//Ternary Operator 
// Shortcut for an 'if/else statement'; Takes 3 operands
// condition ? expressionIfTrue : expressionIfFalse
let adult = checkAge(21);
console.log(adult)
function checkAge(age){
    return age >= 18 ? true : false;
}

// LET VS VAR
// let = variables are limited to block scope {}
// var = variables are limited to a function(){}
// global variables should be used with let because var will change window properties

// Template Literals 
// uses `; allows embedded variables and expressions
let username = "Luffy";
let items = 3;
let total = 75;
// Standard Way
// console.log("Hello", username);
// console.log("You have", itens, "items in your cart");
// console.log("You're total is $", total);
let text =
`Hello ${username}
You have ${items} items in your cart
Your total is $${total}`    
console.log(text);

// toLocaleString()
// returns a string with a language sensitive representation of this number
let myNum = 123456.789;
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(myNum);

// Rest Parameters
// represeents an indefinite number of parameters
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
console.log(sum(a, b, c, d, e));
function sum(x, y, ...numbers){ // Uses a spread operator which unpacks the array
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total;
}
// Callback 
// a function passsed as an argument to another function
// ensures that a function isn't going to run before a task is done
sum2(2, 3, displayConsole);
function sum2(x, y, callBack){ // callBack arg could be named anything
    let result = x + y;
    callBack(result);
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}

// array.forEach() 
// executes a provided callback function for each array element
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element){
    console.log(element)
}

// array.map()
// executes a provided callback function once for each array element AND creates a new array
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}

// array.filter()
// creates a new array with all elementsh that pass the test provided by a function
let ages = [18, 16,21, 17, 19, 90];
let adults = ages.filter(checkAge);
adults.forEach(print);
function checkAge(element){
    return element >=18;
}
function print(element){
    console.log(element);
}

// array.reduce()
// reduces an array to a single value
let prices = [5, 10, 15, 20, 25];
let total2 = prices.reduce(checkOut);
console.log(`The total is is $${total2}`);
function checkOut(total2, element){
    return total2 + element;
}

// array.sort() for number array
let grades = [100 , 50, 90, 60, 80, 70];
grades = grades.sort(descendingOrder);
grades.forEach(print);
function descendingOrder(x, y){
    return y - x; // (Compare Function)
}
function ascendingOrder(x, y){
    return x - y;
}
function print(element){
    console.log(element);
}

// Arrow Function
// compact alternative to a traditional function expression
const greeting = (userName2) => console.log(`Hello ${userName2}`);
greeting("Kyle");
// another example
let grades2 = [100, 50, 90, 60, 80, 70];
grades2.sort((x, y) => y - x);
grades2.forEach((element) => console.log(element));

// Shuffling An Array 
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
shuffle(cards);
console.log(cards[0]); // shows only one card
cards.forEach(card => console.log(card)); // shows the whole deck

function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length); // generates random number only up to the array length
        currentIndex-=1; // decreases currentIndex

        let temporary = array[currentIndex]; 
        array[currentIndex] = array[randomIndex]; // as currentIndex decreases, a random new index is generated for that index
        array[randomIndex] = temporary; // new index becomes the temporary
        }
  
    return array;
    }

// Map - holds key value pairs
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);
let shoppingCart = 0;
shoppingCart += store.get("t-shirt"); // get method
console.log(shoppingCart);
store.set("hat", 40); // set method - adding a piar
store.delete("hat"); // delete method
console.log(store.has("hat")); // has method - boolean to see if it is in the map
console.log(store.size); // size method
store.forEach((value, key) => console.log(`${key} $${value}`));

