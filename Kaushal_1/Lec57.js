// map method
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//   return index;
// });
// console.log(squareNumber);

const user = [
  {firstName: "Kaushal", age: 23},
  {firstName: "mohit", age: 21},
  {firstName: "nitish", age: 22},
  {firstName: "garima", age: 20},
]

const userName = user.map((user)=>{
  return user.firstName;
});

console.log(userName);