const findTheOldest = function([...people]) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldest, person) => {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    return age > oldest.age ? { ...person, age } : oldest;
  }, { age: 0 });

};

// Do not edit below this line
module.exports = findTheOldest;
