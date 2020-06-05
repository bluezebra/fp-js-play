// import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import { Tuple } from './model/Tuple';

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

// const Status = Tuple(Boolean, String);

// isValid :: String -> Status
// const isValid = (str) => {
//   if (str.length === 0) {
//     return new Status(false,
//       'Invalid input. Expected non-empty value!');
//   }

//   return new Status(true, 'Success!');
// };

// reportObject(isValid(normalize(trim('444-44-4444')))); // -> (true, 'Success!')
