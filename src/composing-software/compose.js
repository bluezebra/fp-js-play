import _ from 'lodash';
import * as R from 'ramda';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test'

const g = n => n + 1
const f = n => n * 2
// const doStuffBetter = x => f(g(x));


const trace = label => value => {
  console.log(`${label}: ${value}`)
  return value
}


// const traceG = trace('after g')
// const traceF = trace('after f')
// const doStuffBetter = x => traceF(f(traceG(g(x))))


const doStuffBetter = R.pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);


report(doStuffBetter(20)) // 42
