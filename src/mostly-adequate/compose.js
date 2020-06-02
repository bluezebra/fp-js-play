import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
// replace :: RegExp -> String -> String -> String
const replace = curry((re, rpl, str) => str.replace(re, rpl));
// toLowerCase :: String -> String
const toLowerCase = (s) => s.toLowerCase();
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

// not pointfree because we mention the data: word
const snakeCase = (word) => word.toLowerCase().replace(/\s+/ig, '_');
report(snakeCase('sdFSDFewr'));

// pointfree
const snakeCase2 = compose(replace(/\s+/ig, '_'), toLowerCase);
report(snakeCase2('sdFSDFewr'));
