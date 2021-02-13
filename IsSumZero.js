/* The purpose of this program is to find out if an array contains any numbers that sum up to zero. We'll use as refrence points, two numbers in the array, the first and the last and change their index depensing on some conditions. */

const numbersArray = [-4, -2, 0, 4, 9];

const isSumZero = (array) => {
  // we set
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let sum = array[leftIndex] + array[rightIndex];
    if (sum === 0) {
      const result = [array[leftIndex], array[rightIndex]];
      console.log(result);
      return result;
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
};

isSumZero(numbersArray);
