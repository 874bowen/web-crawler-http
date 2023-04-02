const { getURLsFromHTML, normalizeURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals');


test('normalizeUrl strip protocol', () => {
   const input = 'https://boot.dev/path';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl strip trailing slash', () => {
   const input = 'https://boot.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl capitals', () => {
   const input = 'https://BOOT.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl strip http', () => {
   const input = 'http://BOOT.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('getURLFromHTML absolute', () => {
   const inputHTML = 
   `
      <html>
         <body>
            <a href="https://bowenivan.dev/">
               Bowen Website Link
            </a>
         </body>
      </html>
   `;
   const inputBaseURL = 'https://bowenivan.dev';
   const actual = getURLsFromHTML(inputHTML,inputBaseURL);
   const expected = ['https://bowenivan.dev/'];
   expect(actual).toEqual(expected);
})

test('getURLFromHTML relative', () => {
   const inputHTML = 
   `
      <html>
         <body>
            <a href="/blogs/">
               Bowen Website Link
            </a>
            <a href="https://bowenivan.dev/">
               Bowen Website Blogs Link
            </a>
         </body>
      </html>
   `;
   const inputBaseURL = 'https://bowenivan.dev';
   const actual = getURLsFromHTML(inputHTML,inputBaseURL);
   const expected = ['https://bowenivan.dev/blogs/', 'https://bowenivan.dev/'];
   expect(actual).toEqual(expected);
})

test('getURLFromHTML invalid', () => {
   const inputHTML = 
   `
      <html>
         <body>
            <a href="invalid">
               Bowen Website Invalid Link
            </a>
         </body>
      </html>
   `;
   const inputBaseURL = 'https://bowenivan.dev';
   const actual = getURLsFromHTML(inputHTML,inputBaseURL);
   const expected = [];
   expect(actual).toEqual(expected);
})