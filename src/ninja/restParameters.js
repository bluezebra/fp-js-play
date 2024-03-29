import { assert } from '../test-simple/simple-test';

function multiMax(first, ...remainingNumbers) {
  const sorted = remainingNumbers.sort((a, b) => b - a);

  return first * sorted[0];
}

assert(multiMax(3, 1, 2, 3) === 9, '3*3=9 (First arg, by largest.)');
