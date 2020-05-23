// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../../test-simple/simple-test';
// Value object immutable

function zipCode(code, location) {
  const _code = code;
  const _location = location || '';
  return {
    code() {
      return _code;
    },
    location() {
      return _location;
    },
    fromString(str) {
      const parts = str.split('-');
      return zipCode(parts[0], parts[1]);
    },
    toString() {
      return `${_code}-${_location}`;
    },
  };
}

const princetonZip = zipCode('08544', '3345');

report(princetonZip.toString()); // -> '08544-3345'
