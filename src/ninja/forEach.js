import { assert, report } from '../test-simple/simple-test';


function forEach(list, callback) {
  for (let n = 0; n < list.length; n++) {
    callback.call(list[n], n);
  }
}

const weapons = [
  { type: 'shuriken' },
  { type: 'katana' },
  { type: 'nunchucks' }];


function assertforEach(index) {
  report(this.type);
  assert(this === weapons[index],
    `Got the expected value of ${weapons[index].type}`);
}

forEach(weapons, assertforEach);
