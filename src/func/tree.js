// import _ from 'lodash';
// import * as R from 'ramda';
import {
  // eslint-disable-next-line no-unused-vars
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test';
import Tree from './model/Tree';
import Node from './model/Node';
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
const p5 = new Person('David', 'Hilbert', '555-55-5555');
p5.address = new Address('Germany');
p5.birthYear = 1903;
const p6 = new Person('Alan', 'Turing', '666-66-6666');
p6.address = new Address('England');
p6.birthYear = 1912;
const p7 = new Person('Stephen', 'Kleene', '777-77-7777');
p7.address = new Address('US');
p7.birthYear = 1909;

const church = new Node(p4);
const rosser = new Node(p2);
const turing = new Node(p6);
const kleene = new Node(p7);
const nelson = new Node(new Person('Nels', 'Nelson', '123-23-2345'));
const constable = new Node(new Person('Robert', 'Constable', '123-23-6778'));
const mendelson = new Node(new Person('Elliot', 'Mendelson', '123-23-3454'));
const sacks = new Node(new Person('Gerald', 'Sacks', '454-76-3434'));
const gandy = new Node(new Person('Robert', 'Gandy', '454-78-3432'));

church.append(rosser).append(turing).append(kleene);
kleene.append(nelson).append(constable);
rosser.append(mendelson).append(sacks);
turing.append(gandy);

report(Tree.map(church, (p) => p.fullname).toArray());
