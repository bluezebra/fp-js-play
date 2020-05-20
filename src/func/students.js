// import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../ninja/simple-test';
import Student from './model/Student';
import Person from './model/Person';
import Address from './model/Address';

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


const selector = (country, school) => (student) => student.address.country === country && student.school === school;

const findStudentsBy = (friends, selectorfn) => friends.filter(selectorfn);

// -> [church, kleene]
report(findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton)')).map((s) => s.fullname));

// Freeze Immutability
const person = Object.freeze(new Person('Haskell', 'Curry', '444-44-4444'));
// TypeError: Cannot assign to read only property '_firstname' of object '#<Person>'
// person.firstname = 'Bob';


// var person = new Person('Alonzo', 'Church', '444-44-4444');
// const lastnameLens = R.lensProp('lastname');
// const newPerson = R.set(lastnameLens, 'Mourning', person);