const {normalizeURL} = require('./crawl.js');
const {test, expect} = require('@jest/globals');


test('normalizeUrl', ()=> {
   const input = '';
   const actual = normalizeURL(input);
   const expected = '';
   expect(actual).toEqual(expected);
})