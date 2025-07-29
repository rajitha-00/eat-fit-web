import React from "react";

const Marquee = () => {
  const items = [
    { text: "Eat Clean", icon: "🌱" },
    { text: "Stay Fit", icon: "💪" },
    { text: "Powered by Plants", icon: "🥗" },
    { text: "Mindful Meals", icon: "🧘" },
    { text: "Fresh. Fast. Fit.", icon: "⚡" },
    { text: "No Preservatives", icon: "✨" },
    { text: "Feel Good Food", icon: "🌟" },
    { text: "Balanced Living", icon: "⚖️" },
    { text: "Wholesome Choices", icon: "🎯" },
    { text: "Eat with Purpose", icon: "🎨" },
  ];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "linear-gradient(to right, #f0faf6, #ffffff, #f0faf6)",
        padding: "24px 0",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        borderTop: "1px solid rgba(42, 119, 76, 0.1)",
        borderBottom: "1px solid rgba(42, 119, 76, 0.1)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "marquee 50s linear infinite",
          willChange: "transform",
        }}
      >
        {items.map(({ text, icon }, idx) => (
          <span
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 600,
              fontSize: "1.2rem",
              color: "#2A774C",
              marginRight: "64px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "20px",
              boxShadow: "0 2px 10px rgba(42, 119, 76, 0.1)",
              backdropFilter: "blur(5px)",
              background: "rgba(255, 255, 255, 0.9)",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ marginRight: "12px", fontSize: "1.3rem" }}>
              {icon}
            </span>
            {text}
            <div
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                margin: "0 0 0 12px",
                background: "#2A774C",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
          </span>
        ))}
        {/* Repeat for continuous loop */}
        {items.map(({ text, icon }, idx) => (
          <span
            key={`repeat-${idx}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontWeight: 600,
              fontSize: "1.2rem",
              color: "#2A774C",
              marginRight: "64px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              padding: "8px 16px",
              borderRadius: "20px",
              boxShadow: "0 2px 10px rgba(42, 119, 76, 0.1)",
              backdropFilter: "blur(5px)",
              background: "rgba(255, 255, 255, 0.9)",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ marginRight: "12px", fontSize: "1.3rem" }}>
              {icon}
            </span>
            {text}
            <div
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                margin: "0 0 0 12px",
                background: "#2A774C",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
          </span>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "150px",
          height: "100%",
          background: "linear-gradient(to right, #f0faf6 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "150px",
          height: "100%",
          background: "linear-gradient(to left, #f0faf6 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
      {/* Inline animation style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .marquee {
              animation-duration: 80s;
            }
          }

          span {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
          
          span:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(42, 119, 76, 0.2);
            background: rgba(255, 255, 255, 1);
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
