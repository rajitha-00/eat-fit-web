"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const saleImages = [
  "/assets/img/banner/best-sale.jpg",
  "/assets/img/banner/best-sale.jpg",
  "/assets/img/banner/best-sale.jpg",
];

const contentShapes = [
  { className: "burger-shape", src: "/assets/img/shape/fry-shape-4.png" },
  { className: "fry-shape", src: "/assets/img/shape/burger-shape-4.png" },
];

export const NextSaleBanner = () => (
  <section className="today-best-sale fix">
    <div className="today-best-sale-wrapper">
      <div className="row g-0">
        <div className="col-xl-8 col-lg-7">
          <Swiper
            {...sliderProps.todayBestSaleImageSlider}
            className="swiper today-best-sale-image-slider"
          >
            <div className="array-button">
              <button className="array-next">
                <i className="far fa-long-arrow-right" />
              </button>
              <button className="array-prev">
                <i className="far fa-long-arrow-left" />
              </button>
            </div>

            {saleImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="today-best-sale-image bg-cover"
                  style={{ backgroundImage: `url("${src}")` }}
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
            {/* Shapes */}

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
                fontSize: "4rem",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              TODAY'S the Beef Burge' DAY
            </h2>
            <h3
              style={{
                fontWeight: 600,
                fontSize: "2rem",
                color: "#ff3b30", // Apple-style red accent
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontWeight: 400, color: "#444" }}>
                special price{" "}
              </span>
              Rs. 1100
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
              Savor the perfect symphony of flavors — it&apos;s the perfect
              dining experience where efficiency meets culinary excellence.
            </p>
            <Link
              href="/shop-single"
              style={{
                padding: "12px 32px",
                backgroundColor: "#ff3b30",
                color: "white",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1rem",
                alignSelf: "start",
                boxShadow: "0 4px 12px rgb(255 59 48 / 0.4)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e53228")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff3b30")
              }
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NextSaleBanner;
