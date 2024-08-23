// 2015 / es6
// class keyword
// class are fake

class CreateUser{
  constructor(firstName, lastName, email, age, address){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
   }

   about(){
      return '${this.firstName} is ${this.age} years old.';
   }
   is18(){
     return this.age >= 18;
   }
   sing(){
     return "la la la la ";
   }

}


const user1 = new CreateUser('Kaushal','Singh','singhskaushal49@gmail.com', 18 ,'my address');
const user2 = new CreateUser('Rashi','Singh','singhsRashi49@gmail.com', 19 ,'my address');
const user3 = new CreateUser('mohit','Singh','singhsmohit49@gmail.com', 17 ,'my address');
// console.log(Object.getPrototypeOf(user1));