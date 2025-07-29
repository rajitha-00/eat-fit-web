"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/utility/sliderProps";
import { useDispatch } from "react-redux";
// import { useGetMenuItemsQuery } from "@/lib/api/apiSlice";
import { addToCart } from "@/lib/api/cartSlice";

const getRandomItems = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const NextSaleBanner = ({ menuItems = [], isLoading, onAddToCart }) => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (menuItems.length > 0) {
      const filtered = menuItems.filter(
        (item) => item.imageurl && typeof item.webPrice === "number"
      );
      setSelectedItems(getRandomItems(filtered, 3));
    }
  }, [menuItems]);

  const current = selectedItems[activeIndex] || {};

  if (isLoading || selectedItems.length === 0) return null;

  return (
    <section className="today-best-sale fix">
      <div className="today-best-sale-wrapper">
        <div className="row g-0">
          <div className="col-xl-8 col-lg-7">
            <Swiper
              {...sliderProps.todayBestSaleImageSlider}
              className="swiper today-best-sale-image-slider"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // ✅ FIXED
            >
              <div className="array-button">
                <button className="array-next">
                  <i className="far fa-long-arrow-right" />
                </button>
                <button className="array-prev">
                  <i className="far fa-long-arrow-left" />
                </button>
              </div>

              {selectedItems.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="today-best-sale-image bg-cover"
                    style={{
                      backgroundImage: `url("${item.imageurl}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div
              style={{
                flex: "1 1 35%",
                minWidth: "280px",
                height: "100%",
                background: "linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)",
                padding: "3rem 2.5rem",
                boxShadow:
                  "8px 8px 0 rgba(255, 59, 48, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.1)",
                position: "relative",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontWeight: 500,
                backdropFilter: "blur(10px)",
                borderRadius: "0px",
                border: "2px solid #333",
              }}
            >
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  marginBottom: "0.5rem",
                  color: "#ff3b30",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  userSelect: "none",
                  position: "relative",
                  paddingLeft: "12px",
                  borderLeft: "4px solid #ff3b30",
                }}
              >
                Deal Of The Day
              </h4>

              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "3.5rem",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                  background: "linear-gradient(90deg, #fff 0%, #e0e0e0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.1)",
                }}
              >
                {current?.name || "Tasty Meal"}
              </h2>

              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "2rem",
                  color: "#ff3b30",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 500,
                    color: "#999",
                    display: "block",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  SPECIAL PRICE
                </span>
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #ff3b30 0%, #ff8674 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "800",
                  }}
                >
                  Rs. {current.webPrice?.toFixed(0) || "0"}
                </span>
              </h3>

              <p
                style={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#b0b0b0",
                  lineHeight: 1.6,
                  marginBottom: "2.5rem",
                  userSelect: "none",
                  borderLeft: "2px solid #333",
                  paddingLeft: "1rem",
                }}
              >
                {current.description?.slice(0, 250) ||
                  "Enjoy premium flavor crafted for your day."}
              </p>

              <button
                onClick={() => onAddToCart(current)}
                style={{
                  padding: "16px 40px",
                  backgroundColor: "#ff3b30",
                  color: "white",
                  borderRadius: "0",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  alignSelf: "start",
                  boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                  transition: "all 0.2s ease",
                  border: "2px solid #ff3b30",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e53228")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff3b30")
                }
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSaleBanner;
