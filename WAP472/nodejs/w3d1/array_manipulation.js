// 1. Create Array empty/some elements,

let array1 = [];
let array2 = ['I', 'love', 'meditating'];

// 2. Update Array - change the value of element at nth position,
array1 = ['Who', 'am', 'I'];
array2[2] = "Surfing";

// 3. Delete Item - remove the element at nth position
array1[2] = null;
array2[1] = null;

// 4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
// should be changed independently without changing the Others)
array1 = [];
array2.forEach(item => {
    item == null ? array1.push("love"): array1.push(item);
});
console.log(array1);
// 5. Get subset of array
console.log(array1.slice(1,2));
// 6. Length of array
console.log(array1.length)
// 7. Splice/slice/concat
array1.splice(2, 1, "Diving", "and", "Swimming");
console.log(array1);

let array3 = array1.concat(...array2);
console.log(array3);


