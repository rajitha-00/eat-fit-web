"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Deluxe Burger",
      price: 12.99,
      quantity: 2,
      image: "assets/img/shop-food/s1.png",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 14.99,
      quantity: 1,
      image: "assets/img/shop-food/s2.png",
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 8.99,
      quantity: 1,
      image: "assets/img/shop-food/s3.png",
    },
  ]);

  const calculateCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const incrementQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Cart"} />
      <section className="py-5" style={{ background: "#fafbfc" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="bg-white rounded-4 shadow-sm p-4">
                <h2 className="fw-bold fs-4 mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <i className="fas fa-shopping-cart fa-2x mb-2" />
                    <p className="fs-5 mb-0">Your cart is empty.</p>
                    <Link
                      href="/shop"
                      className="btn btn-dark mt-3 px-4 rounded-pill"
                    >
                      Browse Menu
                    </Link>
                  </div>
                ) : (
                  <div>
                    {cartItems.map((item, idx) => (
                      <div
                        className="d-flex align-items-center border-bottom py-3 gap-3"
                        key={item.id}
                        style={{ minHeight: 90 }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-3 border"
                          style={{
                            objectFit: "cover",
                            background: "#f5f5f5",
                          }}
                        />
                        <div className="flex-grow-1">
                          <div className="fw-semibold">{item.name}</div>
                          <div className="text-muted small">
                            Rs {item.price.toFixed(2)}
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-light border px-2 py-1 rounded-pill"
                            style={{ minWidth: 32 }}
                            onClick={() => decrementQuantity(idx)}
                            disabled={item.quantity === 1}
                            aria-label="Decrease quantity"
                          >
                            <i className="fas fa-minus" />
                          </button>
                          <span
                            className="fw-semibold fs-6 mx-1"
                            style={{
                              width: 24,
                              display: "inline-block",
                              textAlign: "center",
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            className="btn btn-light border px-2 py-1 rounded-pill"
                            style={{ minWidth: 32 }}
                            onClick={() => incrementQuantity(idx)}
                            aria-label="Increase quantity"
                          >
                            <i className="fas fa-plus" />
                          </button>
                        </div>
                        <div className="fw-bold ms-3" style={{ minWidth: 90 }}>
                          Rs {(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="btn btn-link text-danger p-0 ms-2"
                          title="Remove"
                          style={{ fontSize: 18 }}
                          onClick={() => removeItem(idx)}
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {cartItems.length > 0 && (
                  <form
                    className="d-flex mt-4 gap-2 justify-content-end"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="Promo code"
                      style={{ maxWidth: 180 }}
                    />
                    <button
                      className="btn btn-outline-dark rounded-pill px-4"
                      type="submit"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-white rounded-4 shadow-sm p-4 sticky-top"
                style={{ top: 100 }}
              >
                <h4 className="fw-bold mb-3">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-semibold">
                    Rs {calculateCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="fw-semibold">
                    Rs {cartItems.length > 0 ? "500.00" : "0.00"}
                  </span>
                </div>
                <div className="d-flex justify-content-between fs-5 fw-bold border-top pt-2 mb-3">
                  <span>Total</span>
                  <span>
                    Rs{" "}
                    {(
                      calculateCartTotal() + (cartItems.length > 0 ? 500 : 0)
                    ).toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="btn btn-dark w-100 py-2 rounded-pill fw-bold"
                  style={{ fontSize: 18, letterSpacing: 1 }}
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-4">
                <Cta />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};

export default page;
