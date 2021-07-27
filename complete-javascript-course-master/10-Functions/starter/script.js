'use strict';

// ==============================================================================================================

const flight = 'LH234';
const james = {
  name: 'jaMeS',
  passport: 232131532,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 232131532) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, james);
// console.log(flight);
// console.log(james);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(james); //manipulated and then the object now aller wrong passport.
checkIn(flight, james);

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
