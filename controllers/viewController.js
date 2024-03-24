const userModel = require('../models/userModel');
const allWords = require('../words');
const dataPageView = require('../views/dataPage');
const logInPageView = require('../views/login');

exports.homePage = (req, res) => {
    const sessionId = req.cookies.sid;
    const username = userModel.getUsernameBySessionId(sessionId);

    if (username) {
        const guessedWords = userModel.getGuessedWordByUsername(username);
        const alertMessages = userModel.getAlertMessages();
        const score = userModel.getScrore();
        const gameStatus = userModel.getGameStatus();
        const dataPage = dataPageView.dataPage(username, allWords, guessedWords, alertMessages, score, gameStatus);
        res.send(dataPage);
    } else {
        const loginPage = logInPageView.logInPage();
        res.send(loginPage);
    }
};

exports.startNewGame = (req, res) => {
    const sessionId = req.cookies.sid;
    const sessions = userModel.getSessions(sessionId);

    if (sessionId && sessions[sessionId]) {
        const username = userModel.getUsernameBySessionId(sessionId);
        userModel.restartGame(username);
        res.redirect('/');
    } else {
        const loginPage = logInPageView.logInPage();
        res.send(loginPage);
    }
}