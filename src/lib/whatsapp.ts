// WhatsApp integration utilities
const WHATSAPP_NUMBER = "+6285600291862";
const BRAND_HANDLE = "@Hi_coffee_97km";

export interface OrderMessageParams {
  productName: string;
  variant?: string;
  quantity?: number;
  note?: string;
}

export interface WhatsAppLinkParams {
  number?: string;
  message: string;
}

/**
 * Build WhatsApp link with encoded message
 */
export const buildWaLink = ({ 
  number = WHATSAPP_NUMBER, 
  message 
}: WhatsAppLinkParams): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

/**
 * Build formatted order message for WhatsApp
 */
export const buildOrderMessage = ({
  productName,
  variant = "",
  quantity = 1,
  note = "-"
}: OrderMessageParams): string => {
  const message = [
    "Halo hi_coffee_97km, saya ingin pesan:",
    "",
    `- Produk: ${productName}`,
    variant ? `- Varian: ${variant}` : null,
    `- Qty: ${quantity}`,
    `Catatan: ${note}`,
    "",
    "Sumber: Landing hi_coffee_97km"
  ].filter(Boolean).join("\n");
  
  return message;
};

/**
 * Open WhatsApp with pre-filled message
 */
export const openWhatsApp = (message: string) => {
  const link = buildWaLink({ message });
  window.open(link, "_blank");
};

/**
 * Open WhatsApp for product order
 */
export const openWhatsAppOrder = (params: OrderMessageParams) => {
  const message = buildOrderMessage(params);
  openWhatsApp(message);
};

// Export constants for use in components
export { WHATSAPP_NUMBER, BRAND_HANDLE };