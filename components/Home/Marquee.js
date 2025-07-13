import React from "react";

const Marquee = () => {
  const items = [
    "Eat Clean",
    "Stay Fit",
    "Powered by Plants",
    "Mindful Meals",
    "Fresh. Fast. Fit.",
    "No Preservatives",
    "Feel Good Food",
    "Balanced Living",
    "Wholesome Choices",
    "Eat with Purpose",
  ];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
        padding: "20px 0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "marquee 40s linear infinite",
        }}
      >
        {items.map((text, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: "1.1rem",
              color: "#333",
              marginRight: "48px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            {text}
            <img
              src="/assets/img/logo/logo-3.svg"
              alt="star"
              style={{
                height: "16px",
                width: "16px",
                margin: "0 16px",
                opacity: 0.6,
              }}
            />
          </span>
        ))}
        {/* Repeat for continuous loop */}
        {items.map((text, idx) => (
          <span
            key={`repeat-${idx}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 500,
              fontSize: "1.1rem",
              color: "#333",
              marginRight: "48px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            {text}
            <img
              src="/assets/img/logo/logo-3.svg"
              alt="star"
              style={{
                height: "16px",
                width: "16px",
                margin: "0 16px",
                opacity: 0.6,
              }}
            />
          </span>
        ))}
      </div>

      {/* Inline animation style */}
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
