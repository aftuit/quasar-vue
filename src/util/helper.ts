const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}

export function getProductType(product_type: number | string) {
  switch (product_type) {
    case 1: case '1': return "O'simliklar";
    case 2: case '2': return 'Yovvoyi hayvonlar';
    case 3: case '3': return 'Daraxtlar';
    default: return 'Unknown!';
  }
}


export function formatDate(timestamp: number): string | null {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return null;
  }

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}


