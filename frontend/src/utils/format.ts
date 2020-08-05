class Format {
  toBRLCurrency(number: number): string {
    const { format } = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    const formattedToCurrency = format(number);

    return formattedToCurrency;
  }
}

export default new Format();
