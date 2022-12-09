const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeeResp = data.employees.find((employee) => employee.id === id);
  const firstAnim = employeeResp.responsibleFor[0];
  const anim = data.species.find((animal) => animal.id === firstAnim);
  const animalAges = anim.residents.map((resident) => resident.age);
  const olderAge = Math.max(...animalAges);
  const olderAnim = anim.residents.find((resident) => resident.age === olderAge);
  return Object.values(olderAnim);
};

module.exports = getOldestFromFirstSpecies;
