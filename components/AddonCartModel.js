"use client";

import React, { useState } from "react";

export function AddToCartModal({ item, onAddToCart, onClose }) {
  const [addons, setAddons] = useState(
    item.addons?.map((a) => ({
      ...a,
      quantity: 0,
      name: a.name || `Addon #${a.ingredientId}`,
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

  const handleAdd = () => {
    const selectedAddons = addons.filter((a) => a.quantity > 0);
    onAddToCart({ ...item, selectedAddons, quantity: 1 });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          width: 400,
          maxHeight: "80vh",
          overflowY: "auto",
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>
          Select Addons for {item.name}
        </h3>

        {addons.length === 0 && <p>No addons available for this item.</p>}

        {addons.map((addon, idx) => (
          <div
            key={addon._id || addon.ingredientId}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <div>
              {addon.name} (Rs {addon.price.toFixed(2)})
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <button
                onClick={() => decrementAddon(idx)}
                disabled={addon.quantity === 0}
                aria-label={`Decrease quantity for ${addon.name}`}
                style={{
                  padding: "4px 10px",
                  cursor: addon.quantity === 0 ? "not-allowed" : "pointer",
                }}
              >
                −
              </button>
              <span
                style={{
                  minWidth: 24,
                  textAlign: "center",
                  display: "inline-block",
                }}
              >
                {addon.quantity}
              </span>
              <button
                onClick={() => incrementAddon(idx)}
                aria-label={`Increase quantity for ${addon.name}`}
                style={{ padding: "4px 10px", cursor: "pointer" }}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "none",
              backgroundColor: "#429c5a",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
