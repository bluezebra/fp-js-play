import _, { noop } from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

const ssn = ' 444-44-4444 '
const trim = s => s.replace(/^\s*|\s*$/g, '')
const normalize = s => s.replace(/\-/g, '')

// identity :: a -> a

// tap :: (a -> *) -> a -> a
// e.g. inline void returning func like debug
const debugLog = str => console.log(str)
const debug = R.tap(debugLog)

const cleanInput = R.compose(normalize, debug, trim)
report(cleanInput(ssn))

// Alt-ernation OR (or use curry)
const alt = (func1, func2) => (val) => func1(val) || func2(val)

// Seq-uence
// The seq combinator is used to loop over a sequence of functions. It takes two or more
// functions as parameters and returns a new function, which runs all of them in
// sequence against the same value.
const seq = function (/* funcs */) {
  const funcs = Array.prototype.slice.call(arguments);
  return function (val) {
    funcs.forEach((fn) => {
      fn(val);
    });
  };
};

// Fork
// process a single resource in
// two different ways and then combine the results.
const fork = function (join, func1, func2) {
  return function (val) {
    return join(func1(val), func2(val));
  };
};


const eqMedianAverage = fork(R.equals, R.median, R.mean);
report(eqMedianAverage([80, 90, 100])); // -> True
report(eqMedianAverage([81, 90, 100])); // -> False
