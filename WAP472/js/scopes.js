//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.



// 1. 
let grapes = "green"; 

function fruits(){ 
    return function(message){ 
        return grapes; 
    } 
} 
console.log(fruits()()); // green, reads the value from global scope


// 2. 
let x = 10; 
function globalVar(){ 
    return function(){ 
       return x; 
    } 
} 
x = 20; 
let fn = globalVar(); 

console.log(fn ()); //20, it reads the value from global scope, before function call it was 20.



 

// 3. 
function sport(message){ 
    message = "Hi"; 
    return function(message){ 
        return message; 
    } 
} 

let sportFn = sport("Hello"); 

console.log(sportFn ()); //undefined, sport("Hello") returns a function that requires a message parameter, when we call sportFn() we did not provide a parameter so it returns undefined



 

// // 4. 
function test(x){ 
    x = 10; 
    x++; 
    return function(){ 
        return x++; 
    } 
} 

console.log(test(2)()); // 11, parameter x is 2, then we assign 10 to x, we increase it 1, when it is 11 returning function returns 11, after returning the value 11 it increases 1 more
 
 

// // 5.
function car(){ 
    let color = "white"; 
    function seat(){ 
        let color = "brown"; 
        console.log(color)//___________ doesnt work, it is not called.
    } 
    console.log(color)//white, local variable
} 

car("black") 


// 6. 
function department(){ 
    let numberOfDepartments = 5; 
    console.log(numberOfDepartments); //5, local variable
    function software(){ 
        let language = "javascript"; 
        console.log(language)
    } 
    console.log(language) //language is not defined, even though we called the function software(), it would not work, because it is a local variable.
} 

department() 



 

// // 7. 
function department(language){ 
    let numberOfDepartments = 5; 
    console.log(numberOfDepartments) // 5, local variable
    function software(){ 
        let language = "javascript"; 
        console.log(language);
    } 
    console.log(language) // java, it is from the parameter
} 

department("java"); 