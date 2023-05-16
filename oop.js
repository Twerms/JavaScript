// Object =  group of properties and methods
//           properties = what an object has
//           methods = what an object can do
//           use . to access properties/methods

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function (){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive : function (){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}


console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();

// This = reference to a particular object
const car3 = {
    model: "Mustang",
    color: "red",
    year: 2023,
    drive : function (){
        console.log(`You drive the ${this.model}`);
    }
};
const car4 = {
    model: "Corvette",
    color: "blue",
    year: 2024,
    drive : function (){
        console.log(`You drive the ${this.model}`);
    }
};
car3.drive();
car4.drive();

// Class = a blueprint for creating objects
//         use a constructor for unique properties

class Player{
    score = 0;
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}
const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;
console.log(player1.score);
player1.pause();
player1.exit();

// Constructor = a special method of a class
//               accepts arguments and assigns properties

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}
const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

// Static = belongs to the class, not the objects created from the class
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility functions
class Car{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1; // Car. instead of this.
    }
    static startRace(){
        console.log("3... 2... 1... GO!");
    }
}
const carz1 = new Car("Mustang");
const carz2 = new Car("Corvette");
const carz3 = new Car("BMW");
console.log(Car.numberOfCars);
Car.startRace();

// Inheritance = a child class can inherit all the methods and properties from another class
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.eat();
hawk.sleep();

// Super = refers to parents class; commonly used to invoke constructor of a parent class

class Animal2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit2 extends Animal2{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish2 extends Animal2{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk2 extends Animal2{
    constructor(name, age, flySpeed){
        super(name, age);

        this.flySpeed = flySpeed;
    }
}

const rabbit2 = new Rabbit2("rabbit", 1, 40);
const fish2 = new Fish2("fish", 2, 80);
const hawk2 = new Hawk2("hawk", 3, 200);
console.log(rabbit2.name);
console.log(rabbit2.age);
console.log(rabbit2.runSpeed);


// Get = bind an object property to a function when that property is accessed
//       increases data security;
// Set = ''  when that property is assigned a value;
class Car2{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power} hp`;
    }
    get gas(){
        return `${this._gas} L`;
    }
    set gas(value){
        if (value >50){; 
            value = 50;
        }
        else if (value < 0){
            value = 0;
        }
        this._gas = value; 
    }
}
let car = new Car2(400);
car.gas = 60;
console.log(car.power); // treat GET function as if it's a property
console.log(car.gas); 