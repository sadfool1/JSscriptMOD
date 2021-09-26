'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags[0]}" />
      <div class="country__data">
        <h3 class="country__name">${data.capital}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          Number(data.population) / 1000000
        ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
};
//
// const getCountryData = function (country) {
//   // using the old school way of doing AJAX
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//
//   request.addEventListener('load', function () {
//     // await load
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//     // render country 1
//     renderCountry(data);
//
//     // get neighbour country
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//
//     // AJAX call country 2
//
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
//
// // getCountryData('usa');
// getCountryData('malaysia');
// getCountryData('usa');

// promises

// const request = fetch('https://restcountries.com/v2/name/singapore');

// two promises here

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // returning a promise
//     .then(function (response) {
//       console.log(response);
//       return response.json(); // json is a method available for all response coming from fetch function
//       // .json is a promise too Asynchronous
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     }); //handling a fulfilled promise
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // returning a promise
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//
//       if (!neighbour) return;
//       // whatever we return in the promise is the fulfilled value
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'));
// };
// getCountryData('southkorea');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // returning a promise
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ()${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//
//       if (!neighbour) return;
//       // whatever we return in the promise is the fulfilled value
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} has appeared!`);
//       renderError(`Something went wrong ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       // not always useful. always something to happen
//       countriesContainer.style.opacity = 1;
//     });
// };
//
// btn.addEventListener('click', function () {
//   getCountryData('asdasd');
// });

// console.log('Test start');
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');
//
// const lotteryPromise = new Promise(function (resolve, reject) {
//   // how we encapsulate any asynchronous behavior into a promise.
//
//   console.log('Lottery draw is happening!');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       // a fulfilled promise
//       resolve('You Win!');
//     } else {
//       // a failed promise
//       reject(new Error('You lost your money!'));
//     }
//   }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
//
// // promisifying setTimeout
//
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
//
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Error took too long'));
//     }, sec * 1000);
//   });
// };
//
// Promise.race([getJSON(`https://restcountries.com/v2/name/usa`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Promise.race is actually very useful
// to prevent against never ending promises
// or also very long running promises.
// For example, if your user
// has a very bad internet connection,
// then a fetch requests in your application
// might take way too long to actually be useful.

// Promise.allSettled , takes in an array of promises
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));
//
// Promise.all([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res)); //.all will short circuit when there is an error

// Promise.any [ES2021]
//
// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));
// Promise.any takes in an array of multiple promises and this one will then return the first fulfilled promise and it will simply ignore rejected promises. Unless all the promises are rejected

//
