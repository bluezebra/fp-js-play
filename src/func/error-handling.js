import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';


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

class IO {
  constructor(effect) {
    if (!_.isFunction(effect)) {
      throw 'IO Usage: function required';
    }
    this.effect = effect;
  }

  static of(a) {
    return new IO(() => a);
  }

  static from(fn) {
    return new IO(fn);
  }

  map(fn) {
    const self = this;
    return new IO(() => fn(self.effect()));
  }

  chain(fn) {
    return fn(this.effect());
  }

  run() {
    return this.effect();
  }
}

document.querySelector('#playground').innerHTML += '<div id="student-name"></div>';
writeDom('#student-name')('alonzo church')

const changeToStartCase =
  IO.from(readDom('#student-name'))
    .map(_.startCase)
    .map(writeDom('#student-name'))

changeToStartCase.run()
