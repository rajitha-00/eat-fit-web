"use client";
import React, { useState } from "react";
import Link from "next/link";

const FoodItem = ({
  item,
  onAddToCart,
  icons = [],
  router,
  styles = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    item.imageurl || "/assets/img/food/default-food.png"
  );

  const calories = item.nutrition?.[0]?.calories;
  const protein = item.nutrition?.[0]?.protein;
  const carbs = item.nutrition?.[0]?.carbs;
  const fat = item.nutrition?.[0]?.fat;

  return (
    <div
      key={item._id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(226, 232, 240, 0.9)",
        boxShadow: isHovered
          ? "0 20px 35px -8px rgba(42, 119, 76, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.04)"
          : "0 4px 16px rgba(0, 0, 0, 0.04)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
        ...styles.container,
      }}
    >
      {/* Top Image Area */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "230px",
          backgroundColor: "#f1f5f9",
          overflow: "hidden",
        }}
      >
        {/* Category Pill */}
        {item.mainCategory && (
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              backgroundColor: "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "5px 12px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
              color: "#2A774C",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              zIndex: 2,
              border: "1px solid rgba(42, 119, 76, 0.15)",
            }}
          >
            {item.mainCategory}
          </div>
        )}

        {/* Halal / Diet Badge if applicable */}
        {item.halal && (
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              backgroundColor: "rgba(34, 197, 94, 0.92)",
              backdropFilter: "blur(6px)",
              color: "#ffffff",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "11px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              zIndex: 2,
              boxShadow: "0 2px 6px rgba(34, 197, 94, 0.3)",
            }}
          >
            <span>✓</span> Halal
          </div>
        )}

        {/* Product Image */}
        <Link
          href={`/shop/${item._id}`}
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <img
            src={imgSrc}
            alt={item.name}
            onError={() => setImgSrc("/assets/img/food/default-food.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: isHovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </Link>
      </div>

      {/* Content & Details */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div>
          {/* Sub-Category or Tag */}
          {item.menuCategory && (
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#64748b",
                marginBottom: "4px",
                textTransform: "capitalize",
              }}
            >
              {item.menuCategory}
            </div>
          )}

          {/* Title */}
          <h3
            style={{
              fontSize: "19px",
              fontWeight: 700,
              color: "#0f172a",
              margin: "0 0 12px 0",
              lineHeight: 1.35,
            }}
          >
            <Link
              href={`/shop/${item._id}`}
              style={{
                color: "#0f172a",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2A774C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#0f172a")}
            >
              {item.name}
            </Link>
          </h3>

          {/* Macro Nutrition Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "6px",
              padding: "10px 8px",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>
                CAL
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginTop: "2px",
                }}
              >
                {calories != null ? `${Math.round(calories)}` : "—"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>
                PRO
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#2A774C",
                  marginTop: "2px",
                }}
              >
                {protein != null ? `${Number(protein).toFixed(0)}g` : "—"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>
                CARB
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#f59e0b",
                  marginTop: "2px",
                }}
              >
                {carbs != null ? `${Number(carbs).toFixed(0)}g` : "—"}
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#64748b", fontWeight: 600 }}>
                FAT
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ef4444",
                  marginTop: "2px",
                }}
              >
                {fat != null ? `${Number(fat).toFixed(0)}g` : "—"}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Price & Action Buttons */}
        <div>
          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#2A774C",
                letterSpacing: "-0.5px",
              }}
            >
              Rs. {item.webPrice ? item.webPrice.toFixed(2) : "0.00"}
            </span>
            {item.uberPrice && item.uberPrice > item.webPrice && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#94a3b8",
                  textDecoration: "line-through",
                  fontWeight: 500,
                }}
              >
                Rs. {item.uberPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => onAddToCart(item)}
              type="button"
              style={{
                flex: 1.3,
                padding: "11px 14px",
                backgroundColor: "#2A774C",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                boxShadow: "0 4px 12px rgba(42, 119, 76, 0.25)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1e5a39";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2A774C";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className="far fa-shopping-cart" style={{ fontSize: "14px" }}></i>
              Add to Cart
            </button>

            <button
              onClick={() => {
                if (router) {
                  router.push(`/shop/${item._id}`);
                }
              }}
              type="button"
              aria-label="View Details"
              style={{
                padding: "11px 14px",
                backgroundColor: "#e8f5ee",
                color: "#2A774C",
                border: "1px solid rgba(42, 119, 76, 0.2)",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#d3ede0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#e8f5ee";
              }}
            >
              <i className="far fa-eye" style={{ fontSize: "14px" }}></i>
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
