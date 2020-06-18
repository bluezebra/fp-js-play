import _, { noop } from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';


// Maybe can be applied to any function
// without modification through 'lift' page 136
report('test')