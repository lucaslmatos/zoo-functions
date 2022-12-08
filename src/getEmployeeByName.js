const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  const employeeFoundByFirstName = data.employees.find((name) => name.firstName === employeeName);
  const employeeFoundByLastName = data.employees.find((name) => name.lastName === employeeName);
  if (employeeFoundByFirstName === undefined) {
    return employeeFoundByLastName;
  } return employeeFoundByFirstName;
};

getEmployeeByName('Nigel');
getEmployeeByName('Bethea');

module.exports = getEmployeeByName;
