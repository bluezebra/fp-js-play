/* eslint-disable radix */
// import { partial } from 'ramda'
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test'

// 1
// eslint-disable-next-line radix
// const nextCharForNumberString = (str) => String.fromCharCode(parseInt(str.trim()) + 1);

// 2
// const nextCharForNumberString = str => [str]
//   .map((s) => s.trim())
//   .map((s) => parseInt(s))
//   .map((i) => i + 1)
//   .map((i) => String.fromCharCode(i));

// 3
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const nextCharForNumberString = str => Box(str)
  .map((s) => s.trim())
  // eslint-disable-next-line no-new-wrappers
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase())
reportObject(nextCharForNumberString('  64  '))

const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
  const replaced = str.replace(/\%/g, '')
  const number = parseFloat(replaced)
  return number * 0.01
};

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cost - cost * savings
}

report(applyDiscount('$5.00', '20%'))
