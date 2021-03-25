export const formatPrice = (numberPrice: number): string => {
  return new Intl.NumberFormat('de-DE').format(numberPrice)
}

export const translateCondition = (itemCondition: string) => {
  switch (itemCondition) {
    case 'new':
      return 'Nuevo';
    case 'used':
      return 'Usado';
    default:
      return '';
  }
}

export const formatDecimals = (decimals: number) => {
  if (decimals > 9) {
    return decimals.toString();
  } else {
    return `0${decimals.toString()}`;
  }
}