"use client";
import React from "react";

const ProductTopBar = ({
  search,
  onSearchChange,
  sortOrder,
  onSortChange,
  total,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
        padding: "16px 20px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
        fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
      }}
    >
      {/* Result Counter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "15px",
          fontWeight: 600,
          color: "#475569",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e8f5ee",
            color: "#2A774C",
            fontWeight: 800,
            fontSize: "14px",
            padding: "4px 10px",
            borderRadius: "999px",
          }}
        >
          {total}
        </span>
        <span>
          {total === 1 ? "dish available" : "dishes available"}
        </span>
      </div>

      {/* Controls: Search & Sort */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          flex: "1 1 auto",
          justifyContent: "flex-end",
        }}
      >
        {/* Search Input */}
        <div
          style={{
            position: "relative",
            minWidth: "220px",
            maxWidth: "320px",
            flex: "1 1 auto",
          }}
        >
          <i
            className="far fa-search"
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94a3b8",
              fontSize: "14px",
              pointerEvents: "none",
            }}
          ></i>
          <input
            type="search"
            placeholder="Search healthy meals..."
            value={search}
            onChange={onSearchChange}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "10px 36px 10px 38px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "12px",
              border: "1.5px solid #e2e8f0",
              outline: "none",
              backgroundColor: "#f8fafc",
              color: "#0f172a",
              transition: "all 0.25s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#2A774C";
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.boxShadow =
                "0 0 0 3px rgba(42, 119, 76, 0.12)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.backgroundColor = "#f8fafc";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          {search && (
            <button
              onClick={() => onSearchChange({ target: { value: "" } })}
              aria-label="Clear search"
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                padding: "2px",
                fontSize: "13px",
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Sort Button */}
        <button
          onClick={onSortChange}
          type="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#f8fafc",
            border: "1.5px solid #e2e8f0",
            color: "#1e293b",
            borderRadius: "12px",
            padding: "10px 16px",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: "14px",
            userSelect: "none",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e8f5ee";
            e.currentTarget.style.borderColor = "#2A774C";
            e.currentTarget.style.color = "#2A774C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f8fafc";
            e.currentTarget.style.borderColor = "#e2e8f0";
            e.currentTarget.style.color = "#1e293b";
          }}
          aria-label="Toggle price sort"
        >
          <i
            className={`far fa-sort-amount-${
              sortOrder === "asc" ? "up" : "down"
            }`}
            style={{ color: "#2A774C" }}
          ></i>
          <span>
            Price: {sortOrder === "asc" ? "Low → High" : "High → Low"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductTopBar;
