const myLabel = document.getElementById("myLabel");

 
update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "pm" : "am"
        hours = (hours % 12) || 12;
        if (seconds < 10){
            seconds = `0${seconds}`;
        }
        return `${hours}:${minutes}:${seconds} ${amOrpm}`
    }
}

// console.time() = start a timer you can use to track how long an operation takes
console.time("Response time");
alert("Click the ok button");
setTimeout(() => console.log("Hello!"), 3000) // timeEnd only works with synchronous code
console.timeEnd("Response time");


// promises = object that encapsulates the result of an asynchronous operation
//            lets asynchronous methods return values as if they were synchronous methods
//            promise to return something in the future
//            the STATE is 'pending' then; 'resolved' or 'rejected'
//            the RESULT is what can be returned
// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;
//     if (fileLoaded){
//         resolve("File loaded");
//     }
//     else {
//         reject("File NOT loaded")
//     }
// });
// promise.then(value => console.log(value)).catch(error => console.log(error));


const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});
wait(3000).then(() => console.log("Thanks for waiting!"));

// async = makes a function return a Promise
// async function loadFile(){
//     let fileLoaded = false;
//     if (fileLoaded){
//         return "File loaded";
//     }
//     else {
//         throw "File NOT loaded";
//     }
// }
loadFile().then(value => console.log(value)).catch(error => console.log(error));

// await = makes an async function wait for Promise
//         useful if you have to wait for multiple asynchronous functions
//         using await, no longer need to use .then()
async function loadFile(){
    let fileLoaded = false;
    if (fileLoaded){
        return "File loaded";
    }
    else {
        throw "File NOT loaded";
    }
}
async function startProcess(){
    try{
    let message = await loadFile(); // await only valid in an asynch functions
    console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();

