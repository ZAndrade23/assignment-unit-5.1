console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = { 
  firstName: 'Zach',
  lastName: 'Andrade',
  shoeCount: 13,
  favThreeFoods: ['pizza', 'empanadas', 'burgers']
  // TODO - add properties here
};
console.log('A little about me:', me);

me.hasSiblings = 'Steph, Maria, Kile, Juan';
console.log(me);

let favThreeFoods = ['pizza', 'empanadas', 'burgers'];
console.log(me);
/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName +  me.lastName;
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
me.favThreeFoods = [0];
console.log('first fav food', me.favThreeFoods);

me.favThreeFoods = [2];
console.log('last fav food', me.favThreeFoods);








/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/me.shoeCount = 13;
console.log(me.shoeCount);
  me.shoeCount += 1;
  console.log(me.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor ='baby blue';
console.log(me.favoriteColor);
console.log(me);