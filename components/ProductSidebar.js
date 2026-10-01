"use client";
import { useEffect, useState } from "react";

export const CATEGORY_DATA = [
  { name: "Weight Gain", icon: "💪" },
  { name: "Weight Loss", icon: "🏃" },
  { name: "Wraps", icon: "🌯" },
  { name: "Desserts", icon: "🍰" },
  { name: "Cheat Meal", icon: "🍔" },
  { name: "Kottu", icon: "🍲" },
];

export default function ProductSidebar({ selectedCategory, onCategoryChange }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allSelected =
    !selectedCategory ||
    selectedCategory === "All" ||
    !CATEGORY_DATA.some((cat) => cat.name === selectedCategory);

  // Mobile / Tablet horizontal scrollable pill bar
  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          padding: "10px 4px 14px 4px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="mobile-category-scroll"
      >
        <style jsx>{`
          .mobile-category-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <button
          onClick={() => onCategoryChange("All")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            borderRadius: "999px",
            backgroundColor: allSelected ? "#2A774C" : "#ffffff",
            color: allSelected ? "#ffffff" : "#475569",
            fontWeight: 700,
            fontSize: "13px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            border: allSelected
              ? "1px solid #2A774C"
              : "1px solid #e2e8f0",
            boxShadow: allSelected
              ? "0 4px 12px rgba(42, 119, 76, 0.25)"
              : "0 2px 4px rgba(0, 0, 0, 0.03)",
            transition: "all 0.2s ease",
          }}
        >
          <span>✨</span> All Categories
        </button>

        {CATEGORY_DATA.map(({ name, icon }) => {
          const isSelected = selectedCategory === name;
          return (
            <button
              key={name}
              onClick={() => onCategoryChange(name)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "999px",
                backgroundColor: isSelected ? "#2A774C" : "#ffffff",
                color: isSelected ? "#ffffff" : "#475569",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                border: isSelected
                  ? "1px solid #2A774C"
                  : "1px solid #e2e8f0",
                boxShadow: isSelected
                  ? "0 4px 12px rgba(42, 119, 76, 0.25)"
                  : "0 2px 4px rgba(0, 0, 0, 0.03)",
                transition: "all 0.2s ease",
              }}
            >
              <span>{icon}</span>
              <span>{name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop Sidebar
  return (
    <aside
      style={{
        width: "100%",
        maxWidth: "280px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        border: "1px solid #e2e8f0",
        padding: "24px 18px",
        position: "sticky",
        top: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "10px",
            backgroundColor: "#e8f5ee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2A774C",
            fontSize: "14px",
          }}
        >
          <i className="far fa-utensils"></i>
        </div>
        <h4
          style={{
            margin: 0,
            fontWeight: 800,
            fontSize: "17px",
            color: "#0f172a",
            letterSpacing: "-0.3px",
          }}
        >
          Categories
        </h4>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <li>
          <button
            onClick={() => onCategoryChange("All")}
            style={{
              all: "unset",
              cursor: "pointer",
              boxSizing: "border-box",
              width: "100%",
              padding: "10px 14px",
              borderRadius: "12px",
              fontWeight: allSelected ? 700 : 600,
              fontSize: "14px",
              color: allSelected ? "#2A774C" : "#475569",
              backgroundColor: allSelected ? "#e8f5ee" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.2s ease",
              borderLeft: allSelected ? "3px solid #2A774C" : "3px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (!allSelected) {
                e.currentTarget.style.backgroundColor = "#f8fafc";
                e.currentTarget.style.color = "#0f172a";
              }
            }}
            onMouseLeave={(e) => {
              if (!allSelected) {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#475569";
              }
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>✨</span>
              <span>All Items</span>
            </span>
            {allSelected && (
              <span
                style={{
                  fontSize: "12px",
                  color: "#2A774C",
                  fontWeight: 800,
                }}
              >
                ●
              </span>
            )}
          </button>
        </li>

        {CATEGORY_DATA.map(({ name, icon }) => {
          const isSelected = selectedCategory === name;
          return (
            <li key={name}>
              <button
                onClick={() => onCategoryChange(name)}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  fontWeight: isSelected ? 700 : 600,
                  fontSize: "14px",
                  color: isSelected ? "#2A774C" : "#475569",
                  backgroundColor: isSelected ? "#e8f5ee" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                  borderLeft: isSelected ? "3px solid #2A774C" : "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "#f8fafc";
                    e.currentTarget.style.color = "#0f172a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#475569";
                  }
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span>{icon}</span>
                  <span>{name}</span>
                </span>
                {isSelected && (
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#2A774C",
                      fontWeight: 800,
                    }}
                  >
                    ●
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
