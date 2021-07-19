'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// ============================================================================================================

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Visa del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   address: 'Visa del sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });
// const arr = [2, 3, 4];
//
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//
// const [x, y, z] = arr; // destructuring assignment
// console.log(x, y, z);
//
// let [main, , secondary] = restaurant.categories; // skip element in the middle
// console.log(main, secondary);
//
// // const temp = main;
// // main = secondary;
// // secondary = temp; // changing main and secondary
// // console.log(main, secondary);
//
// [main, secondary] = [secondary, main]; // do not need a temporary
// console.log(main, secondary);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
//
// // nested destructuring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
//
// console.log(i, j, k);
// ============================================================================================================
// const { name, openingHours, categories } = restaurant; // creates new variables
// console.log(name, openingHours, categories);
//
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
//
// console.log(restaurantName, hours, tags);
//
// const { menu = [], starterMenu: starters = [] } = restaurant; // giving starterMenu a new name with a default value incase it is undefined
//
// console.log(menu, starters);
//
// // mutating variabeles
//
// let a = 111;
// let b = 999;
//
// const obj = { a: 23, b: 7, c: 14 };
//
// ({ a, b } = obj);
// console.log(a, b);
//
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ============================================================================================================
