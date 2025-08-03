// Map : Map also returns an array
let arr = [1,2,3,4]
let result = arr.map((e)=>e*2)
console.log(result);

// Filter : Return a new array that fulfill the following filter condition
let result1 = arr.filter((el)=>el>=2)
console.log(result1);

// Reduce : Reduces an array to a single value by applying function to each element
let arr2 = [10,20,30,40]
let sum = arr2.reduce((prev,el)=>prev+el, 0)
console.log(sum);

