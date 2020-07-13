/* eslint-disable class-methods-use-this */
class Empty {
  map(f) {
    return this
  }

  // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
  fmap(_) {
    return new Empty();
  }

  toString() {
    return 'Empty()'
  }
}

const empty = () => new Empty()

export default empty
