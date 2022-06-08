var object = require("./object_exercise");
var array = require("./array_exercise");

let numArray = [1, 2, 3, 4, 2, 13, 2, 13, 8, 9];
let typeArray = [50,"apple",{a:1}];

// Array Exercise
console.log("\n**Array Exercise**\n");
console.log("Odd numbers : " , array.oddNumbers(numArray));
console.log("Even numbers : " , array.evenNumbers(numArray));
console.log("Divisible By Four numbers : " , array.divisibleByFour(numArray));

console.log("Sum of Divisible By Four numbers : " , array.sumDivisibleBy4(numArray));
console.log("Sum Odd numbers : " , array.sumOddNumbers(numArray));
console.log("Sum Even numbers : " , array.sumEvenNumbers(numArray));

console.log("Unique numbers : " , array.uniqueNumbers(numArray));
console.log("Type of elements : ", array.typeOfElements(typeArray));

console.log("After Destructure : ", array.destructureArray(typeArray));

console.log("First Odd index (using findIndex) : " , array.firstOddFindIndex(numArray));
console.log("First Odd index (using custom method) : " , array.firstOddIndex(numArray));

console.log("String to array : (Luzan Baral)" , array.stringToArray("Luzan Baral"));

// Object Exercise

let objArray = {a:1, b:[1,2], c:"string", d:{x:1,y:2}};
let objWithA = [{a:1,b:2},{a:2,b:4}];
let persons = [{name:'Ram',age:16}, {name:'Lakshman',age:15}];
console.log("\n**Object Exercise**\n");
console.log("Object to array: ", object.convertObjectToArray(objArray));
console.log("Get object with prop a: ", object.getObjectWithA(objWithA));
console.log("Find Oldest Person: ", object.findOldestPerson(persons));
console.log("Find Oldest Object: ", object.findOldest(persons));
console.log("Age between 16 to 17: ", object.ageBetween(persons));
