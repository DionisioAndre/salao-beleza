export function formatPrice(value) {
  if (!value && value !== 0) return "";

  return new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA",
    minimumFractionDigits: 2, // casas decimais
  }).format(value);
}