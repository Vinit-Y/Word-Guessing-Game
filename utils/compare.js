"use strict";
module.exports = compare;

function compare(word, guess) {
  let count = 0;
  if (word.length === guess.length) {
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseGuess = guess.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length; i++) {
      if (lowerCaseGuess.includes(lowerCaseWord[i])) {
        count++;
        lowerCaseGuess = lowerCaseGuess.replace(lowerCaseWord[i], '');
      }
    }
  }
  return count;
}
