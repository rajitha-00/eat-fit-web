"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import { useCreateOrderMutation } from "@/lib/api/apiSlice";
import { useRouter } from "next/navigation";
import { clearCart } from "@/lib/api/cartSlice";

const Page = () => {
  const [mounted, setMounted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items || []);

  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("Takeaway");

  const [createOrder, { isLoading: placingOrder }] = useCreateOrderMutation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const total = cartItems.reduce((sum, item) => {
    const addonTotal = (item.selectedAddons || []).reduce(
      (aSum, addon) => aSum + (addon.price || 0) * (addon.quantity || 1),
      0
    );
    return sum + (item.webPrice + addonTotal) * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const router = useRouter();
  const handlePlaceOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("Please fill out your name and phone number.");
      return;
    }

    const totalPrice = total; // Your total calculation

    const payload = {
      orderId: "",
      customerName,
      customerPhone,
      orderType,
      orderStatus: "Preparing",
      totalPrice,
      orderTime: Date.now(),
      paymentMethod,
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
                                (item.webPrice +
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
                    <div className="checkout-radio-wrapper">
                      {["Cash", "Online", "Bank Transfer"].map((method) => (
                        <div className="checkout-radio-single" key={method}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id={method}
                            value={method}
                            checked={paymentMethod === method}
                            onChange={() => setPaymentMethod(method)}
                          />
                          <label htmlFor={method}>{method}</label>
                        </div>
                      ))}
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
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Customer Phone"
                            className="form-control"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                          />
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select"
                            value={orderType}
                            onChange={(e) => setOrderType(e.target.value)}
                          >
                            <option value="Takeaway">Takeaway</option>
                            <option value="Store Delivery">
                              Store Delivery
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="checkout-single checkout-single-bg mt-3">
                      <h4>Payment Info</h4>
                      {paymentMethod === "Bank Transfer" && (
                        <div className="p-2">
                          Transfer to:
                          <br />
                          <strong>Account No:</strong> 1234567890 <br />
                          <strong>Bank:</strong> Eat Fit Bank
                        </div>
                      )}
                      {paymentMethod === "Cash" && (
                        <div className="p-2">
                          Pay in cash at pickup/delivery.
                        </div>
                      )}
                      {paymentMethod === "Online" && (
                        <div className="p-2">
                          You will be redirected to the payment gateway.
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="btn btn-dark w-100 py-2 fs-5"
                        onClick={handlePlaceOrder}
                        disabled={placingOrder}
                      >
                        {placingOrder ? "Placing..." : "Place Order"}
                      </button>
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
