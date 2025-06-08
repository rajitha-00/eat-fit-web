"use client";
import Cta from "@/components/Cta";
import { products } from "@/components/Home/FoodCategoryHome";
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
    <FoodKingLayout>
      <PageBanner pageName={"Shop Left Sidebar"} />
      <section className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <ProductSidebar />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <ProductTopBar />
              <div className="row">
                {products.map((prod, idx) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6"
                    key={prod.title + idx}
                  >
                    <div className="catagory-product-card shadow-style text-center">
                      <div className="icon">
                        <Link href="/shop-cart">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                      <div className="catagory-product-image">
                        <img
                          src={prod.img}
                          alt={prod.title}
                          style={{
                            width: "100%",
                            maxHeight: "180px",
                            objectFit: "contain",
                            background: "#fafafa",
                          }}
                        />
                      </div>
                      <div className="catagory-product-content">
                        <div className="catagory-button">
                          <button
                            className="theme-btn-2"
                            onClick={() => handleAddToCart(prod)}
                          >
                            <i className="far fa-shopping-basket" />
                            Add To Cart
                          </button>
                        </div>
                        <div className="info-price d-flex align-items-center justify-content-center">
                          {prod.discount && <p>{prod.discount}</p>}
                          <h6 style={{ color: "#43a047", margin: "0 4px" }}>
                            Rs {prod.price}
                          </h6>
                          {prod.oldPrice && (
                            <span
                              style={{
                                color: "#888",
                                textDecoration: "line-through",
                              }}
                            >
                              Rs {prod.oldPrice}
                            </span>
                          )}
                        </div>
                        <h4>
                          <Link href={`/${prod.titleHref}`}>{prod.title}</Link>
                        </h4>
                        <div className="star">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < Math.round(prod.rating)
                                  ? "fas fa-star"
                                  : "far fa-star"
                              }
                            />
                          ))}
                        </div>
                        <div style={{ fontSize: 12, color: "#888" }}>
                          {prod.ratingCount} ratings
                        </div>
                      </div>
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
