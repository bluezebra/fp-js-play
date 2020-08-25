// import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';

class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  constructor(x) {
    this.$value = x;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${report(this.$value)})`;
  }
}

const match = R.curry((re, str) => re.test(str));
reportObject(Maybe.of('Malkovich Malkovich').map(match(/a/ig)))
// Just(True)

reportObject(Maybe.of(null).map(match(/a/ig)))
// Nothing

reportObject(Maybe.of({ name: 'Boris' }).map(R.prop('age')).map(R.add(10)))
// Nothing

reportObject(Maybe.of({ name: 'Dinah', age: 14 }).map(R.prop('age')).map(R.add(10)))
// Just(24)
