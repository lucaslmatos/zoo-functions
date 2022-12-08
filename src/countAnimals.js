const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const namesOfAnimals = species.map((specie) => specie.name);
  const numberOfAnimals = species.map((specie) => specie.residents.length);
  const obj = {};
  if (!animal) {
    for (let i = 0; i < namesOfAnimals.length; i += 1) {
      obj[namesOfAnimals[i]] = numberOfAnimals[i];
    }
    return obj;
  }
  const nameOfAnimal = species.find((specie) => specie.name === Object.values(animal)[0]);
  const givenSex = nameOfAnimal.residents.filter((rdnt) => rdnt.sex === Object.values(animal)[1]);
  if (!Object.values(animal)[1]) return nameOfAnimal.residents.length;
  return givenSex.length;
};
module.exports = countAnimals;
