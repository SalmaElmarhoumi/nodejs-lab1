// Part 1
// Create web app using NodeJS 
// It should consist of 3 pages at least with navigation links, use NodeJS as server for 
// the 3 pages
// server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (filePath === './') {
    filePath = './part1/home.html';
  } else if (filePath === './about') {
    filePath = './part1/about.html';
  } else if (filePath === './contact') {
    filePath = './part1/contact.html';
  }

  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});