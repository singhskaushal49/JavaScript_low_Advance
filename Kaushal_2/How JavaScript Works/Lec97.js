// lexical environment, scope chain

const lastName = "Singh";

const printName = function(){
  const firstName = "Kasuhal";
  function myFunction(){
    console.log(firstName);
    console.log(lastName);
  }
  myFunction()

}
printName();