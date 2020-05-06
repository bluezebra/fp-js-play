import _ from 'lodash';
// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../ninja/simple-test';

const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 },
];

const enrolled = enrollment.filter((s) => s.enrolled > 1);
const grades = enrolled.map((e) => e.grade);
const sum = grades.reduce((a, b) => a + b, 0);
const total = grades.length;

export const mean = sum / total;

export const output = _.chain(enrollment)
  .filter((s) => s.enrolled > 1)
  .map('grade')
  .mean()
  .value();

export const output1 = _.meanBy(enrollment, 'grade');

console.log(mean);
console.log(output);
console.log(output1);
