var testObject = { 'one': 1, 'two': 2, 'three': 3 };
console.log(testObject)
localStorage.setItem('myCat', 'Tom');
let retrievedObject = myStorage.getItem('myCat');



console.log(myStorage)
// Put the object into storage
myStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage

console.log('retrievedObject: ', JSON.parse(retrievedObject));