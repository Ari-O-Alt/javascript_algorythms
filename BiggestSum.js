
const numbersArray = [100, 53, 41, 22, 72, 101, 3]
 
const findBiggestSum = (array, num) => {
  if(array.length === 0 || array.length < num) {
    return null
  }
 
  let tempSum = 0;
  let maxSum = 0;
  
  for(let i = 0; i < num; i++) {
    maxSum += array[i]
  }
  
  tempSum = maxSum
  
  for(let j = num; j < array.length; j++) {
    tempSum = tempSum - array[j - num] + array[j]
    maxSum = Math.max(maxSum, tempSum)
    
  }
  return maxSum
}
 
// TESTS
console.log(findBiggestSum(numbersArray, 4)) // 216
console.log(findBiggestSum([], 4)) // null
console.log(findBiggestSum([7, 0], 4)) // null
console.log(findBiggestSum([4, 5, 3, 1, 2], 2)) // 9
console.log(findBiggestSum([4, 5, 3, 1, 200, 1000], 2)) // 9