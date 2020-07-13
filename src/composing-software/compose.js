import _ from 'lodash';
import * as R from 'ramda';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test'

const g = n => n + 1
const f = n => n * 2
// const doStuffBetter = x => f(g(x));

if (!Function.prototype.compose) {
  // eslint-disable-next-line no-extend-native
  Function.prototype.compose = R.compose;
}

const trace = label => value => {
  console.log(`${label}: ${value}`)
  return value
}

// const doStuffBetter = x => trace('f ')(f(trace('g ')(g(x))));

// const traceG = trace('after g')
// const traceF = trace('after f')
// const doStuffBetter = x => traceF(f(traceG(g(x))))

// const fn = () => {};
// const doStuffBetter = fn.compose(
//   trace('after f'),
//   f,
//   trace('after g'),
//   g
// );

const doStuffBetter = R.pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

report(doStuffBetter(20)) // 42


const sum = (x, y, z) => x + y + z
report(sum(20, 21, 1))

const sumCurry = x => y => z => x + y + z
report(sumCurry(20)(22)(1))

const sum3 = sumCurry(3)
report(sum3(20)(1))


// auto curry
// https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software

const add3 = R.curry((a, b, c) => a + b + c);
report(add3(1, 2, 3)) // 6
report(add3(1, 2)(3)) // 6
report(add3(1)(2, 3)) // 6
report(add3(1)(2)(3)) // 6
