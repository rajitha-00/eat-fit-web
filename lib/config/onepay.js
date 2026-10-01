// OnePay configuration
// In production, these values MUST be loaded via environment variables (.env.local)
export const ONEPAY_CONFIG = {
  APP_ID:
    process.env.NEXT_PUBLIC_ONEPAY_APP_ID ||
    process.env.ONEPAY_APP_ID ||
    "",
  APP_TOKEN: process.env.ONEPAY_APP_TOKEN || "",
  HASH_SALT: process.env.ONEPAY_HASH_SALT || "",
  API_URL:
    process.env.ONEPAY_API_URL || "https://api.onepay.lk/v3/checkout/link/",
};

// Test card details for development only
export const TEST_CARDS = {
  visa: [
    { number: "4508750015741019", expiry: "01/39", cvv: "100" },
    { number: "4012000033330026", expiry: "01/39", cvv: "100" },
  ],
  master: [
    { number: "5123450000000008", expiry: "01/39", cvv: "100" },
    { number: "5111111111111118", expiry: "01/39", cvv: "100" },
  ],
};
