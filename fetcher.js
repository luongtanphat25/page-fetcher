const request = require('request');
const fs = require('fs');
const { stdin } = require('process');

const arr = process.argv.slice(2);

const writeFile = (path, content) => {
  fs.writeFile(path, content, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${content.length} bytes to ${path}`);
  });
};

const url = arr[0];
const path = arr[1];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    writeFile(path, body);
  } else {
    console.error(error);
  }
});

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html