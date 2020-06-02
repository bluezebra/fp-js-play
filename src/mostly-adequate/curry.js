import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

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

const add = (x) => (y) => x + y;
const increment = add(1);
const addTen = add(10);

report(increment(2));
report(addTen(2));


// split :: String -> String -> [String]
const split = curry((sep, str) => str.split(sep));
// reduce :: (b -> a -> b) -> b -> [a] -> b
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
// filter :: (a -> Boolean) -> [a] -> [a]
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

report(match(/r/g, 'hello world')); // [ 'r' ]
const hasLetterR = match(/r/g); // x => x.match(/r/g)
report(hasLetterR('hello world')); // [ 'r' ]
report(hasLetterR('just j and s and t etc')); // null

report(filter(hasLetterR, ['rock and roll', 'smooth jazz'])); // ['rock and roll']

const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))
report(removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle'])); // ['rock and roll', 'drum circle']

const noVowels = replace(/[aeiou]/ig); // (r,x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels('*'); // x => x.replace(/[aeiou]/ig, '*')
report(censored('Chocolate Rain')); // 'Ch*c*l*t* R**n'

// words :: String -> [String]
const words = (str) => split(' ', str);
const wordsCurry = split(' ');

// filterQs :: [String] -> [String]
const filterQs = (xs) => filter((x) => x.match(/q/i), xs);
const filterQsCurry = filter(match(/q/i));

const keepHighest = (x, y) => (x >= y ? x : y);
// max :: [Number] -> Number
const max = (xs) => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
const maxCurry = reduce(keepHighest, -Infinity);
