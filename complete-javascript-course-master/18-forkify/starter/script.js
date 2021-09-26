import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
console.log('Hello world');

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
  ],
  user: {
    loggedIn: True,
  },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(state);
