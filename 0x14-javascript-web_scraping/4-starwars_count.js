#!/usr/bin/node
// Script to print the number of times character "Wedge Antilles" is present
const request = require('request');
const characterToFind = '18';
let requestURL = process.argv[2];

request(requestURL, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let theBody = JSON.parse(body);
    let movieResults = theBody.results;
    let count = 0;
    for (let movie in movieResults) {
      let characters = movieResults[movie].characters;
      for (let character in characters) {
        if (characters[character].includes(characterToFind)) {
          count = count + 1;
        }
      }
    }
    console.log(count);
  }
});
