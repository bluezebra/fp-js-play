/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

class Maybe {
  static just(a) {
    return new Just(a)
  }

  static nothing() {
    return new Nothing()
  }

  static fromNullable(a) {
    return a !== null ? Maybe.just(a) : Maybe.nothing
  }

  static of(a) {
    return this.just(a)
  }

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }
}

class Just extends Maybe {
  constructor(value) {
    super()
    this._value = value
  }

  get value() {
    return this._value
  }

  map(f) {
    return Maybe.fromNullable(f(this._value))
  }

  getOrElse() {
    return this._value
  }

  filter(f) {
    Maybe.fromNullable(f(this._value) ? this._value : null)
  }

  chain(f) {
    return f(this._value)
  }

  toString() {
    return `Maybe.Just(${this._value})`
  }
}

class Nothing extends Maybe {
  map(f) {
    return this
  }

  get value() {
    throw new TypeError('Can\'t extract the value of a Nothing')
  }

  getOrElse(other) {
    return other
  }

  filter(f) {
    return this._value
  }

  chain(f) {
    return this
  }

  toString() {
    return 'Maybe.Nothing'
  }
}
