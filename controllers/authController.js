const userModel = require('../models/userModel');
const errorPageView = require('../views/error');
const dogErrorPageView = require('../views/dogError');
const logInPageView = require('../views/login');

exports.loginUser = (req, res) => {
  const { username } = req.body;
  if (!username || !/^[a-zA-Z0-9]+$/.test(username) || username.trim() === '') {
    const errorPage = errorPageView.inValidUserPage();
    return res.status(400).send(errorPage);
  } else if (username.trim().toLowerCase() === 'dog') {
    const errorPage = dogErrorPageView.inValidUserPage();
    return res.status(403).send(errorPage);
  }
  const sessionId = userModel.createSession(username);
  res.cookie('sid', sessionId);
  res.redirect('/');
};

exports.logoutUser = (req, res) => {
  const sessionId = req.cookies.sid;
  userModel.removeSession(sessionId);
  res.clearCookie('sid');
  res.redirect('/');
};

exports.updateStoredWord = (req, res) => {
  const username = userModel.getUsernameBySessionId(sessionId);
  userModel.updateStoredWord(username, newStoredWord);
  res.redirect('/');
};

exports.updateGuessedWords = (req, res) => {
  const sessionId = req.cookies.sid;
  const sessions = userModel.getSessions(sessionId);

  if (sessionId && sessions[sessionId]) {
    const guessedWord = req.body.newGuessedWord.toLowerCase();
    const username = userModel.getUsernameBySessionId(sessionId);
    userModel.setUpdateGuessedWord(username, guessedWord);
    res.redirect('/');
  } else {
    const loginPage = logInPageView.logInPage();
    res.send(loginPage);
  }
};
