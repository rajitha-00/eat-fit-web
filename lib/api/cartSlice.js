import { createSlice } from "@reduxjs/toolkit";

// Util to build a unique key for cart items (based on uniqueKey or ID + selected addons)
const buildCartKey = (item) => {
  const addonKey =
    item.selectedAddons?.length > 0
      ? item.selectedAddons
          .map((a) => `${a.ingredientId}-${a.quantity}`)
          .sort()
          .join("|")
      : "";
  // Use uniqueKey if provided, else fallback to id
  return (
    (item.uniqueKey || item.id || "no-id") + (addonKey ? `_${addonKey}` : "")
  );
};

const getInitialCart = () => {
  if (typeof window !== "undefined") {
    const raw = sessionStorage.getItem("cart");
    try {
      const parsed = JSON.parse(raw || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};

const saveToSession = (items) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("cart", JSON.stringify(items));
  }
};

const initialState = {
  items: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = { ...action.payload };
      const key = buildCartKey(item);

      const existing = state.items.find((i) => i.key === key);

      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.items.push({
          ...item,
          key,
          quantity: item.quantity || 1,
        });
      }

      saveToSession(state.items);
    },

    updateQuantity(state, action) {
      const { key, quantity } = action.payload;
      const item = state.items.find((i) => i.key === key);
      if (item && quantity > 0) {
        item.quantity = quantity;
        saveToSession(state.items);
      }
    },

    removeFromCart(state, action) {
      const key = action.payload;
      state.items = state.items.filter((i) => i.key !== key);
      saveToSession(state.items);
    },

    clearCart(state) {
      state.items = [];
      saveToSession([]);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
