const { sortPages } = require('./reports.js');
const { test, expect } = require('@jest/globals');

test('sortPages', () => {
   const input = {
      'https://wagslane.dev': 3,
      'https://wagslane.dev/path': 1
   }
   const actual = sortPages(input);
   const expected = [
      ['https://wagslane.dev', 3],
      ['https://wagslane.dev/path', 1]
   ];
   expect(actual).toEqual(expected);
})

test('sortPages 5 pages', () => {
   const input = {
      'https://wagslane.dev': 3,
      'https://wagslane.dev/path': 1,
      'https://wagslane.dev/path2': 4,
      'https://wagslane.dev/path3': 6,
      'https://wagslane.dev/path5': 2,
   }
   const actual = sortPages(input);
   const expected = [
      ['https://wagslane.dev/path3', 6],
      ['https://wagslane.dev/path2', 4],
      ['https://wagslane.dev', 3],
      ['https://wagslane.dev/path5', 2],
      ['https://wagslane.dev/path', 1]
   ];
   expect(actual).toEqual(expected);
})