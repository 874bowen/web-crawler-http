const { test } = require("node:test")

/* 
* TDD steps:
  - Stub out fxn you want to test
  - Write test
  - Implement the meat of the function
*/

function normalizeURL(urlString){
   const urlObj = new URL(urlString);
   const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
   if (hostPath.length > 0 && hostPath.slice(-1) === '/' ) return hostPath.slice(0, -1)
   return hostPath;
}

module.exports = {
   normalizeURL
}