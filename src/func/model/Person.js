export default class Person {
  constructor(firstname, lastname, ssn, birthYear = null, address = null) {
    this._ssn = ssn;
    this._firstname = firstname;
    this._lastname = lastname;
    this._birthYear = birthYear;
    this._address = address;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    this._firstname = firstname;
    return this;
  }

  get lastname() {
    return this._lastname;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(birthYear) {
    this._birthYear = birthYear;
    return this;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
    return this;
  }

  get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }

  peopleInSameCountry(friends) {
    const result = [];
    for (const idx in friends) {
      const friend = friends[idx];
      if (this.address.country === friend.address.country) {
        result.push(friend);
      }
    }
    return result;
  }
}
