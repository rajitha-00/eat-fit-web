"use client";
import React from "react";

export const CeoMessage = () => {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#1c1c1e",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {/* Image Section */}
          <div
            style={{
              flex: "1 1 40%",
              minWidth: "320px",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow:
                "0 12px 30px rgba(0,0,0,0.12), 0 20px 40px rgba(0,0,0,0.08)",
              position: "relative",
              height: "400px",
              backgroundImage: 'url("assets/img/client/04.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Subtle shape overlay */}
            <img
              src="assets/img/client/shape-img.png"
              alt="shape overlay"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "140px",
                opacity: 0.25,
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          </div>

          {/* Text Content */}
          <div
            style={{
              flex: "1 1 55%",
              minWidth: "320px",
            }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: "1.5rem",
                marginBottom: "0.6rem",
                color: "#0071e3", // Apple-blue accent color
                letterSpacing: "0.03em",
              }}
            >
              Learn Something EAT FIT
            </h4>
            <h3
              style={{
                fontWeight: 400,
                fontSize: "1.2rem",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                color: "#3a3a3c",
              }}
            >
              Where flavor and wellness unite. Located in Colombo, our menu of
              vibrant salads, grain bowls, wraps, and smoothies nourishes your
              body and delights your palate. Join us to discover the power of
              real food eat well, feel great, and learn something new with every
              bite.
            </h3>

            {/* CEO Info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundImage: 'url("assets/img/client/05.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  flexShrink: 0,
                }}
              />
              <div>
                <h4
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    margin: 0,
                    color: "#1c1c1e",
                  }}
                >
                  Sunethya Nandajeewa{" "}
                  <span
                    style={{
                      fontWeight: 400,
                      color: "#6e6e73",
                      fontSize: "1rem",
                    }}
                  >
                    / CEO &amp; Founder
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
