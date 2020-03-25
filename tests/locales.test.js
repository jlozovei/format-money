import formatMoney from '../index';

test('format BRL with Portuguese locale', () => {
  const options = {
    value: 1000,
    currencyCode: 'BRL',
    locale: 'pt-BR'
  };

  const formatted = formatMoney(options);
  expect(formatted).toBe('R$ 1.000,00');
});

test('format BRL with English locale', () => {
  const options = {
    value: 1000,
    currencyCode: 'BRL',
    locale: 'en-US'
  };

  const formatted = formatMoney(options);
  expect(formatted).toBe('R$1,000.00');
});
