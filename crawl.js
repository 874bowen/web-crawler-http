const { test } = require("node:test")

/* 
* TDD steps:
  - Stub out fxn you want to test
  - Write test
  - Implement the meat of the function
*/

function normalizeURL(urlString){
   return urlString;
}

module.exports = {
   normalizeURL
}