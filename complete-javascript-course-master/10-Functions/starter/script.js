'use strict';

// ==============================================================================================================

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
})(); //this is an expression, can Immediately call it

// ==============================================================================================================

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // get the answer
//     const userValue = Number(
//       prompt(
//         'What is your favourite programming language? \n0: JavaScript \n1: Python \n2: Rust \n3: C++ \n(Write option number)'
//       )
//     );
//
//     if (typeof userValue === 'number') {
//       if (userValue >= 0 && userValue <= this.answers.length) {
//         if (userValue === 0) {
//           this.answers[0]++;
//         } else if (userValue === 1) {
//           this.answers[1]++;
//         } else if (userValue === 2) {
//           this.answers[2]++;
//         } else if (userValue === 3) {
//           this.answers[3]++;
//         }
//       } else {
//         console.log('Enter a number 1-3');
//       }
//     } else {
//       console.log('Enter a NUMBER 1-3');
//     }
//
//     const userResult = prompt(
//       'Select how to display result (String or Array)'
//     ).toLowerCase();
//
//     this.displayResults(userResult);
//   },
//
//   displayResults(userResult = 'array') {
//     if (userResult === 'string') {
//       console.log(
//         `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}.`
//       );
//     } else {
//       console.log(this.answers);
//     }
//   },
// };
//
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
//
// poll.displayResults.call({ answers: [5, 2, 3, 3, 3, 1] }, 'string');

// ==============================================================================================================

// // we use bind to create a new function
//
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
// //partial application, basically means we can preset values
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23); // 0.23 is preset value of the rate, has to be the first argument of (rate, value)
//
// console.log(addVAT(100));
//
// //same as below code
//
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
//
// const addVAT2 = addTaxRate(0.23);
//
// console.log(addVAT2(100));

// ==============================================================================================================

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(){}
//   // Use the below instead (more modern)
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };
//
// lufthansa.book('239', 'James');
// lufthansa.book('635', 'John Smith');
//
// console.log(lufthansa.bookings);
// const eurowings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
// };
//
// const book = lufthansa.book; //store into a new function name book
// // book(23, 'Sarah Williams'); // does not work. this keyword points to undefined. this keyword need to be more explicitly.
//
// // Call method
// book.call(eurowings, 23, 'sarah williams'); // regular function call of the this keyword points to undefined (in strict mode). call method will allow us to make the this keyword more explicit
// console.log(eurowings);
//
// book.call(lufthansa, 239, 'Johnny Boy');
// console.log(lufthansa);
//
// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
//
// book.call(swiss, 583, ' Mary Cooper');
// console.log(swiss);
//
// // Apply method, similar to call method
// const flightDAta = [583, 'George Cooper'];
// book.apply(swiss, flightDAta);
// console.log(swiss); //not as used as often now
//
// book.call(swiss, ...flightDAta); //this is the more modern way to put data (using the spread operator)
//
// // bind method
//
// const bookEW = book.bind(eurowings); //return a new function,
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams'); // back to having parameters of just flight number and name
//
// const bookEW23 = book.bind(eurowings, 23); // already preset the flightNum to 23. Therefore the function now only reqwuires to take in the name
// bookEW23('Amelia Lim');
//
// // With Event Listerners
//
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this); //this keyword here is the BUY button on the webpage
//   this.planes++;
//   console.log(this.planes);
// };
//
// // we use bind to create a new function
//
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//
// //partial application, basically means we can preset values
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
//
// const addVAT = addTax.bind(null, 0.23); // 0.23 is preset value of the rate, has to be the first argument of (rate, value)
//
// console.log(addVAT(100));
//
// //same as below code
//
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
//
// const addVAT2 = addTaxRate(0.23);
//
// console.log(addVAT2(100));

// ==============================================================================================================
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
// const greeterHey = greet('Hey');
// greeterHey('James');
// greeterHey('Steven');
//
// greet('Hello')('James');
//
// // const arrowGreet = greeting => {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };
// //
// // const arrowGreeter = arrowGreet('Hey');
// // arrowGreeter('Johnson');
//
// // CONVERT into arrow function
//
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('James');

// ==============================================================================================================
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
//
// console.log(oneWord('Hello World'));
//
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
//
// // This is the higher order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
//
// transformer('JavaScript is the Best!', upperFirstWord); //passing in the function but not calling it. Therefore it is a callback
//
// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('Hi');
// };
//
// document.body.addEventListener('click', high5);
//
// ['James', 'Bob', 'Adam'].forEach(high5);
// ==============================================================================================================

// const flight = 'LH234';
// const james = {
//   name: 'jaMeS',
//   passport: 232131532,
// };
//
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//
//   if (passenger.passport === 232131532) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport');
//   }
// };
//
// // checkIn(flight, james);
// // console.log(flight);
// // console.log(james);
//
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
//
// newPassport(james); //manipulated and then the object now aller wrong passport.
// checkIn(flight, james);

// OLD way of setting default parameters. this is the ES5 way
// ==============================================================================================================
// const bookings = [];
//
// // ES6
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   numPassengers = numPassengers || 1; // falsy value then it chooses 1
//   price = price || 199;
//
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
//
// createBooking('LH123');
// ==============================================================================================================
