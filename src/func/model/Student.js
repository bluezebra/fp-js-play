import Person from './Person';

export default class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends);
    const result = [];
    for (const idx in closeFriends) {
      const friend = closeFriends[idx];
      if (friend.school === this.school) {
        result.push(friend);
      }
    }
    return result;
  }
}
