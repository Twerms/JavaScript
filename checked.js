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