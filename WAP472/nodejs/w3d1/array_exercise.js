// 1. Array – Find array of Odd/Even/Numbers divisible by 4

function oddNumbers(array) {
    return array.filter(x => x % 2 != 0)
}
// console.log(oddNumbers([1, 2, 3, 4, 2]))

function evenNumbers(array) {
    return array.filter(x => x % 2 == 0)
}
// console.log(evenNumbers([1, 2, 3, 4, 2]))

function divisibleByFour(array) {
    return array.filter(x => x % 4 == 0)
    // return array.reduce((x, y) => y%4 == 0 ? [...x, y] : y,[]);
}
// console.log(divisibleByFour([1, 2, 3, 4, 8]));

// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4
function sumDivisibleBy4(array) {
    return array.reduce((prev, current) => current % 4 == 0 ? prev += current : prev, 0)
}
// console.log(sumDivisibleBy4([1, 2, 3, 4, 5, 8, 12, 16]))

function sumEvenNumbers(array) {
    return array.reduce((prev, current) => current % 2 == 0 ? prev += current : prev, 0)
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 8, 12, 16]))

function sumOddNumbers(array) {
    return array.reduce((prev, current) => current % 2 == 1 ? prev += current : prev, 0)
}
// console.log(sumOddNumbers([1, 2, 3, 4, 5, 8, 12, 16]));

// 3. Find Unique Numbers in the Array
function uniqueNumbers(array1) {
    let uniqueArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (uniqueArray.indexOf(array1[i]) == -1) {
            uniqueArray.push(array1[i]);
        }
        else {
            uniqueArray.splice(uniqueArray.indexOf(array1[i]), 1);
        }
    }
    return uniqueArray;
}

// console.log(uniqueNumbers([1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 88, 9]));
// 4. Transform Array to print the type of elements in the Array 
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]
function typeOfElements(typearr) {

    let resultofTypes = [];

    for (let i = 0; i < typearr.length; i++) {
        resultofTypes[i] = typeof (typearr[i]);
    }

    return resultofTypes;
}
// console.log(typeOfElements([1, 2, true, 'c', "show"]))
// 5. Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}}

function destructureArray(array) {
    let arrObj = [];

    for (let i = 0; i < array.length; i++) {
        arrObj[typeof (array[i]) + "" + i] = array[i];
    }

    return arrObj;
}
// console.log(destructureArray([50, "apple", { a: 1 }]))

// 6. Find Index of first odd number - (using array method and also not
// using array methods)

function firstOddFindIndex(array) {
    var index = array.findIndex((element) => {
        return element % 2 == 1;
    });
    return index;
}
// console.log(firstOddFindIndex([1, 2, 3, 4, 8]));

//without array method
function firstOddIndex(array){
    for (let i = 0; i < array.length; i++)
        {
            if (array[i] % 2 == 1)
                return i;
        }
        return -1;
}
// console.log(firstOddIndex([6, 2, 3, 4, 8]));

// 7. Convert string to array and array to string. don’t use split() and
// toString()
function stringToArray(str) {
    let arr = [''];
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            j++;
            arr.push('');
        } else {
            arr[j] += str.charAt(i);
        }
    }
    return arr;
}
// console.log(stringToArray("Luzan Baral"));

module.exports = {
    oddNumbers,
    evenNumbers,
    divisibleByFour,
    sumDivisibleBy4,
    sumEvenNumbers,
    sumOddNumbers,
    uniqueNumbers,
    typeOfElements,
    destructureArray,
    firstOddFindIndex,
    firstOddIndex,
    stringToArray
}