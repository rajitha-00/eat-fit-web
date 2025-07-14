"use client";
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
        gap: 16,
        padding: "12px 16px",
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <div style={{ fontSize: 16, fontWeight: 600, color: "#1d1d1f" }}>
        Showing <span style={{ color: "#429c5a" }}>{total}</span> result
        {total !== 1 ? "s" : ""}
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="search"
          placeholder="Search meals..."
          value={search}
          onChange={onSearchChange}
          style={{
            padding: "8px 12px",
            fontSize: 16,
            borderRadius: 10,
            border: "1px solid #d2d2d7",
            outlineOffset: 2,
            outlineColor: "#429c5a",
            transition: "border-color 0.3s ease",
            width: 220,
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#429c5a")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#d2d2d7")}
        />

        <button
          onClick={onSortChange}
          style={{
            backgroundColor: "transparent",
            border: "1.5px solid #429c5a",
            color: "#429c5a",
            borderRadius: 10,
            padding: "8px 16px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 16,
            userSelect: "none",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            transition: "background-color 0.25s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#429c5a")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
          onFocus={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,122,255,0.5)")
          }
          onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          aria-label="Toggle sort order"
        >
          Sort: {sortOrder === "asc" ? "Low → High" : "High → Low"}
        </button>
      </div>
    </div>
  );
};

export default ProductTopBar;
