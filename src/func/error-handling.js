import _ from 'lodash';
import * as R from 'ramda';
import * as sfn from '../test-simple/simple-test'
import IO from './IO'

// Maybe can be applied to any function
// without modification through 'lift' page 136
// Returns Nothing or Just


// Either returns Left > error or Right > success

// const safeFindObject = R.curry((db, id) => {
//   const obj = find(db, id);
//   if (obj) {
//     return Either.of(obj);
//   }
//   return Either.left(`Object not found with ID: ${id}`);
// });

// function decode(url) {
//   try {
//     const result = decodeURIComponent(url);
//     return Either.of(result);
//   } catch (uriError) {
//     return Either.Left(uriError);
//   }
// }

// e.g.usage
// const parse = (url) => url.parseUrl();
// decode('%').map(parse); // -> Left(Error('URI malformed'))
// decode('http%3A%2F%2Fexample.com').map(parse); // -> Right(true)

// const read = (document, selector) =>
//   document.querySelector(selector).innerHTML;
// const write = (document, selector, val) => {
//   document.querySelector(selector).innerHTML = val;
//   return val;
// };

const read = (document, selector) =>
  () => document.querySelector(selector).innerHTML;
const write = (document, selector) => (val) => {
  document.querySelector(selector).innerHTML = val;
  return val;
};

const readDom = _.partial(read, document);
const writeDom = _.partial(write, document);


document.querySelector('#playground').innerHTML += '<div id="student-name"></div>';
writeDom('#student-name')('alonzo church')
// const content = document.createTextNode('<YOUR_CONTENT>');
// document.querySelector('#playground').appendChild(content);

const changeToStartCase =
  IO.from(readDom('#student-name'))
    .map(_.startCase)
    .map(writeDom('#student-name'))

changeToStartCase.run()
