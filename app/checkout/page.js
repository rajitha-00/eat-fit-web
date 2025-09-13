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

  const [createOrder, { isLoading: placingOrder }] = useCreateOrderMutation();

  useEffect(() => {
    setMounted(true);
    
    // Check for payment success parameters in URL
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment_status');
    const transactionId = urlParams.get('transaction_id');
    const reference = urlParams.get('reference');
    
    if (paymentStatus === 'success' && transactionId) {
      setPaymentSuccess(true);
      setPaymentMethod("Online"); // Set payment method to Online
      setTransactionData({
        transactionId,
        reference,
        status: 'success'
      });
      
      // Restore customer data from sessionStorage (where OnePay component stores it)
      const pendingOrder = JSON.parse(sessionStorage.getItem('pendingOrder') || '{}');
      
      if (pendingOrder.customerName) {
        setCustomerName(pendingOrder.customerName);
        setCustomerPhone(pendingOrder.customerPhone);
        setCustomerEmail(pendingOrder.customerEmail);
        setOrderType(pendingOrder.orderType || 'Takeaway');
        setCustomerAddress(pendingOrder.customerAddress || '');

      } else {
        console.warn('No pending order data found in sessionStorage');
        // Try to get from paymentTransaction as backup
        const transactionDetails = JSON.parse(sessionStorage.getItem('paymentTransaction') || '{}');
        if (transactionDetails.callbackData?.additional_data) {
          try {
            const additionalData = JSON.parse(transactionDetails.callbackData.additional_data);
          } catch (e) {
            console.error('Failed to parse additional data:', e);
          }
        }
      }
      
      // Clean up URL parameters
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  // Effect to handle payment method when order type changes
  useEffect(() => {
    if (orderType === "Store Delivery") {
      // For delivery, only online payment is allowed
      setPaymentMethod("Online");
    }
    // For takeaway, allow user to choose - don't force any specific method
  }, [orderType]);

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
      console.error('Customer name is empty:', customerName);
      alert("Please enter your full name (first name and last name)");
      return;
    }

    if (!customerPhone) {
      console.error('Customer phone is empty:', customerPhone);
      alert("Please enter your phone number");
      return;
    }

    if (!customerEmail || !customerEmail.includes('@')) {
      console.error('Invalid email:', customerEmail);
      alert("Please enter a valid email address");
      return;
    }

    // Validate name has both first and last name
    const nameParts = customerName.trim().split(' ');
    if (nameParts.length < 2) {
      console.error('Name validation failed:', nameParts);
      alert("Please enter both your first name and last name");
      return;
    }

    // Validate phone number
    const phoneNumber = customerPhone.replace(/[^0-9+]/g, '');
    if (phoneNumber.length < 9) {
      alert("Please enter a valid phone number");
      return;
    }

    // Validate address for Store Delivery
    if (orderType === "Store Delivery" && !customerAddress.trim()) {
      alert("Please enter your delivery address");
      return;
    }

    const totalPrice = total; // Your total calculation

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
      const response = await createOrder(payload).unwrap(); // capture response here
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
      <section className="checkout-section fix section-padding border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* CART SUMMARY */}
              {paymentSuccess && (
                <div
                  style={{
                    marginBottom: "20px",
                    padding: "20px",
                    border: "2px solid #28a745",
                    borderRadius: "12px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ fontSize: "24px", color: "#28a745" }}
                    ></i>
                    <div>
                      <h4 style={{ margin: 0, color: "#155724" }}>
                        Payment Successful!
                      </h4>
                      <p style={{ margin: 0, marginTop: "5px" }}>
                        Transaction ID: {transactionData?.transactionId}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          marginTop: "5px",
                          fontSize: "14px",
                        }}
                      >
                        Please click "Place Order" below to complete your order.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  marginBottom: "30px",
                  padding: "20px",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <h3>Your Cart</h3>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {cartItems.map((item) => (
                        <li
                          key={item.id}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "16px",
                            borderBottom: "1px solid #ddd",
                            paddingBottom: "8px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>
                              {item.name} x {item.quantity}
                            </span>
                            <span>
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
                            </span>
                          </div>
                          {/* Show Addons if any */}
                          {item.selectedAddons?.length > 0 && (
                            <ul
                              style={{
                                paddingLeft: "1rem",
                                fontSize: "0.9rem",
                                color: "#555",
                                marginTop: 4,
                              }}
                            >
                              {item.selectedAddons.map((ad, i) => (
                                <li key={i}>
                                  + {ad.name} x {ad.quantity} (Rs{" "}
                                  {(ad.price * ad.quantity).toFixed(2)})
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        borderTop: "2px solid #429c5a",
                        paddingTop: "10px",
                        fontWeight: "bold",
                        fontSize: "18px",
                        textAlign: "right",
                      }}
                    >
                      Total: Rs {total.toFixed(2)}
                    </div>
                  </div>
                )}
              </div>

              {/* CHECKOUT FORM */}
              <div className="row g-4">
                <div className="col-md-5 col-lg-4 col-xl-3">
                  <div className="checkout-radio">
                    <p className="primary-text">Select Payment Method</p>
                    
                    {/* Payment method information */}
                    <div className="payment-info-wrapper mb-3">
                      {orderType === "Takeaway" && (
                        <div className="alert alert-warning mb-2" style={{ fontSize: '0.85rem', padding: '8px 12px' }}>
                          <i className="fas fa-store me-2"></i> 
                          <strong>Takeaway Orders:</strong> Cash or Online payment available
                        </div>
                      )}
                      {orderType === "Store Delivery" && (
                        <div className="alert alert-info mb-2" style={{ fontSize: '0.85rem', padding: '8px 12px' }}>
                          <i className="fas fa-truck me-2"></i> 
                          <strong>Delivery Orders:</strong> Online payment only
                        </div>
                      )}
                    </div>

                    <div className="checkout-radio-wrapper">
                      {/* Cash payment - only available for takeaway */}
                      {orderType === "Takeaway" && (
                        <div className="checkout-radio-single">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="Cash"
                            value="Cash"
                            checked={paymentMethod === "Cash"}
                            onChange={() => !paymentSuccess && setPaymentMethod("Cash")}
                            disabled={paymentSuccess && paymentMethod !== "Cash"}
                          />
                          <label htmlFor="Cash">
                            💵 Cash Payment
                            <small className="d-block text-muted">Pay when you collect your order</small>
                          </label>
                        </div>
                      )}
                      
                      {/* Online payment - available for both takeaway and delivery */}
                      <div className="checkout-radio-single">
                        <input
                          type="radio"
                          className="form-check-input"
                          id="Online"
                          value="Online"
                          checked={paymentMethod === "Online"}
                          onChange={() => !paymentSuccess && setPaymentMethod("Online")}
                          disabled={paymentSuccess && paymentMethod !== "Online"}
                        />
                        <label htmlFor="Online">
                          💳 Online Payment
                          <small className="d-block text-muted">
                            {orderType === "Takeaway" 
                              ? "Pay online for faster checkout" 
                              : "Required for delivery orders"}
                          </small>
                        </label>
                      </div>

                      {/* Show disabled cash option for delivery with explanation */}
                      {orderType === "Store Delivery" && (
                        <div className="checkout-radio-single" style={{ opacity: 0.5 }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="CashDisabled"
                            value="Cash"
                            disabled={true}
                          />
                          <label htmlFor="CashDisabled" style={{ cursor: 'not-allowed' }}>
                            💵 Cash Payment
                            <small className="d-block text-danger">Not available for delivery orders</small>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="checkout-single-wrapper">
                    <div className="checkout-single boxshado-single">
                      <h4>Billing Info</h4>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Customer Name"
                            className="form-control"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            disabled={paymentSuccess}
                            title={`Current value: "${customerName}"`} // Debug helper
                          />
                          {/* Debug info for production */}
                          {customerName && (
                            <small className="text-muted">
                              Name parts: {customerName.split(" ").length} |
                              Value: "{customerName}"
                            </small>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Customer Phone"
                            className="form-control"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            disabled={paymentSuccess}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            placeholder="Customer Email"
                            className="form-control"
                            value={customerEmail}
                            onChange={(e) => setCustomerEmail(e.target.value)}
                            disabled={paymentSuccess}
                          />
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={orderType}
                            onChange={(e) => setOrderType(e.target.value)}
                            disabled={paymentSuccess}
                          >
                            <option value="Takeaway">Takeaway</option>
                            <option value="Store Delivery">
                              Store Delivery
                            </option>
                          </select>
                        </div>
                        {orderType === "Store Delivery" && (
                          <div className="col-12">
                            <textarea
                              placeholder="Delivery Address"
                              className="form-control"
                              value={customerAddress}
                              onChange={(e) =>
                                setCustomerAddress(e.target.value)
                              }
                              rows={3}
                              style={{ resize: "vertical" }}
                              disabled={paymentSuccess}
                            ></textarea>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="checkout-single checkout-single-bg mt-3">
                      <h4>Payment Info</h4>
                      {paymentMethod === "Cash" && (
                        <div className="p-2">
                          <div className="alert alert-success">
                            <i className="fas fa-money-bill-wave"></i> 
                            <strong> Cash Payment Selected</strong>
                            <br />
                            Pay in cash when you pick up your order at our Rajagiriya location.
                            <br />
                            <small className="text-muted">
                              <i className="fas fa-info-circle"></i> Cash payment is only available for takeaway orders.
                            </small>
                          </div>
                        </div>
                      )}
                      {paymentMethod === "Online" && !paymentSuccess && (
                        <div className="p-2">
                          <div className="alert alert-info">
                            <i className="fas fa-credit-card"></i> 
                            <strong> Online Payment</strong>
                            <br />
                            {orderType === "Takeaway" 
                              ? "Pay securely online for faster checkout. You can also pay cash at pickup."
                              : "Secure online payment is required for all delivery orders."
                            }
                          </div>
                          <OnePay
                            app_id={
                              ONEPAY_CONFIG.APP_ID || "ENKR11909605A5F43454D"
                            }
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
                              items: cartItems
                                .map((item) => item.name)
                                .join(", "),
                              orderId: Date.now().toString(),
                              customerAddress:
                                orderType === "Store Delivery"
                                  ? customerAddress
                                  : "",
                            })}
                            apptoken={ONEPAY_CONFIG.APP_TOKEN}
                            redirect_url={
                              window.location.origin + "/checkout/success"
                            }
                            onFailure={(error) => {
                              console.error("Payment failed:", error);
                              alert("Payment failed. Please try again.");
                            }}
                          />
                        </div>
                      )}
                      {paymentMethod === "Online" && paymentSuccess && (
                        <div className="p-3 text-center">
                          <div className="alert alert-success">
                            <i className="fas fa-check-circle"></i> Payment
                            completed successfully!
                            <br />
                            <small>
                              Transaction ID: {transactionData?.transactionId}
                            </small>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      {/* Hide Place Order button if Online payment is selected but not completed */}
                      {!(paymentMethod === "Online" && !paymentSuccess) && (
                        <button
                          type="button"
                          className={`btn w-100 py-2 fs-5 ${
                            paymentSuccess ? "btn-success" : "btn-dark"
                          }`}
                          onClick={handlePlaceOrder}
                          disabled={placingOrder}
                        >
                          {placingOrder
                            ? "Placing..."
                            : paymentSuccess
                            ? "Complete Order (Payment Successful)"
                            : "Place Order"}
                        </button>
                      )}

                      {/* Show message when Online payment is selected but not completed */}
                      {paymentMethod === "Online" && !paymentSuccess && (
                        <div className="text-center">
                          <div className="alert alert-info">
                            <i className="fas fa-info-circle"></i> Please
                            complete your online payment using the OnePay
                            gateway above to proceed with your order.
                          </div>
                        </div>
                      )}

                      {paymentSuccess && (
                        <p className="text-center mt-2 text-success">
                          <small>
                            <i className="fas fa-info-circle"></i> Your payment
                            has been processed successfully. Click above to
                            create your order.
                          </small>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default Page;
