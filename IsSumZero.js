/* The purpose of this program is to find out if a sorted array contains any two numbers that sum up to zero. We'll use as refrence points, two numbers in the array, the first and the last and change their index depending on if the numbers have been found already or not. If not two numbers sum up to zero, we'll print the message: "No two numbers in this array sum up to zero!"
ATTENTION: This will only worlk with sorted arrays. If you're using unsorted arrays, you must need to first sort them. */

const numbersArray = [-4, -2, 0, 4, 9];

const isSumZero = (array) => {
  // we set the first number's index
  let leftIndex = 0;
  //we set the second's number's index
  let rightIndex = array.length - 1;

  //we continue to calculate/ check for things while the leftIndex(number) is smaller than the rigthIndex(number)
  while (leftIndex < rightIndex) {
    // we add the two numbers together
    let sum = array[leftIndex] + array[rightIndex];
    // if the sum of the two numbers is 0, add them to an array an terminate
    if (sum === 0) {
      const result = [array[leftIndex], array[rightIndex]];
      console.log(result);
      return result;
      // if the sum is bigger than zero, shift the index of the number on the right and calculate again
    } else if (sum > 0) {
      rightIndex--;
      // else, shift the index of the numberon the left and calculate again
    } else {
      leftIndex++;
    }
  }
  console.log('No two numbers in this array sum up to zero!');
};

isSumZero(numbersArray);
isSumZero([-4, -2, 0, 5, 9]);
