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
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// shahzad.splice(0, 1, 'Gameboy');
// console.log(shahzad);

// console.log(daniel[1]);
// daniel[1] += 1
// console.log(daniel[1]);

// console.log(ryan[2]);
// ryan.splice(2, 1, 'Gotham City');
// console.log(ryan[2])

// console.log(reuben);
// reuben.pop();
// console.log(reuben);
// reuben.push('Chicago');
// console.log(reuben);

// console.log(jim);
// jim.pop();
// console.log(jim);
// jim.push('Nome', 'Djibouti', 'Atlantis')
// console.log(jim);
// jim.splice(2, 1);
// console.log(jim);


// 6. NINJA TURTLES
// let ninjaTurt = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let i = 0; i < ninjaTurt.length; i++) {
//     let currentNT = ninjaTurt[i];
//     console.log(currentNT.toUpperCase());
// }

// 7. 

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

const kristynsShoe = kristynsCloset.shift();
console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

console.log("Kristyn will be wearing her " + kristynsCloset[0] + ", just her " + kristynsCloset[1] + " and her favorite, her " + kristynsCloset[2] + ".");
console.log("Thom will be wearing his " + thomsCloset[0][0] + ", his " + thomsCloset[1][0] + " and his " + thomsCloset[2][2] + ".");

//9. Dirty Laundry

//10. Multiple of 3 and 5

// let multiples = 0;
// for (let i = 0; i < 1001; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         multiples = multiples += i;
//     }
// }
// console.log(multiples);