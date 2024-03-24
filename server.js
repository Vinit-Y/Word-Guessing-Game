const express = require('express');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const viewController = require('./controllers/viewController');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

// Routes
app.get('/', viewController.homePage);
app.post('/login', authController.loginUser);
app.post('/logout', authController.logoutUser);
app.post('/new-game', viewController.startNewGame);
app.post('/guess', authController.updateGuessedWords);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
