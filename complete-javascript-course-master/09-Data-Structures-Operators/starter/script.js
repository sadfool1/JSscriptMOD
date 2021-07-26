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
// console.log('a+very+nice+string'.split('+')); //divided with +
// console.log('James Elijah'.split(' ')); // split by space
// //restructuring
// const [firstName, lastName] = 'James Morillo'.split(' ');
// console.log(firstName, lastName);
//
// const newName = [' Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
//
// const capitalizeName = function (name) {
//   const names = name.split(' '); //split by space
//   console.log(names);
//   const namesUpper = [];
//   for (const letter of names) {
//     //namesUpper.push(letter[0].toUpperCase() + letter.slice(1));
//     // same result with
//     namesUpper.push(letter.replace(letter[0], letter[0].toUpperCase()));
//   }
//
//   console.log(namesUpper.join(' '));
// };
//
// capitalizeName('jessica ann smith davies');
// capitalizeName('james elijah braganza MORIllo');
//
// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+')); //adding an element to the start and end of string until have the length desired
// console.log('james'.padStart(20, '+'));
//
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCard(63657836));
//
// console.log(maskCreditCard(2312312313123123));
// console.log(maskCreditCard('2132321312312354'));
//
// // repeat
// const message2 = 'Bad Weather... All departures delayed...';
// console.log(message2.repeat(4));
//
// const planstInLine = function (n) {
//   console.log(`There are ${n} planes in the line ${'✈️'.repeat(n)}`);
// };
//
// planstInLine(4);
// planstInLine(400);

// ============================================================================================================

// const airline = 'TAP Air Portugal';
//
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
//
// // fix capitalisation
//
// const passenger = 'jAmES';
//
// const passengerLower = passenger.toLowerCase();
// const passsengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
//
// console.log(passsengerCorrect);
//
// // Check email input
//
// const email = 'hello@james.io';
// const loginEmail = '  Hello@jaMeS.io            \n'; // \n is enter character
//
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(email === normalizedEmail);
//
// // replace parts of strings
//
// const priceGB = '289,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);
//
// const announcement =
//   'All passenger come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate')); // only replaces the first element
//
// const announcementNew =
//   'All passenger come to boarding door 23. Boarding door 23!';
// console.log(announcementNew.replaceAll('door', 'gate'));
//
// console.log(announcement.replace(/door/g, 'gate')); // Regular expression, g means global
//
// //booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('Airbus')); //  ==> Output: true
// console.log(plane.includes('Boeing')); //false
// console.log(plane.startsWith('Air')); //false as it does not start with Air
//
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('part of the New Airbus family');
// }
//
// //practice excercise
//
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('You are not allowed onboard');
//   } else {
//     console.log('welcome aboard');
//   }
// };
//
// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// ============================================================================================================

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
//
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
//
// console.log(airline.length);
// console.log('B737'.length);
//
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
//
// console.log(airline.indexOf('portugal'));
//
// console.log(airline.slice(4)); // 4 is the index number and it will extract onwards.
//
// console.log(airline.slice(4, 7)); // 4 is the index number and it will extract onwards and stops at index 7
//
// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
//
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal, getting the last word, starting w the last space (so we add + 1 to remove it)
//
// console.log(airline.slice(-2)); // start counting from the end
//
// console.log(airline.slice(-2)); // start counting from the end
// console.log(airline.slice(1, -1)); // cuts off the last character. ==> AP Air Portuga
//
// const checkMiddleSeat = function (seat) {
//   // B & E are the middle seats, want to check our seat has B or E.
//
//   const s = seat.slice(-1);
//   console.log(
//     `${
//       s == 'B' || s == 'E' ? 'You got middle Seat' : 'You are not middle seat'
//     }`
//   );
// };
//
// checkMiddleSeat('11B');
// checkMiddleSeat('3E');
// checkMiddleSeat('23C');
//
// console.log(new String('James'));
// console.log(typeof new String('James'));
// console.log(typeof new String('James').slice(1));

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
//
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
//
// // QUESTION1 :
// const scorer = game.scored;
// console.log(scorer);
//
// for (let score in scorer) {
//   let newScorer = parseInt(score);
//   console.log(`Goal ${newScorer + 1}: ${scorer[score]}`);
// }
//
// // ======================================== Answer Model ========================================
//
// // for (const [i, player] of game.scored.entries())
// //   console.log(`Goal ${i + 1}: ${player}`);
// // ==============================================================================================
//
// // QUESTION2 :
//
// const odds = game.odds;
// const oddEntries = Object.entries(odds);
// let total = 0;
// let avg = 0;
//
// let startStr = '';
//
// for (const [key, value] of oddEntries) {
//   total += value;
//   avg = total / 3;
// }
//
// startStr += `The average of the odds is ${avg}`;
// console.log(startStr);
//
// // ======================================== Answer Model ========================================
// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);
// // ==============================================================================================
//
// // QUESTION3 :
//
// for (let [team, value] of oddEntries) {
//   //console.log(team, typeof team, typeof game.team1);
//   if (team === 'x') {
//     console.log(`Odd of draw: ${game.odds.x}`);
//   } else {
//     console.log(
//       `Odd of victory ${team === 'team1' ? game.team1 : game.team2}: ${value} `
//     );
//   }
// }
//
// // ======================================== Answer Model ========================================
//
// // for (const [team, odd] of Object.entries(game.odds)) {
// //   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
// //   console.log(`Odd of ${teamStr} ${odd}`);
// // }
// // ==============================================================================================
//
// // Bonus :
//
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
//
// console.log(scorers);

// // ==============================================================================================

// SETS

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
//
// console.log(ordersSet);
// console.log(typeof ordersSet);
//
// for (const order of ordersSet) console.log(order);
//
// const staff = [
//   'Waiter',
//   'Chef',
//   'Waiter',
//   'Manager',
//   'Chef',
//   'Waiter',
//   'Cleaner',
// ];
//
// const staffUnique0 = [new Set(staff)];
// console.log(staffUnique0);
// const staffUnique1 = [...new Set(staff)]; // newly constructed array, unpack using spread operator
// console.log(staffUnique1);

// // ==============================================================================================

// Maps
//
// const rest = new Map(); // easiest is to create an empty loginEmail
// rest.set('name', 'Classico Ristorante');
// rest.set(1, 'Firenze, Italy');
//
// console.log(rest.set(2, 'Lisbon, Portugal'));
//
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open:D')
//   .set(false, 'We are closed');
//
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));
//
// const time = 21;
// rest.get(
//   console.log(
//     time > rest.get('open') && time < rest.get('close')
//       ? rest.get(true)
//       : rest.get(false)
//   )
// );
//
// // Note: The key value pairs are strict to the data type
//
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);
//
// console.log(rest.get([1, 2])); // this is undefined as the 2 arrrays are not the same arrays. They are note the same object in the HEAP
// // to mitigae this, need to use const arr = [1,2]

// // ==============================================================================================

// maps iterations

// const question = new Map([
//   ['question', ' What is the best programming langauage in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);
//
// console.log(question);
//
// //Convert object to maps
// console.log(Object.entries(openingHours));
//
// //Quiz app
//
// console.log(question.get('question'));
//
// const hoursMap = new Map(Object.entries(openingHours));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
//
// const answer = 3;
//
// console.log(question.get(question.get('correct') === answer));
//
// //convert map into an arrays
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//
// //QUESTION 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
//
// //QUESTION 2
//
// gameEvents.delete(64);
// console.log(gameEvents);
//
// //QUESTION 3
// const averageEvent = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${averageEvent} minutes`);
//
// //QUESTION 4
// for (const [time, events] of gameEvents) {
//   if (time <= 45) {
//     console.log(` [FIRST HALF] ${time}: ${events}`);
//   } else {
//     console.log(` [SECOND HALF] ${time}: ${events}`);
//   }
// }
