import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import Person from './model/Person';
import Address from './model/Address';


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

const countryCount = _(persons).reduce((stat, person) => {
  const { country } = person.address;
  stat[country] = _.isUndefined(stat[country]) ? 1
    : stat[country] + 1;
  return stat;
}, {});

reportObject(countryCount);

// combine map and reduce
const getCountry = (person) => person.address.country;
const gatherStats = (stat, criteria) => {
  stat[criteria] = _.isUndefined(stat[criteria]) ? 1
    : stat[criteria] + 1;
  return stat;
};
reportObject(_(persons).map(getCountry).reduce(gatherStats, {}));

// rambda
const countryPath = ['address', 'country'];
const countryLens = R.lens(R.path(countryPath), R.assocPath(countryPath));
reportObject(_(persons).map(R.view(countryLens)).reduce(gatherStats, {}));

reportObject(_.groupBy(persons, R.view(countryLens)));

// addition commutative operation
report(_([0, 1, 3, 4, 5]).reduce(_.add)); // -> 13
report(_([0, 1, 3, 4, 5]).reduceRight(_.add)); // -> 13

assert(([1, 3, 4, 5]).reduce(_.divide) !== ([1, 3, 4, 5]).reduceRight(_.divide), 'divide non-commutative operation');

// map and reduce traverse entire array, if you don't need this try some (any)
const isNotValid = (val) => _.isUndefined(val) || _.isNull(val);
const notAllValid = (args) => _(args).some(isNotValid);
notAllValid(['string', 0, null, undefined]); // -> true
notAllValid(['string', 0, {}]); // -> false

const isValid = (val) => !_.isUndefined(val) && !_.isNull(val);
const allValid = (args) => _(args).every(isValid);
allValid(['string', 0, null]); // -> false
allValid(['string', 0, {}]); // -> true
