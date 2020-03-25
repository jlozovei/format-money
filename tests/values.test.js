import formatMoney from '../index';

test('format BRL', () => {
  const options = {
    value: 1000,
    currencyCode: 'BRL',
    locale: 'pt-BR'
  };

  const formatted = formatMoney(options);
  expect(formatted).toBe('R$ 1.000,00');
});

test('format USD', () => {
  const options = {
    value: 1000,
    currencyCode: 'USD',
    locale: 'en-US'
  };

  const formatted = formatMoney(options);
  expect(formatted).toBe('$1,000.00');
});
