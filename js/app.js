// DAY 3 HOMEWORK 

//Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log("Counting up from " + i);
// }

//Get Even
// for (let i = 0; i <= 200; i+=2) {
//     console.log("Even numbers only! Logging: ")
// }

//Excited Kitten
// for (let i = 0; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!")
// } if (i % 2 === 0) {
//     console.log("...human...why you taking pictures of me?");
//     console.log("...the catnip made me do it...");
//     console.log("...why does the red dot always get away...");
// }
//look up Math.random

//Fizzbuzz
 fizzBuzz = function() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0)
            console.log("Fizz");
        else if (i % 5 === 0)
            console.log("Buzz");
        else 
            console.log(i);
    }
}

fizzBuzz();