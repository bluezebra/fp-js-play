import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
// import Person from './model/Person';
// import Address from './model/Address';

const nums = [2, 3, 4, 1, 5, 6];
report(_.drop(nums, 1));

report(_(nums).reduce((acc, current) => acc + current, 0));

const sumRecursive = (x) => _(x).reduce((acc, current) => acc + current, 0);
report(sumRecursive(nums));

// Listing 3.10 Performing recursive addition
// const sum = (arr) => {
//   if (_.isEmpty(arr)) {
//     return 0;
//   }
//   return _.first(arr) + sum(_.drop(arr, 1));
// };

// Recursive call in tail for performance
const sum = (arr) => {
  if (_.isEmpty(arr)) {
    return 0;
  }
  return sum(_.drop(arr, 1)) + _.first(arr);
};

report(sum([])); // -> 0
report(sum([1, 2, 3, 4, 5, 6, 7, 8, 9])); // ->45
