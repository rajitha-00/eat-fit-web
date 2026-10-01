'use client';
import { useState } from 'react';

const OnePay = ({
  amount,
  currency = "LKR",
  name,
  customer_details,
  interval = "MONTH",
  interval_count = 1,
  additional_data,
  redirect_url,
  onSuccess,
  onFailure,
  disabled = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Format amount to have exactly 2 decimal places
  const formatAmount = (val) => {
    return Number(val).toFixed(2);
  };

  const createPayment = async () => {
    setIsLoading(true);

    try {
      const formattedAmount = formatAmount(amount);
      let parsedAdditional = {};
      try {
        parsedAdditional =
          typeof additional_data === "string"
            ? JSON.parse(additional_data)
            : additional_data || {};
      } catch {
        parsedAdditional = {};
      }

      const redirectTarget =
        redirect_url || `${window.location.origin}/checkout/success`;

      // Secure server-side checkout (server handles API tokens, hash generation, and credentials)
      const serverRes = await fetch("/api/onepay/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formattedAmount,
          currency,
          customer_details,
          additional_data: parsedAdditional,
          redirect_url: redirectTarget,
        }),
      });

      const serverData = await serverRes.json();

      if (!serverRes.ok || !serverData.success || !serverData.redirect_url) {
        throw new Error(
          serverData.message || "Failed to initialize payment gateway"
        );
      }

      const redirectUrl = serverData.redirect_url;
      const reference = serverData.reference || `EAT-${Date.now()}`;

      // Save pending order details in sessionStorage before redirecting
      const orderData = {
        orderId: "",
        reference: reference,
        customerName: `${customer_details?.first_name || "Guest"} ${customer_details?.last_name || "Customer"}`.trim(),
        customerPhone: customer_details?.phone_number || "",
        customerEmail: customer_details?.email || "",
        customerAddress: parsedAdditional.customerAddress || "",
        orderType: parsedAdditional.orderType || "Takeaway",
        orderStatus: "Preparing",
        totalPrice: Number(amount),
        orderTime: Date.now(),
        paymentMethod: "Online",
        items: parsedAdditional.items || [],
      };
      sessionStorage.setItem("pendingOrder", JSON.stringify(orderData));

      if (onSuccess) onSuccess({ redirectUrl, reference });
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Error creating payment:", error);
      if (onFailure) onFailure(error);
      alert("Error creating payment: " + (error.message || "Please try again"));
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
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        fontWeight: 600,
        borderRadius: "12px",
        padding: "12px 24px",
        transition: "all 0.3s ease",
      }}
    >
      {isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span>Connecting to Gateway...</span>
        </>
      ) : (
        <>
          <i className="far fa-shield-check"></i>
          <span>Pay Securely with OnePay</span>
        </>
      )}
    </button>
  );
};

export default OnePay;
