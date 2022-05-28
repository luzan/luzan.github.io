/* runs test to see if expected argument is === to value returned by function2test argument */
// For testing js functions
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

printLines("START!!");
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(a, b) {
    if (a > b) {
        return a;
    } else
        return b;
}
printLines("Checking max.");

console.log(
    "Expected output of max(20,10) is 20  " +
    myFunctionTest(20, max(20, 10))
);
console.log(
    "Expected output of max(40,79) is 79  " +
    myFunctionTest(79, max(40, 79))
);


// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

printLines("Checking max of three.");
console.log(
    "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
    "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
    "Expected output of maxOfThree(23, 2, 9) is 23  " +
    myFunctionTest(55, maxOfThree(23, 2, 9))
);

// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    if (a.length == 0 || a.length > 1) {
        return false;
    } else {
        a = a.toLowerCase();
        if (a == "a" || a == ("e") || a == ("i") || a == ("o") || a == "u") {
            return true;
        }
    }
}

printLines("Checking isVowel.");
console.log(
    "Expected output of isVowel(apple) is false  " +
    myFunctionTest(false, isVowel("apple"))
);
console.log(
    "Expected output of isVowel(a) is true  " +
    myFunctionTest(true, isVowel("a"))
);
console.log(
    "Expected output of isVowel(u) is true  " +
    myFunctionTest(true, isVowel("u"))
);
console.log(
    "Expected output of isVowel(U) is true  " +
    myFunctionTest(true, isVowel("U"))
);
console.log(
    "Expected output of isVowel(c) is false  " +
    myFunctionTest(true, isVowel("c"))
);


// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(a) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}

function multiply(a) {
    var mul = 1;
    for (let i = 0; i < a.length; i++) {
        mul = mul * a[i];
    }
    return mul;
}

printLines("Checking SUM.");
console.log(
    "Expected output of sum([1,2,3,4]) is 10  " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);
console.log(
    "Expected output of sum([1,2,3,4]) is 90  " +
    myFunctionTest(90, sum([1, 2, 3, 4]))
);
printLines("Checking Multiplication.");
console.log(
    "Expected output of multiply([1,2,3,4]) is 24  " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);
console.log(
    "Expected output of multiply([1,2,3,4]) is 90  " +
    myFunctionTest(90, multiply([1, 2, 3, 4]))
);



// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(take) {
    var revStore = "";
    for (let i = take.length - 1; i >= 0; i--) {
        revStore = revStore + take.charAt(i);
    }
    return revStore;
}

printLines("Checking Reverse.");
console.log(
    "Expected output of reverse(apple) is elppa  " +
    myFunctionTest("elppa", reverse("apple"))
);
console.log(
    "Expected output of reverse(apple) is aplpe  " +
    myFunctionTest("aplpe", reverse("apple"))
);


// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(take) {
    if (take.length == 0) {
        return "Length 0";
    }
    var maxLen = take[0].length;
    for (let i = take.length - 1; i >= 0; i--) {
        if (maxLen < take[i].length) {
            maxLen = take[i].length;
        }
    }
    return maxLen;
}

printLines("Checking the longestWord");
console.log(
    "Expected output of findLongestWord([apple, cat, maharajgung, vekx yek]) is 11  " +
    myFunctionTest(11, findLongestWord(["apple", "cat", "maharajgung", "vekx yek"]))
);
console.log(
    "Expected output of findLongestWord([sections, ok, done, now]) is 2  " +
    myFunctionTest(2, findLongestWord(["sections", "ok", "done", "now"]))
);

/* ********************************************************************************************************************** */
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(params, mLen) {
    var filteredArr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i].length > mLen) {
            filteredArr.push(params[i]);
        }
    }
    return filteredArr;
}
printLines("Checking the filter Long words.");
console.log(
    "Expected output of filterLongWords([apple, cat, maharajgung, vekx yek], 3) is [apple,maharajgung,vekx yek]  " +
    arrayEquals(["apple", "maharajgung", "vekx yek"], filterLongWords(["apple", "cat", "maharajgung", "vekx yek"], 3))
);
console.log(
    "Expected output of filterLongWords([sections, ok, done, now], 5) is 5  " +
    arrayEquals(2, filterLongWords(["sections", "ok", "done", "now"], 5))
);


// console.log(filterLongWords(["apple", "ball"],4));
/* ********************************************************************************************************************** */
// Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
// a) multiply each element by 10; 
function multiplyElement(objArr, num) {
    return objArr.map(function (elem, i, array) {
        return elem * num + 3;
    })
}

// b) return array with all elements equal to 3; 
function findSimilarElements(objArr, num) {
    return objArr.filter(function (item, i, arr) {
        return item == num;
    });
};

// c) return the product of all elements;
function reduceByMultiplying(objArr) {
    return objArr.reduce(function (prev, curItem, i, arr) {
        return prev * curItem;
    });
}

console.log(multiplyElement([1, 3, 5, 3, 3], 3));

printLines("Checking multiplyElement findSimilarElements reduceByMultiplying")
console.log(
    "Expected output of multiplyElement([1,3,5,3,3], 10) is [13,33,53,33,33]  " +
    arrayEquals([13, 33, 53, 33, 33], multiplyElement([1, 3, 5, 3, 3], 10))
);

// console.log(findSimilarElements([1,3,5,3,3], 3));
console.log(
    "Expected output of findSimilarElements([1,3,5,3,3], 3) is [3,3,3]  " +
    arrayEquals([3, 3, 3], findSimilarElements([1, 3, 5, 3, 3], 3))
);
console.log(
    "Expected output of reduceByMultiplying([1,3,5,3,3]) is 135  " +
    myFunctionTest(135, reduceByMultiplying([1, 3, 5, 3, 3]))
);


/* ********************************************************************************************************************** */
// const a = [1, 3, 5, 3, 3];
// console.log(reduceByMultiplying(a));

// For index and item finding
// const d2 = a.find(function (elem) { return elem > 1; }); //3
// const d3 = a.findIndex(function (elem) { return elem > 1; }); //1

function printLines(functionMsg) {
    console.log();
    console.log("**********************************************************************************************************************");
    console.log(functionMsg.toUpperCase());
    console.log();
}

function arrayEquals(a, b) {
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])) {
        return "TEST SUCCEEDED - Result array is same as expected.";
    } else {
        return "TEST FAILED.  Expected differs from the provided array.";
    }
}