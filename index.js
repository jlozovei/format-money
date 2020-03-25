const formatMoney = ({ value, locale, currencyCode }) => {
  return Number(value).toLocaleString(locale, {
    style: 'currency',
    currency: currencyCode
  });
};

export default formatMoney;
