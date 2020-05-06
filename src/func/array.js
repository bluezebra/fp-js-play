// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../ninja/simple-test';

const arrayToMutate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sortDescMutable = (ar) => ar.sort((a, b) => b - a);

report(arrayToMutate);
report(sortDescMutable(arrayToMutate));
report(arrayToMutate);

const arrayToMutate2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arrayToMutate2.length; i++) {
  arrayToMutate2[i] **= 2;
}
report(arrayToMutate2);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
report(array.map((num) => num ** 2));
