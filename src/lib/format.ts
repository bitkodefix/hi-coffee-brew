/**
 * Format price to Indonesian Rupiah format
 */
export const formatIDR = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format price without currency symbol
 */
export const formatIDRNumber = (amount: number): string => {
  return new Intl.NumberFormat("id-ID").format(amount);
};