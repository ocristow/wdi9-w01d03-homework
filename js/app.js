// DAY 3 HOMEWORK 

//1. Easy Going
// for (let i = 1; i <= 20; i++) {
//     console.log("Counting up from " + i);
// }

//2. Get Even
// for (let i = 0; i <= 200; i+=2) {
//     console.log("Even numbers only! Logging: ")
// }

//3. Excited Kitten

// const response = ["human...why you taking pictures of me?", "the catnip made me do it", "why does the red dot always get away"];

// for (let i = 0; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!")
//  if (i % 2 === 0){
//     const randomNumberUpToThree = Math.floor(Math.random()*3)
//     console.log(response[randomNumberUpToThree]);
// }
// }

//4. FizzBuzz();


// for (let number = 0; number <= 20; number++) {
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (number % 3 === 0) {
//     console.log("fizz");
//   } else if (number % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log("x");
// }}


//5. GETTING TO KNOW YOU
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

shahzad.splice(0, 1, 'Gameboy');
console.log(shahzad);

console.log(daniel[1]);
daniel[1] += 1
console.log(daniel[1]);

console.log(ryan[2]);
ryan.splice(2, 1, 'Gotham City');
console.log(ryan[2])

console.log(reuben);
reuben.pop();
console.log(reuben);
reuben.push('Chicago');
console.log(reuben);

console.log(jim);
jim.pop();
console.log(jim);
jim.push('Nome', 'Djibouti', 'Atlantis')
console.log(jim);
jim.splice(2, 1);
console.log(jim);


//6.

//7. Yell at the ninja turtles


// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// Use a for loop to call .toUpperCase() on each of them and print out the result.

// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, 
// make the letters alternate back and forth between uppercase and lowercase.

// let ninjaT = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let i = 0; i < ninjaT.length; i++) {
// let currentNT = ninjaT[i].split("");
// console.log(currentNT);
// }

//Create an array with the ninja turtles.
//Cut them all out of the array so that they are their own objects, store them in different variables.
//Split their letters apart and perform the toUppercase() on the letters.
//







// ninTurt = [Donatello, Leonardo, Raphael, Michaelangelo];
// for (let i = 0; i < ninTurt.length; i++){
//     let thisTurt = ninTurt[i].split("");
//     //console.log(thisTurt[3]);
//     // try split and join!!!
//         for (let t = 2; t < thisTurt.length; t += 2){
//             let thisTurtLetter = thisTurt[t];
//             thisTurtLetter.toUpperCase();
//             console.log(thisTurtLetter);
























//8. Return of the Closets

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//9. Dirty Laundry

//10. Multiple of 3 and 5

// let multiples = 0;
// for (let i = 0; i < 1001; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         multiples = multiples += i;
//     }
// }
// console.log(multiples);