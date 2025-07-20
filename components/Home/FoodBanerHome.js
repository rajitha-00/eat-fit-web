"use client";

import React, { useMemo } from "react";

const TARGET_ITEMS = [
  "Mexican Beef Bowl",
  "Butter Chicken Bowl",
  "Beef & Veggie Omelet",
];

const FoodBannerHome = ({ menuItems = [], isLoading, onAddToCart }) => {
  const bannerItems = useMemo(() => {
    const targetLower = TARGET_ITEMS.map((x) => x.toLowerCase());
    return menuItems
      .filter(
        (item) =>
          item.name &&
          targetLower.includes(item.name.toLowerCase().trim()) &&
          typeof item.webPrice === "number"
      )
      .map((item) => ({
        id: item._id,
        bgImage: item.imageurl || "/assets/img/hero/default-pizza.png",
        priceBg: "/assets/img/vector-2.png",
        price: item.webPrice.toFixed(0),
        startPrice: item.uberPrice ? item.uberPrice.toFixed(0) : "",
        titleLines: item.name.split(" "),
        item, // full item reference
      }));
  }, [menuItems]);

  if (isLoading) return null;

  return (
    <section className="food-banner fix">
      <div className="row g-3">
        {bannerItems.map((item) => (
          <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="food-banner-items-2 bg-cover"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div
                className="price"
                style={{
                  backgroundColor: "#fde6e3ff", // rich red color
                  padding: "1rem",
                  borderRadius: "800px",
                  display: "inline-block",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                <span>{item.price}</span>
              </div>

              <div className="food-content">
                <div className="overlay" />

                <div className="content">
                  {item.startPrice && (
                    <h4 className="text-white">Was Rs. {item.startPrice}</h4>
                  )}
                  <h2 className="text-white">
                    {item.titleLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.titleLines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h2>

                  <button
                    className="theme-btn border-radius-none mt-4"
                    onClick={() => onAddToCart(item.item)}
                  >
                    <span className="button-content-wrapper d-flex align-items-center">
                      <span className="button-icon">
                        <i className="flaticon-delivery" />
                      </span>
                      <span className="button-text">Order Now</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          pointer-events: none;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0)
          );
          border-radius: inherit;
          z-index: 0;
        }
        .content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default FoodBannerHome;
