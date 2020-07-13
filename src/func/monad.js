import _ from 'lodash';
import * as R from 'ramda';
import * as sfn from '../test-simple/simple-test';
import wrapSimple from './WrapperSimple'
import Wrapper from './Wrapper'
import empty from './Empty'
import Student from './model/Student';
import Person from './model/Person';
import Address from './model/Address';

const plus = R.curry((a, b) => a + b)
const plus3 = plus(3)
const isEven = n => Number.isFinite(n) && (n % 2 === 0)
sfn.title('// Simple Monad')
const half = val => (isEven(val) ? wrapSimple(val / 2) : empty())

sfn.report(half(4))
sfn.report(half(3))
sfn.report(half(3).fmap(R.identity))

half(4)
  .fmap(plus3)
  .fmap(R.identity)
  .fmap(R.tap(sfn.report))

sfn.report(half(3).fmap(plus3).fmap(R.tap(sfn.report)))

sfn.title('// Better Monad')
Wrapper.of('Hello Monads!')
  .map(R.toUpper)
  .map(R.identity)
  .map(sfn.report)

sfn.title('// getStudent')
const john = new Student('John', 'Doe', '444-44-444')
john.address = new Address('England');
const DB = (dbName) => dbName
const find = (db, id) => john
// findObject :: DB -> String -> Wrapper
const findObject = R.curry((db, id) => Wrapper.of(find(db, id)))
// getAddress :: Student -> Wrapper
const getAddress = student => Wrapper.of(student.map(R.prop('address')))

const getStudent = R.compose(getAddress, R.tap(sfn.infoLogger), findObject(DB('student')))

sfn.report(getStudent('444-44-444').join().get())
// map(R.tap(sfn.report))
