class Format {
  toBRLCurrency(number: number): string {
    const numberToFixed = number.toFixed(2);

    const numberWithComma = numberToFixed.replace('.', ',');

    return `R$ ${numberWithComma}`;
  }
}

export default new Format();
