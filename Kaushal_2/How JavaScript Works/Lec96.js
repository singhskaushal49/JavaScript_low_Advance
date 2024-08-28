// function execution context

let foo = "foo";
console.log(foo);
function getFulName(firstName, lastName){
   console.log(arguments);
   let myVar = "var inside func";
   console.log(myVar);
   const fullName = firstName + " " + lastName;
   return fullName;
}

const personName = getFulName("Kaushal","Singh");
console.log(personName);