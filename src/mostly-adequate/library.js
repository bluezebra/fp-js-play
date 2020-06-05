// head :: [a] -> a
export const head = (xs) => xs[0];
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}
// filter :: (a -> Boolean) -> [a] -> [a]
export const filter = curry((fn, xs) => xs.filter(fn));
// map :: Functor f => (a -> b) -> f a -> f b
export const map = curry((fn, f) => f.map(fn));
// reduce :: (b -> a -> b) -> b -> [a] -> b
export const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
// split :: String -> String -> [String]
export const split = curry((sep, str) => str.split(sep));
// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
// replace :: RegExp -> String -> String -> String
export const replace = curry((re, rpl, str) => str.replace(re, rpl));
// toLowerCase :: String -> String
export const toLowerCase = (s) => s.toLowerCase();
// intercalate :: String -> [String] -> String
export const intercalate = curry((str, xs) => xs.join(str));
// toUpperCase :: String -> String
export const toUpperCase = (s) => s.toUpperCase();
// match :: RegExp -> String -> Boolean
export const match = curry((re, str) => re.test(str));
