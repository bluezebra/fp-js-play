// import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

import * as _ from './library';

const snakeCase = (word) => word.toLowerCase().replace(/\s+/ig, '_');
report(snakeCase('sdFSDFewr'));
// pointfree
const snakeCase2 = _.compose(_.replace(/\s+/ig, '_'), _.toLowerCase);
report(snakeCase2('sdFSDFewr'));

// not pointfree because we mention the data: name
const initials = (name) => name.split(' ').map(_.compose(_.toUpperCase, _.head)).join('. ');

// pointfree
// NOTE: we use 'intercalate' from the appendix instead of 'join' introduced in Chapter 09!
const initialsPf = _.compose(_.intercalate('. '), _.map(_.compose(_.toUpperCase, _.head)), _.split(' '));
initialsPf('hunter stockton thompson'); // 'H. S. T'
