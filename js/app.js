// DAY 3 HOMEWORK 

//1. Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log("Counting up from " + i);
// }

//Get Even
// for (let i = 0; i <= 200; i+=2) {
//     console.log("Even numbers only! Logging: ")
// }

//2. Excited Kitten

// const response = ["human...why you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away"];

// for (let i = 0; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!")
//  if (i % 2 === 0){
//     const randomNumberUpToThree = Math.floor(Math.random()*3)
//     console.log(response[randomNumberUpToThree]);
// }
// }

//3. FizzBuzz();
// for (let number = 0; x <= 20; number++) {
// if (number % 3 === 0 && x % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (number % 3 === 0) {
//     console.log("fizz");
//   } else if (number % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log("x");
// }}


//4. GETTING TO KNOW YOU
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// shahzad.splice(0, 1, 'Gameboy');
// console.log(shahzad);


// Daniel just had his birthday; change Daniel's array to 
// reflect him being a year older. Don't just hard code 187--pretend 
// that you don't know that his age is 186, and write your code to just make 
// him a year older than whatever age he was.

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

// Reuben left Durham 5 years ago to come to Chicago. 
// Remove "Durham" from Reuben's array and add "Chicago". 
// (Note: remove and then add is different from simply changing the value at that index.)

// Jim could be literally anywhere in the world. Remove "All cities" from his 
// array, then pick any 3 cities you like, and add them to Jim's array. If you did it 
// in 3 lines of code that's fine, but see if you can do it in one line of code

// Bonus: Whoops! Jim is actually only allowed to be in one of two cities. 
// Whatever the first of the 3 cities for Jim is now, remove it from the array using .splice()


//5.

//6.

//7.

//8.

//9. Multiple of 3 and 5

// let multiples = 0;
// for (let i = 0; i < 1001; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         multiples = multiples += i;
//     }
// }
// console.log(multiples);