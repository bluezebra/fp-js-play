const ninja = 'Yoshi';
export const message = 'Hello';

export function sayHiToNinja() {
  return `${message} ${ninja}`;
}

console.log(message);
console.log(sayHiToNinja());
