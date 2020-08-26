// eslint-disable-next-line no-unused-vars
import { assert, report, printMessage } from '../test-simple/simple-test'

const increment = (i) => i + 1

report(increment(0))
report(increment(2))

printMessage('msg', 'h1', 'Hello Func World')
