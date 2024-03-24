const { v4: uuidv4 } = require('uuid');
const allWords = require('../words');
const compare = require('../utils/compare');

const sessions = {};
const storedWords = {};
let guessedWords = {};
let alertMessages = [];
let secretWord = "";
let currentGameAllWords = [];
let noOfGuesses = 0;
let gameStatus = "In Progress";

exports.createSession = (username) => {
  const sessionId = uuidv4();
  sessions[sessionId] = username;
  if (!storedWords[username]) {
    storedWords[username] = '';
  }
  setCurrentGameAllWords();
  secretWord = generateSecretWord();
  console.log(`Username = ${username} and its secretWord = ${secretWord}`);
  return sessionId;
};

exports.removeSession = (sessionId) => {
  delete sessions[sessionId];
};

exports.getAlertMessages = () => {
  return alertMessages;
}

exports.getGameStatus = () => {
  return gameStatus;
}

exports.getScrore = () => {
  return noOfGuesses;
}

exports.getSessions = (sessionId) => {
  return sessions;
}

exports.getUsernameBySessionId = (sessionId) => {
  return sessions[sessionId];
};

exports.updateStoredWord = (username, newStoredWord) => {
  storedWords[username] = newStoredWord;
};

exports.setUpdateGuessedWord = (username, newGuessedWord) => {
  if (!guessedWords[username]) {
    guessedWords[username] = [];
  }
  if (!guessedWords[username].includes(newGuessedWord) && (currentGameAllWords.includes(newGuessedWord))) {
    guessedWords[username].push(newGuessedWord);
  }

  guessCheck(newGuessedWord, username);
};

exports.getStoredWordByUsername = (username) => {
  return storedWords[username];
};

exports.getGuessedWordByUsername = (username) => {
  return guessedWords[username] || [];
};

function setCurrentGameAllWords() {
  currentGameAllWords = allWords;
}

exports.getCurrentGameAllWords = () => {
  return currentGameAllWords;
}

function generateSecretWord() {
  const randomIndex = Math.floor(Math.random() * currentGameAllWords.length);
  return currentGameAllWords[randomIndex];
}

exports.restartGame = (username) => {
  alertMessages = [];
  noOfGuesses = 0;
  currentGameAllWords = allWords;
  guessedWords = {};
  gameStatus = "In Progress";
  secretWord = generateSecretWord();
  console.log(`Username = ${username} and its new secretWord = ${secretWord}`);
}

function guessCheck(newGuessedWord, username) {
  const countOfLetters = compare(secretWord, newGuessedWord);

  if (newGuessedWord === secretWord) {
    alertMessages = [];
    noOfGuesses = 0;
    currentGameAllWords = allWords;
    guessedWords = {};
    secretWord = generateSecretWord();
    gameStatus = "You Won! Start playing again";
    console.log(`Username = ${username} and its new secretWord = ${secretWord}`);
  } else if (currentGameAllWords.includes(newGuessedWord)) {
    gameStatus = "In Progress";
    if (!guessedWords[username].includes(newGuessedWord)) {
      guessedWords[username].push(newGuessedWord);
    }
    noOfGuesses++;
    alertMessages.push(`It's a Valid Guess but Incorrect Guess. Guessed word is "${newGuessedWord}" which have "${countOfLetters}" same letters. Total valid guess are "${noOfGuesses}"`);
    const indexToRemove = currentGameAllWords.indexOf(newGuessedWord);
    if (indexToRemove !== -1) {
      currentGameAllWords.splice(indexToRemove, 1);
    }
  } else if (!currentGameAllWords.includes(newGuessedWord)) {
    gameStatus = "In Progress";
    alertMessages.push(`It's a Invalid Guess. Total valid guess are "${noOfGuesses}"`);
  }
}