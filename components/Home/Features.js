"use client";
import React from "react";

function Features({ features }) {
  return (
    <section
      style={{
        backgroundImage: 'url("assets/img/bg-image/bg-shape.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 1.5rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#111",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            justifyContent: "space-between",
          }}
        >
          {features.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 23%",
                minWidth: "260px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,245,245,0.9))",
                borderRadius: "28px",
                padding: "2.5rem 2rem",
                boxShadow:
                  "0 4px 8px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.06)",
                textAlign: "center",
                userSelect: "none",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "default",
                willChange: "transform, box-shadow",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.12), 0 24px 40px rgba(0,0,0,0.15)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0,0,0,0.04), 0 8px 20px rgba(0,0,0,0.06)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  margin: "0 auto 1.8rem",
                  filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.07))",
                  transition: "filter 0.3s ease",
                }}
              >
                <img
                  src={icon}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  marginBottom: "0.8rem",
                  color: "#111",
                  letterSpacing: "0.02em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "1.05rem",
                  color: "#444",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
