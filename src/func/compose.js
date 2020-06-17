import _, { noop } from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

const test = 'we can only see a short distance ahead but we can see plenty there that needs to be done'
const explode = s => s.split(/\s+/)
const count = arr => arr.length
const countWords = R.compose(count, explode)
report(countWords(test))

const trim = s => s.replace(/^\s*|\s*$/g, '')
const normalize = s => s.replace(/\-/g, '')
const validLength = (param, str) => str.length === param
const checkLengthSsn = _.partial(validLength, 9)
report(checkLengthSsn)
const checkLengthSsnCurry = _.curry(validLength)(9)
report(checkLengthSsnCurry)
const ssn = ' 444-44-4444 '
const cleanInput = R.compose(normalize, trim)
const isValidSsn = R.compose(checkLengthSsn, cleanInput)
const isValidSsn2 = R.compose(checkLengthSsnCurry, cleanInput)
report(cleanInput(ssn))
report(isValidSsn(ssn))
report(isValidSsn2(ssn))


if (!Function.prototype.compose) {
  // eslint-disable-next-line no-extend-native
  Function.prototype.compose = R.compose;
}

const students = ['Rosser', 'Turing', 'Kleene', 'Church']
const grades = [80, 100, 90, 99]

const smartestStudent = R.compose(
  R.head,
  R.pluck(0),
  R.reverse,
  R.sortBy(R.prop(1)),
  R.zip
)

report(smartestStudent(students, grades))

// using descriptive aliases
const first = R.head
const getName = R.pluck(0)
const { reverse } = R
const sortByGrade = R.sortBy(R.prop(1))
const combine = R.zip

const smartestStudentAliased = R.compose(first, getName, reverse, sortByGrade, combine)
report(smartestStudentAliased(students, grades))

// pipe is combose L to R
const smartestStudentAliasedPiped = R.pipe(combine, sortByGrade, reverse, getName, first)
report(smartestStudentAliasedPiped(students, grades))
