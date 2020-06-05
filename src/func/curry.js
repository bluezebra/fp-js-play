// import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import { Tuple, StringPair } from './model/Tuple';

function curry2(fn) {
  return function (firstArg) {
    return function (secondArg) {
      return fn(firstArg, secondArg);
    };
  };
}

const name = curry2((last, first) => new StringPair(last, first));

let first;
let last;

[first, last] = name('Curry')('Haskell').values();

report(first);
report(last);

report(name('Curry')); // -> Function

const curried = name('Curry');
report(curried('firstname').values());
