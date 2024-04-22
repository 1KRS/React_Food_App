// const currencyFormatting = (value, currency) => {
//   return `${value}${currency}`;
// };

const currencyFormatter = new Intl.NumberFormat('el-GR', {
  style: 'currency',
  currency: 'EUR',
});

export { currencyFormatter };
