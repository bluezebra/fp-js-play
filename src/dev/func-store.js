import { assert } from './simple-test.js';

const ninja = {};

const store = {
  nextId: 1,
  cache: {},
  add(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};

assert(store.add(ninja), 'Function was safely added.');
assert(!store.add(ninja), 'But it was only added once.');
