"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { updateQuantity, removeFromCart } from "@/lib/api/cartSlice";

const CartDialog = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateItemTotal = (item) => {
    const addonTotal =
      item.selectedAddons?.reduce(
        (sum, addon) => sum + (addon.price || 0) * (addon.quantity || 1),
        0
      ) || 0;
    return (item.price + addonTotal) * item.quantity;
  };

  const total = cartItems.reduce(
    (sum, item) => sum + calculateItemTotal(item),
    0
  );
  const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);
    return hasMounted;
  };
  const hasMounted = useHasMounted();
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "transparent",
          border: "none",
          fontSize: 20,
          cursor: "pointer",
          marginLeft: 4,
          background: "#ff3b30",
          color: "#fff",
          borderRadius: "999px",
          padding: "2px 8px",
          fontSize: 12,
          fontWeight: "bold",
          position: "relative",
        }}
      >
        🛒
        <span>
          {hasMounted && cartItems.length > 0 ? ` ${cartItems.length}` : ""}
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            right: 0,
            width: 380,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
            zIndex: 1000,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: 16, borderBottom: "1px solid #eee" }}>
            <strong>Your Cart</strong>
          </div>

          {cartItems.length === 0 ? (
            <div style={{ padding: 20, textAlign: "center", color: "#777" }}>
              Your cart is empty.
            </div>
          ) : (
            <div style={{ maxHeight: 320, overflowY: "auto" }}>
              {cartItems.map((item) => (
                <div
                  key={item.key}
                  style={{
                    display: "flex",
                    gap: 10,
                    padding: 12,
                    borderBottom: "1px solid #f1f1f1",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src={item.image || "/assets/img/food/default-food.png"}
                    width={48}
                    height={48}
                    alt={item.name}
                    style={{
                      borderRadius: 12,
                      background: "#f5f5f7",
                      objectFit: "cover",
                      border: "1px solid #eee",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#666" }}>
                      Base: Rs {item.price}
                    </div>

                    {/* Addons */}
                    {item.selectedAddons?.length > 0 && (
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 12,
                          color: "#444",
                        }}
                      >
                        <div style={{ fontWeight: 500 }}>Addons:</div>
                        <ul style={{ margin: "4px 0 0 12px", padding: 0 }}>
                          {item.selectedAddons.map((addon, idx) => (
                            <li key={idx}>
                              {addon.name} x {addon.quantity} = Rs{" "}
                              {addon.price * addon.quantity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Quantity Controls */}
                    <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              key: item.key,
                              quantity: Math.max(item.quantity - 1, 1),
                            })
                          )
                        }
                        style={{
                          padding: "0 8px",
                          borderRadius: 6,
                          border: "1px solid #ccc",
                          background: "#f5f5f5",
                          cursor: "pointer",
                        }}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              key: item.key,
                              quantity: item.quantity + 1,
                            })
                          )
                        }
                        style={{
                          padding: "0 8px",
                          borderRadius: 6,
                          border: "1px solid #ccc",
                          background: "#f5f5f5",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <button
                      onClick={() => dispatch(removeFromCart(item.key))}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#ff3b30",
                        fontSize: 20,
                        cursor: "pointer",
                      }}
                    >
                      ×
                    </button>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        marginTop: 8,
                        color: "#000",
                      }}
                    >
                      Rs {calculateItemTotal(item)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div style={{ padding: 16 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 600,
                  marginBottom: 12,
                }}
              >
                <span>Total</span>
                <span>Rs {total}</span>
              </div>
              <Link
                href="/checkout"
                style={{
                  display: "block",
                  background: "#000",
                  color: "#fff",
                  padding: "10px 0",
                  borderRadius: 10,
                  textAlign: "center",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDialog;
