
exports.inValidUserPage = () => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Error</title>
      <link rel="stylesheet" href="/css/styles.css">
  </head>
  <body>
      <div class="container">
          <h1>Error</h1>
          <p>Invalid username. Please try again.</p>
          <form action="/login" method="POST">
          <label for="username">Enter username:</label>
          <input type="text" id="username" name="username" placeholder="Enter username" required>
          <button type="submit">Login</button>
      </form>
      </div>
  </body>
  </html>
`;
}
//<button type="submit"><a href="/">Back to login page</a></button>
