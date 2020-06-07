import {
  assert, report, printMessage, reportObject,
} from '../test-simple/simple-test'

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

report(Right(2)
  .map(x => x + 1)
  .map(x => x / 2)
  .fold(x => 'error', x => x))

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

report(Left(3)
  .map(x => x + 1)
  .map(x => x / 2)
  .fold(x => 'error', x => x))

//   1
// const findColor = name =>
//   ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name]
// report(findColor('red').slice(1).toUpperCase())

const fromNullable = x => (x != null ? Right(x) : Left(null))

// 2
const findColor = name =>
  fromNullable({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])
  // const found = ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name]
  // return found ? Right(found) : Left(null)

report(findColor('green')
  .map(c => c.slice(1))
  .fold(e => 'no color', c => c.toUpperCase()))

report(findColor('yellow')
  .map(c => c.slice(1))
  .fold(
    e => 'no color',
    c => c.toUpperCase()
  ))
