"use client";
import Cta from "@/components/Cta";
import { icons, products } from "@/components/Home/FoodCategoryHome";
import PageBanner from "@/components/PageBanner";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (prod) => {
    setCart((prev) => [...prev, prod]);
    // You can show a toast/snackbar here if you want
    alert(`${prod.title} added to cart!`);
  };

  return (
    <FoodKingLayout header={2} footer={2}>
      <section className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <ProductSidebar />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <ProductTopBar />
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
              {/* Pagination */}
              <div className="page-nav-wrap mt-5 text-center">
                <ul>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </a>
                  </li>
                  {[1, 2, 3, 4].map((num) => (
                    <li key={num}>
                      <a className="page-numbers" href="#">
                        {num}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default Page;
