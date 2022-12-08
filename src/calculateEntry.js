const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const objEntrants = {};
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;
  objEntrants.child = child;
  objEntrants.adult = adult;
  objEntrants.senior = senior;
  return objEntrants;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const soma = obj.child * 20.99 + obj.adult * 49.99 + obj.senior * 24.99;
  return soma;
};

module.exports = { calculateEntry, countEntrants };
