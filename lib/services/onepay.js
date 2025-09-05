// OnePay Payment Service
import { ONEPAY_CONFIG } from '../config/onepay';

export const generateHash = async (appId, currency, amount) => {
    const hashSalt = ONEPAY_CONFIG.HASH_SALT;
    const concatenatedString = `${appId}${currency}${amount}${hashSalt}`;
    
    // Convert the string to hash using SHA-256
    const encoder = new TextEncoder();
    const data = encoder.encode(concatenatedString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Convert buffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

export const initializeOnePayPayment = ({
    appId,
    hashToken,
    amount,
    orderReference,
    customerFirstName,
    customerLastName,
    customerEmail,
    customerPhoneNumber,
    transactionRedirectUrl,
    additionalData,
    appToken,
    currency = "LKR"
}) => {
    if (typeof window !== 'undefined') {
        // Generate hash using all required fields
        const hash = generateHash(appId, currency, amount);

        window.onePayData = {
            app_id: appId,
            amount: amount,
            currency: currency,
            hash: hash,
            name: `${customerFirstName} ${customerLastName}`, // Required field
            customer_details: { // Required field
                first_name: customerFirstName,
                last_name: customerLastName,
                email: customerEmail,
                phone_number: customerPhoneNumber
            },
            interval: "ONETIME", // Required field
            interval_count: 1, // Required field
            apptoken: appToken,
            redirect_url: transactionRedirectUrl,
            additional_data: additionalData
        };
    }
};

export const addOnePayListeners = (onSuccess, onFailure) => {
    if (typeof window !== 'undefined') {
        window.addEventListener("onePaySuccess", function (e) {
            const successData = e.detail;
            onSuccess(successData);
        });

        window.addEventListener("onePayFail", function (e) {
            const failData = e.detail;
            onFailure(failData);
        });
    }
};

export const removeOnePayListeners = (onSuccess, onFailure) => {
    if (typeof window !== 'undefined') {
        window.removeEventListener("onePaySuccess", onSuccess);
        window.removeEventListener("onePayFail", onFailure);
    }
};
