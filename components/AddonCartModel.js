"use client";

import React, { useState } from "react";

export function AddToCartModal({ item, onAddToCart, onClose }) {
  const [addons, setAddons] = useState(
    item.addons?.map((a) => ({
      ...a,
      quantity: 0,
      name: a.name || `Addon #${a.ingredientId}`,
      price: Number(a.price) || 0,
    })) || []
  );

  const incrementAddon = (index) => {
    setAddons((prev) =>
      prev.map((a, i) => (i === index ? { ...a, quantity: a.quantity + 1 } : a))
    );
  };

  const decrementAddon = (index) => {
    setAddons((prev) =>
      prev.map((a, i) =>
        i === index && a.quantity > 0 ? { ...a, quantity: a.quantity - 1 } : a
      )
    );
  };

  const basePrice = Number(item.webPrice) || 0;
  const addonsTotal = addons.reduce(
    (sum, a) => sum + (a.price || 0) * a.quantity,
    0
  );
  const grandTotal = basePrice + addonsTotal;

  const handleAdd = () => {
    const selectedAddons = addons.filter((a) => a.quantity > 0);
    onAddToCart({ ...item, selectedAddons, quantity: 1, grandTotal });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.65)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        padding: "16px",
        fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "460px",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          overflow: "hidden",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          animation: "modalFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style jsx>{`
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(8px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>

        {/* Modal Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #f1f5f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#2A774C",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Customize Your Meal
            </span>
            <h3
              style={{
                margin: "4px 0 0 0",
                fontSize: "19px",
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              {item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              all: "unset",
              cursor: "pointer",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#64748b",
              fontSize: "16px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e2e8f0";
              e.currentTarget.style.color = "#0f172a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.color = "#64748b";
            }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body / Addon List */}
        <div
          style={{
            padding: "20px 24px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#64748b",
              marginBottom: "4px",
            }}
          >
            Select any extra toppings or proteins:
          </div>

          {addons.length === 0 ? (
            <div
              style={{
                padding: "24px",
                textAlign: "center",
                backgroundColor: "#f8fafc",
                borderRadius: "14px",
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              No extra addons available for this item.
            </div>
          ) : (
            addons.map((addon, idx) => (
              <div
                key={addon._id || addon.ingredientId || idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderRadius: "14px",
                  border:
                    addon.quantity > 0
                      ? "1.5px solid #2A774C"
                      : "1px solid #e2e8f0",
                  backgroundColor:
                    addon.quantity > 0 ? "#f0fdf4" : "#ffffff",
                  transition: "all 0.2s ease",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#0f172a",
                    }}
                  >
                    {addon.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#2A774C",
                      marginTop: "2px",
                    }}
                  >
                    + Rs. {addon.price.toFixed(2)}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    padding: "2px 4px",
                  }}
                >
                  <button
                    onClick={() => decrementAddon(idx)}
                    disabled={addon.quantity === 0}
                    aria-label={`Decrease quantity for ${addon.name}`}
                    style={{
                      all: "unset",
                      cursor: addon.quantity === 0 ? "not-allowed" : "pointer",
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "6px",
                      color: addon.quantity === 0 ? "#cbd5e1" : "#0f172a",
                      fontSize: "16px",
                      fontWeight: 700,
                      userSelect: "none",
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      minWidth: "24px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    {addon.quantity}
                  </span>
                  <button
                    onClick={() => incrementAddon(idx)}
                    aria-label={`Increase quantity for ${addon.name}`}
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "6px",
                      color: "#2A774C",
                      fontSize: "16px",
                      fontWeight: 700,
                      userSelect: "none",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer with Total & CTA */}
        <div
          style={{
            padding: "16px 24px",
            borderTop: "1px solid #f1f5f9",
            backgroundColor: "#f8fafc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>
              TOTAL AMOUNT
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#2A774C",
              }}
            >
              Rs. {grandTotal.toFixed(2)}
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={onClose}
              type="button"
              style={{
                padding: "10px 16px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                background: "#ffffff",
                color: "#475569",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "13px",
                transition: "all 0.2s ease",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              type="button"
              style={{
                padding: "10px 20px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#2A774C",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
                boxShadow: "0 4px 12px rgba(42, 119, 76, 0.25)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1e5a39";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2A774C";
              }}
            >
              <i className="far fa-shopping-cart"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
