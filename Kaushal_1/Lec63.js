// some method

const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai
// true

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart = [
  {productId: 1, productIdName: "mobile", price: 12000},
  {productId: 2, productIdName: "laptop", price: 22000},
  {productId: 3, productIdName: "tv", price: 35000},
  {productId: 3, productIdName: "macbook", price: 25000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);