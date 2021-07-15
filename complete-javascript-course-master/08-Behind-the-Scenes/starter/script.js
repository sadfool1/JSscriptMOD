"use strict";
// //
// // function calcAge(birthYear) {
// //   const age = 2037 - birthYear;
// //
// //   function printAge() {
// //     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// //     console.log(output);
// //
// //     if (birthYear >= 1981 && birthYear <= 1996) {
// //       var millenial = true;
// //       const firstName = 'steven';
// //       const str = `Oh and you're millenial, ${firstName}`;
// //       console.log(str);
// //     }
// //
// //     function add(a, b) {
// //       return a + b;
// //     }
// //
// //     output = 'New OUtput';
// //     console.log(output);
// //
// //     // console.log(add(2, 3));
// //     // console.log(str); // will not work as const is block scoped.
// //   }
// //
// //   printAge();
// //   return age;
// // }
// //
// // const firstName = 'James';
// // calcAge(1991);
//
// // var me = 'James';
// // let job = 'teacher';
// // const year = 1991;
// //
// // // functions
// //
// // function AddDEcl(a, b) {
// //   return a + b;
// // }
// //
// // const addExpr = function (a, b) {
// //   return a + b;
// // };
// //
// // const addArrow = (a, b) => a + b;
//
// // console.log(this);
// //
// // const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// //
// // calcAge(1991);
// //
// // const calcAgeArrow = birthYear => {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };
// //
// // calcAgeArrow(1991);
// //
// // const james = {
// //   year: 1994,
// //   calcAge: function () {
// //     console.log(this);
// //   },
// // };
// //
// // james.calcAge();
// //
// // const matilda = {
// //   year: 2017,
// // };
//
// // const james = {
// //   firstName: "James",
// //   year: 1994,
// //   calcAge: function () {
// //     console.log(2037 - this.year);
// //
// //     // Solution 1
// //     // const self = this; // this is preserved
// //     //
// //     // const isMillenial = function () {
// //     //   console.log(self);
// //     //   console.log(self.year >= 1981 && self.year <= 1996);
// //     // };
// //
// //     // SOlution 2
// //
// //     const isMillenial = () => {
// //       console.log(this);
// //       console.log(this.year >= 1981 && this.year <= 1996);
// //     }; // In this solution, the arrow function inherits the this keyword from its parent
// //     // function above
// //
// //     isMillenial();
// //   },
// //
// //   greet: () => console.log(`hey ${this.firstName}`),
// // };
// //
// // james.greet();
// // james.calcAge();
//
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
//
// addExpr(2, 3);
// addExpr(2, 3, 3, 12);
//
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
//
// addArrow(2, 3, 4);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);
//
// const me = {
//   name: " James",
//   age: 30,
// };
//
// const friend = me;
// friend.age = 27;
// console.log("friend:", friend);
// console.log("me:", me);

// Source of confusion?

// primitive types
let lastName = "Williams";

let oldLastName = lastName;

lastName = "Davies";

console.log(lastName, oldLastName);

// referrence types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davies";

// console.log("Before Marriage:", jessica);
// console.log("After Marriage:", marriedJessica);

// copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davies";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
jessicaCopy.family.push("James");

console.log("Before Marriage:", jessica2);
console.log("After Marriage:", jessicaCopy);
