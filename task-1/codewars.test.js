import {titleCase} from './codewars.js';
test('titleCase', () => {
  expect(titleCase('a clash of KINGS', 'a an the of')).toEqual('A Clash of Kings');
  expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toEqual('The Wind in the Willows');
  expect(titleCase('the quick brown fox')).toEqual('The Quick Brown Fox');
});