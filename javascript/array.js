
// Q1 calculate length of array and console log
// expected output is 3
const z = [3,5,2]
console.log(z.length)
  
// Q2 reverse the array and console log
// xpected output [2,5,3]
const a =[3,5,2]
console.log(a)
arr.reverse()

// /Q3 join the array and console log
// expected output 352
const arr =[3,5,2]
console.log(arr.join(''))
//Q4 Remove the last element from the array and log the modified array to the console
const array=[3,5,2]
const remove=array.pop()
console.log(array)

// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]
function areAllEven(arr) {
    return arr.every(num => num % 2 === 0);
}
if (areAllEven(num)) {
    console.log("All even");
} else {
    console.log("all odd");
}
//  Find the index of a specific element in the array. Log the index to the console. 
// expected output: 3
const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;
console.log(allNum.indexOf(searchElement))