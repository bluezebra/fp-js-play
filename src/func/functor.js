import _ from 'lodash';
import * as R from 'ramda';
import wrap from './WrapperSimple'
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

const wrappedValue = wrap('Get Functional')
report(wrappedValue.map(x => x.toLowerCase()))
report(wrappedValue.map(R.toUpper))
report(wrappedValue.map(x => x))
report(wrappedValue.map(R.identity))

const wrappedNull = wrap(null)
report(wrappedNull.map(R.identity)) // null
// report(wrappedNull.map(R.toUpper)) // Null Error

const plus = R.curry((a, b) => a + b)
const plus3 = plus(3)
const plus10 = plus(10)

const two = wrap(2)
const five = two.fmap(plus3)
report(five.map(R.identity))
report(two.fmap(plus3).fmap(plus10).map(R.identity))

const infoLogger = (v) => console.log(`InfoLogger [INFO] ${v}`)
two.fmap(plus10).fmap(R.tap(infoLogger))
