const data = require('../data/zoo_data');

const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const ifMonday = (scheduleTarget) => {
  const objRetorno = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  return objRetorno;
};

const ifDay = (scheduleTarget) => {
  const officeHour = data.hours[scheduleTarget];
  const exhibition = data.species.filter((specie) => specie.availability.includes(scheduleTarget));
  const namesExhibition = exhibition.map((animal) => animal.name);
  const retorno = { [scheduleTarget]: { officeHour:
    `Open from ${Object.values(officeHour)[0]}am until ${Object.values(officeHour)[1]}pm`,
  exhibition: namesExhibition } };
  return retorno;
};

const ifAnimal = (scheduleTarget) => {
  const retorno = data.species.find((animal) => animal.name === scheduleTarget);
  return retorno.availability;
};

const ifAny = (scheduleTarget) => {
  const retorno = {};
  for (let i = 0; i < days.length; i += 1) {
    const animalsDay = data.species.filter((animal) => animal.availability.includes(days[i]));
    const hourDay = data.hours[days[i]];
    retorno[days[i]] = {
      exhibition: animalsDay.map((animal) => animal.name),
      officeHour: `Open from ${Object.values(hourDay)[0]}am until ${Object.values(hourDay)[1]}pm`,
    };
  }
  retorno.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return retorno;
};

const getSchedule = (scheduleTarget) => {
  if (data.species.some((animal) => animal.name === scheduleTarget)) {
    return ifAnimal(scheduleTarget);
  }
  if (scheduleTarget === 'Monday') {
    return ifMonday(scheduleTarget);
  }
  if (days.includes(scheduleTarget)) {
    return ifDay(scheduleTarget);
  }
  return ifAny(scheduleTarget);
};

module.exports = getSchedule;
