"use client";
import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
const page = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <FoodKingLayout header={2} footer={2}>
      <section className=" section-padding">
        <div
          className="product-details-section section-padding"
          style={{
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            padding: "3rem 1.5rem",
            backgroundColor: "#fff",
            color: "#1d1d1f",
            maxWidth: 1100,
            margin: "auto",
          }}
          aria-label="Product details section"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              marginTop: "20px",
            }}
          >
            {/* Left - Image */}
            <div style={{ flex: "1 1 40%", minWidth: 280 }}>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <img
                  src="assets/img/menu/Butter Chicken Bowl.png"
                  alt="Butter Chicken Bowl"
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Right - Details */}
            <div style={{ flex: "1 1 55%", minWidth: 320 }}>
              <h1
                style={{
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                }}
              >
                Butter Chicken Bowl
              </h1>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "#3c3c4399",
                  marginBottom: "1.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                viverra pretium, dolor Numquam odit accusantium odit aut commodi
                et. Nostrum est atque ut dolorum. Et sequi aut atque doloribus
                qui. Iure amet in voluptate reiciendis. Perspiciatis consequatur
                aperiam repellendus velit quia est minima. tellus aliquet nunc
                vitae ultricies erat elit eu lacus.
              </p>

              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#0071e3", // Apple blue accent
                  marginBottom: "2rem",
                }}
              >
                Rs. 1050
              </div>

              {/* Quantity selector & Add to cart */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    htmlFor="quantity"
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      letterSpacing: "1px",
                      color: "#3c3c4399",
                      userSelect: "none",
                    }}
                  >
                    QUANTITY
                  </label>
                  <div
                    style={{
                      display: "flex",
                      border: "1px solid #d2d2d7",
                      borderRadius: 8,
                      overflow: "hidden",
                      width: 120,
                    }}
                  >
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        flex: "0 0 40px",
                        background: "#f5f5f7",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "#0071e3",
                        userSelect: "none",
                        transition: "background 0.2s ease",
                      }}
                      aria-label="Decrease quantity"
                      onMouseDown={(e) =>
                        (e.currentTarget.style.background = "#d2d2d7")
                      }
                      onMouseUp={(e) =>
                        (e.currentTarget.style.background = "#f5f5f7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#f5f5f7")
                      }
                    >
                      −
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => {
                        const val = Math.max(1, Number(e.target.value));
                        if (!isNaN(val)) setQuantity(val);
                      }}
                      style={{
                        flex: "1 1 auto",
                        border: "none",
                        textAlign: "center",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        outline: "none",
                        color: "#1d1d1f",
                      }}
                      inputMode="numeric"
                      aria-label="Quantity input"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{
                        flex: "0 0 40px",
                        background: "#f5f5f7",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "#0071e3",
                        userSelect: "none",
                        transition: "background 0.2s ease",
                      }}
                      aria-label="Increase quantity"
                      onMouseDown={(e) =>
                        (e.currentTarget.style.background = "#d2d2d7")
                      }
                      onMouseUp={(e) =>
                        (e.currentTarget.style.background = "#f5f5f7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#f5f5f7")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  style={{
                    backgroundColor: "#0071e3",
                    color: "#fff",
                    fontWeight: 600,
                    padding: "0.8rem 1.8rem",
                    fontSize: "1rem",
                    borderRadius: 12,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 6px 12px rgba(0, 113, 227, 0.5)",
                    transition: "background-color 0.25s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#005bb5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#0071e3")
                  }
                  aria-label="Add to cart"
                >
                  Add To Cart
                </button>
              </div>

              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#6e6e73",
                  marginBottom: "0.8rem",
                  letterSpacing: "1px",
                }}
              >
                GROUND DELIVERY SURCHARGE:{" "}
                <span style={{ color: "#1d1d1f" }}>Rs. 180.00</span>
              </div>

              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#3c3c4399",
                  marginBottom: "0.2rem",
                }}
              >
                <span style={{ fontWeight: 600, marginRight: 6 }}>
                  Categories:
                </span>
                <Link
                  href="shop-single"
                  style={{ color: "#0071e3", textDecoration: "none" }}
                >
                  Weight Gain
                </Link>
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#3c3c4399",
                }}
              >
                <span style={{ fontWeight: 600, marginRight: 6 }}>Tags:</span>
                <Link
                  href="shop-single"
                  style={{ color: "#0071e3", textDecoration: "none" }}
                >
                  Mains
                </Link>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div style={{ marginTop: "3rem" }}>
            <Tabs
              defaultActiveKey="description"
              id="product-tabs"
              className="mb-4"
              style={{ borderBottom: "1px solid #d2d2d7" }}
            >
              <Tab
                eventKey="description"
                title={
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#1d1d1f",
                      paddingBottom: 10,
                      display: "inline-block",
                    }}
                  >
                    Description
                  </span>
                }
              >
                <div
                  style={{
                    paddingTop: "1.5rem",
                    color: "#3c3c4399",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>
                    Experience is over the world visit
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor Numquam odit accusantium odit aut
                    commodi et. Nostrum est atque ut dolorum. Et sequi aut atque
                    doloribus qui. Iure amet in voluptate reiciendis.
                    Perspiciatis consequatur aperiam repellendus velit quia est
                    minima. tellus aliquet nunc vitae ultricies erat elit eu
                    lacus. Vestibulum non justo consectetur, cursus ante,
                    tincidunt sapien. Nulla quis diam sit amet turpis interdum
                    accumsan quis necenim. Vivamus faucibus ex sed nibh egestas
                    elementum. Mauris et bibendum dui. Aenean consequat pulvinar
                    luctus
                  </p>
                  <h3
                    style={{
                      fontWeight: 700,
                      marginTop: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    More Details
                  </h3>
                  <div style={{ display: "flex", gap: "3rem" }}>
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        color: "#3c3c4399",
                        fontSize: "0.95rem",
                      }}
                    >
                      {[
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        "Lorem Ipsum has been the 's standard dummy text. Lorem Ipsumum is simply dummy text.",
                        "type here your detail one by one li more add",
                        "has been the industry's standard dummy text ever since. Lorem Ips",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "0.8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="#0071e3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: 0,
                        color: "#3c3c4399",
                        fontSize: "0.95rem",
                      }}
                    >
                      {[
                        "Lorem Ipsum generators on the tend to repeat.",
                        "If you are going to use a passage.",
                        "Lorem Ipsum generators on the tend to repeat.",
                        "Lorem Ipsum generators on the tend to repeat.",
                      ].map((item, i) => (
                        <li
                          key={i}
                          style={{
                            marginBottom: "0.8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="#0071e3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};
export default page;
