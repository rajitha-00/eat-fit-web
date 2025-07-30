"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation"; // for client-side navigation
import FoodItem from "../FoodItemCard/FoodItem";

const icons = [
  {
    iconClass: "far fa-shopping-cart",
    label: "Add to Cart",
    type: "add_to_cart", // <-- identify the action
  },
  {
    iconClass: "far fa-eye",
    type: "view", // <-- identify as 'view' action
  },
];

const getRandomItems = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const FoodCategoryHome = ({
  menuItems = [],
  isLoading,
  onAddToCart,
}) => {
  const router = useRouter();

  const randomItems = useMemo(() => getRandomItems(menuItems, 9), [menuItems]);

  // Define handleAddToCart for icon button usage
  const handleAddToCart = (item) => {
    if (typeof onAddToCart === "function") {
      onAddToCart(item);
    }
  };

  return (
    <section
      style={{
        padding: "60px 0",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
        boxShadow: "inset 0 0 100px rgba(255,255,255,0.5)",
        backdropFilter: "blur(10px)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "#999",
              marginBottom: "8px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Best Selling Dishes
          </p>
          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: 600,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Explore Our Products
          </h2>
        </div>

        <style jsx>{`
          .grid-container {
            display: grid;
            gap: 32px;
            width: 100%;
            grid-template-columns: repeat(1, 1fr);
          }

          @media (min-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1200px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>

        <div className="grid-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            randomItems.map((item, i) => (
              <FoodItem
                handleAddToCart={handleAddToCart}
                key={item._id}
                item={item}
                onAddToCart={onAddToCart}
                icons={icons}
                router={router}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
