const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quando não receber um parâmetro, a função deve retornar Undefinied', () => {
    const expected = undefined;
    const actual = handlerElephants();
    expect(actual).toStrictEqual(expected);
  });
  it('Quando o parâmetro recebido não for uma String, a função deve retornar a mensagem "Parâmetro inválido, é necessário uma string".', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    const actual = handlerElephants(true);
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro count, deve retornar a quantidade de elefantes ', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro names, deve retornar um array com a relação dos nomes de todos os elefantes ', () => {
    const expected = ;
    const actual = handlerElephants('names');
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro averageAge, deve retornar a média de idade dos elefantes  ', () => {
    const expected = ;
    const actual = handlerElephants('averageAge');
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro location, deve retornar a localização dos elefantes dentro do Zoológico ', () => {
    const expected = ;
    const actual = handlerElephants('location');
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro popularity, deve retornar a a popularidade dos elefantes ', () => {
    const expected = ;
    const actual = handlerElephants('popularity');
    expect(actual).toStrictEqual(expected);
  });
  it('Quando receber o parâmetro count, deve retornar a quantidade de elefantes ', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(actual).toStrictEqual(expected);
  });
});
