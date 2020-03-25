import formatMoney from '../index';

test('default options', () => {
  const formatted = formatMoney(2000);
  expect(formatted).toBe('$2,000.00');
});
