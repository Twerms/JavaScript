// The Date object is used to work with dates & times

let date = new Date();
//let date = new Date(0);
//let date = new Date(2023, 0, 1, 2, 3, 4, 5);
//let date = new Date("January 1, 2023 00:00:00");
/*
let year = date.getFullYear();
let dayOfMonth = date.getDate(); 
let dayOfWeek = date.getDay(); 0 = Sunday
let month = date.getMonth(); 0 = January
let hour = date.getHours(); Military time
let minutes = date.getMinutes(); Minutes after hour
let seconds = date.getSeconds(); Seconds after minute
let ms = date.getMilliseconds(); Milliseconds after second
*/
/*
date.setFullYear(2024); 
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

// date = date.toLocaleString(); // Displays in a more readable way
document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Since Jan is 0
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am"; // Ternary to determine if am or pm

    hours = (hours % 12) || 12; // Change to standard time using modulus 

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}