
exports.logInPage = () => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Page</title>
      <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body>
      <h1>Login Page</h1>
      <form action="/login" method="POST">
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username" placeholder="Enter username" required>
          <button type="submit">Login</button>
      </form>
  </body>
  </html>
        `;
}

