/* This program will take two strings as inputs and tell us if the strings are AreStringsAnagramsIf they are, the program returns "The strings are anagrams!". if they aren't the program returns "The strings are not anagrams!" */

const AreStringsAnagrams = (string1, string2) => {
  // if the strings don't have the same length, the functions returns false
  if (string1.length !== string2.length) {
    console.log('The strings are not anagrams!');
    return false;
  }

  // we create 2 objects in which will store all the letters in a word and their frequency
  const frequencyString1 = {};
  const frequencyString2 = {};

  // store frequencyString1
  for (let char of string1) {
    // if the object contains a property called char, add one to the already existing value; if it doesn't contain it, add a prop with that name and the value one;
    frequencyString1[char] ? (frequencyString1[char] += 1) : (frequencyString1[char] = 1);
  }

  // store frequencyString2 - same steps as with frequencyString1
  for (let char of string2) {
    frequencyString2[char] ? (frequencyString2[char] += 1) : (frequencyString2[char] = 1);
  }

  // we check if all the keys in the first object are found in the second object
  // if they are not, return false
  for (let key in frequencyString1) {
    if (!(key in frequencyString2)) {
      console.log('The strings are not anagrams!');
      return false;
    }

    // we check if the keys are present for the same amount of times in both strings
    if (!(frequencyString1[key] === frequencyString2[key])) {
      console.log('The strings are not anagrams!');
      return false;
    }
  }
  console.log('The strings are anagrams!');
  return true;
};

//example 1 test - returns "The strings are anagrams!"
AreStringsAnagrams('anagram', 'nargama');
//example 2 test - returns "The strings are not anagrams!"
AreStringsAnagrams('cat', 'dog');
