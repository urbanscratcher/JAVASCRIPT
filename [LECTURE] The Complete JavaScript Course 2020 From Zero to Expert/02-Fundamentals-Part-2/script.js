"use strict";
/* 
// Always activate strict Mode to capture visible errors

// ---32. Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`; //error : reserved words
// const private = 534;
// const if = 23;


// ---33. Functions
function logger() {
  console.log(`My name is Joun`);
}

// invoking / running / calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);
console.log(num);

// ---34. FUNCTION DECLARATIONS VS. EXPRESSIONS

// [Function declaration]
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1989); // 먼저 선언하고 그 다음 function 선언 ok
console.log(age1);

// [Function expression]
// a function w/o a name : an anonymous function producing a value
// functions are not type but value in JS
// const age2 = calcAge2(1989);
// 이후에 function expression X
// Uncaught ReferenceError: Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1989);

console.log(age1, age2, age1 === age2);

// ---35. Arrow Functions

// Arrow function
// -you don't need to use {} or return
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1989);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1989, `Joun`));
console.log(yearsUntilRetirement(1980, `Bob`));

// ---36. FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  // DRY principle! Don't Repeat Yourself
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// ---36. REVIEW FUNCTIONS

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${birthYear}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1989, `Joun`));
console.log(yearsUntilRetirement(1970, `Mike`));
 */

//  ---38. Coding Challenge #1
