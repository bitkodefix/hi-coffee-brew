// WhatsApp integration utilities for hi_coffee_97km

const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "";

export interface WhatsAppMessage {
  productName?: string;
  price?: number;
  customMessage?: string;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const buildWhatsAppURL = ({
  productName,
  price,
  customMessage,
}: WhatsAppMessage = {}): string => {
  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (productName && price) {
    message = `Halo hi_coffee_97km, saya mau pesan:\n\n${productName}\nHarga: ${formatPrice(price)}\n\nTerima kasih!`;
  } else {
    message = "Halo hi_coffee_97km, saya mau pesan kopi.";
  }

  const encodedMessage = encodeURIComponent(message);
  
  // If WHATSAPP_NUMBER is available, use it. Otherwise, use wa.me without number for now
  if (WHATSAPP_NUMBER) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
  
  return `https://wa.me/?text=${encodedMessage}`;
};

export const openWhatsApp = (messageConfig?: WhatsAppMessage): void => {
  const url = buildWhatsAppURL(messageConfig);
  window.open(url, "_blank");
};

// Predefined message templates
export const WHATSAPP_TEMPLATES = {
  generalInquiry: "Halo hi_coffee_97km, saya mau tanya tentang produk kopi Anda.",
  orderInquiry: "Halo hi_coffee_97km, saya mau pesan kopi.",
  customOrder: "Halo hi_coffee_97km, saya mau tanya tentang custom order.",
  sameDayDelivery: "Halo hi_coffee_97km, saya mau pesan kopi. Siap kirim hari ini?",
  consultation: "Halo hi_coffee_97km, saya mau konsultasi tentang pilihan kopi yang cocok untuk saya.",
} as const;