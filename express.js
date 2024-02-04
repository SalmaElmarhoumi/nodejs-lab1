// Install express and create a single route (home page) using express framework

// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route for the home page
app.get('/exp', (req, res) => {
  res.send('This is Your Home Page');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});