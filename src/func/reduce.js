import _ from 'lodash';
// import * as R from 'ramda';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage, reportObject } from '../test-simple/simple-test';
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
