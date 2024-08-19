const userMethods = {
  about : function(){
      return '${this.firstName} is ${this.age} years old.'; 
  },
  is18 : function(){
      return this.age >= 18;
  },
  sing : function(){
      return 'toon na na na la la';
  }
}
function createUser(firstName, lastName, email, age, address){
     const user = Object.create(userMethods); // {}
     user.firstName = firstName;
     user.lastName = lastName;
     user.email = email;
     user.age = age;
     user.address = address;
     return user;
}

const user1 = createUser('Kaushal','Singh','singhskaushal49@gmail.com', 9 , "myaddress");
const user2 = createUser('Rashi','Singh','singhsRashi49@gmail.com', 19 , "myaddress");
const user3 = createUser('mohit','Singh','singhsmohit49@gmail.com', 17 , "myaddress");
console.log(user1);
console.log(user1.about());
// console.log(user3.sing());