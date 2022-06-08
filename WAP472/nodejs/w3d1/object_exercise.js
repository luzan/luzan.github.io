let obj = {a:1, b:[1,2], c:"string", d:{x:1,y:2}};

//1. Convert Object to array
function convertObjectToArray(myobj) {
    let objentries = Object.entries(myobj);
    let objArr = [];
    for (let [key, value] of objentries) {
        let x;
        if (Array.isArray(value)) {
            value = value.reduce((accumulator, element) => {

                return accumulator += element;
            }, '');

            x = key + "" + value;
            objArr.push(x);
        }
        else if (typeof (value) == 'object') {

            value = convertObjectToArray(value)  
            for (let y of value) {
                objArr.push(key + "" + y);
            }

        } else {
            x = key + "" + value;
            objArr.push(x);
        }
    }
    return objArr;
}
// console.log(convertObjectToArray(obj));

//console.log(typeof({x:1,y:2}));


//2. Minify Object
// Get objects that has properties of name, ‘a’ 
//[{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]

let objarr = [{a:1,b:2},{a:2,b:4}];

function getObjectWithA(objarr) {
    let resultArr = [];

    for (let elem of objarr) {

        let x = new Object();

        for (let k in elem) {

            if (k == 'a') {
                x.a = elem[k];
                resultArr.push(x)
            }
        }
    }
    return resultArr;
}

// console.log("Minified Object Array: ", getObjectWithA(objarr));

function mySort(x, y) {
    return ((x.age < y.age) ? -1 : ((x.age > y.age) ? 1 : 0));
}

//3. Get the Oldest person age 
let persons = [{name:'Ram',age:16}, {name:'Lakshman',age:15}];

function findOldestPerson(persons) {
    let sortArr = persons.sort(mySort);
    let oldest_person_age = sortArr[sortArr.length - 1].age;

    return oldest_person_age;
}

// console.log("Oldest person age", findOldestPerson(persons));

//4. Get the Youngest person name

function findOldest(persons) {
    let sortArr = persons.sort(mySort);
    let youngest_person_name = sortArr[0].name;

    return youngest_person_name;
}

// console.log("Youngest person name:", findOldest(persons));

//5. Find the person whose age is between 16 and 17 years.

function ageBetween(persons) {
    let resultArr = [];

    for (let elem of persons) {

        if (elem.age >= 16 && elem.age <= 17) {
            resultArr.push(elem)
        }
    }

    return resultArr;
}
// console.log("Youngest person name:", ageBetween(persons));

module.exports = {
    convertObjectToArray,
    getObjectWithA,
    findOldestPerson,
    findOldest,
    ageBetween
}