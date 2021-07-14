// 'use strict';
//
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'steven';
//       const str = `Oh and you're millenial, ${firstName}`;
//       console.log(str);
//     }
//
//     function add(a, b) {
//       return a + b;
//     }
//
//     output = 'New OUtput';
//     console.log(output);
//
//     // console.log(add(2, 3));
//     // console.log(str); // will not work as const is block scoped.
//   }
//
//   printAge();
//   return age;
// }
//
// const firstName = 'James';
// calcAge(1991);

var me = 'James';
let job = 'teacher';
const year = 1991;

// functions

function AddDEcl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
