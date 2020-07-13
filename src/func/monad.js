import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import wrap from './Wrapper'
import empty from './Empty'

const isEven = n => Number.isFinite(n) && (n % 2 === 0)
const half = val => (isEven(val) ? wrap(val / 2) : empty())

report(half(4))
report(half(3))
// report(half(3).fmap(R.identity))


const plus = R.curry((a, b) => a + b)
const plus3 = plus(3)

report(half(4).fmap(plus3))
report(half(3).fmap(plus3))
