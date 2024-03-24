# Word Guessing Game

Welcome to the Word Guessing Game project! This is a web-based word guessing game where users can have fun guessing words and testing their vocabulary. The game is built with backend-generated HTML only, without any frontend JavaScript. Below you'll find details about the technology stack used and other relevant technical information.

## Technology Stack

- **Node.js**: Used as the server-side runtime environment.
- **Express.js**: A web application framework for Node.js, used to handle routing and server logic.
- **UUID**: A library used to generate unique session IDs for user authentication.
- **Cookie-parser**: Middleware for Express.js used to parse cookies attached to the HTTP requests.
- **HTML**: Backend-generated HTML is used to render the game interface.
- **CSS**: Custom CSS is used for styling the game interface.
- **npm**: Node package manager used for installing and managing project dependencies.

## Installation

To run the Word Guessing Game locally on your machine, follow these steps:

1. Clone the repository to your local machine using Git:
   ```bash
   git clone https://github.com/your-username/word-guessing-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd word-guessing-game
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```

## Usage

Once you have installed the dependencies, you can start the server and access the game through your web browser.

1. Start the server by running:
   ```bash
   node server.js
   ```

2. Open your web browser and go to `http://localhost:3000` to access the game.

3. If you're not logged in, you'll be prompted to enter a username. Enter a valid username (with allowed characters) and submit the form.

4. Once logged in, you'll see the game interface where you can:
   - View a list of words the secret word could be.
   - See any previously guessed words and their matching letters.
   - Check how many valid guesses you've made so far.
   - View your most recent valid guess and its match status.
   - Logout or start a new game at any time.

5. Make guesses by entering words into the input field and submitting the form. You'll receive feedback on your guesses.

6. Enjoy playing the Word Guessing Game!

## Features

- Backend-generated HTML: The game utilizes only backend-generated HTML without any frontend JavaScript.
- Secure Login: Users can log in with a username, and session security is enforced on the server side.
- Guessing Mechanism: Users can make guesses, and the server provides feedback on the validity of guesses and matching letters.
- Resumable Games: Users can log out and later log in to resume their games.

## Credits

This project was developed as an individual project for INFO6250 Web Dev Tools & Methods. Special thanks to Prof. Ritter Brett for the guidance and support.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
 Enjoy playing the Word Guessing Game!
