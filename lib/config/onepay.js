// OnePay configuration
export const ONEPAY_CONFIG = {
    // Replace these with your actual OnePay credentials
    APP_ID: 'ENKR11909605A5F43454D', // This should match exactly with your OnePay merchant ID
    APP_TOKEN: 'e50a40abc140e020da42da485e6188ec53e69f0023ad71309e7f89b71275e613543df6b99e0e63c8.LBN211909605A5F434584',
    HASH_SALT: 'XTKE11909605A5F434570',
    API_URL: 'https://api.onepay.lk/v3/checkout/link/'
};

// Test card details for development
export const TEST_CARDS = {
    visa: [
        { number: "4508750015741019", expiry: "01/39", cvv: "100" },
        { number: "4012000033330026", expiry: "01/39", cvv: "100" }
    ],
    master: [
        { number: "5123450000000008", expiry: "01/39", cvv: "100" },
        { number: "5111111111111118", expiry: "01/39", cvv: "100" }
    ]
};
