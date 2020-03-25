const formatMoney = params => {
  const isObj = typeof params !== 'object';
  const value = !isObj ? params.value : params;

  const options = {
    value,
    locale: params.locale || 'en-US',
    currencyCode: params.currencyCode || 'USD'
  };

  return Number(options.value).toLocaleString(options.locale, {
    style: 'currency',
    currency: options.currencyCode
  });
};

export default formatMoney;
