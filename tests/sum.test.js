const foo = require('../src/functions_exercises');

test('A soma de 20 por 12 deve ser 32', () => {
  expect(foo.Calc(20, 32, foo.Somar)).toBe(32);
});
test('A divisão de 20 por 10 deve ser 2', () => {
  expect(foo.Calc(20, 10, foo.Dividir)).toBe(2 );
});
test('A subtração de 24 por 3 deve ser 21', () => {
  expect(foo.Calc(24, 3, foo.Subtrair)).toBe(21);
});
test('A multiplicação de 5 * 3 deve ser 15', () => {
  expect(foo.Calc(5, 3, foo.Somar)).toBe(15);
});