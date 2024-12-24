export function formatPrice(price: number): string {
  return price.toLocaleString('en-IN');
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}