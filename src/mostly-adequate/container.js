// import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
}

reportObject(Container.of(3))
reportObject(Container.of('hotdogs'))
reportObject(Container.of(Container.of({ name: 'yoda' })))

// (a -> b) -> Container a -> Container b
Container.prototype.map = function (f) {
  return Container.of(f(this.$value));
}

reportObject(Container.of(2).map(two => two + 2))
// Container(4)

reportObject(Container.of('flamethrowers').map(s => s.toUpperCase()))
// Container('FLAMETHROWERS')

reportObject(Container.of('bombs').map(R.append(' away')).map(R.length))
// Container(6)
