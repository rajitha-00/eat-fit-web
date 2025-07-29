"use client";
import React from "react";
import { Salad, UtensilsCrossed, Clock, LeafyGreen } from "lucide-react";

const features = [
  {
    Icon: UtensilsCrossed,
    title: "Culinary Excellence",
    desc: "Our master chefs craft each dish with precision, using premium ingredients to create extraordinary flavors.",
    color: "#2A774C",
  },
  {
    Icon: Clock,
    title: "Express Delivery",
    desc: "Fresh and hot meals delivered to your doorstep within 30 minutes of preparation.",
    color: "#2A774C",
  },
  {
    Icon: Salad,
    title: "Balanced Nutrition",
    desc: "Every meal is carefully portioned and nutritionally balanced for your fitness goals.",
    color: "#2A774C",
  },
  {
    Icon: LeafyGreen,
    title: "Fresh Ingredients",
    desc: "We source the freshest, highest-quality ingredients for maximum nutrition and taste.",
    color: "#2A774C",
  },
];

function Features() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f8faf9 0%, #e8f5ee 100%)",
        padding: "7rem 1.5rem",
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(42, 119, 76, 0.03) 0%, transparent 70%),
          radial-gradient(circle at 80% 70%, rgba(42, 119, 76, 0.03) 0%, transparent 70%),
          linear-gradient(135deg, #f8faf9 0%, #e8f5ee 100%)
        `,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#111",
        position: "relative",
        overflow: "hidden",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(42,119,76,0.1) 0%, rgba(42,119,76,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(42,119,76,0.1) 0%, rgba(42,119,76,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #1B5C3B 0%, #2A774C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              position: "relative",
              display: "inline-block",
              textShadow: "0 2px 10px rgba(42, 119, 76, 0.1)",
            }}
          >
            Why Choose EAT FIT
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "4px",
                background: "#2A774C",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(42, 119, 76, 0.2)",
                animation: "gradientSlide 3s ease-in-out infinite",
              }}
            />
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#555",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Discover the perfect blend of taste, nutrition, and convenience
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            justifyContent: "space-between",
          }}
        >
          {features.map(({ Icon, title, desc, color }, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 23%",
                minWidth: "260px",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "28px",
                padding: "2.5rem 2rem",
                boxShadow:
                  "0 4px 20px rgba(42, 119, 76, 0.1), 0 8px 16px rgba(42, 119, 76, 0.06)",
                textAlign: "center",
                userSelect: "none",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "default",
                willChange: "transform, box-shadow",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(42, 119, 76, 0.18), 0 15px 30px rgba(42, 119, 76, 0.12)";
                e.currentTarget.style.backgroundColor = "#ffffff";
                const iconContainer = e.currentTarget.querySelector("div");
                iconContainer.style.background =
                  "linear-gradient(145deg, #2A774C 0%, #1B5C3B 100%)";
                iconContainer.style.transform = "scale(1.1) rotate(8deg)";
                iconContainer.style.boxShadow =
                  "0 8px 32px rgba(42, 119, 76, 0.25)";
                iconContainer.style.border =
                  "2px solid rgba(255, 255, 255, 0.1)";
                const icon = e.currentTarget.querySelector("svg");
                icon.style.color = "#ffffff";
                icon.style.filter =
                  "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))";
                icon.style.transform = "scale(1.2)";
                icon.style.stroke = "#ffffff";
                icon.style.strokeWidth = "1.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(42, 119, 76, 0.1), 0 8px 16px rgba(42, 119, 76, 0.06)";
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.95)";
                const iconContainer = e.currentTarget.querySelector("div");
                iconContainer.style.background =
                  "linear-gradient(45deg, #E8F5EE 30%, #f0f9f4 100%)";
                iconContainer.style.transform = "scale(1) rotate(0deg)";
                iconContainer.style.boxShadow = "none";
                iconContainer.style.border = "2px solid rgba(42, 119, 76, 0.1)";
                const icon = e.currentTarget.querySelector("svg");
                icon.style.color = "#2A774C";
                icon.style.transform = "scale(1)";
                icon.style.filter = "none";
                icon.style.stroke = "#2A774C";
                icon.style.strokeWidth = "1.5";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 1.8rem",
                  background:
                    "linear-gradient(45deg, #E8F5EE 30%, #f0f9f4 100%)",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "2px solid rgba(42, 119, 76, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                  animation: "iconFloat 3s ease-in-out infinite",
                  boxShadow: "inset 0 2px 4px rgba(42, 119, 76, 0.05)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
                    backgroundSize: "200% 100%",
                    opacity: 0,
                    transition: "all 0.5s ease",
                    animation: "shine 2s infinite linear",
                    transform: "skewX(-15deg)",
                  }}
                />
                <Icon
                  size={40}
                  color={color}
                  strokeWidth={1.5}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
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
      <style jsx global>{`
        @keyframes gradientSlide {
          0%,
          100% {
            width: 60%;
            opacity: 0.7;
          }
          50% {
            width: 80%;
            opacity: 1;
          }
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shine {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Features;
