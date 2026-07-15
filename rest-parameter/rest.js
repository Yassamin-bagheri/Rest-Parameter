// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by boundling them into an array

//                   spread = expand an array into seperate elements
//                   rest = boundles seperate elements into an array

// rest parameter
// function openFridge(...foods) {
//   console.log(foods);
// }

// spread parameter
// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5)
// console.log( foods);

// Example 2. calculating sum

// function sum(...numbers) {
//   let result = 0;

//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 4, 5, 6, 9);

// console.log(`Your total is: ${total}`);


// calculating average

// function getAverage(...numbers) {
//   let result = 0;

//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const totalAve = getAverage(1, 3, 5, 9, 20)

// console.log(`Your average is ${totalAve}`);

// Example 3

function combineStrings(...strings){
  return strings.join(" ")
}

const fullName = combineStrings("Mr", "Spongebob", "Squarepants", "III")

console.log(fullName)

