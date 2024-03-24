
exports.dataPage = (username, allWords, guessedWords, alertMessages, score, gameStatus) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Guess Pass</title>
        <link rel="stylesheet" href="/css/styles.css">
    </head>
  
    <body>
        <div class="container">
            <h1>Welcome, ${username}!</h1>
            <h2> Score: ${score} </h2>
            <h2> Game Status: ${gameStatus} </h2>
            <h3>Secret word could be: </h3>
            <div class="word-container">
                <p>${allWords.map(word => `${word} / `).join('')}</p>
            </div>
            <h3>Your guessed words are: </h3>
            <div class="word-container">
                <p>${guessedWords}</p>
            </div>
    
            <form action="/guess" method="POST">
                <input type="text" id="newGuessedWord" name="newGuessedWord" placeholder="Guess the secret word." required>
                <button type="submit">Guess Word</button>
            </form>
    
            <p>${alertMessages.map(word => `${word} <br>`).join('')}</p> 
            
            <div class="button-container">
                <form action="/new-game" method="POST">
                    <button type="submit">New Game</button>
                </form>
                <form action="/logout" method="POST">
                    <button type="submit">Logout</button>
                </form>
        </div>
    </body>
  
    </html>
        `;
}

{/* <div class="errorMessage">
                <p>${webPage.checkValid(username)}</p>
            </div> */}
