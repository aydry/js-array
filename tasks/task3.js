function findByName(people, name) {
  return people.find(person => person.name.toLowerCase() === name.toLowerCase());
}

module.exports = findByName;