const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'coconut',
      quantity: 10,
    },
  ],
  user: {
    loggedIn: true,
  },
};
//
const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
console.log(state);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

console.log(state == stateDeepClone);

console.log('Welcome!');
console.log('Welcome! Home');
console.log('Welcome! 123123');

const newFeature = function () {
  console.log(`Welcome to the application!`);
};
