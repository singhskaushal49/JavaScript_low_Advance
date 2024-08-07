// object inside array
// very useful in real world applications

const users = [
  {userId: 1, firstName: 'Kaushal', gender: 'male'},
  {userId: 2, firstName: 'Rashi', gender: 'female'},
  {userId: 3, firstName: 'Prakhar', gender: 'male'},
]
for(let user of users){
  console.log(user,firstName);
}