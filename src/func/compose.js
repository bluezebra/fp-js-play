import _ from 'lodash';
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
const ssn = ' 444-44-4444 '
const cleanInput = R.compose(normalize, trim)
const isValidSsn = R.compose(checkLengthSsn, cleanInput)
report(cleanInput(ssn))
report(isValidSsn(ssn))
