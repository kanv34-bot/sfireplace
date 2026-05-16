export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price?: number): string {
  if (!price) return "面议 / Negotiable";
  return `¥${price.toLocaleString()}`;
}
