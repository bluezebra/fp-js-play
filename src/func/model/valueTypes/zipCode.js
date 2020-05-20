// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../../../ninja/simple-test';

// Value object returning object literal interface
export default function zipCode(code, location) {
  // pseudo-private variables.only accessible via closures in object literal
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
// -> '08544-3345'
report(princetonZip.toString());
