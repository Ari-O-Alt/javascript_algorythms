/* The purpose of this program is to find out if the numbers in the second array represent all square values of the numbers n the first array. If all values in the second array are square values of the numbers in the first array, the program returns a message. */

// We have two arrays
const array1 = [2, 6, 10];
const array2 = [36, 4, 100];

const findSquaredValues = (arr1, arr2) => {
  // we check if the length of the two arrays is the same;
  // if it's not, the function stops executing
  if (array1.length !== array2.length) {
    return false;
  }

  // we loop over the first array and find the index of the corresponding element in the second array
  for (let i = 0; i < array1.length; i++) {
    const indexInComparedArray = array2.indexOf(array1[i] ** 2);

    // if a corresponding element is not found, the function return false
    if (indexInComparedArray === -1) {
      return false;
    }

    // if a corresponding element is found, it is removed from the second array
    array2.splice(indexInComparedArray, 1);

    //when the second array is empty, a message gets printed to the console
    if (array2.length === 0) {
      console.log('All values in the second array are square values of the numbers in the first array!');
    }
  }

  return true;
};

findSquaredValues(array1, array2);
