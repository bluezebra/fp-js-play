import React from 'react';
import _ from "lodash";
import logo from './logo.svg';
import './App.css';

const enrollment = [
    { enrolled: 2, grade: 100 },
    { enrolled: 2, grade: 80 },
    { enrolled: 1, grade: 89 }
  ];
  
  let enrolled = enrollment.filter(s => s.enrolled > 1);
  let grades = enrolled.map(e => e.grade);
  let sum = grades.reduce((a, b) => a + b, 0);
  let total = grades.length;
  let mean = sum / total;
  console.log(mean);
  
  const output = _.chain(enrollment)
    .filter(s => s.enrolled > 1)
    .map("grade")
    .mean()
    .value();
  
  console.log(output);
  
  const output1 = _.meanBy(enrollment, "grade");
  
  console.log(output1);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
