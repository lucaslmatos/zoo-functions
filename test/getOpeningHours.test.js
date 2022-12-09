const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Quando não receber um parâmetro, deve retornar os horários disponíveis', () => {
    const expected = hours;
    const actual = getOpeningHours();
    expect(actual).toEqual(expected);
  });
  it('Ao receber o parâmetro Monday, deve retornar sempre que está fechado, independente do horário', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '08:30-PM');
    expect(actual).toEqual(expected);
    const actual2 = getOpeningHours('Monday', '08:30-AM');
    expect(actual2).toEqual(expected);
    const actual3 = getOpeningHours('Monday', '12:30-AM');
    expect(actual3).toEqual(expected);
  });
  it('Ao receber o parâmetro correto, deve retornar corretamente a inforação do estado do zoológico, independente das letras maiúsculas e minúsculas', () => {
    const expectedclose = 'The zoo is closed';
    const expectedopen = 'The zoo is open';
    const actual = getOpeningHours('Tuesday', '08:30-PM');
    expect(actual).toEqual(expectedclose);
    const actual2 = getOpeningHours('tueSdAy', '05:30-pM');
    expect(actual2).toEqual(expectedopen);
    const actual3 = getOpeningHours('FrIdaY', '09:30-AM');
    expect(actual3).toEqual(expectedclose);
    const actual4 = getOpeningHours('Sunday', '09:30-pM');
    expect(actual4).toEqual(expectedclose);
  });
  it('Ao receber o parâmetro de horas, minutos, abreviação AM/PM incorretos, ou não receber um parametro do tipo numero em hora ou um dia válido, deve retornar um erro correspondente ', () => {
    expect(() => getOpeningHours('Tuesday', '13:30-PM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('FrIdaY', '09:78-AM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Sunday', '09:20-AP')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Monday', 'T9:30-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '09:3T-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Duesday', '09:30-AM')).toThrow('The day must be valid. Example: Monday');
  });
  // it('Se a hora passada for igual a 0, deve ser considerado o horário 12', () => {
  //   expect(() => getOpeningHours('Tuesday', '00:30-AM')).toEqual('The zoo is open');
  // });
});
