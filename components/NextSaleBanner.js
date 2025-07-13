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

export const NextSaleBanner = ({ menuItems = [], isLoading }) => {
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
                background:
                  "linear-gradient(135deg, rgba(255 255 255 / 0.85), rgba(255 255 255 / 0.7))",
                padding: "2.5rem 2rem",
                boxShadow: "0 12px 24px rgb(0 0 0 / 0.1)",
                position: "relative",
                color: "#111",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontWeight: 500,
              }}
            >
              <h4
                style={{
                  fontWeight: 600,
                  fontSize: "2rem",
                  marginBottom: "0.5rem",
                  color: "#666",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  userSelect: "none",
                }}
              >
                Deal Of The Day
              </h4>

              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "3rem",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
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
                <span style={{ fontWeight: 400, color: "#444" }}>
                  special price{" "}
                </span>
                Rs. {current.webPrice?.toFixed(0) || "0"}
              </h3>

              <p
                style={{
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#555",
                  lineHeight: 1.5,
                  marginBottom: "2rem",
                  userSelect: "none",
                }}
              >
                {current.description?.slice(0, 250) ||
                  "Enjoy premium flavor crafted for your day."}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...current,
                      quantity: 1,
                      selectedAddons: [],
                      uniqueKey: `${current._id}-${current.webPrice}`,
                    })
                  )
                }
                style={{
                  padding: "12px 32px",
                  backgroundColor: "#ff3b30",
                  color: "white",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  alignSelf: "start",
                  boxShadow: "0 4px 12px rgb(255 59 48 / 0.4)",
                  transition: "background-color 0.3s ease",
                  border: "none",
                  cursor: "pointer",
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
