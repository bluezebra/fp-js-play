import _ from "lodash";

const enrollment = [
    { enrolled: 2, grade: 100 },
    { enrolled: 2, grade: 80 },
    { enrolled: 1, grade: 89 }
  ];
  
let enrolled = enrollment.filter(s => s.enrolled > 1);
let grades = enrolled.map(e => e.grade);
let sum = grades.reduce((a, b) => a + b, 0);
let total = grades.length;

export let mean = sum / total;
  
export const output = _.chain(enrollment)
    .filter(s => s.enrolled > 1)
    .map("grade")
    .mean()
    .value();
  
export const output1 = _.meanBy(enrollment, "grade");

console.log(mean);
console.log(output);
console.log(output1);

