import _ from 'lodash';
// import * as R from 'ramda';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test';
import Person from './model/Person';
import Address from './model/Address';

// Function chaining 61

const array = [3, 2, 5, 1, 7];
report(array.map((x) => x));
report(`reverse mutates${array.reverse()}`);
report(array.map((x) => x));

const p1 = new Person('Haskell', 'Curry', '111-11-1111');
p1.address = new Address('US');
p1.birthYear = 1900;
const p2 = new Person('Barkley', 'Rosser', '222-22-2222');
p2.address = new Address('Greece');
p2.birthYear = 1907;
const p3 = new Person('John', 'von Neumann', '333-33-3333');
p3.address = new Address('Hungary');
p3.birthYear = 1903;
const p4 = new Person('Alonzo', 'Church', '444-44-4444');
p4.address = new Address('US');
p4.birthYear = 1903;

const persons = [p1, p2, p3, p4];

report(`map only: ${persons.map((x) => x.fullname)}`);
report(_(persons).map((x) => x.fullname));

report(persons.map(
  (p) => p.fullname,
).reverse());

report(_(persons).map(
  (p) => ((p !== null && p !== undefined) ? p.fullname : ''),
).reverse());

report(_(persons).reverse().map(
  (p) => ((p !== null && p !== undefined) ? p.fullname : ''),
));

report(`map then reverse: ${persons.map(
  (p) => ((p !== null && p !== undefined) ? p.fullname : ''),
).reverse()}`);

report(`reverse then map: ${persons.reverse().map(
  (p) => ((p !== null && p !== undefined) ? p.fullname : ''),
)}`);
