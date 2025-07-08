// components/CartDialog.tsx
"use client";
import React, { FormEvent } from "react";
import Link from "next/link";

const CartDialog = ({
  isOpen,
  onClose,
  cartItems,
  onIncrement,
  onDecrement,
  onRemove,
  onApplyPromo,
  onPlaceOrder,
}) => {
  const [promo, setPromo] = React.useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 500 : 0;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative bg-white rounded-4 shadow-sm w-full max-w-2xl mx-4 p-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
          aria-label="Close cart"
        >
          &times;
        </button>

        <h2 className="fw-bold fs-4 mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-10 text-muted">
            <i className="fas fa-shopping-cart fa-2x mb-2" />
            <p className="fs-5 mb-3">Your cart is empty.</p>
            <Link href="/shop">
              <a className="btn btn-dark mt-2 px-4 rounded-pill">Browse Menu</a>
            </Link>
          </div>
        ) : (
          <>
            <div className="max-h-80 overflow-y-auto mb-4">
              {cartItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center border-bottom py-3 gap-3"
                  style={{ minHeight: 90 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-3 border"
                    style={{ objectFit: "cover", background: "#f5f5f5" }}
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
                      onClick={() => onDecrement(idx)}
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
                      onClick={() => onIncrement(idx)}
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
                    onClick={() => onRemove(idx)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              ))}
            </div>

            {/* Promo code */}
            {onApplyPromo && (
              <form
                className="d-flex gap-2 mb-4 justify-content-end"
                onSubmit={(e) => {
                  e.preventDefault();
                  onApplyPromo(promo);
                }}
              >
                <input
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
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

            {/* Order summary */}
            <div className="border-top pt-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span className="fw-semibold">Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span className="fw-semibold">Rs {shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                <span>Total</span>
                <span>Rs {total.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  onClick={onPlaceOrder}
                  className="btn btn-dark px-4 rounded-pill fw-bold"
                  style={{ letterSpacing: 1 }}
                >
                  Place Order
                </button>
                <button
                  onClick={onClose}
                  className="btn btn-outline-secondary px-4 rounded-pill"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDialog;
