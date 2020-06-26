// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test';


const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};


const g = n => n + 1;
const f = n => n * 2;
const doStuffBetter = x => f(g(x));

report(doStuffBetter(20)); // 42
