import _ from 'lodash';

export default class IO {
  constructor(effect) {
    if (!_.isFunction(effect)) {
      // eslint-disable-next-line no-throw-literal
      throw 'IO Usage: function required';
    }
    this.effect = effect;
  }

  static of(a) {
    return new IO(() => a);
  }

  static from(fn) {
    return new IO(fn);
  }

  map(fn) {
    const self = this;
    return new IO(() => fn(self.effect()));
  }

  chain(fn) {
    return fn(this.effect());
  }

  run() {
    return this.effect();
  }
}
