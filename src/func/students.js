// import _ from 'lodash';
import * as R from 'ramda';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test';
import Student from './model/Student';
import Person from './model/Person';
import Address from './model/Address';
import zipCode from './model/valueTypes/zipCode';

const curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State');
curry.address = new Address('US');

const turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton');
turing.address = new Address('England');

const church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton');
church.address = new Address('US');

const kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton');
kleene.address = new Address('US');

// OO
report(
  church.studentsInSameCountryAndSchool([curry, turing, kleene])
    .map((s) => s.fullname),
);

// imperative
report(
  `studentsInSameCountryAndSchool: ${church.studentsInSameCountryAndSchool(
    [curry, turing, kleene],
  )
    .map((s) => s.fullname)}`,
);

// func
const selector = (country, school) => (student) => student.address.country === country && student.school === school;

const findStudentsBy = (friends, selectorfn) => friends.filter(selectorfn);

// -> [church, kleene]
report(findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton)')).map((s) => s.fullname));

// Freeze Immutability only handles parent object
// const personMutableChildren = Object.freeze(new Person('Haskell', 'Curry', '444-44-4444'));
// TypeError: Cannot assign to read only property '_firstname' of object '#<Person>'
// person.firstname = 'Bob';

const person = new Person('Alonzo', 'Church', '444-44-4444');

// TypeError: Cannot set property lastname of #<Person> which has only a getter
// person.lastname = 'Smith';

// Ramda lets us create immutable copy of object with private variable change
// lenses implement immutable setters
const lastnameLens = R.lensProp('lastname');
const newPerson = R.set(lastnameLens, 'Mourning', person);

assert(newPerson !== person, 'Not same person');
report(R.view(lastnameLens, person));

// even on nested objects
person.address = new Address(
  'US', 'NJ', 'Princeton', zipCode('08544', '1234'),
  'Alexander St.',
);

// Let’s create a lens that navigates to the address.zip property:
const zipPath = ['address', 'zip'];
const zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath));
report(R.view(zipLens, person)); // -> zipCode('08544', '1234')

// Because lenses implement immutable setters, you can change the nested object and
// return a new object:
const newPerson2 = R.set(zipLens, zipCode('90210', '5678'), person);
const newZip = R.view(zipLens, newPerson2); // -> zipCode('90210', '5678')
const originalZip = R.view(zipLens, person); // -> zipCode('08544', '1234')
assert(newZip.toString() !== originalZip.toString(), 'Different zips'); // -> true
