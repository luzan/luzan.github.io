// 1. Array – Find array of Odd/Even/Numbers divisible by 4

function oddInArray(array) {
    return array.filter(x => x %2 != 0)
}
console.log(oddInArray([1,2,3,4,2]))

function evenInArray(array) {
    return array.filter(x => x %2 == 0)
}
console.log(evenInArray([1,2,3,4,2]))

function divisibleByFour(array) {
    return array.filter(x => x %4 == 0)
   // return array.reduce((x, y) => y%4 == 0 ? [...x, y] : y,[]);
}
console.log(divisibleByFour([1,2,3,4,8]));

// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
function sumDivisibleBy4(array) {
    return array.reduce((prev, current) => current%4 == 0 ? prev += current : prev, 0)
}
console.log(sumDivisibleBy4([1,2,3,4,5,8,12,16]))

function sumEvenNumbers(array) {
    return array.reduce((prev, current) => current%2 == 0 ? prev += current : prev, 0)
}
console.log(sumEvenNumbers([1,2,3,4,5,8,12,16]))

function sumOddNumbers(array) {
    return array.reduce((prev, current) => current%2 == 1 ? prev += current : prev, 0)
}
console.log(sumOddNumbers([1,2,3,4,5,8,12,16]));

// 3. Find Unique Numbers in the Array
function uniqueNumbers(array) {
    return array.reduce((prev, current) => {
        prev.findIndex(a => a == current) > -1 ? prev.splice(prev.findIndex(a => a == current)) : [...prev, current];
    }, [])
}

console.log(uniqueNumbers([1,1,2,3,4,5,6,6,7,8,8,88,9]));
// 4. Transform Array to print the type of elements in the Array 
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]
// 5. Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}
// 6. Find Index of first odd number - (using array method and also not
// using array methods)
// 7. Convert string to array and array to string. don’t use split() and
// toString()

module.exports = {
    oddInArray,
    evenInArray,
    divisibleByFour,
    sumDivisibleBy4,
    sumEvenNumbers,
    sumOddNumbers,
    uniqueNumbers
 }