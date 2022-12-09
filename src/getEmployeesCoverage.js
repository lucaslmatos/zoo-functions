const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getByName = (name) =>
  employees.find((employee) => employee.firstName === name || employee.lastName === name);

const getById = (id) =>
  employees.find((employee) => employee.id === id);

const getSpecies = (employee) =>
  employee.responsibleFor.map((animal) => species.find((specie) => specie.id === animal));

const info = (employee) => {
  const name = getSpecies(employee).map((specie) => specie.name);
  const locations = getSpecies(employee).map((specie) => specie.location);
  const retorno = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: name,
    locations,
  };
  return retorno;
};

const identify = (identification) => {
  if (identification.name) {
    return getByName(identification.name);
  } return getById(identification.id);
};

const getEmployeesCoverage = (identification) => {
  if (identification) {
    const employee = identify(identification);
    if (employee === undefined) {
      throw new Error('Informações inválidas');
    }
    return info(employee);
  }
  return employees.map((employee) => info(employee));
};

module.exports = getEmployeesCoverage;
