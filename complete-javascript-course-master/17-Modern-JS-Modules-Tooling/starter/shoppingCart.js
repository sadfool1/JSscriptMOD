'use strict';
// exporting moduke
console.log('exporting module');

const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// can only do the export in top level code, cannot be inside an if block

// if(true) {
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//
// } NOTE: This will create an error

const totalPrice = 237;
const totalQuantity = 20;

export { totalPrice, totalQuantity, addToCart };
