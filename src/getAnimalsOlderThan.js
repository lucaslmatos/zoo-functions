const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const searchAnimal = data.species.find((specie) => specie.name === animal);
  const avaliador = searchAnimal.residents.every((animalresident) => animalresident.age >= age);
  return avaliador;
};

module.exports = getAnimalsOlderThan;
