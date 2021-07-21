'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
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
};

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // }, ==> can now write it as below:

  order(starterIndex, mainIndex) {
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delisious pasta with ${ing1}, ${ing2}, ${ing3} `);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// ============================================================================================================

// const properties = Object.keys(openingHours);
//
// let openStr = ` We are open on ${properties.length} days:`;
//
// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);
//
// // property valies
//
// const values = Object.values(openingHours);
// console.log(values);
//
// const entries = Object.entries(openingHours);
// console.log(entries);
//
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open ${open}, and close at ${close}`);

// ============================================================================================================
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
//
//
//
//
// // can be out of hand if we have deeply nested properties.
//
// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
//
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant?.openingHours);
//
// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// for (const day of days) {
//   //console.log(day);
//   restaurant.openingHours[day];
//   const open = restaurant.openingHours[day]?.open;
//
//   if (open == undefined) {
//     console.log(`On ${day}, we are not open`);
//   } else {
//     console.log(`On ${day}, we open at ${open}`);
//   }
// }

//
// // Mehods, can check if the method exists
//
// console.log(restaurant.order?.(0, 2) ?? 'Method does not exist'); // nullish coalescing
//
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//
// // arrays
// const users = [{ name: 'James', email: 'hi@gmail.com' }];
//
// console.log(users[3]?.name ?? 'User array Empty');

// ============================================================================================================

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//
// for (const item of menu) console.log(item);
//
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
//
// for (const [i, el] of menu.entries()) {
//   console.log(`${[i + 1]}: ${el}`);
// }

// console.log([...menu.entries()]);

// ============================================================================================================

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
//
// const newArr = [1, 2, ...arr];
// console.log(newArr);
//
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Building new Array
// console.log(newMenu);
//
// // copy Array
//
// const mainMenuCopy = [...restaurant.mainMenu];
//
// // join 2 arrays
//
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
//
// // iterables: arrays, strings, maps, sets. Not Objects
//
// const str = 'James';
// const letter = [...str, '', 's.'];
// console.log(letter);
// console.log(...str);
// // console.log(`${...str} Morillo`);
//
// // const ingredient = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt(' Ingredient 2?'),
// //   prompt(' Ingredient 3?'),
// // ];
//
// // console.log(ingredient);
// //
// // restaurant.orderPasta(...ingredient);
//
// //Objects
//
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Jamesss' };
// console.log(newRestaurant);

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

// Rest pattern and paramters
//SPread, bc on the right side of "="
// const arr = [1, 2, ...[3, 4]];
//
// //Rest pattern because on the left hand side
//
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
//
// console.log(pizza, risotto, otherFood);
//
// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//
// // functions
//
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//
//   return sum;
// };
//
// console.log(add(2, 3));
// console.log(add(5, 3, 7, 2), add(8, 2, 5, 3, 4, 1, 3));
//
// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

// ============================================================================================================

// Use ANY data type, return any data type, short-circuiting

// shortcircuiting OR operator
// console.log('---- OR ----');
// console.log(3 || 'James');
// console.log('' || 'James');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //  ==> first truthy is 'Hello', therefore short circuit the operation
//
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);
//
// console.log('---- AND ----');
// console.log(0 && 'James'); // ==> Short circuit at the first false == > Output: 0
// console.log(7 && 'James'); // ==> All true, then the last true will be outputted ==> 'James'
//
// console.log('Hello' && 23 && null && 'James'); // ==> Short circuit at null
//
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
//
// // if block same as below
//
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ============================================================================================================

// Nullish coalescing operator
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// ============================================================================================================

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // Question 1
//
// const [players1, players2] = game.players;
//
// // Question 2 - Make use of rest syntax
//
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
//
// // Question 3
//
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
//
// // Question 4
//
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
//
// // Question 5
//
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
//
// console.log(team1, draw, team2);
//
// // Question 6
// const players = ['Davies', ' Muller', ' Lewandowski', ' Kimmich'];
// const printGoals = function (...players) {
//   // rest parameters
//   console.log(`${players.length} scored the goals, they are ${players}`);
// };
// printGoals(...players); // take note this needs a spread operator

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
