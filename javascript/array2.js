//console.log the maximum number of an array
//expectedd output 5
const arr= [3,5,2]
let max= Math.max(arr)
console.log(max)
//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]
const elemntToRemove = 2
const a=[3,5,2]
 const modifiedArr=ar.filter(element=>element!==elemntToRemove)
 console.log(modifiedArr)

//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr1=[3,5,2]
const arr2 = [5,21,32]
let common= []
for(let element of arr1){
   if(arr2.includes(element)){
    common.push(element)
   }
}
console.log(common)