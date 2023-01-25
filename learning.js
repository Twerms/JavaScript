let firstName = "Bro";
let age1 = 21;
let student = true;

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p1").innerHTML = "You are " + age1 + "years old";
document.getElementById("p1").innerHTML = "Enrolled: " + student;

// User Input
let username; 
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

//  Type Conversion = change datatypes of a value to another
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log("Happy Birthday! You are ", age, " years old")
let x; 
let y;
let z;
x = Number("pizza"); // Will show NaN (not a number)
y = String(3.14);
z = Boolean ("pizza");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// Math
let a = 3.14;
let b = 5;
let c = 9;
let maximum;
let minimum;
x = Math.round(x);
x = Math.floor(x); // Round down
x = Math.ceil(x); // Round up
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x); // Absolute value
x = Math.random() // Returns floating-point; Example: x = (Math.random() * 6) -> Random number from 0-5
// ^ Use Math.floor to return an integer
maximum = Math.max(a, b, c);
minimum = Math.max(a, b, c);
x = Math.PI;
console.log(x);
