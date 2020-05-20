// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../ninja/simple-test';

const Ninja = () => {
  let feints = 0;

  const getFeints = function () {
    return feints;
  };

  const feint = function () {
    feints++;
  };

  feints = feint();

  return {
    getFeints,
    feint,
  };
};

const ninja1 = Ninja();
ninja1.feint();

assert(ninja1.feints === undefined, 'And the private data is inaccessible to us.');

assert(ninja1.getFeints() === 1, "We're able to access the internal feint count.");

const ninja2 = Ninja();
assert(ninja2.getFeints() === 0, 'The second ninja object gets its own feints variable.');
