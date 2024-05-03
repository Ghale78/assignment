//given the array, calculate sum of odd numbers using reduce method
const arr =[4,2,3,5]
const oddSum = sumOfOddNumbers(arr)
function sumOfOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0)
    .reduce((place, num) => place + num, 0)
    }
    console.log("Sum of odd", oddSum)