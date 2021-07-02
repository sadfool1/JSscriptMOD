// function logger() {
//   console.log("My name is James");
// }
//
// logger();

// function fruitProcessor (apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
//
// const appleJuice = fruitProcessor(5,0);
//
// console.log(appleJuice);

// Function expression

const calAge2 = function (birthYear) {
  return 2037 - birthYear
}

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

// console.log(age3)

// Case for more than 1 line of code & more than 1 parameter

const yearsUntilRetirement  = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "James"))
console.log(yearsUntilRetirement(1980, "Bob"))
