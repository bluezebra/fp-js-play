// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../../../ninja/simple-test';

function coordinate(lat, long) {
  const _lat = lat;
  const _long = long;

  return {
    latitude() {
      return _lat;
    },
    longitude() {
      return _long;
    },
    translate(dx, dy) {
      // returns new immutable object
      return coordinate(_lat + dx, _long + dy);
    },
    toString() {
      return `(${_lat},${_long})`;
    },
  };
}
const greenwich = coordinate(51.4778, 0.0015);

report(greenwich.toString());
