/* The purpose of this program is to find unique values in an array, using two pointers (numbers inside the array). */

const arrayOfNumbers = [-10, -5, -1, -1, 2, 4, 4, 5, 8];

const findUniqueValues = (array) => {
  // if the array has no items, we stop the execution and return zero
  if (array.length === 0) {
    return 0;
  }

  // we set a start index, which will be ut first pointer
  let startIndex = 0;

  // we then start a loop at index 1, since index 0 is already being used as a startIndex
  for (let innerIndex = 1; innerIndex < array.length; innerIndex++) {
    console.log('Starting index values', startIndex, innerIndex);
    console.log('Starting numbers in the array', array[startIndex], array[innerIndex]);

    // if the number at the startIndex is not equal to the number at innerIndex, we increase the start index by one
    if (array[startIndex] !== array[innerIndex]) {
      startIndex++;
      console.log('Increased start index inside the loop', startIndex);
      console.log('Inner index inside the loop', innerIndex);
      // after we increase the start index by one, we store in it the value on the inner index
      array[startIndex] = array[innerIndex];
      console.log('start', array[startIndex], 'inner', array[innerIndex]);
    }
  }

  return startIndex + 1;
};

console.log(`There are ${findUniqueValues(arrayOfNumbers)} unique numbers in the array.`);
