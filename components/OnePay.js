'use client';
import { useState } from 'react';
import { ONEPAY_CONFIG } from '@/lib/config/onepay';

const OnePay = ({
  app_id,
  amount,
  currency = "LKR",
  name,
  customer_details,
  interval = "MONTH",
  interval_count = 1,
  additional_data,
  apptoken,
  redirect_url,
  onSuccess,
  onFailure,
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Format amount to have exactly 2 decimal places
  const formatAmount = (amount) => {
    return Number(amount).toFixed(2);
  };

  if (!app_id) {
    console.error("OnePay Error: app_id is required");
    throw new Error("app_id is required for OnePay integration");
  }

  // SHA-256 hash generation function for OnePay (removed as it's not being used)

  const createPayment = async () => {
    setIsLoading(true);

    try {
      // Format amount to exactly 2 decimal places
      const formattedAmount = formatAmount(amount);

      // Create the concatenated string for hash generation
      // Format: app_id + currency + amount + hash_salt (no separators)
      const hashInputString = `${app_id}${currency}${formattedAmount}${ONEPAY_CONFIG.HASH_SALT}`;

      // Generate SHA-256 hash
      const encoder = new TextEncoder();
      const data = encoder.encode(hashInputString);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hash = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      // Structure the payload according to OnePay API requirements
      const reference = `EAT-${Date.now()}`;
      const paymentData = {
        app_id: app_id,
        reference: reference,
        amount: Number(formattedAmount),
        currency: currency,
        customer_first_name: customer_details?.first_name || "Guest",
        customer_last_name: customer_details?.last_name || "Customer",
        customer_email: customer_details?.email || "guest@example.com",
        customer_phone_number: customer_details?.phone_number || "+94771234567",
        transaction_redirect_url:
          redirect_url || window.location.origin + "/checkout/success",
        callback_url: window.location.origin + "/api/onepay/callback", // Add callback URL
        additional_data: additional_data || {},
        hash: hash,
      };

      // Make API call to OnePay
      const response = await fetch(ONEPAY_CONFIG.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ONEPAY_CONFIG.APP_TOKEN, // Use APP_TOKEN for authorization
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();

      if (response.ok && result.status === 200) {
        // Extract gateway redirect URL from the response
        const redirectUrl = result.data?.gateway?.redirect_url;
        if (redirectUrl) {
          // Store the order details in sessionStorage before redirecting
          const orderData = {
            orderId: "",
            reference: reference, // Store the reference for tracking
            customerName: `${customer_details.first_name} ${customer_details.last_name}`,
            customerPhone: customer_details.phone_number,
            customerEmail: customer_details.email,
            customerAddress: JSON.parse(additional_data)?.customerAddress || "",
            orderType: JSON.parse(additional_data)?.orderType || "Takeaway",
            orderStatus: "Preparing",
            totalPrice: Number(amount),
            orderTime: Date.now(),
            paymentMethod: "Online",
            items: JSON.parse(additional_data)?.items || [],
          };
          sessionStorage.setItem("pendingOrder", JSON.stringify(orderData));

          window.location.href = redirectUrl;
          if (onSuccess) onSuccess(result);
        } else {
          console.error("Missing redirect URL in response:", result);
          if (onFailure) onFailure(new Error("Payment gateway URL not found"));
          alert("Error: Payment gateway URL not found");
        }
      } else {
        console.error("Payment creation failed:", result);
        if (onFailure) onFailure(result);
        alert(
          "Payment creation failed: " + (result.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      if (onFailure) onFailure(error);
      alert("Error creating payment: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={createPayment}
      className="btn btn-primary"
      disabled={isLoading || disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {isLoading ? "Processing..." : "Pay with OnePay"}
    </button>
  );
};

export default OnePay;

