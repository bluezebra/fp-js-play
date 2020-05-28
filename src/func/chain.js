import _ from 'lodash';
import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import Person from './model/Person';
import Address from './model/Address';

const isValid = (val) => !_.isUndefined(val) && !_.isNull(val);

const names = ['alonzo church', 'Haskell curry', 'stephen_kleene',
  'John Von Neumann', 'stephen_kleene'];

report(`Clean names: ${_.chain(names)
  .filter(isValid)
  .map((s) => s.replace(/_/, ' '))
  .uniq()
  .map(_.startCase)
  .sort()
  .value()}`);

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
const p5 = new Person('David', 'Hilbert', '555-55-5555');
p5.address = new Address('Germany');
p5.birthYear = 1903;
const p6 = new Person('Alan', 'Turing', '666-66-6666');
p6.address = new Address('England');
p6.birthYear = 1912;
const p7 = new Person('Stephen', 'Kleene', '777-77-7777');
p7.address = new Address('US');
p7.birthYear = 1909;

const persons = [p1, p2, p3, p4, p5, p6, p7];
const getCountry = (p) => p.address.country;

const gatherStats = (stat, country) => {
  if (!isValid(stat[country])) {
    stat[country] = { name: country, count: 0 };
  }
  stat[country].count++;
  return stat;
};

reportObject(persons.map(getCountry).reduce(gatherStats, {}));

const countryPath = ['address', 'country'];
const countryLens = R.lens(R.path(countryPath), R.assocPath(countryPath));

reportObject(_(persons).map(R.view(countryLens)).reduce(gatherStats, {}));
// or
reportObject(_.groupBy(persons, R.view(countryLens)));
