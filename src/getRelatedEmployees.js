const data = require('../data/zoo_data');

const isManager = (id) => {
  const employeeFound = data.employees.find((employee) => employee.id === id);
  const verifyId = data.employees.some((employee) => employee.managers.includes(employeeFound.id));
  return verifyId;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const employeeMgs = data.employees.filter((employee) => employee.managers.includes(managerId));
    const employees = employeeMgs.map((employee) => `${employee.firstName} ${employee.lastName}`);
    return employees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
