let answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value
    guesses += 1;
    if (guess == answer){
        alert(`${answer} is the #. It took you ${guesses} guesses`)
        guesses = 0; // resets guesses
        answer = Math.floor(Math.random() * 10 + 1); // finds a new number to guess
    }
    else if(guess < answer){
        alert("Too small");        
    }
    else{
        alert("Too large!");
    }
}

// Arrays
let fruits = ["apple", "orange", "banana"];
fruits.push("lemon");    // add an element to the end
fruits.pop();            // removes last element
fruits.unshift("mango"); // removes element from beginning
fruits.shift();          // removes element from beginning
console.log(fruits);
// Different ways to loop an array
let prices = [5, 10, 15, 20, 25];
for(let i = 0; i < prices.length ; i+=1){ 
    console.log(prices[i]);
}
// OR
for(let price of prices){
    console.log(price);
}
//.sort() = sorts array in alphabetical order