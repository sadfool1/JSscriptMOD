// function logger() {
//   console.log("My name is James");
// }
//
// logger();

// ==============================================================================================================
// function fruitProcessor (apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
//
// const appleJuice = fruitProcessor(5,0);
//
// console.log(appleJuice);


// ==============================================================================================================
// Function expression

// const calAge2 = function (birthYear) {
//   return 2037 - birthYear
// }
//
// // Arrow function
//
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
//
// // console.log(age3)
//
// // Case for more than 1 line of code & more than 1 parameter
//
// const yearsUntilRetirement  = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//
//   return `${firstName} retires in ${retirement} years`;
// }
//
// console.log(yearsUntilRetirement(1991, "James"))
// console.log(yearsUntilRetirement(1980, "Bob"))

// ==============================================================================================================
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
//
// function fruitProcessor (apples, oranges) {
//
//   const orangePieces = cutFruitPieces(oranges);
//   const applePieces = cutFruitPieces(apples);
//
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges. This constitutes ${applePieces} apple slices and ${orangePieces} orange slices `;
//   return juice;
// }
//
// console.log(fruitProcessor(2,3))

// ==============================================================================================================

// CODING CHALLENGE


// calcAverage = (param1, param2, param3) => (param1 + param2 + param3) / 3
//
//
// const dolphinAve = calcAverage(85,54,41);
// const koalaAve = calcAverage(23, 34, 27);
//
// function checkWinner (dolphinAve, koalaAve) {
//   if (koalaAve >= 2 * dolphinAve) {
//     return `Koalas won (${koalaAve} vs ${dolphinAve})`
//   } else if (dolphinAve >= 2*koalaAve) {
//     return `dolphins won (${dolphinAve} vs ${koalaAve})`
//   } else return `Nobody won. (${dolphinAve} vs ${koalaAve}) `
// }
//
// console.log(checkWinner(dolphinAve, koalaAve));

// ==============================================================================================================

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
//
// const friends = ['Michael', 'Steven', 'Peter']
//
// console.log(friends);
//
// const years = new Array (1991, 1973, 1882);
//
// console.log(years);
// console.log(friends[0])
// const firstName = 'James'
// const james = [firstName, 'Morillo', 2037-1991, 'teacher', friends]
// console.log(james);
// console.log(james.length);
//
// Excercise
//
// const years = new Array (1991, 1973, 1882);
//
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// ==============================================================================================================

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);
//
// friends.unshift('John');
// console.log(friends);
//
// friends.pop();
// console.log(friends);
//
// friends.shift();
// console.log(friends);

// ==============================================================================================================

// CODING CHALLENGE
//
// myTip = function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15
//   } else {
//     return bill * 0.2
//   }
// }
//
// bills = [125, 555, 44]
//
// tips = [myTip(bills[0]), myTip(bills[1]), myTip(bills[bills.length - 1])]
// total = [125+tips[0], 555+tips[1], 44+tips[tips.length - 1]]
// console.log(tips)
// console.log(total)

// ==============================================================================================================
