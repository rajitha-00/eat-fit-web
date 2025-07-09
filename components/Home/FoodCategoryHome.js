"use client";
import React from "react";
import Link from "next/link";

export const products = [
  {
    title: "Chicken Pasta",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1050",
    img: "assets/img/menu/Chicken Pasta.png",
    delay: ".3s",
  },
  {
    title: "Beef Pasta",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(4k)",
    price: "1200",
    img: "assets/img/menu/Beef Pasta.png",
    delay: ".5s",
  },
  {
    title: "Chicken Rice Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1200",
    img: "assets/img/menu/Chicken Rice Bowl.png",
    delay: ".7s",
  },
  {
    title: "Beef Rice Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1350",
    img: "assets/img/menu/Beef Rice Bowl.png",
    delay: ".9s",
  },
  {
    title: "Minced Beef Rice Bowl",
    titleHref: "#",
    useAnchor: true,
    ratingCount: "(5k)",
    price: "1270",
    img: "assets/img/menu/Minced Beef Rice Bowl.png",
    delay: ".3s",
  },
  {
    title: "Chicken Teriyaki Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(4k)",
    price: "1000",
    img: "assets/img/menu/Chicken Teriyaki Bowl.png",
    delay: ".5s",
  },
  {
    title: "Butter Chicken Bowl",
    titleHref: "#",
    useAnchor: true,
    ratingCount: "(5k)",
    price: "1050",
    img: "assets/img/menu/Butter Chicken Bowl.png",
    delay: ".7s",
  },
  {
    title: "Chicken Burger Bowl",
    titleHref: "shop-single",
    useAnchor: false,
    ratingCount: "(5k)",
    price: "1120",
    img: "assets/img/menu/Chicken Burger Bowl.png",
    delay: ".9s",
  },
];

export const icons = [
  {
    href: "/shop-cart",
    iconClass: "far fa-shopping-cart",
    btnClass: "theme-btn cart-btn",
    label: "Add to Cart",
  },
  { href: "/shop-single", iconClass: "far fa-eye" },
];

const FoodCategoryHome = () => (
  <section
    style={{
      padding: "60px 0",
      backgroundColor: "#fefefe",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    }}
  >
    <div
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "1rem",
            color: "#999",
            marginBottom: "8px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Best Selling Dishes
        </p>
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 600,
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Explore Our Products
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px",
        }}
      >
        {products.map((prod, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Product Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "220px",
                }}
              >
                <img
                  src={prod.img}
                  alt={prod.title}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50px",
                }}
              >
                <ul
                  style={{
                    position: "relative",
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  {icons.map((ic, j) => (
                    <li key={j}>
                      <Link
                        href={ic.href}
                        style={{
                          backgroundColor: "#ffffffcc",
                          backdropFilter: "blur(4px)",
                          borderRadius: "999px",
                          padding: "10px 10px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#333",
                          fontSize: "1rem",
                          textDecoration: "none",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                      >
                        <i className={ic.iconClass}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Content */}
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  margin: "0 0 6px",
                  color: "#222",
                }}
              >
                {prod.useAnchor ? (
                  <a
                    href={prod.titleHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#222", textDecoration: "none" }}
                  >
                    {prod.title}
                  </a>
                ) : (
                  <Link
                    href={`/${prod.titleHref}`}
                    style={{ color: "#222", textDecoration: "none" }}
                  >
                    {prod.title}
                  </Link>
                )}
              </h4>
              <h5 style={{ color: "#666", fontWeight: 500, margin: 0 }}>
                Rs. {prod.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoodCategoryHome;
