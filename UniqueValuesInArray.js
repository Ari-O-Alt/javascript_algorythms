/* The purpose of this program is to find unique values in an array, using two pointers (numbers inside the array). */

const arrayOfNumbers = [-10, -5, -1, -1, 2, 4, 4, 5, 8];

const findUniqueValues = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let startIndex = 0;

  for (let innerIndex = 1; innerIndex < array.length; innerIndex++) {
    console.log('AAA', array[startIndex], array[innerIndex]);
    console.log(startIndex, innerIndex);

    if (array[startIndex] !== array[innerIndex]) {
      startIndex++;
      array[startIndex] = array[innerIndex];
      console.log(arrayOfNumbers);
    }
  }

  return startIndex + 1;
};

console.log(`There are ${findUniqueValues(arrayOfNumbers)} unique numbers in the array.`);
