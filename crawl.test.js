const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals');


test('normalizeUrl strip protocol', ()=> {
   const input = 'https://boot.dev/path';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl strip trailing slash', ()=> {
   const input = 'https://boot.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl capitals', ()=> {
   const input = 'https://BOOT.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})

test('normalizeUrl strip http', ()=> {
   const input = 'http://BOOT.dev/path/';
   const actual = normalizeURL(input);
   const expected = 'boot.dev/path';
   expect(actual).toEqual(expected);
})