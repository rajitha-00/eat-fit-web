"use client";

import Link from "next/link";
import FoodKingLayout from "@/layouts/FoodKingLayout";

export default function NotFound() {
  return (
    <FoodKingLayout header={2} footer={2}>
      <section
        style={{
          background: "#f8f9fa",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "500px",
              margin: "0 auto",
              background: "#ffffff",
              padding: "3rem 2rem",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <h1
              style={{
                fontSize: "6rem",
                fontWeight: "700",
                color: "#106411",
                margin: "0 0 1rem 0",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1",
              }}
            >
              404
            </h1>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "#106411",
                margin: "0 auto 2rem",
                borderRadius: "2px",
              }}
            />
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "600",
                color: "#2d3436",
                marginBottom: "1rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Page Not Found
            </h2>
            <p
              style={{
                color: "#636e72",
                fontSize: "1.1rem",
                marginBottom: "2rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.6",
              }}
            >
              The page you are looking for doesn't exist or has been moved.
            </p>

            <Link
              href="/"
              style={{
                display: "inline-block",
                background: "#106411",
                color: "white",
                padding: "1rem 2.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1rem",
                fontFamily: "'Poppins', sans-serif",
                border: "none",
                boxShadow: "0 4px 15px rgba(16, 100, 17, 0.2)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(16, 100, 17, 0.3)";
                e.currentTarget.style.background = "#0b520d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(16, 100, 17, 0.2)";
                e.currentTarget.style.background = "#106411";
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
}
