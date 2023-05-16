// Objects as arguments
//class Car{

//    constructor(model, year, color){
//        this.model = model;
//        this.year = year;
//        this.color = color;
//    }
//}

//const car1 = new Car("Mustang", 2023, "red",);
//const car2 = new Car("Corvette", 2024, "blue");
//const car3 = new Car("Lambo", 2022, "yellow",);

//changeColor(car3, "gold");
//displayInfo(car3);

//function displayInfo(car){
//    console.log(car.model);
//    console.log(car.year);
//    console.log(car.color);
//}

//function changeColor(car, color){
//    car.color = color;
//}

// Arrays of objects
class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

const cars = [car1, car2, car3, car4];
console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);
cars[0].drive();
cars[1].drive();
cars[2].drive();

startRace(cars);
function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

// Anonymous Objects - Objects without a name;
//                     Not directly referenced;
//                     Less syntax. No need for unique names
class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}
// "Normal Way"
// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("2", "Hearts");
// let card6 = new Card("2", "Spades");
// let card7 = new Card("2", "Diamonds");
// let card8 = new Card("2", "Clubs");
// let cards = [card1, card2, card3, card4, card5, card6, card7, card8];
let cards = [new Card("A", "Hearts"),
            new Card("A", "Spades"),
            new Card("A", "Diamonds"),
            new Card("A", "Clubs"),
            new Card("2", "Hearts"),
            new Card("2", "Spades"),
            new Card("2", "Diamonds"),
            new Card("2", "Clubs")];
console.log(cards[0].value + ' ' + cards[0].suit);
cards.forEach(card => console.log(`${card.value} ${card.suit}`));

// Error = object with a description of something went wrong
try{
    let x = window.prompt("Enter a number");
    x = Number(x);
    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";
    console.log(`${x} is a number`)
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes"); // finally always executes (obviously)
}

// setTimeout() = invokes a function after a number of milliseconds
//                asynchronous function (doesn't pause execution)
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price); // 3 second wait
let timer2 = setTimeout(secondMessage, 6000); // 6 second wait
let timer3 = setTimeout(thirdMessage, 9000); // u get it
function firstMessage(item, price){
    alert(`Buy this ${item} for ${price}!`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO IT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying! <3`)
}

// setInterval() = like setTimeout() but repeated
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}