/* The goal of this program is to find out how many times a character appears in a string. It counts empty spaces and it's case sensitive
 */
const stringToCount = 'Hello world!';
const container = document.getElementById('container');
const content = document.getElementById('content');

const findOccurrences = (string) => {
  // we create an object we want to return at the end; initially empty;
  let finalObject = {};
  // we loop over each character of the string;
  // if the object contains the character already, we add one more and increase the count;
  // if the object doesn't contain the caracter, we add it and set the count to 1;

  for (const _char of string) {
    if (finalObject[_char]) {
      finalObject[_char] += 1;
    } else {
      finalObject[_char] = 1;
    }
  }

  // we print the letters to the page - we first create a paragraph for each letter, and then we inject the letter into the paragraph
  for (const prop in finalObject) {
    const element = document.createElement('p');
    const elText = document.createTextNode(`${prop}: ${finalObject[prop]}`);
    element.appendChild(elText);
    container.appendChild(element);
  }
  return finalObject;
};

findOccurrences(stringToCount);
