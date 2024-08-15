// splice method
// start , delete , insert

const myArray = ['item', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert
// myArray.splice(1,0,'inserted item');

// insert and delete
const deleteItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delete item", deleteItem);
console.log(myArray);