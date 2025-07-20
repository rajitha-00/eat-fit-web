"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // for client-side navigation

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

  const randomItems = useMemo(() => getRandomItems(menuItems, 8), [menuItems]);

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
        backgroundColor: "#fefefe",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 20px" }}>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            randomItems.map((item, i) => (
              <div
                key={item._id || i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* Image */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "220px",
                      backgroundColor: "#f5f5f7",
                    }}
                  >
                    <img
                      src={item.imageurl || "/assets/img/food/default-food.png"}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />
                  </div>

                  {/* Icons */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 50,
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        gap: 12,
                        margin: 0,
                        padding: 0,
                        listStyle: "none",
                      }}
                    >
                      {icons.map((ic, j) => (
                        <li key={j}>
                          <button
                            onClick={() => {
                              if (ic.type === "add_to_cart") {
                                handleAddToCart(item);
                              } else if (ic.type === "view") {
                                router.push(`/shop/${item._id}`);
                              }
                            }}
                            style={{
                              backgroundColor: "rgba(255 255 255 / 0.8)",
                              backdropFilter: "blur(4px)",
                              borderRadius: 9999,
                              padding: 10,
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#333",
                              fontSize: 16,
                              textDecoration: "none",
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                            aria-label={ic.label || ic.type}
                            type="button"
                          >
                            <i className={ic.iconClass} aria-hidden="true"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Product Details */}
                <div style={{ padding: 20, textAlign: "center" }}>
                  <h4
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      margin: "0 0 6px",
                      color: "#222",
                    }}
                  >
                    <Link
                      href={`/shop/${item._id}`}
                      style={{ color: "#222", textDecoration: "none" }}
                    >
                      {item.name}
                    </Link>
                  </h4>
                  <h5
                    style={{
                      color: "#666",
                      fontWeight: 500,
                      marginBottom: 12,
                    }}
                  >
                    Rs. {item.webPrice?.toFixed(2) || "0.00"}
                  </h5>
                  <button
                    onClick={() => onAddToCart(item)}
                    style={{
                      padding: "10px 28px",
                      backgroundColor: "#429c5a",
                      color: "#fff",
                      border: "none",
                      borderRadius: 24,
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 16,
                      userSelect: "none",
                      boxShadow: "0 4px 12px rgba(80, 200, 120, 0.4)",
                      transition: "background-color 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#3CA760";
                      e.currentTarget.style.boxShadow =
                        "0 6px 16px rgba(60, 167, 96, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#429c5a";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(80, 200, 120, 0.4)";
                    }}
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
