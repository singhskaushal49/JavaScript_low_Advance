// nested destructuring
const users = [
  {userId: 1, firstName: 'Rashi', gender: 'female'},
  {userId: 2, firstName: 'Kaushal', gender: 'male'},
  {userId: 3, firstName: 'nitish', gender: 'male'},
]

const[{firstName: user1firstName, userId}, {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);