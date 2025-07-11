"use client";
import { useEffect, useState } from "react";

export const CATEGORY_DATA = [
  { name: "Weight Gain" },
  { name: "Weight Loss" },
  { name: "Wraps" },
  { name: "Desserts" },
  { name: "Cheat Meal" },
  { name: "Kottu" },
];

export default function ProductSidebar({ selectedCategory, onCategoryChange }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allSelected = !CATEGORY_DATA.some(
    (cat) => cat.name === selectedCategory
  );

  // ✅ Mobile UI: scrollable tabs
  if (isMobile) {
    return (
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch", // smooth scroll on iOS
          whiteSpace: "nowrap",
          padding: "12px 16px",
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
        className="mobile-tab-scroll"
      >
        <style jsx>{`
          .mobile-tab-scroll::-webkit-scrollbar {
            display: none; // Chrome/Safari/Edge
          }
        `}</style>

        <button
          onClick={() => onCategoryChange("")}
          style={{
            display: "inline-block",
            padding: "8px 16px",
            marginRight: 8,
            borderRadius: 999,
            backgroundColor: allSelected ? "#007aff" : "#f1f1f1",
            color: allSelected ? "#fff" : "#333",
            fontWeight: allSelected ? 600 : 500,
            fontSize: 14,
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "all 0.2s ease-in-out",
          }}
        >
          All
        </button>

        {CATEGORY_DATA.map(({ name }) => {
          const isSelected = selectedCategory === name;
          return (
            <button
              key={name}
              onClick={() => onCategoryChange(name)}
              style={{
                display: "inline-block",
                padding: "8px 16px",
                marginRight: 8,
                borderRadius: 999,
                backgroundColor: isSelected ? "#007aff" : "#f1f1f1",
                color: isSelected ? "#fff" : "#333",
                fontWeight: isSelected ? 600 : 500,
                fontSize: 14,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
    );
  }

  // ✅ Desktop UI: sidebar
  return (
    <aside
      style={{
        width: 280,
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        padding: 20,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <h3
        style={{
          marginBottom: 24,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 1.2,
          color: "#111",
        }}
      >
        Categories
      </h3>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <li>
          <button
            onClick={() => onCategoryChange("")}
            style={{
              all: "unset",
              cursor: "pointer",
              fontWeight: allSelected ? 700 : 500,
              color: allSelected ? "#007aff" : "#555",
              padding: "8px 16px",
              borderRadius: 10,
              backgroundColor: allSelected
                ? "rgba(0,122,255,0.1)"
                : "transparent",
              width: "100%",
            }}
          >
            All Categories
          </button>
        </li>

        {CATEGORY_DATA.map(({ name }) => {
          const isSelected = selectedCategory === name;
          return (
            <li key={name}>
              <button
                onClick={() => onCategoryChange(name)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? "#007aff" : "#555",
                  padding: "8px 16px",
                  borderRadius: 10,
                  backgroundColor: isSelected
                    ? "rgba(0,122,255,0.1)"
                    : "transparent",
                  width: "100%",
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
