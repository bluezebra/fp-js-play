import * as _ from './library';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

const add = x => y => x + y
const increment = add(1)
const addTen = add(10)

report(increment(2))
report(addTen(2))

report(_.match(/r/g, 'hello world')); // [ 'r' ]
const hasLetterR = _.match(/r/g); // x => x.match(/r/g)
report(hasLetterR('hello world')); // [ 'r' ]
report(hasLetterR('just j and s and t etc')); // null

report(_.filter(hasLetterR, ['rock and roll', 'smooth jazz'])); // ['rock and roll']

const removeStringsWithoutRs = _.filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))
report(removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle'])); // ['rock and roll', 'drum circle']

const noVowels = _.replace(/[aeiou]/ig); // (r,x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels('*'); // x => x.replace(/[aeiou]/ig, '*')
report(censored('Chocolate Rain')); // 'Ch*c*l*t* R**n'

// words :: String -> [String]
const words = (str) => _.split(' ', str);
const wordsCurry = _.split(' ');

// filterQs :: [String] -> [String]
const filterQs = (xs) => _.filter((x) => x.match(/q/i), xs);
const filterQsCurry = _.filter(_.match(/q/i));

const keepHighest = (x, y) => (x >= y ? x : y);
// max :: [Number] -> Number
const max = (xs) => _.reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
const maxCurry = _.reduce(keepHighest, -Infinity);
