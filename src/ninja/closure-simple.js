import { assert } from './simple-test';


const outerValue = 'samurai';
let later;

function outerFunction() {
  const innerValue = 'ninja';
  function innerFunction() {
    assert(outerValue === 'samurai', 'I can see the samurai.');
    assert(innerValue === 'ninja', 'I can see the ninja.');
  }
  later = innerFunction;
}

outerFunction();
later();
