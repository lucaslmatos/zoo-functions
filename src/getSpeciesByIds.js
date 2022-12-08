const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) return [];
  const speciesFound = ids.map((animalId) => data.species.find((specie) => specie.id === animalId));
  return speciesFound;
};

module.exports = getSpeciesByIds;
