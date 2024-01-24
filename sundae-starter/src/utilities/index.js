export const toCurrency = (rawNumber, locale = 'en-US', currencyType = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyType,
    minimumFractionDigits: 2
  }).format(Number(rawNumber));
}