'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////// CODING CHALLENGe//////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const dataPusher = dogs.forEach((dog, i) => {
  const recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  const maxRecommendedFood = recommendedFood * 1.1;
  const minRecommendedFood = recommendedFood * 0.9;

  dog['recommendedFood'] = recommendedFood;
  dog['maxRecommendedFood'] = maxRecommendedFood;
  dog['minRecommendedFood'] = minRecommendedFood;
});

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(
  `${ownersEatTooMuch.join(
    ' and '
  )}"s dogs eat too much \n while ${ownersEatTooLittle
    .join()
    .replaceAll(',', ' and ')}"s dog"s eat too little`
);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////// CODING CHALLENGe//////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// console.log([1, 2, 3, 4, 5, 6, 7]);
//
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
//
// x.fill(1, 3);
// console.log(x);
//
// // Array here is a function in this case
// const t = Array.from({ length: 7 }, () => 1);
// console.log(t);
//
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
//
// console.log(z);
//
// const randomDiceRolls = Array.from(
//   { length: 100 },
//   (_, i) => Math.trunc(Math.random() * 6) + 1
// );
// console.log(randomDiceRolls);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const owners = ['Jonas', 'James', 'John', 'Adam'];
//
// // 1. Excercise 1 Get total balance
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => (sum = sum + cur), 0);
//
// // console.log(bankDepositSum);
//
// // 2. Excercise 2 Find all movement > 1000
//
// const oneThousand = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
//
// // OR
//
// const oneThousand2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? acc + 1 : acc), 0);
// // console.log(oneThousand2); // accumulator here is the counter in this function
//
// // OR
//
// const oneThousand3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
//
// // 3. To create an objec to create the total sum of deposit and total sum of withdrawals
//
// const summer = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, cur) => {
//       cur > 0 ? (acc.deposits += cur) : (acc.withdrawal += cur);
//       return acc;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
//
// // OR
//
// const summer2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (acc, cur) => {
//       // cur > 0 ? (acc.deposits += cur) : (acc.withdrawal += cur);
//       acc[cur > 0 ? 'deposits' : 'withdrawal'] += cur;
//       return acc;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
//
// console.log(summer2);
//
// // 4.
// // This is a nice title -> This Is a Nice Title
//
// const myString = 'This is a nice title';
//
// const myFunction = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//
//   const exceptions = ['a', 'an', 'the', 'and', 'but', 'on', 'in', 'with', 'or'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//
//   return capitalize(titleCase);
// };
//
// // console.log(myFunction('this is a nice long title'));
// // console.log(myFunction('this is a NICE long title'));
// // console.log(myFunction('THIS is a nice LOng title and Here'));
// // console.log(myFunction('And this is A nice long title with an EXamPle'));

// const withdrawal = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur < 0 ? acc + cur : acc), 0);
//
// console.log(withdrawal);

// console.log(owners.sort());
// console.log(owners); // changes the arrays
//
// console.log(movements.sort()); // negative numbers go first. because this is a string not a number
//
// // return < 0, A, B
// // return > 0, B, A
//
// // soring ascending
//
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// // soring descending
//
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements);
//
// // to be more elegant,
//
// movements.sort((a, b) => a - b);
// console.log(movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// const arr = [[123, 2333, 33], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // depth max is 1
// const arrDeep = [[[1, 3, 1, 3], 123, 2333, 33], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(2)); // can specify into the deeply nested array
//
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
//
// console.log(overallBalance);
//
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
//
// console.log(overallBalance2);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, lol, map) {
//   console.log(`${lol}:${value}`);
// });

// set

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// // -ve is withdrawal, +ve is deposit
//
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }
//
// // now using foreach
// console.log('====forEac=====');
//
// movements.forEach(function (movement) {
//   //require a callback function
//   // it will keep looping with a function callback
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });
// 0 : function(200)
// 1: function (450)

/////////////////////////////////////////////////
//slice
// let arr = ['a', 'b', 'c', 'd'];
// arr.slice(2);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log([...arr]);
//
// // SPLICE - mutates and changes the array
//
// console.log(arr.splice(2)); //  ['c', 'd']
// console.log(arr); // ['a', 'b']
//
// console.log(arr.splice(0, 1));
// console.log(arr);
//
// // reverse - mutates and changes the array
//
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
//
// console.log(arr2.reverse());
// console.log(arr2);
//
// // concat - does not mutate the original array
//
// const letters = arr.concat(arr2); //adds the array
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// // join
//
// console.log(letters.join(' - '));
