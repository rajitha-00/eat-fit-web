"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import OnePay from "@/components/OnePay";
import { ONEPAY_CONFIG, generateHash } from "@/lib/config/onepay";
import { useCreateOrderMutation } from "@/lib/api/apiSlice";
import { useRouter } from "next/navigation";
import { clearCart } from "@/lib/api/cartSlice";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [orderType, setOrderType] = useState("Takeaway");
  const [customerAddress, setCustomerAddress] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionData, setTransactionData] = useState(null);
  const [deliveryFeeAcknowledged, setDeliveryFeeAcknowledged] = useState(false);
  const [paymentInstructionsAcknowledged, setPaymentInstructionsAcknowledged] = useState(false);

  const [createOrder, { isLoading: placingOrder }] = useCreateOrderMutation();

  useEffect(() => {
    setMounted(true);

    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("payment_status");
    const transactionId = urlParams.get("transaction_id");
    const reference = urlParams.get("reference");

    if (paymentStatus === "success" && transactionId) {
      setPaymentSuccess(true);
      setPaymentMethod("Online");
      setTransactionData({ transactionId, reference, status: "success" });

      const pendingOrder = JSON.parse(
        sessionStorage.getItem("pendingOrder") || "{}"
      );

      if (pendingOrder.customerName) {
        setCustomerName(pendingOrder.customerName);
        setCustomerPhone(pendingOrder.customerPhone);
        setCustomerEmail(pendingOrder.customerEmail);
        setOrderType(pendingOrder.orderType || "Takeaway");
        setCustomerAddress(pendingOrder.customerAddress || "");
      }

      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  // TEMPORARILY DISABLED - Online payments
  // useEffect(() => {
  //   if (orderType === "Store Delivery") {
  //     setPaymentMethod("Online");
  //   }
  // }, [orderType]);

  if (!mounted) return null;

  const total = cartItems.reduce((sum, item) => {
    const addonTotal = (item.selectedAddons || []).reduce(
      (aSum, addon) => aSum + (addon.price || 0) * (addon.quantity || 1),
      0
    );
    return sum + (item.price + addonTotal) * item.quantity;
  }, 0);

  const handlePlaceOrder = async () => {
    if (!customerName) {
      alert("Please enter your full name (first name and last name)");
      return;
    }

    if (!customerPhone) {
      alert("Please enter your phone number");
      return;
    }

    if (!customerEmail || !customerEmail.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    const nameParts = customerName.trim().split(" ");
    if (nameParts.length < 2) {
      alert("Please enter both your first name and last name");
      return;
    }

    const phoneNumber = customerPhone.replace(/[^0-9+]/g, "");
    if (phoneNumber.length < 9) {
      alert("Please enter a valid phone number");
      return;
    }

    if (orderType === "Store Delivery" && !customerAddress.trim()) {
      alert("Please enter your delivery address");
      return;
    }

    const totalPrice = total;

    const payload = {
      orderId: "",
      customerName,
      customerPhone,
      customerEmail,
      customerAddress: orderType === "Store Delivery" ? customerAddress : "",
      orderType,
      orderStatus: "Preparing",
      totalPrice,
      orderTime: Date.now(),
      paymentMethod: paymentSuccess ? "Online" : paymentMethod,
      paymentStatus: paymentSuccess ? "Paid" : "Pending",
      transactionId: paymentSuccess ? transactionData?.transactionId : "",
      items: cartItems.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
        selectedAddons: (item.selectedAddons || []).map((addon) => ({
          ingredientId: addon.ingredientId,
          quantity: addon.quantity,
        })),
      })),
    };

    try {
      const response = await createOrder(payload).unwrap();
      alert("Order placed successfully!");
      const orderId = response._id;
      dispatch(clearCart());
      router.push(`https://eat-fit-pos.vercel.app/orders/${orderId}/bill`);
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    }
  };

  return (
    <FoodKingLayout footer={2} header={2}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .checkout-minimal * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            system-ui, sans-serif !important;
        }

        .checkout-minimal input:focus,
        .checkout-minimal select:focus,
        .checkout-minimal textarea:focus {
          border-color: #2a774c !important;
          box-shadow: 0 0 0 3px rgba(42, 119, 76, 0.1) !important;
        }
      `}</style>

      <div
        className="checkout-minimal"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "32px 0",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 16px" }}
        >
          {/* Success Banner */}
          {paymentSuccess && (
            <div
              style={{
                marginBottom: "20px",
                padding: "14px 18px",
                borderRadius: "4px",
                backgroundColor: "#ecfdf5",
                border: "1px solid #10b981",
                borderLeft: "4px solid #10b981",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <svg width="20" height="20" fill="#10b981" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#065f46",
                  }}
                >
                  Payment Successful
                </div>
                <div style={{ fontSize: "12px", color: "#047857" }}>
                  Transaction: {transactionData?.transactionId}
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "20px",
            }}
          >
            {/* Main Content */}
            <div>
              {/* Order Summary */}
              <div
                style={{
                  marginBottom: "16px",
                  padding: "20px",
                  borderRadius: "2px",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "16px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Order Summary
                </h1>

                {cartItems.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "32px 16px",
                      color: "#9ca3af",
                    }}
                  >
                    <svg
                      style={{
                        width: "40px",
                        height: "40px",
                        margin: "0 auto 8px",
                        opacity: 0.3,
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <p style={{ fontSize: "13px", margin: 0 }}>Cart is empty</p>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          padding: "12px",
                          backgroundColor: "#f9fafb",
                          borderRadius: "2px",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: item.selectedAddons?.length
                              ? "8px"
                              : 0,
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#111827",
                                marginBottom: "2px",
                              }}
                            >
                              {item.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#6b7280" }}>
                              Qty: {item.quantity}
                            </div>
                          </div>
                          <div
                            style={{
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#111827",
                            }}
                          >
                            Rs{" "}
                            {(
                              (item.price +
                                (item.selectedAddons || []).reduce(
                                  (a, ad) =>
                                    a + (ad.price || 0) * (ad.quantity || 1),
                                  0
                                )) *
                              item.quantity
                            ).toFixed(2)}
                          </div>
                        </div>

                        {item.selectedAddons?.length > 0 && (
                          <div
                            style={{
                              paddingTop: "8px",
                              borderTop: "1px solid #e5e7eb",
                            }}
                          >
                            {item.selectedAddons.map((ad, i) => (
                              <div
                                key={i}
                                style={{
                                  fontSize: "12px",
                                  color: "#6b7280",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "4px",
                                }}
                              >
                                <span>
                                  + {ad.name} × {ad.quantity}
                                </span>
                                <span>
                                  Rs {(ad.price * ad.quantity).toFixed(2)}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <div
                      style={{
                        marginTop: "16px",
                        paddingTop: "16px",
                        borderTop: "2px solid #e5e7eb",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#111827",
                        }}
                      >
                        Total
                      </span>
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#111827",
                        }}
                      >
                        Rs {total.toFixed(2)}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Billing Info */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "2px",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "16px",
                  }}
                >
                  Billing Information
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      disabled={paymentSuccess}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "2px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#fff",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      placeholder="+94 71 234 5678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      disabled={paymentSuccess}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "2px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#fff",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      disabled={paymentSuccess}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "2px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#fff",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Order Type
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      disabled={paymentSuccess}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "14px",
                        borderRadius: "2px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "#fff",
                        outline: "none",
                      }}
                    >
                      <option value="Takeaway">Takeaway</option>
                      <option value="Store Delivery">Delivery</option>
                    </select>
                  </div>

                  {orderType === "Store Delivery" && (
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "6px",
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#374151",
                        }}
                      >
                        Delivery Address
                      </label>
                      <textarea
                        placeholder="Enter complete address"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        rows={2}
                        disabled={paymentSuccess}
                        style={{
                          width: "100%",
                          padding: "8px 12px",
                          fontSize: "14px",
                          borderRadius: "2px",
                          border: "1px solid #d1d5db",
                          backgroundColor: "#fff",
                          resize: "vertical",
                          outline: "none",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Payment Method */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "2px",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  marginBottom: "16px",
                }}
              >
                <h2
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "12px",
                  }}
                >
                  Payment
                </h2>

                {/* TEMPORARILY DISABLED - Online payments notice */}
                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    borderLeft: "3px solid #ef4444",
                    borderRadius: "2px",
                    padding: "12px",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ fontWeight: "600", color: "#991b1b", marginBottom: "6px" }}>
                    ⚠️ Online Payments Temporarily Unavailable
                  </div>
                  <div style={{ color: "#dc2626", lineHeight: "1.5" }}>
                    Please contact the shop directly to place your order. We apologize for the inconvenience.
                  </div>
                </div>

                {/* {orderType === "Takeaway" && (
                  <div
                    style={{
                      backgroundColor: "#fef3c7",
                      borderLeft: "3px solid #f59e0b",
                      borderRadius: "2px",
                      padding: "10px",
                      fontSize: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div style={{ fontWeight: "600", color: "#92400e" }}>
                      Takeaway Order
                    </div>
                    <div style={{ color: "#b45309" }}>
                      Cash or online available
                    </div>
                  </div>
                )} */}

                {/* TEMPORARILY DISABLED - Delivery order notice */}
                {/* {orderType === "Store Delivery" && (
                  <>
                    <div
                      style={{
                        backgroundColor: "#dbeafe",
                        borderLeft: "3px solid #3b82f6",
                        borderRadius: "2px",
                        padding: "10px",
                        fontSize: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <div style={{ fontWeight: "600", color: "#1e40af" }}>
                        Delivery Order
                      </div>
                      <div style={{ color: "#1d4ed8" }}>
                        Online payment required
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#fef2f2",
                        borderLeft: "3px solid #ef4444",
                        borderRadius: "2px",
                        padding: "12px",
                        fontSize: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#991b1b",
                          marginBottom: "6px",
                        }}
                      >
                        ⚠️ Delivery Fee Notice
                      </div>
                      <div style={{ color: "#dc2626", lineHeight: "1.5", marginBottom: "10px" }}>
                        Rs 300+ charged by courier on delivery. Amount varies by location.
                      </div>
                      
                      <label style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        padding: "8px",
                        backgroundColor: "#fff",
                        borderRadius: "2px",
                        border: "1px solid #fecaca"
                      }}>
                        <input
                          type="checkbox"
                          checked={deliveryFeeAcknowledged}
                          onChange={(e) => setDeliveryFeeAcknowledged(e.target.checked)}
                          style={{
                            width: "16px",
                            height: "16px",
                            cursor: "pointer",
                            accentColor: "#ef4444"
                          }}
                        />
                        <span style={{ fontSize: "12px", color: "#991b1b", fontWeight: "500" }}>
                          I understand and agree to pay the delivery fee
                        </span>
                      </label>
                    </div>
                  </>
                )} */}

                {/* Payment Options */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {orderType === "Takeaway" && (
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "12px",
                        border:
                          paymentMethod === "Cash"
                            ? "2px solid #2A774C"
                            : "1px solid #e5e7eb",
                        borderRadius: "2px",
                        backgroundColor:
                          paymentMethod === "Cash" ? "#f0fdf4" : "#fff",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="radio"
                        value="Cash"
                        checked={paymentMethod === "Cash"}
                        onChange={() =>
                          !paymentSuccess && setPaymentMethod("Cash")
                        }
                        disabled={paymentSuccess && paymentMethod !== "Cash"}
                        style={{
                          width: "16px",
                          height: "16px",
                          marginRight: "10px",
                          accentColor: "#2A774C",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#111827",
                          }}
                        >
                          Cash
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                          Pay on collection
                        </div>
                      </div>
                    </label>
                  )}

                  {/* TEMPORARILY DISABLED - Online payment option */}
                  {/* <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      border:
                        paymentMethod === "Online"
                          ? "2px solid #2A774C"
                          : "1px solid #e5e7eb",
                      borderRadius: "2px",
                      backgroundColor:
                        paymentMethod === "Online" ? "#f0fdf4" : "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      value="Online"
                      checked={paymentMethod === "Online"}
                      onChange={() =>
                        !paymentSuccess && setPaymentMethod("Online")
                      }
                      disabled={paymentSuccess && paymentMethod !== "Online"}
                      style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "10px",
                        accentColor: "#2A774C",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#111827",
                        }}
                      >
                        Online
                      </div>
                      <div style={{ fontSize: "12px", color: "#6b7280" }}>
                        {orderType === "Takeaway"
                          ? "Secure payment"
                          : "Required"}
                      </div>
                    </div>
                  </label> */}
                </div>
              </div>

              {/* Payment Details */}
              {paymentMethod === "Cash" && (
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "2px",
                    backgroundColor: "#f9fafb",
                    fontSize: "13px",
                    color: "#6b7280",
                    marginBottom: "16px",
                  }}
                >
                  Pay cash when collecting your order at our Rajagiriya
                  location.
                </div>
              )}

              {paymentMethod === "Online" && !paymentSuccess && (
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      backgroundColor: "#fff9e6",
                      borderLeft: "3px solid #ffcc00",
                      borderRadius: "2px",
                      padding: "12px",
                      fontSize: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        color: "#92400e",
                        marginBottom: "6px",
                      }}
                    >
                      ⚠️ Important Payment Instructions
                    </div>
                    <ul
                      style={{
                        margin: "0 0 10px 0",
                        paddingLeft: "16px",
                        color: "#b45309",
                        lineHeight: "1.6",
                      }}
                    >
                      <li><strong>Do not refresh</strong> the payment window</li>
                      <li>Order won't be placed if you refresh</li>
                      <li>Wait for auto-redirect after payment</li>
                      <li>Click "Complete Order" after redirect</li>
                      <li>Wait 5-10 seconds for redirect</li>
                    </ul>
                    
                    <label style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      padding: "8px",
                      backgroundColor: "#fff",
                      borderRadius: "2px",
                      border: "1px solid #fde68a"
                    }}>
                      <input
                        type="checkbox"
                        checked={paymentInstructionsAcknowledged}
                        onChange={(e) => setPaymentInstructionsAcknowledged(e.target.checked)}
                        style={{
                          width: "16px",
                          height: "16px",
                          cursor: "pointer",
                          accentColor: "#f59e0b"
                        }}
                      />
                      <span style={{ fontSize: "12px", color: "#92400e", fontWeight: "500" }}>
                        I understand - I will not refresh the payment window
                      </span>
                    </label>
                  </div>

                  <OnePay
                    app_id={ONEPAY_CONFIG.APP_ID || "ENKR11909605A5F43454D"}
                    amount={Number(total).toFixed(2)}
                    currency="LKR"
                    name="EatFit Order Payment"
                    customer_details={{
                      first_name: customerName.split(" ")[0] || "Guest",
                      last_name:
                        customerName.split(" ").slice(1).join(" ") ||
                        "Customer",
                      email: customerEmail || "guest@example.com",
                      phone_number: customerPhone.startsWith("+")
                        ? customerPhone
                        : `+94${customerPhone.replace(/^0/, "")}`,
                    }}
                    interval="MONTH"
                    interval_count={1}
                    additional_data={JSON.stringify({
                      orderType,
                      items: cartItems.map((item) => item.name).join(", "),
                      orderId: Date.now().toString(),
                      customerAddress:
                        orderType === "Store Delivery" ? customerAddress : "",
                    })}
                    apptoken={ONEPAY_CONFIG.APP_TOKEN}
                    redirect_url={window.location.origin + "/checkout/success"}
                    onFailure={(error) => {
                      console.error("Payment failed:", error);
                      alert("Payment failed. Please try again.");
                    }}
                    disabled={
                      !paymentInstructionsAcknowledged || 
                      (orderType === "Store Delivery" && !deliveryFeeAcknowledged)
                    }
                  />
                </div>
              )}

              {paymentMethod === "Online" && paymentSuccess && (
                <div
                  style={{
                    padding: "16px",
                    borderRadius: "2px",
                    backgroundColor: "#f0fdf4",
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#166534",
                      marginBottom: "4px",
                    }}
                  >
                    Payment Complete
                  </div>
                  <div style={{ fontSize: "12px", color: "#16a34a" }}>
                    Transaction: {transactionData?.transactionId}
                  </div>
                </div>
              )}

              {/* Action Button */}
              {!(paymentMethod === "Online" && !paymentSuccess) && (
                <button
                  onClick={handlePlaceOrder}
                  disabled={placingOrder || (orderType === "Store Delivery" && !deliveryFeeAcknowledged)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "15px",
                    fontWeight: "600",
                    borderRadius: "2px",
                    border: "none",
                    backgroundColor: 
                      (orderType === "Store Delivery" && !deliveryFeeAcknowledged) 
                        ? "#9ca3af" 
                        : paymentSuccess 
                        ? "#22c55e" 
                        : "#2A774C",
                    color: "#fff",
                    cursor: 
                      placingOrder || (orderType === "Store Delivery" && !deliveryFeeAcknowledged)
                        ? "not-allowed" 
                        : "pointer",
                    transition: "all 0.2s",
                    opacity: (orderType === "Store Delivery" && !deliveryFeeAcknowledged) ? "0.6" : "1"
                  }}
                  onMouseEnter={(e) =>
                    !placingOrder && 
                    !(orderType === "Store Delivery" && !deliveryFeeAcknowledged) && 
                    (e.target.style.opacity = "0.9")
                  }
                  onMouseLeave={(e) => {
                    if (!(orderType === "Store Delivery" && !deliveryFeeAcknowledged)) {
                      e.target.style.opacity = "1";
                    }
                  }}
                >
                  {placingOrder
                    ? "Placing..."
                    : paymentSuccess
                    ? "Complete Order"
                    : "Place Order"}
                </button>
              )}

              {paymentMethod === "Online" && !paymentSuccess && (
                <div
                  style={{
                    padding: "12px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "#6b7280",
                    backgroundColor: "#f9fafb",
                    borderRadius: "2px",
                  }}
                >
                  Complete payment above to proceed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </FoodKingLayout>
  );
};

export default Page;


