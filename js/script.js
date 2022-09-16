// JavaScript 1 - Module 2
// Lesson Task 1 Questions

// Question 1
// Create a function called receivingFunction which accepts one argument.
//Inside this function check if the argument is a function, and if it is, call the function.
// Create another function called callbackFunction which logs the string: "I am a callback function".
// Call receivingFunction and pass callbackFunction into it as an argument.

function receivingFunction(argument) {
    if (typeof argument === "function") {
        argument();
    } else {
        console.log("The argument is not a function");
    }
}

function callbackFunction() {
    console.log("I am a callback function");
}

receivingFunction(callbackFunction);

//Fasit:

// function receivingFunction(callback) {
//     if (typeof callback === "function") {
//         callback();
//     } else {
//         console.log("The argument is not a function");
//     }
// }

// const callbackFunction = function () {
//     console.log("I am a callback function");
// };

// receivingFunction(callbackFunction);

// Question 2
// Convert the following for loop to a forEach loop.
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];
for (let i = 0; i < prizes.length; i++) {
    console.log(`Prize ${i + 1}: ${prizes[i]}`);
}

// const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function (item, index) {
    console.log(`Prize ${index + 1}: ${item}`);
});

// Question 3
// Write code that waits 5 seconds before logging the string:
//I waited 5 seconds before executing.
//Store the amount of seconds (5 initially) in a variable so it can be easily changed.

const countSeconds = 2;
function waitingSentence() {
    console.log(`I waited ${countSeconds} seconds before executing.`);
}

setTimeout(waitingSentence, countSeconds * 1000);

// Question 4
// Write code that logs the numbers 1 to 4 every 1.5 seconds and then stops.

let counter = 0;

function iCanCount() {
    counter++;

    if (counter === 4) {
        clearInterval(iCanAlsoCount);
    }
    console.log(counter);
}

const iCanAlsoCount = setInterval(iCanCount, 1500);
