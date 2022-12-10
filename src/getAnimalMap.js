const data = require('../data/zoo_data');

const { species } = data;

const filter = (region) => {
  const fil = species.filter((specie) => specie.location === region).map((animal) => animal.name);
  return fil;
};

const animalNames = (animal, gender) => {
  const fil = species.find((specie) => specie.name === animal);
  let names = fil.residents.map((resident) => resident.name);
  if (gender.sex === 'male') {
    const newResident = fil.residents.filter((resident) => resident.sex === 'male');
    names = newResident.map((resident) => resident.name);
  }
  if (gender.sex === 'female') {
    const newResident = fil.residents.filter((resident) => resident.sex === 'female');
    names = newResident.map((resident) => resident.name);
  }
  return names;
};

const getEmpty = () => {
  const anmsNE = filter('NE');
  const anmsNW = filter('NW');
  const anmsSE = filter('SE');
  const anmsSW = filter('SW');
  return { NE: anmsNE, NW: anmsNW, SE: anmsSE, SW: anmsSW };
};

const getNE = (opt = {}) => {
  const anmsNE = filter('NE');
  const anmsNamesNE = anmsNE.map((animal) => animalNames(animal, opt));
  if (opt.sorted === true) {
    for (let index = 0; index < anmsNamesNE.length; index += 1) {
      anmsNamesNE[index] = anmsNamesNE[index].sort();
    }
  } const mapAnmsNE = anmsNE.map((animal, i) => ({ [animal]: anmsNamesNE[i] }));
  return mapAnmsNE;
};

const getNW = (opt = {}) => {
  const anmsNW = filter('NW');
  const anmsNamesNW = anmsNW.map((animal) => animalNames(animal, opt));
  if (opt.sorted === true) {
    for (let index = 0; index < anmsNamesNW.length; index += 1) {
      anmsNamesNW[index] = anmsNamesNW[index].sort();
    }
  } const mapAnmsNW = anmsNW.map((animal, i) => ({ [animal]: anmsNamesNW[i] }));
  return mapAnmsNW;
};

const getSE = (opt = {}) => {
  const anmsSE = filter('SE');
  const anmsNamesSE = anmsSE.map((animal) => animalNames(animal, opt));
  if (opt.sorted === true) {
    for (let index = 0; index < anmsNamesSE.length; index += 1) {
      anmsNamesSE[index] = anmsNamesSE[index].sort();
    }
  } const mapAnmsSE = anmsSE.map((animal, i) => ({ [animal]: anmsNamesSE[i] }));
  return mapAnmsSE;
};

const getSW = (opt = {}) => {
  const anmsSW = filter('SW');
  const anmsNamesSW = anmsSW.map((animal) => animalNames(animal, opt));
  if (opt.sorted === true) {
    for (let index = 0; index < anmsNamesSW.length; index += 1) {
      anmsNamesSW[index] = anmsNamesSW[index].sort();
    }
  } const mapAnmsSW = anmsSW.map((animal, i) => ({ [animal]: anmsNamesSW[i] }));
  return mapAnmsSW;
};

const getAll = (opt) => {
  const retorno = { NE: getNE(opt), NW: getNW(opt), SE: getSE(opt), SW: getSW(opt) };
  return retorno;
};

const getAnimalMap = (options) => {
  if (!options) {
    return getEmpty();
  }
  if (!options.includeNames) {
    return getEmpty();
  } return getAll(options);
};

module.exports = getAnimalMap;
